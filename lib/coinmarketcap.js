var request = require('request');

var base_url = 'https://api.coinmarketcap.com/v2';

//https://api.coinmarketcap.com/v1/ticker/DASH//?convert=BTC
//[
//    {
//        "id": "dash", 
//        "name": "Dash", 
//        "symbol": "DASH", 
//        "rank": "15", 
//        "price_usd": "109.809805619", 
//        "price_btc": "0.0129694911", 
//        "24h_volume_usd": "945200473.836", 
//        "market_cap_usd": "1019895312.0", 
//        "available_supply": "9287835.0", 
//        "total_supply": "9287835.0", 
//        "max_supply": "18900000.0", 
//        "percent_change_1h": "-0.69", 
//        "percent_change_24h": "10.51", 
//        "percent_change_7d": "9.64", 
//        "last_updated": "1580048942", 
//        "24h_volume_btc": "111636.379312", 
//        "market_cap_btc": "120458.0"
//    }
//]

function get_ticker(coin, cb) {
  var req_url = base_url + '/ticker/' + coin + '/?convert=BTC';
  request({ uri: req_url, json: true }, function (error, response, body) {
    if (body.length < 1) {
      return cb('Pair not found ' + coin + '-' + exchange, null)
    } else {
      return cb (null, body.data);
    }
  })
}

module.exports = {
  get_data: function(coin, cb) {
    get_ticker(coin, function(err, body) {
      return cb(err, body);
    });
  }
};
