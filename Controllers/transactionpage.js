const Transi = require('../Database/Models/transactions2')

module.exports=async(req,res)=>{
    const transget = await Transi.find({})
    console.log(transget)
    res.render('transactions',{transget: transget})
}