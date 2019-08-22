import {ChangePowerAction, setPowerAction} from "../actions/powerActions";
import {call, put} from "redux-saga/effects";
import {queryPowerMeasurements} from "../../influx/influx";
import {State} from "../state/State";
import PowerMeasurement = State.PowerMeasurement;

export function* changePower(action: ChangePowerAction) {
    const {rows, error} = yield call(queryPowerMeasurements, action.payload.id,
        (rows: (PowerMeasurement & { id: string; state: number; })[]) => rows);

    const last = rows[rows.length - 1];
    const powerMeasurements = rows.map(row => ({
        time: row.time,
        value: row.value,
    }));

    yield put(setPowerAction({
        value: last.value,
        state: last.state,
        powerMeasurements: powerMeasurements,
    }));
}
