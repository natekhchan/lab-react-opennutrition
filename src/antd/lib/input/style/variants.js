"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genOutlinedStyle = exports.genOutlinedGroupStyle = exports.genHoverStyle = exports.genFilledStyle = exports.genFilledGroupStyle = exports.genDisabledStyle = exports.genBorderlessStyle = exports.genBaseOutlinedStyle = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _internal = require("../../theme/internal");
const genHoverStyle = token => ({
  borderColor: token.hoverBorderColor,
  backgroundColor: token.hoverBg
});
exports.genHoverStyle = genHoverStyle;
const genDisabledStyle = token => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: 'none',
  cursor: 'not-allowed',
  opacity: 1,
  'input[disabled], textarea[disabled]': {
    cursor: 'not-allowed'
  },
  '&:hover:not([disabled])': Object.assign({}, genHoverStyle((0, _internal.mergeToken)(token, {
    hoverBorderColor: token.colorBorder,
    hoverBg: token.colorBgContainerDisabled
  })))
});
/* ============== Outlined ============== */
exports.genDisabledStyle = genDisabledStyle;
const genBaseOutlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: options.borderColor,
  '&:hover': {
    borderColor: options.hoverBorderColor,
    backgroundColor: token.hoverBg
  },
  '&:focus, &:focus-within': {
    borderColor: options.activeBorderColor,
    boxShadow: options.activeShadow,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
exports.genBaseOutlinedStyle = genBaseOutlinedStyle;
const genOutlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: Object.assign(Object.assign({}, genBaseOutlinedStyle(token, options)), {
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  }),
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: options.borderColor
  }
});
const genOutlinedStyle = (token, extraStyles) => ({
  '&-outlined': Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
    borderColor: token.colorBorder,
    hoverBorderColor: token.hoverBorderColor,
    activeBorderColor: token.activeBorderColor,
    activeShadow: token.activeShadow
  })), {
    [`&${token.componentCls}-disabled, &[disabled]`]: Object.assign({}, genDisabledStyle(token))
  }), genOutlinedStatusStyle(token, {
    status: 'error',
    borderColor: token.colorError,
    hoverBorderColor: token.colorErrorBorderHover,
    activeBorderColor: token.colorError,
    activeShadow: token.errorActiveShadow,
    affixColor: token.colorError
  })), genOutlinedStatusStyle(token, {
    status: 'warning',
    borderColor: token.colorWarning,
    hoverBorderColor: token.colorWarningBorderHover,
    activeBorderColor: token.colorWarning,
    activeShadow: token.warningActiveShadow,
    affixColor: token.colorWarning
  })), extraStyles)
});
exports.genOutlinedStyle = genOutlinedStyle;
const genOutlinedGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      borderColor: options.addonBorderColor,
      color: options.addonColor
    }
  }
});
const genOutlinedGroupStyle = token => ({
  '&-outlined': Object.assign(Object.assign(Object.assign({
    [`${token.componentCls}-group`]: {
      '&-addon': {
        background: token.addonBg,
        border: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
      },
      '&-addon:first-child': {
        borderInlineEnd: 0
      },
      '&-addon:last-child': {
        borderInlineStart: 0
      }
    }
  }, genOutlinedGroupStatusStyle(token, {
    status: 'error',
    addonBorderColor: token.colorError,
    addonColor: token.colorErrorText
  })), genOutlinedGroupStatusStyle(token, {
    status: 'warning',
    addonBorderColor: token.colorWarning,
    addonColor: token.colorWarningText
  })), {
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group-addon`]: Object.assign({}, genDisabledStyle(token))
    }
  })
});
/* ============ Borderless ============ */
exports.genOutlinedGroupStyle = genOutlinedGroupStyle;
const genBorderlessStyle = (token, extraStyles) => {
  const {
    componentCls
  } = token;
  return {
    '&-borderless': Object.assign({
      background: 'transparent',
      border: 'none',
      '&:focus, &:focus-within': {
        outline: 'none'
      },
      // >>>>> Disabled
      [`&${componentCls}-disabled, &[disabled]`]: {
        color: token.colorTextDisabled
      },
      // >>>>> Status
      [`&${componentCls}-status-error`]: {
        '&, & input, & textarea': {
          color: token.colorError
        }
      },
      [`&${componentCls}-status-warning`]: {
        '&, & input, & textarea': {
          color: token.colorWarning
        }
      }
    }, extraStyles)
  };
};
/* ============== Filled ============== */
exports.genBorderlessStyle = genBorderlessStyle;
const genBaseFilledStyle = (token, options) => ({
  background: options.bg,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: 'transparent',
  'input&, & input, textarea&, & textarea': {
    color: options === null || options === void 0 ? void 0 : options.inputColor
  },
  '&:hover': {
    background: options.hoverBg
  },
  '&:focus, &:focus-within': {
    outline: 0,
    borderColor: options.activeBorderColor,
    backgroundColor: token.activeBg
  }
});
const genFilledStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: Object.assign(Object.assign({}, genBaseFilledStyle(token, options)), {
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  })
});
const genFilledStyle = (token, extraStyles) => ({
  '&-filled': Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
    bg: token.colorFillTertiary,
    hoverBg: token.colorFillSecondary,
    activeBorderColor: token.activeBorderColor
  })), {
    [`&${token.componentCls}-disabled, &[disabled]`]: Object.assign({}, genDisabledStyle(token))
  }), genFilledStatusStyle(token, {
    status: 'error',
    bg: token.colorErrorBg,
    hoverBg: token.colorErrorBgHover,
    activeBorderColor: token.colorError,
    inputColor: token.colorErrorText,
    affixColor: token.colorError
  })), genFilledStatusStyle(token, {
    status: 'warning',
    bg: token.colorWarningBg,
    hoverBg: token.colorWarningBgHover,
    activeBorderColor: token.colorWarning,
    inputColor: token.colorWarningText,
    affixColor: token.colorWarning
  })), extraStyles)
});
exports.genFilledStyle = genFilledStyle;
const genFilledGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      background: options.addonBg,
      color: options.addonColor
    }
  }
});
const genFilledGroupStyle = token => ({
  '&-filled': Object.assign(Object.assign(Object.assign({
    [`${token.componentCls}-group`]: {
      '&-addon': {
        background: token.colorFillTertiary
      },
      [`${token.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        '&:not(:first-child)': {
          borderInlineStart: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        },
        '&:not(:last-child)': {
          borderInlineEnd: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        }
      }
    }
  }, genFilledGroupStatusStyle(token, {
    status: 'error',
    addonBg: token.colorErrorBg,
    addonColor: token.colorErrorText
  })), genFilledGroupStatusStyle(token, {
    status: 'warning',
    addonBg: token.colorWarningBg,
    addonColor: token.colorWarningText
  })), {
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group`]: {
        '&-addon': {
          background: token.colorFillTertiary,
          color: token.colorTextDisabled
        },
        '&-addon:first-child': {
          borderInlineStart: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        '&-addon:last-child': {
          borderInlineEnd: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        }
      }
    }
  })
});
exports.genFilledGroupStyle = genFilledGroupStyle;