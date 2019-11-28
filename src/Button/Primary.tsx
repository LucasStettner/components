import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import {
  styles,
  getPaddingFromSize,
  getFontSizeFromSize,
  ButtonProps
} from "./base";

const Button = styled.button<ButtonProps>`
  ${styles.base};
  background: ${theme.brand.default};
  color: #fff;

  &:hover {
    ${styles.hover};
    background: ${theme.primary.five};
  }
  &:active {
    ${styles.active};
    background: ${theme.primary.four};
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 1px ${theme.ui.wash}, 0 0 0 3px ${theme.brand.border};
  }
`;

export const PrimaryButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
