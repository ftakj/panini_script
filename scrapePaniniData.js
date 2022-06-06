const $ = require('cheerio').default
const fs = require("fs")
const PANINI_HTML = require('./paniniHtml')

const scrapePaniniData = () => {
    const products = $('.crypto_product', PANINI_HTML)
    
    const data = ["\r\n", 'Name', 'Number', 'Cost', "\r\n"]
    for (let i = 0; i < products.length - 1; i++) {
        const product = products[i]
        const name = $('.a_name', product).text()
        const number = $('.c_number', product).text().split('/')[0].replace('[', '')
        const initialPriceString = $('.price', product).text()
        const price = initialPriceString && !initialPriceString.toUpperCase().includes('MIN') ? initialPriceString.replace('Bought at', '') : ''
        data.push(name, number, price, "\r\n")
    }

    fs.writeFile("data.csv", data, 'utf-8', (err) => {
        if (err) console.log(err);
        else console.log('Panini data saved')
    })
}

scrapePaniniData()