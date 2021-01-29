# site

Fed to [`hugo`](https://gohugo.io/) to create https://matthewjwhite.github.io!
See [this](github.com/matthewjwhite/matthewjwhite.github.io) for more.

## Usage

```bash
git clone --recursive git@github.com:matthewjwhite/site.git
cd site/public
git checkout main
cd ..
hugo new posts/new-file.md
hugo # Generate static site.
cd public
git add .
git commit -m 'Update site'
git push origin main
cd ..
git add content public
git commit -m 'Update content and submodule'
```
