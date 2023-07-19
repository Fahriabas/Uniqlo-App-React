const BASE_URL = "http://localhost:3000"


export const productSetProduct = (payload) => ({
    type: "product/setProduct",
    payload,
})

export const categorySetCategory = (payload) => ({
    type: "category/setCategory",
    payload
})

export const detailSetDetail = (payload) => ({
    type: "detail/setDetail",
    payload
})




export function fetchProduct() {
    return (dispatch) => {
        fetch(`${BASE_URL}/pub/products`)
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch(productSetProduct(responseJson.data))
        })
        .catch((err) => {
            console.log(err);
        })
    }
}


export function handleLogin(payload){
    return (dispatch) => {
        fetch(`${BASE_URL}/pub/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
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

export function fetchDetail(id){
    return (dispatch) => {
    fetch(`${BASE_URL}/pub/detail/${id}`)
    .then((response) => response.json())
    .then((responseJson) => {
    //   console.log(responseJson, 'line 65');
    dispatch(detailSetDetail(responseJson.data))
    })
    }
}