# [Pokémon React Application](https://poke-react-seven.vercel.app/)

A React application using Vite and TypeScript that displays Pokémon data from the PokéAPI. This application allows users to browse through a list of Pokémon and view their detailed information. The app is built with a focus on semantic HTML and accessibility.

## Features

- Fetch and display a list of Pokémon from the PokéAPI
- Store Pokémon data persistently using Redux Toolkit
- View detailed information about a selected Pokémon
- Responsive design that works on both desktop and mobile devices
- Semantic HTML structure for improved accessibility
- Error notifications for API failures using the notification system

## Screenshots

The application follows the UI design shown in the provided reference image, with a Pokémon list on the left and detailed information on the right.

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit + RTK Query for state management and API integration
- React Router for navigation
- SCSS Modules for component styling
- Context API for notification system
- Vite for fast development builds
- Jest for testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd pokemon-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

### Configuring BASE API URL

You can configure the BASE API URL for the application at runtime using the `VITE_API_BASE_URL` environment variable:

```bash
# Using the npm start script (already configured)
npm start

# Or manually specify the API URL
VITE_API_BASE_URL=https://pokeapi.co/api/v2 npm run dev
```

## Testing

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

### Viewing Test Coverage

To generate and view the test coverage report:

```bash
npm run test:coverage
```

This will generate a coverage report showing the test coverage across components, Redux slices, and API logic. The application maintains ≥ 60% test coverage as specified in the requirements.

## Project Structure

The project follows a feature-based folder structure for better organization and maintainability:

```
src/
├── components/       # Common/shared components
│   └── common/       # Reusable UI components like Navbar, LoadingSpinner
├── config/           # Application configuration
├── constants/        # App constants including routes and API endpoints
├── contexts/         # React contexts like NotificationContext
├── features/         # Feature-based organization
│   └── pokemon/      # Pokémon feature
│       ├── api/      # API services using RTK Query
│       ├── components/ # Pokémon-related components
│       └── slices/   # Redux slices for Pokémon data
├── layouts/          # Layout components like MainLayout
├── pages/            # Page components
├── store/            # Redux store configuration
├── styles/           # Global and component-specific styles
│   ├── components/   # Component-specific SCSS modules
│   └── layouts/      # Layout-specific SCSS modules
├── test/             # Test setup and utilities
└── types/            # TypeScript type definitions
```

## Accessibility Features

The application has been built with a focus on accessibility:

- Semantic HTML structure (`header`, `nav`, `main`, `article`, `figure`, etc.)
- Descriptive alt text for images
- Proper heading hierarchy
- Keyboard navigable components
- Descriptive error messages with notification system
- List elements using proper `ul`/`li` structure

## License

This project is licensed under the MIT License.
