import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createFlatBoxStyles, focusOutline, createBoxStyles, createBorderStyles, createDisabledTextStyles, createHatchedBackground } from '../common/index.mjs';
import { blockSizes } from '../common/system.mjs';
import { noOp } from '../common/utils/index.mjs';

const commonButtonStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size = "md" }) => blockSizes[size]};
  width: ${({ fullWidth, size = "md", square }) => fullWidth ? "100%" : square ? blockSizes[size] : "auto"};
  padding: ${({ square }) => square ? 0 : `0 10px`};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({ disabled }) => !disabled && "2px"};
  }
  padding-top: ${({ active, disabled }) => active && !disabled && "2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`;
const StyledButton = styled.button`
  ${({ active, disabled, primary, theme, variant }) => variant === "flat" ? css`
          ${createFlatBoxStyles()}
          ${primary ? `
          border: 2px solid ${theme.checkmark};
            outline: 2px solid ${theme.flatDark};
            outline-offset: -4px;
          ` : `
          border: 2px solid ${theme.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!active && !disabled && focusOutline}
            outline-offset: -4px;
          }
        ` : variant === "menu" || variant === "thin" ? css`
          ${createBoxStyles()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!disabled && !active && createBorderStyles({ style: "buttonThin" })}
          }
          &:active {
            ${!disabled && createBorderStyles({ style: "buttonThinPressed" })}
          }
          ${active && createBorderStyles({ style: "buttonThinPressed" })}
          ${disabled && createDisabledTextStyles()}
        ` : css`
          ${createBoxStyles()};
          border: none;
          ${disabled && createDisabledTextStyles()}
          ${active ? createHatchedBackground({
  mainColor: theme.material,
  secondaryColor: theme.borderLightest
}) : ""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${primary ? css`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${theme.borderDarkest};
                ` : css`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${active ? createBorderStyles({
  style: variant === "raised" ? "window" : "button",
  invert: true
}) : createBorderStyles({
  style: variant === "raised" ? "window" : "button",
  invert: false
})}
          }
          &:active:before {
            ${!disabled && createBorderStyles({
  style: variant === "raised" ? "window" : "button",
  invert: true
})}
          }
          &:focus:after,
          &:active:after {
            ${!disabled && focusOutline}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${active ? "0" : "1px"};
          }
        `}
  ${commonButtonStyles}
`;
const Button = forwardRef(({ onClick, disabled = false, children, type = "button", fullWidth = false, size = "md", square = false, active = false, onTouchStart = noOp, primary = false, variant = "default", ...otherProps }, ref) => {
  return React.createElement(StyledButton, { active, disabled, "$disabled": disabled, fullWidth, onClick: disabled ? void 0 : onClick, onTouchStart, primary, ref, size, square, type, variant, ...otherProps }, children);
});
Button.displayName = "Button";

export { Button, StyledButton };
