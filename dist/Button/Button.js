'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var system = require('../common/system.js');
var index$1 = require('../common/utils/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const commonButtonStyles = styled.css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size = "md" }) => system.blockSizes[size]};
  width: ${({ fullWidth, size = "md", square }) => fullWidth ? "100%" : square ? system.blockSizes[size] : "auto"};
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
const StyledButton = styled__default["default"].button`
  ${({ active, disabled, primary, theme, variant }) => variant === "flat" ? styled.css`
          ${index.createFlatBoxStyles()}
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
            ${!active && !disabled && index.focusOutline}
            outline-offset: -4px;
          }
        ` : variant === "menu" || variant === "thin" ? styled.css`
          ${index.createBoxStyles()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!disabled && !active && index.createBorderStyles({ style: "buttonThin" })}
          }
          &:active {
            ${!disabled && index.createBorderStyles({ style: "buttonThinPressed" })}
          }
          ${active && index.createBorderStyles({ style: "buttonThinPressed" })}
          ${disabled && index.createDisabledTextStyles()}
        ` : styled.css`
          ${index.createBoxStyles()};
          border: none;
          ${disabled && index.createDisabledTextStyles()}
          ${active ? index.createHatchedBackground({
  mainColor: theme.material,
  secondaryColor: theme.borderLightest
}) : ""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${primary ? styled.css`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${theme.borderDarkest};
                ` : styled.css`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${active ? index.createBorderStyles({
  style: variant === "raised" ? "window" : "button",
  invert: true
}) : index.createBorderStyles({
  style: variant === "raised" ? "window" : "button",
  invert: false
})}
          }
          &:active:before {
            ${!disabled && index.createBorderStyles({
  style: variant === "raised" ? "window" : "button",
  invert: true
})}
          }
          &:focus:after,
          &:active:after {
            ${!disabled && index.focusOutline}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${active ? "0" : "1px"};
          }
        `}
  ${commonButtonStyles}
`;
const Button = React.forwardRef(({ onClick, disabled = false, children, type = "button", fullWidth = false, size = "md", square = false, active = false, onTouchStart = index$1.noOp, primary = false, variant = "default", ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledButton, { active, disabled, "$disabled": disabled, fullWidth, onClick: disabled ? void 0 : onClick, onTouchStart, primary, ref, size, square, type, variant, ...otherProps }, children);
});
Button.displayName = "Button";

exports.Button = Button;
exports.StyledButton = StyledButton;
