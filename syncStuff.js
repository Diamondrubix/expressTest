var fs = require("fs")
fs.readdir(".", function(err, files){
    if(err) {
        console.log(err)
    }
    else{
        console.log(files)
        fs.stat("1.txt", function(err,stat){
            if(err) {   console.log(err)   }
            else{
                var size = stat.size
                console.log("file size:", size)
            }
        })
    }
})


console.log("CONTINUE RUNNING")

function readir(path){
    return new Promise(function (resolve,reject){
        console.log("==========Promise Readdir Start==============")
        fs.readdir(".", function(err, files){
            console.log("==========Promise Readdir Complete==============")
            if(err) {
                console.log(err)
                reject(err)
            }
            else{
                console.log(files)
                resolve(files)
            }
        })
    })
}

function stat(path){
    return new Promise(function (resolve,reject){
        console.log("==========Promise Stat Start==============")
        fs.stat(".", function(err, stat){
            console.log("==========Promise Stat Complete==============")
            if(err) {
                console.log(err)
                reject(err)
            }
            else{
                console.log(stat)
                resolve(stat)
            }
        })
    })
}

readir(".")
    .then(function(){
        return stat("1.txt")
    })


async function bestfn(){
    var f = await readir(".")
    console.log("BEST READ", f)
    var s = await stat("1.txt")
    console.log("BEST STAT", s)
}
bestfn()