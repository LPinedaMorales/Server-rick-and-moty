const user = require('../utils/users')

const login = (req , res)=>{
    const {email, password} = req.query
    let access = false
    
    user.find((data)=>{
       if (data.email === email && 
        data.password === password){
            access = true
        }
    })

    res.json({access})
};

module.exports = {login};
