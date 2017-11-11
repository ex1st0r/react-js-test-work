import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as thunks from '../../actions/thunks'

import './ChatPage.css';

class ChatPage extends Component {

    onSendMessage(e){
        e.preventDefault()
        this.props.callSendMessage()
    }

    getMessageRow(msg, key){
        return (
            <div className="row" key={key}>
                <div className={`col-xs-6 ${msg.isMyMessage ? 'offset-xs-6': ''}`}>
                    <div className="chat-message-block">
                        <div className="chat-message-block__from">{msg.from}</div>
                        <p className="chat-message-block__text">{msg.message}</p>
                    </div>
                </div>
            </div>
        )
    }

    emptyMessageList() {
        return (<div>Messages list is empty</div>)
    }

    getMessagesList(){
        let {chatMessagesList} = this.props

        return Array.isArray(chatMessagesList) ?
            chatMessagesList.map((msg, key) => this.getMessageRow(msg, key))
            : this.emptyMessageList()
    }

    render() {
        let {performSetChatInputText, chatInputText} = this.props

        return (
            <div className="chat-page">
                <div className="chat-page__message-history">
                    <div className="container">
                        { this.getMessagesList() }
                    </div>
                </div>
                <form className="chat-page__message-controls container" onSubmit={(e) => this.onSendMessage(e)}>
                    <div className="row">
                        <div className="chat-page__message-controls__input col-xs-10">
                            <textarea
                                className="form-control"
                                rows="5"
                                value={chatInputText}
                                onChange={(e) => performSetChatInputText(e.target.value)}/>
                        </div>
                        <div className="chat-page__message-controls__send my-auto col-xs-2">
                            <input className="btn btn-primary btn-lg" type="submit" value="Send"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chatMessagesList: state.chat.chatMessagesList,
        chatInputText: state.chat.chatInputText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callSendMessage: () => dispatch(thunks.callSendMessage()),
        performSetChatInputText: (text) => dispatch(thunks.performSetChatInputText(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)