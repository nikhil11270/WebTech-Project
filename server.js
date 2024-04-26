const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/signup', (req, res) => {
    const { fname, lname, email, password } = req.body;

    let isError = false;
    let errorMsg = '';

    if (!fname || !lname || !email || !password) {
        isError = true;
        errorMsg = 'Please fill all the necessary fields';
    } else if (password.length > 6) {
        isError = true;
        errorMsg = 'Password length should not exceed 6 characters';
    }

    if (isError) {
        res.status(400).send({ error: errorMsg });
    } else {
        res.sendFile(path.join(__dirname, 'public', 'Experiment4.html'));
    }
}); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
