//STYLED COMPONENT
import styled from 'styled-components';

//SCSS
import './scss/navBar.scss';

//COMPONENTS STYLED
const Nav = styled.nav`
  background: #f2f2f2;
`;
const ContainerNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
const Menu = styled.div`
  display: flex;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  li {
    list-style: none;
  }
`;
const UlSub = styled.ul`
  //display: none;
  position: absolute;
  top: 20px;
  left: 0;
  background: #f2f2f2;
  padding: 10px;
  border-radius: 15px;
  transform: translatey(-150px);
  z-index: -10;
  transition: ease 0.6s;
  li {
    margin: 10px 0px;
    color: #222;
    a {
      color: #222;
      text-decoration: none;
      &:hover {
        color: #d84727;
      }
    }
  }
`;
const AnavBar = styled.a`
  color: #222;
  text-decoration: none;
  position: relative;
  transition: ease 0.6s;
  &::before {
    content: '';
    position: absolute;
    background: #d84727;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0%;
    transition: ease 0.3s;
  }
  &:hover::before {
    width: 100%;
  }
  &:hover {
    color: #d84727;
    text-decoration: none;
  }
`;

//COMPONENT NAVBAR
const NavBar = () => {
  return (
    <Nav className='row'>
      <ContainerNav className='col-12 col-md-4'>
        <Menu className='categories'>
          Categories
          <Ul>
            <li>
              <UlSub className='sub'>
                <li>
                  <a href='/'>Hardware</a>
                </li>
                <li>
                  <a href='/'>SoftWare</a>
                </li>
                <li>
                  <a href='/'>Accesories </a>
                </li>
              </UlSub>
            </li>
          </Ul>
        </Menu>
        <AnavBar href='/'>Offers</AnavBar>
        <AnavBar href='/'>Contact</AnavBar>
      </ContainerNav>
    </Nav>
  );
};

export default NavBar;
