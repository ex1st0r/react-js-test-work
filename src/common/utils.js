/*
 * Constants and helpers for the project
 */

export const host = 'http://localhost'
export const apiPort = 8000
export const chatPort = 8080
export const ownerBaseUrl = `${host}:${apiPort}`
export const chatBaseUrl = `${host}:${chatPort}`

export const ownerAPI = {
    ownerLogin: `${ownerBaseUrl}/owner/login`,
    ownerRegister: `${ownerBaseUrl}/owner/register`,
    ownerLogout: `${ownerBaseUrl}/owner/logout`,
}

export const responseTimeout = 1000