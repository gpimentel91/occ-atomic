'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    base: function base(icon) {
        var encoded = Buffer.from(icon).toString('base64');
        return 'url(data:image/svg+xml;base64,' + encoded + ') no-repeat center center';
    },
    testing: {
        // Icon for testing in jest
        width: '5px',
        height: '5px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#000'];
            return 'testing - ' + color[0];
        }
    },
    plus: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.white];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M17.5,12.9h-4.6v4.6c0,0.3-0.2,0.5-0.5,0.5h-0.7c-0.3,0-0.5-0.2-0.5-0.5v-4.6H6.5c-0.3,0-0.5-0.2-0.5-0.5v-0.7\n            \tc0-0.3,0.2-0.5,0.5-0.5h4.6V6.5c0-0.3,0.2-0.5,0.5-0.5h0.7c0.3,0,0.5,0.2,0.5,0.5v4.6h4.6c0.3,0,0.5,0.2,0.5,0.5v0.7\n            \tC18,12.6,17.8,12.9,17.5,12.9z"/>\n            </svg>';
        }
    },
    close: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#abb6bd'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <polygon fill="' + color[0] + '" points="18,6.8 17.2,6 12,11.2 6.8,6 6,6.8 11.2,12 6,17.2 6.8,18 12,12.8 17.2,18 18,17.2 12.8,12 "/>\n            </svg>';
        }
    },
    check: {
        width: '14px',
        height: '14px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.white];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M5.5,10.8C5.4,10.9,5.2,11,5.1,11s-0.3-0.1-0.4-0.2L2.1,8.3c-0.2-0.2-0.2-0.5,0-0.7l0.2-0.2\n            \tc0.2-0.2,0.5-0.2,0.7,0c0,0,0,0,0,0l2,2l5.9-6c0.2-0.2,0.5-0.2,0.7,0c0,0,0,0,0,0l0.2,0.2c0.2,0.2,0.2,0.5,0,0.7L5.5,10.8z"/>\n            </svg>';
        }
    },
    search: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.black];
            return '<svg version="1.1" id="Search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M7.6,13c-1.6-1.5-1.6-4,0-5.5s4.1-1.5,5.7,0s1.6,4,0,5.5S9.2,14.6,7.6,13 M19,17.9l-4.1-4.1\n            \tc1.8-2.2,1.7-5.4-0.4-7.4c-2.2-2.2-5.8-2.2-8,0s-2.2,5.6,0,7.8c2,1.9,5,2.2,7.2,0.8l4.2,4.1c0.3,0.3,0.9,0.3,1.2,0\n            \tC19.4,18.7,19.4,18.1,19,17.9"/>\n            </svg>';
        }
    },
    money: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.black];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M12.2,19h-0.3c-0.4,0-0.8-0.4-0.8-0.8v-1C9.3,16.8,8,15.7,8,14h1.9c0,1.1,1,1.8,2.1,1.8c1.5,0,2.1-0.6,2.1-1.4\n            \tc0-0.9-0.3-1.3-2.1-1.8C9.9,12,8.2,11.5,8.2,9.6c0-1.5,1.3-2.4,2.8-2.7V5.8c0-0.4,0.4-0.8,0.8-0.8h0.3C12.6,5,13,5.4,13,5.8v1\n            \tc1.7,0.3,2.8,1.4,2.8,3H14c0-0.9-0.5-1.7-2-1.7c-1.3,0-2,0.7-2,1.4c0,1,1,1.2,2.5,1.6c2.6,0.8,3.4,1.6,3.4,3.3c0,1.4-1.1,2.5-3,2.7\n            \tv1C13,18.6,12.6,19,12.2,19z"/>\n            </svg>';
        }
    },
    map: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#ADB4BB'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M11.7,10.9c-1.2,0-2.2-1-2.2-2.3c0-1.2,1-2.2,2.2-2.2C13,6.4,14,7.3,14,8.6C14,9.9,13,10.9,11.7,10.9 M11.7,3\n            \tC8.5,3,6,5.4,6,8.5c0,2,0.8,3,2.3,5.1l0.3,0.5c2.1,2.9,2.5,5.5,2.5,5.5c0.1,0.3,0.3,0.5,0.6,0.5c0.3,0,0.5-0.2,0.6-0.5\n            \tc0,0,0.3-2.5,2.4-5.5c0.1-0.2,0.2-0.3,0.3-0.5c1-1.4,2.3-3.2,2.3-5.1C17.4,5.5,14.8,3,11.7,3"/>\n            </svg>';
        }
    },
    go: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#adb4bb'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.7,0,12,0z M17.8,12.2l-4.7,4.8c0,0-0.1,0-0.2,0\n            \tc0,0,0,0,0,0l-0.1-0.1c0,0,0,0,0,0L12.2,16c0,0,0,0,0,0l-0.1-0.1c0,0,0-0.1,0-0.2l3-3h-9c0,0-0.1,0-0.1-0.1v-1.3c0,0,0-0.1,0.1-0.1\n            \th9l-2.9-2.9c0,0,0,0,0,0l-0.1-0.1c0,0,0-0.1,0-0.2L12.1,8c0,0,0,0,0,0l0.8-0.8c0,0,0,0,0,0L13,7.1c0,0,0.1,0,0.2,0c0,0,0,0,0,0\n            \tl4.8,4.8C18,12,18,12,17.8,12.2L17.8,12.2z"/>\n            </svg>';
        }
    },
    arrowDown: {
        width: '14px',
        height: '14px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.blue];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M11.5,4.2l0.3,0.4c0.1,0.1,0.1,0.2,0,0.3L7.1,9.8c-0.1,0.1-0.2,0.1-0.3,0c0,0,0,0,0,0L2.1,4.8\n            \tc-0.1-0.1-0.1-0.2,0-0.3l0.3-0.4c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0,0l4.1,4.4c0.1,0.1,0.2,0.1,0.3,0c0,0,0,0,0,0l4.1-4.4\n            \tC11.3,4.1,11.4,4.1,11.5,4.2C11.5,4.1,11.5,4.2,11.5,4.2z"/>\n            </svg>';
        }
    },
    arrowDownFilled: {
        width: '12px',
        height: '12px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.blue];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M6,3.6h3.2C9.7,3.6,10,4,10,4.4c0,0.2-0.1,0.4-0.2,0.5L8.6,6.1l-2,2c-0.3,0.3-0.8,0.3-1.1,0l0,0l-2-2L2.2,5\n            \tC1.9,4.7,1.8,4.2,2.1,3.9c0.2-0.2,0.4-0.3,0.6-0.3C2.7,3.6,6,3.6,6,3.6z"/>\n            </svg>';
        }
    },
    loading: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.white];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <style type="text/css">\n            \t.st0{fill:url(#SVGID_1_);}\n            </style>\n            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="21" y1="12" x2="3" y2="12">\n            \t<stop  offset="0.1778" style="stop-color:' + color[0] + ';stop-opacity:0"/>\n            \t<stop  offset="0.2271" style="stop-color:' + color[0] + ';stop-opacity:0.1"/>\n            \t<stop  offset="0.3157" style="stop-color:' + color[0] + ';stop-opacity:0.4"/>\n            \t<stop  offset="0.4525" style="stop-color:' + color[0] + ';stop-opacity:0.7"/>\n            \t<stop  offset="0.5546" style="stop-color:' + color[0] + '"/>\n            \t<stop  offset="0.9278" style="stop-color:' + color[0] + '"/>\n            </linearGradient>\n            <path class="st0" d="M19.1,12c0.1,4-3.1,7.2-7.1,7.2S4.8,16,4.8,12S8,4.8,12,4.8V3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9H19.1z"/>\n            </svg>';
        }
    },
    label: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#ADB4BB'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M13.7,9.8c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5C14.4,11.3,13.7,10.6,13.7,9.8\n            \t M12.1,20.7l7.6-7.5c0.2-0.2,0.4-0.5,0.4-0.8V6.2C20,5.5,19.5,5,18.8,5h-6.1c-0.3,0-0.6,0.1-0.8,0.4l-7.6,7.5\n            \tc-0.5,0.5-0.5,1.2,0,1.7l6.1,6.1C10.9,21.1,11.6,21.1,12.1,20.7"/>\n            </svg>';
        }
    },
    unlock: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#ADB4BB'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M10.5,16.9c-0.9,0-1.6-0.8-1.6-1.7c0-0.9,0.7-1.7,1.6-1.7s1.6,0.8,1.6,1.7C12.1,16.1,11.4,16.9,10.5,16.9\n            \t M16.5,3c-2.4,0-4.4,2-4.4,4.6v1.7H5.6C4.7,9.2,4,10,4,10.9v8.4C4,20.2,4.7,21,5.6,21h9.8c0.9,0,1.6-0.8,1.6-1.7v-8.4\n            \tc0-0.9-0.7-1.7-1.6-1.7h-0.8h-0.2V7.6c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2v0.4h2.2V7.6C20.9,5,18.9,3,16.5,3"/>\n            </svg>';
        }
    },
    bill: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#ADB4BB'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M12.1,16h-0.2c-0.3,0-0.5-0.2-0.5-0.5v-0.7c-1.1-0.2-1.9-0.9-1.9-2h1.2c0,0.7,0.6,1.2,1.3,1.2\n            \tc0.9,0,1.3-0.4,1.3-0.9c0-0.6-0.2-0.8-1.3-1.2c-1.3-0.4-2.4-0.7-2.4-2c0-1,0.8-1.6,1.8-1.8V7.5c0-0.3,0.2-0.5,0.5-0.5h0.2\n            \tc0.3,0,0.5,0.2,0.5,0.5v0.7c1.1,0.2,1.8,0.9,1.8,1.9h-1.1C13.3,9.5,13,9,12,9c-0.8,0-1.2,0.4-1.2,0.9c0,0.7,0.6,0.8,1.6,1.1\n            \tc1.6,0.5,2.2,1,2.2,2.1c0,0.9-0.7,1.6-1.9,1.7v0.7C12.6,15.8,12.4,16,12.1,16z M5,5C3.9,5,3,5.9,3,7v9c0,1.1,0.9,2,2,2h14\n            \tc1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5z"/>\n            </svg>';
        }
    },
    studies: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#ADB4BB'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M6.1,13.1v3.3c0,0.2,0.1,0.3,0.2,0.4l5.7,3.2c0.1,0.1,0.3,0.1,0.4,0l5.7-3.2c0.1-0.1,0.2-0.2,0.2-0.4v-3.3\n            \tl-6,3.3c-0.1,0.1-0.3,0.1-0.4,0L6.1,13.1z"/>\n            <path fill="' + color[0] + '" d="M12,4.1L3.2,8.9C3,9,2.9,9.3,3.1,9.5c0,0.1,0.1,0.1,0.2,0.2l8.8,4.9c0.1,0.1,0.3,0.1,0.4,0l7.8-4.3V16\n            \tc0,0.2,0.2,0.4,0.5,0.4h0.9c0.2,0,0.5-0.2,0.5-0.4V9.6c0-0.2-0.1-0.3-0.2-0.4l-9.3-5.1C12.3,4,12.2,4,12,4.1z"/>\n            </svg>';
        }
    },
    filter: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#1476FB'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <rect x="5" y="7" fill="' + color[0] + '" width="14" height="1.5"/>\n            <rect x="7.7" y="10.8" fill="' + color[0] + '" width="8.6" height="1.5"/>\n            <rect x="10.3" y="14.5" fill="' + color[0] + '" width="3.4" height="1.5"/>\n            </svg>';
        }
    },
    like: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#adb4bb'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M6.3,17.9v-7.5c0-0.6-0.5-1.1-1.2-1.1h-1C3.5,9.2,3,9.8,3,10.4v7.5C3,18.5,3.5,19,4.2,19h1\n            \tC5.8,19,6.3,18.5,6.3,17.9"/>\n            <path fill="' + color[0] + '" d="M10.2,19h6.7c0.7,0,1.3-0.4,1.5-1l2.5-5.7c0.1-0.2,0.1-0.4,0.1-0.6v-1.6l0,0l0-0.1c0-0.9-0.7-1.6-1.6-1.6H15\n            \tc-0.4,0-0.7-0.4-0.6-0.8L15,4.7l0-0.3c0-0.3-0.1-0.6-0.4-0.9l-0.4-0.4c-0.3-0.3-0.7-0.3-0.9,0L8.4,8.1C8.1,8.4,7.9,8.8,7.9,9.2v7.5\n            \tC7.9,18,8.9,19,10.2,19"/>\n            </svg>';
        }
    },
    dislike: {
        width: '24px',
        height: '24px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#adb4bb'];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M17.7,7.1v7.5c0,0.6,0.5,1.1,1.2,1.1h1c0.6,0,1.2-0.5,1.2-1.1V7.1C21,6.5,20.5,6,19.8,6h-1\n            \tC18.2,6,17.7,6.5,17.7,7.1"/>\n            <path fill="' + color[0] + '" d="M13.8,6H7.1C6.4,6,5.8,6.4,5.6,7l-2.5,5.7C3,12.9,3,13.1,3,13.3v1.6l0,0l0,0.1c0,0.9,0.7,1.6,1.6,1.6H9\n            \tc0.4,0,0.7,0.4,0.6,0.8L9,20.3l0,0.3c0,0.3,0.1,0.6,0.4,0.9l0.4,0.4c0.3,0.3,0.7,0.3,0.9,0l4.9-4.9c0.3-0.3,0.5-0.7,0.5-1.1V8.3\n            \tC16.1,7,15.1,6,13.8,6"/>\n            </svg>';
        }
    },
    android: {
        width: '12px',
        height: '12px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["#A4C639"];
            return '<svg version="1.1" id="Android" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M15.1,6.6H5C4.7,6.6,4.6,6.8,4.6,7v8.5C4.6,15.8,4.7,16,5,16h1.8v2.9C6.8,19.5,7.3,20,8,20l0,0\n            \tc0.7,0,1.2-0.5,1.2-1.2V16h1.7v2.9c0,0.7,0.5,1.2,1.2,1.2l0,0c0.7,0,1.2-0.5,1.2-1.2V16h1.8c0.2,0,0.4-0.2,0.4-0.4V7\n            \tC15.5,6.8,15.4,6.6,15.1,6.6z"/>\n            <path fill="' + color[0] + '" d="M2.8,6.6L2.8,6.6c-0.7,0-1.2,0.5-1.2,1.2v4.9c0,0.7,0.5,1.2,1.2,1.2l0,0c0.7,0,1.2-0.5,1.2-1.2V7.8\n            \tC4,7.2,3.5,6.6,2.8,6.6z"/>\n            <path fill="' + color[0] + '" d="M17.3,6.6L17.3,6.6c-0.7,0-1.2,0.5-1.2,1.2v4.9c0,0.7,0.5,1.2,1.2,1.2l0,0c0.7,0,1.2-0.5,1.2-1.2V7.8\n            \tC18.5,7.2,17.9,6.6,17.3,6.6z"/>\n            <path fill="' + color[0] + '" d="M5,6h10c0.3,0,0.5-0.2,0.4-0.5c-0.3-1.6-1.3-2.9-2.7-3.7l0.9-1.5c0.1-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2,0-0.3,0.1\n            \tl-0.9,1.6c-0.7-0.3-1.5-0.5-2.3-0.5c-0.8,0-1.6,0.2-2.3,0.5L6.9,0.1C6.8,0,6.7,0,6.6,0C6.5,0.1,6.4,0.2,6.5,0.3l0.9,1.5\n            \tC6,2.6,5,3.9,4.7,5.5C4.6,5.8,4.8,6,5,6z M13,3.7c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5\n            \tC12.8,3.3,13,3.5,13,3.7z M7.5,3.3C7.8,3.3,8,3.5,8,3.7C8,4,7.8,4.2,7.5,4.2C7.3,4.2,7.1,4,7.1,3.7S7.3,3.3,7.5,3.3z"/>\n            </svg>';
        }
    },
    apple: {
        width: '12px',
        height: '12px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["#A8B1B8"];
            return '<svg version="1.1" id="Apple" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M15.4,10.6c0-2.5,2.1-3.8,2.2-3.8c-1.2-1.7-3-2-3.7-2c-1.6-0.2-3,0.9-3.8,0.9s-2-0.9-3.3-0.9\n            \tc-1.7,0-3.3,1-4.1,2.5C0.9,10.5,2.2,15,3.9,17.5c0.8,1.2,1.8,2.6,3.2,2.5c1.3-0.1,1.7-0.8,3.3-0.8s2,0.8,3.3,0.8\n            \tc1.4,0,2.2-1.2,3.1-2.5c1-1.4,1.4-2.8,1.4-2.8C18.1,14.7,15.5,13.7,15.4,10.6z"/>\n            <path fill="' + color[0] + '" d="M12.9,3.2c0.7-0.8,1.2-2,1-3.2c-1,0-2.2,0.7-2.9,1.5c-0.6,0.8-1.2,1.9-1.1,3.1C11.1,4.7,12.2,4,12.9,3.2z"/>\n            </svg>';
        }
    },
    sight: {
        width: '75px',
        height: '30px',
        display: 'block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.white];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 74.2 33.3" style="enable-background:new 0 0 74.2 33.3;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M1.5,24.1l0.7-1.6c1.6,0.8,3.2,1.2,4.6,1.2s2.6-0.2,3.4-0.7c0.8-0.5,1.2-1.2,1.2-2.1c0-1.3-1.5-2.6-4.6-3.6\n            \tc-1.6-0.5-3-1.2-4-1.9c-1-0.8-1.5-1.8-1.5-3C1.3,10.9,1.9,9.8,3,9c1.1-1,2.6-1.4,4.6-1.4c0.8,0,1.7,0.1,2.7,0.4s1.8,0.6,2.4,1\n            \tL12,10.5c-0.7-0.3-1.4-0.6-2.1-0.9C9.2,9.5,8.4,9.4,7.5,9.4c-1.2,0-2.2,0.3-2.9,0.8c-0.8,0.5-1.2,1.2-1.2,2c0,0.7,0.4,1.3,1.2,1.8\n            \ts1.8,1,3.2,1.4c3.8,1.3,5.7,3.1,5.7,5.2c0,1.5-0.6,2.7-1.7,3.5c-1.2,0.8-2.8,1.3-5,1.3C6,25.4,5,25.3,4,25\n            \tC2.9,24.8,2.1,24.5,1.5,24.1"/>\n            <polygon fill="' + color[0] + '" points="16.3,25 18.5,25 18.5,8.1 16.3,8.1 16.3,25 "/>\n            <path fill="' + color[0] + '" d="M17.4,30.3c-0.5,0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.7-0.5-1.2s0.2-0.9,0.5-1.2c0.3-0.3,0.7-0.5,1.2-0.5\n            \tc0.4,0,0.8,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2s-0.2,0.9-0.5,1.2C18.3,30.1,17.9,30.3,17.4,30.3L17.4,30.3z"/>\n            <path fill="' + color[0] + '" d="M17.4,6.2c-0.5,0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.7-0.5-1.2s0.2-0.9,0.5-1.2c0.3-0.3,0.7-0.5,1.2-0.5\n            \tc0.4,0,0.8,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2s-0.2,0.9-0.5,1.2C18.3,6,17.9,6.2,17.4,6.2L17.4,6.2z"/>\n            <path fill="' + color[0] + '" d="M35.3,8.2l-0.5,1.3c-1.5-1.1-3-1.7-4.4-1.7c-1.6,0-3,0.4-4.2,1.2s-2.1,1.9-2.7,3.2c-0.7,1.4-1,2.9-1,4.6\n            \tc0,2.7,0.6,4.9,2,6.5s3.3,2.4,5.7,2.4c1.6,0,3-0.5,4.3-1.5v3.1c0,1.3-0.5,2.3-1.4,3c-0.9,0.7-2.1,1-3.6,1c-1.1-0.1-2-0.2-2.8-0.4\n            \tc-0.8-0.3-1.6-0.6-2.3-0.9l-0.7,1.6c0.7,0.4,1.6,0.7,2.8,1s2.2,0.4,3,0.4c1.4,0,2.7-0.3,3.8-0.8c1.1-0.5,1.9-1.2,2.5-2.1\n            \tc0.6-0.9,0.9-1.9,0.9-3v-19L35.3,8.2z M34.5,21.8c-1.2,1.2-2.7,1.8-4.4,1.9c-1.8,0-3.2-0.6-4.1-1.9s-1.4-3-1.4-5.2\n            \tc0.1-2.1,0.6-3.8,1.5-5.1c0.9-1.3,2.3-2,4.1-2c1,0,1.7,0.1,2.4,0.4c0.7,0.3,1.3,0.7,1.9,1.2V21.8z"/>\n            <path fill="' + color[0] + '" d="M53.7,9.1c0.9,1,1.3,2.4,1.3,4.1v11.7h-2.2V13.6c0-2.8-1.1-4.2-3.3-4.2c-0.9,0-1.9,0.3-3.1,1\n            \tc-1.2,0.7-2.1,1.5-2.9,2.5v12h-2.2V0.7l2.2-0.3v10.2c0.7-0.8,1.7-1.5,2.9-2.1s2.3-0.9,3.4-0.9C51.5,7.6,52.8,8.1,53.7,9.1"/>\n            <path fill="' + color[0] + '" d="M65,8l0.7,1.6h-3.8v10.6c0,0.9,0.2,1.6,0.6,2.1c0.4,0.5,1,0.8,1.8,0.8c0.5,0,0.9-0.1,1.4-0.3l0.4,1.8l-0.7,0.2\n            \tC65,24.9,64.5,25,63.8,25c-1.3,0-2.3-0.4-3-1.2c-0.7-0.8-1.1-1.9-1.1-3.3V9.6h-2.5V8h2.5V3.6l2.2-0.8V8C61.9,8,65,8,65,8z"/>\n            <path fill="' + color[0] + '" d="M71.4,7.7c0-0.3-0.2-0.5-0.4-0.6c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.1-0.4-0.2-0.8-0.2\n            \tc-0.3,0-0.6,0-0.9,0.1v2.3h0.5c0,0,0-0.9-0.1-0.9h0.3c0.3,0,0.5,0.1,0.5,0.4C70.9,8,71,8.3,71,8.3h0.6C71.5,8.2,71.5,8.1,71.4,7.7z\n            \t M70.4,7h-0.3V6.3c0.1,0,0.2,0,0.3,0c0.3,0,0.5,0.2,0.5,0.4C70.9,6.9,70.7,7,70.4,7z"/>\n            <path fill="' + color[0] + '" d="M70.5,4.7c-1.3,0-2.4,1.1-2.4,2.4c0,1.4,1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4S71.8,4.8,70.5,4.7z M70.4,9\n            \tc-1,0-1.8-0.9-1.8-1.9s0.8-1.9,1.8-1.9s1.8,0.9,1.8,1.9C72.2,8.2,71.4,9,70.4,9z"/>\n            </svg>';
        }
    },
    bubble: {
        width: '25px',
        height: '25px',
        display: 'block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["#DFEDFF"];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 50 41.9" style="enable-background:new 0 0 50 41.9;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M25,0C11.2,0,0,9.1,0,20.3c0,4,1.5,7.8,4,10.9c0.3,0.4,1,1,0.8,1.8c-0.1,0.5-2.3,7.6-2.3,7.6\n            \tc-0.2,0.6,0.2,1.3,1,1.3c0.6,0,1-0.2,1-0.2s7.4-3,7.8-3.2c1-0.5,2.4-0.1,3,0.1c3,1,6.3,1.4,9.8,1.4C38.9,40,50,31.6,50,20.4\n            \tC50,9.1,38.8,0,25,0z"/>\n            </svg>';
        }
    },
    menu: {
        width: '16px',
        height: '16px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.white];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 3.1 13.1" style="enable-background:new 0 0 3.1 13.1;" xml:space="preserve">\n            <circle fill="' + color[0] + '" cx="1.5" cy="1.5" r="1.5"/>\n            <circle fill="' + color[0] + '" cx="1.5" cy="11.5" r="1.5"/>\n            <circle fill="' + color[0] + '" cx="1.5" cy="6.5" r="1.5"/>\n            </svg>';
        }
    },
    dashboard: {
        width: '25px',
        height: '20px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.darkBlue];
            return '<svg version="1.1" id="Dashboard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 25 20" style="enable-background:new 0 0 25 20;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M20.4,0H4.6C3.5,0,2.5,1,2.5,2.1v15.8c0,1.2,1,2.1,2.1,2.1h15.8c1.2,0,2.1-1,2.1-2.1V2.1C22.5,1,21.5,0,20.4,0z\n            \t M9.3,14.9H7.2V7.4h2.1C9.3,7.4,9.3,14.9,9.3,14.9z M13.6,14.9h-2.1V4.2h2.1C13.6,4.2,13.6,14.9,13.6,14.9z M17.8,14.9h-2.1v-4.3\n            \th2.1C17.8,10.6,17.8,14.9,17.8,14.9z"/>\n            </svg>';
        }
    },
    publications: {
        width: '25px',
        height: '20px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.darkBlue];
            return '<svg version="1.1" id="Admin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 25 20" style="enable-background:new 0 0 25 20;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M22.2,6.3H2.8C1.7,6.3,1,7.2,1,8.1v10.1c0,1,0.7,1.8,1.7,1.8h19.5c0.9,0,1.7-0.7,1.7-1.7V8.1\n            \tC24,7.2,23.2,6.3,22.2,6.3z M16.4,16.1H8.6c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h7.9c0.4,0,0.7,0.3,0.7,0.7\n            \tC17.2,15.8,16.8,16.1,16.4,16.1z M18.9,12.1H6.1c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h12.8c0.4,0,0.7,0.3,0.7,0.7\n            \tC19.7,11.7,19.4,12.1,18.9,12.1z"/>\n            <path fill="' + color[0] + '" d="M21.5,4.1c0-0.5-0.4-0.9-0.9-0.9H4.4c-0.5,0-0.9,0.4-0.9,0.9v0.7h18C21.5,4.8,21.5,4.1,21.5,4.1z"/>\n            <path fill="' + color[0] + '" d="M19,0.9C19,0.4,18.6,0,18.1,0H6.9C6.4,0,6,0.4,6,0.9v0.7h13V0.9z"/>\n            </svg>';
        }
    },
    talent: {
        width: '25px',
        height: '20px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_colors2.default.darkBlue];
            return '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n        \t<path fill="' + color[0] + '" d="M49.2,45.6L41.6,38c3.2-4,5.1-9.1,5.1-14.6C46.7,10.4,36.3,0,23.3,0S0,10.4,0,23.3s10.4,23.3,23.3,23.3\n        \t\tc5.5,0,10.4-1.9,14.4-5.1l7.6,7.6c1.1,1.1,2.8,1.1,3.8,0C50.3,48.4,50.3,46.7,49.2,45.6z M5.1,23.3c0-10,8.3-18.2,18.2-18.2\n        \t\ts18.2,8.3,18.2,18.2c0,4.5-1.7,8.7-4.5,11.9h-0.2l0,0c0-3.6-2.8-6.6-6.6-6.6H16.1c-3.6,0-6.6,3-6.8,6.6C6.8,32,5.1,27.8,5.1,23.3z"\n        \t\t/>\n        \t<path fill="' + color[0] + '" d="M23.1,26.3c4,0,7.4-3.2,7.4-7.4c0-4-3.4-7.4-7.4-7.4c-4,0-7.4,3.4-7.4,7.4S19.1,26.3,23.1,26.3z"/>\n            </svg>';
        }
    },
    // Gender
    male: {
        width: '70px',
        height: '70px',
        display: 'inline-block',
        icon: function icon() {
            return '\n            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 70 70" style="enable-background:new 0 0 70 70;" xml:space="preserve">\n            <rect y="0" fill="#E8EEF8" width="70" height="70"/>\n            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-369.7819" y1="333.2088" x2="-369.3122" y2="332.2451" gradientTransform="matrix(-33.0024 3.4687 -3.5506 -33.7815 -10976.4004 12577.9385)">\n            \t<stop  offset="0" style="stop-color:#C2CDE2"/>\n            \t<stop  offset="1" style="stop-color:#D9E1EF"/>\n            </linearGradient>\n            <path fill="url(#SVGID_1_)" d="M42.2,61.1c-3,2.6-7.4,2.6-10.4,0c-4.4-3.7-7.4-6-9.4-8.2c0.1,3.2-0.3,9.4-2.4,13.7C24.6,68.8,29.7,70,35,70\n            \tc6,0,11.6-1.5,16.5-4.2c-1-2.6-1.4-7.7-1.5-11.8C48.3,56,45.7,58.1,42.2,61.1z"/>\n            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="79.3705" y1="184.8192" x2="36.9029" y2="43.3465">\n            \t<stop  offset="0" style="stop-color:#C7D2E7"/>\n            \t<stop  offset="1" style="stop-color:#E0E7F2"/>\n            </linearGradient>\n            <path fill="url(#SVGID_2_)" d="M52.5,44.2c-1.5-0.2-1.4-2.1-1.2-4.6c0.1-1.8,0-3,0.3-4c0,0-0.1,0-0.1,0.1c-2.3,1.4-1.5-4.8-2-9.4\n            \tc-0.1-1.1-0.2-3.1-0.8-5.3c0-0.1-0.1-0.2-0.1-0.3c-0.3-1-0.6-2-1-2.9c0,0.5-0.2,0.6-0.2-0.2c0-0.9-2.3,13.3-18.8,13.3\n            \tc-1.9,0-3.9-0.2-5.8-0.5c0.1,4.6,0,10.1-1.7,6.8c-0.3-0.6-0.5-1-0.7-1.2c0.3,1,0.2,2.1,0.3,3.8c0.1,2.4,0.2,4.3-1.2,4.6\n            \tc-0.1,0-0.1,0-0.2,0c0.1,2.7,0.4,4.8,0.9,5.8c0.5,1,1.2,1.9,2.1,2.9c2,2.1,5,4.5,9.4,8.2c3,2.6,7.4,2.6,10.4,0\n            \tc3.5-2.9,6.1-5.1,7.8-7c1.4-1.6,2.1-3,2.1-4.5c0-0.2,0.4-3.1,0.7-5.4C52.7,44.2,52.6,44.2,52.5,44.2z"/>\n            <path fill="#D0D9ED" d="M26.7,28.9c-1.3,0-2.5-0.1-3.8-0.2c0,0.5,0,1,0,1.5c1.9,0.3,3.8,0.5,5.8,0.5c16.5,0,18.8-14.2,18.8-13.3\n            \tc0,0.8,0.2,0.7,0.2,0.2c-0.1-0.3-0.3-0.5-0.4-0.8C46.7,16,44.6,28.9,26.7,28.9z"/>\n            <path fill="#D9E1EF" d="M55.5,33c-0.1-0.3-0.3-0.5-0.5-0.6c-0.5-0.3-1.2,0.3-1.8,1c-0.4,0.4-0.7,0.9-1,1.2c-0.3,0.3-0.4,0.6-0.6,1\n            \tc-0.4,1-0.2,2.2-0.3,4c-0.1,2.4-0.2,4.3,1.2,4.6c0.1,0,0.2,0,0.3,0c1.3,0,2.2-1.2,2.2-3C55.1,39.3,56.3,34.7,55.5,33z"/>\n            <path fill="#BDC8DF" d="M55.1,21.2c-0.3-2.4-1.5-4.8-3.6-6.8c-0.1-0.1-1.9-0.5-2.4-0.4c-0.1-0.5-0.7-1.9-1.1-2.1\n            \tc-2.4-1.3-5.5-2.2-9.2-2.6C37.3,9,35.7,8.9,34,9.2c-5.7,1-9,8.3-13.7,9.9c-4.7,1.6-4.3,1.2-4.3,5.5c0,1.3,0.7,2.2,1.8,2.7\n            \tc0,1.4,0.1,3,0.2,4.4c0,0.2,0.1,0.5,0.1,0.8c0.4,0.3,0.8,0.7,1.2,1.2c0.2,0.3,0.4,0.6,0.6,0.8c0.3,0.4,0.5,0.8,0.6,1.2\n            \tc0.2,0.2,0.4,0.6,0.7,1.2c1.6,3.2,1.7-2.3,1.7-6.8c0-0.5,0-1,0-1.5c1.3,0.1,2.5,0.2,3.8,0.2c17.9,0,20-12.9,20.5-12.1\n            \tc0.1,0.3,0.3,0.5,0.4,0.8c0.4,0.9,0.8,1.9,1,2.9c0,0.1,0.1,0.2,0.1,0.3c0.5,2.2,0.7,4.2,0.8,5.3c0.4,4.7-0.3,10.8,2,9.4\n            \tc0,0,0.1,0,0.1-0.1c0.1-0.3,0.3-0.7,0.6-1c0.3-0.4,0.7-0.8,1-1.2c0.6-0.7,1.3-1.3,1.8-1C55.3,29,55.5,24.4,55.1,21.2z"/>\n            <path fill="#DEE5F1" d="M20.8,39.6c-0.1-1.7,0-2.8-0.3-3.8c-0.1-0.4-0.3-0.8-0.6-1.2c-0.2-0.2-0.4-0.5-0.6-0.8\n            \tc-0.4-0.5-0.8-0.9-1.2-1.2c-0.6-0.4-1.1-0.5-1.5,0.4c-0.8,1.7,0.4,6.3,0.4,8.3c0.1,1.8,1,3.1,2.4,3c0.1,0,0.1,0,0.2,0\n            \tC21.1,43.9,20.9,42,20.8,39.6z"/>\n            </svg>';
        }
    },
    female: {
        width: '70px',
        height: '70px',
        display: 'inline-block',
        icon: function icon() {
            return '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 70 70" style="enable-background:new 0 0 70 70;" xml:space="preserve">\n            <rect y="0" fill="#E8EEF8" width="70" height="70"/>\n            <path fill="#D0D9ED" d="M49.6,28.4c-0.8,1-2.7,1.9-6,3.2c-4.8,2-9.6,0.6-11.8,0c-7.6-1.9-11,4.8-8.4,11.3c0.4,1.1,0.9,2.5,1.4,3.9\n            \tc-0.8-5.8-0.5-14.5,5.5-13.1c2.4,0.6,7.8,2.2,13,0c2.9-1.2,5.2-2.7,6.5-4c0,0,0,0,0,0c0.1-0.5,0.2-0.9,0.3-1.4\n            \tC49.8,28.5,49.7,28.4,49.6,28.4z"/>\n            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="33.3135" y1="57.6128" x2="35.8135" y2="66.3628">\n            \t<stop  offset="0" style="stop-color:#C2CDE2"/>\n            \t<stop  offset="1" style="stop-color:#D9E1EF"/>\n            </linearGradient>\n            <path fill="url(#SVGID_1_)" d="M43.5,55.7C43.5,55.7,43.5,55.6,43.5,55.7c0,0-0.1,0-0.2,0.1c-0.8,0.7-1.6,1.4-2.5,2.1\n            \tc-3.1,2.4-7.2,2.7-10.5,0.9c-0.5-0.3-0.9-0.5-1.3-0.9c-0.8-0.6-1.5-1.2-2.1-1.7c0.5,3.7,0.5,7.3-0.4,10.2c-0.1,0.4-0.3,0.8-0.5,1.2\n            \tc0,0.4-0.1,0.8-0.1,1.2c0.2,0,0.3,0.1,0.5,0.1C29,69.6,32,70,35,70c3,0,5.8-0.4,8.6-1.1c0.1,0,0.3-0.1,0.4-0.1\n            \tC43.4,64.5,43.2,58.6,43.5,55.7z"/>\n            <path fill="#BDC8DF" d="M55.2,47.5c1.2-4.2,1.8-9.4,1.7-13.6c0-16.3-11.2-25.4-21.5-25.4C19.6,8.4,12.6,25.6,12.5,39\n            \tc-1.1,8.9-1.3,18.5,0.1,22.8c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c3.7,3,8,5.3,12.7,6.7c0.1,0,0.3,0.1,0.4,0.1\n            \tc0.2,0,0.3,0.1,0.5,0.1c0.1-0.8,0.1-1.6,0.2-2.5c1-2.9,1-6.6,0.4-10.2c0-0.3-0.1-0.7-0.2-1c-0.1-0.4-0.1-0.8-0.2-1.2\n            \tc-0.5-2.5-1.1-4.9-1.8-7.1c-0.5-1.5-0.9-2.8-1.4-3.9c-2.5-6.5,0.9-13.3,8.4-11.3c2.2,0.6,7,2,11.8,0c3.3-1.4,5.2-2.2,6-3.2\n            \tc0.1,0,0.2,0.1,0.3,0.1c-0.1,0.4-0.2,0.9-0.3,1.4c-0.3,2-0.6,4.4-0.8,6.8c1.5-1.5,2.4-1.6,2.9-0.8c0.7,1,0.3,2.3,0,4.3\n            \tc-0.1,0.8-0.4,3-0.4,3.5c0,1.2-1.2,2.2-2.6,1.8c0,0.3,0,0.6,0,1c-0.3,2.4-1.3,4.6-2.8,6.3c-0.8,1-1.6,2-2.4,2.9\n            \tc-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,3.6-0.1,9.3,0.2,13.1c0.1,0,0.3-0.1,0.4-0.1c6.2-1.6,11.7-4.9,16-9.3C56.2,56.2,53.9,52.1,55.2,47.5\n            \tz"/>\n            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="93.4695" y1="176.8062" x2="37.2195" y2="40.5562">\n            \t<stop  offset="0" style="stop-color:#C7D2E7"/>\n            \t<stop  offset="1" style="stop-color:#E0E7F2"/>\n            </linearGradient>\n            <path fill="url(#SVGID_2_)" d="M51.7,35.9c-0.5-0.8-1.4-0.8-2.9,0.8c0.2-2.4,0.5-4.9,0.8-6.8c0,0,0,0,0,0c-1.3,1.3-3.6,2.7-6.5,4\n            \tc-5.1,2.2-10.6,0.6-13,0c-6.1-1.4-6.3,7.2-5.5,13.1c0.7,2.1,1.3,4.6,1.8,7.1c0.1,0.4,0.1,0.8,0.2,1.2c0.1,0.3,0.1,0.7,0.2,1\n            \tc0.7,0.6,1.4,1.1,2.1,1.7c0.4,0.3,0.9,0.6,1.3,0.9c3.3,1.8,7.5,1.5,10.5-0.9c0.9-0.7,1.7-1.4,2.5-2.1c0,0,0,0.1,0,0.1\n            \tc0.1-0.1,0.1-0.1,0.2-0.2c0.9-0.9,1.7-1.9,2.4-2.9c1.5-1.7,2.5-3.9,2.8-6.3c0-0.3,0-0.7,0-1c1.5,0.4,2.6-0.6,2.6-1.8\n            \tc0-0.5,0.3-2.7,0.4-3.5C52,38.2,52.3,36.9,51.7,35.9z"/>\n            </svg>';
        }
    },
    // Talent search
    shinyTalent: {
        width: '72px',
        height: '72px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#EEF2F9', '#B0DBFF', _colors2.default.blue];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 72 72" style="enable-background:new 0 0 72 72;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M65.5,23.7c-1.7-4.2-1-10.1-4.2-13.2c-3.1-3.1-9-2.4-13.2-4.2C44.2,4.7,40.6,0,35.9,0s-8.3,4.7-12.3,6.4\n            \tc-4.2,1.7-10.1,1-13.2,4.2s-2.4,9-4.2,13.2C4.6,27.8,0,31.4,0,36c0,4.7,4.7,8.3,6.4,12.3c1.7,4.2,1,10.1,4.2,13.2\n            \tc3.1,3.1,9,2.4,13.2,4.2c4,1.7,7.6,6.3,12.3,6.3s8.3-4.7,12.3-6.4c4.2-1.7,10.1-1,13.2-4.2s2.4-9,4.2-13.2c1.7-4,6.4-7.6,6.4-12.3\n            \tS67.2,27.8,65.5,23.7"/>\n            <circle fill="' + color[1] + '" cx="17" cy="9" r="3"/>\n            <path fill="' + color[2] + '" d="M32.8,30.7c-0.2-0.8-0.4-1.6-0.4-2.4c0-3.8,2.5-7,5.9-7.8c-1-1-2.4-1.6-3.9-1.6c-3.2,0-5.8,2.7-5.8,6.1\n            \tC28.7,27.6,30.4,29.9,32.8,30.7z M35.9,35h-1c-1.8,0-3.6,0.8-4.8,2c-1.2,1.3-1.8,2.9-1.8,4.7v0.3v2.5c0,0.4-0.4,0.8-0.8,0.8H26\n            \tc-0.9,0-1.6-0.7-1.6-1.6v-5.5c0-2.9,2.1-5.1,4.9-5.1H34C34.5,33.9,35.1,34.5,35.9,35z M27,24.7c0,0.7,0.1,1.2,0.2,1.7\n            \tc-1.8-1.1-3.1-2.9-3.1-5.5c0-3.3,2.5-6,5.7-6c1.7,0,3.2,0.7,4.2,1.9C30.1,17.1,27,20.5,27,24.7z M40.1,34.3c-3.2,0-5.8-2.7-5.8-6.1\n            \ts2.6-6.1,5.8-6.1c3.2,0,5.8,2.7,5.8,6.1S43.3,34.3,40.1,34.3z M34.6,36.9h10.6c2.7,0,4.8,2,4.8,4.8v5.7c0,0.9-0.7,1.6-1.6,1.6H31.2\n            \tc-0.9,0-1.6-0.7-1.6-1.6v-4c0.9,0.5,1.7,0.8,2.7,0.8H38l-1,1.1c-0.3,0.3-0.3,0.8,0,1.1l0.3,0.3c0,0,0,0,0,0c0.3,0.3,0.8,0.3,1.1,0\n            \tl2.7-2.9c0.3-0.3,0.3-0.8,0-1.1l-2.7-2.8c0,0,0,0,0,0c-0.3-0.3-0.8-0.3-1.1,0L37,40c-0.3,0.3-0.3,0.8,0,1.1l1.1,1.1h-5.8\n            \tc-1.1,0-2-0.5-2.5-1.5c0.5-2,2-3.5,3.9-3.7C34.2,36.9,34.4,36.9,34.6,36.9z M30.3,31.4h-1.1c-1.7,0-3.4,0.8-4.7,2.1\n            \tc-1.2,1.3-1.8,2.9-1.8,4.8V41c0,0.4-0.4,0.8-0.8,0.8h-0.6c-0.7,0-1.4-0.6-1.4-1.4v-5.7c0-2.9,2.1-5.1,4.9-5.1h3.7\n            \tC29.1,30.3,29.7,30.9,30.3,31.4z"/>\n            <path fill="' + color[2] + '" d="M65,10.8h-3.8V7c0-0.7-0.6-1.3-1.3-1.3S58.8,6.3,58.8,7v3.8H55c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h3.8V17\n            \tc0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3v-3.8H65c0.7,0,1.3-0.6,1.3-1.3S65.7,10.8,65,10.8z"/>\n            <path fill="' + color[1] + '" d="M21,60.8h-3.8V57c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v3.8H11c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h3.8\n            \tV67c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3v-3.8H21c0.7,0,1.3-0.6,1.3-1.3S21.7,60.8,21,60.8z"/>\n            </svg>';
        }
    },
    shinyUpdates: {
        width: '72px',
        height: '72px',
        display: 'inline-block',
        icon: function icon() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#EEF2F9', '#B0DBFF', _colors2.default.blue];
            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            \t viewBox="0 0 72 72" style="enable-background:new 0 0 72 72;" xml:space="preserve">\n            <path fill="' + color[0] + '" d="M65.5,23.7c-1.7-4.2-1-10.1-4.2-13.2c-3.1-3.1-9-2.4-13.2-4.2C44.2,4.7,40.6,0,35.9,0s-8.3,4.7-12.3,6.4\n            \tc-4.2,1.7-10.1,1-13.2,4.2s-2.4,9-4.2,13.2C4.6,27.8,0,31.4,0,36c0,4.7,4.7,8.3,6.4,12.3c1.7,4.2,1,10.1,4.2,13.2\n            \tc3.1,3.1,9,2.4,13.2,4.2c4,1.7,7.6,6.3,12.3,6.3s8.3-4.7,12.3-6.4c4.2-1.7,10.1-1,13.2-4.2s2.4-9,4.2-13.2c1.7-4,6.4-7.6,6.4-12.3\n            \tS67.2,27.8,65.5,23.7"/>\n            <path fill="' + color[2] + '" d="M49.9,18h-2.5c0.4,0.8,0.7,1.7,0.8,2.7h1.7c0.8,0,1.4,0.6,1.4,1.4v24.8c0,0.8-0.6,1.4-1.4,1.4h-1.7\n            \tc-0.1,1-0.4,1.9-0.9,2.7h2.6c2.3,0,4.1-1.8,4.1-4.1V22.1C54,19.8,52.2,18,49.9,18z"/>\n            <path fill="' + color[2] + '" d="M25.1,18h15.8c2.3,0,4.1,1.8,4.1,4.1v24.8c0,2.3-1.8,4.1-4.1,4.1H25.1c-2.3,0-4.1-1.8-4.1-4.1V22.1\n            \tC21,19.8,22.8,18,25.1,18z"/>\n            <path fill="' + color[0] + '" d="M37.6,37.3c-0.4-0.4-1-0.4-1.5,0c-0.8,0.7-1.7,1.1-2.6,1.1c-1.1,0-2.1-0.4-3-1.2c-0.6-0.6-0.9-1.3-1-2.1\n            \tc0.4,0.3,1,0.3,1.3-0.1c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L29.4,32c-0.4-0.4-1-0.4-1.5,0l-1.6,1.5\n            \tC26.1,33.8,26,34,26,34.3s0.1,0.5,0.3,0.7c0.3,0.3,0.8,0.4,1.2,0.2c0.1,1.3,0.7,2.5,1.6,3.5l0.1,0.1c1.2,1.1,2.6,1.7,4.2,1.7\n            \tc1.6,0,3.1-0.6,4.2-1.7c0.2-0.2,0.3-0.5,0.3-0.7C38,37.8,37.8,37.5,37.6,37.3L37.6,37.3z M37.3,37.7L37.3,37.7L37.3,37.7L37.3,37.7z\n            \t"/>\n            <path fill="' + color[0] + '" d="M40.7,33c-0.3-0.3-0.8-0.4-1.2-0.2c-0.1-1.3-0.7-2.5-1.6-3.5c-1.2-1.2-2.7-1.8-4.3-1.8s-3.1,0.6-4.2,1.7\n            \tc-0.2,0.2-0.3,0.5-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7c0.4,0.4,1,0.4,1.5,0c0.8-0.8,1.7-1.1,2.7-1.1s2.1,0.4,2.8,1.2\n            \tc0.6,0.6,0.9,1.3,1,2.1c-0.4-0.3-1-0.3-1.4,0.1c-0.2,0.2-0.3,0.5-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l1.6,1.5c0.2,0.2,0.5,0.3,0.7,0.3\n            \tc0.3,0,0.5-0.1,0.7-0.3l1.5-1.5c0.3-0.2,0.4-0.4,0.4-0.7C41,33.5,40.9,33.2,40.7,33z"/>\n            <polygon fill="' + color[1] + '" points="53.5,59 58.3,67.3 48.7,67.3 "/>\n            <circle fill="' + color[1] + '" cx="57" cy="9" r="3"/>\n            <path fill="' + color[2] + '" d="M17,12c-1.5,0-3-1.6-3-3c0-0.5-0.4-1-1-1s-1,0.4-1,1c0,1.5-1.6,3-3,3c-0.5,0-1,0.4-1,1s0.4,1,1,1\n            \tc1.5,0,3,1.6,3,3c0,0.5,0.4,1,1,1s1-0.4,1-1c0-1.5,1.6-3,3-3c0.5,0,1-0.4,1-1S17.5,12,17,12z"/>\n            </svg>';
        }
    }
};