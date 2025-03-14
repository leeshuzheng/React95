import { TreeViewProps } from '../TreeView/TreeView';
/** @deprecated Use `TreeViewProps` */
export declare type TreeProps<T> = TreeViewProps<T>;
/** @deprecated Use `TreeView` */
export declare const Tree: <T>(props: {
    className?: string | undefined;
    defaultExpanded?: T[] | undefined;
    defaultSelected?: T | undefined;
    disabled?: boolean | undefined;
    expanded?: T[] | undefined;
    onNodeSelect?: ((event: import("react").MouseEvent<HTMLElement, MouseEvent>, id: T) => void) | undefined;
    onNodeToggle?: ((event: import("react").MouseEvent<HTMLElement, MouseEvent>, expandedIds: T[]) => void) | undefined;
    selected?: T | undefined;
    style?: import("react").CSSProperties | undefined;
    tree: import("../TreeView/TreeView").TreeLeaf<T>[];
} & import("../types").CommonStyledProps & {
    ref?: import("react").ForwardedRef<HTMLUListElement> | undefined;
}) => import("react").JSX.Element;
//# sourceMappingURL=Tree.d.ts.map