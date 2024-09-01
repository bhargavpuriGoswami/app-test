const request = require('supertest')
const app = require("../app")

describe('API Endpoints', ()=>{
    it('It should return 200', async()=>{
        const res=await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
    });

    it('It should return valid message', async()=>{
        const res=await request(app).get('/api');
        expect(res.body).toHaveProperty('message');
    });



});
describe('API Endpoints', ()=> {
    it('It should return 201', async()=>{
        const res=await request(app)
        .post('/post')
        .send({data:"dummy"});
        expect(res.statusCode).toEqual(201);
    });
    it('It should return 400', async()=>{
        const res=await request(app)
        .post('/post')
        expect(res.statusCode).toEqual(400);
    });

    it('It should return 400', async()=>{
        const res=await request(app)
        .post('/post')
        expect(res.body).toHaveProperty('error');
    });
  });
