import React from "react"
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const handleReturn = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
}
export const ButtonReturnTop = () => {

      return (
            <A onClick={handleReturn}><FontAwesomeIcon icon={faArrowUp} /></A>
      )
}

const A = styled.a`
display: flex;
font-size: 2rem;
cursor: pointer;
padding: 20px;
margin: 10px;


&:hover{
      color: #ffe600;
      font-size: 2.1rem;
}
`;
