import Mock from 'mockjs'

const mockFiles = require.context('../mocks', true, /^\.\/.*\.js$/)

mockFiles.keys().forEach((file) => {
    for (let key in mockFiles(file).default) {
        const keys = key.split(' ')
        const type = keys[0].toLowerCase()
        const url = keys[1]

        Mock.mock(eval('/' + url.replace(/\//g, '\\\/') + '/'), type, (options) => {
            const query = options.url.split('?')[1]
            const body = options.body
            options.query = query ? serialize(query) : (body ? serialize(body) : {})
            let res = {}
            let result = {}

            res.json = (data) => {
                result = data
            }

            mockFiles(file)['default'][key](options, res)
            return result
        })
    }
})

function serialize(str) {
    let paramArray = str.split('&')
    let query = {}
    for (let i in paramArray) {
        const thisArray = paramArray[i].split('=')
        query[thisArray[0]] = thisArray[1]
    }
    return query
}
