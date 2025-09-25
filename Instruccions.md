Esta es la configuracion package.json de un proyecto que esta bien desplegado:

{
"name": "love-story-app",
"version": "0.1.0",
"private": true,
"homepage": "https://oriel9511.github.io/nuestra-historia",
"dependencies": {
"@testing-library/dom": "^10.4.1",
"@testing-library/jest-dom": "^6.8.0",
"@testing-library/react": "^16.3.0",
"@testing-library/user-event": "^13.5.0",
"framer-motion": "^12.23.12",
"gh-pages": "^6.3.0",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-intersection-observer": "^9.16.0",
"react-scripts": "5.0.1",
"styled-components": "^6.1.19",
"web-vitals": "^2.1.4"
},
"scripts": {
"start": "react-scripts start",
"build": "cross-env PUBLIC_URL=/nuestra-historia/ react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
},
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
"devDependencies": {
"cross-env": "^10.0.0"
}
}

Este es su .env:
PUBLIC_URL=https://oriel9511.github.io/love-story-app
GENERATE_SOURCEMAP=false

Este es el worflow:

name: Build and Deploy to GitHub Pages

on:
push:
branches: [ main ]
pull_request:
branches: [ main ]

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
contents: read
pages: write
id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
group: "pages"
cancel-in-progress: false

jobs:
build-and-deploy:
runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
        
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: ./build
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4

El workflow que habias editado le hice rollback, el archivo lo tienes que volver a leer. guiate por esta informacion porque la app no esta mopstrando nada cuando deploya y creo que es un problema con la url
