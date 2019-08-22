export namespace State {

    export interface I18nState {
        readonly lang: string;
    }

    export interface PowerMeasurement {
        readonly time: string;
        readonly value: number; // measurement in watt
    }

    export interface Power {
        readonly value: number;
        readonly state: number; // current machine state
        readonly powerMeasurements: PowerMeasurement[]; // for the last five minutes
    }

    export interface StateTransition {
        readonly previousState: number;
        readonly state: number; // next machine state
        readonly auc: number;   // AUC in kWh for state before transition
    }

    export interface Consumption {
        readonly from: string;
        readonly to: string;
        readonly stateTransitions: StateTransition[];
    }

    export interface Machine {
        readonly id: string;
        readonly power?: Power;
        readonly consumption?: Consumption;
    }

    export interface All {
        readonly i18nState: I18nState;
        readonly machine: Machine;
    }
}
