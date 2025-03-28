import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
  padding: 0 8px;
`;
const TableDataCell = forwardRef(function TableDataCell2({ children, ...otherProps }, ref) {
  return React.createElement(StyledTd, { ref, ...otherProps }, children);
});
TableDataCell.displayName = "TableDataCell";

export { TableDataCell };
