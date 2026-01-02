# Joy Okon - Personal Portfolio v2.0

A modern, responsive personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.
This project was migrated from a static HTML/jQuery template to a robust React application to ensure better performance, scalability, and developer experience.

![Project Preview](/public/img/joy.jpeg)  <!-- You can replace this with a screenshot later -->

## 🚀 Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Component Styles**: [Tailwind Variants](https://www.tailwind-variants.org/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Font**: Google Fonts (Poppins & Open Sans)

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Home Page
│   ├── about/            # About Page
│   ├── portfolio/        # Portfolio Page (Grid + Modal)
│   ├── contact/          # Contact Page
│   ├── layout.tsx        # Root Layout (Fonts & Global Providers)
│   └── globals.css       # Tailwind Theme & Global Styles
├── components/           # Reusable Components
│   └── Navigation.tsx    # Sidebar & Mobile Menu
public/
└── img/                  # Static Assets (Images)
_legacy_site/             # Backup of the original static site
```

## 🛠️ Getting Started

### Prerequisites

-   Node.js 18.17 or later
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/DanielElom/Joy-okon.git
    cd Joy-okon
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 🎨 Customization

### Changing Content
-   **Personal Info**: Edit `src/app/about/page.tsx`
-   **Projects**: Edit the `projects` array in `src/app/portfolio/page.tsx`
-   **Contact Info**: Edit `src/app/contact/page.tsx`
-   **Colors**: Edit `src/app/globals.css` (CSS variables)

### Changing Images
Place your images in `public/img/` and update the `src` paths in the respective pages or components.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## ☁️ Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
