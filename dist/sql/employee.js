'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getEmpData = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('****getEmpData');
                        _context.next = 3;
                        return _sequelize2.default.sql("select * from employee");

                    case 3:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getEmpData() {
        return _ref.apply(this, arguments);
    };
}();

var addEmpData = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name, dept) {
        var result1;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log('****addEmpData');
                        _context2.next = 3;
                        return _sequelize2.default.sql('insert into employee (name, dept) values (\'' + name + '\', \'' + dept + '\')');

                    case 3:
                        result1 = _context2.sent;
                        return _context2.abrupt('return', result1);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function addEmpData(_x, _x2) {
        return _ref2.apply(this, arguments);
    };
}();

var addUserData = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(name, email, password) {
        var result1;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        console.log('****addEmpData');
                        _context3.next = 3;
                        return _sequelize2.default.sql('insert into register (name, email, password) values (\'' + name + '\', \'' + email + '\', \'' + password + '\')');

                    case 3:
                        result1 = _context3.sent;
                        return _context3.abrupt('return', result1);

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function addUserData(_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

var searchUserData = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(email, password) {
        var result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        console.log('****searchUserData');
                        _context4.next = 3;
                        return _sequelize2.default.sql('select id, email, name from register where  email= \'' + email + '\' AND password= \'' + password + '\'');

                    case 3:
                        result = _context4.sent;
                        return _context4.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function searchUserData(_x6, _x7) {
        return _ref4.apply(this, arguments);
    };
}();

var _sequelize = require('../sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { getEmpData: getEmpData, addEmpData: addEmpData, addUserData: addUserData, searchUserData: searchUserData };
//# sourceMappingURL=employee.js.map