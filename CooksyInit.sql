CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    is_verified BOOLEAN DEFAULT false,
    profile_picture_url VARCHAR(255),
    bio TEXT
);

CREATE TABLE oauth_users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    provider VARCHAR(50),
    provider_id VARCHAR(255),
    created_at TIMESTAMP
);

CREATE TABLE email_verifications (
    email VARCHAR(255) PRIMARY KEY,
    code_hash TEXT,
    expires_at TIMESTAMP
);

-- Create the categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);


-- Create the meal_types table
CREATE TABLE meal_types (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Create the world_cuisines table
CREATE TABLE world_cuisines (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);


-- Create the recipes table
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    meal_type_id INT NOT NULL REFERENCES meal_types(id) ON DELETE CASCADE,
    world_cuisine_id INT NOT NULL REFERENCES world_cuisines(id) ON DELETE CASCADE,
    description TEXT,
    title TEXT NOT NULL,
    image_url TEXT,
    serving_size SMALLINT,
    cooking_time_minutes SMALLINT,
    protein NUMERIC(5, 1),
    carbs NUMERIC(5, 1),
    fat NUMERIC(5, 1),
    energy_kj NUMERIC(7, 1),
    energy_kcal NUMERIC(5, 1),
    is_public BOOLEAN DEFAULT true 
);

-- Create the recipes_ingredients table
CREATE TABLE recipes_ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    spoonacular_ingredient_id INT NOT NULL,
    amount NUMERIC,
    unit TEXT NOT NULL,
    ingredient_name TEXT
);


-- Create the instructions table
CREATE TABLE instructions (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    instruction_text TEXT NOT NULL,
    instruction_order SMALLINT
);

-- Create the ratings table
CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    UNIQUE (user_id, recipe_id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    comment_id INTEGER NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comment_votes (
    id SERIAL PRIMARY KEY,
    comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vote_type SMALLINT NOT NULL CHECK (vote_type IN (1, -1)), -- 1 for like, -1 for dislike
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    image_url TEXT  -- Added for storing the image link
);



-- Inserting initial data

INSERT INTO categories (name) VALUES
('Bakeries'),
('Drinks'),
('Meat'),
('Poultry'),
('Fish'),
('Seafood'),
('Vegetarian'),
('Vegan');


INSERT INTO meal_types (name) VALUES
('Appetizer'),
('Main Course'),
('Dessert'),
('Breakfast'),
('Brunch'),
('Snack'),
('Side Dish'),
('Tapas'),
('Buffet');


INSERT INTO world_cuisines (name) VALUES
('Africa'),
('America'),
('Asia'),
('France'),
('Greece'),
('India'),
('Italy'),
('Middle East'),
('Mexico'),
('Spain'),
('Sweden'),
('Any');




INSERT INTO articles (title, description, content, image_url) VALUES
(
    'Apricot: A Nutritional Powerhouse',
    'Apricot are low in calories and rich in vitamins A and C, antioxidants, and fiber, making them beneficial for immune health and digestion.',
    'Apricot are a nutritious and delicious fruit that offer a wealth of health benefits, making them an excellent addition to a balanced diet. Low in calories yet rich in essential nutrients, peaches are especially noted for their high content of vitamins A and C, antioxidants, and dietary fiber. These nutrients together contribute to improved immune health, skin health, and digestive function. Additionally, the dietary fiber in peaches promotes satiety, aiding in weight management and maintaining stable blood sugar levels. Enjoyed fresh, dried, or in smoothies. Vitamin A in peaches is crucial for maintaining healthy skin and vision, as well as supporting immune health by helping cells function properly. Additionally, vitamin C in peaches plays a vital role in immunity by encouraging the production of white blood cells that defend the body against infections. It also acts as a powerful antioxidant, protecting cells from damage by free radicals. This vitamin is essential for collagen synthesis, which keeps the skin firm and resilient, promotes faster wound healing, and reduces signs of aging. Peaches are rich in antioxidants, including polyphenols and carotenoids, which play a significant role in reducing oxidative stress in the body. Oxidative stress occurs when there’s an imbalance between free radicals and antioxidants, potentially leading to cellular damage and chronic diseases like heart disease and certain cancers. Antioxidants found in peaches neutralize these free radicals, reducing inflammation and helping prevent long-term health issues.',
    'https://cdn.pixabay.com/photo/2017/07/20/18/40/apricots-2523272_960_720.jpg'
),
(
    'Nutritional Benefits of Pistachios',
    'Pistachios are rich in healthy fats, protein, fiber, and essential vitamins, supporting heart health and muscle function.',
    'Pistachios are not just a delicious snack; they’re a nutritional powerhouse with impressive health benefits that make them worth adding to your daily routine. Did you know that regularly enjoying pistachios may significantly reduce the risk of developing type 2 diabetes? These vibrant green nuts, when paired with high-glycemic foods, can even help stabilize blood sugar levels, making them a smart choice for those keeping an eye on their glucose. For individuals with diabetes, pistachios offer even more. Studies suggest that including pistachios in your diet can improve glycemic control, lower blood pressure, and reduce inflammation – all key factors in managing the condition. Nutritionally, pistachios are a goldmine. Packed with 20.5 grams of protein per 100 grams, they’re a great plant-based protein source. They’re also rich in magnesium (158 mg/100 g) and potassium (1090 mg/100 g), essential nutrients for heart health and energy regulation. What’s more, pistachios are loaded with healthy fats, especially monounsaturated fats (32.7 g/100 g), which are known to support cardiovascular health.',
    'https://images.pexels.com/photos/52521/pistachio-nuts-pistachios-crisps-52521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
),
(
    'Iron Deficiency and Your Energy Levels',
    'Iron plays a crucial role in maintaining energy levels by supporting the production of hemoglobin, the protein in red blood cells that transports oxygen throughout the body.',
    'Iron is a vital mineral that plays a starring role in maintaining your energy levels and overall vitality. As a key component of hemoglobin, iron helps transport oxygen from your lungs to the rest of your body. Without sufficient iron, your cells may not get the oxygen they need, leading to fatigue, weakness, and reduced productivity. One of the most common reasons for low energy levels is iron deficiency, a condition that can affect anyone but is particularly prevalent among women, athletes, and vegetarians. Iron deficiency can result in anemia, leaving you feeling sluggish and drained.',
    'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
),
(
    'Plant-Based Protein Sources for Vegans',
    'Legumes such as lentils, chickpeas, and black beans are fantastic sources of protein and dietary fiber, making them a staple in many vegan diets.',
    'Legumes such as lentils, chickpeas, and black beans are fantastic sources of protein and dietary fiber, making them a staple in many vegan diets. Similarly, tofu, tempeh, and edamame—made from soybeans—are protein-packed options that are versatile enough to fit into a variety of dishes, from stir-fries to salads.',
    'https://images.pexels.com/photos/3737691/pexels-photo-3737691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
);





