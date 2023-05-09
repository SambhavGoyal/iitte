const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect(
  `mongodb+srv://2020uce0040:SAMBHAV@cluster0.xzfdh8l.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('connected to database');
  }).catch((err) => {
    console.log(err);
  });

const UserSchema = new Schema ({
   email: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   }
})

const UserModel = mongoose.model('user', UserSchema);
export { UserModel };
