const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const listingSchema = Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image: {
        type:String,
        default:"https://unsplash.com/photos/white-and-grey-concrete-building-near-swimming-pool-under-clear-sky-during-daytime-2d4lAQAlbDA"
    },
    // image:{
    //     type:String,
    //     default:"https://unsplash.com/photos/white-and-grey-concrete-building-near-swimming-pool-under-clear-sky-during-daytime-2d4lAQAlbDA",
    //     set:(v)=>
    //         v===""?"https://unsplash.com/photos/white-and-grey-concrete-building-near-swimming-pool-under-clear-sky-during-daytime-2d4lAQAlbDA":v
    // },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    }
});

//Listing(listings) is model
const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;