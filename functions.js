const parseString = require('react-native-xml2js').parseString;
const convert = require('xml-js');

export function xmlJson(text) {
  return new Promise(function(resolve, reject) {
    parseString(text, (err, result) => {
      if (err) reject(err);

      var result = convert.xml2json(text, {compact: true, spaces: 2});
      return resolve(JSON.parse(result));
    });
  });
}

export function getApi(url, success) {
  return fetch(url)
    .then(response => response.text())
    .then(response => xmlJson(response))
    .then(result => {
      success(result);
    })
    .catch(err => {
      console.log('fetch', err);
    });
}
