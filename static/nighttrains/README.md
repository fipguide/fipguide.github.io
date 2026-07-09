# Night Train Map Local Integration

This directory contains a local copy of the Back-on-Track night train map assets.

## Files

- `map.svg`: Inline SVG map used as the interactive base layer.
- `map.js`: Interaction logic (zoom, overlays, touch detection).
- `map.css`: Overlay and map styling.
- `d3.min.js`: D3 dependency required by `map.js`.
- `view_ontd_map.json`: Route and train metadata used for overlays.

## Local adjustments

### 1) Data source URL switched to local file

In `map.js`, the route data source was changed from Back-on-Track to the local copy:

- from: `https://back-on-track.eu/ontd/view_ontd_map.json`
- to: `/nighttrains/view_ontd_map.json`

Reason: Make the integration self-contained and modifiable in this repository.

### 2) Touch coordinate mapping fixed for embedded page layout

In `map.js`, coordinate conversion for mobile/touch selection was adjusted:

- before: map coordinates were derived from `event.pageX`/`event.pageY` normalized only by map width/height.
- now: coordinates are derived from viewport-relative pointer values (`clientX`/`clientY` with fallback) and corrected by subtracting the map container offset (`map_divrect.left/top`).

Reason: In this Hugo site, the map is rendered inside the regular content container and is not positioned like the original full-width page. Without offset correction, touch points were shifted, so nearby routes were often not detected correctly. This especially affected the mobile behavior where the train list overlay (`.row.trainlist`) should appear when tapping near multiple lines.

## Reproduction steps

1. Refresh assets from source if needed:
   - `map.css`
   - `map.js`
   - `d3.min.js`
   - `view_ontd_map.json`
   - `map.svg` extracted from Back-on-Track page source
2. Re-apply local adjustments listed above.
3. Run `hugo --gc --minify`.
4. Verify `/nighttrains` on mobile and desktop.

## Verification checklist

- Map renders and zoom/pan works.
- Single route tap opens route detail overlay.
- Mobile taps near route clusters can open train list overlay (`.row.trainlist`).
- Overlay detail button and route metadata are loaded from local JSON.
