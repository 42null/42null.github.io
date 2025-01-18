#!/bin/bash

vite build

echo "Please preview what would be pushed, a non-dev preview of 'dist' will be available as a quick check."

vite preview &
PREVIEW_PID=$!

# Ask for user confirmation before deploying
read -p "Are you sure you want to deploy to GitHub Pages? (y/N) " -n 1 -r
echo    # move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Deploy to GitHub Pages
    gh-pages -d dist
    kill $PREVIEW_PID
else
    echo "Deployment aborted."
fi
