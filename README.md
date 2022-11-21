# Nuxt 3.0.x stable boilerplate with Tailwind CSS and Sass
As Nuxt 3 stable was finally released, I thought of creating a boilerplate that have TailwindCSS and Sass pre-configured.

## Instructions
### Installation
1. Clone the repository
2. Run **npm install** from root directory (same directory as **app.js**)
3. Once the packages are installed and you're ready to go, run **npm run dev** to start a development server. Default port is **3000**

### Then what?
- As **Preflight** is included in this base configuration of **Tailwind CSS**, a lot of styles have been *resetted* which means they have had most of their default styling removed, such as font sized and margins (referring to H1-H6 elements), so a good starting point could be setting those up in the `0@layer base` in `assets/scss/tailwind`.scss**, or remove or comment out `@tailwind base;` from the same file. I personally like to make my own styling from scratch rather than removing the defaults by myself later on at some point.

- Apart from the **Tailwind CSS** part mentioned previously, this is exactly like the normal starter app from Nuxt, which means you'll have to setup the project as usual, such as adding specific directories such as **components** or **pages**. I first thought of adding this but I realize that not all developers setup Nuxt the same so I simply skipped it.


## Nuxt 3
https://nuxt.com/

> Nuxt is an open-source framework under MIT license for building modern and performant web applications that can be deployed on any platform running JavaScript.

### What is Nuxt?

> To understand what Nuxt is, we need to understand what we need to create a modern application:
> - A JavaScript framework to bring reactivity and web components, we chose Vue.js.
> - A bundler to support hot module replacement in development and bundle your code for production, we support both webpack 5 and Vite.
> - A transpiler to write the latest JavaScript syntax while supporting legacy browsers, we use esbuild for that.
> - A server for serving your application in development, but also to support server-side rendering or API routes, Nuxt uses h3 for deployment versatility such as serverless, workers, Node.js and unmatched performance.
> - A routing library to handle client-side navigation, we chose vue-router.
> 
> This is only the tip of the iceberg, imagine having to set up all of this for your project, make it work, and then, maintain it over time. We have been doing this since October 2016, tuning all the configurations to provide the best optimization and performance for any Vue application.
> Nuxt takes care of this and provides both frontend and backend functionality so you can focus on what matters: **creating your web application**.

## Tailwind CSS
https://tailwindcss.com/

> A utility-first CSS framework packed with classes like **flex**, **pt-4**, **text-center** and **rotate-90** that can be composed to build any design, directly in your markup.

### PostCSS
https://postcss.org/

> A tool for transforming CSS with JavaScript

### Autoprefixer
https://github.com/postcss/autoprefixer

> PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.

## Sass
https://sass-lang.com/

> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.