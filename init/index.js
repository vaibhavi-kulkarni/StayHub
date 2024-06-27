//logic of data initialization
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js")  //schema

main()
    .then(()=>{
        console.log("connected with mongodb");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const initDb= async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Initialization is done");
};

initDb()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });