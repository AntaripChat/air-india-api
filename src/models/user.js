const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchma = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
},{timestamps:true});

//pre-save is a trigger that gets a function and expecutes it before auser object is seved
userSchma.pre('save',async function encryptPass(next){
    const user = this;
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

userSchma.methods.isValidPassword = async function checkValid(password){
    const user = this;
    const compare = await bcrypt.compare(password,user.password);
    return compare;
}

const User = mongoose.model('User',userSchma);

module.exports = User;