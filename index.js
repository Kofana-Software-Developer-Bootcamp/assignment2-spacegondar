// Fonksiyon ve Framework importlanması
const express = require("express");
const { requestCalculator, xmlToJson } = require("./helper");
const path = require('path')
const app = express();

// Middleware kullanımı için dosya tnaımlanması
app.use(express.static('public'));


// Middleware için Static dosyaların linklenmesi

app.get('/', (req, res) => {
    res.status(200).send('INDEX SAYFASI')
});

app.get("/add", (req, res) => {
    requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Add"))
    });
});

app.get("/divide", (req, res) => {
    requestCalculator("Divide", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Divide"))
    });
});

app.get("/multiply", (req, res) => {
    requestCalculator("Multiply", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Multiply"))
    });
});

app.get("/subtract", (req, res) => {
    requestCalculator("Subtract", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Subtract"))
    });
});

app.get('*', (req, res) => {
    res.status(404).send('404 SAYFA BULUNAMADI')
})

// Url üzerinden işlem parametrelerinin ayarlanması

app.use('/add', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/add.html'))

})
app.use('/divide', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/divide.html'))

})
app.use('/multiply', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/multi.html'))

})
app.use('/subtract', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/sub.html'))

})

// Port seçimi ve konsol bildirimi
const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})




