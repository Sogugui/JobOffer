
//int provisional prueba comprobación tipo usuario
let userType = 2;//0 = user, 1 = admin, 2 = no log

const express = require('express');
const users= require('./controllers/adminControllers')
const morgan = require('./config/morganConfig')
const helmet = require('helmet');



require('./utils/dbMongo.js');
require('./utils/dbElephant.js')

//Routes
const adRouter = require('./routes/adRoutes.js');
const adminRouter= require('./routes/adminRoutes')
const userRouter = require('./routes/userRoutes.js');
const favsRouter = require('./routes/favsRoutes.js');

//Middlewares
const middle404 = require('./middlewares/error404.js');
const {requireAuth,checkUser} = require('./middlewares/verifiedToken.js');

const app = express();
const port = 3000;



//Views
app.set('view engine','pug')
app.set('views','./views');

app.use(helmet());
app.use(express.json());

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.use(express.urlencoded({extended:true}));
// app.use(express.static('public'))
app.use('/api/', adRouter);
app.use('/', adminRouter);
app.use('/api',userRouter);
app.use('/api',favsRouter);
app.use(express.static('public'))


//WEB ROUTES

// app.get('*',checkUser);
//Home(no log, user & admin)

app.get('/', (req,res)=>{
    try{
     
    res.render('homeNoLog');
    }
    catch(error){
        console.log(error.stack)
        
    }
})

//Login

app.get('/login',(req,res)=>{
    try{
        res.render("login",{});
    }
    catch(error){
        console.log(error.stack);
    }
})



//Register

app.get('/signup', (req,res)=>{
    try{
        res.render("register",{});
    }
    catch(error){
        console.log(error.stack);
    }
})

//Favourites

app.get('/favourites',(req,res)=>{
    try{
        res.render("favourites",{})
    }
    catch(error){
        console.log(error.stack);
    }
}) 

//Dashboard Admin

app.get('/dashboard',(req,res)=>{
    try{
        res.render("dashboardAdmin")
    }
    catch(error){
        console.log(error.stack);
    }
})


//Profile

app.get('/profile',(req,res)=>{
    try{
        //Comprobar de qué tipo es el usuario logueado y hacer un rend u otro
        if(userType==0){
            res.render("profileUser",{});
        }
        else if(userType==1){
            res.render("profileAdmin",{});
        }
       }
    catch(error){
        console.log(error.stack);
    }
})





app.use(middle404);



app.listen(port, () => {
    console.log(`Server working in port ${port}`)
})



