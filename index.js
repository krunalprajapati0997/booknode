const express=require('express')
const app=express();
const router = express.Router();
// const  morgan = require("morgan");
const cors=require("cors")
const bodyParser = require('body-parser');
const appRoutes = require("./route/api")(router);
app.use('/upload',express.static('uploads'));
var PORT = process.env.PORT ||8077

const mongoose = require('mongoose')

const DB ="mongodb+srv://krunalfood:krunal0997@cluster0.c9t3e.mongodb.net/Food?retryWrites=true&w=majority";
mongoose.connect(DB)
console.log('Connection succesfully')
// app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));


app.use('/',appRoutes);

// app.listen(8077,function(req,res){
//     console.log('port is running')
// })

app.listen(PORT,()=>console.log("succsessfull",PORT));