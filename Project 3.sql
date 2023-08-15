DROP TABLE IF EXISTS sucide_rate;

CREATE TABLE sucide_rate(
	country VARCHAR(50),
	year INT,
	sex VARCHAR(10),
	age VARCHAR(50), 
	sucides_no INT,
	population INT,
	sucides_100k_pop FLOAT,
	country_year VARCHAR(50),
	HDI_for_year FLOAT,
	gdp_for_year VARCHAR(50),
	gdp_per_capita FLOAT,
	generation VARCHAR(50)
	
);

SELECT *
FROM sucide_rate;

ALTER TABLE sucide_rate
	DROP COLUMN sucides_no,
	DROP COLUMN population,
	DROP COLUMN country_year,
	DROP COLUMN HDI_for_year,
	DROP COLUMN gdp_for_year,
	DROP COLUMN generation;

SELECT *
FROM sucide_rate;
	
SELECT country
FROM sucide_rate
GROUP BY country;

SELECT *
FROM sucide_rate;


SELECT year, COUNT(DISTINCT country) AS num_countries
FROM sucide_rate
GROUP BY year
ORDER BY year;

SELECT *
FROM sucide_rate;

