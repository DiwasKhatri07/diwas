# Diwas Portfolio

A clean, simple portfolio website featuring profile information, visitor counter, and contact links. Built with React 19, Tailwind CSS 4, and optimized for Railway deployment.

## Features

- **Animated GIF Background** - Dynamic video background converted to GIF
- **Profile Information** - Display skills, location, role, and learning status
- **Visitor Counter** - Fake total visitors + live online users (updates every 12 hours)
- **Social Links** - GitHub, Web, Coffee, Open Collective
- **Telegram Channels** - Main, Drop, Backup, and Group Chat links
- **Contact Options** - DM, Bot, and Owner links
- **Responsive Design** - Mobile-friendly layout with backdrop blur effects
- **Railway Ready** - Includes Dockerfile and railway.json for seamless deployment

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Routing**: Wouter (client-side)
- **Build Tool**: Vite
- **Deployment**: Railway (Docker-based)

## Project Structure

```
Diwas/
├── client/
│   ├── public/
│   │   └── background.gif          # Animated background
│   └── src/
│       ├── pages/
│       │   └── Home.tsx            # Main portfolio page
│       ├── components/             # Reusable UI components
│       ├── App.tsx                 # Routes & layout
│       └── index.css               # Global styles
├── server/
│   └── index.ts                    # Express server (static file serving)
├── Dockerfile                      # Docker configuration for Railway
├── railway.json                    # Railway deployment config
└── package.json                    # Dependencies & scripts
```

## Installation & Development

### Prerequisites
- Node.js 22+
- pnpm 10.4.1+

### Local Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/Diwas.git
cd Diwas

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the application
pnpm run build

# Preview the production build
pnpm run preview

# Start production server
pnpm run start
```

## Deployment on Railway

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select this repository
   - Railway will automatically detect the Dockerfile and deploy

3. **Configure Custom Domain**
   - In Railway dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `diwas.pro`)
   - Update DNS records as instructed

### Option 2: Deploy Using Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize Railway project
railway init

# Deploy
railway up

# View logs
railway logs

# Open in browser
railway open
```

### Option 3: Manual Docker Deployment

```bash
# Build Docker image
docker build -t diwas-portfolio .

# Run locally
docker run -p 3000:3000 diwas-portfolio

# Push to Railway
# (Use Railway dashboard to connect your Docker image)
```

## Configuration

### Environment Variables

No environment variables are required for basic functionality. The application works out of the box.

### Customization

Edit `client/src/pages/Home.tsx` to customize:
- Profile information (name, age, location, role, status)
- Skills list
- Social links and URLs
- Telegram channels and contacts
- Visitor counter initial value

### Background Animation

To replace the background GIF:
1. Convert your video to GIF: `ffmpeg -i video.mp4 -vf "fps=10,scale=480:-1" background.gif`
2. Place the GIF in `client/public/background.gif`
3. Rebuild and redeploy

## Visitor Counter

The visitor counter displays:
- **Total Visitors**: Fake counter that increments by 200-500 every 12 hours
- **Online Users**: Random number between 2-10, updates every 30 seconds

To customize:
- Edit the initial `totalVisitors` value in `Home.tsx`
- Adjust the update intervals in the `useEffect` hooks

## Styling & Theme

- **Theme**: Light mode with dark overlay for contrast
- **Colors**: Blue accents with white text on dark background
- **Fonts**: System fonts (customizable via Tailwind)
- **Responsive**: Mobile-first design, optimized for all screen sizes

## Performance

- **Optimized GIF**: Compressed to ~3.8MB for fast loading
- **Minimal Dependencies**: Only essential packages included
- **Static Serving**: Fast content delivery via Express
- **Backdrop Blur**: CSS-based effects for smooth performance

## Troubleshooting

### Railway Deployment Issues

**Error: "Build failed"**
- Ensure `package.json` has correct scripts
- Check that `pnpm-lock.yaml` is committed
- Verify Node version compatibility (22+)

**Error: "Port already in use"**
- Railway automatically assigns a port via `$PORT` environment variable
- The application reads this from `process.env.PORT || 3000`

**Custom domain not working**
- Verify DNS records are correctly configured
- Wait 24-48 hours for DNS propagation
- Check Railway dashboard for domain status

### Local Development Issues

**Dependencies not installing**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Port 3000 already in use**
```bash
# Use a different port
pnpm run dev -- --port 3001
```

**GIF not displaying**
- Ensure `background.gif` is in `client/public/`
- Check file permissions: `chmod 644 client/public/background.gif`
- Verify path in `Home.tsx` is `/background.gif`

## File Size & Optimization

- **background.gif**: ~3.8MB (optimized from MP4)
- **Build size**: ~500KB (gzipped)
- **Load time**: <2s on 4G connection

## License

MIT - Feel free to use this template for your own portfolio

## Support & Contact

- **GitHub**: [DiwasKhatri07](https://github.com/DiwasKhatri07)
- **Telegram**: [@diwazz](https://t.me/diwazz)
- **Owner**: [@RarXgod](https://t.me/RarXgod)

## Changelog

### v1.0.0 (Initial Release)
- Portfolio page with profile information
- Visitor counter with fake data
- Social and contact links
- Railway deployment ready
- Responsive design
- Animated GIF background
