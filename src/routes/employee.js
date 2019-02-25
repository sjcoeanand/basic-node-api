import MD5 from 'md5';
import empSql from '../sql/employee'
import {isEmpty} from 'lodash';

export const getData = async (req,res) => {
    const getEmp = await empSql. getEmpData();
    res.json({result:getEmp})
}

export const register = async (req, res) =>{
    const {name, dept} = req.body;
    const addEmp = await empSql.addEmpData(name, dept);
    res.json({result1:addEmp})
}

export const registerUser = async (req, res) =>{
    const {name, email, password} = req.body;    
    if(!name || !email || !password)
       return res.json({error : "Please fill all fields"})
      
    const hashPassword =  MD5(password);
    const addEmp = await empSql.addUserData(name, email, hashPassword);
    res.json({result1:addEmp})
}

export const loginUser = async (req, res) =>{
    const {email, password} = req.body;    
    if(!email || !password)
       return res.json({error : "Please fill all fields"})
      
    const hashPassword =  MD5(password);
    const searchEmp = await empSql.searchUserData(email, hashPassword);
    if(isEmpty(searchEmp))
        res.json({error :'email or password is not valid'})
    res.json(searchEmp[0])
}
