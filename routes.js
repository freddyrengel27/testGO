const {Router} = require("express");
const connection = require("./bd.js");

const routes = Router();

routes.get("/dame", (req, res) =>{

    connection.query(
        'SELECT * FROM persona',
        function(err, results, fields) {
        if(err) console.log(err);
          console.log(results);
          return res.status(200).send({
            msg:"todo bien :)"
          })
        }
      );

});

module.exports = routes;