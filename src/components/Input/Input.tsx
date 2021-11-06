import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Stack } from "../Stack/Stack";

const StyledInputTitle = styled.p(
  () => css`
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.extrabold};
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${theme.colors["grey-2"]};
  `
);

const StyledInputInfo = styled.p`
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors["grey-0"]};
  font-size: 12px;
`;

const StyledInputField = styled.input(
  () => css`
    border-style: solid;
    border-radius: 8px;
    border-width: 2px;
    min-width: 400px;
    padding: 12px;
    box-sizing: border-box;
    border-color: ${theme.colors["grey-1"]};
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.semibold};
    font-size: 18px;
    color: ${theme.colors["grey-2"]};

    &:focus {
      outline: none;
      border-color: ${theme.colors["blue-2"]};
    }
  `
);

interface InputProps {
  title: string;
  info?: string;
}

const Input = ({ title, info }: InputProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={-2}>
      <StyledInputTitle>{title}</StyledInputTitle>
      {info && <StyledInputInfo>{info}</StyledInputInfo>}
      <StyledInputField></StyledInputField>
    </Stack>
  );
};

export { Input };
export type { InputProps };
