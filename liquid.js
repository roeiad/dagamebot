const fs = require("fs")
const d3 = require("d3-random")
const liq = "./faces"
const path = "C:/Users/USER/WebstormProjects/dagamebot/faces/"

class liquid {
    static getRandomArbitrary( max) {
        return Math.random() * (max - 1) + 1;
    }
    static getFace() {
        let files =  fs.readdirSync(liq);
        let amount=files.length
        let random = this.getRandomArbitrary(amount)
        let face = files[random];
        return files
        // return path + face
    }
}

module.exports = liquid