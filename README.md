# Astro Decap CMS Template

A static site template built with [Astro](https://astro.build) and deployed to Cloudflare Pages, with [Decap CMS](https://decapcms.org) for content management.

Originally cloned from [Staffinity.ai](https://staffinity.ai) and packaged as a reusable template for marketing/saas sites.

## Prerequisites

- **Node.js** >= 22.12.0 (version managed by [mise](https://mise.jdx.dev))
- [mise](https://mise.jdx.dev) — run `mise install` to install the project Node.js version

## Getting Started

```bash
# Trust the project's mise.toml
mise trust mise.toml

# Install Node.js version from mise.toml
mise install

# Install dependencies
mise r deps

# Start dev server
mise r dev

# Build for production
mise r build

# Preview production build
mise r preview
```

## Using This Template

This repo is a template for building marketing sites with Astro + Decap CMS. To customize it for your own use:

1. **Update site metadata** in `src/consts.ts` (title, description, social links, etc.)
2. **Replace content** in `src/content/` with your own (authors, solutions, stories)
3. **Customize the design** in `src/styles/` (colors, typography, layout)
4. **Update navigation** in `src/data/nav.ts`
5. **Modify or remove template pages** in `src/pages/` (German legal pages, LinkedIn redirects, etc.)
6. **Set up Decap CMS** for your own GitHub repo — see [CMS section](#cms)
7. **Deploy to Cloudflare Pages** — see [Deployment section](#deployment)

## Project Structure

```
src/
├── components/     # UI components, icons, sections, structured-data
├── content/        # Markdown content collections (authors, solutions, stories)
├── data/           # TypeScript data files (nav, sectors, social)
├── layouts/        # Page layouts
├── pages/          # Route pages (file-based routing)
└── styles/         # SCSS stylesheets
public/             # Static assets (images, fonts, videos, CMS admin)
functions/          # Cloudflare Functions (CMS OAuth)
```

## CMS

Decap CMS admin panel at `/admin`. Configuration in `public/admin/config.yml`.
GitHub OAuth flow handled by Cloudflare Functions in `functions/api/`.

**To enable the CMS for your own repo:**

1. Create a GitHub OAuth App
2. Set the required environment variables (see below)
3. Update `public/admin/config.yml` with your repo name
4. For local development, update `public/admin/config.dev.yml` with a test repo/fork

See `AGENTS.md` for detailed OAuth flow and local CMS debugging instructions.

## Deployment

Cloudflare Pages with `astro build`. Functions are copied to `dist/functions/` during build.

| Setting | Value |
|---------|-------|
| `NODE_VERSION` | `22` |
| Build command | `npm run build` |
| Output directory | `dist/` |

Cloudflare Pages auto-detects `package-lock.json` and runs `npm ci` automatically.

## Environment Variables

Create `.dev.vars` for local development:

```shell
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_REPO=your-org/your-repo
BASE_URL=http://localhost:8788
```

For production, set these in your Cloudflare Pages dashboard.
