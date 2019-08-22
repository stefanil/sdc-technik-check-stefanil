import {SetIdAction} from "../actions/idActions";

export const id = (state: string = "", action: SetIdAction): string => {
    switch (action.type) {
        case "@@sdc/SET_ID":
            return action.payload.id;
        default:
            return state;
    }
};
