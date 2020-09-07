const media = require("../assets/pics.json");
const randomized = require("randomatic");

class randomMedia {
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
            let amount = media.liquefied.gifs.length;
            let random = this.randomIntFromInterval(amount);
            return media.liquefied.gifs[random];
        } else if (choose === 'p') {
            let amount = media.liquefied.pics.length;
            let random = this.randomIntFromInterval(amount);
            return media.liquefied.pics[random];
        }
    }
    static boi() {
        let amount = media.boi.length;
        let random = this.randomIntFromInterval(amount);
        return media.boi[random];
    }

}

module.exports = randomMedia;