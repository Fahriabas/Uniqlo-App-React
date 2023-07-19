import { useState, useEffect } from "react";


export default function useFetch(path = "users", id = ""){
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = id ? `http://localhost:3000/${path}/${id}` : `http://localhost:3000/${path}` 
        fetch(url)
        .then(async (res) => {
            // console.log(res.json());
            return res.json()
        })
        .then((val) => setData(val))
        .catch((err) => {
            console.log(err);
        })
    }, [path, id])

    return {
        data
    }
}