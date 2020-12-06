//COMPONENT
import Logo from "./Logo";
import Search from "./Search";
import CartPerfil from "./CartPerfil";

//COMPONENTS HEADER
const Header = ({widget,setWidget}) => {
  return (
    <div className="row d-flex justify-content-between">
      <Logo />
      <Search />
      <CartPerfil widget={widget} setWidget={setWidget} />
    </div>
  );
};

export default Header;
