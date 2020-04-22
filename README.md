# Domicilio Boilerplate
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Netlify Status](https://api.netlify.com/api/v1/badges/928e6869-c807-4fae-9168-9e556e67bf00/deploy-status)](https://app.netlify.com/sites/ferraradomicilio/deploys)

> If you want to make the same proj for your city, the only thing I ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) to make it yours.
> Thanks!

## Fetaures

⚛️ PWA
📵 Offline Ready
0️⃣ Zero-config

## Quick Start

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

## How to

1. Change the specific label related to me and my city are inside the `.env` file, if you change that the js will be clean ;)
2. Change the hardocded name of the city in the `template.html` file
3. Change the hardocded name of the city in the `assets/sitemap.xml` file
4. Change the hardocded name of the city in the `assets/robots.txt` file
5. Change the **name** and **short_name** inside `manifest.json`
6. Change the **name** inside `package.json`

## Data source

All the data are fetched from this gist:
https://gist.githubusercontent.com/tomma5o/1ca63d091b01a2fa6a73a17cc86b8fe6/raw/FerraraDomicilio.json

When you add your gist url remember to delete the last hash because points directly to a specific commit, otherwise you would get an outdated version, so for example:

```
remove the second hash ------------------------------------┐
                                                         
https://gist.githubusercontent.com/tomma5o/<hash>/raw/<removeThisHash>/FerraraDomicilio.json
```

## Netlify deploy & configuration

> The site is developed with some specific https://netlify.com APIs.

### Deploy configuration steps

1. Connect your GitHub account to Netlify
3. Select the project
2. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
3. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**

### Google analytics setup

In **Settings** → Build & Deploy → Post processing → Snippet injection: you can add here your GAnalytics snippet

### Contact Form

In **Form** you can find all the submissions.<br>There are two type of submission: **Verified Submission** and **Spam Submission** sometimes they end up in spam

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tomma5o.com"><img src="https://avatars0.githubusercontent.com/u/8134038?v=4" width="100px;" alt=""/><br /><sub><b>Tommaso Poletti</b></sub></a><br /><a href="#question-tomma5o" title="Answering Questions">💬</a> <a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=tomma5o" title="Code">💻</a> <a href="#design-tomma5o" title="Design">🎨</a> <a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=tomma5o" title="Documentation">📖</a> <a href="#ideas-tomma5o" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-tomma5o" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://www.andreaverlicchi.eu"><img src="https://avatars3.githubusercontent.com/u/1127721?v=4" width="100px;" alt=""/><br /><sub><b>Andrea Verlicchi</b></sub></a><br /><a href="#question-verlok" title="Answering Questions">💬</a> <a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=verlok" title="Code">💻</a> <a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=verlok" title="Documentation">📖</a> <a href="#ideas-verlok" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://lorenzocamporesi.it"><img src="https://avatars3.githubusercontent.com/u/15997606?v=4" width="100px;" alt=""/><br /><sub><b>Lorenzo Camporesi</b></sub></a><br /><a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=LorenzoCamporesi" title="Code">💻</a> <a href="#ideas-LorenzoCamporesi" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/mandelli-davide/"><img src="https://avatars0.githubusercontent.com/u/25078541?v=4" width="100px;" alt=""/><br /><sub><b>Davide Mandelli</b></sub></a><br /><a href="https://github.com/tomma5o/ferraraDomicilio/issues?q=author%3ATh3Wall" title="Bug reports">🐛</a> <a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=Th3Wall" title="Code">💻</a></td>
    <td align="center"><a href="https://www.christianvarisco.com"><img src="https://avatars1.githubusercontent.com/u/7335613?v=4" width="100px;" alt=""/><br /><sub><b>Christian Varisco</b></sub></a><br /><a href="https://github.com/tomma5o/ferraraDomicilio/commits?author=CVarisco" title="Code">💻</a> <a href="#ideas-CVarisco" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Support this project

If this project has helped you in any way, a small contribution is welcome!
I can't guarantee it will be a coffee though 🍺

<a href="https://www.buymeacoffee.com/tomma5o" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" width="170px" ></a>