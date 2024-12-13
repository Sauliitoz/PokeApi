import styled from "styled-components";


export const Div1 = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


//Div2= Nome
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 0.2rem;
  
  
`;

export const H1 = styled.h1`
  font-size: 2.4rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

export const Img = styled.img`
  width: 100%;
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const P_Type = styled.p`
text-transform: capitalize ;
`;



export const Div3 = styled.div`
  letter-spacing: 0.2rem;
  display: flex;
  flex-direction: column;

`;

export const H3 = styled.h3`
letter-spacing: 0.3rem;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px ;
`;

export const Li = styled.li`
list-style: none;
max-width:768px ;
display: flex;
flex-direction: column;
align-items: center;
`;

export const H4 = styled.h4`
text-transform: capitalize;
margin: 20px;

`;


export const P = styled.p`
letter-spacing: 0.2rem;
  display: flex;
  align-self: center;
  justify-self: center;
  
`;

export const Div4 = styled.div`
  max-width: 768px;
  margin: 20px;
`;

export const Ul2 = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
  align-items: center;
  justify-content: space-evenly;
  overflow-y: auto;
  background-color: #ffffff21;
  
    
  
    &::-webkit-scrollbar{
    width: 5px;
  }
    &::-webkit-scrollbar-thumb {
    background: #ffffff; 
    border-radius: 5px;
  }
    &::-webkit-scrollbar-track {
    background: #ffffff3e; 
  }
 
`;

export const Li2 = styled.li`
letter-spacing: 0.2rem;
  padding: 15px 15px;
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  text-transform: capitalize;
`;

export const A = styled.a`
  padding: 15px;
  cursor: pointer;

  &:hover{
    color: yellow;
    font-size: 1.2rem;
  }
  
`;





















