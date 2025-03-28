import React, { forwardRef, useRef, useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { blockSizes } from '../common/system.mjs';
import { StyledScrollView } from '../ScrollView/ScrollView.mjs';

const Wrapper = styled.div`
  display: inline-block;
  height: ${blockSizes.md};
  width: 100%;
`;
const ProgressCutout = styled(StyledScrollView)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`;
const commonBarStyles = css`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const WhiteBar = styled.div`
  position: relative;
  top: 4px;
  ${commonBarStyles}
  background: ${({ theme }) => theme.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({ theme }) => theme.materialText};
`;
const BlueBar = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${commonBarStyles}
  color: ${({ theme }) => theme.materialTextInvert};
  background: ${({ theme }) => theme.progress};
  clip-path: polygon(
    0 0,
    ${({ value = 0 }) => value}% 0,
    ${({ value = 0 }) => value}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`;
const TilesWrapper = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`;
const tileWidth = 17;
const Tile = styled.span`
  display: inline-block;
  width: ${tileWidth}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme }) => theme.progress};
  border-color: ${({ theme }) => theme.material};
  border-width: 0px 1px;
  border-style: solid;
`;
const ProgressBar = forwardRef(({ hideValue = false, shadow = true, value, variant = "default", ...otherProps }, ref) => {
  const displayValue = hideValue ? null : `${value}%`;
  const tilesWrapperRef = useRef(null);
  const [tiles, setTiles] = useState([]);
  const updateTilesNumber = useCallback(() => {
    if (!tilesWrapperRef.current || value === void 0) {
      return;
    }
    const progressWidth = tilesWrapperRef.current.getBoundingClientRect().width;
    const newTilesNumber = Math.round(value / 100 * progressWidth / tileWidth);
    setTiles(Array.from({ length: newTilesNumber }));
  }, [value]);
  useEffect(() => {
    updateTilesNumber();
    window.addEventListener("resize", updateTilesNumber);
    return () => window.removeEventListener("resize", updateTilesNumber);
  }, [updateTilesNumber]);
  return React.createElement(
    Wrapper,
    { "aria-valuenow": value !== void 0 ? Math.round(value) : void 0, ref, role: "progressbar", variant, ...otherProps },
    React.createElement(ProgressCutout, { variant, shadow }, variant === "default" ? React.createElement(
      React.Fragment,
      null,
      React.createElement(WhiteBar, { "data-testid": "defaultProgress1" }, displayValue),
      React.createElement(BlueBar, { "data-testid": "defaultProgress2", value }, displayValue)
    ) : React.createElement(TilesWrapper, { ref: tilesWrapperRef, "data-testid": "tileProgress" }, tiles.map((_, index) => React.createElement(Tile, { key: index }))))
  );
});
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
