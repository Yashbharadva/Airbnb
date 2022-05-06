import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        @media screen and (max-width: 500px) {
            padding: 10px;
        }
    }
`;