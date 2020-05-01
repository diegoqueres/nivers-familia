const pg = require('pg');
const client = new pg.Client({
  user: 'fsmekhwyiwmbuh',
  host: 'ec2-54-159-112-44.compute-1.amazonaws.com',
  database: 'dehcfh2854485q',
  password: 'c3aa72cc39b85640cade794a8acb57acaa878afc45ac52bebc699dcb2ff06099',
  port: 5432,
  ssl: true
}); 

const queries = {
  initialize: async() => {
      await client.connect();
  },

  getDayBirthdays: async() => {
      let query = "SELECT " + 
                  "    now() as data, nome, aniversario" + 
                  "FROM " + 
                  "    public.nivers " + 
                  "WHERE WHERE date_part('month', aniversario) = date_part('month', now()) " + 
                  "    and date_part('day', aniversario) = date_part('day', now()) " + 
                  "ORDER BY " + 
                  "    nome ASC";                  
      let result = pool.query(query, (error, results) => {
        if (error) {
          throw error
        }
        return (results.rows);
      });

      //parei aqui por enquanto, pois não consigo que a conexão funcione e tampouco rodar essa query acima...

      return result;

  }

}
module.exports = queries;