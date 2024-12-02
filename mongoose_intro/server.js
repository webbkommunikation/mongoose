const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
});

const Product = mongoose.model("products", productSchema);

// Logs all the products in our collection.
async function fetchProducts() {
  const products = await Product.find();
  console.log(products);
}

// Inserts a new hardcoded product.
async function createProduct() {
  await Product.create({ name: "Toothbrush", price: 60, inStock: true });
}

// Updates a hardcoded product.
async function updateProduct() {
  await Product.updateOne(
    { name: "Toothbrush" },
    { price: 32 },
    { runValidators: true }
  ); // Run validators makes sure that the new product does not break any validators.
}

async function deleteProduct() {
  await Product.deleteOne({ name: "Toothbrush" });
}

fetchProducts();
createProduct();
updateProduct();
deleteProduct();
/*
1. Connect
2. Vad är ett schema?
3. Hitta alla produkter med .find().
4. Skapa ett nytt dokument med schema med .create().
5. PAUS
6. Visa fel med schema.
7. required property, min, max
8. delete och update product.
*/
