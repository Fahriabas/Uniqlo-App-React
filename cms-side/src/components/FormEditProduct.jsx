import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { detailProduct, fetchCategory, handleEditProduct } from "../stores/actionCreator";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditProductForm(){
  const forNavigate = useNavigate();

  const { id } = useParams()
  
  const detail = useSelector((state) => state.detailProduct)

  const [ editForm, setEditForm ] = useState({
    name: "",
    description: "",
    categoryId: "",
    mainImg: "",
    price: ""
  })


  const listCategory = useSelector((state) => state.category)

  const inputCategory = listCategory.map(el => {
    return (
       <option key={el.id} value={el.id}>{el.name}</option>
    )
  })

  // console.log(editForm);
  // console.log(detail, 'isi dari detail');
  // console.log(detail, 'isi dari detail didalam form edit nih')
  // console.log(editForm, 'isi dari edit form nih');

  const dispatch = useDispatch()


  const handleChange = (event) => {
    const { value, name } = event.target
    setEditForm({...editForm, [name]: value})


    setEditForm({
      ...editForm,
      [name] : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(editForm, 'ini setelah memencet sbmit <<<<<<');
    dispatch(handleEditProduct(editForm, id))
    forNavigate("/")
  }

  useEffect(()=> {
    dispatch(fetchCategory());
    dispatch(detailProduct(id))
  }, [])

  useEffect(() => {
    setEditForm({
      name: detail.name || "",
      description: detail.description || "",
      categoryId: detail.categoryId || "",
      mainImg: detail.mainImg || "",
      price: detail.price || ""
    })
  }, [detail])


    return (
        <div className="container d-flex flex-column">
        <h1>Tempat edit</h1>
        <form onSubmit={handleSubmit} >
          <div className="form-outline mb-4">
            <input type="text" className="form-control" name="name" value={editForm.name} onChange={handleChange} />
            <label className="form-label">Name</label>
          </div>

          <div className="form-outline mb-4">
          <input type="text" className="form-control" name="description" value={editForm.description} onChange={handleChange} />
          <label className="form-label">Description</label>
        </div>

        <div className="form-outline mb-4">
          <select name="categoryId"  className="form-control" value={editForm.categoryId} onChange={handleChange} >
            <option value="">chose...</option>
            {inputCategory}
          </select>
          <label className="form-label">Category</label>
        </div>
          <div className="form-outline mb-4">
            <input type="text" className="form-control" name="mainImg" value={editForm.mainImg} onChange={handleChange} />
            <label className="form-label">Image Url</label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" className="form-control" name="price" value={editForm.price} onChange={handleChange} />
            <label className="form-label">Price</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Edit
          </button>
        </form>
      </div>      
    )
}

export default EditProductForm