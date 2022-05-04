const express = require("express");
const router = express.Router();
const data = require("../data");
const findIndividualPost = data.findIndividualPost;

// Error checking, call to data function, render the data to handlebars

router.get("/:postid", async (req, res) => {
    try{
        // if (!user) throw "user not provided, please provide.";
       
        const postDetail = findIndividualPost.searchPost(req.params.postid);
        res.render("post/individualPost", {
            postDetail:postDetail
        })
        
    }
    catch (e){

    }
});



module.exports = router;