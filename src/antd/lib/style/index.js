"use strict";
"use client";

/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genLinkStyle = exports.genFocusStyle = exports.genFocusOutline = exports.genCommonStyle = exports.clearFix = void 0;
Object.defineProperty(exports, "operationUnit", {
  enumerable: true,
  get: function () {
    return _operationUnit.operationUnit;
  }
});
exports.textEllipsis = exports.resetIcon = exports.resetComponent = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _operationUnit = require("./operationUnit");
const textEllipsis = exports.textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
const resetComponent = function (token) {
  let needInheritFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token.lineHeight,
    listStyle: 'none',
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
  };
};
exports.resetComponent = resetComponent;
const resetIcon = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'inherit',
  fontStyle: 'normal',
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  '> *': {
    lineHeight: 1
  },
  svg: {
    display: 'inline-block'
  }
});
exports.resetIcon = resetIcon;
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  '&::before': {
    display: 'table',
    content: '""'
  },
  '&::after': {
    // https://github.com/ant-design/ant-design/issues/21864
    display: 'table',
    clear: 'both',
    content: '""'
  }
});
exports.clearFix = clearFix;
const genLinkStyle = token => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    // remove the gray background on active links in IE 10.
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${token.motionDurationSlow}`,
    '-webkit-text-decoration-skip': 'objects',
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    '&:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    },
    '&:active, &:hover': {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }
  }
});
exports.genLinkStyle = genLinkStyle;
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont) => {
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
  const resetStyle = {
    boxSizing: 'border-box',
    '&::before, &::after': {
      boxSizing: 'border-box'
    }
  };
  let resetFontStyle = {};
  if (resetFont !== false) {
    resetFontStyle = {
      fontFamily: token.fontFamily,
      fontSize: token.fontSize
    };
  }
  return {
    [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
      [prefixSelector]: resetStyle
    })
  };
};
exports.genCommonStyle = genCommonStyle;
const genFocusOutline = token => ({
  outline: `${(0, _cssinjs.unit)(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: 'outline-offset 0s, outline 0s'
});
exports.genFocusOutline = genFocusOutline;
const genFocusStyle = token => ({
  '&:focus-visible': Object.assign({}, genFocusOutline(token))
});
exports.genFocusStyle = genFocusStyle;