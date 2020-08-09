const fs = require("fs")
const path = "./faces"
const gifs = require("gifs.json")
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
        let choose = randomized("?",1, {chars: 'gp'})
        if (choose=== "p") {
            let files = fs.readdirSync(path);
            let amount = files.length
            let random = this.randomIntFromInterval(amount)
            let face = files[random];
            return path + "/" + face
        }
        else if (choose==="g"){
            let amount = gifs.links.length
            let random = this.randomIntFromInterval(amount)
            let face = gifs.links[random];
        }
    }
}

module.exports = liquid