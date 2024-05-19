
# Education Center Project

Welcome to the Education Center Project repository! This project aims to build an education center platform using Next.js for frontend development, PostgreSQL for the database, and Supabase for authentication and storage services.

## Table of Contents

-   Introduction
-   Technologies Used
-   Setup
-   Usage
-   Contributing
-   License

## Introduction

The Education Center Project is a web application designed to provide a centralized platform for educational resources, courses, and community engagement. Built using Next.js, it offers a modern and efficient user interface. PostgreSQL is used as the primary database to store and manage data related to courses, users, and other application entities. Supabase services are utilized for authentication, user management, and file storage, ensuring a secure and scalable backend infrastructure.

## Technologies Used

-   **Next.js**: Next.js is a React framework for building server-side rendered and statically generated applications.
-   **PostgreSQL**: PostgreSQL is a powerful, open-source relational database management system.
-   **Supabase**: Supabase is an open-source Firebase alternative. It provides authentication, real-time database, and file storage services.

## Setup

To set up the project locally, follow these steps:

1.  **Clone the repository**:
    
    bash
    
    Copy code
    
    `git clone https://github.com/akashaf/edu-elavate.git` 
    
2.  **Install dependencies**:
    
    bash
    
    Copy code
    
    `cd edu-elavate
    pnpm install` 
    
3.  **Set up environment variables**: Create a `.env` file in the root directory and define the following environment variables:
    
    makefile
    
    Copy code
    
    `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key` 
    
4.  **Run the application**:
    
    bash
    
    Copy code
    
    `pnpm run dev` 
    
    The application should now be running on `http://localhost:3000`.

## Usage

Once the application is set up and running, you can:

-   Browse available courses and educational resources.
-   log in to access additional features.
-   Contribute by creating new courses or uploading educational content.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1.  Fork the repository and create a new branch.
2.  Make your changes and ensure the codebase adheres to the project's coding standards.
3.  Test your changes thoroughly.
4.  Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License.