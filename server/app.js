const express = require('express');
const cors = require('cors');
const fs = require('fs');
const pool = require('./db');
const app = express();
const seedData = require('./seed.json');

const seed = seedData.allPets.pets;

app.use(cors());
app.use(express.json());

app.post(`/blog`, async (req, res) => {
  try {
    const { pet, description, image } = req.body;
    newPet = await pool.query(
      'INSERT INTO pets (pet,description) VALUES ($1, $2) RETURNING *',
      [pet, description]
    );
    newImg = await pool.query(
      'INSERT INTO images (image,pet_id) VALUES ($1,$2) RETURNING *',
      [image, newPet.rows[0].pet_id]
    );
    res.json({ pet: newPet.rows[0], image: newImg.rows[0] });
  } catch (err) {
    console.error(err.message);
  }
});

app.get(`/blog`, async (req, res) => {
  try {
    const allPets = await pool.query(
      'SELECT * FROM pets LEFT JOIN images ON images.img_id = pets.pet_id ORDER BY pets.pet_id'
    );
    res.json(allPets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get(`/blog/latest`, async (req, res) => {
  try {
    const allPets = await pool.query(
      'SELECT * FROM pets LEFT JOIN images ON images.img_id = pets.pet_id ORDER BY pets.created_at DESC LIMIT 4'
    );
    res.json(allPets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get(`/blog/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await pool.query(
      `SELECT * FROM pets 
      LEFT JOIN images ON images.img_id = pets.pet_id 
    WHERE pets.pet_id = $1`,
      [id]
    );
    res.json(pet.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put(`/blog/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { pet, description, image } = req.body;

    const updatePet = await pool.query(
      `WITH pet_id AS (
           UPDATE pets
           SET pet = $1, description = $2
           WHERE pet_id = $3
           RETURNING pet_id
         )
         UPDATE images
         SET image = $4
         WHERE pet_id = (SELECT pet_id FROM pet_id)`,
      [pet, description, id, image]
    );

    res.json('Pets table was updated');
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the pet.' });
  }
});

app.delete(`/blog/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const deletePet = await pool.query('DELETE FROM pets WHERE pet_id = $1', [
      id,
    ]);
    res.json('pet was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

const port = 9000;
app.listen(port, () => {
  console.log(`Connected to ${port}`);
});

// console.log(seed);

// const populate = () => {
//   seed.map((p) => {
//     pool.query(
//       `WITH pet_id AS (
//                INSERT INTO pets (pet, description)
//                     VALUES ($1, $2)
//                        RETURNING pet_id
//                      )
//                      INSERT INTO images (image, pet_id)
//                      VALUES ($3, (SELECT pet_id FROM pet_id))
//                      `,
//       [p.pet, p.description, p.image],
//       (error, results) => {
//         if (error) {
//           console.error(error);
//         } else {
//           console.log('Data inserted successfully.');
//         }
//       }
//     );
//   });
// };

const populate = async () => {
  for (const p of seed) {
    try {
      const result = await pool.query(
        `WITH pet_id AS (
             INSERT INTO pets (pet, description)
             VALUES ($1, $2)
             RETURNING pet_id
           )
           INSERT INTO images (image, pet_id)
           VALUES ($3, (SELECT pet_id FROM pet_id))`,
        [p.pet, p.description, p.image]
      );
      console.log('Data inserted successfully.');
    } catch (error) {
      console.error(error);
    }
  }
};

// populate();
