import React from 'react';
import { SelectCommonProps, SelectOption } from './Select.types';
export declare const useSelectCommon: <T>({ className, defaultValue, disabled, native, onChange, options: optionsProp, readOnly, style, value: valueProp, variant, width }: {
    native: boolean;
} & SelectCommonProps<T>) => {
    isEnabled: boolean;
    options: SelectOption<T>[];
    value: T;
    setValue: (newValue: React.SetStateAction<T>) => void;
    wrapperProps: React.HTMLAttributes<HTMLDivElement>;
    DropdownButton: React.JSX.Element;
    Wrapper: import("styled-components").StyledComponent<"div", any, Pick<import("../ScrollView/ScrollView").ScrollViewProps, "shadow"> & {
        $disabled?: boolean | undefined;
        native?: boolean | undefined;
        variant?: import("./Select.types").SelectVariants | undefined;
    } & import("../types").CommonThemeProps, never>;
};
//# sourceMappingURL=useSelectCommon.d.ts.map