const instance = axios.create({
    baseURL: 'www.themealdb.com/api/json/v1/1',
    header: { 'x-Custom-Header': 'foobar' }
})