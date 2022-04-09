const express=require('express')
const app=express();
const router = express.Router();
// const  morgan = require("morgan");
const cors = require("cors")
const bodyParser = require('body-parser');
const appRoutes = require("./route/api")(router);
app.use('/upload',express.static('uploads'));
const session = require('express-session');

// var PORT = process.env.PORT ||6543


const mongoose = require('mongoose')

const DB ="mongodb+srv://krunalfood:krunal0997@cluster0.c9t3e.mongodb.net/Food?retryWrites=true&w=majority";
mongoose.connect(DB)
console.log('Connection succesfully')
// app.use(morgan('dev'));



app.use(cors({origin : '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));


app.use('/',appRoutes);


app.listen(6544,function(req,res){
    console.log('port is running')
})

// app.listen(PORT,()=>console.log("succsessfull",PORT));