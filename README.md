# Full Stack: Angular and Java Spring Boot E-Commerce Website

## Overview

This repository contains the code for a E-commerce website built using Angular for the front-end, Spring Boot for the back-end, and MySQL for the database. This project is built by following the: Full Stack Java and Spring Boot course. I worked on this website in order to help me learn more about Full Stack Development. The front end is built in Angular using the TypeScript programming language and it connects to the backend via a REST API. The backend is built using the Spring Boot framework with Java programming language which makes use of JDBC to connect to a MySQL database in order to store and retrieve the nessecary data.

## Features

- [Product listing]: Listing the available products by category and viewing the details of a product.
- [Searching]: Searching for avialable products by a keyword.
- [Pagination]: Listing the products by the current page and page size.
- [Shopping Cart]: Having a shopping cart for all ur wanted products and perforiming CRUD operations on them such as: adding a new product, listing all the wanted products, updating the quantity of a product, removing a product from the cart.
- [Checkout Form]: The ability to checkout with ur shopping cart and after filling the required fields you can checkout and the order is saved.
- [Login/Logout]: Securing the authentication and authorizion of users using Okta.
- [Members-Only Pages]: Having routes that only authenticated people can access
- [Handling Browser Refresh]: Storing the shopping cart to the local/session storage of the web browser so that the cart data is not lost when the browser is refreshed
- [Order History]: Displaying all the orders that a customer has made, securing the API so that only authenticated users can access the order history endpoint.

## Technologies Used

- Angular 16.2.1: Front-end component-based framework for building single-page web applications.
- TypeScript 5.1.6: Programming language that adds static typing with optional type annotations to JavaScript.
- Spring Boot 3.1.2: Back-end framework for creating Java-based web applications.
- Java 17.0.8: Object-oriented programming language that produces software for multiple platforms.
- MySQL 8.0.17: Relational database management system.
- Okta 2.1.6: A cloud-based identity and access management platform that enables secure and convenient user authentication and authorization

## Getting Started

### Prerequisites

- Node.js and npm: Angular requires Node.js, which includes npm (Node Package Manager), to manage packages and dependencies.
- Angular CLI: Install the Angular CLI globally using npm, as it provides the tools necessary to create, build, and run Angular applications.
- Code Editor: You'll need a code editor for viewing or writing code. Popular choices for Angular include Visual Studio Code or WebStorm and for Java Spring Boot you can use IntelliJ.
- Java Development Kit (JDK): Ensure you have a compatible version of the JDK installed on your system. Spring Boot supports JDK 8, 11, and 16 (or later).

### Installation

1. Clone the repository: `git clone https://github.com/NesiCodes/Fullstack-Ecommerce-Web.git`
2. Navigate to db-scripts directory: `cd 01-stater-files/db-scripts`
3. Execute each sql script using MySql Workbench to create the database schema and required tables
4. Navigate to the back-end directory: `cd 02-backend/spring-boot rest api`
5. Open the project in IntelliJ IDE and let maven automatically build and install the required dependecies
6. Navigate to the front-end directory: `cd frontend/angular-ecommerce`
7. Install Angular CLI: `npm install -g @angular/cli`
8. Install front-end dependencies in package.json

## Usage

1. Start the back-end server: Navigate to the root of the project via command line and execute the command `mvn spring-boot:run` or run SpringBootEcommerceApplication class in IntelliJ IDE.
2. Start the front-end development server: Navigate to the root of the project via command line and execute the command `ng serve` or run the application in Webstorm IDE.
3. Access the application in a web browser at `http://localhost:4200`.

### Entity Relationship Diagram

![img9](https://github.com/NesiCodes/Fullstack-Ecommerce-Web/assets/89842810/5c3fc1da-45ce-4ae2-a155-f654f91fca9a)
