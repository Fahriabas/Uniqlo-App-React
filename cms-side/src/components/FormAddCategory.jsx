import { useSelector, useDispatch } from "react-redux"
import { addCategory, createCategory } from "../stores/actionCreator"
import { useState } from "react"
import { useNavigate } from "react-router-dom";



function AddCategoryForm(){
    const [ createForm, setCreateForm ] = useState({
        name: ""
    })
    const forNavigate = useNavigate();


    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.elements.name.value

        dispatch(createCategory(createForm))
        forNavigate("/category")
    }

    const handleChange = (event) => {
        const { value, name } = event.target

        setCreateForm({
            ...createForm,
            [name]: value
        })
    }




    return (
        <div className="container d-flex flex-column">
            <h1>Add New Category</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="name"  value={createForm.name} onChange={handleChange}/>
                    <label className="form-label">Category</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
            </form>
        </div>
    )
}

export default AddCategoryForm