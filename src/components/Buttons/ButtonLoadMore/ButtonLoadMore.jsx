import React from "react";
import styled from "styled-components";

export const LoadMoreButton = ({ onClick, disabled, children }) => {
      return (
            <A onClick={onClick} disabled={disabled}>
                  {children || ""}
            </A>
      );
};

const A = styled.a`
cursor: pointer;
font-size: 2rem;
border-radius: 20px;
padding: 0 10px;
text-align: center;
margin-top: 20px;
font-size: 1.2rem;
letter-spacing: 0.2rem;
`;
