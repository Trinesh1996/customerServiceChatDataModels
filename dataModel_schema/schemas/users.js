var mongoose = require("mongoose")
var Schema = mongoose.Schema

var users = new Schema({
    user_name: String
    ,user_email: String
    ,password: String
    ,user_role: String
    ,permissions: Array
    ,admin: Boolean
    ,contact: String
    ,chatWidgetModify: Boolean
    ,setChannelAccess: Boolean
    ,modifySystemTheme: Boolean
    ,integrationManagement: Boolean
    ,activeConversations: Number
    ,conversationMetrics: Array
})

var usersModel = mongoose.model("users", users)
module.exports = usersModel