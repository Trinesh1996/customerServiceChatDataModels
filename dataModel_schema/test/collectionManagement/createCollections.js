/**-----------------------------------------------------------------------------------
 * Defines a class for creating collections for mongoDB chat
 *
 * @class CreateCollection
 * @constructor
 * @namespace CreateCollection
 -------------------------------------------------------------------------------------*/

var mongoose = require("mongoose")


function CreateCollection ()
{
    var create =  Object.create(CreateCollection.prototype)
    return create
}

 
/**-----------------------------------------------------------------------------------
 * Creates conversation collection
 *
 * @method createConversationCollection
 * @public
 -------------------------------------------------------------------------------------*/
 
CreateCollection.prototype.createConversationCollection = function createConversationCollection (done)
{
    mongoose.connection.createCollection("conversations", function (err, res)
    {
        if (err)
        {
            return done (err)
        }
        else
        {
            return done (null, res)
        }
    })
}
 
/**-----------------------------------------------------------------------------------
 * Creates an agents/user collection for storing agents information
 *
 * @method createUserAgentCollection
 * @public
 -------------------------------------------------------------------------------------*/
 
CreateCollection.prototype.createUserAgentCollection = function createUserAgentCollection  (done)
{
    mongoose.connection.createCollection("users", function (err, res)
    {
        if (err)
        {
            return done (err)
        }
        else
        {
            return done (null, res)
        }
    })
}
/**-----------------------------------------------------------------------------------
 * Creates a customer collection for storing customer related information
 *
 * @method createCustomerCollection
 * @public
 -------------------------------------------------------------------------------------*/
 
CreateCollection.prototype.createCustomerCollection = function createCustomerCollection (done)
{
    // customers collection
    mongoose.connection.createCollection("customers", function (err, res)
    {
        if (err)
        {
            return done (err)
        }
        else
        {
            return done (null, res)
        }
    })
}

/**-----------------------------------------------------------------------------------
 * Executes createCollections for chat
 *
 * @method executeCreateCollections
 * @public
 -------------------------------------------------------------------------------------*/
 
CreateCollection.prototype.executeCreateCollections = function (done)
{
    var self = this
    self.createConversationCollection(function (err, res)
    {
        if (err)
        {
            return done (err)
        }
        else
        {
            console.log("Created conversation Collection")
            self.createUserAgentCollection(function (err, res)
            {
                if (err)
                {
                    return done (err)
                }
                else
                {
                    console.log("Created userAgent Collection")
                    self.createCustomerCollection(function (err, res)
                    {
                        if (err)
                        {
                            return done (err)
                        }
                        else
                        {
                            console.log("Created customer Collection")
                            return done(null, res)
                        }
                    })
                }
            })
        }
    })
}

module.exports = CreateCollection