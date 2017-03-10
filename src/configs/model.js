const modelFiles = require.context('../models', true, /^\.\/.*\.js$/)
let modules = {}

modelFiles.keys().forEach((file) => {
  const exp = modelFiles(file)
  modules[exp['NAME_SPACE']] = exp.default
})

export default modules
