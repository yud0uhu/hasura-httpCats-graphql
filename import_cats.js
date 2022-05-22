const {Client}  = require('graphqurl');
const statuses =require('./lib/statuses.js');

const client = new Client({
    endpoint: 'http://localhost:8080/v1/graphql',
    headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Access-Key':'httpCat',
    }
})
const createCats = 
  `mutation ($id: Int, $status_code: Int) {
    insert_cats (objects: [
        {
          status_code: $status_code
        }
      ]) {
      affected_rows
      returning {
        status_code
      }
    }
  }`
statuses().forEach(async value=>{
    const catsDatails = {
        status_code: value.code,
    }

    await client.query(createCats, catsDatails).catch(error =>{
        console.log(error)
    })
    StatusDescription
})