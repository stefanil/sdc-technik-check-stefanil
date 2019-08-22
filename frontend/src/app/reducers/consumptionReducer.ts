import {State} from "../state/State";
import {GetConsumptionAction, SetDateFromAction, SetDateToAction} from "../actions/consumptionActions";

export const consumption = (state: State.Consumption = {
    from: undefined,
    to: undefined,
    stateTransitions: [],
}, action: SetDateFromAction | SetDateToAction | GetConsumptionAction): State.Consumption => {
    switch (action.type) {
        case "@@sdc/SET_DATE_FROM_ACTION":
            return {
                ...state,
                from: action.payload.date,
            };
        case "@@sdc/SET_DATE_TO_ACTION":
            return {
                ...state,
                to: action.payload.date,
            };
        case "@@sdc/GET_CONSUMPTION_ACTION":
            return action.payload.consumption;
        default:
            return state;
    }
};
