import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../styles/globalStyles';
import {
  Container,
  Subscription,
  SubHeading,
  SubText,
  Form,
  FormInput,
  LinksContainer,
  LinksWrapper,
  LinksItems,
  LinksTitle,
  Links,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Subscription>
        <SubHeading>
          Join our exclusive membership to receive the latest news and trends
        </SubHeading>
        <SubText>You can unsubscribe at any time.</SubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig primary={false}>Subscribe</Button>
        </Form>
      </Subscription>
      <LinksContainer>
        <LinksWrapper>
          <LinksItems>
            <LinksTitle>About Us</LinksTitle>
            <Links to="/">How it works</Links>
            <Links to="/">Testimonials</Links>
            <Links to="/">Careers</Links>
            <Links to="/">Investors</Links>
            <Links to="/">Terms of Service</Links>
          </LinksItems>
          <LinksItems>
            <LinksTitle>Contact Us</LinksTitle>
            <Links to="/">How it works</Links>
            <Links to="/">Testimonials</Links>
            <Links to="/">Careers</Links>
            <Links to="/">Investors</Links>
            <Links to="/">Terms of Service</Links>
          </LinksItems>
        </LinksWrapper>
        <LinksWrapper>
          <LinksItems>
            <LinksTitle>Videos</LinksTitle>
            <Links to="/">How it works</Links>
            <Links to="/">Testimonials</Links>
            <Links to="/">Careers</Links>
            <Links to="/">Investors</Links>
            <Links to="/">Terms of Service</Links>
          </LinksItems>
          <LinksItems>
            <LinksTitle>Social Media</LinksTitle>
            <Links to="/">How it works</Links>
            <Links to="/">Testimonials</Links>
            <Links to="/">Careers</Links>
            <Links to="/">Investors</Links>
            <Links to="/">Terms of Service</Links>
          </LinksItems>
        </LinksWrapper>
      </LinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href={"https://www.youtube.com/channel/UCTHEnDuI2uIYeTwV4RR7nOA?view_as=subscriber"} target="_blank" arial-label="Youtube" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </Container>
  );
}

export default Footer;