import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { fetchDetail } from "../stores/actionCreator";

function DetailProduct() {
  const detail = useSelector((state) => state.detailProduct)
  const dispatch = useDispatch()
  const { id } = useParams()

  console.log(detail, 'isi dari detail nih');

  useEffect(() => {
    dispatch(fetchDetail(id))
  }, [dispatch])

  return (
    // <h1>{JSON.stringify(detail)}</h1>
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          {/* isi 1 */}
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={detail.mainImg}
              alt="..."
            />
          </div>
          {/* isi */}
          <div className="col-md-6">
            <div className="small mb-1">SKU: BST-498</div>

            <h1 className="display-5 fw-bolder">{detail.name}</h1>

            <div className="fs-5 mb-5">
              {/* <span class="text-decoration-line-through">$45.00</span> */}
              <span>Rp. {detail.price}</span>
            </div>

            <p className="lead">{detail.descriptions}</p>
            {/* dd */}
            <div className="d-flex">
              {/* <input type="number" value="1" style="max-width: 3rem" /> */}
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailProduct
