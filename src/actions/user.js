import {
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    SET_MESSAGE,
    PHOTO_UPLOAD_SUCCESS,
    PHOTO_UPLOAD_FAIL,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
} from "./types";

import UserService from "../servies/user.service";

export const updateInfos = (lastName, firstName,email, phone, about) => (dispatch) => {
    return UserService.updateInfos(lastName, firstName,email, phone, about).then(
        (data) => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: UPDATE_USER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const updateImage = (imageUpload) => (dispatch) => {
    return UserService.updateImage(imageUpload).then(
        (data) => {
            dispatch({
                type: PHOTO_UPLOAD_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: PHOTO_UPLOAD_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const changePassword = (oldPassword, password, passwordConfirmation) => (dispatch) => {
    return UserService.changePassword(oldPassword,password,passwordConfirmation).then(
        (data) => {
            dispatch({
                type: UPDATE_PASSWORD_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: UPDATE_PASSWORD_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}