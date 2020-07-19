const fs = require('fs');
// const book = {
//     title: '1984',
//     author: 'George Odwell'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());
data.age = 23;
data.name = 'Alakbar'
fs.writeFileSync('1-json.json', JSON.stringify(data));

// console.log(data.title);