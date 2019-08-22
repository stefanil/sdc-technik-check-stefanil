import {all, takeLatest} from "redux-saga/effects";
import {changeMachine, reload} from "./machineSaga";
import {changePower} from "./powerSaga";
import {changeConsumption, changeDateFrom, changeDateTo} from "./consumptionSaga";

export function* rootSaga() {
    yield all([
        takeLatest("@@sdc/CHANGE_MACHINE_ACTION", changeMachine),
        takeLatest("@@sdc/CHANGE_POWER_ACTION", changePower),
        takeLatest("@@sdc/CHANGE_POWER_ACTION", changeConsumption),
        takeLatest("@@sdc/CHANGE_DATE_FROM_ACTION", changeDateFrom),
        takeLatest("@@sdc/CHANGE_DATE_TO_ACTION", changeDateTo),
        takeLatest("@@sdc/RELOAD_ACTION", reload),
    ]);
}
