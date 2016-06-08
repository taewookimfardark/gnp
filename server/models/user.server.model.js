var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        nickname: String,
        email: String,
        password: String
    }
);

mongoose.model('User', UserSchema);
