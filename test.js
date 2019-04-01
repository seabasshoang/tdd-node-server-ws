const test = require('tape');
const supertest = require('supertest');
const router = require('./router');

test('Initialise', (t) => {
    let num = 2 
    t.equal(num, 2, 'Should return 2');
    t.end(); //ensures tests run in order
});

test('Home route returns a status code of 200', (t) => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();
        })
});

test('Home route', (t) => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, 'Hello', 'response should contain \'Hello\'');
            t.end();
        })
});

test('Elephants four o four', (t) => {
    supertest(router)
        .get("/elephants")
        .expect(404)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, 'unknown url', 'Response should contain \'unknown url\'');
            t.end();
        })
});

test('blog should return array', (t) => {
    supertest(router)
        .get("/blog")
        .expect(200)
        .expect('content-type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, '["one", "two", "three"]', 'Response should contain \'["one", "two", "three"]\'');
            t.end();
        })
});

test('post blog should use password', (t) => {
    supertest(router)
        .post("/blog")
        .expect(200)
        .expect('content-type', /html/)
        .set('password', 'potato')
        // .send("['a', 'b']") instead of hardcoding the response
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, "['a', 'b']", "Header password should be potato and body should return an array of ['a', 'b']");
            t.end();
        })
});

test('Post without password should be FORBIDDEN', (t) => {
    supertest(router)
        .post("/blog")
        .expect(403)
        .expect('content-type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, "FORBIDDEN", "Response should include F O R B I D D E N")
            t.end();
        });
});

test('')