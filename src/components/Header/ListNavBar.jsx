const ListNavBar = ({ children }) => {
  return (
    <ul className="menu-ul">
      <li>
        <ul className="menu-ul-sub">
          <li>
            <a href="/category/hardware">Hardware</a>
          </li>
          <li>
            <a href="/category/software">Sofware</a>
          </li>
          <li>
            <a href="/category/accesories">Accesorios</a>
          </li>
          {children}
        </ul>
      </li>
    </ul>
  );
};

export default ListNavBar;
