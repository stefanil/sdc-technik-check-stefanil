import {State} from "../app/state/State";
import {Store as ReduxStore} from "redux";
import {changeMachineAction, reloadAction} from "../app/actions/machineActions";
import {changeDateFromAction, changeDateToAction} from "../app/actions/consumptionActions";

const Influx = require('influx');

const influx = new Influx.InfluxDB({
    host: 'localhost',
    database: 'mydb',
    username: 'admin',
    password: 'admin',
    schema: [
        {
            measurement: 'power-measurements',
            fields: {
                value: Influx.FieldType.INTEGER,
            },
            tags: [
                'id',
                'state',
            ],
        },
        {
            measurement: 'state-transitions',
            fields: {
                state: Influx.FieldType.INTEGER,
                auc: Influx.FieldType.INTEGER,
            },
            tags: [
                'id',
                'state',
            ],
        },
    ],
});

export const INIT_CONSUMPTION_FROM: string = "2019-02-20T23:30";
export const INIT_CONSUMPTION_TO: string = "2019-02-24T23:30";
export const INIT_MACHINE: string = "m-0";

export const queryPowerMeasurements = (id: string) => (
    influx
        .query(`
            select time, id, state, "value" from mydb.."power-measurements"
            where id = '${id}' and time > now() - 5m
            order by time asc
        `)
        .then(rows => ({rows, error: undefined}))
        .catch(error => ({rows: undefined, error}))
);

export const queryStateTransitions = (id: string, from: string, to: string) => (
    influx
        .query(`
            select * from mydb.."state-transitions"
            where id = '${id}' and time >= '${from}:00Z' and time <= '${to}:00Z'
            order by time asc
        `)
        .then(rows => ({rows, error: undefined}))
        .catch(error => ({rows: undefined, error}))
);

export const initInflux = (store: ReduxStore<State.All>) => {
    store.dispatch(changeDateFromAction(INIT_CONSUMPTION_FROM));
    store.dispatch(changeDateToAction(INIT_CONSUMPTION_TO));
    store.dispatch(changeMachineAction(INIT_MACHINE));
    store.dispatch(reloadAction());
};
