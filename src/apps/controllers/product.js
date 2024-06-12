
const CategoryModel=require("../models/category");
const ProductModel=require("../models/product");
const fs=require("fs");
const slug=require("slug");
const path=require("path");
exports.index= async(req,res)=>{
    const products = await ProductModel.find().populate('cate_id');
        res.status(200).json({
            status: 'success',
            data: {
                docs:products
            }
        });

}
exports.CategoryProducts=async (req,res)=>{
    const { id } = req.params;
    const products = await ProductModel.find({cate_id}).populate('cate_id');
    res.status(200).json({
        status: 'success',
        data: {
            docs:products
        }
    });


}
exports.show=async(req,res)=>{
    const {id}=req.params;
    const products =await ProductModel.findById(id);
    res
    .status(200)
    .json({
        status:"success",
        data:{
            docs:products,
        }
    })
        
    
}
exports.store = async (req, res) => {
    const { file, body } = req;
    console.log(file);
    console.log(body);
    const product = {
        name: body.name,
        slug: slug(body.name),
        price: body.price,
        warranty: body.warranty,
        accessories: body.accessories,
        promotion: body.promotion,
        status: body.status,
        cate_id: body.cate_id,
        is_stock: body.is_stock,
        featured: body.featured == "on",
        description: body.description
    };
    console.log(product);

    // if (file) {
    //     const thumbnail = "products/" + file.originalname;
    //     fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
    //     product["thumbnail"] = thumbnail;

       
    //         await new ProductModel(product).save();
    //         res.status(201).json({
    //             status: "success",
    //             message: "Product created successfully"
    //         });
    //         // console.log(product);
     
    // }
};
exports.delete=async(req,res)=>{
    const id=req.params.id;
    await ProductModel.deleteOne({_id:id});
    res
    .status(204)
    .json({
        status:"success",
        message:"delete products successlly"
    })
}



