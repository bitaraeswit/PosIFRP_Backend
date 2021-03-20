let express = require ('express');

let router = express.Router();


router.get('/:p', (req, res) => {
  res.send("Olá! pagina sobre" + req.params.p) // passando parametro
});

router.get('/ab[0-9]cd', (req, res) => {
  res.send("essa é uma expressao regular") // passando parametro expressao regular 
});

module.exports = router;