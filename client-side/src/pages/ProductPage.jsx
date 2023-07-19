import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  fetchProduct } from "../stores/actionCreator"
import { useNavigate } from "react-router"

function Product(){

    const forNavigate = useNavigate()
    const dispatch = useDispatch()


    const data = useSelector((state) => state.product)
    // const category = 
    useEffect(() => {
        dispatch((fetchProduct()))
    }, [dispatch])

    const handleDetail = (id) => {
        console.log(id, 'masuk ke detail<<<<<');
        // // dispatch(detailProduct(id))
        forNavigate(`/product/${id}`)
    }

    console.log(data, 'ini line 14 di page product');

    return (
        // <h1>{JSON.stringify(data)}</h1>
        <>
        <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-6">
        <div className="container">
          <p className="fs-3 text-center">KATEGORI</p>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item border-bottom border-secondary">
              <a className="nav-link" href="#">
                <p className="fs-5 text-center">Anak</p>
              </a>
            </li>
            <li className="nav-item border-bottom border-secondary">
              <a className="nav-link" href="#">
                <p className="fs-5 text-center">Bayi</p>
              </a>
            </li>
            <li className="nav-item border-bottom border-secondary">
              <a className="nav-link" href="#">
                <p className="fs-5 text-center">Pria</p>
              </a>
            </li>
            <li className="nav-item border-bottom border-secondary">
              <a className="nav-link" href="#">
                <p className="fs-5 text-center">Wanita</p>
              </a>
            </li>
          </ul>
          <div className="text-center">
            <button className="btn btn-outline-danger mt-3">TERAPKAN</button>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-6 gx-4">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          {data?.map((product) => {
            return (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src={product.mainImg} alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{product.name}</h5>
                      {/* <!-- Product price--> */}
                      Rp.{product.price}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleDetail(product.id)}
                        // onClick={() => navigate(`/detail/${product.id}`)}
                      >
                        Lihat Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

        </>
        
    )
}

export default Product