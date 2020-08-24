import { requests } from "../agent";
import {
    PROFIL_LIST_ADD,
    PROFIL_LIST_ERROR,
    PROFIL_LIST_RECEIVE,
    PROFIL_LIST_REQUEST,
    OFFER_LIST_REQUEST,
    OFFER_LIST_RECEIVE,
    OFFER_LIST_ERROR,
    USER_REGISTER_SUCCESS

} from "./constants"
import { SubmissionError } from "redux-form";
import request from "superagent";
import { parseApiErrors } from "../apiUtils";
import { parse } from "marked";



/**Profil */
export const profilListRequest = () => ({
    type: PROFIL_LIST_REQUEST,
});
export const profilListReceive = (data) => ({
    type: PROFIL_LIST_RECEIVE,
    data
});

export const profilListError = (error) => ({
    type: PROFIL_LIST_ERROR,
    error
});
export const profilListFetch = () => {
    return (dispatch) => {

        dispatch(profilListRequest());
        return requests.get(`/profils`)
            .then(response => { dispatch(profilListReceive(response)); })
            .catch(error => dispatch(profilListError(error)));
    };
}

/**Offer */



export const offerListRequest = () => ({
    type: OFFER_LIST_REQUEST,
});
export const offerListReceive = (data) => ({
    type: OFFER_LIST_RECEIVE,
    data
});

export const offerListError = (error) => ({
    type: OFFER_LIST_ERROR,
    error
});
export const offerListFetch = () => {
    return (dispatch) => {

        dispatch(offerListRequest());
        return requests.get(`/offers`)
            .then(response => { dispatch(offerListReceive(response)); })
            .catch(error => dispatch(offerListError(error)));
    };
}

/**registration  */

export const userRegisterCompleted = (data) => {

    return {
        type: USER_REGISTER_SUCCESS,
        data
    }

}


export const userRegister = (data) => {

    return (dispatch) => {

        return requests.post(`/users`, data)
            .then(response => { dispatch(userRegisterCompleted(response)); })
            .catch(error => {
                throw new SubmissionError(
                    parseApiErrors(error))
            });
    };

}

export const userConfirm = (data) => {

    console.log(data);

}

export const userLogout = () => {


}

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return requests.post(`/login_check`, { username, password }, false)
            .then(response => { dispatch(userRegisterCompleted(response)); })
            .catch(error => {
                throw new SubmissionError(
                    parseApiErrors(error))
            });
    };

}