const BASE_URL = "http://localhost:3000"

export const productSetProduct = (payload) => ({
    type: "product/setProduct",
    payload,
})


export const categorySetCategory = (payload) => ({
    type: "category/setCategory",
    payload
})

export const addCategory = (payload) => ({
    type: "category/addCategory",
    payload
})


export const dashboardSetDashboard =  (payload) => ({
  type: "dashboard/setDashboard",
  payload
})


export const detailSetDetail = (payload) => ({
  type: "detail/setDetail",
  payload
})

 // later
 export function fetchProduct() {
  // The `extraArgument` is the third arg for thunk functions
  return (dispatch, getState, api) => {
    const access_token = localStorage.getItem("access_token")
    // you can use api here
    fetch(`${BASE_URL}/products`, {
      method: "GET",
      headers: {
        "access_token": access_token
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      // console.log(jsonData, '<<<');
      console.log(jsonData.data, 'isi dari json data line 30');
      dispatch(productSetProduct(jsonData.data))
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function fetchCategory() {
    return (dispatch, getState, api) => {
      const access_token = localStorage.getItem("access_token")
        fetch(`${BASE_URL}/categories`, {
          method: "GET",
          headers: {
            "access_token": access_token
          }
        })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          // console.log(jsonData, 'isi json data');
          dispatch(categorySetCategory(jsonData.data))
        })
        .catch((err) => {
          console.log(err);
        })
    }
}

export function createCategory(createForm){
    return (dispatch, getState, api) => {
      const access_token = localStorage.getItem("access_token")
        fetch(`${BASE_URL}/category`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "access_token": access_token
            },
            body: JSON.stringify(createForm)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data, 'isi dari data<<<<');
            if(data.ok){
              dispatch(fetchCategory())
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function createProduct(createForm){
    return (dispatch, getState, api) => {
      console.log(createForm, 'isi dari createForm');
      const access_token = localStorage.getItem("access_token")
        fetch(`${BASE_URL}/product`, {
            method: "POST",
            headers: {
              "Content-Type" : "application/json",
              "access_token": access_token
            },
            body: JSON.stringify(createForm)
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data, 'success create Data');
            if(data.ok){
              dispatch(fetchProduct())
            }
          })
    }
}

export function deleteProduct(id){
  return (dispatch, getState, api) => {
    const access_token  = localStorage.getItem("access_token")
    fetch(`${BASE_URL}/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application.json",
        "access_token" : access_token
      }
    })
    .then((response) => {
      console.log(response, 'isi dari response di line 130');
      if(response.ok){
        // dispatch(productSetProduct([]))
       dispatch(fetchProduct())
      } else {
        throw new Error("failed to delete")
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


export function registerAdmin(registerForm){
  console.log(registerForm, 'isi dari registerForm');
  console.log(registerForm.email, '<<<<<');
  return (dispatch, getState, api) => {
    const access_token = localStorage.getItem("access_token")
    fetch(`${BASE_URL}/adminRegister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access_token": access_token
      },
      body: JSON.stringify({
        email: registerForm.email,
        userName: registerForm.userName,
        password: registerForm.password,
        Address: registerForm.Address,
        phoneNumber: registerForm.phoneNumber
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.ok){
        dispatch(fetchProduct())
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


export function fetchDashboard(){
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token")
    fetch(`${BASE_URL}/dashboard`, {
      method: "GET",
      headers: {
        "access_token": access_token
      }
    })
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      dispatch(dashboardSetDashboard(jsonData))
    })
  }
}

export function deleteCategory(id){
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token")
    fetch(`${BASE_URL}/categories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application.json",
        "access_token": access_token
      }
    })
    .then((response) => {
      console.log(response, 'isi dari response nih');
      if(response.ok){
        dispatch(fetchCategory())
      } else {
        throw new Error("failed to delete category")
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


export function detailProduct(id){
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token")
    fetch(`${BASE_URL}/detail/${id}`, {
      method: "GET",
      headers: {
        "access_token": access_token
      }
    })

    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(detailSetDetail(responseJson.data))
    })
  }
}

export function handleLogin(payload){
  return (dispatch) => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Perbaiki penulisan header
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password // Perbaiki penggunaan payload.password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      const { access_token } = responseJson
      localStorage.setItem("access_token", access_token)
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function handleEditProduct(payload, id){
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token")
    console.log(payload, 'isi dari payload yang ada didalam handleEditProduct');
    fetch(`${BASE_URL}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "access_token": access_token
      },
      body: JSON.stringify(payload)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson);
      if(responseJson.ok){
        dispatch(fetchProduct())
      }
    })
  }
}