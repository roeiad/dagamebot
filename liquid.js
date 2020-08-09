const fs = require("fs")
const path = "./faces"
const gifs = require("./gifs.json")
const randomized = require("randomatic")

class liquid {
    static randomIntFromInterval(max) {
        let result = Math.floor(Math.random() * (max - 0 + 1));
        if (result < 0) {
            result = 0;
        } else if (result > max) {
            result = max;
        }
        return result
    }

    static getFace() {
        let files = fs.readdirSync(path);
        let amount = files.length
        let random = this.randomIntFromInterval(amount)
        let face = files[random];
        return path + "/" + face
    }

    static facegif() {
        let amount = gifs.links.length
        let random = this.randomIntFromInterval(amount)
        return gifs.links[random];
    }
}

module.exports = liquid