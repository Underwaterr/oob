
## Everything I've Done!
**Environment Setup**
Install NodeJS, Git, etc… 

Install the Heroku Command Line Interface (via Homebrew)
```bash
brew install heroku
```

Check that it is installed:
```bash
heroku -h
```

Make the directory & move into it
```bash
mkdir oob; cd oob
```

Initialize git project
```bash
git init
```

Deal with .DS_Store >:(
Make a `.gitignore` file and write to it
```bash
echo ".DS_Store" >> .gitignore
```

Make this readme, too! 
```bash
touch README.md
```

Git commit, etc...
(Note the space after the exclamation mark, [here's why](https://askubuntu.com/a/434840))
```bash
git add . 
git commit -m"First! "
```

If you're having an issue with needing to commit from a specific account...
```bash
git push 'https://[username]:[password]@github.com/underwaterr/oob.git'
```

