# Specification: Breakfast Menu Landing Page "Очень вкусные дела"

## 1. Project Overview
Create a high-performance, visually stunning single-page landing menu for a cafe. The goal is to replace a text-only menu with a visual showcase of breakfast dishes to help customers see what they are ordering.

- **Style:** Modern, "Neon-Glow", Premium-casual.
- **Brand Name:** "Очень вкусные дела" (Ochen' Vkusnye Dela).

## 2. Tech Stack
- **Framework:** Astro 5+ (Static Site Generation - SSG).
- **Styling:** Tailwind CSS.
- **Layout:** Bento Grid.
- **Images:** `astro:assets` for optimization, Lazy Loading, and Lightbox for full-screen viewing.
- **Interactions:** View Transitions API (Astro) for smooth page feel.

## 3. Visual Identity (Based on Logo)
The design must revolve around the neon-pink logo provided.

- **Primary Accent:** Neon Pink (`#EB00FF` or `rgb(235, 0, 255)`).
- **Background:** Deep Dark Purple / Midnight Black (`#120318` or `#0A0A0A`) to make the neon "pop".
- **Typography:**
  - *Headings:* Stylish script (similar to the logo) or bold sans-serif.
  - *Body:* Clean, readable sans-serif (e.g., Inter or Geist).
- **Effects:** Glow effects (`box-shadow` with blur), glassmorphism for card descriptions.

## 4. UI Components

### 4.1 Hero Section
- **Title:** "Очень вкусные дела" in neon-pink glow effect.
- **Subtitle:** "Меню завтраков" (Breakfast Menu).
- **Vibe:** Minimalist but impactful.

### 4.2 The Bento Menu Grid
A responsive grid using Tailwind CSS.

- **Layout Logic:** Use `grid-cols-1 md:grid-cols-4` with varying `row-span` and `col-span` to create a "Bento" look.
- **Card Structure:**
  - **Image:** High-quality photo of the dish.
  - **Lazy Loading:** Every image must have `loading="lazy"` and `decoding="async"`.
  - **Overlay/Content:** Dish name and a short appetizing description.
  - **Price:** Minimalist placement (e.g., top right corner).
- **Interaction:** On hover, the card should slightly scale and the glow intensity should increase.

### 4.3 Lightbox Integration
- When a user clicks a dish card, the image opens in a full-screen modal (Lightbox).
- **Library:** Use a lightweight solution like PhotoSwipe or a custom Astro/Tailwind modal.

## 5. Data Structure
Store menu items in a local `src/data/menu.json` for easy editing:

```json
[
  {
    "id": 1,
    "title": "Бенедикт с лососем",
    "description": "Нежное яйцо пашот на бриоши с голландским соусом.",
    "price": "550₽",
    "image": "/src/assets/benedict.jpg",
    "size": "large" 
  }
]