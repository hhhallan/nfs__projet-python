import React from 'react';
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;

  li a {
    color: #a0e080;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const SubHeader = () => {
    return (
        <List>
            <li>
                <a href="">Se connecter</a>
            </li>
            <li>
                <a href="">échanger</a>
            </li>
        </List>
    );
};

export default SubHeader;