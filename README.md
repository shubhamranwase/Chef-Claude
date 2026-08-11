# 👨‍🍳 Chef Claude: Your AI-Powered Culinary Assistant

Ever stared into a half-empty fridge wondering what to cook? Meet **Chef Claude**—a smart, responsive web application designed to eliminate meal-prep decision fatigue. 

By simply inputting the random ingredients you have on hand, Chef Claude leverages the powerful **Qwen 2.5 72B Instruct** AI model to instantly generate delicious, customized, and easy-to-follow recipes. 

This project demonstrates a seamless integration between a dynamic React frontend and advanced natural language processing via the Hugging Face Inference API.

---

## 📸 Screenshots

| Ingredient Input & Loading | AI Recipe (Ingredients) | AI Recipe (Instructions) |
| :---: | :---: | :---: |
| ![Chef Claude Input](Screenshot%202026-03-26%20125414.png) | ![Chef Claude Recipe Top](Screenshot%202026-03-26%20125514.png) | ![Chef Claude Recipe Bottom](Screenshot%202026-03-26%20125614.png) |
---

## ✨ Features

- **Dynamic Ingredient List**: Add, view, and manage pantry ingredients in real time.
- **AI-Powered Recipe Generation**: Integrates with the Hugging Face Inference API to call `Qwen/Qwen2.5-72B-Instruct` for intelligent, context-aware recipe creation.
- **Structured Recipe Output**: Generates complete recipes including required quantities, detailed step-by-step instructions, and serving recommendations.
- **Interactive UI & Feedback**: Features smooth loading states (`Fetching your recipe...`) and responsive component rendering.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, CSS
- **AI Model**: `Qwen/Qwen2.5-72B-Instruct`
- **API Integration**: Hugging Face Inference API (`@huggingface/inference`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0 or higher)
- **npm**
- A **Hugging Face User Access Token** with inference permissions.

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/shubhamranwase/Chef-Claude.git](https://github.com/shubhamranwase/Chef-Claude.git)

```


2. **Navigate to the project directory:**
```bash
cd Chef-Claude

```


3. **Install dependencies:**
```bash
npm install

```


4. **Configure Environment Variables:**
Create a `.env` file in the root directory and add your Hugging Face API key:
```env
VITE_HF_ACCESS_TOKEN=your_huggingface_token_here

```


5. **Start the development server:**
```bash
npm run dev

```



---

## 📂 Project Structure

```text
Chef-Claude/
├── public/              # Static assets
├── src/
│   ├── components/      # UI Components (Header, Main, Recipe, etc.)
│   ├── ai.js            # Hugging Face API configuration & Qwen model caller
│   ├── App.jsx          # Primary application logic
│   ├── main.jsx         # Application entry point
│   └── index.css        # Custom application styling
├── .env                 # Environment variables (Git-ignored)
├── index.html           # Main HTML entry
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration

```

---

## 💡 How It Works

1. **Input Ingredients**: Type any item available in your kitchen (e.g., *Paneer, Onion, Garlic, Potato*) into the input field and click **+ Add ingredient**.
2. **Request Recipe**: Once your list contains enough ingredients, click **Get a Recipe**.
3. **AI Inference**: The list is sent as a prompt to `Qwen/Qwen2.5-72B-Instruct`, configured with system instructions to act as an expert chef.
4. **Enjoy**: The rendered markdown-formatted recipe appears directly on your screen with ingredients, steps, and serving suggestions.

---

## 👨‍💻 Author

**Shubham Ranwase**

* GitHub: [@shubhamranwase](https://github.com/shubhamranwase)
