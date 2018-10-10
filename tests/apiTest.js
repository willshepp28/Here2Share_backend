const request = require("supertest"),
    application = require("../app");



describe("GET /users", function(){
    it("response with json containing a list of all users", function(done){
        request(application)
            .get("/api/v1/")
            .set("Accept", "application/json")
            .expect("Content-Type", 'application/json; charset=utf-8')
            .expect(200, done)
    })
})