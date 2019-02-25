'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginUser = exports.registerUser = exports.register = exports.getData = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _employee = require('../sql/employee');

var _employee2 = _interopRequireDefault(_employee);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getData = exports.getData = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var getEmp;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _employee2.default.getEmpData();

                    case 2:
                        getEmp = _context.sent;

                        res.json({ result: getEmp });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getData(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var register = exports.register = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var _req$body, name, dept, addEmp;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _req$body = req.body, name = _req$body.name, dept = _req$body.dept;
                        _context2.next = 3;
                        return _employee2.default.addEmpData(name, dept);

                    case 3:
                        addEmp = _context2.sent;

                        res.json({ result1: addEmp });

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function register(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var registerUser = exports.registerUser = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var _req$body2, name, email, password, hashPassword, addEmp;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password;

                        if (!(!name || !email || !password)) {
                            _context3.next = 3;
                            break;
                        }

                        return _context3.abrupt('return', res.json({ error: "Please fill all fields" }));

                    case 3:
                        hashPassword = (0, _md2.default)(password);
                        _context3.next = 6;
                        return _employee2.default.addUserData(name, email, hashPassword);

                    case 6:
                        addEmp = _context3.sent;

                        res.json({ result1: addEmp });

                    case 8:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function registerUser(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var loginUser = exports.loginUser = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var _req$body3, email, password, hashPassword, searchEmp;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;

                        if (!(!email || !password)) {
                            _context4.next = 3;
                            break;
                        }

                        return _context4.abrupt('return', res.json({ error: "Please fill all fields" }));

                    case 3:
                        hashPassword = (0, _md2.default)(password);
                        _context4.next = 6;
                        return _employee2.default.searchUserData(email, hashPassword);

                    case 6:
                        searchEmp = _context4.sent;

                        if ((0, _lodash.isEmpty)(searchEmp)) res.json({ error: 'email or password is not valid' });
                        res.json(searchEmp[0]);

                    case 9:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function loginUser(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();
//# sourceMappingURL=employee.js.map