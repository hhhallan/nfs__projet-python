import React from 'react';
import styled from "styled-components";
import {Container, Section, SectionImg, MainTitleH2} from "../sharedStyles";
import {heroSection, noviceSection} from "../constants/main";
import {DownloadSection} from "./index";
import Button from "./Button";

const Image = styled.div`
  width: 445px;
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.span`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 12.8px;
  font-weight: bold;
  display: block;
`;


const Main = () => {
    return (
        <>
            <SectionImg padding="64px 0 50px" >
                <Container className="__centered" color="#fff">
                    <MainTitleH2>{heroSection.title}</MainTitleH2>
                    <Subtitle>{heroSection.subtitle}</Subtitle>
                    <Button margin text={heroSection.btnTitle}/>
                    <Description>{heroSection.desc}</Description>
                </Container>
            </SectionImg>


            <Section color="#252525" padding="75px 0 45px">
                <Container className="__flex" color="#fff">
                    <Image>
                        <img
                            src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/GrassBlock_HighRes.png"
                            alt="Logo Minecraft"/>
                    </Image>

                    <DownloadSection/>
                </Container>
            </Section>

            <Section padding="50px 0 70px">
                <Container className="__centered">
                    <MainTitleH2>{noviceSection.title}</MainTitleH2>
                    <Description>{noviceSection.desc}</Description>
                    <Button text={noviceSection.btnTitle} />
                </Container>
            </Section>
        </>
    );
};

export default Main;