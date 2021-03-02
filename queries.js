require('dotenv').config();

const { Pool } = require('pg'); 
connectionString = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
};
const pool = new Pool(connectionString);

const queries = {
  initialize: async() => {
      const client = await pool.connect();
      client.release();
      console.log('Connected to db');
  },

  getDayBirthdays: async() => {
      let query = "SELECT " + 
                  "    nome, aniversario " + 
                  "FROM " + 
                  "    public.nivers " + 
                  "WHERE date_part('month', aniversario) = date_part('month', now()) " + 
                  "    and date_part('day', aniversario) = date_part('day', now()) " + 
                  "ORDER BY " + 
                  "    nome ASC";                  
      const result = await pool.query(query);
      return result.rows;

  }

}
module.exports = queries;
