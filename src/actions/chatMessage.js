import {
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAIL,
    SET_MESSAGE,
} from './types'

import MessageService from '../servies/message.service'

export const createMessage = (userId, content) => (dispatch) => {

    return MessageService.createMessage(userId, content).then(
        (data) => {
            dispatch({
                type: CREATE_MESSAGE_SUCCESS,
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
                type: CREATE_MESSAGE_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )

};