const { Pool } = require('pg'); 
connectionString = {
  connectionString: "postgres://fsmekhwyiwmbuh:c3aa72cc39b85640cade794a8acb57acaa878afc45ac52bebc699dcb2ff06099@ec2-54-159-112-44.compute-1.amazonaws.com:5432/dehcfh2854485q",
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