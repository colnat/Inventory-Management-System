const express = require("express");
const router = express.Router();
const Item = require("../models/item");

//add a item
router.post("/add-item",async function(req,res) {
   const item = new Item(req.body);
   try{
    await item.save();
    res.status(201).json({message:'Item saved successfully',item: item})
   } catch(err){
    res.status(400).json({message: err.message})
   }
});
    
//get items
router.get("/get-all-items", async function(req,res){
    try{
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err){
        res.status(404).json({message: err.message});
    }
});

//get item by id
router.get("/get-item-by-id/:id", async function(req,res){
    const id = req.params.id;
    try{
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch (err){
         res.status(404).json({message: err.message});
    }
});

//update item
router.patch("/update-item/:id", async function(req,res){
    const id = req.params.id;
    const newItem = req.body;
    try{
        await Item.findByIdAndUpdate(id,newItem);
         res.status(200).json({message: 'item has been updated', item: newItem});
    } catch(err){
        res.status(404).json({message: err.message});
    }
});

//delete item
router.delete("/delete-item/:id", async function(req,res){
   const id = req.params.id;
    try{
         await Item.findByIdAndDelete(id);
         res.status(200).json({message: 'item has been deleted'});
   } catch (err){
    res.status(404).json({message: err.message});
   }
});

module.exports = router;
