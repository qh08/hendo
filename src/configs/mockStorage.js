const Watch = require('watchjs')
import config from './index'

export default function mockStorge(name, defaultValue) {
    let key = config.prefix + name
    global[key] = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue

    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(global[key]))
    }

    Watch.watch(global[key], function () {
        localStorage.setItem(key, JSON.stringify(global[key]))
    })
    return key
}
