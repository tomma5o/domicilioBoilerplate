# # Imola a Domicilio

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad921e79-fd5e-46a8-a3bf-b661e3d86dba/deploy-status)](https://app.netlify.com/sites/imoladomicilio/deploys)

> If you want to make the same proj for your city, the only thing I ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) to make it yours.
> Thanks!

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
2. Change the city in the `template.html` file
3. Change the **name** and **short_name** inside `manifest.json`
4. Change the **name** inside `package.json`

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

```bash
# install dependencies
npm install

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Support this project

If this project has helped you in any way, a small contribution is welcome!
I can't guarantee it will be a coffee though 🍺

<a href="https://www.buymeacoffee.com/tomma5o" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" width="170px" ></a>