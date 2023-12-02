import express from 'express';
const app = express();
const PORT = 8001;

app.use(express.json());

//method takes buy price and sell price as inputs
//method returns the margin and roi
app.post('/data', (req, res) => {
    
    //input of buy price and sell price from body of json object
    const { buyPrice } = req.body;
    const { sellPrice} = req.body;

    let margin = (sellPrice - buyPrice);
    
    //tax if sellPrice is greater than 100
    if (sellPrice > 100) {
        margin = (sellPrice - buyPrice) - (Math.min(5000000, buyPrice * 0.01));
    }
    const roi = margin / buyPrice;

    //return margin and roi as json 
    res.json({
        margin: `${margin}`,
        roi: `${roi}`
    });
});

app.listen(PORT, () => {
    console.log(`Microservice live on http://localhost:${PORT}`);
});
