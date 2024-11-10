Notes-App
=========

A full-stack notes application built using the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to sign up, log in, and create, update, delete, and view their notes. Users can also pin important notes for quick access.

Features
--------

*   **User Authentication**: Users can sign up and log in to the application.
    
*   **Create Notes**: Signed-in users can create new notes.
    
*   **Edit and Delete Notes**: Users can update or delete their existing notes.
    
*   **View Notes**: Users can view all of their notes or a single note in detail.
    
*   **Pin Notes**: Mark important notes as "pinned" for easy access.
    

Tech Stack
----------

*   **Frontend**: React.js with Tailwind CSS for styling.
    
*   **Backend**: Node.js with Express.js.
    
*   **Database**: MongoDB for storing user data and notes.
    
*   **Authentication**: JSON Web Tokens (JWT) for secure user authentication.
    

Installation
------------

1.  git clone https://github.com/ahmedhesein1/Notes-App.git
2.  cd Notes-App
    
3.  cd backend
4.  npm install
5.  cd ../frontend
6.  npm install
    
7.  PORT = 1001
8.  LOCAL\_DB = mongodb://localhost:27017/Notes-App
9.  JWT\_SECRET = My\_ultra\_long\_secret\_Key
    
10.  cd backend
11.  npm run dev
    
12.  cd ../frontend
13.  npm start
    

API Endpoints
-------------

*   **Auth Routes**:
    
    *   POST /api/auth/signup: Register a new user.
        
    *   POST /api/auth/login: Log in an existing user.
        
*   **Notes Routes**:
    
    *   POST /api/notes: Create a new note.
        
    *   GET /api/notes: Get all notes for the logged-in user.
        
    *   GET /api/notes/:id: Get a single note by ID.
        
    *   PATCH /api/notes/:id: Update an existing note by ID.
        
    *   DELETE /api/notes/:id: Delete a note by ID.
        
    *   PATCH /api/notes/:id/pin: Pin a note for quick access.
        


Usage
-----

1.  **Sign Up**: Register a new account on the signup page.
    
2.  **Log In**: Log in with your credentials to access the notes dashboard.
    
3.  **Create Notes**: Add new notes from the dashboard.
    
4.  **Edit and Delete**: Update or remove your notes.
    
5.  **Pin Notes**: Mark important notes as pinned for quick access.
    

License
-------

This project is licensed under the MIT License.
