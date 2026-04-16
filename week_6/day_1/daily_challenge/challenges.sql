CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    is_loggedin BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE REFERENCES customer(id)
);

INSERT INTO customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO customer_profile (is_loggedin, customer_id) VALUES
(TRUE, (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')),
(FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

SELECT c.first_name
FROM customer c
INNER JOIN customer_profile cp
ON c.id = cp.customer_id
WHERE cp.is_loggedin = TRUE;

SELECT c.first_name, c.last_name, cp.is_loggedin
FROM customer c
LEFT JOIN customer_profile cp
ON c.id = cp.customer_id;

SELECT COUNT(*)
FROM customer c
LEFT JOIN customer_profile cp
ON c.id = cp.customer_id
WHERE COALESCE(cp.is_loggedin, FALSE) = FALSE;


CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL
);

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

CREATE TABLE library (
    book_fk_id INTEGER REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'John'), '2022-02-15'),
((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM student WHERE name = 'Bob'), '2021-03-03'),
((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'Lera'), '2021-05-23'),
((SELECT book_id FROM book WHERE title = 'Harry Potter'), (SELECT student_id FROM student WHERE name = 'Bob'), '2021-08-12');

SELECT * FROM library;

SELECT s.name, b.title
FROM library l
JOIN student s
ON l.student_fk_id = s.student_id
JOIN book b
ON l.book_fk_id = b.book_id;

SELECT AVG(s.age)
FROM library l
JOIN student s
ON l.student_fk_id = s.student_id
JOIN book b
ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM student
WHERE name = 'Bob';

SELECT * FROM library;