import React from 'react';
import styled from "styled-components";
import {Section, Container} from "../sharedStyles";
import Button from "./Button";
import {SubHeader, Navigation} from "./index";

const HeaderContainer = styled.section`
  background-color: palegoldenrod;
`;

const Image = styled.img`
  width: 235px;
`;

const SectionNavigation = styled.nav`
  background-color: #202020;
  padding: 16px 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Section color="#000" padding="1rem 0">
                <Container>
                    <SubHeader/>
                </Container>
            </Section>

            <SectionNavigation>
                <Container centered className="__flex" width="1250px">
                    <Navigation />

                    <Image src="https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg" alt=""/>

                    <Button text="Obtenir minecraft" />
                </Container>
            </SectionNavigation>
        </HeaderContainer>
    );
};

export default Header;