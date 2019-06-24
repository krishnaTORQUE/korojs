/**
 * @param {String} file      File Path
 * @param {String} name      File Name
 * @param {Object} keywords  All the keywords
 * 
 *        e.g.      {keywords, 'translator'}
 *                  {then, 'তারপর'}
 *                  {for, 'にとって'}
 *                  {if: '如果'}
 */
const korojs = async ({ file, keywords, encode }) => {
    if (typeof encode === 'undefined') {
        encode = 'utf8';
    }

    const fs = require('fs');
    let translate = '';

    return new Promise((solve, rej) => {
        fs.readFile(file, encode, (e, data) => {
            translate = data;
            Object.keys(keywords).forEach(k => {
                let regex = new RegExp(keywords[k], 'gmi');
                translate = translate.replace(regex, k);
            });
            solve(translate);
        });
    });
}

module.exports = korojs;
