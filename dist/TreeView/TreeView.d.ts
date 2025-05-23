import React from 'react';
import { CommonStyledProps } from '../types';
declare type TreeLeaf<T> = {
    disabled?: boolean;
    icon?: React.ReactNode;
    id: T;
    items?: TreeLeaf<T>[];
    label?: string;
};
declare type TreeViewProps<T> = {
    className?: string;
    defaultExpanded?: T[];
    defaultSelected?: T;
    disabled?: boolean;
    expanded?: T[];
    onNodeSelect?: (event: React.MouseEvent<HTMLElement>, id: T) => void;
    onNodeToggle?: (event: React.MouseEvent<HTMLElement>, expandedIds: T[]) => void;
    selected?: T;
    style?: React.CSSProperties;
    tree: TreeLeaf<T>[];
} & CommonStyledProps;
declare function TreeInner<T>({ className, defaultExpanded, defaultSelected, disabled, expanded, onNodeSelect, onNodeToggle, selected, style, tree }: TreeViewProps<T>, ref: React.ForwardedRef<HTMLUListElement>): React.JSX.Element;
declare const TreeView: <T>(props: {
    className?: string | undefined;
    defaultExpanded?: T[] | undefined;
    defaultSelected?: T | undefined;
    disabled?: boolean | undefined;
    expanded?: T[] | undefined;
    onNodeSelect?: ((event: React.MouseEvent<HTMLElement>, id: T) => void) | undefined;
    onNodeToggle?: ((event: React.MouseEvent<HTMLElement>, expandedIds: T[]) => void) | undefined;
    selected?: T | undefined;
    style?: React.CSSProperties | undefined;
    tree: TreeLeaf<T>[];
} & CommonStyledProps & {
    ref?: React.ForwardedRef<HTMLUListElement> | undefined;
}) => React.JSX.Element;
export { TreeView, TreeViewProps, TreeLeaf };
//# sourceMappingURL=TreeView.d.ts.map