import express from 'express'
import { getData, register, registerUser, loginUser } from './employee'
const router = express.Router({mergeParams: true})

/*
 * This is the layer to handle error message
 * Fail fast error
 * TODO: move to helpers
 */


router.route('/getData').post(getData);
router.route('/register').post(register);
router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);

export default router