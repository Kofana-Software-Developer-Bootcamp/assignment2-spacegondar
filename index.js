// // const { requestCalculator } = require("./helper");
const express = require("express");
const { requestCalculator, xmlToJson } = require("./helper");

const path = require('path')
const app = express();
app.use(express.static('public'));
// app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Running Again");
// })

// Middleware için Static dosyaların linklenmesi


// app.get("/add", (req, res) => {
//     requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
//         res.send(xmlToJson(response, "Add"))
//     })
// })

//
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

  //ssssssssssssssssssssssssssssssssssssss
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
  //sssssssssssssssssssssssssssssssssssssssssss
  
  const port = 3000;
  
  app.listen(port, ()=> {
      console.log(`Sunucu port ${port} da çalışmaya başladı...`)
  })
//



// const { requestCalculator } = require("./helper");
// const express = require("express")
// const { requestCalculator, xmlToJson } = require("./helper")

// const app = express();
// app.use(express.json())

// app.get("/", (req, res) => {
//     console.log("İstek gönderildi")
//     res.write("Running Site");
//     res.end()
// })

// app.get("/add", (req, res) => {
//        requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
//        res.send(xmlToJson(response, "Add"))
//     })
// })

// app.listen(3000, () => {
//     console.log("Express server is running")
// })

// const des = document.querySelector('#add')
// des.addEventListener('click', topla)
// function topla(){


// const http = require('http')


// const server = http.createServer((req, res) => {
//     const url = req.url;

//     if (url == '/') {
//         res.write("Index Sayfasi")
//     }
//     else if (url == '/add') {
//         requestCalculator("Add", 54, 4).then((response) => {
//             console.log(xmlToJson(response, "Add"))
//         })
//     }
//     else if (url == '/subtract') {
//         requestCalculator("Subtract", 54, 4).then((response) => {
//             console.log(xmlToJson(response, "Subtract"))
//         })
//     }
//     else if (url == '/multiply') {
//         requestCalculator("Multiply", 54, 4).then((response) => {
//             console.log(xmlToJson(response, "Multiply"))
//         })
//     }
//     else if (url == '/divide') {
//         requestCalculator("Divide", 54, 4).then((response) => {
//             console.log(xmlToJson(response, "Divide"))
//         })
//     }
//     // res.write("Merhaba")
//     res.end()


// })

// const port = 3000

// server.listen(port, () => {
//     console.log('Sunucu port' + port + 'de başlatıldı.')
// })


// }
