var Playerrecord = require('mongoose').model('Playerrecord');

exports.create = function(req, res, next)
{
    var playerrecord = new Playerrecord(req.body);

    playerrecord.save(function(err)
    {
        if(err) {
            return next(err);
        }
        else{
            res.json(playerrecord);
        }
    });
};

exports.list = function(req, res, next)
{
    Playerrecord.find({}, function(err, users)
    {
        if(err){
            return next(err);
        } else{
            res.json(users);
        }
    });
};

exports.read = function(req, res)
{
    res.json(req.playerrecord);
};

exports.userById = function(req, res, next, id)
{
    User.findOne(
        {userid : id}, function(err, playerrecord){ if (err) {return next(err)} else {req.playerrecord = playerrecord; next();}}
    );
};

exports.update = function(req, res, next)
{
    User.findByIdAndUpdate(req.playerrecord.id, req.body, function(err, user)
    {
        if(err)
        {
            return next(err);
        }
        else
        {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next)
{
    req.playerrecord.remove(function(err)
    {
        if(err)
        {
            return next(err);
        }
        else
        {
            res.json(req.playerrecord);
        }
    });
};
