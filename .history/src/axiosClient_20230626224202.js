const instance = axios.create({
    baseURL: 'www.themeldb.com/api/json/',
    timeout: 1000,
    header: { 'x-Custom-Header': 'foobar' }
})