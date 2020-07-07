const fs = require("fs")
const d3 = require("d3-random")
const liqufy = "./faces"

class liquid {
    static getFace() {
        fs.readdir(liqufy, function (err, files) {
            let amount = files.length;
            let random = d3.randomUniform(0, amount)
            return liqufy + '/' + files[random];

        })
    }
}

module.exports = liquid