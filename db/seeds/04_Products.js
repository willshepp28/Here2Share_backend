
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products").del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        { product_name: "macbook" , product_image: "https://www.macprolock.com/wp-content/uploads/2017/08/mac-pro-2017-lock-e1502422154361.png", price: 10, userId: 1, categoryId: 5}
      ]);
    });
};


