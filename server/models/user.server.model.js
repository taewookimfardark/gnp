var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        nickname: {
            type: String,
            trim: true
        },
        email: String,
        password: String,
        created:{
            type: Date,
            default: Date.now
        }
    }
);

mongoose.model('User', UserSchema);
