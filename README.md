# React in WordPress Workshop

Welcome to the **React in WordPress** workshop repository! This project demonstrates how to build modern, interactive features using React within the WordPress admin interface. A major focus of this workshop is on using the **SlotFill** pattern—WordPress’s extensibility mechanism used extensively in the Block Editor and WooCommerce Admin.

---

## 🚀 Workshop Goals

- Understand how React is integrated within the WordPress admin
- Learn how to register custom WordPress admin pages using JavaScript
- Explore the `@wordpress/element` and `@wordpress/components` packages
- Master the **SlotFill** pattern for creating extensible UIs
- Build a simple plugin with extendable admin UI

---

## 🧰 Technologies Used

- WordPress
- React (via @wordpress/element)
- SlotFill (via @wordpress/components)
- PHP for plugin scaffolding
- Webpack / WP Scripts for building JavaScript

---

## 🧩 What is SlotFill?

SlotFill is a pattern (and a set of utilities in `@wordpress/components`) that allows you to inject UI elements into predefined “slots” from anywhere in your codebase (or even from other plugins). This enables **pluggable interfaces**—just like how blocks or WooCommerce tabs can be extended.

- `Slot` is the placeholder area in the DOM
- `Fill` is the content injected into that Slot

👉 SlotFill is inspired by React’s Portal API and is a powerful way to design extensible interfaces in WordPress.

---

## 📂 Project Structure

