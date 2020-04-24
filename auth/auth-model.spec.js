
const db = require('../database/dbConfig');
const auth = require('./auth-model');

describe('auth' , () => {
    beforeEach(async () => {
        await.db('auth').truncate();
    })
    
})