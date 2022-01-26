const mongoose = require('mongoose')
mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
       console.log('No Anda el server ',err)
    } else{
        console.log('Atlas listo')
    }
})
