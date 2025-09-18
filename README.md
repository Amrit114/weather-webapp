
# 🌤️ Weather App

<p align="center">
	<img src="https://raw.githubusercontent.com/Amrit114/weather-webapp/main/mini-project-react/public/vite.svg" alt="Weather App Logo" width="120" />
</p>

<div align="center">

```
		☀️        🌤️        ⛈️        ❄️
	 ╭─────╮   ╭─────╮   ╭─────╮   ╭─────╮
	 │ HOT │   │MILD │   │RAIN │   │COLD │
	 ╰─────╯   ╰─────╯   ╰─────╯   ╰─────╯
```

**A modern, responsive weather application built with React and Material-UI**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📖 Overview

A sleek and intuitive weather application that provides real-time weather information for any city worldwide. Built with modern React and featuring a beautiful glassmorphism design with smooth animations and interactive elements.

## ✨ Features

- 🎨 **Modern UI/UX**: Glassmorphism, smooth transitions, 3D card effects, responsive design
- 🌍 **Weather Information**: Real-time data, temperature, humidity, min/max, feels like, dynamic icons
- 🎯 **Smart Features**: Dynamic backgrounds, weather-specific icons, error handling, auto-clearing search

## 🛠️ Tech Stack

| Technology         | Purpose                        |
|--------------------|-------------------------------|
| **React**          | Frontend framework             |
| **Material-UI**    | UI components & icons          |
| **CSS3**           | Custom styling & animations    |
| **OpenWeatherMap** | Weather data API               |
| **Vite**           | Build tool & dev server        |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/Amrit114/weather-webapp.git
cd mini-project-react
npm install
```

### Set up API Key

- Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
- Replace the API key in `SearchBox.jsx`:
	```js
	const API_KEY = "your-api-key-here";
	```

### Start the App

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
mini-project-react/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── InfoBox.jsx
│   ├── SearchBox.jsx
│   ├── WeatherApp.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── InfoBox.css
│   │   └── SearchBox.css
│   └── assets/
│       └── react.svg
├── public/
│   └── vite.svg
├── index.html
└── README.md
```

## 🎨 Design Features

- **Glassmorphism**:  
	```css
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(15px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	```
- **Dynamic Weather Images**:  
	☀️ Sunny, ❄️ Cold, ⛈️ Rainy, etc.
- **Responsive**:  
	Desktop, tablet, and mobile layouts

## 🔧 API Integration

Uses the OpenWeatherMap API:
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

## 🎯 Key Components

- **WeatherApp**: Main state and logic
- **SearchBox**: User input and API calls
- **InfoBox**: Weather display card

## 🚀 Deployment

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions

## 🔮 Future Enhancements

- [ ] 7-day forecast
- [ ] Geolocation-based weather
- [ ] Weather maps
- [ ] Dark/Light theme
- [ ] Favorite cities
- [ ] Weather alerts

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/)
- [Material-UI](https://mui.com/)
- [Unsplash](https://unsplash.com/)
- React community

---

<div align="center">

**Built with ❤️ and ☕ by Amrit Raj Singh**

⭐ Star this repo if you found it helpful! ⭐

</div>
