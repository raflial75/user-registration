# User Registration
This is backend service for user registration.  

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
