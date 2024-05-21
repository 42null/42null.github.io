#!/bin/bash

vite build

vite preview

echo "Please preview what would be pushed, a non-dev preview of 'dist' is available as a quick check."

# Ask for user confirmation before deploying
read -p "Are you sure you want to deploy to GitHub Pages? (y/N) " -n 1 -r
echo    # move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Deploy to GitHub Pages
    gh-pages -d dist
else
    echo "Deployment aborted."
fi


vite build && vite preview && gh-pages -d dist
