var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        email: String,
        password: String,
        name: String,
        backnumber: Number,
        records:
                {
                    games : Number,
                    points : Number,
                    assists : Number,
                    rebounds : Number
                },
        created:{
            type: Date,
            default: Date.now
        }
    }
);

mongoose.model('User', UserSchema);
