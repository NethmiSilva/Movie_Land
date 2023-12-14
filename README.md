
# Movie Search Project using React and Vite

## Overview
This project is a Movie Search application built using React and Vite. The application leverages the OMDB API to fetch information about movies. The code is structured to incorporate key React concepts such as state management using useState and asynchronous operations with the useEffect hook. Additionally, the project showcases the modularization of components by breaking down the Movie Card UI into a separate component.

## Getting Started
To set up the project, the Vite build tool was used. Here are the steps to get started:
Run the command **npm create vite@latest** to scaffold a new Vite project.
Navigate into the project directory using **cd <project-name>** and install dependencies with **npm install**.
Start the development server with **npm run dev**.

## Features

### Default Movies Display
Upon loading the application, it automatically displays a list of movies with the title "Batman." This initial display is implemented using the useEffect hook. The application sends a request to the OMDB API to fetch movies with the specified title (tt3896198) and API key (c3637661).

### Movie Search Functionality
The application allows users to search for movies using a search input field. The search functionality is implemented with the useState hook to manage the search term, and the searchMovies function is called when the user clicks on the search icon.

### Movie Card Component
The code demonstrates the practice of breaking down the UI into reusable components. The MovieCard component is responsible for rendering individual movie cards. This modular approach enhances code readability and maintainability.


## Conclusion
This Movie Search project serves as a practical example of building a React application with Vite, incorporating features like default movie display, search functionality, and modular component design. The code emphasizes the use of React hooks for state management and asynchronous operations, providing a solid foundation for understanding and building more complex React applications.

![one](https://github.com/NethmiSilva/Movie_Land/assets/91644460/7d2be9c5-f2fb-4f98-997b-53069c587021)
![two](https://github.com/NethmiSilva/Movie_Land/assets/91644460/8b878995-a683-4360-afe6-337c4fe7c5c7)

<img src="https://github.com/NethmiSilva/Food-App/assets/91644460/3d65c1a2-d25a-404d-be19-4673caca5f96" width="300" height="500">
