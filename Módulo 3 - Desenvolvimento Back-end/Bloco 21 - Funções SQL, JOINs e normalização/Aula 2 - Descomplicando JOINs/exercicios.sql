
Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT M.title AS Titulo, B.domestic_sales AS 'Vendas Nacionais', B.international_sales AS 'Vendas Internacionais'
FROM Pixar.Movies as M
INNER JOIN Pixar.BoxOffice as B
ON M.id = B.movie_id; 

🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT M.title AS Titulo, (B.domestic_sales + B.international_sales) AS Vendas
FROM Pixar.Movies as M
INNER JOIN Pixar.BoxOffice as B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT M.title AS Titulo, B.rating AS Avaliação
FROM Pixar.Movies as M
INNER JOIN Pixar.BoxOffice as B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

