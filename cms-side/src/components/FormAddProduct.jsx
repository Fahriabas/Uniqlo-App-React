import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, fetchCategory } from "../stores/actionCreator";
import { useNavigate } from "react-router-dom";

function AddProductForm() {

  const [ createForm, setCreateForm ] = useState({
    name: "",
    description: "",
    categoryId: "",
    mainImg: "",
    price: "",
    image1: "",
    image2: "",
    image3: ""
  }) 

  const forNavigate = useNavigate();

  const listCategory = useSelector((state) => state.category)
  // console.log(listCategory, 'isi dari list');
  console.log(createForm, 'isi dari createForm');


  const inputCategory = listCategory.map(el => {
    return (
       <option key={el.id} value={el.id}>{el.name}</option>
    )
  })

  const handleChange = (event) => {
    const { value, name } = event.target

    setCreateForm({
      ...createForm,
      [name] : value
    })
  }

  // console.log(createForm, 'isi dari createForm nih');


  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    const imageUrls = []

      // Cek input gambar 1
  if (createForm.image1) {
    imageUrls.push(createForm.image1);
  }

  // Cek input gambar 2
  if (createForm.image2) {
    imageUrls.push(createForm.image2);
  }

  // Cek input gambar 3
  if (createForm.image3) {
    imageUrls.push(createForm.image3);
  }

    // Buat objek data yang akan dikirim ke backend
    const formData = {
      name: createForm.name,
      description: createForm.description,
      categoryId: createForm.categoryId,
      mainImg: createForm.mainImg,
      price: createForm.price,
      imageUrls: imageUrls, // Sertakan array URL gambar
    };

    dispatch(createProduct(formData))
    forNavigate("/")
  };

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  return (
    <div className="container d-flex flex-column">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="name" onChange={handleChange} />
          <label className="form-label">Name</label>
        </div>
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="description" onChange={handleChange} />
          <label className="form-label">Description</label>
        </div>
        <div className="form-outline mb-4">
          <select name="categoryId"  className="form-control" onChange={handleChange} >
            <option value="">chose...</option>
            {inputCategory}
          </select>
          <label className="form-label">Category</label>
        </div>
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="mainImg" onChange={handleChange} />
          <label className="form-label">Image Url</label>
        </div>
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="image1" onChange={handleChange} />
          <label className="form-label">More Image</label>
        </div>
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="image2" onChange={handleChange} />
          <label className="form-label">More Image</label>
        </div>
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="image3" onChange={handleChange} />
          <label className="form-label">More Image</label>
        </div>
        <div className="form-outline mb-4">
          <input type="text" className="form-control" name="price" onChange={handleChange} />
          <label className="form-label">Price</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
