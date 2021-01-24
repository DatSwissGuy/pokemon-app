![Firebase Deployment](https://github.com/DatSwissGuy/pokemon-app/workflows/Firebase%20Deployment/badge.svg?branch=master)
![Docker-Compose Build](https://github.com/DatSwissGuy/pokemon-app/workflows/Docker-Compose%20Build/badge.svg?branch=master)

---

![PokeNgLogo](doc/PokeNg.png)

# Purpose

Building an (a simple) Angular SPA for Browsing Pokémon. Consumes the [PokéAPI](https://www.pokeapi.co) RESTful API. And no, it's not a Pokédex, i might create one someday.

# Screenshots / Progress
![Progress-2020-9-13](doc/Screenshot_2020-12-08.png)
*(September 2020) Initial design / layout for the app, showing the first 151 Pokémon*

Features:
- Docker Compose setup (September 2020)
- SSR (September 2020)
- Initial PWA functionality (02.01.2021)
- A list of Pokémon from each generation can be selected (19.01.2021)
- Automatic deployment via `GitHub Actions` (19.01.2021)
- List of games up to fith generation (22.01.2021)

# Demo

This app is currently hosted on Google Firebase. Server Side Rendering is realized via Firebase Functions. [Have a look](https://pokemon-app-51156.web.app).

# Installing / Running the App

Clone the repo. Then run `npm install` to install dependencies, after that run `ng serve` to serve the app. 

Alternatively if you have Docker, run `docker-compose up --build` to build and then serve the app on ` localhost:4000`.

# WIPs

This list is in no particular order / respectively prioritized.

- This readme needs some work 😅
- The Docker Compose badge only shows that the build was successful. No information regarding tests.
- Tests for CD / CI
- A design for the app, it currentyl looks a bit uninspiring.
