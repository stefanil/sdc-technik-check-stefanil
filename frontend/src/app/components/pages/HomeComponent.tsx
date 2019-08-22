import * as React from "react";
import * as PropTypes from "prop-types";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import {Power} from "./Power";
import {Consumption} from "./Consumption";

export interface HomeProps {
    readonly machine: string;
}

export interface HomeDispatch {
    changeMachine: (oldId: string, newId: string) => void;
}

export default class HomeComponent extends React.Component<HomeDispatch & HomeProps> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    public render() {
        const handleChange = event => this.props.changeMachine(this.props.machine, event.target.value);

        return (
            <Grid container spacing={0} item xs={12}>
                <Grid item xs={12} className="center p-40">
                    <FormControl>
                        <InputLabel shrink htmlFor="machine">
                            {this.context.t("home.machine")}
                        </InputLabel>
                        <Select value={this.props.machine} onChange={handleChange}
                                inputProps={{name: 'machine', id: 'machine'}}>
                            <MenuItem value={'m-0'}>m-0</MenuItem>
                            <MenuItem value={'m-1'}>m-1</MenuItem>
                            <MenuItem value={'m-2'}>m-2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Power/>
                <Consumption/>
            </Grid>
        );
    }
}
