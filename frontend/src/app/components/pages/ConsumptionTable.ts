import {connect} from "react-redux";
import ConsumptionTableComponent, {ConsumptionTableDispatch, ConsumptionTableProps} from "./ConsumptionTableComponent";
import {State} from "../../state/State";

const sum = (auc1, auc2) => auc1 + auc2;

const cumulateConsumtion = (consumption: State.Consumption, state: number = 0): number => consumption &&
    consumption.stateTransitions.filter(st => st.state === state)
        .map(st => st.auc)
        .reduce(sum, 0);

const mapStateToProps = (state: State.All): ConsumptionTableProps => {
    const consumption: State.Consumption = state.machine && state.machine.consumption;
    const values = [1, 2, 3, 4, 5, 6].map(state => cumulateConsumtion(consumption, state));
    const total = values.reduce(sum, 0);

    return {
        values: values,
        total: total,
    };
};

export const mapDispatchToProps = (dispatch, ownProps): ConsumptionTableDispatch => {
    return {};
};

export const ConsumptionTable = connect(mapStateToProps, mapDispatchToProps)(ConsumptionTableComponent);
