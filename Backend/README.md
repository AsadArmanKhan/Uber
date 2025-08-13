# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

- **201 Created**

  - User registered successfully.
  - Returns: `{ "token": "<jwt_token>", "user": { ...userData } }`

- **400 Bad Request**

  - Validation failed or missing required fields.
  - Returns: `{ "errors": [ ... ] }`

- **500 Internal Server Error**
  - Unexpected server error.

### Example Request

The request body should be in JSON format and include the following fields:

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "password": "securepassword"
  }'
```

### Example Response

-`user`(object): -`fullname`(object). -`firstname`(string):User's first name must be (minimum 3 characters long). -`lastname`(string):User's last name must be (minimum 3 characters long). -`email`(string):User's email address (must be a valid email). -`password`(string):User's password must be (minimum 6 characters long). -`token`(string): JWT Token

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65f1c2e4e4b0a2b1c8d7e9f0",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "socketId": null
  }
}
```

---

# User Login Endpoint

## POST `/users/login`

Authenticates a user and returns a JWT token.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

- **200 OK**

  - User authenticated successfully.
  - Returns: `{ "token": "<jwt_token>", "user": { ...userData } }`

- **400 Bad Request**

  - Validation failed or missing required fields.
  - Returns: `{ "errors": [ ... ] }`

- **401 Unauthorized**

  - Invalid email or password.
  - Returns: `{ "message": "Invalid Email and Password" }`

- **500 Internal Server Error**
  - Unexpected server error.

### Example Request

```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.smith@example.com",
    "password": "securepassword"
  }'
```

### Example Response

-`user`(object): -`fullname`(object). -`firstname`(string):User's first name must be (minimum 3 characters long). -`lastname`(string):User's last name must be (minimum 3 characters long). -`email`(string):User's email address (must be a valid email). -`password`(string):User's password must be (minimum 6 characters long). -`token`(string): JWT Token

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65f1c2e4e4b0a2b1c8d7e9f0",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "socketId": null
  }
}
```

---

# Get User Profile Endpoint

## GET `/users/profile`

Returns the authenticated user's profile information.

### Authentication

Requires a valid JWT token in the `Authorization` header or as a cookie.

### Responses

- **200 OK**

  - Returns: User profile object.

- **401 Unauthorized**
  - Missing or invalid token.

### Example Request

```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

### Example Response

```json
{
  "_id": "65f1c2e4e4b0a2b1c8d7e9f0",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "socketId": null
}
```

---

# User Logout Endpoint

## GET `/users/logout`

### Description

Logs out the authenticated user by blacklisting their JWT token and clearing the cookie.

### Authentication

Requires a valid JWT token in the `Authorization` header or as a cookie.

### Responses

- **200 OK**

  - Returns: `{ "message": "Logged out" }`

- **401 Unauthorized**
  - Missing or invalid token.

### Example Request

```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

### Example Response

```json
{
  "message": "Logged out"
}
```

---
