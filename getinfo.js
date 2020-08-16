let twitter_username = 'DAGamesOfficial';

class info {
    static twitterfolowers() {
        $.ajax({
                url: "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=" + twitter_username,
                dataType: 'jsonp',
                crossDomain: true
            }
        ).done(function (data) {
          return data[0]['followers_count'];
        });
    }
}

module.exports = info