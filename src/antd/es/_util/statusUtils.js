import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputStatuses = ['warning', 'error', ''];
export function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
export const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;