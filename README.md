# MusicStoreAppFrontend

### A full-stack Online Shop web application using Spring Boot and Angular 13. 
This is a Single Page Appliaction with client-side rendering. It includes [backend](https://github.com/ysfzkn/musicStoreAppBackend) and [frontend](https://github.com/ysfzkn/musicStoreAppFrontend) two seperate projects on two repository.
The frontend client makes API calls to the backend server.

#### Live API Demo: [https://music-store-spring-boot.herokuapp.com/](https://music-store-spring-boot.herokuapp.com/)
#### Live App Demo: [https://music-store-spring-boot.herokuapp.com/](https://music-store-app-frontend.herokuapp.com/)


## Screenshot
![](https://user-images.githubusercontent.com/58569590/174541564-7254c3c7-ee9f-46e9-92ca-0a530c262e61.png)

## Features
- REST API
- Heroku Deployment
- JWT authentication
- Cookie based visitors' shopping cart
- Admin Panel
- Cart & order management
- Checkout
- Catalogue
- Pagination

## Technologies used
**Backend**
  - Java 17
  - Spring Boot
  - Spring Security
  - JWT Authentication
  - Spring Data JPA
  - Hibernate
  - PostgreSQL
  - Maven

**Frontend**
  - Angular 13
  - Angular CLI
  - Bootstrap
  - Node 16
  - NPM 8

## How to  Run

- Start the backend server before the frontend client.  

**Backend Side**

  1. Install [PostgreSQL](https://www.postgresql.org/download/) 
  2. Configure datasource in `application.yml`.
  3. `cd backend`.
  4. Run `mvn install`.
  5. Run `mvn spring-boot:run`.
  6. Spring Boot will import mock data into database when you run by hiberante automatically.
  7. The backend server is running on [localhost:8080]().

**Frontend Side**
  1. Install [Node.js and npm](https://www.npmjs.com/get-npm)
  2. `cd frontend`.
  3. Run `npm install`.
  4. Run `ng serve`
  5. The frontend client is running on [localhost:4200]().
  
Note: The backend API url is configured in `src/environments/environment.ts` of the frontend project. It is `localhost:8080/` by default.
