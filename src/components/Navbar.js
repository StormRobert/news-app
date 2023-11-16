import React from 'react'

function Navbar({setCategory}) {
  return (
     
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <span className='badge bg-light text-dark fs-4'>StormReports</span>  {/* acts as our logo */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("politics")}>Politics</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("top")}>Top</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("world")}>World</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar