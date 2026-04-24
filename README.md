# React Currency Converter

## 📌 Project Overview

This project is a real-time currency converter application built using React.
It demonstrates practical implementation of API integration, state management, performance optimization, and error handling.

The application allows users to convert currencies dynamically using live exchange rates fetched from a public API. It also includes periodic data refreshing to simulate real-time updates.

---

## 🧱 Application Structure

The application is divided into the following tasks:

### Core Components
* Converter Component
 - Handles the main conversion logic, user input, and displays results.
* CurrencySelect Component
 - Reusable dropdown component for selecting currencies. Optimized using memoization to prevent unnecessary re-renders.
* ErrorMessage Component
 - Displays API errors in a clean and user-friendly way.    

### Custom Hooks
* Dynamically displays the current date and time.
* Uses JavaScript functions inside JSX.

### Task 3 – Dynamic Greeting
* useExchangeRates
* Responsible for fetching exchange rate data from the API.
 - Fetches data on component mount
 - Refreshes data every 60 seconds
 - Handles loading and error states

### Context API
* CurrencyContext
 - Manages global state for user preferences such as default currencies.

---

## 🎨 Styling & Design Approach
* Simple and clean UI design.
* CSS used for layout and basic styling.
* Focus on functionality over heavy design.

---

## 📱 Responsiveness
* Basic responsive layout using CSS.
* Works across different screen sizes.

## 🌟 Key Features

* 🔌 API Integration
 - Dynamically updates rates based on selected base currency
 - Uses the Frankfurter API for real-time exchange rates

* 🔄 Real-Time Updates
 - Automatically refreshes exchange rates every 60 seconds

* 🎛️ State Management
 - useState for local component state (amount, selected currencies)
 - Context API for global preferences

* 🖥️ User Interface
 - Two dropdowns for selecting currencies
 - Input field for entering amount
 - Real-time converted output display
 - Displays current exchange rate

* ⚡ Performance Optimization
 - useMemo for optimized conversion calculations
 - React.memo to avoid unnecessary component re-renders

* ⚠️ Error Handling
 - Handles API failures gracefully
 - Displays meaningful error messages to users

---

## 🚀 How It Works

* User enters an amount
* Selects source and target currencies
* Application fetches latest exchange rates
* Conversion is calculated instantly
* Result and exchange rate are displayed

---

## 🗂 Repository Structure
* Each task is implemented as a separate component.
* App.js acts as the main entry point.

The project follows the Git workflow:  
`dev` → `stage` → `main`

---

## 🚀 Technologies Used

* React (Functional Components)
* JavaScript (ES6+)
* Context API
* Fetch API
* CSS

---

## ▶️ Getting Started
1. Install Dependencies
npm install
2. Run the Application
npm run dev
3. Open in Browser
http://localhost:5173

---

## 🔗 Connect With Me
- LinkedIn: [www.linkedin.com/in/yaminimishra0804](https://www.linkedin.com/in/yaminimishra0804)  
- GitHub: [https://github.com/yaminimishra08](https://github.com/yaminimishra08)

---

## 📎 Submission
* This currency converter is a practical implementation of modern React concepts.
* It balances functionality, performance, and clean architecture, making it a solid example of a production-style React application.
* The project follows the Git workflow: `dev → stage → main`.
