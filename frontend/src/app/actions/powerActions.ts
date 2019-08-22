import {State} from "../state/State";

export interface SetPowerAction {
    type: "@@sdc/SET_POWER_ACTION";
    payload: {
        power: State.Power;
    };
}

export const setPowerAction = (power: State.Power): SetPowerAction => {
    return {
        type: "@@sdc/SET_POWER_ACTION",
        payload: {
            power,
        },
    };
};

export interface ChangePowerAction {
    type: "@@sdc/CHANGE_POWER_ACTION";
    payload: {
        id: string;
    };
}

export const changePowerAction = (id: string): ChangePowerAction => {
    return {
        type: "@@sdc/CHANGE_POWER_ACTION",
        payload: {
            id,
        },
    };
};
