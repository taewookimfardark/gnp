var playerrecords = require('../controllers/playerrecord.server.controller');

module.exports = function(app){
    app.route('/records').post(playerrecords.create);
    app.route('/records').get(playerrecords.list);
    app.route('/records/:userId')
        .get(playerrecords.read)
        .put(playerrecords.update)
        .delete(playerrecords.delete);

    app.param('userId', playerrecords.userById);

};


