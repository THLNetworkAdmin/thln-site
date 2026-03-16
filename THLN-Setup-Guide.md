# THLN Setup Guide: Building Your Website from Scratch

## Your MacBook Air Starter Guide

Welcome to building the Tar Heel Lax Network! This guide assumes you've never built a website before. Every step is spelled out — just follow along in order.

---

## PHASE 1: Install Your Tools (30 minutes)

### Step 1: Open Terminal

Terminal is the command line on your Mac. It's already installed.

1. Press **Command + Space** to open Spotlight Search
2. Type **Terminal** and press Enter
3. A window with a blinking cursor will open — this is where you'll type commands

**Tip:** Right-click Terminal in your Dock and select "Keep in Dock" — you'll use it a lot.

---

### Step 2: Install Homebrew (Mac's package manager)

Homebrew makes it easy to install developer tools. Paste this entire line into Terminal and press Enter:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- It will ask for your Mac password (the one you use to log in). **You won't see characters as you type** — that's normal. Just type it and press Enter.
- It may ask you to press Enter again to confirm.
- This takes 2-5 minutes. Wait until you see your cursor blinking again.

**After it finishes**, it will show you two commands to run under "Next steps." They look something like this (your username will be different):

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Copy and run both of those lines, one at a time.

**Verify it worked:** Type `brew --version` and press Enter. You should see a version number.

---

### Step 3: Install Node.js

Node.js is the engine that runs your website locally. In Terminal:

```
brew install node
```

Wait for it to finish (1-2 minutes).

**Verify:** Type `node --version` and press Enter. You should see something like `v22.x.x`.

Also verify npm (Node's package manager): `npm --version` should show a number.

---

### Step 4: Install Git

Git tracks your code changes and connects to GitHub. In Terminal:

```
brew install git
```

**Verify:** Type `git --version` and press Enter.

Then set up your identity (replace with your actual name and email):

```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

### Step 5: Install VS Code

VS Code is your code editor — think of it as a Word document but for code.

1. Go to **https://code.visualstudio.com** in your browser
2. Click the big blue download button (it auto-detects Mac)
3. Open the downloaded `.zip` file — it will unzip to `Visual Studio Code.app`
4. Drag it to your **Applications** folder
5. Open it from Applications

**Helpful VS Code setup:**

Once VS Code is open, press **Command + Shift + P**, type "shell command", and click **"Shell Command: Install 'code' command in PATH"**. This lets you open projects from Terminal by typing `code .`

---

### Step 6: Create a GitHub Account

GitHub is where your code lives online. It also connects to Vercel for automatic deployment.

1. Go to **https://github.com** and click Sign Up
2. Pick a username, enter your email, create a password
3. Complete the setup steps
4. **Free account is all you need**

Then install the GitHub CLI tool in Terminal:

```
brew install gh
gh auth login
```

When it asks questions:
- GitHub.com
- HTTPS
- Yes (authenticate)
- Login with a web browser

It will give you a code to enter in your browser. Follow the prompts.

---

## PHASE 2: Create Your Website Project (20 minutes)

### Step 7: Create the Next.js Project

In Terminal, navigate to where you want your project. Your Desktop or Documents folder works fine:

```
cd ~/Documents
npx create-next-app@latest thln-site
```

It will ask you several questions. Answer them like this:

```
Would you like to use TypeScript? → No
Would you like to use ESLint? → Yes
Would you like to use Tailwind CSS? → Yes
Would you like your code inside a `src/` directory? → No
Would you like to use App Router? → Yes
Would you like to use Turbopack? → Yes
Would you like to customize the import alias? → No
```

Wait for it to install (1-2 minutes). Then:

```
cd thln-site
code .
```

This opens your project in VS Code. You should see a file tree on the left side.

---

### Step 8: Run Your Site Locally

In Terminal (make sure you're in the `thln-site` folder):

```
npm run dev
```

You'll see a message that says something like `Local: http://localhost:3000`. 

Open your browser and go to **http://localhost:3000** — you should see the default Next.js starter page. That's your site running locally!

**To stop the server:** Press **Control + C** in Terminal.

---

### Step 9: Install Extra Packages You'll Need

In Terminal (press Control + C first if the server is running):

```
npm install gray-matter remark remark-html date-fns
```

These help with:
- **gray-matter**: Reading article metadata from Markdown files
- **remark / remark-html**: Converting your Markdown articles into HTML
- **date-fns**: Formatting dates nicely

---

## PHASE 3: Set Up Your Folder Structure (10 minutes)

### Step 10: Create Your Content Folders

In Terminal:

```
mkdir -p content/game-reviews
mkdir -p content/blog
mkdir -p data
```

This creates:
- `content/game-reviews/` — where you'll write game review articles
- `content/blog/` — where you'll write other blog posts
- `data/` — where your rankings, scores, and standings data lives

---

### Step 11: Create Your First Sample Article

In VS Code, right-click the `content/game-reviews` folder in the sidebar and click **New File**. Name it:

```
2026-03-14-cardinal-gibbons-vs-broughton.md
```

Paste this into the file:

```markdown
---
title: "Crusaders' Ride Suffocates Broughton in Conference Opener"
date: "2026-03-14"
author: "THLN Staff"
tags: ["Cardinal Gibbons", "Broughton", "WLC-4", "Game Review"]
homeTeam: "Broughton"
awayTeam: "Cardinal Gibbons"
homeScore: 6
awayScore: 14
conference: "WLC-4"
classification: "7A vs 8A"
status: "final"
featured: true
readTime: "8 min"
---

From the opening whistle, Cardinal Gibbons made their intentions clear. The Crusaders won the first faceoff, pushed in transition, and buried one within the first 45 seconds.

## First Half: Transition Clinic

Gibbons scored four of their first-half goals in transition, and it was their middies who were making it happen. The wing play on faceoffs was crisp.

The second quarter was the dagger. Five goals in the frame, including three in a two-minute stretch that turned a 5-2 lead into an 8-3 laugher.

## Second Half: Managing the Clock

To their credit, Broughton came out with more energy in the third quarter. But Gibbons' defense was stifling in the half-field.

## Three Stars

1. **Jake Morrison** (Cardinal Gibbons, Attack) — 4G, 2A
2. **Drew Patterson** (Cardinal Gibbons, Midfield) — 2G, 3A, 4 GBs
3. **Caleb Wright** (Broughton, Attack) — 3G, 1A
```

**That's it.** The stuff between the `---` marks is metadata. Everything below is your article written in Markdown. When you write new game reviews, just copy this file, change the metadata and content, and save.

---

### Step 12: Create Your Rankings Data File

Right-click the `data` folder and create a new file called `power-rankings.json`:

```json
{
  "week": 3,
  "publishDate": "2026-03-15",
  "intro": "Cardinal Gibbons holds the top spot for the third straight week after steamrolling Broughton.",
  "rankings": [
    {
      "rank": 1,
      "team": "Cardinal Gibbons",
      "classification": "7A",
      "conference": "WLC-4",
      "city": "Raleigh",
      "record": "6-0",
      "lastWeek": 1,
      "streak": "W6"
    },
    {
      "rank": 2,
      "team": "Athens Drive",
      "classification": "8A",
      "conference": "WLC-3",
      "city": "Raleigh",
      "record": "6-0",
      "lastWeek": 5,
      "streak": "W6"
    },
    {
      "rank": 3,
      "team": "Myers Park",
      "classification": "8A",
      "conference": "LC-19",
      "city": "Charlotte",
      "record": "5-1",
      "lastWeek": 4,
      "streak": "W4"
    }
  ],
  "droppedOut": [
    { "team": "Marvin Ridge", "previousRank": 10, "record": "3-3" }
  ]
}
```

To update power rankings each week, you just edit this file — change the numbers, reorder teams, and push.

---

### Step 13: Create Your Scores Override File

Create `data/score-overrides.json`:

```json
{
  "lastUpdated": "2026-03-15",
  "overrides": [
    {
      "id": "2026-03-14-cg-br",
      "homeTeam": "Broughton",
      "awayTeam": "Cardinal Gibbons",
      "homeScore": 6,
      "awayScore": 14,
      "status": "final",
      "verified": true,
      "quarters": [
        { "away": 4, "home": 1 },
        { "away": 5, "home": 2 },
        { "away": 3, "home": 1 },
        { "away": 2, "home": 2 }
      ],
      "note": "Watched in person. MaxPreps had this 13-6, corrected to 14-6."
    }
  ]
}
```

Whenever MaxPreps has a wrong score, add an entry here with the correct data.

---

## PHASE 4: Push to GitHub (10 minutes)

### Step 14: Create a GitHub Repository

In Terminal (make sure you're in the `thln-site` folder):

```
git add .
git commit -m "Initial THLN site setup"
gh repo create thln-site --public --push --source=.
```

This creates a repository on GitHub and pushes your code to it.

---

## PHASE 5: Deploy to the Internet (10 minutes)

### Step 15: Set Up Vercel

1. Go to **https://vercel.com** and click Sign Up
2. **Sign up with your GitHub account** (this is important — it connects them)
3. Once logged in, click **"Add New Project"**
4. You should see your `thln-site` repository listed — click **Import**
5. Leave all settings as default and click **Deploy**
6. Wait 1-2 minutes. Vercel will give you a URL like `thln-site.vercel.app`

**Your site is now live on the internet.**

---

### Step 16: Connect Your Custom Domain

1. Buy your domain (tarheellaxnetwork.com or similar) from **Namecheap** (namecheap.com) — about $12/year
2. In Vercel, go to your project → **Settings → Domains**
3. Type in your domain name and click **Add**
4. Vercel will show you DNS records to add. Go to Namecheap → **Domain List → Manage → Advanced DNS**
5. Add the records Vercel tells you to (usually two A records and a CNAME)
6. Wait 10-30 minutes for DNS to propagate
7. Your site is now live at your custom domain with free HTTPS

---

## PHASE 6: Your Weekly Workflow

### Writing a New Game Review

1. Open VS Code
2. In `content/game-reviews/`, duplicate an existing `.md` file
3. Rename it: `2026-03-17-green-hope-vs-apex-friendship.md`
4. Update the metadata between the `---` marks
5. Write your article below
6. Save the file
7. In Terminal:
   ```
   git add .
   git commit -m "Game review: Green Hope vs Apex Friendship"
   git push
   ```
8. Vercel auto-deploys in ~30 seconds. Done.

### Updating Power Rankings

1. Open `data/power-rankings.json` in VS Code
2. Update the week number, intro blurb, and team data
3. Save, commit, push:
   ```
   git add .
   git commit -m "Week 4 power rankings"
   git push
   ```

### Correcting a Score

1. Open `data/score-overrides.json`
2. Add a new entry with the correct score
3. Save, commit, push

---

## Quick Reference: Terminal Commands You'll Use

| What you want to do | Command |
|---|---|
| Start local server | `npm run dev` |
| Stop local server | `Control + C` |
| Save and push changes | `git add . && git commit -m "message" && git push` |
| Open project in VS Code | `cd ~/Documents/thln-site && code .` |
| Check if server is running | Look for `localhost:3000` in Terminal |

---

## Troubleshooting

**"Command not found" errors:** Close Terminal and reopen it. If that doesn't work, run `source ~/.zprofile`.

**Site not updating after push:** Check vercel.com — click your project and look at "Deployments" to see if it's building.

**Port 3000 already in use:** Run `npx kill-port 3000` then try `npm run dev` again.

**Git asks for password every time:** Run `gh auth setup-git` to use GitHub CLI for auth.

---

## What's Next

Once you're up and running, we can:
- Build out the actual page templates (I've already designed them — we just need to convert them to Next.js components)
- Set up the MaxPreps scraper for automatic score/standings updates
- Add an email newsletter signup
- Set up social media sharing cards so your articles look good when shared on Twitter/X

You're going to be live in under an hour. Let's go.
