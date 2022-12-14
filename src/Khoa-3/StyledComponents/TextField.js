import React from "react";
import styled from "styled-components";
const P = styled.p`
   font-size: 14px;
   height: 20px;
   margin: 0;
`;
const Label = styled.label`
   font-size: 20px;
`;
export const TextField = ({ label, error, ...props }) => {
   return (
      <>
         <Label>{label}</Label>
         <input className="form-control" {...props} />
         <P className="text-danger text-start">{error}</P>
      </>
   );
};
