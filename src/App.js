import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { addProduct, updateProduct, deleteProduct } from "./productReducer";
import { addProductToCart } from "./cartReducer";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart);
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(productDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(productDetails);
    if (isEditing) {
      dispatch(updateProduct(productDetails));
    } else {
      dispatch(addProduct({ ...productDetails, id: Date.now() }));
    }
    setProductDetails({
      name: "",
      price: "",
      description: "",
    });
  };
  // console.log(cartItems);
  const handleEdit = (product) => {
    console.log(product);
    setProductDetails(product);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addProductToCart(product));
  };
  return (
    <div className="App">
      <button className="btn btn-success position-absolute end-0 m-2 btn-lg">
        Cart {cartItems.length}
      </button>
      <div className=" m-3 p-3">
        <h1 className=" text-center">Create Product</h1>
        <form
          className="col-4 border p-3 rounded-2 mx-auto"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={productDetails.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="form-control"
            value={productDetails.price}
            onChange={handleChange}
            required
          />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            value={productDetails.description}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            value="Create Product"
            className="btn btn-success container mt-3"
          />
        </form>
      </div>
      <h1 className=" text-center">Products</h1>
      <table className="products-list table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return (
              <tr className="" key={i}>
                <th scope="row">{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className=" btn btn-danger btn-sm ms-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    delete
                  </button>
                  <button
                    className=" btn btn-success btn-sm ms-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
