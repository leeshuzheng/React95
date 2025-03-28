import React from 'react';
import { CommonStyledProps } from '../types';
import { SelectInnerProps, SelectRef } from './Select.types';
declare type SelectProps<T> = SelectInnerProps<T> & Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'name' | 'onChange' | 'onFocus' | 'style' | 'value'> & CommonStyledProps;
declare function SelectInner<T>({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, className, defaultValue, disabled, formatDisplay, inputProps, labelId, menuMaxHeight, name, onBlur, onChange, onClose, onFocus, onKeyDown, onMouseDown, onOpen, open: openProp, options: optionsProp, readOnly, shadow, style, variant, value: valueProp, width, ...otherProps }: SelectProps<T>, ref: React.ForwardedRef<SelectRef>): React.JSX.Element;
declare const Select: <T>(props: {
    formatDisplay?: import("./Select.types").SelectFormatDisplayCallback<T> | undefined;
    inputProps?: (React.HTMLAttributes<HTMLInputElement> & import("../types").HTMLDataAttributes) | undefined;
    labelId?: string | undefined;
    menuMaxHeight?: string | number | undefined;
    onClose?: ((options: {
        fromEvent: Event | React.SyntheticEvent<Element, Event>;
    }) => void) | undefined;
    onOpen?: ((options: {
        fromEvent: Event | React.SyntheticEvent<Element, Event>;
    }) => void) | undefined;
    open?: boolean | undefined;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "onFocus" | "onBlur" | "onKeyDown" | "onMouseDown"> & import("./Select.types").SelectCommonProps<T> & Omit<React.HTMLAttributes<HTMLDivElement>, "name" | "style" | "onFocus" | "onChange" | "defaultValue" | "value"> & CommonStyledProps & {
    ref?: React.ForwardedRef<SelectRef> | undefined;
}) => React.JSX.Element;
export * from './SelectNative';
export { Select, SelectProps };
//# sourceMappingURL=Select.d.ts.map