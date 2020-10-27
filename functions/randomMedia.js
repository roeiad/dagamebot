const media = require("../assets/pics.json");
const randomized = require("randomatic");
// let choose = randomized("?", 1, {chars:'pg'});

class randomMedia {
    static randomIntFromInterval(max) {
        let result = Math.floor(Math.random() *max);
        if (result < 0) {
            result = 0;
        } else if (result > max) {
            result = max;
        }
        return result;
    }

    static getFace(arg=randomized("?", 1, {chars:'pg'})) {
        if (arg === 'g') {
            let amount = media.liquefied.gifs.length;
            let random = this.randomIntFromInterval(amount);
            return media.liquefied.gifs[random];
        } else if (arg ===  'p') {
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