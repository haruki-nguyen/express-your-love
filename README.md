# 💌 Express Your Love – Interactive Web Invitation

A playful, heartfelt web app designed to help you express your feelings in a fun and memorable way. This project creates an interactive experience where the recipient is gently (and humorously) encouraged to accept your invitation, with delightful UI touches and a charming, personalized message.

---

## ✨ Features

- **Playful Main Button:** A beautiful, animated button invites the recipient to answer your question.
- **Popup Dialog:** Presents a heartfelt message and three choices ("Yes", "Non't", and "No").
- **Jumping 'No' Button:** The "No" button playfully jumps away, making it hard to click and encouraging a positive answer.
- **Success Message:** A warm congratulatory popup appears when the recipient accepts (or eventually clicks "No").
- **Responsive Backgrounds:** Custom backgrounds for different screen sizes (mobile, tablet, laptop, desktop).
- **Custom Fonts:** Uses locally hosted 'Dancing Script' and 'Roboto' fonts for a unique, elegant look.
- **Mobile Warning:** Shows a warning overlay on devices without a mouse, as the experience is best on desktop.
- **Modular, Clean Code:** CSS and JS are split into logical modules for easy customization and maintenance.

---

## 🖥️ How It Works

1. The recipient clicks the main button to open a popup with your personalized message.
2. They are presented with three choices:
   - **Yes** or **Non't**: Both lead to a congratulatory message.
   - **No**: The button jumps away up to 20 times, making it hard to refuse. Eventually, clicking "No" also leads to the congratulatory message.
3. On mobile or touch devices, a warning overlay appears, as the playful experience is designed for mouse users.

---

## 🛠️ Tech Stack

- **HTML5** – Semantic, accessible markup
- **CSS3** – Modular, layered styles (with custom fonts and responsive backgrounds)
- **JavaScript (ES6 Modules)** – Handles interactivity and playful logic
- **Assets:**
  - Fonts: 'Dancing Script' and 'Roboto' (in `assets/fonts/`)
  - Images: Responsive backgrounds (in `assets/images/`)
  - Favicon and manifest (in `assets/favicon/`)

---

## 📁 Project Structure

```txt
assets/
  css/           # Modular CSS (settings, elements, objects, components)
  fonts/         # Dancing Script & Roboto font files
  images/        # Background images for different devices
  scripts/       # Modular JavaScript files
  favicon/       # Favicon and manifest
index.html       # Main HTML file
```

---

## 📝 Customization

- **Change the Question/Message:**
  - Edit the main button text and popup message in `index.html`.
- **Update Backgrounds:**
  - Replace images in `assets/images/` for a different look.
- **Fonts:**
  - Add or swap font files in `assets/fonts/` and update `assets/css/settings.css` as needed.
- **Colors & Styles:**
  - Adjust variables and styles in the CSS files for your preferred theme.

---

## ⚠️ Limitations

- **Best on Desktop:** The interactive experience is designed for devices with a mouse. On mobile/touch devices, a warning is shown and the main feature is disabled.
- **Screen Size:** Works best on larger screens (laptop/desktop). Some background effects may not display as intended on small screens.

---

## 🚧 Development Status & Todo

- This project is under active development. See the checklist below for progress and planned features.

---

## 💡 Tips

- Update the HTML content to personalize your message before sharing.
- For best results, use on a desktop or laptop with a mouse.
