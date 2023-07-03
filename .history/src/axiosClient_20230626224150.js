const instance = axios.create({
    baseURL: 'www.',
    timeout: 1000,
    header: { 'x-Custom-Header': 'foobar' }
})