# KoroJs

**v1.0 : _Stable_**


> #### _Description_

Write language / code in multiple language. Javascript Library.


```javascript
const korojs = require('./index');
/**
 * Example
 */
korojs({
    file: './bengali.js',
    keywords: {
        for: 'জন্য',
        let: 'দিন',
        console: 'কনসোল',
        log: 'লগ'
    }
}).then(str => {

    console.log(str);
    /**
     * Return 
     * 
     * for(let i = 1; i <= 10; i++) {
     *     console.log(`Hello World Count: ${i}`);
     * }
     */

    // OR

    eval(str);
    /**
     * Return 
     * 
     * Hello World Count: 1
     *      .......
     * Hello World Count: 10
     */
});
```


> ## _License (C) 2019 under GNU GPL V2._

