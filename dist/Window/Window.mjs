import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common/index.mjs';
export { WindowContent } from './WindowContent.mjs';
export { WindowHeader } from './WindowHeader.mjs';

const StyledWindow = styled.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${createBorderStyles({ style: "window" })}
  ${createBoxStyles()}
`;
const ResizeHandle = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${theme.borderLightest} 16.67%,
      ${theme.material} 16.67%,
      ${theme.material} 33.33%,
      ${theme.borderDark} 33.33%,
      ${theme.borderDark} 50%,
      ${theme.borderLightest} 50%,
      ${theme.borderLightest} 66.67%,
      ${theme.material} 66.67%,
      ${theme.material} 83.33%,
      ${theme.borderDark} 83.33%,
      ${theme.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`;
const Window = forwardRef(({ children, resizable = false, resizeRef, shadow = true, ...otherProps }, ref) => {
  return React.createElement(
    StyledWindow,
    { ref, shadow, ...otherProps },
    children,
    resizable && React.createElement(ResizeHandle, { "data-testid": "resizeHandle", ref: resizeRef })
  );
});
Window.displayName = "Window";

export { Window };
