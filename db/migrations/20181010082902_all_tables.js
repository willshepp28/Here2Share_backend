
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments();
            table.string("username").notNullable();
            table.string("profilePic").notNullable().defaultTo("https://s3.us-east-2.amazonaws.com/ig-clone2019/profilePic/profileplaceholder.png");
            table.string("email").notNullable();
            table.text("password").notNullable();
            table.text("phone_number").notNullable();
            table.timestamp('date_joined').defaultTo(knex.fn.now());
        })
        .createTable("address", (table) => {
            table.increments();
            table.string("street").notNullable();
            table.string("city").notNullable();
            table.string("state").notNullable();
            table.string("zipcode").notNullable();
            table.integer("userId").unsigned().references("id").inTable("users");
        })
        .createTable("categories", (table) => {
            table.increments();
            table.string("category_name").notNullable();
        })
        .createTable("products", (table) => {
            table.increments();
            table.string("product_name").notNullable();
            table.text("product_image").notNullable();
            table.integer("price").notNullable();
            table.integer("userId").unsigned().references("id").inTable("users");
            table.integer("categoryId").unsigned().references("id").inTable("categories");
        })
        .createTable("orders", (table) => {
            table.increments();
            table.integer("customerId").unsigned().references("id").inTable("users");
            table.integer("productId").unsigned().references("id").inTable("products");
            table.date("start_date").notNullable();
            table.date("return_date").notNullable();
            table.integer("total_price").notNullable();
        })
        .createTable("learning", (table) => {
            table.increments();
            table.date("start_date").notNullable();
            table.date("return_date").notNullable();
        })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("learning").dropTable("orders").dropTable("products").dropTable("categories").dropTable("address").dropTable("users");
};
