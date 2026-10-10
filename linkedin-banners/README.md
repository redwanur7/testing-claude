# LinkedIn banners

Five banner variations for Redwanur Rahman (Digital Marketing & SEO Strategist).
Ready-to-upload PNGs are in `png/`. They are 3168×792, which is 2× LinkedIn's 1584×396 size, so they stay sharp on retina screens.

| File | Style |
| --- | --- |
| `01-midnight-growth.png` | Dark navy with a growth chart (SEO and analytics) |
| `02-search-result.png` | Light, with a search bar and a #1 result (SEO) |
| `03-omnichannel.png` | Violet, with one brand hub connected to every channel |
| `04-creative-studio.png` | Dark, with a video-editor timeline (content and video) |
| `05-editorial.png` | Cream editorial serif: "Strategy. Content. Growth." |

All text sits right of x≈440, so the profile photo (bottom-left) and the camera button (top-right) never cover it.

To edit a banner, change the HTML in `src/`. Then re-render with Playwright:

```sh
node render.js   # needs the playwright package; writes png/*.png
```
