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

- `token`: String (JWT token)
- `user`: Object
  - `_id`: String
  - `fullname`: Object
    - `firstname`: String
    - `lastname`: String
  - `email`: String
  - `socketId`: String or null

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

- `token`: String (JWT token)
- `user`: Object
  - `_id`: String
  - `fullname`: Object
    - `firstname`: String
    - `lastname`: String
  - `email`: String
  - `socketId`: String or null

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

- `_id`: String
- `fullname`: Object
  - `firstname`: String
  - `lastname`: String
- `email`: String
- `socketId`: String or null

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

- `message`: String

```json
{
  "message": "Logged out"
}
```

---

# Captain Registration Endpoint

## POST `/captains/register`

Registers a new captain with vehicle details.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "red",
    "plate": "MP 04 XY 6204",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.
- `vehicle.color` (string, required): Minimum 3 characters.
- `vehicle.plate` (string, required): Minimum 3 characters.
- `vehicle.capacity` (integer, required): At least 1.
- `vehicle.vehicleType` (string, required): One of `"car"`, `"motorcycle"`, `"auto"`, `"electricAuto"`.

### Responses

- **201 Created**

  - Captain registered successfully.
  - Returns: `{ "token": "<jwt_token>", "captain": { ...captainData } }`

- **400 Bad Request**

  - Validation failed or missing required fields.
  - Returns: `{ "errors": [ ... ] }`

- **500 Internal Server Error**
  - Unexpected server error.

### Example Request

```bash
curl -X POST http://localhost:PORT/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "securepassword",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    }
  }'
```

### Example Response

- `token`: String (JWT token)
- `captain`: Object
  - `_id`: String
  - `fullname`: Object
    - `firstname`: String
    - `lastname`: String
  - `email`: String
  - `status`: String
  - `vehicle`: Object
    - `color`: String
    - `plate`: String
    - `capacity`: Number
    - `vehicleType`: String

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "689c561dc0172280361d6e39",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
```

---

# Captain Login Endpoint

## POST `/captains/login`

Authenticates a captain and returns a JWT token.

### Request Body

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

  - Captain authenticated successfully.
  - Returns: `{ "token": "<jwt_token>", "captain": { ...captainData } }`

- **400 Bad Request**

  - Validation failed or missing required fields.
  - Returns: `{ "errors": [ ... ] }`

- **401 Unauthorized**

  - Invalid email or password.
  - Returns: `{ "message": "Invalid email or password" }`

- **500 Internal Server Error**
  - Unexpected server error.

### Example Request

```bash
curl -X POST http://localhost:PORT/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "securepassword"
  }'
```

### Example Response

- `token`: String (JWT token)
- `captain`: Object
  - `_id`: String
  - `fullname`: Object
    - `firstname`: String
    - `lastname`: String
  - `email`: String
  - `status`: String
  - `vehicle`: Object
    - `color`: String
    - `plate`: String
    - `capacity`: Number
    - `vehicleType`: String

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "689c561dc0172280361d6e39",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
```

---

# Get Captain Profile Endpoint

## GET `/captains/profile`

Returns the authenticated captain's profile information.

### Authentication

Requires a valid JWT token in the `Authorization` header or as a cookie.

### Responses

- **200 OK**

  - Returns: `{ "captain": { ...captainData } }`

- **401 Unauthorized**
  - Missing or invalid token.

### Example Request

```bash
curl -X GET http://localhost:PORT/captains/profile \
  -H "Authorization: Bearer <jwt_token>"
```

### Example Response

- `captain`: Object
  - `_id`: String
  - `fullname`: Object
    - `firstname`: String
    - `lastname`: String
  - `email`: String
  - `status`: String
  - `vehicle`: Object
    - `color`: String
    - `plate`: String
    - `capacity`: Number
    - `vehicleType`: String

```json
{
  "captain": {
    "_id": "689c561dc0172280361d6e39",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
```

---

# Captain Logout Endpoint

## GET `/captains/logout`

Logs out the authenticated captain by blacklisting their JWT token and clearing the cookie.

### Authentication

Requires a valid JWT token in the `Authorization` header or as a cookie.

### Responses

- **200 OK**

  - Returns: `{ "message": "Logout succesfully" }`

- **401 Unauthorized**
  - Missing or invalid token.

### Example Request

```bash
curl -X GET http://localhost:PORT/captains/logout \
  -H "Authorization: Bearer <jwt_token>"
```

### Example Response

- `message`: String

```json
{
  "message": "Logout succesfully"
}
```

---
