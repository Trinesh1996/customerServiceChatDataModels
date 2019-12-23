const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Schema
const agentObjectId = mongoose.Schema.Types.ObjectId
const customerObjectId = mongoose.Schema.Types.ObjectId

const conversationSchema = new Schema({
    receivedBy_agent_id: agentObjectId
    ,initiatedAt: Date
    ,closed: Boolean
    ,interationScore: Number
    ,closedAt: Date
    ,customer_id: customerObjectId
    ,transferedChat: Boolean
    ,transferedToAgent_id: Array
    ,messages: Array
})

const conversationModel = mongoose.model("conversations", conversationSchema)

module.exports = conversationModel