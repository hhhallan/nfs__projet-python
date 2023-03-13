import React from 'react';
import {navList} from "../../constants/header";
import styled from "styled-components";

const ListNav = styled.ul`
  list-style: none;
  display: flex;
  gap: 3.5rem;

  li a {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1.4rem;

    &:hover {
      opacity: 80%;
    }
  }
`;

const Navigation = () => {
    return (
        <ListNav>
            {navList.map((item, index) => (
                <li key={index}>
                    <a href="">
                        {item}
                    </a>
                </li>
            ))}
        </ListNav>
    );
};

export default Navigation;