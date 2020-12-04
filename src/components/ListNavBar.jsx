const ListNavBar = () => {
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
        </ul>
      </li>
    </ul>
  );
};

export default ListNavBar;
