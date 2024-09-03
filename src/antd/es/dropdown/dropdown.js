"use client";

import * as React from 'react';
import RightOutlined from "@ant-design/icons/es/icons/RightOutlined";
import classNames from 'classnames';
import RcDropdown from 'rc-dropdown';
import { useEvent } from 'rc-util';
import useMergedState from "rc-util/es/hooks/useMergedState";
import omit from "rc-util/es/omit";
import { useZIndex } from '../_util/hooks/useZIndex';
import getPlacements from '../_util/placements';
import genPurePanel from '../_util/PurePanel';
import { cloneElement } from '../_util/reactNode';
import { devUseWarning } from '../_util/warning';
import zIndexContext from '../_util/zindexContext';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import Menu from '../menu';
import { OverrideProvider } from '../menu/OverrideContext';
import { useToken } from '../theme/internal';
import useStyle from './style';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Placements = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom'];
const Dropdown = props => {
  var _a;
  const {
    menu,
    arrow,
    prefixCls: customizePrefixCls,
    children,
    trigger,
    disabled,
    dropdownRender,
    getPopupContainer,
    overlayClassName,
    rootClassName,
    overlayStyle,
    open,
    onOpenChange,
    // Deprecated
    visible,
    onVisibleChange,
    mouseEnterDelay = 0.15,
    mouseLeaveDelay = 0.1,
    autoAdjustOverflow = true,
    placement = '',
    overlay,
    transitionName
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    dropdown
  } = React.useContext(ConfigContext);
  // Warning for deprecated usage
  const warning = devUseWarning('Dropdown');
  if (process.env.NODE_ENV !== 'production') {
    [['visible', 'open'], ['onVisibleChange', 'onOpenChange']].forEach(_ref => {
      let [deprecatedName, newName] = _ref;
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    warning.deprecated(!('overlay' in props), 'overlay', 'menu');
  }
  const memoTransitionName = React.useMemo(() => {
    const rootPrefixCls = getPrefixCls();
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return `${rootPrefixCls}-slide-down`;
    }
    return `${rootPrefixCls}-slide-up`;
  }, [getPrefixCls, placement, transitionName]);
  const memoPlacement = React.useMemo(() => {
    if (!placement) {
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }
    if (placement.includes('Center')) {
      return placement.slice(0, placement.indexOf('Center'));
    }
    return placement;
  }, [placement, direction]);
  if (process.env.NODE_ENV !== 'production') {
    if (placement.includes('Center')) {
      const newPlacement = placement.slice(0, placement.indexOf('Center'));
      process.env.NODE_ENV !== "production" ? warning(!placement.includes('Center'), 'deprecated', `You are using '${placement}' placement in Dropdown, which is deprecated. Try to use '${newPlacement}' instead.`) : void 0;
    }
    [['visible', 'open'], ['onVisibleChange', 'onOpenChange']].forEach(_ref2 => {
      let [deprecatedName, newName] = _ref2;
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
  const [, token] = useToken();
  const child = React.Children.only(children);
  const dropdownTrigger = cloneElement(child, {
    className: classNames(`${prefixCls}-trigger`, {
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, child.props.className),
    disabled: (_a = child.props.disabled) !== null && _a !== void 0 ? _a : disabled
  });
  const triggerActions = disabled ? [] : trigger;
  const alignPoint = !!(triggerActions === null || triggerActions === void 0 ? void 0 : triggerActions.includes('contextMenu'));
  // =========================== Open ============================
  const [mergedOpen, setOpen] = useMergedState(false, {
    value: open !== null && open !== void 0 ? open : visible
  });
  const onInnerOpenChange = useEvent(nextOpen => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen, {
      source: 'trigger'
    });
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
    setOpen(nextOpen);
  });
  // =========================== Overlay ============================
  const overlayClassNameCustomized = classNames(overlayClassName, rootClassName, hashId, cssVarCls, rootCls, dropdown === null || dropdown === void 0 ? void 0 : dropdown.className, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const builtinPlacements = getPlacements({
    arrowPointAtCenter: typeof arrow === 'object' && arrow.pointAtCenter,
    autoAdjustOverflow,
    offset: token.marginXXS,
    arrowWidth: arrow ? token.sizePopupArrow : 0,
    borderRadius: token.borderRadius
  });
  const onMenuClick = React.useCallback(() => {
    if ((menu === null || menu === void 0 ? void 0 : menu.selectable) && (menu === null || menu === void 0 ? void 0 : menu.multiple)) {
      return;
    }
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false, {
      source: 'menu'
    });
    setOpen(false);
  }, [menu === null || menu === void 0 ? void 0 : menu.selectable, menu === null || menu === void 0 ? void 0 : menu.multiple]);
  const renderOverlay = () => {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    let overlayNode;
    if (menu === null || menu === void 0 ? void 0 : menu.items) {
      overlayNode = /*#__PURE__*/React.createElement(Menu, Object.assign({}, menu));
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = React.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/React.createElement("span", null, overlayNode) : overlayNode);
    return /*#__PURE__*/React.createElement(OverrideProvider, {
      prefixCls: `${prefixCls}-menu`,
      rootClassName: classNames(cssVarCls, rootCls),
      expandIcon: /*#__PURE__*/React.createElement("span", {
        className: `${prefixCls}-menu-submenu-arrow`
      }, /*#__PURE__*/React.createElement(RightOutlined, {
        className: `${prefixCls}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: false,
      onClick: onMenuClick,
      validator: _ref3 => {
        let {
          mode
        } = _ref3;
        // Warning if use other mode
        process.env.NODE_ENV !== "production" ? warning(!mode || mode === 'vertical', 'usage', `mode="${mode}" is not supported for Dropdown's Menu.`) : void 0;
      }
    }, overlayNode);
  };
  // =========================== zIndex ============================
  const [zIndex, contextZIndex] = useZIndex('Dropdown', overlayStyle === null || overlayStyle === void 0 ? void 0 : overlayStyle.zIndex);
  // ============================ Render ============================
  let renderNode = /*#__PURE__*/React.createElement(RcDropdown, Object.assign({
    alignPoint: alignPoint
  }, omit(props, ['rootClassName']), {
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    visible: mergedOpen,
    builtinPlacements: builtinPlacements,
    arrow: !!arrow,
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: memoTransitionName,
    trigger: triggerActions,
    overlay: renderOverlay,
    placement: memoPlacement,
    onVisibleChange: onInnerOpenChange,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, dropdown === null || dropdown === void 0 ? void 0 : dropdown.style), overlayStyle), {
      zIndex
    })
  }), dropdownTrigger);
  if (zIndex) {
    renderNode = /*#__PURE__*/React.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, renderNode);
  }
  return wrapCSSVar(renderNode);
};
function postPureProps(props) {
  return Object.assign(Object.assign({}, props), {
    align: {
      overflow: {
        adjustX: false,
        adjustY: false
      }
    }
  });
}
// We don't care debug panel
const PurePanel = genPurePanel(Dropdown, 'dropdown', prefixCls => prefixCls, postPureProps);
/* istanbul ignore next */
const WrapPurePanel = props => (/*#__PURE__*/React.createElement(PurePanel, Object.assign({}, props), /*#__PURE__*/React.createElement("span", null)));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown';
}
export default Dropdown;