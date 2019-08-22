import {connect} from "react-redux";
import HomeComponent, {HomeDispatch, HomeProps} from "./HomeComponent";
import {State} from "../../state/State";
import {changeMachineAction} from "../../actions/machineActions";


const mapStateToProps = (state: State.All): HomeProps => {
    return {
        machine: state.machine && state.machine.id || 'm-0',
    };
};

export const mapDispatchToProps = (dispatch): HomeDispatch => {
    return {
        changeMachine: (oldId: string, newId: string) => oldId !== newId && dispatch(changeMachineAction(newId)),
    };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
