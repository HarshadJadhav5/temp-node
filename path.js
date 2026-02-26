const path = require('path')

//separator property- which return platform specific separator 
console.log(path.sep)

//path.join- joins sequence of path segments using that platform specific sep using limiter
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt')
console.log(absolute)