const fs = require("fs")
const d3 = require("d3-random")
const liq = "./faces"
const path = "C:/Users/USER/WebstormProjects/dagamebot/faces/"

class liquid {
    async   getFace() {
        let files = fs.readdirSync(liq);
        let random = await d3.randomUniform(0, files.length)
        let face = files[random];
        return path + face

    }
}

module.exports = liquid