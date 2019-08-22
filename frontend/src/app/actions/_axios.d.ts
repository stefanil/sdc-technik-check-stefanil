import {AxiosError, AxiosResponse} from "axios";

export type ResponseAction = {
    payload: AxiosResponse;
};

export type ErrorAction = {
    error: AxiosError;
};
