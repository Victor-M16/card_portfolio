# Archive

Assets kept for reference that the site no longer serves. Nothing in this
folder is deployed.

- `desktop_pc/`, `planet/`: GLTF models from the original 3D portfolio.
- `introvid-original.mp4`: the original hero video (32 MB). The site serves a
  compressed copy at `public/hero.mp4`, made with:

  ```bash
  ffmpeg -i archive/introvid-original.mp4 -an -c:v libx264 -preset slow -crf 30 \
    -vf "scale=1280:-2,fps=30" -movflags +faststart -pix_fmt yuv420p public/hero.mp4
  ```
