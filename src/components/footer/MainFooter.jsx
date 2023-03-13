import React from 'react';
import styled from "styled-components";
import {categoryList, termsList} from "../../constants/footer";
import {Container, FooterTitle} from "../../sharedStyles";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 305px;
  width: 100%;
`;

const Category = styled.div`
  padding: 0 15px 20px;
`;

const ListContainer = styled.ul`
  list-style: none;

  li {
    padding: 2px 0 0;
  }

  a {
    color: #a0e080;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      opacity: 80%;
    }
  }
;
`;

const CopyrightText = styled.p`
  color: #d1Cfce;
  font-size: 1.2rem;
  margin: 35px 0 16px;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 10rem;
  align-items: start;
`;
const ImageContainer = styled.div`
  
  img {
    width: 200px;
  }
`;

const List = () => {
    return (
        <CategoryContainer>
            {categoryList.map((item, index) => (
                <Category key={index}>
                    <FooterTitle align="start">{item.title}</FooterTitle>
                    <ListContainer>
                        {item.data.map((item, index) => (
                            <li key={index}>
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ListContainer>
                </Category>
            ))}
        </CategoryContainer>
    )
}

const TermsList = () => {
    return (
        <ListContainer>
            {termsList.map((item, index) => (
                <li key={index}>
                    <a href="">{item}</a>
                </li>
            ))}
        </ListContainer>
    )
}

const MainFooter = () => {
    return (
        <Container className="__flex">
            <div>
                <ImagesContainer>
                    <img src="https://www.minecraft.net/content/dam/games/minecraft/logos/Mojang2020Logo.png"
                         alt="Mojang"/>
                    <img src="https://www.minecraft.net/content/dam/games/minecraft/logos/Logo_%20Xbox_Game_Studio.png"
                         alt="XBOX Games"/>
                </ImagesContainer>

                <CopyrightText>
                    Mojang ©2009-2022. « Minecraft » est une marque déposée de Mojang Synergies AB
                </CopyrightText>

                <div>
                    <TermsList/>
                </div>
            </div>

            <List/>

            <ImageContainer>
                <img src="https://www.minecraft.net/content/dam/games/minecraft/logos/esrb_2021.svg"
                     alt="Fantasy Violence"/>
            </ImageContainer>
        </Container>
    );
};

export default MainFooter;