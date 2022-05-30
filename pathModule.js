const path=require("path")
console.log("PATH Modules.............")
// Returns the last part of a path
console.log(path.basename("./app.js"))

console.log(path.delimiter)
// Returns the directories of a path
console.log(path.dirname("/Users/Refsnes/demo_path.js'"))

// Returns the file extension of a path
console.log(path.extname("/Users/Refsnes/demo_path.js"))

// Formats a path object into a path string
const pathObj={ dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
console.log(path.format(pathObj))

// Returns true if a path is an absolute path, otherwise false
console.log(path.isAbsolute("/Users/Refsnes/demo_path.js"))


// 	Joins the specified paths into one
console.log(__dirname)
const pathToJoin="/app.js"
console.log(path.join(__dirname,pathToJoin))


// console.log(path.normalize("/Users/Refsnes/demo_path.js"))

// Formats a path string into a path object
console.log(path.parse("/Users/Refsnes/demo_path.js"))


