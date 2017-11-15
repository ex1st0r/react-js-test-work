export const PERFORM_AUTH = 'PERFORM_AUTH'
export const PERFORM_AUTH_REQUEST = 'PERFORM_AUTH_REQUEST'
export const PERFORM_AUTH_SUCCESS = 'PERFORM_AUTH_SUCCESS'
export const PERFORM_AUTH_FAILURE = 'PERFORM_AUTH_FAILURE'

export const PERFORM_LOGOUT = 'PERFORM_LOGOUT'
export const PERFORM_LOGOUT_REQUEST = 'PERFORM_LOGOUT_REQUEST'
export const PERFORM_LOGOUT_SUCCESS = 'PERFORM_LOGOUT_SUCCESS'
export const PERFORM_LOGOUT_FAILURE = 'PERFORM_LOGOUT_FAILURE'

export const PERFORM_SET_AUTH_EMAIL = 'PERFORM_SET_AUTH_EMAIL'
export const PERFORM_SET_AUTH_NAME = 'PERFORM_SET_AUTH_NAME'

export const PERFORM_CHANGE_SCREEN = 'PERFORM_CHANGE_AUTH_SCREEN'
export const PERFORM_SET_CHAT_INPUT_TEXT = 'PERFORM_SET_CHAT_INPUT_TEXT'

export const PERFORM_SET_CHAT_MESSAGES_LIST = 'PERFORM_SET_CHAT_MESSAGES_LIST'

/*
 * Thunk dispatched by "AuthPage" screen. Action used to perform authorization.
 *
 */
export const performAuth = () => ({
    type: PERFORM_AUTH,
    payload: {}
})

/*
 * Action dispatched in thunk "performAuth".
 *
 */
export const performAuthRequest = () => ({
    type: PERFORM_AUTH_REQUEST,
    payload: {}
})

/*
 * Action dispatched in thunk "performAuth".
 *
 */
export const performAuthSuccess = () => ({
    type: PERFORM_AUTH_SUCCESS,
    payload: { }
})

/*
 * Action dispatched in thunk "performAuth".
 *
 */
export const performAuthFailure = (error) => ({
    type: PERFORM_AUTH_FAILURE,
    payload: {
        data: error
    }
})

/*
 * Action dispatched in thunk "performLogout". Action used to perform logout.
 *
 */
export const performLogout = () => ({
    type: PERFORM_LOGOUT,
    payload: {}
})

/*
 * Action dispatched in thunk "performLogout".
 *
 */
export const performLogoutRequest = () => ({
    type: PERFORM_LOGOUT_REQUEST,
    payload: {}
})

/*
 * Action dispatched in thunk "performLogout".
 *
 */
export const performLogoutSuccess = (response) => ({
    type: PERFORM_LOGOUT_SUCCESS,
    payload: {
        data: response
    }
})

/*
 * Action dispatched in thunk "performLogout".
 *
 */
export const performLogoutFailure = (error) => ({
    type: PERFORM_LOGOUT_FAILURE,
    payload: {
        data: error
    }
})

/*
 * Action dispatched in thunk "performSetAuthEmail". It set email field auth form
 *
 */
export const performSetAuthEmail = (email) => ({
    type: PERFORM_SET_AUTH_EMAIL,
    payload: {
        data: email
    }
})

/*
 * Action dispatched in thunk "performSetAuthName". It set name field auth form
 *
 */
export const performSetAuthName = (name) => ({
    type: PERFORM_SET_AUTH_NAME,
    payload: {
        data: name
    }
})

/*
 * Action dispatched in thunk "performChangeScreen". Action perform change active page
 *
 */
export const performChangeScreen = (page) => ({
    type: PERFORM_CHANGE_SCREEN,
    payload: {
        data: page
    }
})

/*
 * Action dispatched in thunk "performSetChatInputText". Action perform change chat input text
 *
 */
export const performSetChatInputText = (text) => ({
    type: PERFORM_SET_CHAT_INPUT_TEXT,
    payload: {
        data: text
    }
})

/*
 * Action dispatched in thunk "performSetChatMessagesList". Action perform set messages list
 *
 */
export const performSetChatMessagesList = (msgList) => ({
    type: PERFORM_SET_CHAT_MESSAGES_LIST,
    payload: {
        data: msgList
    }
})