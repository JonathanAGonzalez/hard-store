//COMPONENT
import Logo from './Logo';
import Search from './Search';
import CartPerfil from './CartPerfil';

//COMPONENTS HEADER
const Header = () => {
  return (
    <div className='row justify-content-between'>
      <Logo />
      <Search />
      <CartPerfil />
    </div>
  );
};

export default Header;
