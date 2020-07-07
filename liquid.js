const fs = require("fs")
const d3 = require("d3-random")
const liq="./faces"
const path = "C:/Users/USER/WebstormProjects/dagamebot/faces"

class liquid {
    static getFace() {
        let files = fs.readdirSync(liq);
        let random = d3.randomUniform(0, files.length)
        return files;

    }
}

module.exports = liquid