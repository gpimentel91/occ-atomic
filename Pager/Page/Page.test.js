'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reduceClasses = function reduceClasses(prev, curr) {
    return Object.assign({}, prev, _defineProperty({}, curr, curr));
};

var classes = Object.keys(_styles2.default).reduce(reduceClasses, {});

describe("Page", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Page2.default, { classes: classes }));
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the li', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Page2.default, { classes: classes }));
        expect(wrapper.find('.li').length).toBe(1);
    });

    it('shows the li as active', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Page2.default, { classes: classes }));
        expect(wrapper.find('.li').hasClass('active')).toBe(false);
        wrapper.setProps({ selected: true });
        expect(wrapper.find('.li').hasClass('active')).toBe(true);
    });

    it('calls the onClick function', function () {
        var onClick = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Page2.default, { onClick: onClick, classes: classes }));
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });
});

describe("PageJSS", function () {

    it('matches the snapshot', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Page styles", function () {

    it('matches the snapshot', function () {
        expect(_styles2.default).toMatchSnapshot();
    });
});