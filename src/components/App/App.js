import React from 'react'
import {connect} from 'react-redux'
import Enums from '../../common/enums'
import { AuthPage, ChatPage } from '../index'

import './App.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'

const getAppPage = (page) => {
    switch (page) {
        case Enums.AppPages.AUTH_PAGE:
            return <AuthPage/>

        case Enums.AppPages.CHAT_PAGE:
            return <ChatPage/>

        default:
            return <AuthPage/>
    }
}

const App = (props) => {

    return (
        <div className="main-container">
            { getAppPage(props.chat.appPage)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    chat: state.chat
})

export default connect(mapStateToProps, null)(App)