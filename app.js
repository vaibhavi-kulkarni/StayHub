const express=require("express");
const app=express();
const mongoose = require('mongoose');
const Listing =require("./models/listing.js");
const path=require("path");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set(path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

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

//index route
app.get("/listings",async (req,res)=>{
    let allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("new.ejs");
});

//show route
app.get("/listings/:id", async (req ,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    res.render("show.ejs",{listing});
});

//create route
app.post("/listings",async(req,res)=>{
    // let {title , description , url, price , location , country}= req.body;
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    console.log(newListing);
    res.redirect("/listings");
    // res.send("post request accepted");
});


//edit route
app.get("/listings/:id/edit",(req,res)=>{
    let {id}=req.query;
    let listing=Listing.findById(id);
    console.log(listing);
    res.render("edit.ejs",{listing});
});


//update route
app.put("/listings/:id" ,async(req,res)=>{
    let {id}= req.params;
    let updatedListing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log(updatedListing);
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id",async(req,res)=>{
    let {id}= req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

app.get("/",(Req,res)=>{
    res.send("root route");
});

// app.get("/test",(req,res)=>{
//     let sampleListing= new listing({
//         title:"Villa",
//         description:"New Villa",
//         price:10000,
//         location:"Goa",
//         country:"India"
//     });
//     sampleListing
//         .save()
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
    
//     res.send("Testing successfull");
// });


app.listen(8080,(req,res)=>{
    console.log("listening..");
});