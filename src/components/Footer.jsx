import React from 'react';
import styled from "styled-components";
import {MainFooter, SocialFooter, SubFooter} from "./index";
import {FooterTitle, Section} from "../sharedStyles";

const FooterContainer = styled.footer`
  * {
    color: #fff;
  }
`;

const Footer = () => {

    return (
        <FooterContainer>
            <Section color="#000" padding="20px 0 10px">
                <SocialFooter />
            </Section>

            <Section color="#111111" padding="64px 0 20px">
                <MainFooter />
            </Section>

            <Section color="#313131">
                <SubFooter />
            </Section>
        </FooterContainer>
    );
};

export default Footer;