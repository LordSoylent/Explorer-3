var request = require('request');

var base_url = 'https://api.coingecko.com/api/v3';

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&ids=mogwai&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
//[
//    {
//        "id":"mogwai",
//        "symbol":"mog",
//        "name":"Mogwai Coin",
//        "image":"https://assets.coingecko.com/coins/images/6585/large/Mogwai-Logo_200x200.png?1547042791",
//        "current_price":0.04359494,
//        "market_cap":427931,
//        "market_cap_rank":868,
//        "total_volume":94192,
//        "high_24h":0.04710144,
//        "low_24h":0.04249847,
//        "price_change_24h":0.00073667,
//        "price_change_percentage_24h":1.71884,
//        "market_cap_change_24h":11629.5,
//        "market_cap_change_percentage_24h":2.79353,
//        "circulating_supply":9732451.05254466,
//        "total_supply":50000000.0,
//        "ath":0.141743,
//        "ath_change_percentage":-68.97954,
//        "ath_date":"2019-12-13T16:15:40.525Z",
//        "roi":null,
//        "last_updated":"2020-01-26T14:24:44.718Z"
//        }
//]

function get_ticker_usd(coin, cb) {
  var req_url = base_url + '/coins/markets?vs_currency=usd&ids=' + coin + '&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';
  request({ uri: req_url, json: true }, function (error, response, body) {
    if (body.length < 1) {
      return cb('Pair not found ' + coin + '-' + exchange, null)
    } else {
      return cb (null, body.data);
    }
  })
}

function get_ticker_btc(coin, cb) {
  var req_url = base_url + '/coins/markets?vs_currency=btc&ids=' + coin + '&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';
  request({ uri: req_url, json: true }, function (error, response, body) {
    if (body.length < 1) {
      return cb('Pair not found ' + coin + '-' + exchange, null)
    } else {
      return cb (null, body.data);
    }
  })
}

module.exports = {
  get_data_usd: function(coin, cb) {
    get_ticker_usd(coin, function(err, body) {
      return cb(err, body);
    });
  }
  get_data_btc: function(coin, cb) {
    get_ticker_btc(coin, function(err, body) {
      return cb(err, body);
    });
  }
};
