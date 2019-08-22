import * as React from "react";
import * as PropTypes from "prop-types";
import "./NotFound.scss";
import {Link} from "react-router-dom";

class NotFound extends React.Component<any, any> {
    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    public render() {
        return (
            <div className="not-found">
                <h1>{this.context.t("The requested page could not be found")}</h1>
                <Link to="/">
                    <img className="not-found-back-button" src={require("../../assets/icons/back.svg")}/>
                </Link>
            </div>
        );
    }

}

export default NotFound;
