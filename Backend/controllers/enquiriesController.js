// const ApiFeatures = require("../utils/apiFetaures");
const Enquiry = require("../models/enquiriesModel");
// const { default: errorHandler } = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create product -- admin
// exports.createProduct = async (req, res, next) => {
//   const productCreated = await Product.create(req.body);
//   res.status(200).json({
//     success: true,
//     productCreated,
//   });
// };
exports.createEnquiry = catchAsyncErrors(async (req, res, next) => {
  //   req.body.user = req.user.id;
  const EnquiryCreated = await Enquiry.create(req.body);
  res.status(200).json({
    success: true,
    EnquiryCreated,
  });
});

// Get All Product
// exports.getAllProducts = async (req, res) => {
//   const AllProducts = await Product.find();
//   res.status(200).json({ success: true, AllProducts });
// };
// exports.getAllProducts = catchAsyncErrors(async (req, res) => {
//   const resultPerPage = 5;
//   const productCount = await Enquiry.countDocuments();
//   const apiFetature = new ApiFeatures(Product.find(), req.query)
//     .search()
//     .filter()
//     .pagination(resultPerPage);
//   // const AllProducts = await Product.find();
//   const AllProducts = await apiFetature.query;
//   res.status(200).json({ success: true, AllProducts, productCount });
// });

//Get a particular product details
// exports.getProductDetails = async (req, res, next) => {
//   const productdetails = await Product.findById(req.params.id);
//   if (!productdetails) {
//     return next(new errorHandler("Product not found", 404));
//   }
//   res.status(200).json({
//     success: true,
//     productdetails,
//   });
// };
// exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
//   const productdetails = await Enquiry.findById(req.params.id);
//   if (!productdetails) {
//     return next(new errorHandler("Product not found", 404));
//   }
//   res.status(200).json({
//     success: true,
//     productdetails,
//   });
// });
//update a product -- Admin
// exports.updateProduct = catchAsyncErrors(async (req, res) => {
//   let updatedProduct = await Enquiry.findById(req.params.id);
//   if (!updatedProduct) {
//     // return res.status(500).json({
//     //   success: false,
//     //   message: "Product not found",
//     // });
//     return next(new errorHandler("Product not found", 404));
//   }
//   updatedProduct = await Enquiry.findById(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });
//   res.status(200).json({
//     success: true,
//     updatedProduct,
//   });
// });

//Delete a product
// exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
//   const deletedProduct = await Enquiry.findById(req.params.id);
//   if (!deletedProduct) {
//     // return res.status(500).json({
//     //   success: false,
//     //   message: "Product does not exist to delete.",
//     // });
//     return next(new errorHandler("Product not found", 404));
//   }
//   await deletedProduct.remove();
//   res.status(200).json({
//     success: true,
//     message: "Product deleted",
//   });
// });
