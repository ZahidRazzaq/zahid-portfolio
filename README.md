# Zahid Razzaq Portfolio v2

Static research portfolio for professor outreach, research-engineering roles, and academic collaboration.

## What changed in v2

Three evidence-based research visuals were added:

- `assets/fusion-pipeline.svg` — RGB–Depth fusion benchmark.
- `assets/gaze-aware.svg` — gaze-aware action-recognition experiments and the controlled ~+1.5 pp result.
- `assets/aria-pipeline.svg` — Project Aria / fixed-camera data-to-annotation pipeline.

The graphics are vector SVGs, so they stay sharp on desktop and mobile and do not expose private research data.

## Preview locally

Double-click `index.html`, or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public repository called `zahid-portfolio`.
2. Upload the complete contents of this folder, including the `assets` directory.
3. Open **Settings -> Pages**.
4. Select **Deploy from a branch**.
5. Choose `main` and `/ (root)`.
6. Save.

Your URL should then be similar to:

`https://zahidrazzaq.github.io/zahid-portfolio/`

## Public-content decisions

- MSc/BSc completion dates and grades are intentionally omitted.
- Phone number is omitted from the public site.
- LinkedIn remains omitted until the profile is reactivated and checked.
- No private research code, unpublished data, participant images, or confidential dataset material is exposed.
