const { json } = require('body-parser');
const express = require('express');

const Post = require('../models/post');
const router = express.Router();


//add supplier details

router.post('/post/save',(req,res) =>{
    let newPost = new Post(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});



// view supplier details

router.get('/post',(req,res) =>{
    Post.find().exec((err,post) =>{
        if(err){
            return  res.status(400).json({
                Error:err
            });
        }
        return  res.status(200).json({
            success:true,
            existingPost:post
        });
    });
});


router.get(`/post/:id`,(req,res) =>{
 
    let postId= req.params.id;

    Post.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
       return  res.status(200).json({
           success:true,
           post
       });
    });
});

//update supplier details

router.put(`/post/update/:id`,(req,res) =>{
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if (err){
                return  res.status(400).json({error:err});
            }

            return  res.status(200).json({
                    success:"Updated Successfully"
            });
            
        }
    );
});



//delete supplier details

router.delete(`/post/delete/:id`,(req,res) =>{
    Post.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        

        return res.json({
            message:"Delete Successfull",deletePost
        });
        

    });
});


module.exports = router;