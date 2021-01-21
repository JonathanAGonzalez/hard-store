//COMPONENTES
import Logo from "./Logo";
import Search from "./Search";
import CartPerfil from "./CartPerfil";
import { memo } from "react";

const Header = ({ widget, setWidget }) => {
  return (
    <div className="row d-flex justify-content-between">
      <Logo />
      <Search />
      <CartPerfil widget={widget} setWidget={setWidget} />
    </div>
  );
};

export default memo(Header);
