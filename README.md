https://114-vaibhav.github.io/weather/
# Weather App

This project is a simple web-based Weather App that fetches weather data from an API based on the user's input city. The app displays the current temperature, city name, humidity, and wind speed.

## Files

- `index.html`: The main HTML file containing the structure of the Weather App.
- `style.css`: The CSS file containing styles for the Weather App.
- `script.js`: The JavaScript file containing the functionality for fetching and displaying weather data.
- `README.md`: This file, providing an overview of the project.

## Usage

1. Open `index.html` in a web browser.
2. Enter the name of a city in the input field.
3. Click the search button to fetch and display the weather data for the entered city.

## HTML Structure

- The `main` tag contains the primary content of the Weather App.
- The `div` with the class `card` contains the search input, button, and weather display elements.
- The `div` with the class `search` contains the input field and the search button.
- The `div` with the class `weather` contains the weather icon, temperature, city name, humidity, and wind speed details.

## CSS Styling

- The page is styled with basic CSS to make it visually appealing and user-friendly.
- Flexbox is used for layout and alignment.
- Icons for search, weather conditions, humidity, and wind speed are used to enhance the UI.

## JavaScript Functionality

- The `script.js` file contains the logic for fetching weather data from an API based on the user's input city.
- An event listener is added to the search button to fetch weather data when clicked.
- The weather data is displayed dynamically, including temperature, city name, humidity, and wind speed.

## API Integration

- The app uses a weather API to fetch real-time weather data.
- The API key and endpoint need to be configured in the `script.js` file.

## Future Improvements

- Add error handling for invalid city names or network issues.
- Implement persistent storage using LocalStorage to save the last searched city.
- Improve the user interface with more detailed weather information.
- Add localization for different languages and units (e.g., Fahrenheit and miles per hour).

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
