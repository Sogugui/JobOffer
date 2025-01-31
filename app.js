const express = require('express');
const cookieParser= require('cookie-parser')
const morgan = require('./config/morganConfig')
const helmet = require('helmet');
const cors = require('cors');

const jsonwebtoken= require('jsonwebtoken')

//heroku port
// const port = process.env.PORT || 4000;
const userController = require('./controllers/userControllers');
const jwt = require('jsonwebtoken');

require('./utils/dbMongo.js');
require('./utils/dbElephant.js')


//Routes
const adRouter = require('./routes/adRoutes.js');
const adminRouter= require('./routes/adminRoutes')
const userRouter = require('./routes/userRoutes.js');
const favsRouter = require('./routes/favsRoutes.js');

//Middlewares
const verifyToken = require('./middlewares/verifiedToken')
const middle404 = require('./middlewares/error404.js');
const port =  process.env.PORT || 5000;
const app = express();




//Views
app.set('view engine','pug')
app.set('views','./views');

app.use(helmet());
app.use(express.json());
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/', adRouter);
app.use('/', adminRouter);
app.use('/api',adminRouter)
app.use('/api',userRouter);
app.use('/api',favsRouter);
app.use(express.static('public'))
app.use(cookieParser())

//WEB ROUTES


//Home(no log, user & admin)
app.get('/', async (req,res)=>{
    try{
       let cookies = req.headers.cookie
       const logged = await userController.checkLogged(cookies);
       
        if(!cookies){
            res.render('homeNoLog');
         }
         else{
            
            const check = await userController.checkUser(cookies);
            let cookiesSlice = cookies.slice(12);
            let decoded = jwt.verify(cookiesSlice,process.env.SECRET);
            if(check == true && logged==true){
                res.render('homeAdmin',{userName:decoded.username});
            }
            else if(check!==true && logged==true){
                res.render('homeUser',{userName:decoded.username});
            }
         }
       
        
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

app.get('/favourites',async (req,res)=>{
    try{
        let cookies = req.headers.cookie
     
       
        if(!cookies){
            res.redirect('/');
         }
         else{
            const logged = await userController.checkLogged(cookies);
            const check = await userController.checkUser(cookies);
            let cookiesSlice = cookies.slice(12);
            let decoded = jwt.verify(cookiesSlice,process.env.SECRET);
            if(check == true && logged == true){
                res.redirect('/');
            }
            else if(check !== true && logged == true){
                res.render('favourites');
            }
         }
       
        
        }
      
    catch(error){
        console.log(error.stack);
    }
}) 
//Dashboard Admin

app.get('/dashboard',async (req,res)=>{
    try{
        let cookies = req.headers.cookie
      
       
         if(!cookies){
             res.redirect('/');
          }
          else{
            const logged = await userController.checkLogged(cookies);
            const check = await userController.checkUser(cookies);
            let cookiesSlice = cookies.slice(12);
            let decoded = jwt.verify(cookiesSlice,process.env.SECRET);
            if(check == true && logged == true){
                res.render('dashboardAdmin');
            }
            else if(check !== true && logged == true){
                res.redirect('/');
            }
          }
        
        
    }
    catch(error){
        console.log(error.stack);
    }
})


//Profile

app.get('/profile',async (req,res)=>{
    try{
        let cookies = req.headers.cookie
      
        if(!cookies){
            res.redirect('/');
         }
         else{
           
            const logged = await userController.checkLogged(cookies);
            const check = await userController.checkUser(cookies);
            let cookiesSlice = cookies.slice(12);
            let decoded = jwt.verify(cookiesSlice,process.env.SECRET);
            if(check == true && logged == true){
                res.render('profileAdmin',{userName:decoded.username});
            }
            else if(check!==true && logged == true){
                res.render('profileUser',{userName:decoded.username});
            }
         }
              
        
       }
    catch(error){
        console.log(error.stack);
    }
})

app.get('api/users'),async (req,res)=>{
    try{
        let cookies = req.headers.cookie
     
   
        if(!cookies){
            res.redirect('/');
         }
         else{
            const logged = await userController.checkLogged();
            const check = await userController.checkUser(cookies);
            let cookiesSlice = cookies.slice(12);
            let decoded = jwt.verify(cookiesSlice,process.env.SECRET);
            if(check == true && logged == true){
                res.render('usersAdmin');
            }
            else if(check !== true && logged == true){
                res.redirect('/');
            }
         }
      
    }
    catch(error){

    }
}

app.get('/recoverPassword',(req,res)=>{
    try{
        res.render('recoverPass');
    }
    catch{
        console.log(error)
    }
})

app.get('/resetPassword',(req,res)=>{
    try{
       
         res.render('restorePass')
        }
    catch(error){
        console.log(error);
    }
})




// app.use(verifyToken);
app.use(middle404);



app.listen(process.env.PORT|| 3000, () => {
    console.log(`Server working in port ${port}`)
})
