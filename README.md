# Socotra Car Demo

This is a [Next.js](https://nextjs.org/) project to demo a car quote diagram flow. This includes the use of global context for shared form data, the use of layout context to provide multiple pages with the access of the same component as the sidebar among others important react functionalities.

## Getting Started

### Prerequisites

To run the project first clone this repository locally and then open your terminal within the location that you downloaded. It is important to have Node.js installed.

Required Node.js 18.17.0 or more recent, I recomend version 20.12.1

install modules

```
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

##

The ui distribution of this container is in 4 folders molecules, atoms,

if I had more time I woudl add unit test

## Folder Structure

```
demo-socotra/
├── public/                  # Static files like images, fonts, and downloads
├── src/                     # All source code for the application
│   ├── app/                 # Feature-based modules for the application
│   │   ├── car-form/        # Components related to the car form feature
│   │   │   ├── step-1/      # First step in the car form process
│   │   │   └── step-2/      # Second step in the car form process
│   │   │   └── step-3/      # Third step in the car form process
│   │   │   └── step-4/      # Four step in the car form process
│   │   │   └── layout       # Layout for car-form module
│   │   ├── layout           # Global app layout components used across different parts of the application
│   │   └── result/          # Components to display results or final steps after form submission
│   │   └── styles           # Global styles and SCSS files
│   ├── context/             # React context providers and hooks for global state management
│   ├── helpers/             # Utility and helper functions
│   ├── interfaces/          # TypeScript interfaces and type declarations
│   ├── ui/                  # UI components specific to this project
│   │   ├── components/      # Reusable but not shared UI components
│   │   └── shared/          # Highly reusable and generic UI components like buttons, inputs, etc.
├── next.config.js           # Configuration file for Next.js
└── README.md                # Documentation about the project
```

## Theme and styling

Even though next.js comes with tailwind integrated as default I decided to use my classes within the scss files. It important to avoid having multiple classes with the same name as next renders them dynamically so they can override between each other.

## Fonts

I added the setup for three fonts to be use in any part of the app

-Roboto => var name: --font-roboto
-Space Grotesk => var name: --font-space-Raleway => var name: --font-raleway

If you want to use any specific you can call it like this

```.scss
 font-family: var(--font-roboto);
```

## Perfomance and optimizacion

Some components as the list item are being memoized to avoid additional renders when something in the list changes. Also, the result itself of some functions has been integrated with useMemo to avoid additional renders when executed as it should not change too often.

## Opportunities of improvement

The are some components as the sidebar component that can be joined as they have the same logic and structure so that way I can reduce the code need and improve reusability. Also If I had more time I would add more documentation to important files. For performance, I would analyze which other components are been reused and can be memoized, and the same for functions. Also, add unit tests for its components would be crucial for a better project scalability.

## Tests

As mentioned above this project does not include unit tests because of the time limitations but I would use the react test library with Jest.js to add at list of unit tests to important components and their basic functionalities for example complete the form or dot not allow it to continue if there is any missing field.
