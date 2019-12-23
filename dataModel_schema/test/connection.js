const mongoose = require("mongoose")

var createCollections = require("./collectionManagement/createCollections")
var deleteCollections = require("./collectionManagement/deleteCollections")
// Use native javascript native Promise Library
mongoose.Promise = global.Promise
// run functions before connecting to mongo db instance
before(function (done)
{
    // temporarily connects to mongo db instance
    // refresh IP in atlas when trying to connect
    mongoose.connect("mongodb+srv://trinesh:Trinesh1997@@livechatcluster-9b134.azure.mongodb.net", 
    {
        useNewUrlParser: true
        ,useUnifiedTopology: true
    })
    
    mongoose.connection.once("open", function ()
    {
        console.log("connected to mongodb cluster")
        // Creates collections
        createCollections().executeCreateCollections(function ()
        {
            return done()
        })
       
      
    }).on("error", function (error)
    {
        console.log("Connection error: ", error)
        return done(error)
    })
})


// Deletes collections after inserts have been made
// after(function (done)
// {
//     // deletes collections
//     deleteCollections().execDeleteCollections(function (err, res)
//     {
//         if (err)
//         {
//             console.log(err)
//             return done (err)
//         }
//         else
//         {
//             console.log(res)
//             return done (null, res)
//         }
//     })
// })
