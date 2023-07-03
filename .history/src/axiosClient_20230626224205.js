const instance = axios.create({
    baseURL: 'www.themeldb.com/api/json/v1/1',
    timeout: 1000,
    header: { 'x-Custom-Header': 'foobar' }
})