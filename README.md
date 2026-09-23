<div   align="center">
  <img
  width='600'
  alt="Precedent – Building blocks for your Next project"
  src="./resource/Nextjs-Front-End-Boilerplate banner.png" />
</div>

<br/>

<h1 align="center">
Shaadkit</h1>

<p align="center">
  My production-ready Next.js foundation for modern web applications.
</p>

ShaadKit is my personal, opinionated foundation for starting new Next.js projects.

It brings together the tools, conventions, architecture, and developer experience I use as a baseline across projects — so I can spend less time rebuilding infrastructure and more time building the actual product.

> **ShaadKit is a foundation, not a finished application.**

Instead of starting from:

```tex
create-next-app
        ↓
    configure
        ↓
fix conventions
        ↓
    add tooling
        ↓
    add testing
        ↓
add UI infrastructure
        ↓
finally start building
```

you can start from:

```
    ShaadKit
        ↓
build the product
```

## ✨ Why ShaadKit?

Ordinary boilerplates are just a simple starting point. **ShaadKit** is a complete, opinionated foundation that solves every concern of a professional project from day one:

- ⚡ **Bun** as Package Manager — blazing-fast install & run

- 🧩 **Mantine v9** — powerful and accessible components

- 🌍 **next-intl** — internationalization (i18n) ready from the start

- 📖 **Storybook 10** — component-driven development with MCP & A11y

- 🧪 **Vitest + Playwright** — fast and reliable testing

- 🎨 **Stylelint + ESLint (Antfu Config)** — top-tier code quality

- 🔍 **Bundle Analyzer** — analyze and optimize your bundle

- ⚛️ **React 19 + React Compiler** — the latest React with auto-optimization

## 🛠️ Tech Stack

| Category              | Technology            |
| --------------------- | --------------------- |
| Framework             | Next.js(React)        |
| Language              | TypeScript            |
| UI                    | Mantine               |
| Styling               | PostCSS / CSS Modules |
| Internationalization  | next-intl             |
| Component Development | Storybook             |
| Testing               | Vitest + Playwright   |
| Code Quality          | ESLint + Stylelint    |
| Package Manager       | Bun                   |
| Build Tooling         | Next.js / Vite        |
| Performance           | Bundle Analyzer       |
| React Optimization    | React Compiler        |

## 🧠What is the philosophy of this stack?

When you first look at this repo, you might see tools you're not currently using — but I believe in every project, you should consider the possibility that it might grow into a large project in the future!

The core technologies of ShaadKit are light and simple enough, they don't have a steep learning curve, and they can be used very quickly!

Some technologies also have secondary benefits, like next-intl. It's not just for internationalization, although that's its main purpose! You can use next-intl to manage the static texts of your site. You no longer need to open different files to change a message in different parts of the site.

In my opinion, ShaadKit can be used both for an MVP and for a scalable website. Even though its main focus is on the frontend, with a few changes it can also be used in a full-stack project.



## 📦 Installation & Setup

### Prerequisites

Before starting, make sure you have installed at least Node version 24 and the latest version of Bun!

```bash
# Clone the project
git clone https://github.com/shaadcode/shaadkit.git
cd shaadkit

# Install dependencies with Bun
bun install

# Run the development server
bun dev
```

Then open your browser at: [http://localhost:3000](http://localhost:3000/)

## 🎯 Key Features

- ✅ **Production-Ready** — optimized settings from the start

- ✅ **Component-Driven** — integrated Storybook for design & documentation

- ✅ **Testable** — Vitest + Playwright in a real browser

- ✅ **Accessible (A11y)** — Storybook A11y addon included

- ✅ **Multilingual** — full i18n support

- ✅ **Code Quality** — automatic lint & format with best-in-class configs

- ✅ **Bundle Optimization** — analyze and reduce output size

- ✅ **Integrated technologies** — The `Image` and `Anchor` components have been integrated with Next.js and Next-intl.



## 🗺 Roadmap

ShaadKit will evolve as the underlying ecosystem evolves.

The focus is on maintaining a small, reliable, and opinionated foundation rather than continuously adding features for the sake of feature count.

## 🤝 Contributing

We welcome contributions! Before submitting a PR, please:

1. Fork the project

2. Create a new branch (`git checkout -b feature/amazing-feature`)

3. Commit your changes (`git commit -m 'feat: add amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)

5. Open a Pull Request

## 📄 License

This project is released under the **MIT** License.

## ✒ Author

Built and maintained by [Seyed Mojtaba Shadab(ShaadCode)]([https://shaadcoe.ir/](https://shaadcode.ir/)).

If you find ShaadKit useful, consider giving the repository a ⭐
