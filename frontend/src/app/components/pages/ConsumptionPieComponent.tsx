import * as React from "react";
import * as PropTypes from "prop-types";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import {Doughnut} from "react-chartjs-2";

export interface ConsumptionPieProps {
    readonly values: number[];
}

export interface ConsumptionPieDispatch {
}

export default class ConsumptionPieComponent extends React.Component<ConsumptionPieProps & ConsumptionPieDispatch> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    public render() {
        const data = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: this.props.values,
                backgroundColor: ['#3f51b5', '#5868c4', '#7683ce', '#939ed9', '#a2abde', '#c0c6e8'],
                hoverBackgroundColor: ['#3f51c5', '#5868d4', '#7683de', '#939ee9', '#a2abee', '#c0c6f8']
            }]
        };

        return (
            <Grid item xs={12} md={6} className="p-10">
                <Card>
                    <CardContent>
                        <Typography className={"title"} color="textSecondary" gutterBottom>
                            {this.context.t("consumption.percent.title")}
                        </Typography>
                        <Typography component="p">
                            <Doughnut data={data}/>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
