const express = require('express')
const app = express()
const port = 8000
var cors = require('cors');
app.use(express.static('public'))
app.use(cors());
const productList = [{
    id : 'HUDT47D',
    brandName : 'D-LINK',
    productName : 'Wifi router',
    quantity : 0,
    price : 900,
    mrp : 1000,
    imageUrl : 'http://localhost:8000/images/image1.jpg',
    offerText : '10 % OFF',
    productTotal : 0
},
{
    id : 'BDFB584',
    brandName : 'Apple',
    productName : 'Macbook pro',
    quantity : 0,
    price : 500,
    mrp : 2000,
    imageUrl : 'http://localhost:8000/images/image2.jpg',
    offerText : '15 % OFF',
    productTotal : 0
},
{
    id : 'JDG212F',
    brandName : 'Intern',
    productName : 'Intern INT-38C Acoustic Guitar Kit',
    quantity : 0,
    price : 10500,
    mrp : 25000,
    imageUrl : 'http://localhost:8000/images/image3.jpg',
    offerText : '23 % OFF',
    productTotal : 0
},
{
    id : 'BDAB584',
    brandName : 'One Plus',
    productName : 'One plus 7Pro',
    quantity : 0,
    price : 32000,
    mrp : 38000,
    imageUrl : 'http://localhost:8000/images/image4.jpg',
    offerText : '18 % OFF',
    productTotal : 0
},{
    id : 'BDBB584',
    brandName : 'FIREBIRD',
    productName : 'Sunglasses',
    quantity : 0,
    price : 2200,
    mrp : 3000,
    imageUrl : 'http://localhost:8000/images/image5.jpg',
    offerText : '23 % OFF',
    productTotal : 0
},{
    id : 'BDMB584',
    brandName : 'Niko',
    productName : 'Niko D3500',
    quantity : 0,
    price : 38500,
    mrp : 40000,
    imageUrl : 'http://localhost:8000/images/image6.jpg',
    offerText : '24 % OFF',
    productTotal : 0
},{
    id : 'BDNB584',
    brandName : 'MI',
    productName : 'Macbook pro Horizon edition',
    quantity : 0,
    price : 42000,
    mrp : 470000,
    imageUrl : 'http://localhost:8000/images/image7.jpg',
    offerText : '4 % OFF',
    productTotal : 0
},{
    id : 'BDOB584',
    brandName : 'JBL',
    productName : 'JBL earphones',
    quantity : 0,
    price : 750,
    mrp : 900,
    imageUrl : 'http://localhost:8000/images/image8.jpg',
    offerText : '21 % OFF',
    productTotal : 0
},{
    id : 'BDFP584',
    brandName : 'SONY',
    productName : 'Smart TV FULL HD',
    quantity : 0,
    price : 56000,
    mrp : 78000,
    imageUrl : 'http://localhost:8000/images/image9.jpg',
    offerText : '24 % OFF',
    productTotal : 0
},{
    id : 'BDFBQ84',
    brandName : 'Noise',
    productName : 'Smart Watch',
    quantity : 0,
    price : 6000,
    mrp : 8000,
    imageUrl : 'http://localhost:8000/images/image10.jpg',
    offerText : '15 % OFF',
    productTotal : 0
}]
app.get('/products', (req, res) => res.send(productList))
app.get('/', (req, res) => res.send("welcome"))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))