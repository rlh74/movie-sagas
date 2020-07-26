# MOVIE SAGAS

## Description

_Duration: 20 Hours_

Movie-Sagas is a project that allows the user to learn about blockbuster movie details as well as edit and update this data. The challenge of this project was accessing database tables with many-to-many relations using Redux and Sagas. One triumph through this challenge was learning how to insert data into a table and return the generated ID for a sequential insert to a different table. This allowed me to add entries to a category (genres in this project) table and create an entry in the junction table that connects it to the name (movies in this project) table. 

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- Postgres or other database software

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Browse the home page to select a movie
2. Selecting a movie will bring you to a Details page that shows the description and genres for just the selected film.
3. Click on Edit to edit the details and/or add a new genre to one of the films
4. Click Cancel to return to Details page, or input text in to the text areas and click Save to submit new data.
5. Clicking Save navigates back to the details page where the user can click the Back to List button to return to the movie selection.
6. The new movie description will render when you return to the details page, however, you will have to select the film again from the home page to see the new genre entry.


## Built With

React, Redux, Sagas, & CSS

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
