import { Schema,model } from "mongoose";


const cities = new Schema(
    [{

    city:{
        type: String,
        required:true
    },

    country:{
        type: String,
        required:true
    },

     population:{
        type: String,
        required:true
    },

    descriptionImages: {
        type: Array,
        required:true
    },

    img:{
        type: Array,
        required:true
    },

    location:{
        type: String,
        required:true
    },

    map:{
        type: String
    }
},
    {

    city:{
        type: String,
        required:true
    },

    country:{
        type: String,
        required:true
    },

     population:{
        type: String,
        required:true
    },

    descriptionImages: {
        type: Array,
        required:true
    },

    img:{
        type: Array,
        required:true
    },

    location:{
        type: String,
        required:true
    },

    map:{
        type: String
    }
},
{
        city:{
            type: String,
            required:true
        },

        country:{
            type: String,
            required:true
        },
    
         description:{
            type: String,
            required:true
        },

        descriptionImages: {
            type: Array,
            required:true
        },
    
        img:{
            type: Array,
            required:true
        },

        location:{
            type: String,
            required:true
        },

        map:{
            type: String
        }
    },
    {
        
            city:{
                type: String,
                required:true
            },

            country:{
                type: String,
                required:true
            },
        
             population:{
                type: String,
                required:true
            },

            descriptionImages: {
                type: Array,
                required:true
            },
        
            img:{
                type: Array,
                required:true
            },

            location:{
                type: String,
                required:true
            },

            map:{
                type: String
            }
        }
        ]
)


const registerCities = model('City',cities);
export default registerCities;