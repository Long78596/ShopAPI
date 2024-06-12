const CategoryModel=require("../models/category");
const slug=require("slug");
const index= async(req,res)=>{
    const category = await CategoryModel.find();
    res
    .status(201)
    .json({
        status:"success",
        data:{
            docs:category,
        }
    })
    
    
    
}
const show=async(req,res)=>{
    const {id}=req.params;
    const category= await CategoryModel.findById(id);
     res
     .status(200)
     .json({
        data:{
            status:"success",
            docs:category
        }
     })
}
const store=async(req,res)=>{
    const body=req.body;
    const category={
        title:body.title,
       slug:slug(body.title),
        description:body.description,
    }
    
    // console.log(category);
    await  new CategoryModel(category).save();
    res
    .status(201)
    .json({
        status:"success",
        mesage:"create cateogry successfully",
    })
}
const deleteCategory= async(req,res)=>{
       const {id}=req.params;
      await CategoryModel.deleteOne({_id:id}) ;
      res
      .status(204)
      .json({
        status:"success",
        message:"delete category successfully",
      })


}
const updateCategory=async(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const category={
        title:body.title,
       slug:slug(body.title),
        description:body.description,
    }
    await CategoryModel.updateOne({_id:id},category);
    res
      .status(400)
      .json({
        status:"success",
        message:"update category successfully",
      })
    // console.log(update);
    

    
}
module.exports = {
    index,
    show,
    store,
    deleteCategory,
    updateCategory,
};
