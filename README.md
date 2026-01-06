# Quickstart Guide

TBA

## Scripts
npm run dev  
npm run build  
npm run deploy (see below)

## Deploying to GitHub Pages

1. Make a new branch for deployment:

   > $ git branch gh-pages

2. Check that all changes are commited:

   > $ git status

3. Merge changes from the main branch into the deployment branch:

   > $ git checkout gh-pages && git merge main --no-edit

4. (TBA with Script!) Bundle

   > $ npx webpack

5. Push deployment subtree branch, then return to main:

   > git add dist -f && git commit -m "Deployment commit"  
   > git subtree push --prefix dist origin gh-pages (npm run deploy)
   > git checkout main

6. Repeat steps 2 through 5 for reployments.

7. On GitHub settings, set source branch to gh-pages