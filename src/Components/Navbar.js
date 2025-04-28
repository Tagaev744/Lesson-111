import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f0f0f0;
  padding: 10px;
`;

const StyledLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &.active {
    color: blue;
  }
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to="/" end>Главная</StyledLink>
      <StyledLink to="/portfolio">Портфолио</StyledLink>
      <StyledLink to="/about">О нас</StyledLink>
      <StyledLink to="/contact">Контакты</StyledLink>
      <StyledLink to="/login">Вход</StyledLink>
    </Nav>
  );
}

export default Navbar;