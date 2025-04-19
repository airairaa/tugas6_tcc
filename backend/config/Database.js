import { Sequelize } from "sequelize";

const db = new Sequelize('tugas2', 'root', '', {
    host: '35.193.93.25',
    dialect: 'mysql',
});

export default db;
//35.193.93.25