import io from 'socket.io-client'
import {chatBaseUrl, responseTimeout} from '../common/utils'

let instance = null

export default class SocketManager {
     _socket = null
     _host = null


    constructor() {
        if (!instance) {
            instance = this

            if (!chatBaseUrl) {
                throw new Error('Hostname is not correct')
            }

            try {

                this._socket = io.connect(chatBaseUrl)
                this._host = chatBaseUrl

            } catch (e){
                console.log(e)
            }
        }

        return instance
    }

    _getSocket(){
        return this._socket
    }

    getNewChat(options = {callback: () => {}, email: '', name: ''}){
        let socket = this._getSocket()

        socket.emit('getNewChat', {
            email: options.email,
            name: options.name,
            domain: 'localhost'
        });

        socket.on('getNewChat', (data) => {
            this.chatId = data.chatId
            this.token = data.guestToken
            this.guestId = data.guestId

            options.callback(data)
        });

    }

    sendNewMessage(options = {callback: () => {}, message: ''}){
        let socket = this._getSocket()

        socket.emit('newMessage', {
            chatId: this.chatId,
            token: this.token,
            message: options.message
        })

        socket.on('newMessage', (data) => options.callback(data))

    }

    getChatMessages(options = {callback: () => {}}){
        let socket = this._getSocket()

        socket.emit('getChatMessages', {
            chatId: this.chatId,
            token: this.token,
            // limit: 10,
            // skip: 0,
        })

        socket.on('getChatMessages', (response) => options.callback(response))

    }

}