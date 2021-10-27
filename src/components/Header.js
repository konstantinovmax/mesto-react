import logo from "../images/header-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сервиса Mesto" />
    </header>
  );
};

export default Header;
