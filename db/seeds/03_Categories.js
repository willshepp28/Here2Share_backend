
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories").del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {category_name: "appliances"},
        {category_name: "bikes"},
        {category_name: "books"},
        {category_name: "furntiure"},
        {category_name: "computers"},
        {category_name: "electronics"},
        {category_name: "auto"},
        {category_name: "cell phones"},
        {category_name: "tools"},
        {category_name: "household"}
      ]);
    });
};
