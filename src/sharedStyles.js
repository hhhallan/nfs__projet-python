import styled from "styled-components";

// Titles
export const MainTitleH2 = styled.h2`
  color: ${props => props.light ? '#fff' : '#000'};
  text-transform: uppercase;
  font-size: 2.8rem;
  margin-bottom: 12.8px;
`;

export const MainTitleH3 = styled.h3`
  
`;

export const FooterTitle = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  text-align: ${props => props.align || 'center'};
`;

// Layout
export const Section = styled.section`
  background-color: ${props => props.color};
  display: flex;
  padding: ${props => props.padding || '0' };
  
`;

export const SectionImg = styled(Section)`
  background-color: transparent;
  background-image: url("https://wallpaper.dog/large/999988.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  
  width: ${props => props.width || '1140px'};
  margin-inline: auto;
  
  &.__flex {
    display: flex;
    ${props => props.centered ? 'justify-content: space-between; align-items:center' : 'gap: 2rem'}
  }
  
  &.__centered {
    text-align: center;
  }
  
  * {
    color: ${props => props.color};
  }
`;