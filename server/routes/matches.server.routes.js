var matches = require('../controllers/match.server.controller');

module.exports = function(app)
{
    app.route('/matches').post(matches.create);
    app.route('/matches').get(matches.list);
    app.route('/matches/:matchId')
        .get(matches.read)
        .put(matches.update)
        .delete(matches.delete);

    app.param('matchId', matches.userById);
};