import {connect} from "react-redux";
import ConsumptionPieComponent, {ConsumptionPieDispatch, ConsumptionPieProps} from "./ConsumptionPieComponent";
import {State} from "../../state/State";

const sum = (s1, s2) => s1 + s2;

const cumulateConsumtion = (consumption: State.Consumption, state: number = 0): number => consumption &&
    consumption.stateTransitions.filter(st => st.state === state)
        .map(st => st.auc)
        .reduce(sum, 0);

const mapStateToProps = (state: State.All): ConsumptionPieProps => {
    const consumption: State.Consumption = state.machine && state.machine.consumption;
    const absConsumptions = [1, 2, 3, 4, 5, 6].map(state => cumulateConsumtion(consumption, state));
    const totalConsumption = absConsumptions.reduce(sum, 0);
    const relConsumptions = absConsumptions.map(c => c * 100 / totalConsumption);

    return {
        values: relConsumptions,
    };
};

export const mapDispatchToProps = (dispatch, ownProps): ConsumptionPieDispatch => {
    return {};
};

export const ConsumptionPie = connect(mapStateToProps, mapDispatchToProps)(ConsumptionPieComponent);
