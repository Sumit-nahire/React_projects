# 🔐 Password Generator App

A simple and responsive Password Generator built with **React.js**, **Tailwind CSS**, and React Hooks (`useState`, `useEffect`, `useCallback`, `useRef`).

## 🚀 Features

- Generate random passwords instantly
- Adjustable password length (8–20 characters)
- Include numbers (0-9)
- Include special characters (!@#$%^&\*())
- Copy password to clipboard with one click
- Responsive and modern UI using Tailwind CSS
- Built using React Hooks

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Hooks
  - useState
  - useEffect
  - useCallback
  - useRef

## 📸 Screenshot

Add your project screenshot here:

![Password Generator Screenshot](./image.png)

## 📂 Project Structure

src/
├── App.jsx
├── App.css
├── main.jsx
public/
package.json
README.md

## ⚙️ Installation

1. Clone the repository

git clone https://github.com/your-username/password-generator.git

2. Navigate to the project directory

cd password-generator

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open your browser and visit

http://localhost:5173

## 🧠 React Hooks Used

### useState

Manages the application state:

- Password length
- Number toggle
- Character toggle
- Generated password

### useCallback

Optimizes function recreation and improves performance.

Used for:

- Password generation
- Copy to clipboard functionality

### useEffect

Automatically generates a new password whenever:

- Length changes
- Number option changes
- Character option changes

### useRef

Provides direct access to the password input field.

Used for:

- Selecting text
- Copying password to clipboard

## 🔍 How It Works

1. User selects password length.
2. User chooses whether to include numbers and special characters.
3. Password is generated automatically.
4. Clicking the "Copy" button copies the password to the clipboard.

## 📈 Future Improvements

- Add password strength indicator
- Add uppercase/lowercase toggles
- Add password history
- Dark/Light mode support
- Custom character sets

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

git checkout -b feature-name

3. Commit your changes

git commit -m "Add new feature"

4. Push to GitHub

git push origin feature-name

5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sumit Nahire**

If you like this project, don't forget to ⭐ the repository!
