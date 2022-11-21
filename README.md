# Nuxt 3.0.x stable boilerplate with Tailwind CSS and Sass
The title should be rather self-explanatory, but I thought of creating a boilerplate that have TailwindCSS and Sass already configured.
It's very basic and will require styling as I included the Tailwind 

## Nuxt 3
Nuxt is an open-source framework under MIT license for building modern and performant web applications that can be deployed on any platform running JavaScript.

### What is Nuxt?
https://nuxt.com/docs/getting-started

To understand what Nuxt is, we need to understand what we need to create a modern application:
- A JavaScript framework to bring reactivity and web components, we chose Vue.js.
- A bundler to support hot module replacement in development and bundle your code for production, we support both webpack 5 and Vite.
- A transpiler to write the latest JavaScript syntax while supporting legacy browsers, we use esbuild for that.
- A server for serving your application in development, but also to support server-side rendering or API routes, Nuxt uses h3 for deployment versatility such as serverless, workers, Node.js and unmatched performance.
- A routing library to handle client-side navigation, we chose vue-router.

This is only the tip of the iceberg, imagine having to set up all of this for your project, make it work, and then, maintain it over time. We have been doing this since October 2016, tuning all the configurations to provide the best optimization and performance for any Vue application.
Nuxt takes care of this and provides both frontend and backend functionality so you can focus on what matters: **creating your web application**.

## Tailwind CSS
https://tailwindcss.com/

A utility-first CSS framework packed with classes like **flex**, **pt-4**, **text-center** and **rotate-90** that can be composed to build any design, directly in your markup.

### PostCSS
https://postcss.org/

A tool for transforming CSS with JavaScript

### Autoprefixer
https://github.com/postcss/autoprefixer

PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.

## Sass
https://sass-lang.com/

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.