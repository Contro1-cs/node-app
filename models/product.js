const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = cb => {

    console.log('Fetching prods');
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Products {
    constructor(t) {
        this.title = t;
    }
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
        
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}