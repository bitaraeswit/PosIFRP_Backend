let express = require ('express');

let router = express.Router();


router.get('/:p', (req, res) => {
  res.send("Olá! pagina sobre" + req.params.p); // passando parametro
});

router.get('/ab[0-9]cd', (req, res) => {
  res.send("essa é uma expressao regular"); // passando parametro expressao regular 
});

app.get('/login/:l/senha/:s', (req, res) => {
  res.send("Vc logou usando o login: " + req.params.l + " e a senha" + req.params.s) 

});


module.exports = router;