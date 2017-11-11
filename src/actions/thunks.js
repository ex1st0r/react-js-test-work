import * as actions from './actions'
import SocketManager from '../services/SocketManager'
import * as thunks from './thunks'
import Enums from '../common/enums'

/*
 * Thunk dispatched by "AuthPage" screen.  Thunk used to perform authorization.
 */
export const performAuth = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    dispatch(actions.performAuth())

    dispatch(actions.performAuthRequest())

    dispatch(thunks.performNavigateToChatScreen())

}

/*
 * Thunk dispatched by "AuthPage" screen.  Thunk used to set auth email.
 */
export const performSetAuthEmail = (email) => (dispatch, getState) => {

    dispatch(actions.performSetAuthEmail(email))

}

/*
 * Thunk dispatched by "AuthPage" screen.  Thunk used to set auth name.
 */
export const performSetAuthName = (name) => (dispatch, getState) => {

    dispatch(actions.performSetAuthName(name))

}

/*
 * Thunk dispatched by "ChatPage" screen.  Thunk used to get new chat.
 */
export const callGetNewChat = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let email = reducerState.authFormEmail
    let name = reducerState.authFormName

    let io = new SocketManager()

    return io.getNewChat({email: email, name: name})

}

/*
 * Thunk is used for navigate to screens.
 */
export const performChangeScreen = (page) => (dispatch, getState) => {

    dispatch(actions.performChangeScreen(page))

}

/*
 * Thunk calling for navigate to auth page.
 */
export const performNavigateToAuthScreen = () => (dispatch, getState) => {

    dispatch(thunks.performChangeScreen(Enums.AppPages.AUTH_PAGE))

}

/*
 * Thunk calling for navigate to chat list screen.
 */
export const performNavigateToChatScreen = () => (dispatch, getState) => {

    dispatch(thunks.callGetNewChat()).then(() => {
        dispatch(thunks.callGetMessagesList())

        dispatch(thunks.performChangeScreen(Enums.AppPages.CHAT_PAGE))
    })

}

/*
 * Thunk using for send message.
 */
export const callSendMessage = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let message = reducerState.chatInputText

    let socket = new SocketManager()

    socket.sendNewMessage({message}).then(() => {
        // Clear input field after send message
        dispatch(thunks.performSetChatInputText(''))

        dispatch(thunks.callGetMessagesList())
    })
}

/*
 * Thunk dispatched by "ChatPage" screen.  Thunk set input message text.
 */
export const performSetChatInputText = (text) => (dispatch, getState) => {

    dispatch(actions.performSetChatInputText(text))
}

/*
 * Thunk dispatched by "ChatPage" screen. Thunk call for get message list.
 */
export const callGetMessagesList = (text) => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let socket = new SocketManager()

    return socket.getChatMessages().then((msgList) => dispatch(actions.performSetChatMessagesList(msgList)))
}
