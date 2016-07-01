var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecordSchema = new Schema(
    {
        userid : String,
        name : String,
        backnumber : String,
        points : String,
        assists : String,
        rebounds : String,
        blocks : String,
        steals : String,
        created:{
            type: Date,
            default: Date.now
        }
        
    }
);

mongoose.model('Playerrecord', RecordSchema);
