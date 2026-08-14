# 🚀 Ease UI

A modern and reusable **React + TypeScript UI Component Library** built with **Tailwind CSS**.

Ease UI provides a collection of reusable, customizable, responsive, and developer-friendly UI components that can be easily integrated into React applications.

---

## 🌐 Project Overview

**Ease UI** is a component-based frontend project created to make UI development easier and more reusable.

The main idea behind this project is to create commonly used UI components once and reuse them through simple props and configurations instead of writing the same UI code repeatedly.

Each component has its own documentation/demo page where different variations and use cases can be tested.

The project also includes an API Reference section for understanding component props, types, default values, and their purpose.

---

# ✨ Features

- ⚛️ React-based UI components
- 🔷 TypeScript support
- 🎨 Tailwind CSS styling
- ♻️ Reusable components
- 🧩 Component-based architecture
- 📱 Responsive design
- 🎯 Props-based customization
- 🎨 Multiple component variants
- 📐 Multiple component sizes
- 🛠️ Custom `className` support
- 📚 Component documentation
- 💻 Live component examples
- 📋 Props/API reference
- 🔄 Interactive components
- 🧱 Modular folder structure
- 🧠 Type-safe component development

---

# 🧱 Components

Ease UI contains a collection of reusable UI components.

## Basic UI Components

- Button
- Card
- Tooltip
- Layout

## Feedback Components

- Loading
- Error
- Success
- Toast

## Navigation Components

- Tabs
- Accordion
- Collapse
- Pagination
- Carousel

## Overlay Components

- Dialog

## Data Display Components

- Table
- List
- Counter

## Media Components

- Image Gallery

## Utility Components

- Form
- API
- Random Color

---

# 🎨 Component Architecture

Each component is created as an independent and reusable React component.

The components are designed so that their appearance and behavior can be controlled through props.

For example:

```tsx
<Tooltip
  content="This is a tooltip"
  position="top"
>
  <button>
    Hover Me
  </button>
</Tooltip>