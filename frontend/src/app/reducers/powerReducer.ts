import {State} from "../state/State";
import {SetPowerAction} from "../actions/powerActions";

export const power = (state: State.Power = {
    value: 0,
    state: 0,
    powerMeasurements: [],
}, action: SetPowerAction): State.Power => {
    switch (action.type) {
        case "@@sdc/SET_POWER_ACTION":
            return action.payload.power;
        default:
            return state;
    }
};
