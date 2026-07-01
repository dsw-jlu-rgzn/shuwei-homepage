# Personal Homepage

A lightweight static personal homepage you can publish anywhere.

## Files

- `index.html`: page structure
- `styles.css`: visual design
- `script.js`: editable content cards and links

## Quick edit points

1. Fine-tune the bio text in `index.html` if you want a different self-introduction.
2. Replace or expand the `projects`, `writings`, `stats`, and `contacts` content in `script.js`.
3. Add future paper links, CV links, or Google Scholar links when available.
4. Keep public links updated in `script.js`.

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish so other people can access it

### Option 1: GitHub Pages

1. Create a new GitHub repository with `shuwei` in the name, for example `shuwei-homepage` or `shuweidong.github.io`.
2. Upload the contents of this folder to that repository root, including `.github/workflows/deploy.yml`.
3. Push to the `main` branch.
4. In GitHub repository settings, make sure Pages is enabled for GitHub Actions if prompted.
5. If you use `shuweidong.github.io`, your homepage will be public at `https://shuweidong.github.io/`.
6. If you use a repository like `shuwei-homepage`, the URL will usually look like `https://<your-github-name>.github.io/shuwei-homepage/`.

### Option 2: Vercel or Netlify

1. Create a new site from this folder or from a GitHub repository containing it.
2. Deploy as a static site.
3. Point a custom domain to it if you want a personal URL.
