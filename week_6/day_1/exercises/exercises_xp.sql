//------------ex1-----------------
SELECT name
FROM language;

SELECT f.title, f.description, l.name
FROM film f
JOIN language l
ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name
FROM language l
LEFT JOIN film f
ON f.language_id = l.language_id;


CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO new_film (name) VALUES
('Shadow Run'),
('Last Horizon'),
('Silent Code');


CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title TEXT,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
((SELECT id FROM new_film WHERE name = 'Shadow Run'), (SELECT language_id FROM language WHERE name = 'English'), 'Great movie', 8, 'Really good'),
((SELECT id FROM new_film WHERE name = 'Last Horizon'), (SELECT language_id FROM language WHERE name = 'French'), 'Nice film', 7, 'Worth watching');

DELETE FROM new_film
WHERE name = 'Shadow Run';

SELECT * FROM customer_review;

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title = 'ACADEMY DINOSAUR';

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'German')
WHERE title = 'ACE GOLDFINGER';

DROP TABLE customer_review;

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT DISTINCT f.title, f.rental_rate
FROM film f
JOIN inventory i
ON f.film_id = i.film_id
JOIN rental r
ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC, f.title
LIMIT 30;

SELECT DISTINCT f.title
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo wrestler%'
AND a.first_name = 'PENELOPE'
AND a.last_name = 'MONROE';