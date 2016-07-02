var Match = require('mongoose').model('Match');

exports.create = function(req, res, next)
{
    var match = new Match(req.body);

    match.save(function(err)
    {
        if(err) {
            return next(err);
        }
        else{
            res.json(match);
        }
    });
};

exports.list = function(req, res, next)
{
    Match.find({}, function(err, users)
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
    res.json(req.user);
};

exports.userById = function(req, res, next, id)
{
    Match.findOne(
        {_id : id}, function(err, user){ if (err) {return next(err)} else {req.match = match; next();}}
    );
};

exports.update = function(req, res, next)
{
    Match.findByIdAndUpdate(req.match.id, req.body, function(err, user)
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
    req.match.remove(function(err)
    {
        if(err)
        {
            return next(err);
        }
        else
        {
            res.json(req.match);
        }
    });
};
