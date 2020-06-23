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
7. run the server: `npm run server`. Server port default is 3300.

---------------------------------

## Usage

### Base URL
https://best-med-cabinet.herokuapp.com/

## **Authentication Routes**

### 1. User Registration
#### **POST** */api/auth/register*

Registers a new user account on database.

Request: `req.body`

```
{
  username: "test1",        // String Required
  password: "Test123"!      // String Required
  isInstructor: true        // Boolean Required
}
```
Response: `res.body`
```
{
  "id": 6,
  "username": "test1",
  "isInstructor": true

}
  // password not returned, but is stored encrypted on database.
```

### 2. User Login
#### POST /api/auth/login

Authenticates user's credentials. Returns JSON object with personalized welcome message and token.

Request: `req.body`

```
{
  username: test1,        // String Required
  password: Test123!      // String Required
  isInstructor: true        // Boolean Required
}
```
Response: `res.body`
```
{
    "message": "Welcome TEST1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6IlRFU1QxIiwiaWF0IjoxNTgzMDg1MjQ4LCJleHAiOjE1ODMwODg4NDh9.dSaZfJ9cGPAJYmgoIoZ-hrQPEXQeiMEs4ckOJDEgliw"
}
```

### 1. Default route
#### **GET** */api/classes*

Return an array of objects of **ALL** classes created by **ALL** users.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
[
    {
        "id": 1,            // this is the id# of the class (NOT USER)
        "title": "title1",
        "description": "This is the first description",
        "type": "weightlifting",
        "start": '1/20/20',
        "location": "crossfit room",
        "intensity": "hiit",
        "current_attendees": 2,
        "max_class": 10,
        "user_id": 1
    },
    {
        "id": 2,            // this is the id# of the class (NOT USER)
        "issue": "title2",
        "description": "This is the second description",
        "type": "weightlifting",
        "start": '1/20/20',
        "location": "crossfit room",
        "intensity": "hiit",
        "current_attendees": 3,
        "max_class": 10,
        "user_id": 2
    },
    // ... etc.
]
```

### 2. Access all classes of single user
#### **GET** */api/:id/classes/*

Returns all classes for a single user, via the **user's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
[
  {
      "id": 2,            // this is the id# of the class (NOT USER)
      "issue": "title2",
      "description": "This is the second description",
      "type": "weightlifting",
      "start": '1/20/20',
      "location": "crossfit room",
      "intensity": "hiit",
      "current_attendees": 3,
      "max_class": 10,
      "user_id": 2
  },
]
```

### 3. Access single class
#### **GET** */api/classes/:id*

Returns a single class via the **classes's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
{
    "id": 1,            // this is the id# of the class (NOT USER)
    "title": "title1",
    "description": "This is the first description",
    "type": "weightlifting",
    "start": '1/20/20',
    "location": "crossfit room",
    "intensity": "hiit",
    "current_attendees": 2,
    "max_class": 10,
    "user_id": 1
}
```

### 4. Edit a specific class
#### **PUT** */api/classes/:id*

Updates an existing class via the **classes** `:id` URL param. Users should not be able to edit the classes current_attendees count, based on this operation.

Request: `req.body`

```
{
    "title": "title1",
    "description": "This is the first description",
    "type": "weightlifting",
    "start": '1/20/20',
    "location": "crossfit room",
    "intensity": "hiit",
    "max_class": 10
},
```
Response: `res.body`

Returns JSON object with edited values.

```
{
    "id": 1,            // this is the id# of the class (NOT USER)
    "title": "Newtitle1",
    "description": "This is the first description NEW",
    "type": "weightlifting",
    "start": '1/20/20',
    "location": "crossfit room",
    "intensity": "hiit",
    "current_attendees": 2,
    "max_class": 10,
    "user_id": 1
},
```

### 5. adjust an classes current_attendees
#### **PATCH** */api/classes/:id*

Updates the number of attendees an existing class has via the **classes** `:id` URL param.

Request: `req.body`

```
{
	"current_attendees": 2       // integer value
}
```
Response: `res.body`

Returns JSON object with edited values.

```
{
    "message": "Attendees for Class# 4 Updated Successfully",
    "class": {
        "current_attendees": 2   // new value
    }
}
```

### 6. Add new class
#### **POST** */api/:id/classes/*

User creates a new class. Attendance count defaults to 0. All fields in `res.body` are.

Request: `req.body`

```
{
    "title": "title1",
    "description": "This is the first description",
    "type": "weightlifting",
    "start": '1/20/20',
    "location": "crossfit room",
    "intensity": "hiit",
    "max_class": 10
},
```
Response: `res.body`

Returns JSON object with user entered values, attendees, class id and user_id fields.

```
{
    "id": 1,            // this is the id# of the class (NOT USER)
    "title": "Newtitle1",
    "description": "This is the first description NEW",
    "type": "weightlifting",
    "start": '1/20/20',
    "location": "crossfit room",
    "intensity": "hiit",
    "current_attendees": 2,
    "max_class": 10,
    "user_id": 1
}
```

--------------------------------

## General Routes

### 1. Get Users
#### **GET** */api/auth/users*

Fetches all usernames and id# from database. No authentication required.

Request: `req.body`


```
// N/A
```
Response: `res.body`

Returns an array of JSON objects.

```
[
    {
        "id": 2,
        "username": "Test",
        "isTrainer": true
    },
    {
        "id": 5,
        "username": "TestValue",
        "isTrainer": true
    },
    {
        "id": 4,
        "username": "Bob",
        "isTrainer": true
    },
    {
        "id": 1,
        "username": "SuperTest",
        "isTrainer": true
    },
    {
        "id": 6,
        "username": "TEST1",
        "isTrainer": true
    },
    {
        "id": 3,
        "username": "Testing",
        "isTrainer": true
    }
]
```

--------------------------------
