export interface SetIdAction {
    type: "@@sdc/SET_ID";
    payload: {
        id: string;
    };
}

export const setIdAction = (id: string): SetIdAction => {
    return {
        type: "@@sdc/SET_ID",
        payload: {
            id,
        },
    };
};
