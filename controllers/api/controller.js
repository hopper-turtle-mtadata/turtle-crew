const Stations = require('../../models/mta');
const controller = {};
// backend back end controller retriveing information from the models page. sending and receiving information to and from the DB


controller.index = (req, res) => {
    Stations
        .findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log('ERROR: ', err));
};

controller.show = (req, res) => {
    const id = req.params.id;
    Stations
        .findById(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log('ERROR: ', err));
};

controller.create = (req, res) => {
    const gid = req.body.gid,
        name = req.body.name;


    Stations
        .create(gid, name, image, release, summary, comments, user_id)
        .then(data => res.json(data))
        .catch(err => console.log('ERROR: ', err));
};


controller.update = (req, res) => {
    const id = req.body.id,
        comments = req.body.comments;


        console.log(comments);

    Stations
        .update(id, comments)
        .then(data => res.json(data))
        .catch(err => console.log('ERROR: ', err));
};




controller.destroy = (req, res) => {
  const id = req.params.id;

  Stations
    .destroy(id)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
};



// { name: name, image: image, release: release, summary:summary, id: id };


module.exports = controller;
