const faces = require("../assets/liquid.json");
const randomized = require("randomatic");

class liquid {
    static randomIntFromInterval(max) {
        let result = Math.floor(Math.random() * (max - 0 + 1));
        if (result < 0) {
            result = 0;
        } else if (result > max) {
            result = max;
        }
        return result;
    }

    static getFace() {
        let choose = randomized("?", 1, {chars: 'pg'});
        if (choose === 'g') {
            let amount = faces.gifs.length;
            let random = this.randomIntFromInterval(amount);
            return faces.gifs[random];
        } else if (choose === 'p') {
            let amount = faces.pics.length;
            let random = this.randomIntFromInterval(amount);
            return faces.pics[random];
        }
    }

}

module.exports = liquid;