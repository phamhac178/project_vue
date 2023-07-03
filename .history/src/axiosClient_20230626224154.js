const instance = axios.create({
    baseURL: 'www.theme',
    timeout: 1000,
    header: { 'x-Custom-Header': 'foobar' }
})