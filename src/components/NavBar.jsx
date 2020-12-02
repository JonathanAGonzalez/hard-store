//SCSS
import './scss/NavBar.scss';

//COMPONENT NAVBAR
const NavBar = () => {
  return (
    <nav className='nav row'>
      <div className='container-nav col-12 col-md-4'>
        <div className='menu categories'>
          Categories
          <ul className='menu-ul'>
            <li>
              <ul className='menu-ul-sub'>
                <li>
                  <a href='/'>Hardware</a>
                </li>
                <li>
                  <a href='/'>SoftWare</a>
                </li>
                <li>
                  <a href='/'>Accesories </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className='menu-a' href='/'>
          Offers
        </a>
        <a className='menu-a' href='/'>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
