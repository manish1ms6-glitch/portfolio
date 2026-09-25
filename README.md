# ManishDevOps Portfolio

A responsive, GitHub Pages-ready personal portfolio for **manishdevops.in**, designed around a clean editorial/engineering aesthetic.

## Included

- Professional hero section with your supplied profile photo
- About, skills, projects and experience sections
- Responsive mobile navigation
- Scroll reveal animations
- Dedicated `/blogs/` section
- 6 ready-to-publish DevOps articles
- Blog search
- SEO metadata
- `robots.txt` + `sitemap.xml`
- `CNAME` for `manishdevops.in`
- 404 page
- Favicon
- No build step — plain HTML/CSS/JavaScript

## Before pushing to GitHub

1. Replace the placeholder LinkedIn URL in `index.html`.
2. Replace the placeholder GitHub URL in `index.html`.
3. Add your real resume as `assets/resume.pdf`.
4. If you do not want the Resume button yet, remove that link.
5. Review the experience/project wording and adjust company names/dates if you want them shown.

## GitHub Pages

Upload the contents of this folder to the root of your GitHub repository.

Then in:

**GitHub → Repository → Settings → Pages**

select:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

The included `CNAME` file tells GitHub Pages to use:

`manishdevops.in`

## Custom domain DNS

For GitHub Pages, configure the DNS records at your domain provider according to GitHub's current custom-domain documentation. Do not add extra DNS records that conflict with GitHub Pages.

After DNS and Pages are correct, enable HTTPS in:

**Repository → Settings → Pages → Enforce HTTPS**

## Adding a new blog

Create:

`blogs/my-new-topic/index.html`

Copy the structure of an existing article and add the new URL to `sitemap.xml` and the cards in `blogs/index.html`.

## Design inspiration

The structure follows the clean, content-first approach visible in the referenced Wall of Portfolios example, while using original layout, styling and content for a DevOps portfolio. The referenced Anirudh portfolio is also available as an open-source GitHub project and uses a content-driven blog/work approach.