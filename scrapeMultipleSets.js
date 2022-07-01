const $ = require('cheerio').default
const fs = require("fs")
const PANINI_HTML = require('./paniniHtml')

const scrapePaniniData = () => {
    const products = $('.crypto_product', PANINI_HTML)
    
    const data = ['Name', 'Number', 'Mint', 'Set', 'Cost', "\r\n"]
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        const name = $('.a_name', product).text()
        const numberSplit = $('.c_number', product).text().split('/')
        const number = numberSplit[0].replace('[', '')
        const mint = numberSplit[1].replace(']', '')
        
        const set = $('.crypto-product-title', product).text()
        const initialPriceString = $('.price', product).text()
        const price = initialPriceString && !initialPriceString.toUpperCase().includes('MIN') ? initialPriceString.replace('Bought at', '') : ''
        data.push(name, number, mint, set, price, "\r\n")
    }
    
    const dataString = data.reduce((d = '', c, i) => {
        const noComma = i % 6 === 0
        if (noComma) console.log(i, c, noComma, 'NO COMMA?')
        if (noComma && i) return d + c
        return d + ',' + c
    })
    console.log(data, 'DATA?')
    fs.writeFile("multipleSets.csv", dataString, 'utf-8', (err) => {
        if (err) console.log(err);
        else console.log('Panini multiple sets data saved')
    })
}

scrapePaniniData()