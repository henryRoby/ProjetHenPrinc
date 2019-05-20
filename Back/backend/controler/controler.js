
var Profile = require('../model/model');
var fs = require('fs')
const Bcrypt = require("bcryptjs");

// Create tableau des profile
module.exports.PosteProfile = function (req, res) {


    var nom = req.body.nom
    var email = req.body.email
    var passeWord = req.body.passeWord
    // passeWord= Bcrypt.hashSync(request.body.passWord, 10);
    var photo_profile = "http://localhost:8002/image/"+req.body.filename+".jpg"
    //"http://localhost:8002/image/"+req.body.filename+".jpg"


    console.log(req);
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function (err) {
        if (err) {
            return res.status(500).send(err, 'tena tsy tafiditra le sary');
        }

        // res.json({ file: `public/${req.body.filename}.jpg` });
    });




    // bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
    // .then(function(hashedPassword) {
    //     return usersDB.saveUser(username, hashedPassword);
    // })
    // .then(function() {
    //     res.send();
    // })
    // .catch(function(error){
    //     console.log("Error saving user: ");
    //     console.log(error);
    //     next();
    // });






    Profile.find()
        .then(note0 => {


            if (note0.length == 0) {
                id = 0;
                console.log('mbola', id);

            } else {
                id = parseInt(note0[note0.length - 1].id) + 1;
            }

            const insert = new Profile({ _id: id, nom: nom,email:email, passeWord: passeWord, photo_profile: photo_profile });
            (!nom || !email|| !passeWord) ? console.log(" nom reussi bla", nom,email, passeWord) : insert.save()
                .then(() => {
                    Profile.find()
                        .then(note => {
                            res.send(note);
                        })
                })
                .catch(e => {
                    res.status(500).send({ mes: e.mes || "erreur" })
                })
        })
}


module.exports.GetProfile = (req, res) => {
    Profile.find()
        .then(note => {
            res.send(note)
        })
        .catch(e => {
            res.status(500).send({ mes: e.mes || "erreur" })
        });
};

module.exports.getIM = (req, res) => {
    try {
        let a = fs.readFileSync('./controler/public/'+req.params.nomIm)
       
        res.write(a)
        res.end()

    } catch (e) {
        console.log("erreur be miitsy", e.stack);

    }

};


