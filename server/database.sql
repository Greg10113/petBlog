-- CREATE TABLE pets(
--     pet_id SERIAL PRIMARY KEY,
--     pet VARCHAR(50),
--     description VARCHAR(500)
-- );
-- INSERT INTO
--     pets (pet, description)
-- VALUES
--     (
--         'Blue Tongue Skink',
--         'The blue tongue skink, native to Australia, is known for its distinctive blue tongue used for defense. It is a medium-sized lizard with a robust body, smooth scales, and coloration varying from brown to gray. This omnivorous lizard eats insects, fruits, and plants and gives birth to live young. It is popular in the pet trade for its docile nature and unique appearance.'
--     );
-- CREATE TABLE images(
--     img_id SERIAL PRIMARY KEY,
--     pet_id INT REFERENCES pets(pet_id),
--     image TEXT
-- );
-- TRUNCATE pets RESTART IDENTITY CASCADE;
-- ALTER TABLE
--     images drop constraint images_pet_id_fkey,
-- ADD
--     CONSTRAINT images_pet_id_fkey FOREIGN KEY (pet_id) REFERENCES pets(pet_id) ON DELETE CASCADE;
-- Delete from pets                                                            ;
-- ALTER TABLE
--     pets
-- ADD
--     CONSTRAINT unique_pets UNIQUE (pet);
-- ALTER TABLE
--     pets
-- ADD
--     CONSTRAINT unique_description UNIQUE (description);
-- ALTER TABLE
--     images
-- ADD
--     CONSTRAINT unique_image UNIQUE (image);
ALTER TABLE
    pets
ADD
    created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'UTC');