import path from 'path'
import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development'
import * as _ from 'lodash'

const sequelize = new Sequelize("node_basic", "root", "", {
  dialect: 'mysql',
  operatorsAliases: false
});

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.sql = async function sql(query) {
  const _query = query instanceof Array ? query[0] : query
  const instance = await db.sequelize.query(_query)
  return _.get(JSON.parse(JSON.stringify(instance)), '[0]')
}

export default db