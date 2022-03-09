const addToCartDB = require('../database/quires/addToCartDB');

const addToCart = (req, res) => {
  addToCartDB(req.body.userId)
    .then((data) => data.rows)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = addToCart;