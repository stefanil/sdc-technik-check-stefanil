import * as React from "react";
import * as PropTypes from "prop-types";
import {Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

export interface ConsumptionTableProps {
    readonly values: number[];
    readonly total: number;
}

export interface ConsumptionTableDispatch {
}

export default class ConsumptionTableComponent extends React.Component<ConsumptionTableProps & ConsumptionTableDispatch> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Grid item xs={12} md={6} className="p-10">
                <Card className={"card"}>
                    <CardContent>
                        <Typography className={"title"} color="textSecondary" gutterBottom>
                            {this.context.t("consumption.absolute.title")}
                        </Typography>
                        <Typography component="p">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">{this.context.t("consumption.absolute.state")}</TableCell>
                                        <TableCell align="center">{this.context.t("consumption.absolute.consumption")}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={1}>
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">{this.props.values[0]}</TableCell>
                                    </TableRow>
                                    <TableRow key={2}>
                                        <TableCell align="center">2</TableCell>
                                        <TableCell align="center">{this.props.values[1]}</TableCell>
                                    </TableRow>
                                    <TableRow key={3}>
                                        <TableCell align="center">3</TableCell>
                                        <TableCell align="center">{this.props.values[2]}</TableCell>
                                    </TableRow>
                                    <TableRow key={4}>
                                        <TableCell align="center">4</TableCell>
                                        <TableCell align="center">{this.props.values[3]}</TableCell>
                                    </TableRow>
                                    <TableRow key={5}>
                                        <TableCell align="center">5</TableCell>
                                        <TableCell align="center">{this.props.values[4]}</TableCell>
                                    </TableRow>
                                    <TableRow key={6}>
                                        <TableCell align="center">6</TableCell>
                                        <TableCell align="center">{this.props.values[5]}</TableCell>
                                    </TableRow>
                                    <TableRow key={7}>
                                        <TableCell align="center"><b>{this.context.t("consumption.absolute.total")}</b></TableCell>
                                        <TableCell align="center"><b>{this.props.total}</b></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
