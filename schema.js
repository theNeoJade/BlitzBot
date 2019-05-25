const mongoose = require("mongoose");

const schema = mongoose.Schema({
    guildName: String,
    guildID: String,
    guildOwner: String,
    guildOwnerID : String,
    welcomerblocked: String,
    annoucneblocked: String,
    welcomerblocked: String
})
module.exports = mongoose.model("guilddetails", schema)