import axios from 'axios'

const config = {
    baseURL: process.env.REACT_APP_URL || '',
    timeout: 1000,
    validateStatus: function(status) {
        return status >= 200 && status < 500 // default
    },
    // headers: { 'X-Custom-Header': 'foobar' },
    headers: { 'Access-Control-Allow-Origin': '*' },
}

const instance = axios.create(config)
export default instance
