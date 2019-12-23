/**-----------------------------------------------------------------------------------
 * Defines a class for deleting collections for mongoDB chat
 *
 * @class DropCollection
 * @constructor
 * @namespace DropCollection
 -------------------------------------------------------------------------------------*/

var mongoose = require("mongoose")

function DropCollection ()
{
    var drop =  Object.create(DropCollection.prototype)
    return drop
}

 
/**-----------------------------------------------------------------------------------
 * deletes conversation collection
 *
 * @method deleteConversationCollection
 * @public
 -------------------------------------------------------------------------------------*/
 
DropCollection.prototype.deleteConversationCollection = function deleteConversationCollection (done)
{
    // deletes conversations collection
    mongoose.connection.collections.conversations.drop(function (error, result)
    {
        if (error)
        {
            console.log(error)
            return done(error)
        }
        else
        {
            console.log("successfully deleted conversation collection: ", result)
            return done(null, result)
        }
    })
}

/**-----------------------------------------------------------------------------------
 * deletes user/agent collection
 *
 * @method deleteUserAgentCollection
 * @public
 -------------------------------------------------------------------------------------*/
 
DropCollection.prototype.deleteUserAgentCollection = function deleteUserAgentCollection (done)
{
    // deletes user/agent collection
    mongoose.connection.collections.users.drop(function (error, result)
    {
        if (error)
        {
            console.log(error)
            return done(error)
        }
        else
        {
            console.log("successfully deleted user/agent collection: ", result)
            return done(null, result)
        }
    })
}

/**-----------------------------------------------------------------------------------
 * deletes user/agent collection
 *
 * @method deleteCustomerCollection
 * @public
 -------------------------------------------------------------------------------------*/
 
DropCollection.prototype.deleteCustomerCollection = function deleteCustomerCollection (done)
{
    // deletes customer collection
    mongoose.connection.collections.customers.drop(function (error, result)
    {
        if (error)
        {
            console.log(error)
            return done(error)
        }
        else
        {
            console.log("successfully deleted customer collection: ", result)
            return done(null, result)
        }
    })
}

/**-----------------------------------------------------------------------------------
 * Executes deletion of collections
 *
 * @method execDeleteCollections
 * @public
 -------------------------------------------------------------------------------------*/
 
DropCollection.prototype.execDeleteCollections= function execDeleteCollections (done)
{
    // deletes collections
    var self = this
    self.deleteConversationCollection(function (err, res)
    {
        if (err)
        {
            return done (err)
        }
        else
        {
            self.deleteUserAgentCollection(function (err, res)
            {
                if (err)
                {
                    return done (err)
                }
                else
                {
                    self.deleteCustomerCollection(function (err, res)
                    {
                        if (err)
                        {
                            return done (err)
                        }
                        else
                        {
                            console.log(res)
                            return done (null, res)
                        }
                    })
                }
            })
        }
    })
}

module.exports = DropCollection
