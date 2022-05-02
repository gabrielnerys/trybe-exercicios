SELECT 220 DIV 12;

SELECT 220 MOD 12;

SELECT IF(220 MOD 12 = 0, 'Não tem lugares', CONCAT('Temos ', 220 MOD 12, ' lugares disponíveis'));

SELECT ROUND(15 + (RAND()*5));

SELECT ROUND(15.7515971, 5);

SELECT FLOOR(39.494);

SELECT CONCAT(CEIL(85.234),'%');

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

SELECT TIMEDIFF('11:25:45', '11:00:00');

SELECT * FROM sakila.film;

SELECT AVG(length) AS 'Média de duração',
MIN(length) AS 'Duração minima',
MAX(length) AS 'Duração máxima',
SUM(length) AS 'Tempo de exibição total',
COUNT(title) AS 'Filmes Registrados' FROM sakila.film;

DELETE FROM sakila.actor
WHERE first_name = 'jon';

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP BY rating;

SELECT rating, AVG(length) AS Average
FROM sakila.film
GROUP BY rating
HAVING Average BETWEEN 115.0 AND 121.50;

SELECT rating, SUM(replacement_cost) AS Total
FROM sakila.film
GROUP by rating
HAVING Total > 3950.5
ORDER BY rating ASC;
