# Movie Box

Movie Box is a simplified single-page React application that allows users to explore popular movies. Users can view a list of popular movies, search for specific titles, and view basic details about each movie.

## Features

- Display popular movies
- Search functionality for movies
- View basic movie details
- Post and view reviews for each movie
- Responsive single-page design

## Technology Stack

- Frontend: React
- Tailwind CSS for Styling
- API: The Movie Database (TMDB) API
- Render for Front End and Back-end deployment

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/movie-box.git
   cd movie-box
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_KEY=<YOUR_API_KEY>
   REACT_APP_API_BASE_URL=https://api.themoviedb.org/3
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
movie-box/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── MovieList.js
│   │   ├── MovieCard.js
│   │   ├── SearchBar.js
│   │   ├── MovieDetails.js
│   │   └── Reviews.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

## API Usage

This project uses The Movie Database (TMDB) API. Here's an example of how to fetch popular movies:

```javascript
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Handle the movie data
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Please note that you should always keep your API key secret and never commit it to version control. The key provided in this README is for demonstration purposes only.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Runs the test suite


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to The Movie Database (TMDB) for providing the movie data