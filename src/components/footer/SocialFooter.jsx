import React from 'react';
import styled from "styled-components";
import {socialMediaList} from "../../constants/footer";
import { FooterTitle, Container } from "../../sharedStyles"

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 25px 0 10px;

  li {
    margin: auto 30px;
    padding-bottom: 15px;
  }
`;

const Pastille = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #313131;
  cursor: pointer;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${props => props.color};
  }

  svg {
    fill: #fff;
  }
`;

const List = () => {
    return (
        <ListContainer>
            {socialMediaList.map((item, index) => (
                <li key={index}>
                    <Pastille color={item.color}>
                        <item.icon size={20}/>
                    </Pastille>
                </li>
            ))}
        </ListContainer>
    )
}

const SocialFooter = () => {
    return (
        <Container>
            <FooterTitle>Suivre Minecraft</FooterTitle>
            <List/>
        </Container>
    );
};

export default SocialFooter;