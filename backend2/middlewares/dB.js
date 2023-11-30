const mongoose=require ('mongoose')
const config = require ('config')
const uri = config.get('DB_STRING')

exports.connectToDB=()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log('Database is connected')).catch(()=>console.log('Error'))
}