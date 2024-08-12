import mongoose from "mongoose";


const pageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
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

const GlobalSettingsSchema = new mongoose.Schema({
    siteTitle: {
      type: String,  
    },
    siteDescription: {
      type: String,  
    },
    header: [{
        enabled: {
            type: Boolean,
            default: true
        },
        style: {
            type: String,
            default: "default",
        },
        menu: [{
            enabled: {
                type: Boolean,
                required: true,
                default: true
            },
            options: [{
                url: {
                    type: String,
                    required: true
                },
                displayName: {
                    type: String,
                    required: true
                }
            }
            ]
        }]
    }],
    footer: [{
        enabled: {
            type: Boolean,
            default: true
        },
        style: {
            type: String,
            default: "default",
        },
        links: [{
            enabled: {
                type: Boolean,
                required: true,
                default: true
            },
            options: {
                url: {
                    type: String,
                },
                displayName: {
                    type: String,
                }
            }
        }],
        social: [{
            enabled: {
                type: Boolean,
                required: true,
                default: false
            },
            options: {
                url: {
                    type: String,
                },
                image: {
                    type: String,
                }
            }
        }],
        copyright: {
            type: String
        }
    }],
    robots: {
        type: String,
    }
}, { timestamps: true });


const activitySchema = new mongoose.Schema({
    description: {
      type: String,
    },
    formattedDate: {
      type: String,
    },
  }, { timestamps: true });

export const Pages = mongoose.models.Pages || mongoose.model("Pages", pageSchema)
export const GeneralSettings = mongoose.models.GeneralSettings || mongoose.model("GeneralSettings", GlobalSettingsSchema)
export const Activity = mongoose.models.Activity || mongoose.model("Activity", activitySchema)

