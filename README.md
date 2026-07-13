# GitHub Analyzer

A simple GitHub profile analyzer built with **React**, **TypeScript**, and the **GitHub REST API**. Search any GitHub username and view basic profile statistics instantly.

## Features

* 🔍 Search GitHub users by username
* 👤 View profile information
* 📦 Display public repository count
* 👥 Show followers and following count
* 🔗 Link directly to GitHub profiles
* ⚡ Fast API-powered results

## Tech Stack

* **Frontend:** React + TypeScript
* **Styling:** Tailwind CSS
* **API:** GitHub REST API
* **Build Tool:** Vite

## Installation

Clone the repository:

```bash
git clone https://github.com/DefNotArham/github-analyzer.git
```

Navigate into the project:

```bash
cd github-analyzer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at:

```bash
http://localhost:5173
```

## Usage

1. Enter a GitHub username in the search bar
2. Click **Search** or press **Enter**
3. View the user's GitHub statistics

Example:

```
Username: octocat

Repos: 8
Followers: 3000
Following: 10
```

## API

This project uses the GitHub REST API:

```
GET https://api.github.com/users/{username}
```

Example:

```
https://api.github.com/users/octocat
```

## Project Structure

```
github-analyzer/
│
├── src/
│   ├── api/
│   │   └── github.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
└── README.md
```

## Future Improvements

* [ ] Display user repositories
* [ ] Add language statistics
* [ ] Add repository stars/forks
* [ ] Add loading animations
* [ ] Add better error handling
* [ ] Add GitHub contribution graph

## Author

**DefNotArham**

GitHub: https://github.com/DefNotArham

## License

This project is open source and available under the MIT License.
