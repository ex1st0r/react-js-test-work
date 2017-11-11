import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as thunks from '../../actions/thunks'

import './AuthPage.css'

class AuthPage extends Component {

    onFormSubmit(e){
        e.preventDefault()
        this.props.performAuth()
    }

    render() {
        let {performSetAuthEmail, performSetAuthName, authFormEmail, authFormName} = this.props

        return (
            <div className="auth-page">
                <div className="container py-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Login</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={authFormEmail}
                                                   placeholder="Email"
                                                   onChange={(e) => performSetAuthEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={authFormName}
                                                   placeholder="Name"
                                                   onChange={(e) => performSetAuthName(e.target.value)}/>
                                        </div>
                                        <div className="text-center">
                                            <input type="submit" className="btn btn-primary" value="Send"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authFormEmail: state.chat.authFormEmail,
        authFormName: state.chat.authFormName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        performAuth: () => dispatch(thunks.performAuth()),
        performSetAuthEmail: (email) => dispatch(thunks.performSetAuthEmail(email)),
        performSetAuthName: (name) => dispatch(thunks.performSetAuthName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)