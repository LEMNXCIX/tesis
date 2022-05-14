import React from 'react'

export const Botones = ({children}) => {
  return (
    <Boton>{children}</Boton>
  )
}
const Boton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #313131;
  background: #ffffffb4;
`;
