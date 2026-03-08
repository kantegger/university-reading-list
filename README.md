# University Reading List

A multilingual, curated academic reading recommendation platform for university students. Browse 1,100+ textbooks and references across 22 disciplines — in English, Japanese, Simplified Chinese, and Traditional Chinese.

**Live site:** [unireadinglist.com](https://unireadinglist.com)

---

## Features

- **1,100+ curated books** across 22 academic disciplines
- **4 languages** — English, Japanese, Simplified Chinese (zh-cn), Traditional Chinese (zh-tw)
- **Full-text search** with fuzzy matching, subject filtering, difficulty filtering, and sorting
- **Book detail pages** — cover images, author, ISBN, publisher, difficulty level, rating, tags, and Amazon purchase links
- **Static-site generation** — fast, SEO-friendly pages with sitemap and RSS support
- **Responsive design** — works on mobile and desktop
- **Amazon Associates integration** — regional affiliate links (US / Japan / Singapore)
- **Google AdSense & Analytics** support via environment variables

## Disciplines

Economics · Law · Mathematics · Political Science · Sociology · Philosophy · Physics · Chemistry · Biology · Computer Science · Psychology · History · Literature · Engineering · Biomedical Engineering · Medicine · Business · Art · Music · Education · Environmental Science · Anthropology · Geography · Linguistics

---

## Tech Stack

| Layer      | Technology                                       |
| ---------- | ------------------------------------------------ |
| Framework  | [Astro](https://astro.build) 5.x                 |
| Styling    | [Tailwind CSS](https://tailwindcss.com) 3.x      |
| Search     | [Fuse.js](https://fusejs.io)                     |
| Content    | Markdown with YAML frontmatter                   |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com) |
| Validation | [Zod](https://zod.dev)                           |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```sh
# Clone the repository
git clone https://github.com/kantegger/university-reading-list.git
cd university-reading-list

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your own values (see Environment Variables section)

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

```sh
npm run build       # Production build
npm run preview     # Preview the production build locally
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```sh
cp .env.example .env
```

| Variable                   | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `GOOGLE_ADSENSE_CLIENT_ID` | Your Google AdSense publisher ID (`ca-pub-...`) |
| `AMAZON_ASSOCIATE_TAG_US`  | Amazon Associates tag for amazon.com (US)       |
| `AMAZON_ASSOCIATE_TAG_JP`  | Amazon Associates tag for amazon.co.jp (Japan)  |
| `AMAZON_ASSOCIATE_TAG_SG`  | Amazon Associates tag for amazon.sg (Singapore) |
| `GOOGLE_ANALYTICS_ID`      | Google Analytics measurement ID (`G-...`)       |
| `SITE_URL`                 | The canonical URL of your deployed site         |

All monetization variables are optional. The site works without them — affiliate links will use placeholder tags and ads will not display.

---

## Project Structure

```text
/
├── public/               # Static assets (logos, book covers, favicon)
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/          # Book data (Markdown, ~1100 files, 22 subjects × 4 languages)
│   ├── i18n/             # Translation strings and language utilities
│   ├── layouts/          # Page layout templates
│   ├── lib/              # Content query utilities
│   ├── middleware.ts      # Accept-Language detection & redirect
│   ├── pages/            # File-based routes
│   └── styles/           # Global CSS
├── .env.example          # Environment variable template
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
└── wrangler.toml         # Cloudflare Pages configuration
```

### URL Structure

| Path                         | Description                 |
| ---------------------------- | --------------------------- |
| `/`                          | English homepage            |
| `/ja/`, `/zh-cn/`, `/zh-tw/` | Language-specific homepages |
| `/subjects`                  | All subject categories      |
| `/subjects/[subject]/`       | Books in a subject          |
| `/subjects/[subject]/[slug]` | Individual book detail page |
| `/search`                    | Full-text search            |
| `/api/search.json`           | Search index API endpoint   |

---

## Content Format

Each book is a Markdown file in `src/content/[subject]-[lang]/`:

```markdown
---
title: 'Introduction to Algorithms'
original_title: 'Introduction to Algorithms'
author: 'Thomas H. Cormen, et al.'
publisher: 'MIT Press'
year: 2022
isbn: '9780262046305'
category: computer-science
level: undergraduate
difficulty: intermediate
rating: 4.8
tags: [algorithms, data-structures, programming]
featured: true
cover: 'https://...'
---

A comprehensive textbook covering algorithms and data structures...
```

### Adding Books

1. Create a `.md` file in the appropriate `src/content/[subject]-[lang]/` directory.
2. Fill in the frontmatter fields (see schema above).
3. Write a description in the body.
4. Run `npm run dev` to verify the page renders correctly.

---

## Deployment

The project is configured for [Cloudflare Pages](https://pages.cloudflare.com). See [DEPLOY.md](DEPLOY.md) for full deployment instructions.

### Quick Deploy

1. Fork this repository
2. Connect it to Cloudflare Pages
3. Set build command: `npm run build`
4. Set build output directory: `dist`
5. Add your environment variables in the Cloudflare Pages dashboard

A GitHub Actions workflow template is included at `.github/workflows/deploy.yml.disabled` — rename it to `deploy.yml` and add your Cloudflare credentials as repository secrets to enable CI/CD.

---

## Contributing

Contributions are welcome! The most impactful way to contribute is to add or improve book entries.

### Adding or Updating Books

1. Fork the repository and create a branch.
2. Add or edit Markdown files in `src/content/`.
3. Run `npm run dev` to preview changes.
4. Submit a pull request with a clear description.

### Code Contributions

1. Run `npm run lint` and `npm run format` before submitting.
2. Keep changes focused — one concern per pull request.
3. For significant changes, open an issue first to discuss.

---

## License

This project is licensed under the [MIT License](LICENSE).

Book cover images are sourced from public publisher resources or open image databases. Book metadata (titles, authors, ISBNs) is factual bibliographic information.
