import {State} from "../state/State";
import Consumption = State.Consumption;

export interface GetConsumptionAction {
    type: "@@sdc/GET_CONSUMPTION_ACTION";
    payload: {
        consumption: Consumption;
    };
}

export const getConsumptionAction = (consumption: Consumption): GetConsumptionAction => {
    return {
        type: "@@sdc/GET_CONSUMPTION_ACTION",
        payload: {
            consumption,
        },
    };
};

export interface SetDateFromAction {
    type: "@@sdc/SET_DATE_FROM_ACTION";
    payload: {
        date: string;
    };
}

export const setDateFromAction = (date: string): SetDateFromAction => {
    return {
        type: "@@sdc/SET_DATE_FROM_ACTION",
        payload: {
            date,
        },
    };
};

export interface SetDateToAction {
    type: "@@sdc/SET_DATE_TO_ACTION";
    payload: {
        date: string;
    };
}

export const setDateToAction = (date: string): SetDateToAction => {
    return {
        type: "@@sdc/SET_DATE_TO_ACTION",
        payload: {
            date,
        },
    };
};

export interface ChangeDateFromAction {
    type: "@@sdc/CHANGE_DATE_FROM_ACTION";
    payload: {
        date: string;
    };
}

export const changeDateFromAction = (date: string): ChangeDateFromAction => {
    return {
        type: "@@sdc/CHANGE_DATE_FROM_ACTION",
        payload: {
            date,
        },
    };
};

export interface ChangeDateToAction {
    type: "@@sdc/CHANGE_DATE_TO_ACTION";
    payload: {
        date: string;
    };
}

export const changeDateToAction = (date: string): ChangeDateToAction => {
    return {
        type: "@@sdc/CHANGE_DATE_TO_ACTION",
        payload: {
            date,
        },
    };
};

export interface ChangeConsumptionAction {
    type: "@@sdc/CHANGE_CONSUMPTION_ACTION";
}

export const changeConsumptionAction = (): ChangeConsumptionAction => {
    return {
        type: "@@sdc/CHANGE_CONSUMPTION_ACTION",
    };
};
