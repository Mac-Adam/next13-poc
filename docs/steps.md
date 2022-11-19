# **Project setup steps**

### Tech stack

- Next.js 13
- Typescript
- TailwindCSS
- PocketBase

### Steps

1.  Setup base Next.js project `npx create-next-app@latest --typescript`
2.  Set up TailwindCSS:

    1.  run `npm install -D tailwindcss postcss autoprefixer`
    2.  run `npx tailwindcss init -p`
    3.  add content to `tailwind.config.js`
        ```js
        module.exports = {
          content: [
            './src/components/**/*.{js,ts,jsx,tsx}',
            './src/ui-base/**/*.{js,ts,jsx,tsx}',
            './app/**/*.{js,ts,jsx,tsx}',
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        };
        ```
    4.  add tailwind directives to css in `globals.scss`
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

3.  Install packages by running `npm i @headlessui/react @heroicons/react formik yup pocketbase`

4.  Setup QoL solutions:

    - eslint
    - tsconfig.json
    - .editorconfig
    - .prettierignote
    - .prettierrc.json

5.  Setup github hooks and CI jobs
6.  Setup docer and CD

7.  Setup routes

    - refer to project structure at the bottom for help
    - add configuration to `next.config.js`

      ```js
      const nextConfig = {
        reactStrictMode: true,
        swcMinify: true,
        experimental: { appDir: true },
      };
      module.exports = nextConfig;
      ```

### Folder structure:

```
 +-- .github
 |   +-- workflows (CD/CI)
 |   |   +-- *.yml
 +-- .husky (git hooks in bash to check project on commit/push)
 |   +-- _
 |   |   +-- .gitignore
 |   |   +-- husky.sh
 |   +-- pre-commit
 |   +-- pre-push
 +-- app (url structutre)
 |   +-- blog
 |   |   +-- [postId] (dynamic path link/blog/[postId] - used with [...postId] would catch link/blog/[postId]/*)
 |   |   |   +-- loading.tsx (wil be placed instead of page until it fetch data)
 |   |   |   +-- not-found.tsx (error 404 for this page)
 |   |   |   +-- page.tsx (can use [pathId] to render different content)
 |   |   +-- page.tsx
 |   +-- contact (example subpage link/contact)
 |   |   +-- (contact) (grouping folder which font affect url structure)
 |   |   |   +-- about (this will be under link/contact/about because (contact) is not taken to url)
 |   |   |   |   +-- page.tsx
 |   |   +-- page.tsx (this will render in link/contact)
 |   |   +-- template.tsx (works like layout but re-renders on path change so doesn't persist state)
 |   +-- error.tsx (renders when error occurs in page.tsx)
 |   +-- head.tsx (places <head/> with metatags in the HTML Document)
 |   +-- layout.tsx (wraps page.tsx and children pages)
 |   +-- not-found.tsx (global error 404 - propably)
 |   +-- page.tsx
 +-- docs
 |   +-- CHANGELOG
 |   +-- steps.md (steps to recreate the project)
 +-- public
 |   +-- media (images etc.)
 |   +-- favicon.ico
 +-- src
 |   +-- components (ui that also have to have data logic and manipulation)
 |   +-- constants
 |   +-- hooks
 |   +-- styles
 |   |   +-- globals.css
 |   |   +-- globals.map.css
 |   |   +-- globals.scss (main editable style file)
 |   +-- types
 |   +-- ui-base (base components without direct connection to application)
 |   +-- utils (helper functions etc.)
 +-- .editorconfig
 +-- .eslint.json
 +-- .gitignore
 +-- .prettierignore
 +-- .prettierrc.json
 +-- LICENSE
 +-- next.config.js
 +-- package-loc.json
 +-- package.json
 +-- postcss.config.js
 +-- README.md
 +-- tailwind.config.js (own style definitions)
 +-- tsconfig.js
```
