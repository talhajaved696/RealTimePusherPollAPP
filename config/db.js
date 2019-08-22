const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Talha:bilaljaved696@cluster0-wapem.mongodb.net/test?retryWrites=true&w=majority').then(()=>console.log('Mongodb Connected')).catch(err=>console.log(err));