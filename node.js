const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_KEY'); // Use your secret key from Stripe

const app = express();

app.post('/payment', async (req, res) => {
    const { token, amount } = req.body; // The token and amount from the Stripe form

    try {
        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token,
            description: 'Clownflix Subscription Payment',
        });
        res.json({ success: true, charge });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
