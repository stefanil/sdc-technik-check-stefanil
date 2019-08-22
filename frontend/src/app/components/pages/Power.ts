import {connect} from "react-redux";
import PowerComponent, {PowerDispatch, PowerProps} from "./PowerComponent";
import {State} from "../../state/State";


const mapStateToProps = (state: State.All): PowerProps => {
    const power: State.Power = state.machine && state.machine.power;
    const trimTime = (time: string) => time.toString().slice(0, time.toString().indexOf("GMT"));

    return {
        state: power.state,
        value: power.value,
        labels: power.powerMeasurements.map((pm: State.PowerMeasurement) => trimTime(pm.time)),
        values: power.powerMeasurements.map((pm: State.PowerMeasurement) => pm.value),
    };
};

export const mapDispatchToProps = (dispatch, ownProps): PowerDispatch => {
    return {};
};

export const Power = connect(mapStateToProps, mapDispatchToProps)(PowerComponent);
