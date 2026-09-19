# 🍔 FoodyHub

FoodyHub is a modern food delivery web application built with **Next.js, React, Tailwind CSS, and DaisyUI**.

Users can explore different foods, view detailed food information, create an account, log in, read customer reviews, and confirm food orders.

---

## 🚀 Live Project

🔗 **Live Demo:** Add your deployed project URL here

---

## 📌 Features

* 🏠 Modern and responsive Home page
* 🍔 Popular Foods section with animated food carousel
* 🍕 Browse all available foods
* 🔍 Dynamic food details page
* 🛒 Confirm Order functionality
* ⭐ Customer Reviews section
* 👤 User Sign Up functionality
* 🔐 Login functionality
* 💾 User information stored in Local Storage
* 📱 Responsive design for mobile, tablet, and desktop
* 🧭 Dynamic active navigation links
* ❌ Custom 404 Not Found page
* 🖼️ Optimized images using Next.js Image component

---

## 🛠️ Technologies Used

### Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS
* DaisyUI

### Next.js Features

* App Router
* Dynamic Routes
* `next/link`
* `next/image`
* `usePathname`
* Client Components
* Server Components
* `notFound()`
* API data fetching

### Other

* Local Storage
* JSONPlaceholder API
* Unsplash Images

---

## 📂 Project Structure

```text
foody-hub/
│
├── public/
│   └── banner.png
│
├── src/
│   └── app/
│       │
│       ├── about/
│       │   └── page.jsx
│       │
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       │
│       ├── data/
│       │   └── foods.js
│       │
│       ├── foods/
│       │   ├── page.jsx
│       │   │
│       │   └── [foodId]/
│       │       ├── page.jsx
│       │       └── confirmOrder.jsx
│       │
│       ├── login/
│       │   └── page.jsx
│       │
│       ├── signup/
│       │   └── page.jsx
│       │
│       ├── reviews/
│       │   └── page.jsx
│       │
│       ├── not-found.js
│       ├── layout.js
│       ├── page.jsx
│       └── globals.css
│
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🏠 Home Page

The Home page contains:

* Animated welcome text
* FoodyHub branding
* Call-to-action button
* Hero image
* Popular Foods section
* Center-focused food carousel

The Popular Foods carousel displays one main food card in the center while other cards appear smaller and blurred.

---

## 🍔 Foods Page

The Foods page displays all available foods in a responsive grid.

Each food card contains:

* Food image
* Food name
* Price
* Category
* Order button

Clicking **Order Now** takes the user to the corresponding dynamic food details page.

---

## 🔎 Dynamic Food Details

FoodyHub uses a dynamic route:

```text
/foods/[foodId]
```

For example:

```text
/foods/1
/foods/2
/foods/3
```

The application finds the food using its ID and displays:

* Food image
* Food name
* Price
* Category
* Description
* Confirm Order button

If an invalid food ID is provided, the application displays the custom Not Found page.

---

## 🛒 Order Confirmation

The **Confirm Order** button is implemented as a Client Component using React's `useState`.

When the user clicks the button:

```text
Confirm Order
      ↓
Order Confirmed! 🎉
```

This is currently a frontend demonstration and does not process a real payment or database order.

---

## ⭐ Reviews

The Reviews page fetches review data from:

```text
https://jsonplaceholder.typicode.com/comments
```

The application displays the first six reviews in responsive cards.

Each review contains:

* Customer name
* Email
* Review message

---

## 👤 Sign Up

Users can create a demo account using:

* Name
* Email
* Phone number
* Password
* Address

The submitted user information is stored in the browser's **Local Storage**.

---

## 🔐 Login

Users can log in using the email and password they created during Sign Up.

The application checks the saved Local Storage data.

Possible results:

```text
Account not found.
```

or

```text
Invalid email or password.
```

or

```text
Welcome back! 🎉
```

> ⚠️ This authentication system is only for learning/demo purposes. Storing passwords in Local Storage is not secure for a production application.

---

## 🧭 Navigation

The Navbar contains:

* Home
* Foods
* Reviews
* About
* Sign Up
* Login

The active page is highlighted using `usePathname()`.

The Navbar is also responsive and provides a mobile dropdown menu.

---

## 📄 About Page

The About page explains:

* What FoodyHub is
* The mission of the platform
* Why users may choose FoodyHub

---

## ❌ Custom 404 Page

FoodyHub includes a custom Not Found page using Next.js:

```jsx
notFound();
```

When a requested page or food item doesn't exist, users are shown a custom:

```text
Page Not Found
```

message.

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile devices
* 📱 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

Tailwind CSS responsive utilities are used throughout the project.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd foody-hub
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the project

Visit:

```text
http://localhost:3000
```

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🧠 What I Learned From This Project

This project helped me practice several important Next.js concepts:

* Next.js App Router
* File-based routing
* Dynamic routes
* Server Components
* Client Components
* `useState`
* `useEffect`
* `usePathname`
* API data fetching
* Local Storage
* Dynamic rendering
* `notFound()`
* Next.js Image optimization
* Responsive design with Tailwind CSS
* DaisyUI components
* Component-based architecture

---

## 🔮 Future Improvements

Some features that can be added in the future:

* 🛒 Shopping cart
* ➕ Increase/decrease food quantity
* 💳 Real payment system
* 🗄️ Database integration
* 🔐 Secure authentication
* 👤 User dashboard
* 📦 Real order management
* ❤️ Favorite foods
* 🔎 Food search
* 🏷️ Category filtering
* ⭐ Real customer review system
* 📍 Delivery address management

---

## 👨‍💻 Developer

**AH Jibon**

This project was created as part of my journey of learning **React and Next.js** and building practical web applications.

---

## 📄 License

This project is created for learning and educational purposes.
