# gamerie-survey

The gamerie-survey project is a lightweight, client‑side survey application built with React and TypeScript. It presents a series of questions to users, collects their responses, and displays a thank‑you page upon submission. The UI is composed of reusable form components such as checkboxes, radio buttons, and rating scales, allowing for a flexible survey design.

The application leverages Vite for fast development and hot module replacement, making it easy to iterate on form logic and styling. Styling is handled through a set of CSS files that provide global styles, form controls, animations, and token definitions for consistent theming across the app. The top bar provides navigation and branding, while the survey header introduces the questionnaire.

Because the project is entirely front‑end, it can be deployed as a static site on any web host. The code structure is modular, with clear separation between components, data, pages, and styles, which facilitates future expansion such as adding authentication or integrating a backend API for persistence.

## Tech Stack

### Frontend

- JavaScript/TypeScript
- React

  ### Backend

  _None_

  ### UI / Styling

  _None_

  ### Blockchain / Web3

  _None_

  ### Other

  _None_

## Features

### Dynamic Survey Form

The app renders a series of survey questions defined in a separate data file. Each question type is handled by a dedicated component (e.g., CheckboxOption, RadioOption, Scale5, Scale10). This modular approach allows for easy addition of new question types without altering the core logic.

**Relevant Files:**

- `src/components/CheckboxOption.jsx`
- `src/components/RadioOption.jsx`
- `src/components/Scale5.jsx`
- `src/components/Scale10.jsx`
- `src/data/questions.js`
- `src/pages/SurveyPage.jsx`

### Form Validation and Submission

The form includes an EmailField component for collecting user emails and a SubmitButton that triggers validation before sending data. Upon successful submission, the user is redirected to a ThankYouPage, providing a smooth user experience.

**Relevant Files:**

- `src/components/EmailField.jsx`
- `src/components/SubmitButton.jsx`
- `src/pages/ThankYouPage.jsx`
- `src/App.jsx`

### Responsive Design and Animations

Global CSS and token files define a consistent look and feel. Animations.css adds subtle transitions to form elements, enhancing usability on both desktop and mobile devices.

**Relevant Files:**

- `src/styles/global.css`
- `src/styles/animations.css`
- `src/styles/tokens.css`

### Topbar Navigation

A reusable Topbar component provides branding and navigation links, improving the overall structure of the application.

**Relevant Files:**

- `src/components/Topbar.jsx`

## Project Structure

```text
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── CheckboxOption.jsx
│   │   ├── EmailField.jsx
│   │   ├── FormSection.jsx
│   │   ├── RadioOption.jsx
│   │   ├── Scale10.jsx
│   │   ├── Scale5.jsx
│   │   ├── SubmitButton.jsx
│   │   ├── SurveyHeader.jsx
│   │   ├── Topbar.jsx
│   │   ├── index.js
│   ├── data
│   │   ├── questions.js
│   ├── main.jsx
│   ├── pages
│   │   ├── SurveyPage.jsx
│   │   ├── ThankYouPage.jsx
│   ├── styles
│   │   ├── animations.css
│   │   ├── form-controls.css
│   │   ├── global.css
│   │   ├── survey.css
│   │   ├── thankyou.css
│   │   ├── tokens.css
│   │   ├── topbar.css
├── vite.config.js
```

## Core Folders

- **src** — Root source folder containing all application code.
- **src/components** — Reusable UI components for form controls, layout, and navigation.
- **src/data** — Static data files, such as the list of survey questions.
- **src/pages** — Page-level components that compose the survey flow.
- **src/styles** — CSS files for global styles, component-specific styles, and animations.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Development

- The app uses Vite; `npm run dev` launches the dev server with hot module replacement.
- Open `http://localhost:5173` to view the survey.

## Environment Variables

- Not provided

## Testing

- Not provided

## Deployment

- Not provided

---

Built with ❤️ by [Commitra](https://github.com/commitra)
