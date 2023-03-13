import React from 'react';
import styled from "styled-components";
import {Footer, Header, Main} from "./components";

const Page = styled.div`
  min-height: 100vh;
  font-size: 1.6rem;
`;

export default function App() {
    return (
        <Page>
            <Header />
            <Main />
            <Footer />
        </Page>
    );
}
