import {connect} from "react-redux";
import ConsumptionComponent, {ConsumptionDispatch, ConsumptionProps} from "./ConsumptionComponent";
import {State} from "../../state/State";
import {changeDateFromAction, changeDateToAction} from "../../actions/consumptionActions";


const mapStateToProps = (state: State.All): ConsumptionProps => {
    return {};
};

export const mapDispatchToProps = (dispatch, ownProps): ConsumptionDispatch => {
    return {
        changeFrom: (date: string) => dispatch(changeDateFromAction(date)),
        changeTo: (date: string) => dispatch(changeDateToAction(date)),
    };
};

export const Consumption = connect(mapStateToProps, mapDispatchToProps)(ConsumptionComponent);
