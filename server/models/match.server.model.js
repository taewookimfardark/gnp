var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MatchSchema = new Schema(
    {
        tag : String,
        against : String,
        when : Number,
        score_gnp : Number,
        score_enemy : Number,
        finish : Boolean,
        win : Boolean,
        members : [{
            name : String,
            backnumber : Number,
            points : Number,
            assists : Number,
            rebounds : Number,
            blocks : Number,
            steals : Number
        }],
        created:{
            type: Date,
            default: Date.now
        }
    }
);

mongoose.model('Match', MatchSchema);


