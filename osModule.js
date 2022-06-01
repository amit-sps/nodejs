const os=require("os")
console.log("Os Modules............")
//return the cpu architecture
console.log(os.arch())
// returns the hostname of the system
console.log(os.hostname())
// It return total amount of system memory in bytes
console.log(os.totalmem()/1073741824)
// It returns the amount of free system memory in bytes
console.log(os.freemem()/1073741824)
// It returns the operating systems default directory for temp files.
console.log(os.tmpdir())
console.log(os.endianness())
// It return operating system name
console.log(os.type())
// It returns the platform of os
console.log(os.platform())
console.log(os.release())
// Returns the system uptime in number of seconds.
console.log(((os.uptime()/60)/60)/24)
console.log(os.constants.errno)