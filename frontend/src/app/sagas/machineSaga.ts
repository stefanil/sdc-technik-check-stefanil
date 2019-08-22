import {call, put, select} from "redux-saga/effects";
import {ChangeMachineAction} from "../actions/machineActions";
import {setIdAction} from "../actions/idActions";
import {changePowerAction} from "../actions/powerActions";
import {changeConsumptionAction} from "../actions/consumptionActions";
import {delay} from "redux-saga";
import {changePower} from "./powerSaga";
import {State} from "../state/State";
import {changeConsumption} from "./consumptionSaga";

export function* changeMachine(action: ChangeMachineAction) {
    yield put(setIdAction(action.payload.id));
    yield put(changePowerAction(action.payload.id));
    yield put(changeConsumptionAction());
}

export function* reload() {
    while (true) {
        const id: string = yield select((state: State.All) => state.machine.id) || 'm-0';

        yield* changePower(changePowerAction(id));
        yield* changeConsumption();
        yield delay(5000);
    }
}
