import {
    ChangeDateFromAction,
    ChangeDateToAction,
    getConsumptionAction,
    setDateFromAction, setDateToAction
} from "../actions/consumptionActions";
import {call, put, select} from "redux-saga/effects";
import {State} from "../state/State";
import {now} from "moment";
import {queryStateTransitions} from "../../influx/influx";

export function* changeDateFrom(action: ChangeDateFromAction) {
    yield put(setDateFromAction(action.payload.date));
    yield* changeConsumption();
}

export function* changeDateTo(action: ChangeDateToAction) {
    yield put(setDateToAction(action.payload.date));
    yield* changeConsumption();
}

export function* changeConsumption() {
    const id: string = yield select((state: State.All) => state.machine.id) || 'm-0';
    const from: string = yield select((state: State.All) => state.machine.consumption.from) || now();
    const to: string = yield select((state: State.All) => state.machine.consumption.to) || now();

    const {rows, error} = yield call(queryStateTransitions, id, from, to);

    if (rows) {
        yield put(getConsumptionAction({
            from,
            to,
            stateTransitions: rows.map(row => ({
                previousState: row.state_1,
                state: row.state,
                auc: row.auc,
            })),
        }));
    }
}
