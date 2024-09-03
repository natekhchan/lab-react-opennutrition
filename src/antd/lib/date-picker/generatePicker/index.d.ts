import type { GenerateConfig } from 'rc-picker/lib/generate/index';
import type { AnyObject } from '../../_util/type';
export type { PickerLocale, PickerProps } from './interface';
declare const generatePicker: <DateType extends AnyObject = AnyObject>(generateConfig: GenerateConfig<DateType>) => (<ValueType = DateType>(props: import("./interface").PickerPropsWithMultiple<DateType, import("./interface").PickerProps<DateType>, ValueType>) => import("react").ReactElement) & {
    displayName?: string;
} & {
    displayName?: string;
    WeekPicker: (<ValueType = DateType>(props: import("./interface").PickerPropsWithMultiple<DateType, Omit<import("./interface").PickerProps<DateType>, "picker">, ValueType>) => import("react").ReactElement) & {
        displayName?: string;
    };
    MonthPicker: (<ValueType = DateType>(props: import("./interface").PickerPropsWithMultiple<DateType, Omit<import("./interface").PickerProps<DateType>, "picker">, ValueType>) => import("react").ReactElement) & {
        displayName?: string;
    };
    YearPicker: (<ValueType = DateType>(props: import("./interface").PickerPropsWithMultiple<DateType, Omit<import("./interface").PickerProps<DateType>, "picker">, ValueType>) => import("react").ReactElement) & {
        displayName?: string;
    };
    RangePicker: import("react").ForwardRefExoticComponent<Omit<import("rc-picker").RangePickerProps<DateType>, "locale" | "generateConfig" | "hideHeader"> & {
        locale?: import("./interface").PickerLocale;
        size?: import("../../button").ButtonSize;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
        bordered?: boolean;
        status?: import("../../_util/statusUtils").InputStatus;
        variant?: import("../../config-provider").Variant;
        dropdownClassName?: string;
        popupClassName?: string;
        rootClassName?: string;
        popupStyle?: React.CSSProperties;
    } & import("react").RefAttributes<import("rc-picker").PickerRef>>;
    TimePicker: (<ValueType = DateType>(props: import("./interface").PickerPropsWithMultiple<DateType, Omit<import("./interface").GenericTimePickerProps<DateType>, "picker">, ValueType>) => import("react").ReactElement) & {
        displayName?: string;
    };
    QuarterPicker: (<ValueType = DateType>(props: import("./interface").PickerPropsWithMultiple<DateType, Omit<import("./interface").PickerProps<DateType>, "picker">, ValueType>) => import("react").ReactElement) & {
        displayName?: string;
    };
};
export default generatePicker;
