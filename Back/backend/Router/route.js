var notes = require('../controler/controler');


module.exports.route =function (app) {

app.route('/upload')
  .post(notes.PosteProfile)
  .get(notes.GetProfile)

  app.route('/image/:nomIm')
  .get(notes.getIM)
 /*  app.route('/eleve/:id')
  .get(notes.findOne) */
}