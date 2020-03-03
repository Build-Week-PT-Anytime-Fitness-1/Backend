# Backend

## **Local Server Installation**
For developing and testing purposes, please follow the instructions below to install a version to your local machine.

Installing
1. donwload/clone backend repo
2. navigate to cloned repo
3. install dependencies on your console: `npm i`
4. isntall knex globally: `npm i -g knex`
5. construct a copy of the data base in console: `knex migrate:latest`
6. populate database with dummy/seeded data: `knex seed:run`
7. run the server: `npm run server`. Server port default is 5000.

---------------------------------

## **Authentication Routes**

### 1. User Registration
#### **POST** */api/auth/register*

Registers a new user account on database.

Request: `req.body`

```
{
  username: "test1",        // String Required
  password: "Test123"!      // String Required
}
```
Response: `res.body`
```
{
  "id": 6,
  "username": "test1"      
}
  // password not returned, but is stored encrypted on database.
```

### 2. User Login
#### POST /api/auth/login

Authenticates user's credentials. Returns JSON object with personalized welcome message and token.

Request: `req.body`

```
{
  username: test1,        // String Requried
  password: Test123!      // String Requried
}
```
Response: `res.body`
```
{
    "message": "Welcome TEST1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6IlRFU1QxIiwiaWF0IjoxNTgzMDg1MjQ4LCJleHAiOjE1ODMwODg4NDh9.dSaZfJ9cGPAJYmgoIoZ-hrQPEXQeiMEs4ckOJDEgliw"
}
```

--------------------------------
## **General Routes**

### 1. Default route
#### **GET** */api/users*

Get all users

#### **GET** */api/users/:id*

Get user by id

#### **POST** */api/users/:id/post*

Post class by instructor

#### **PUT** */api/users/:instructor_id/post/:id*

Put changes to existing class by instructor

#### **DELETE** */api/users/:instructor_id/post/:id*

Delete class by instructor

--------------------------------
## **CRUD /api**

#### **GET** */api/classes*

Get all available classes

#### **GET** */api/classes/:type*

Get class list by type 
