import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
  display: table-header-group;
`;
const TableHead = forwardRef(function TableHead2({ children, ...otherProps }, ref) {
  return React.createElement(StyledTableHead, { ref, ...otherProps }, children);
});
TableHead.displayName = "TableHead";

export { TableHead };
