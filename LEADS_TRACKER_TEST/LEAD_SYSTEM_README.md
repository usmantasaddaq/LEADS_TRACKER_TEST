# Minimalist Sales Lead Tracking System

## Backend Architecture

Backend is built using Nodejs, Express for server. 

### Database
Postgres with prisma is used for DB. Prisma client is used for API calls. To store data Railway is used. In order to test create a .env in root and add this variable after adding username password.
   DATABASE_URL = "postgresql://johndoe:mypassword@localhost:5432/mydb?schema=public"

### To run
npm run dev

## Frontend Architecture

Frontend is simple created with react, typescript and tailwindcss.
It fetches the leads, updates and deletes. There are different colored buttons to indicate different statuses.

### To run
npm run start


