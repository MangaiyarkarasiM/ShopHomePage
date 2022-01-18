import Button from './Button';

const Header = (props) => {
    return(
      <div>
      {
      props.cartItems ? (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
          <a className="navbar-brand" href="#">Start Shopping</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Shop
              </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">All Products</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Popular Items</a>
                  <a className="dropdown-item" href="#">New Arrivals</a>
                </div>
              </li>
            </ul>
            <Button className="btn-outline-dark" data_toggle="modal" data_target="#cartModal" onClick={props.onCartClick}><i className="fa fa-shopping-cart"></i> Cart <span className="badge text-white bg-dark rounded-pill">{props.cartItems.length?props.cartItems.length:0}</span></Button>
          </div>
        </div>
      </nav>) : (<div className='bg-dark text-white text-center py-5 center'>
                   <h1 className='px-4'>{props.title}</h1>
                   <p className='text-muted'>{props.desc}</p>
                 </div>)
      }
    </div>
    )
  }
  
  export default Header;