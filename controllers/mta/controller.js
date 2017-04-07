const mtaModel = require('../../models/mta');

const controller = {};

controller.index = (req, res) =>{
  mtaModel
    .findAll()
    .then((data) => {
      res.render('index', { mtas:data })
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req,res)=>{
  let id = req.params.id
  console.log(id);
  mtaModel
  .showOne(id)
  .then((data)=>{
    res.render('show', {mtas : data})
  })
  .catch(err => console.log('ERROR:', err));
}

controller.dropdown = (req, res) =>{
    mtaModel
    .dropdown(req.body.station)
    .then((data) =>{
      res.json(data)
    })
    .catch (err => {
      console.log('ERROR:', err);
      res.json([]);
    });
}

module.exports = controller;
