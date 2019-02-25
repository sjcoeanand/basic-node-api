'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _employee = require('./employee');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ mergeParams: true });

/*
 * This is the layer to handle error message
 * Fail fast error
 * TODO: move to helpers
 */

router.route('/getData').post(_employee.getData);
router.route('/register').post(_employee.register);
router.route('/registerUser').post(_employee.registerUser);
router.route('/loginUser').post(_employee.loginUser);

exports.default = router;
//# sourceMappingURL=index.js.map