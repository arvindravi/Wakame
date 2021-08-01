import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";


import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
// createWidget('yzY7BUP2', { container: document.querySelector('#form') })

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <div className="text-center my-5">
                <Title>It's time to spice up your landing page.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>

                <div data-tf-widget="yzY7BUP2"></div>
                <script src="//embed.typeform.com/next/embed.js"></script>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
