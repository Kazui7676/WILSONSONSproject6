# Deployment Guide - Vercel

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub account with this repository
- Node.js 18+ (for local testing)

## Step 1: Push to GitHub
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

## Step 2: Import Project on Vercel
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the project configuration

## Step 3: Configure Environment Variables (Optional)
In Vercel Dashboard → Project Settings → Environment Variables:

```
NODE_ENV=production
PING_MESSAGE=System Active
```

## Step 4: Deploy
- Click "Deploy" button
- Vercel will automatically build and deploy
- Your site will be live at `https://your-project.vercel.app`

## Build Configuration
- **Framework Preset**: Vite
- **Build Command**: `npm run build` (automatic)
- **Output Directory**: `dist` (automatic)
- **Node Version**: 18.x or later (recommended 20.x)

## Project Structure
```
project/
├── client/          # React SPA frontend
├── server/          # Express API backend
├── dist/            # Build output (auto-generated)
├── vite.config.ts   # Vite configuration
└── vercel.json      # Vercel deployment config
```

## Local Testing
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Troubleshooting

### Build fails with "Cannot find module"
- Ensure all dependencies are listed in `package.json`
- Run `pnpm install` locally to verify
- Check that imports use correct path aliases (@/, @shared/)

### Environment variables not working
- Add variables in Vercel Dashboard → Settings → Environment Variables
- Restart deployment after adding variables
- Use `process.env.VARIABLE_NAME` to access in code

### Static assets not loading
- Ensure `dist/spa/` contains all build files
- Check `vite.config.ts` outputDirectory setting
- Verify `vercel.json` rewrites configuration

### API endpoints returning 404
- Check that Express routes are defined in `server/index.ts`
- Ensure routes start with `/api/` prefix
- Verify `vercel.json` rewrites include api routes

## Deploy Button
Add this to your README.md:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourname%2Fyourrepo)
```

## Support
- Vercel Docs: https://vercel.com/docs
- Build System Guide: https://vercel.com/docs/concepts/deployments/smart-cdn
