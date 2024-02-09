SELECT product_name, SUM(unit) AS unit
FROM Products
INNER JOIN Orders ON Products.product_id = Orders.product_id
WHERE Orders.order_date BETWEEN '2020-02-01' AND '2020-02-29'   
GROUP BY Products.product_name having unit>=100
ORDER BY unit DESC

;

