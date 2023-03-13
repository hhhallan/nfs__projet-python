import React from 'react';
import {FaGlobeAmericas} from "react-icons/all";
import {subFooterList} from "../../constants/footer";
import styled from "styled-components";

const SubContainer = styled.div`
  width: 1140px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  font-size: 1.16rem;
`;

const SubList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const LangueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;

const List = () => {
    return (
        <SubList>
            {subFooterList.map((item, index) => (
                <li key={index}>
                    <a href="">
                        {item}
                    </a>
                </li>
            ))}
        </SubList>
    )
}

const SubFooter = () => {
    return (
        <SubContainer>
            <LangueContainer>
                <FaGlobeAmericas size={20} />
                <span>Français</span>
            </LangueContainer>

            <List />

            <div>
                <img src="https://www.minecraft.net/content/dam/games/minecraft/logos/Logo_%20Microsoft.svg" alt="Logo Microsoft"/>
            </div>
        </SubContainer>
    );
};

export default SubFooter;