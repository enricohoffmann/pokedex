# Pokédex

A responsive Pokédex web application that fetches live Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays them in an interactive card layout.

> This project was created as part of a training course at [Developer Akademie](https://developerakademie.com/).

---

## Features

- **Browse Pokémon** – Loads 20 Pokémon at a time with a "Load more" button for pagination
- **Live Search** – Filter Pokémon by name in real time (minimum 3 characters)
- **Type-colored Cards** – Each card's color adapts to the Pokémon's primary type
- **Detail Dialog** – Click any card to open a modal with:
  - Main stats: height, weight, base experience, abilities
  - Full stats overview with percentage-based bar display
  - Navigate between Pokémon directly inside the dialog
- **Loading Indicator** – Visual feedback while data is being fetched

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantic markup |
| CSS3 | Styling, layout, type-based color theming |
| JavaScript (Vanilla) | Logic, API calls, DOM manipulation |
| [PokéAPI](https://pokeapi.co/) | Pokémon data source (REST API) |

---

## Project Structure

```
pokedex/
├── index.html              # Main entry point
├── scripts.js              # App logic (loading, rendering, search)
├── style.css               # Base styles
├── scripts/
│   ├── apiFunction.js      # Fetch wrapper & PokéAPI calls
│   ├── db.js               # Data mapping & Pokémon object creation
│   ├── detailCardDialog.js # Detail modal logic & navigation
│   └── templates.js        # HTML template functions
├── styles/
│   ├── colors.css          # Type-based color definitions
│   ├── pokeCard.css        # Pokémon card styles
│   └── detailCardDialog.css# Detail dialog styles
└── assets/
    ├── icons/              # SVG icons (e.g. Pokédex logo)
    └── img/                # Static images
```

---

## Getting Started

No build tools or dependencies required.

1. Clone the repository:
   ```bash
   git clone https://github.com/enricohoffmann/pokedex.git
   ```
2. Open `index.html` in your browser.

> An internet connection is required since Pokémon data is fetched live from the PokéAPI.

---

## API

This project uses the free [PokéAPI](https://pokeapi.co/):

```
GET https://pokeapi.co/api/v2/pokemon?limit={limit}&offset={offset}
```

No API key is needed.

---

## License

This project is for educational purposes only. Pokémon and all related names are trademarks of Nintendo / Game Freak.
