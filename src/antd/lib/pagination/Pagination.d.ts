import * as React from 'react';
import type { PaginationLocale, PaginationProps as RcPaginationProps } from 'rc-pagination';
export interface PaginationProps extends RcPaginationProps {
    showQuickJumper?: boolean | {
        goButton?: React.ReactNode;
    };
    size?: 'default' | 'small';
    responsive?: boolean;
    role?: string;
    totalBoundaryShowSizeChanger?: number;
    rootClassName?: string;
}
export type PaginationPosition = 'top' | 'bottom' | 'both';
export interface PaginationConfig extends Omit<PaginationProps, 'rootClassName'> {
    position?: PaginationPosition;
}
export type { PaginationLocale };
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
