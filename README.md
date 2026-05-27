# 🐱 Pumpkin's Purrfect Meme Picker

A fun, interactive web application built with vanilla JavaScript that helps users discover the perfect cat meme or animated GIF to match their current mood. This project was developed as a hands-on learning exercise to master core JavaScript concepts, DOM manipulation, and dynamic data filtering.

## 🚀 Features
- **Dynamic Emotion Generation:** Automatically reads cat data to generate radio button choices for each unique emotion tag.
- **Visual Feedback:** Highlights the selected emotion container smoothly using CSS and JavaScript.
- **Smart Filtering:** Filters through a data array to find matching cats, with a dedicated toggle to isolate animated GIFs only.
- **Randomization:** If multiple cats match the selected emotion, the app randomly picks a different one each time you click.
- **Immersive Loader:** Simulates an asset-loading experience using a custom loading spinner before revealing the meme modal.
- **Instant Download:** Allows users to download their favorite cat images and GIFs directly to their devices via an overlay button.

## 🛠️ Tech Stack & Concepts Learned
- **HTML5 & CSS3:** Semantic structure, absolute positioning for image overlays, responsive layouts, and interactive transitions.
- **Vanilla JavaScript:** 
  - Modules (`import/export`) to organize data structures.
  - Advanced array methods (`.filter()`, `.includes()`, `.push()`).
  - DOM Event Listeners (`change`, `click`) and event bubbling/targeting (`e.target`).
  - Asynchronous timing operations (`setTimeout`, `clearTimeout`).
  - Dynamic UI rendering using Template Literals.