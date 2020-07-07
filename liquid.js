const fs = require("fs")
const d3 = require("d3-random")
const liq = "./faces"
const path = "C:/Users/USER/WebstormProjects/dagamebot/faces/"

class liquid {
    static files() {
        return fs.readdirSync(liq);
    }
    static getFace() {
        let files = this.files();
        let amount=files.length
        // let random = d3.randomUniform(0, amount)
        // let face = files[random];
        // return path + face
return amount
    }
}

module.exports = liquid