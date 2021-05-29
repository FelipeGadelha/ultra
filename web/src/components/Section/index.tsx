import React from 'react';
import { InfoSec, Row, Column, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './styles';
import { Button, GlobalContainer as Container } from '../../styles/globalStyles';
import { Link } from 'react-router-dom';

interface SectionProps {
  ligthBg: boolean;
  imgStart: string;
  lightTopLine: boolean;
  topLine: string;
  lightText: boolean;
  headline: string;
  lightTextDesc: boolean;
  description: string;
  primary: boolean;
  buttonLabel: string;
  start: string;
  img: string;
  alt: string;
};
const Section: React.FC<SectionProps> = (props) => {
  return (
    <InfoSec ligthBg={props.ligthBg} >
      <Container>
        <Row imgStart={props.imgStart}>
          <Column>
            <TextWrapper>
              <TopLine lightTopLine={ props.lightTopLine }>{props.topLine}</TopLine>
              <Heading lightText={ props.lightText }>{props.headline}</Heading>
              <Subtitle lightTextDesc={ props.lightTextDesc }>{props.description}</Subtitle>
              <Link to="/sign-up">
                <Button big fontBig primary={props.primary}>{props.buttonLabel}</Button>
              </Link>
            </TextWrapper>
          </Column>
          <Column>
            <ImgWrapper start={props.start}>
              <Img src={props.img} alt={props.alt} />
            </ImgWrapper>
          </Column>
        </Row>
      </Container>
    </InfoSec>
  );
}

export default Section;