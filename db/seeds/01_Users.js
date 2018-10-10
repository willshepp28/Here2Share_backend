
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "willshepp44", email: "willshepp@gmail.com", phone_number: "1112223333", password: "123"}
      ]);
    });
};
