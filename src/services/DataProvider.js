import * as util from '../common/utils'


export const getOwnerAuth = (email, password) => {
    return fetch(util.ownerAPI.ownerLogin, {
        method: 'POST',
        body: {
            email: email,
            password: password
        }
    })
}

export const getOwnerRegister = (email, password, domain) => {
    return fetch(util.ownerAPI.ownerRegister, {
        method: 'POST',
        body: {
            email: email,
            password: password,
            domain: domain
        }
    })
}

export const getOwnerLogout = (token) => {
    return fetch(util.ownerAPI.ownerLogout, {
        method: 'POST',
        body: {
            token: token
        }
    })
}
