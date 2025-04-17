# React Color Palette Generator

This is a web application built with React that allows users to generate color palettes (tints and shades) based on a single input color. Enter a hex color code (or use the color picker), and the application will display a range of related colors, each showing its weight percentage and hex value. Clicking on any generated color swatch instantly copies its hex code to your clipboard. It's a useful tool for designers and developers looking for color variations or building color schemes. Error handling is included for invalid color inputs, utilizing toast notifications for a smooth user experience.

## ✨ Features

- **Color Input:** Accepts hex color codes via text input or a visual color picker.
- **Palette Generation:** Uses the `values.js` library to generate 10 tints and 10 shades based on the input color.
- **Interactive Display:** Renders the generated colors in a responsive grid layout.
- **Color Information:** Displays the weight percentage and hex code for each color swatch.
- **Copy to Clipboard:** Click any color swatch to copy its hex code to the clipboard.
- **User Feedback:** Uses `react-toastify` for success messages (on copy) and error notifications (invalid input, clipboard issues).

## 🚀 Live Demo

[Link to Live Demo](https://colorgeneratornoto.netlify.app/)

## 🛠️ Technologies Used

- **Frontend:** React.js
- **Color Generation:** `values.js`
- **Notifications:** `react-toastify`
- **Unique Keys:** `nanoid`
- **Styling:** CSS (using classes like `.colors`, `.container`, etc., and inline styles for dynamic backgrounds)
- **APIs:** Browser Clipboard API (`navigator.clipboard`)

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/NoToRacism/ColorGenerator
    cd <your-repository-directory>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will typically open the application in your default browser at `http://localhost:3000`.

## 📖 Usage

1.  Open the application in your browser.
2.  Enter a valid hex color code into the text input field (e.g., `#674ff0`) or select a color using the color picker input.
3.  Click the "Generate" button.
4.  A palette of tints and shades based on your input color will be displayed in a grid.
5.  Click on any color swatch in the grid. Its hex code will be copied to your clipboard, and a success notification will appear.
6.  If you enter an invalid color code, an error notification will be shown.

## 🏗️ Project Structure

- `src/`: Contains the main source code.
  - `App.jsx`: Main application component, manages state (`colors`), handles color generation logic using `values.js`, and renders `Form` and `ColorList`. Sets up `ToastContainer`.
  - `Form.jsx`: Renders the color input fields (text and color picker) and the submit button. Calls `addColor` prop on submit.
  - `ColorList.jsx`: Receives the `colors` array prop and maps over it, rendering a `SingleColor` component for each color. Uses `nanoid` for keys.
  - `SingleColor.jsx`: Displays an individual color swatch. Shows weight and hex code. Handles the click event to copy the hex code to the clipboard using `navigator.clipboard` and displays toast notifications. Applies background color via inline style.
  - `main.jsx` / `index.js`: Entry point of the React application, imports `react-toastify` CSS.
  - CSS Files (`index.css`, `App.css`, etc.): (Assumed) Contain the necessary styles for layout and appearance.
- `public/`: Contains static assets like `index.html`.
- `package.json`: Lists project dependencies and scripts.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (if you have one).

---

_This README provides a comprehensive overview of the Color Generator project._
