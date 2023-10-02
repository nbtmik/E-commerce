const express = require("express");
const { getAllProducts,createProduct , updateProduct ,deleteProduct ,getProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatedUser,authorizedRoles } = require("../middleware/auth");

const router=express.Router();

router.route("/products").get( getAllProducts);
router.route("/product/new").post(isAuthenticatedUser ,authorizedRoles("admin"),createProduct); // is authenticated user is admin whi have the authority 
router.route("/product/:id").put(isAuthenticatedUser ,authorizedRoles("admin"),updateProduct).delete(isAuthenticatedUser ,authorizedRoles("admin"),deleteProduct); // delete is used as update only 
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

module.exports=router //to export route