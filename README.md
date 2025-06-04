# 🚀 Stride

Stride is productivity app that enables users to keep track on daily tasks and goals.

## 🌐 Live Site

🔗 [View Live](https://stride-eta.vercel.app)

#### Test user credentials
- email - johnwick@gmail.com
- password - passjohnwick

## 🔗 Server Repository

[server repository](https://github.com/jamshed-uddin/mini-productivity-dashboard-server)

## 🏗 Core Features

- User authentication
- Task and goal management dashboard
- Add/Get/Update/Delete functionality for both Task and Goal
- Fully responsive design with Tailwind CSS
- Date handling and formatting using date-fns
- Interactive UI components (modals, toasts, animations)
- Clean, modular TypeScript architecture

## ✨ Enhancements

- RTK Query for centralized and efficient data fetching and mutation
- React hook form for form validation and proper error message
- Enhanced error boundaries and fallback UIs
- Loading skeleton UI for data loading state
- Framer motion for animation

## 💻 Tech Stack

- Typescript
- Next.js + React
- Redux Toolkit
- RTK Query
- Tailwind CSS

## 🏃‍♂️ Run Locally

**Clone the repository**

```bash
git clone https://github.com/jamshed-uddin/mini-productivity-dashboard-client.git

```

**Change directory**

```bash
cd mini-productivity-dashboard-client
```

**Install packages**

```bash
npm install
```

**Set environment variables**

```env
NEXT_PUBLIC_SERVER_URL=your-locally-running-server/api
```

**Start the app**

```bash
npm run dev
```

## Dependencies

```json
"dependencies": {
    "@headlessui/react": "^2.2.4",
    "@heroicons/react": "^2.2.0",
    "@reduxjs/toolkit": "^2.8.2",
    "@types/js-cookie": "^3.0.6",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "js-cookie": "^3.0.5",
    "motion": "^12.12.2",
    "next": "15.3.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.56.4",
    "react-hot-toast": "^2.5.2",
    "react-redux": "^9.2.0",
    "tailwind-merge": "^3.3.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.3.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
```
