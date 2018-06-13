'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getClasses = function getClasses(size, data, classes) {
    var string = '';
    if (data.col) string += ' ' + classes['' + size + data.col];
    if (data.offset) string += ' ' + classes['offset-' + size + data.offset];
    if (data.push) string += ' ' + classes['push-' + size + data.push];
    if (data.pull) string += ' ' + classes['pull-' + size + data.pull];
    return string;
};

/** The Container component can receive different specifications for any of the breakpoint sizes. It needs to receive an object for the required size, and this object can specify a value for col (column), offset, push and pull. */
var Column = function Column(_ref) {
    var classes = _ref.classes,
        children = _ref.children,
        xs = _ref.xs,
        sm = _ref.sm,
        md = _ref.md,
        lg = _ref.lg,
        id = _ref.id,
        className = _ref.className,
        style = _ref.style;
    return _react2.default.createElement(
        'div',
        {
            className: '' + classes.col + (xs ? getClasses('xs', xs, classes) : '') + (sm ? getClasses('sm', sm, classes) : '') + (md ? getClasses('md', md, classes) : '') + (lg ? getClasses('lg', lg, classes) : '') + (className ? ' ' + className : ''),
            id: id,
            style: style },
        children
    );
};

Column.propTypes = {
    classes: _propTypes2.default.object,
    children: _propTypes2.default.node,
    /** Specifications for a extra small window size. */
    xs: _propTypes2.default.object,
    /** Specifications for a small window size. */
    sm: _propTypes2.default.object,
    /** Specifications for a medium window size. */
    md: _propTypes2.default.object,
    /** Specifications for a large window size. */
    lg: _propTypes2.default.object,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = Column;