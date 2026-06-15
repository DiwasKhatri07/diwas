# Diwas Portfolio

A simple, clean portfolio with a GIF background, profile information, and social links.

## Deployment to Cloudflare Workers

This project is configured to be deployed as a **Cloudflare Workers Site**.

### Prerequisites

1.  **Cloudflare Account**: You need a Cloudflare account.
2.  **Wrangler CLI**: Install wrangler globally: `npm install -g wrangler`.
3.  **Login**: Login to your account: `wrangler login`.

### Deployment Steps

1.  **Build the Project**:
    ```bash
    pnpm install
    pnpm build
    ```

2.  **Deploy**:
    ```bash
    pnpm deploy
    ```

### Subdomain Setup

By default, it will deploy to `diwas-portfolio.<your-subdomain>.workers.dev`.

To use a custom subdomain:
1.  Go to your Cloudflare Dashboard.
2.  Navigate to **Workers & Pages**.
3.  Select your worker `diwas-portfolio`.
4.  Go to **Triggers** -> **Custom Domains**.
5.  Add your desired subdomain (e.g., `portfolio.yourdomain.com`).

## Changes Made

- Fixed background GIF path in `Home.tsx`.
- Added `background.gif` to `client/public`.
- Removed Railway configuration files (`railway.json`, `Dockerfile`, etc.).
- Added Cloudflare Workers configuration (`wrangler.toml`).
- Set up `workers-site` for static asset hosting on Cloudflare.
- Updated `package.json` with build and deploy scripts.

## License

MIT - Feel free to use this template for your own portfolio

## Support & Contact

- **GitHub**: [DiwasKhatri07](https://github.com/DiwasKhatri07)
- **Telegram**: [@diwazz](https://t.me/diwazz)
- **Owner**: [@RarXgod](https://t.me/RarXgod)
