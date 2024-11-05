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

1.  git clone https://github.com/ahmedhesein1/Notes-App.gitcd Notes-App
    
2.  cd backendnpm installcd ../frontendnpm install
    
3.  PORT = 1001LOCAL\_DB = mongodb://localhost:27017/Notes-AppJWT\_SECRET = My\_ultra\_long\_secret\_Key
    
4.  cd backendnpm run dev
    
5.  cd ../frontendnpm start
    

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
        

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Notes-App/  ├── backend/                # Backend code  │   ├── controllers/        # Route handlers  │   ├── models/             # Database models (User, Note)  │   ├── routes/             # API routes  │   ├── utils/              # Utility functions  │   └── index.js           # Entry point for the backend server  │  ├── frontend/               # Frontend code  │   ├── src/  │   │   ├── components/     # Reusable components  │   │   ├── pages/          # Page components (e.g., login, signup, notes)  │   │   └── App.js          # Entry point for the frontend app  │  └── README.md               # Project documentation   `

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