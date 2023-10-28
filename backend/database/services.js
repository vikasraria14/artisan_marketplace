const fs = require('fs');
const { connection } = require('./connection');

const sellers=["seller1", "seller2"]

const serviceData =[
  {
    label:"Baby Shoes",
    name: 'shoes',
    category: 'clothes',
    image:'uploads/c1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Woolen Sweater",
    name: 'sweater',
    category: 'clothes',
    image:'uploads/c2.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Quilt",
    name: 'quilt',
    category: 'clothes',
    image:'uploads/c3.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Dog Cloth",
    name: 'dogcloth',
    category: 'clothes',
    image:'uploads/c4.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Top",
    name: 'top',
    category: 'clothes',
    image:'uploads/c5.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Hoodie",
    name: 'hoodie',
    category: 'clothes',
    image:'uploads/c6.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Jogger",
    name: 'jogger',
    category: 'clothes',
    image:'uploads/c7.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Flower Pot",
    name: 'pot',
    category: 'decor',
    image:'uploads/d1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Pot",
    name: 'pot2',
    category: 'decor',
    image:'uploads/d2.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Mushroom",
    name: 'mushroom',
    category: 'decor',
    image:'uploads/d3.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Dream Catcher",
    name: 'dream_catcher',
    category: 'decor',
    image:'uploads/d4.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Candle",
    name: 'candle',
    category: 'decor',
    image:'uploads/d5.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Locket",
    name: 'locket',
    category: 'jewellery',
    image:'uploads/j1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Ear Rings",
    name: 'ear_ring',
    category: 'jewellery',
    image:'uploads/j2.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Ring",
    name: 'ring',
    category: 'jewellery',
    image:'uploads/j3.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Handmade Necklace",
    name: 'necklace1',
    category: 'jewellery',
    image:'uploads/j4.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Heavy Necklace",
    name: 'necklace',
    category: 'jewellery',
    image:'uploads/j1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Historical Masterpiece",
    name: 'historical_masterpiece',
    category: 'painting',
    image:'uploads/p1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Fine Art",
    name: 'fine_art',
    category: 'painting',
    image:'uploads/p2.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Unknown Art",
    name: 'unknown_art',
    category: 'painting',
    image:'uploads/p3.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Bird Art",
    name: 'bird_art',
    category: 'painting',
    image:'uploads/p4.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Beautiful Scenery",
    name: 'scenery',
    category: 'painting',
    image:'uploads/p5.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Sad Girl",
    name: 'sad_girl',
    category: 'painting',
    image:'uploads/p6.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Handmade Bear",
    name: 'handmade_bear',
    category: 'toy',
    image:'uploads/t1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Pikachu",
    name: 'pikachu',
    category: 'toy',
    image:'uploads/t2.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Woolen Pikachu",
    name: 'woolen_pikachu',
    category: 'toy',
    image:'uploads/t3.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Toy House",
    name: 'toy_house',
    category: 'toy',
    image:'uploads/t4.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Funny Bunny",
    name: 'funny_bunny',
    category: 'toy',
    image:'uploads/t5.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Hammer",
    name: 'hammer',
    category: 'toy',
    image:'uploads/t6.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Soup Bowl",
    name: 'soup_bowl',
    category: 'utensils',
    image:'uploads/u1.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Handmade Flask",
    name: 'flask',
    category: 'utensils',
    image:'uploads/u2.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Water Pot",
    name: 'water_pot',
    category: 'utensils',
    image:'uploads/u3.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Tea Cup",
    name: 'tea_cup',
    category: 'utensils',
    image:'uploads/u4.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"Coffee Mug",
    name: 'coffee_mug',
    category: 'utensils',
    image:'uploads/u5.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  {
    label:"China Dish",
    name: 'china_dish',
    category: 'utensils',
    image:'uploads/u6.jpg',
    cost: Math.round(Math.random()*500),
    quantity:Math.round(Math.random()*10),
    rating: Math.round(Math.random()*5),
    addedBy: sellers[Math.round(Math.random()*1)]
  },
  

]

const insertProduct = (productData) => {
  try {
    const sql = `
      INSERT INTO products (label, name, category, cost, rating, image, quantity, addedBy)
      VALUES (?, ?, ?, ?, ?, ?,?,?)
    `;

    const values = [
      productData.label,
      productData.name,
      productData.category,
      productData.cost,
      productData.rating,
      productData.image,
      productData.quantity,
      productData.addedBy
    ];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        return;
      }
      console.log(`Product ${productData.name} inserted successfully!`);
    });
  } catch (error) {
    console.error('Error inserting product:', error);
  }
};

function createNewTableByCategory(table_name, category) {
  try {
    const newTableName = table_name;

    // Create new table query
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${newTableName} (
      id INT NOT NULL AUTO_INCREMENT,
      item_no INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      cost INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (item_no) REFERENCES products(id)
    )`;

    connection.query(createTableQuery, (error, results, fields) => {
      if (error) {
        console.log(`Error creating new table: ${error}`);
        return;
      }

      console.log(`New table ${newTableName} created successfully.`);
    });

    let insertQuery = ` INSERT INTO ${newTableName} (name, cost, item_no)
    SELECT name, cost, id FROM products WHERE category = '${category}';`;

    connection.query(insertQuery, (error, results, fields) => {
      if (error) {
        console.log(`Error inserting into the table: ${error}`);
        return;
      }

      console.log(`Inserted into ${newTableName}`);
    });
  } catch (error) {
    console.error('Error creating or inserting into a new table:', error);
  }
}

const populateDatabase = () => {
  try {
    serviceData.forEach((service) => {
      insertProduct(service);
    });

    const distinctCategories = [...new Set(serviceData.map((item) => item.category))];

    distinctCategories.forEach((category) => {
      createNewTableByCategory(category, category);
    });
  } catch (error) {
    console.error('Error populating the database:', error);
  }
};

module.exports = {populateDatabase, insertProduct}
