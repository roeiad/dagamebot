const fs = require("fs")
const liq = "./faces"
const path = "C:/Users/USER/WebstormProjects/dagamebot/faces/"

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
        let files = fs.readdirSync(liq);
        let amount = files.length
        let random = this.randomIntFromInterval(amount)
        let face = files[random];
         return liq + face
    }
}

module.exports = liquid