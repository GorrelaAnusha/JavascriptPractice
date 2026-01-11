use rev;
show tables;
CREATE TABLE emp (
emp_id INT PRIMARY KEY,
emp_name VARCHAR(50),
dept_id INT,
salary INT,
join_date DATE,
manager_id INT
);

INSERT INTO emp VALUES
(101,'Alice',2,60000,'2020-01-10',NULL),
(102,'Bob',2,50000,'2021-03-15',101),
(103,'Charlie',1,45000,'2019-07-20',NULL),
(104,'David',3,70000,'2018-11-05',NULL),
(105,'Eva',2,55000,'2022-06-01',101);

CREATE TABLE departments (
dept_id INT PRIMARY KEY,
dept_name VARCHAR(50)
);

INSERT INTO departments VALUES
(1,'HR'),(2,'IT'),(3,'Finance');


CREATE TABLE orders (
order_id INT PRIMARY KEY,
emp_id INT,
order_date DATE,
amount INT
);

INSERT INTO orders VALUES
(1,101,'2024-01-10',10000),
(2,102,'2024-01-15',15000),
(3,101,'2024-02-01',20000),
(4,105,'2024-02-10',12000);

-- Basic
#1. Display all employees
Select * from emp;

#2. Display employee names and salaries
select emp_name , salary from emp;

#3. Find employees from IT department
select * from emp where dept_id=2;

#4 Employees with salary > 50000
select * from emp where salary > 50000;

#5 Find distinct department IDs
select distinct dept_id from departments ;

#6 Employees ordered by salary
select * from emp order by salary ;

#7 Top 3 highest paid employees
select * from emp order by salary desc limit 3;

#8 Employees joined after 2020
select * from emp where  join_date > '2020-12-31';

#9 count number of employees
select count(*) as numofemp from emp;

#10  Average salary
select avg(salary) as avgsalary from emp;

#11 Min Salary
select min(salary) as minsalary from emp;

#12 Max Salary
select max(salary) as maxsalary from emp;

#13 Employees with saalary between 50000 and 70000
select salary from emp where salary between  50000 and 70000;
Select salary from emp where salary>=50000 and salary<=70000;

#14 Employees  whose name starts with 'A'
select emp_name from emp where emp_name like 'A%';

#15 Employees Not in HR department
select * from emp where dept_id != 1;

###Aggregate & groupBy
#16 Total salary per department
select dept_id, sum(salary) from emp group by  dept_id;

#17 Avearage salary per department
select dept_id ,avg(salary) from emp group by dept_id;

#18 Number of employees per department
select dept_id,  count(*) from emp group by dept_id;

#19  Departments having more than 1 employee
select dept_id  from emp group by dept_id having count(*)>1;##when we use condition in aggrgate we use have

#20  Highest salary per department
select max(salary) from emp  group by  dept_id;

#21 Total order amount per employee
select sum(amount) as total , emp_id from orders group by emp_id;

#22  Employees with total orders>20000
select sum(amount) from orders group by emp_id having sum(amount)>20000;

#23 orders count per employee
select count(*) , emp_id from orders group by emp_id;

#24 monthly order total
select month(order_date) ,sum(amount) from orders group by month(order_date);
select year(order_date), sum(amount) from orders group by year(order_date);
select date(order_date), sum(amount) from orders group by date(order_date);


#25 Departments  with avg>50000
select avg(salary) from emp group by dept_id having avg(salary)>50000;

####joins 
#26 Employees with department name
select e.emp_name,d.dept_name, e.emp_id, d.dept_id 
 from emp e inner join departments d
 on  d.dept_id= e.dept_id;
 
 #27 Employees and their orders
 select e.emp_name, o.amount 
 from emp e join orders o 
 on e.emp_id =o.emp_id;
 
 #28 employee without orders
 select * from emp where emp_id not in (select emp_id from orders);
 
 #29 total order amount per employee name
 select e.emp_name, sum(o.amount)
 from emp e join orders o
 on e.emp_id=o.emp_id
 group by e.emp_name;
 
 #30 Employees with their managers
 select e.emp_name ,m.emp_name as manager
 from emp e left join emp m
 on e.manager_id=m.emp_id;
 
 
 #31 Employees in Finance
SELECT e.*
FROM emp e JOIN departments d 
ON e.dept_id = d.dept_id
WHERE d.dept_name = 'Finance';

#32 Department-wise employee count
SELECT d.dept_name, COUNT(e.emp_id)
FROM departments d LEFT JOIN emp e 
ON d.dept_id = e.dept_id
GROUP BY d.dept_name;

#33 Employees with order amount > 15000
SELECT DISTINCT e.emp_name
FROM emp e JOIN orders o 
ON e.emp_id = o.emp_id
WHERE o.amount > 15000;

#34 Employee name, salary, department
SELECT e.emp_name, e.salary, d.dept_name
FROM emp e JOIN departments d 
ON e.dept_id = d.dept_id;

#35 Highest paid employee per department
SELECT *
FROM emp e
WHERE salary = (
    SELECT MAX(salary)
    FROM emp
    WHERE dept_id = e.dept_id
);


##### SUBQUERIES & ADVANCED 
#36  Salary > average
SELECT * FROM emp
WHERE salary > (SELECT AVG(salary) FROM emp);

#37 Same department as Alice
SELECT *
FROM emp
WHERE dept_id = (
    SELECT dept_id FROM emp WHERE emp_name = 'Alice'
);

#38  Second highest salary
SELECT MAX(salary)
FROM emp
WHERE salary < (SELECT MAX(salary) FROM emp);

#39 Employees who placed orders
SELECT * FROM emp
WHERE emp_id IN (SELECT emp_id FROM orders);

#40 Employees without orders
SELECT * FROM emp
WHERE emp_id NOT IN (SELECT emp_id FROM orders);

#41 Correlated – highest salary per department
SELECT *
FROM emp e
WHERE salary = (
    SELECT MAX(salary)
    FROM emp
    WHERE dept_id = e.dept_id
);

#42 Delete employees without orders
DELETE FROM emp
WHERE emp_id NOT IN (SELECT emp_id FROM orders);

#43 Update IT salary by 10%
UPDATE emp
SET salary = salary * 0.1
WHERE dept_id = (
    SELECT dept_id FROM departments WHERE dept_name = 'IT'
);


#44 Create view
CREATE VIEW emp_details AS
SELECT e.emp_name, e.salary, d.dept_name
FROM emp e
JOIN departments d ON e.dept_id = d.dept_id;

##45 CASE salary grade
SELECT emp_name,
CASE
    WHEN salary >= 60000 THEN 'High'
    WHEN salary >= 50000 THEN 'Medium'
    ELSE 'Low'
END as Grade
FROM emp;

#46 Duplicate department employees
SELECT dept_id
FROM emp
GROUP BY dept_id
HAVING COUNT(*) > 1;

#47 Rank employees by salary
SELECT emp_name, salary,
RANK() OVER (ORDER BY salary DESC) AS rank_salary
FROM emp;

#48 Joined in last 2 years
SELECT * FROM emp
WHERE join_date >= DATE_SUB(CURDATE(), INTERVAL 2 YEAR);  -- it will provide currentdate from

SELECT * FROM emp
WHERE join_date >= DATE_SUB('2022-06-01', INTERVAL 2 YEAR);

#49 Total revenue
SELECT SUM(amount) FROM orders;

#50 Employee with max total order amount
SELECT emp_id
FROM orders
GROUP BY emp_id
ORDER BY SUM(amount) DESC
LIMIT 1;


