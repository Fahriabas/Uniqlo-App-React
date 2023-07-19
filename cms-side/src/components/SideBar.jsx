// import react from 'react'

function Sidebar() {
  return (
    <div className="bg-white">
      <div>
        <i className="bi bi-bootstrap-fill"></i>
        <span className="brand-name fs-4">Yousaf</span>
      </div>
      <div className="list-group list-group-flush">
        <a href="" className="list-group-item list-group-item-action my-2">
          <i className="bi bi-spedometer2"></i>
          <span>Dashboard</span>
        </a>
        <a href="" className="list-group-item list-group-item-action my-2">
          <i className="bi bi-house"></i>
          <span>HOME</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
