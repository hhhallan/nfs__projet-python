import React from 'react';
import {MainTitleH2} from "../../sharedStyles";
import {downloadSection} from "../../constants/main";
import styled from "styled-components";
import {downloadFile, handleDownloadClick} from "../../utils/functions";

const List = styled.ul`
  list-style: none;
  margin-left: 20px;
  
  li {
    display: flex;
    gap: 1.2rem;
    margin: 2rem 0;

    * {
      color: #84c94c;
      text-transform: uppercase;
      font-weight: 700;
      text-decoration: none;
      
      &:hover {
        color: white;
      }
    }
  }
`;

const DownloadSection = () => {
    return (
        <div>
            <MainTitleH2>{downloadSection.title}</MainTitleH2>
            <p>{downloadSection.desc}</p>

            <List>
                {downloadSection.dlLink.map((item, index) => (
                    <li key={index}>
                        <item.icon />
                        <a href="" onClick={handleDownloadClick}>{item.text}</a>
                    </li>
                ))}
            </List>

            {downloadSection.osList.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>

                    <List>
                        {item.data.map((data, index) => (
                            <li key={index}>
                                <data.icon />
                                <a href="" onClick={handleDownloadClick}>{data.text}</a>
                            </li>
                        ))}
                    </List>
                </div>
            ))}
        </div>
    );
};

export default DownloadSection;