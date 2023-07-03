const instance = axios.create({
    baseURL: 'www.themeldb',
    timeout: 1000,
    header: { 'x-Custom-Header': 'foobar' }
})