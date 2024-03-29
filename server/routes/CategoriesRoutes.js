const {getCategories, addCategory, deleteCategory} = require("../controllers/Categories-controller");
const express = require("express");
const router = express.Router();


router.get('/' , getCategories);
router.post('/', addCategory);
router.delete('/:category', deleteCategory);

module.exports = router;