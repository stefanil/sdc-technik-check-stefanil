import * as React from "react";
import * as PropTypes from "prop-types";
import {Route, Switch} from "react-router";
import NotFound from "./NotFound";
import ErrorBoundary from "react-error-boundary";
import {connect} from "react-redux";
import {State} from "../state/State";
import {Home} from "./pages/Home";

export interface UiAppProps {
}

export class UiAppComponent extends React.Component<UiAppProps, any> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    public render() {
        const errorComponent = () => (
            <div className="fullGrow d-flex flex-column">
                <div
                    className="fullGrow d-flex flex-column align-items-center justify-content-center">
                    <img className="mb-4"
                         src={require("../../assets/icons/error.png")}
                         width="300px"/>
                    {this.context.t("error")}
                </div>
            </div>
        );
        return (
            <ErrorBoundary FallbackComponent={errorComponent}>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="**" component={NotFound}/>
                </Switch>
            </ErrorBoundary>
        );
    }
}

export const mapStateToProps = (state: State.All): UiAppProps => {
    return {};
};

export const UiApp = connect(mapStateToProps)(UiAppComponent);
