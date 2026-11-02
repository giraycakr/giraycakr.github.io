# giraycakr.github.io

Personal academic homepage. Plain HTML and one CSS file, with no framework or build step. The only JavaScript is the Umami Cloud analytics script in `<head>`. GitHub Pages serves the root of `main`. The previous site is kept in the `old-site` branch.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Edit content

All content is in `index.html`. After any edit, update the `Last updated` line in the footer.

**Add a research entry.** Copy the block inside `#research`:

```html
<p class="muted">Venue or status, year.</p>
<h3 class="outcome">Title or question.</h3>
<p>What you did and what you found.</p>
```

**Add a project.** Copy an `<article>` in `#projects`:

```html
<article>
  <div class="row">
    <h3>Project name</h3>
    <span class="when">Role, year</span>
  </div>
  <p class="outcome">The one-line outcome.</p>
  <ul class="bullets">
    <li>One detail.</li>
  </ul>
</article>
```

**Add an industry entry.** Copy an `<article>` in `#industry`. It has the same form as a project, without the outcome line.

**Add the CV.** Put the file at `cv.pdf` in the repo root. The header already links to it, so add the file before pushing or the link returns a 404.

**Add the photo.** Put a square JPEG at `assets/photo.jpg` (about 400 x 400 px). It replaces the initials automatically, with no HTML change.

## Style

The site is light only. Colors are the variables at the top of `style.css`. Keep the whole site small: no external fonts, and no scripts or trackers beyond the Umami Cloud analytics script.
