import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../stores/actionCreator";

function Dashboard() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.dashboard)
  const BASE_URL = "http://localhost:3000"

  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch]);

  console.log(data, 'isi dari data nih<<<<<<<');

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
      id="dashboard-section"
    >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-2">Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    Total Products
                  </h6>
                  <h6 className="card-title card-number" id="total-product">
                    {data.totalProduct}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    Total Categories
                  </h6>
                  <h6 className="card-title card-number" id="total-category">
                    {data.totalCategory}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
