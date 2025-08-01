import mongoose from "mongoose";
const Schema = mongoose.Schema

const SessionSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    title: {
        type: String,
    },
    tags: [
        {type: String}
    ],
    json_file_url: {
        type: String
    },
    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft"
    }
}, {timestamps: true})

const SessionModel = mongoose.model("session", SessionSchema)
export default SessionModel

