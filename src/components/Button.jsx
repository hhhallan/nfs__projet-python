import styled from "styled-components";
import {downloadFile} from "../utils/functions";

export const ButtonStyle = styled.button`
  --green-1: #52a535;
  --green-2: #3c8527;
  --green-3: #2a641c;

  --black-1: #262423;
  --black-2: #252525;
  --black-3: #424244;


  padding: 2rem 3rem;
  margin: ${props => props.margin};
  background: var(--green-2);
  font-family: "Minecraftia", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.25rem;
  color: #ffffff;
  letter-spacing: .03rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  text-shadow: 0px 2px 0px var(--green-3);
  box-shadow: inset 0 4px var(--green-1), inset 0 -4px var(--green-3), 0 4px #00000040;
  transition: 0.2s;

  &:hover {
    background: var(--black-2);
    box-shadow: inset 0 4px var(--black-3), inset 0 -4px var(--black-1), 0 4px #00000040;;
  }
`;

export default function Button({text, margin}) {
    return (
        <ButtonStyle margin={margin ? "2rem 0 4rem" : "0"} onClick={downloadFile}>{text}</ButtonStyle>
    );
}
