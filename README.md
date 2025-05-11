# 🌍 React Language Translator App

A simple and interactive language translator built with **React**, allowing users to translate text between multiple languages using the **MyMemory Translation API**.

## ✨ Features

- Translate text from one language to another
- Default languages: **English (From)** → **Hindi (To)**
- Dropdown selection for source and target languages
- Translate button to trigger translation
- **Refresh button** to clear input and output fields
- Responsive and user-friendly UI

## 🛠 Tech Stack

- **Frontend:** React (with functional components and hooks)
- **API:** MyMemory Translation API
- **Environment Variables:** dotenv (.env)

## 🔐 Environment Setup

To run the app, you need to configure an environment variable:

1. A `.env.example` file is provided.
2. Create a `.env` file in the root directory.
3. Add your email used for the MyMemory API in this format:
REACT_APP_EMAIL=your_email@example.com


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PriyankDonda/translator.git
cd translator
```

### 2. Set Up Environment Variables

```
cp .env.example .env
# Then open .env and add your email
```
### 3. Install Dependencies

```
npm install
```

### 4. Run the App

```
npm start
```

Visit http://localhost:3000 to use the app in your browser.

## ✅ How to Use

Enter text in the input area.

Select languages for translation.

Click Translate Text to view translated text.

Use the Refresh icon at the top right to clear the text and start fresh.

## 📬 Contact
If you found this project helpful, give it a ⭐ on GitHub!
Have issues or suggestions? Feel free to open an issue.