import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, fetchProduct, productSetProduct } from "../stores/actionCreator";

function Product() {
  const handleNavigate = useNavigate();

  const anchorOnClickHandler = (event) => {
    event.preventDefault();
    handleNavigate("/addProduct");
  };

  const buttonEdit = (id) => {

    handleNavigate(`/editProduct/${id}`)
  }
  const dispatch = useDispatch()

  const handleDelete = (id) => {

    dispatch(deleteProduct(id))
    
  }

  const data = useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  // console.log(data[0]['category.name'], '<<<<<line 31');

  const listProduct = data.map((el, index) => {
    return (
    
      <tr key={el.id}>
        <td>{index + 1}.</td>
        <td>{el.name}</td>
        <td>{el["Category.name"]}</td>
        <td>{el.price}</td>
        <td>
          <img src={el.mainImg} alt="imgProduct" className="product-image" />
        </td>
        <td>
          <button className="btn btn-secondary" onClick={() => buttonEdit(el.id)} >Edit</button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => handleDelete(el.id)} >Delete</button>
        </td>
      </tr>
    
    );
  });

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div className="container-fluid">
        <button className="btn btn-secondary" onClick={anchorOnClickHandler}>Add</button>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{listProduct}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

//hook reeact lecture pagi
//hook cuman bisa ditaruh didalam functional component contoh useState dll...
//hook tidak boleh ditaruh didalam sebuah looping dan juga didalam suatu condisional apapun
