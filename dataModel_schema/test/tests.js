const mocha = require("mocha")
const assert = require("assert")

// Data Models
var conversationModel = require("../schemas/conversations")
var agentModel = require("../schemas/users")
var customersModel = require("../schemas/customers")


describe("conversation collection tests", function ()
{
    it ("adds a new conversation to conversation collection", function (done){
        var conversation = new conversationModel({
            "receivedBy_agent_id": 109431709857
            ,"initiatedAt": Date.now()
            ,"closed": false
            ,"interationScore": 6
            ,"closedAt": null
            ,"customer_id": 109431709851
            ,"transferedChat": false
            ,"transferedToAgent_id": []
            ,"messages":
            [
                {"message_no": 0, "customer_id": 235151351, "reply": "hello <CRep1>", "timestamp": 139476134}
                ,{"message_no": 1, "customer_id": 213513513, "reply": "My Name is Jake! <CRep2>", "timestamp": 139476134}
                ,{"message_no": 0, "agent_id": 1135135135, "reply": "hey there jake! <ARep1>", "timestamp": 139476134, "quickReply": true}
                ,{"message_no": 0, "agent_id": 1135135513, "reply": "hey there jake! <ARep1>", "timestamp": 139476134}
            ]
        })
        conversation.save()
        .then(function ()
        {
            assert(conversation.isNew === false)
            return done()
        })
    })
    it ("adds new agent to agents collection", function (done)
    {
        var agents = new agentModel({
            user_name: "Trinesh"
            ,user_email: "trineshchetty@gmail.com"
            ,password: "ladjfha97397rfg17g7fg139"
            ,user_role: "customer_service_agent"
            ,permissions: ["r", "w", "u", "d", "FA"]
            ,admin: false
            ,contact: "+27 321 8098"
            ,chatWidgetModify: true
            ,setChannelAccess: true
            ,modifySystemTheme: true
            ,integrationManagement: false
            ,activeConversations: 8
            ,conversationMetrics: [null]
        })
        agents.save()
        .then(function ()
        {
            assert(agents.isNew === false)
            return done()
        })
    })
    it ("adds new customer to customers collection", function (done)
    {
        var customers = new customersModel({
            name: "Robert"
            ,surname: "Downy"
            ,email: "robert@gmail.com"
            ,contact: "+12 431 4134"
            ,address:
            {
                street: "1A Joseph street, california"
                ,city: "California"
                ,postal: "3134413"
                ,country: "USA"
            }
        })
        customers.save()
        .then(function ()
        {
            assert(customers.isNew === false)
            return done()
        })
    })
})