"use client";

import * as React from 'react';
import classNames from 'classnames';
import { Circle as RCCircle } from 'rc-progress';
import Tooltip from '../tooltip';
import { getPercentage, getSize, getStrokeColor } from './utils';
const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = width => CIRCLE_MIN_STROKE_WIDTH / width * 100;
const Circle = props => {
  const {
    prefixCls,
    trailColor = null,
    strokeLinecap = 'round',
    gapPosition,
    gapDegree,
    width: originWidth = 120,
    type,
    children,
    success,
    size = originWidth,
    steps
  } = props;
  const [width, height] = getSize(size, 'circle');
  let {
    strokeWidth
  } = props;
  if (strokeWidth === undefined) {
    strokeWidth = Math.max(getMinPercent(width), 6);
  }
  const circleStyle = {
    width,
    height,
    fontSize: width * 0.15 + 6
  };
  const realGapDegree = React.useMemo(() => {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  }, [gapDegree, type]);
  const percentArray = getPercentage(props);
  const gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
  // using className to style stroke color
  const isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  const strokeColor = getStrokeColor({
    success,
    strokeColor: props.strokeColor
  });
  const wrapperClassName = classNames(`${prefixCls}-inner`, {
    [`${prefixCls}-circle-gradient`]: isGradient
  });
  const circleContent = /*#__PURE__*/React.createElement(RCCircle, {
    steps: steps,
    percent: steps ? percentArray[1] : percentArray,
    strokeWidth: strokeWidth,
    trailWidth: strokeWidth,
    strokeColor: steps ? strokeColor[1] : strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: realGapDegree,
    gapPosition: gapPos
  });
  const smallCircle = width <= 20;
  const node = /*#__PURE__*/React.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, circleContent, !smallCircle && children);
  if (smallCircle) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: children
    }, node);
  }
  return node;
};
export default Circle;