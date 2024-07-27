import React from "react"
import { Link } from "react-router-dom"

    
function NavBar() {
  return (<>
    <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
      <div className="container">
        <span className="symbols">
          <img src="star_half_17dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png" loading="lazy" alt="" />
        </span>

        <Link className="navbar-brand" to="/"><img src="home_16dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png" loading="lazy" alt="" />HOME</Link>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="/contact">Contact</Link>
            </li>
            </ul>
          
          </div>

          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/product">Product</Link></li>
    <li><Link className="dropdown-item" to="#">Another action</Link></li>
    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
  </ul>
</div>
      </div>
    </nav>

  </>)
}


export function  Footer(){

return(
  <>
    <div className="text-center p-4 border-top">
      <img src="star_half_17dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png"loading="lazy" alt=""  width={30} className=""/>
     
    </div>
  </>
)



}

export default  NavBar;
