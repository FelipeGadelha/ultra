import { useEffect, useState } from "react";
import { Container, Nav, Logo, Icon, MobileIcon, Menu, Item, Links, LinkBtn, ItemBtn } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../styles/globalStyles";

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <IconContext.Provider value={{ color: '#FFF' }}>
        <Nav>
          <Container>
            <Logo to="/" onClick={closeMobileMenu}>
              <Icon />
          ULTRA
        </Logo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Menu onClick={handleClick} click={click}>
              <Item><Links to="/" onClick={closeMobileMenu}>Home</Links></Item>
              <Item><Links to="/services" onClick={closeMobileMenu}>Services</Links></Item>
              <Item><Links to="/products" onClick={closeMobileMenu}>Products</Links></Item>
              <ItemBtn>{button ? (
                <LinkBtn to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </LinkBtn>
              ) : (
                <LinkBtn to="/sign-up">
                  <Button fontBig primary onClick={closeMobileMenu}>SIGN UP</Button>
                </LinkBtn>
              )}</ItemBtn>
            </Menu>
          </Container>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;