import * as React from "react";
import * as PropTypes from "prop-types";
import "./MainLayout.scss";
import {Nav, Navbar, NavbarBrand, UncontrolledTooltip} from "reactstrap";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";

class MainLayout extends React.Component<any, any> {

    public static contextTypes: React.ValidationMap<any> = {
        t: PropTypes.func.isRequired,
    };

    public render() {
        return (
            <Grid container spacing={0}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={"main-title"}>
                            {this.context.t("main.title")}
                        </Typography>
                    </Toolbar>
                </AppBar>

                {this.props.children}
            </Grid>
        );
    }
}

export default MainLayout;
