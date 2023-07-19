import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categorySetCategory, deleteCategory, fetchCategory } from "../stores/actionCreator";

function Category() {
  const handleNavigate = useNavigate();

  const anchorOnClickHandler = (event) => {
    event.preventDefault();
    handleNavigate("/addCategory");
  };
  
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteCategory(id))
    
  }

  const data = useSelector((state) => state.category)

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  // console.log(data, 'isi dari data nih');
  const listCategory = data.map((category, index) => {
    return (
      <tr key={category.id}>
        <td>{index + 1}.</td>
        <td>{category.name}</td>
        <td>
          <button className="btn btn-secondary" onClick={() => handleDelete(category.id)} >Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {/* {JSON.stringify(categories)} */}
      <div className="container-fluid">
        <button onClick={anchorOnClickHandler} className="btn btn-secondary">Add</button>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{listCategory}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
