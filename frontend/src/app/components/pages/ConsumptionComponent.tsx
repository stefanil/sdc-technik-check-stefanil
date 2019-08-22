import * as React from "react";
import * as PropTypes from "prop-types";
import {Grid, TextField} from "@material-ui/core";
import {ConsumptionTable} from "./ConsumptionTable";
import {ConsumptionPie} from "./ConsumptionPie";
import "./ConsumptionComponent.scss";
import {INIT_CONSUMPTION_FROM, INIT_CONSUMPTION_TO} from "../../../influx/influx";

export interface ConsumptionProps {
}

export interface ConsumptionDispatch {
    readonly changeFrom: (date: string) => void;
    readonly changeTo: (date: string) => void;
}

export default class ConsumptionComponent extends React.Component<ConsumptionProps & ConsumptionDispatch> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    public render() {
        const handleChangeTo = event => this.props.changeTo(event.target && event.target.value);
        const handleChangeFrom = event => this.props.changeFrom(event.target && event.target.value);

        return (
            <Grid container spacing={0} item xs={12}>
                <Grid item xs={12} className="center p-40">
                    <TextField
                        id="from"
                        label={this.context.t("consumption.from.label")}
                        type="datetime-local"
                        defaultValue={INIT_CONSUMPTION_FROM}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChangeFrom}
                    />
                    <span className="spacing"/>
                    <TextField
                        id="to"
                        label={this.context.t("consumption.to.label")}
                        type="datetime-local"
                        defaultValue={INIT_CONSUMPTION_TO}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChangeTo}
                    />
                </Grid>

                <Grid item xs={12} container spacing={0}>
                    <ConsumptionTable/>
                    <ConsumptionPie/>
                </Grid>
            </Grid>
        );
    }
}
