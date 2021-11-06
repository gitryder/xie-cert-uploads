import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

const { colors } = theme;
declare type Color = keyof typeof colors;

interface StyledCardProps {
  backgroundColor?: Color;
}

const StyledCard = styled.div<StyledCardProps>(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor ? colors[backgroundColor] : "white"};
    border-radius: 8px;
  `
);

interface CardProps {
  /** The background color of the Card */
  backgroundColor?: Color;

  /** The children inside the Card */
  children?: React.ReactNode | React.ReactNode[];
}

const Card = ({ backgroundColor, children }: CardProps): JSX.Element => {
  return (
    <React.Fragment>
      <StyledCard backgroundColor={backgroundColor}>{children}</StyledCard>
    </React.Fragment>
  );
};

export { Card };
export type { CardProps };
