'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const noOp = () => {
};
function clamp(value, min, max) {
  if (max !== null && value > max) {
    return max;
  }
  if (min !== null && value < min) {
    return min;
  }
  return value;
}
function getSize(value) {
  return typeof value === "number" ? `${value}px` : value;
}

exports.clamp = clamp;
exports.getSize = getSize;
exports.noOp = noOp;
