# Personal Homepage

A lightweight academic personal homepage you can publish anywhere.

## Files

- `index.html`: page structure
- `assets/profile.jpg`: profile image shown in the sidebar
- `styles.css`: visual design
- `script.js`: light/dark theme toggle

## Quick edit points

1. Fine-tune the bio text in `index.html` if you want a different self-introduction.
2. Replace `assets/profile.jpg` with a formal portrait when available.
3. Add future paper links, CV links, or Google Scholar links in the sidebar and Publications section.
4. Keep the News, Experience, and Research sections updated in `index.html`.

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
