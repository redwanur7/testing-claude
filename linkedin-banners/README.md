# LinkedIn banners

Minimal banner variations for Redwanur Rahman (Digital Marketing & SEO Strategist), styled after grainy blue gradient covers.
Ready-to-upload PNGs are in `png/`. They are 3168×792, which is 2× LinkedIn's 1584×396 size, so they stay sharp on retina screens.

| File | Style | Fonts |
| --- | --- | --- |
| `01-deep-field.png` | Navy-to-ice gradient with small monospace captions | Geist Mono |
| `02-cover.png` | Pale cover, staggered name®, blue horizon glow | Inter Tight, Geist Mono |
| `03-blob.png` | Grainy blue blob on white, short headline | Geist, Geist Mono |
| `03a-blob-specimen.png` | Blob with grainy edges, labelled like a research figure (SEO / Social / Content) | Geist, Geist Mono |
| `03b-blob-type.png` | Huge "Get found." that turns white where it crosses the blob | Geist, Geist Mono |
| `03c-blob-growth.png` | Three blobs growing along a timeline: Found → Followed → Chosen | Geist, Geist Mono |
| `03d-blob-dark.png` | The grainy blob glowing on near-black | Geist, Geist Mono |
| `03e-blob-search.png` | A search bar resting on the blob, answered by redwanur-rahman® | Geist, Geist Mono |
| `03f-blob-merge.png` | Strategy and Story blobs merging into Growth | Geist, Geist Mono |
| `04-horizon.png` | Night sky with a glowing planet-rise arc | Geist, Geist Mono |
| `05-aurora.png` | Black aurora with Swiss-grid service labels | Space Grotesk, Geist Mono |
| `06-twin.png` | Pale background with blue and violet blobs | Inter Tight, Geist Mono |
| `07-gradient-type.png` | "Found. Followed. Chosen." in gradient type | Geist, Geist Mono |
| `08-glass.png` | Frosted glass name card over gradient blobs | Geist, Geist Mono |

All text sits right of x≈440, so the profile photo (bottom-left) and the camera button (top-right) never cover it.

To edit a banner, change the HTML in `src/`. Then re-render with Playwright:

```sh
node render.js   # needs the playwright package; writes png/*.png
```
