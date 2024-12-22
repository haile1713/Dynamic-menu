
# Dynamic Menu Application

This project is a dynamic menu application built with **React** and **Bun**, utilizing a clean design and interactive features. The menu displays items from different categories (e.g., Salads, Brunch, Drinks) with hover effects, an overlay description, and a modern UI design.

---

## **Features**

- **Dynamic Categories**: Displays menu items dynamically based on categories.
- **Hover Overlay**: Show item descriptions as an overlay on hover.
- **Responsive Design**: Optimized for various screen sizes using CSS flexbox.
- **Gradient Background**: A visually appealing gradient background.
- **Custom Fonts**: Includes curvy fonts for descriptions to enhance style.

---

## **Screenshoots**
![Screenshot 2024-12-22 223953](https://github.com/user-attachments/assets/60f3840e-d56c-49fa-afc5-d170d9189ea5)
![Screenshot 2024-12-22 224009](https://github.com/user-attachments/assets/3bcc7a18-16b2-4e67-9ddb-77110aae060d)

---

## **Technologies Used**

- **React**: Component-based JavaScript library.
- **Bun**: Fast JavaScript runtime for development and build.
- **CSS**: For styling and hover effects.
- **Google Fonts**: Custom fonts like "Pacifico" for curvy descriptions.

---

## **Project Structure**

```
project/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── special-salad.jpg
│   │   │   ├── normal-salad.jpg
│   │   │   └── ...
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MenuList.jsx
│   │   └── MenuItem.jsx
│   ├── data/
│   │   └── menuData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── bun.lockb
├── package.json
└── README.md
```

---

## **Getting Started**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/haile1713/Dynamic-menu.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dynamic_menu
   ```

3. Install dependencies:
   ```bash
   bun install
   ```

### **Run the Application**

Start the development server:
```bash
bun dev
```

Open your browser and navigate to:
```
http://localhost:3000
```
---
## **Deployment**

To deploy the application:

1. Build the project:
   ```bash
   bun build
   ```

2. Deploy the contents of the `dist/` folder to your hosting platform.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.

---

## **Acknowledgments**

- [React Documentation](https://reactjs.org/)
- [Bun Documentation](https://bun.sh/)
- [Google Fonts](https://fonts.google.com/)
- [pinterest](https://pinterest.com/) for placeholder images
---

Enjoy building and customizing your Dynamic Menu Application! 🚀
