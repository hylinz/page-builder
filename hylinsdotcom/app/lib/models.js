import mongoose from "mongoose";


const pageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    body: [{
        type: {
            type: String, 
        },
        style: {
            type: String,
        },
        custom: {
            type: String,
        },
        text: {
            type: String,
        },
    }],
    template: {
        type: String,
        default: "default"
    },
    settings: [{
        name: {
          type: String,
          required: true
        },
        description: {
            type: String,
        },
        value: {
            type: mongoose.Schema.Types.Mixed,
            required: false
          }
      }]
}, {timestamps: true})






export const Pages = mongoose.models.Pages || mongoose.model("Pages", pageSchema)

