# Luxy AI by Afraz Studio — Official Website

Promotional website for the **Luxy AI** Android app.

## Flat Structure (GitHub Pages ready)

All important files are at the **root** level so deployment is simple:

```
index.html          ← Home page (CSS + logos fully inlined)
download.html       ← Download page
privacy.html        ← Privacy Policy
promo.mp4           ← Promotional video
Luxy-AI.apk         ← App download
css/                ← (optional reference)
images/             ← (optional reference)
js/                 ← (optional)
```

## Deploy on GitHub Pages

1. Upload **all** these files to the root of your repository (or `/docs` folder).
2. Settings → Pages → Source: Deploy from a branch → `main` / root (or `/docs`).
3. Site will be live at `https://yourusername.github.io/` or `https://yourusername.github.io/repo-name/`.

Because CSS and logos are **inlined** inside the HTML, the dark theme and logo will appear even if some folders are missing.  
Just make sure `promo.mp4` and `Luxy-AI.apk` are also uploaded so the video and download button work.

## Local Preview

Open `index.html` in any browser.
