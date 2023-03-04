const express = require("express");
const router = express.Router();

// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  //   getAllProducts,
  createEnquiry,
  //   updateProduct,
  //   deleteProduct,
  //   getProductDetails,
} = require("../controllers/enquiriesController");
// router.route("/get/products").get(getAllProducts);
router.route("/enquiry/new").post(createEnquiry);
// //Url will be same for updating a product or deleting a product
// router
//   .route("/product/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
//   .get(getProductDetails);
//Get details of a particular product
// router.route("product/:id").get(getProductDetails);

module.exports = router;
