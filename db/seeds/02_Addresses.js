
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("address").del()
    .then(function () {
      // Inserts seed entries
      return knex("address").insert([
        { street: "123 Main Street", city: "Miami", state: "FL", zipcode: "23404", userId: 1}
      ]);
    });
};
