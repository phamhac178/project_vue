const instance = axios.create({
    baseURL: 'www.themeldb.com/api',
    timeout: 1000,
    header: { 'x-Custom-Header': 'foobar' }
})