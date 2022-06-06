# About this script
- Simple script that will produce a list of cards based on user provided HTML

# To run
- Clone this project locally
- Open in your favorite code editor (VS Code for example)
- In the editor, open a terminal prompt and run `npm i cheerio fs`

Project is now ready to run, user must supply HTML

# To get HTML
- Log in to your Panini NFT account on desktop
- Navigate to your collection, and filter by the set you want a checklist of (For instance 2020 Base)
- Once your collection is filtered to the correct set, continue to scroll until all the cards are loaded (Typically when you scroll to the bottom, Panini will load the next 12 cards or so.  Keep scrolling until no more cards are being loaded)
- Once all cards are loaded, right click anywhere on screen and choose "Inspect"
- Look for the "Elements" tab and scroll all the way to the top.  You should see an HTML tag that starts with <html>
- Right click the HTML tag
- Select "Edit as HTML"
- CTRL+A to highlight all the HTML
- CTRL+C to copy it all

# Load HTML to the script
- Look for the paniniHTML.js file in your code editor
- Paste (CTRL+V) the copied HTML between the backticks ``
    - End result should look like const PANINI_HTML=`<html>.....` with all the code between the backticks

# Time to run the script
- `node scrapePaniniData.js`
- If everything goes smoothly, it should create a file called data.csv you can open in google sheets or excel, and view your entire set