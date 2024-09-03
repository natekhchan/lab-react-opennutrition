import React from 'react';
import type { SizeType } from '../config-provider/SizeContext';
import Group from './button-group';
import type { ButtonHTMLType, ButtonShape, ButtonType } from './buttonHelpers';
export type LegacyButtonType = ButtonType | 'danger';
export interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    shape?: ButtonShape;
    size?: SizeType;
    disabled?: boolean;
    loading?: boolean | {
        delay?: number;
    };
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
    [key: `data-${string}`]: string;
    classNames?: {
        icon: string;
    };
    styles?: {
        icon: React.CSSProperties;
    };
}
type MergedHTMLAttributes = Omit<React.HTMLAttributes<HTMLElement> & React.ButtonHTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLElement>, 'type'>;
export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
    href?: string;
    htmlType?: ButtonHTMLType;
    autoInsertSpace?: boolean;
}
declare const InternalCompoundedButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
type CompoundedComponent = typeof InternalCompoundedButton & {
    Group: typeof Group;
};
declare const Button: CompoundedComponent;
export default Button;
