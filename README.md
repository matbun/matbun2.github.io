# Personal website with React

I have developed my website as a React web application starting from the awesome template of Tim Baker (https://github.com/tbakerx/Tim-Baker-Personal-Website) I have customized according to my needs.  
This application is hosted by the free service provided by **GitHub** *Pages*.  
A feature I really love in this app are the GitHub Cards that make it possible to embed my GitHub repositories. 
Thanks Dawson Booth for this beautiful package (https://github.com/dawsonbooth/react-repo-card)!.  

## Code on branch *master*

### Init

```bash
git init
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git remote -v
```

### Commit

```bash
git add .
git commit -m "new_commit"
git push origin master
```

### Pull

```bash
git pull origin master
```

## Deploy on branch *gh-pages*

### 0. Install GitHub Pages npm package

```bash
npm install gh-pages --save-dev
```

### 1. Configure deploy

In `package.json`:  

```json
"homepage": "https://USERNAME.github.io/REPO_NAME",
"..."
"scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "..."
      },
```

*Note*: in `predeploy` put `"yarn build"` if you use Yarn.

### 2. Deploy

```bash
npm run deploy
```

### 3. Set gh-pages as default branch

Make sure gh-pages branch is public and the **default** one: Settings (repo) > Branches > ...  

#### References

https://medium.com/theleanprogrammer/how-to-deploy-your-react-app-on-github-pages-in-2-minutes-8040f0df1543