export interface ChangeMachineAction {
    type: "@@sdc/CHANGE_MACHINE_ACTION";
    payload: {
        id: string;
    };
}

export const changeMachineAction = (id: string): ChangeMachineAction => {
    return {
        type: "@@sdc/CHANGE_MACHINE_ACTION",
        payload: {
            id,
        },
    };
};

export interface ReloadAction {
    type: "@@sdc/RELOAD_ACTION";
}

export const reloadAction = (): ReloadAction => {
    return {
        type: "@@sdc/RELOAD_ACTION",
    };
};
