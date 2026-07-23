const express =  require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.use(express.json());

const user = {
  id: 1,
  username: "admin",
  password: bcrypt.hashSync("12345", 10)
};

app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    
    //check valid user
    if (username !== user.username){
        return res.status(401).json({
            msg : "Invalid User"
        })
    }
    else{
        //check validation of password
        const validPassword = bcrypt.compareSync(password, user.password);
        
        if(!validPassword){
            return res.status(401).json({
                msg : "Invalid Password"
            }) 
        }
        //generation of token
        // jwt - sign(payload,jwt_secret_key), verify(token, jwt_secret_key)

        const token = jwt.sign({
            id : user.id,
            username : user.username,
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn : '1h'
        });

        res.json({
            msg: "Successful login ...",
            token
        })

    }
})
app.listen(4000,()=>{
    console.log("Server is working properly")
});
