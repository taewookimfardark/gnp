var users = require('../controllers/user.server.controller');

module.exports = function(app){
    app.route('/users').post(users.create);
    app.route('/users').get(users.list);
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
    
    app.param('userId', users.userById);
};

