# Uschool Server implementation

Uschool is open online course provider

## 1. Used tools for server

- Node Js
- Express Js
- MongoDB

## 2. Server Package used

```json
{
  "bcrypt": "^5.0.1",
  "colors": "^1.4.0",
  "cors": "^2.8.5",
  "dotenv": "^15.0.0",
  "esm": "^3.2.25",
  "express": "^4.17.2",
  "jsonwebtoken": "^8.5.1",
  "mongoose": "^6.1.9",
  "morgan": "^1.10.0",
  "node": "^17.4.0",
  "nodemon": "^2.0.15"
}
```

## 3. Users & Authentication

### 3.1 User Registion

- Accept email , FName, LName and Password from user
- Validate data coming from User,
- If not valid return error to client
- If valid, Check if user exist in database,
- If exist return error to client
- If not exist, Encrypt password,
- Capitalize Fname, Lname
- Save user in database,
- if not save return error to client
- If user saved in databse, send success mesaage and
- Send email message to user to confirm thier email address and then redarict them to login page

⭐

  <!-- ![User Register!](/server/note/images/S1.png "user") -->

### 3.2 Encrypt Password

- Use bcrypt to encrypt password
- Create auth.js file inside util folder and write hash passowrd method

### 3.3 Capitalize user Fname and Lname

- In side User Model
- use pre save middleware and
- Write JavaScript Capitalize code

### 3.4 Login User

1.  User can login with Google auth
    - Google auth implimantion goes here
2.  User can login with Facebook auth
    - Facebook auth implimantion goes here
3.  User can login with email and password

    - Accept email and Password from user
    - Validate data coming from User, If not valid return error to client
    - If valid, Check if user exist in database,
    - If user not exist return error to client
    - If user exist,check password match with hashed password in db, if password not match return error to client
    - If password Match, Sign Json Web Token (JWT) and Return the signed Token in cookie to the client
    - And Send user as json response, excluding hashed password

### 3.4.1 Verify Password

- Use bcrypt to verify password
- Create auth.js file inside util folder and write compare passowrd method
- Match user entered password to hashed password in database

### 3.4.2 Sign JW Token

- In side config file
- Define JWT_SECRET and JWT_EXPIRE
- In side Auth Controllers inside login route
- Use process.env to define secret and expire in jwt sign
- Send token in cookie

```js
{
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // only works on https and production
  });
}
```

### 3.5 Update Password

### 3.6 .Reset Password

### 3.7.Forgot Password
