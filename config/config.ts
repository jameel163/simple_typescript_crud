import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'user_deatails',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || 'jameel',
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
);

// Optional: test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();
