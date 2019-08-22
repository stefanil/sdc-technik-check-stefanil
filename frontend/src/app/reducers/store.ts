import {combineReducers} from "redux";
import {i18nState} from "redux-i18n";
import {id} from "./idReducer";
import {power} from "./powerReducer";
import {consumption} from "./consumptionReducer";


export const appState = combineReducers({
    i18nState,
    machine: combineReducers({
        id,
        power,
        consumption,
    }),
});
