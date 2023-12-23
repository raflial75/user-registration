# User Registration
This is backend service for user registration.  
Features:
1. username, email, and password can't be null.
2. username and email can only registered once.
3. There are requirements for password value:
   - Password at least composed of 8 characters long,
   - Password must contain at least one uppercase and lowercase letter,
   - Password must contain at least one special characters (!, @, #, $, %, ^, _, &, -, *)
4. After user register their data, they need verify throught token that send to the email.
5. The password stored in database are hashed using bycrypt

**Tech Stack**
- Node.js
- MySQL
- Bcrypt
- JSON Web Token
- Nodemailer
- Dotenv  

## Usage
1. Create `.env` file on root folder.
2. Set value for `HOST, USER, PASSWORD, DB_SCHEMA`  
    example:
    ```
    ./root-folder/.env
    
    HOST="The host used" // localhost, public ip, private ip, etc.
    USER="your username"
    PASSWORD="your password"
    DB_SCHEMA="Schema/Database Name"
    ```
3. Run terminal
4. Run command `npm install` and wait untill the installation completed
5. You can test it using node or nodemon
   - node: `npm run start`
   - nodemon: `npm run start-dev`  

**Extra**
MySQL create table command:
```
USE <your database/schema name>;

CREATE TABLE users (
	id INT PRIMARY KEY,
	username VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL UNIQUE,
	is_verified BOOLEAN DEFAULT false
);
```
