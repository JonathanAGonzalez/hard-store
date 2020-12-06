const ListNavBar = ({children}) => {
  return (
    <ul className="menu-ul">
      <li>
        <ul className="menu-ul-sub">
          <li>
            <a href="/">Hardware</a>
          </li>
          <li>
            <a href="/">SoftWare</a>
          </li>
          <li>
            <a href="/">Accesories </a>
          </li>
          {children}
        </ul>
      </li>
    </ul>
  );
};

export default ListNavBar;
