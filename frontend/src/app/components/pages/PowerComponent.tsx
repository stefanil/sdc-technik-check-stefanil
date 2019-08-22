import * as React from "react";
import * as PropTypes from "prop-types";
import {Line} from "react-chartjs-2";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";

export interface PowerProps {
    readonly state: number;
    readonly value: number;
    readonly labels: String[];
    readonly values: number[];
}

export interface PowerDispatch {
}

export default class PowerComponent extends React.Component<PowerProps & PowerDispatch> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    public render() {
        const lineData = {
            labels: this.props.labels,
            datasets: [
                {
                    label: this.context.t("power"),
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(63,81,181,0.4)',
                    borderColor: 'rgba(63,81,181,1.0)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(63,81,181,1.0)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(63,81,181,1.0)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.values,
                }
            ],
        };

        return (
            <Grid container spacing={0} item xs={12}>
                <Grid item xs={12} sm={6} md={3} className="p-10">
                    <Card className={"card"}>
                        <CardContent>
                            <Typography className={"title"} color="textSecondary" gutterBottom>
                                {this.context.t("power.current.state")}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.props.state}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="p-10">
                    <Card className={"card"}>
                        <CardContent>
                            <Typography className={"title"} color="textSecondary" gutterBottom>
                                {this.context.t("power.current.power")}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.props.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="p-10">
                    <Card className={"card"}>
                        <CardContent>
                            <Typography className={"title"} color="textSecondary" gutterBottom>
                                {this.context.t("power.current.power.last.five")}
                            </Typography>
                            <Typography component="p">
                                <Line data={lineData}/>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}
