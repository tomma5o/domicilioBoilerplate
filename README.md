# Domicilio Boilerplate
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Netlify Status](https://api.netlify.com/api/v1/badges/928e6869-c807-4fae-9168-9e556e67bf00/deploy-status)](https://app.netlify.com/sites/ferraradomicilio/deploys)

> If you want to make the same proj for your city, the only thing I ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) to make it yours.
> Thanks!

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

## CLI Commands

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tomma5o.com"><img src="https://avatars0.githubusercontent.com/u/8134038?v=4" width="100px;" alt=""/><br /><sub><b>Tommaso Poletti</b></sub></a><br /><a href="https://github.com/tomma5o/domicilioBoilerplate/pulls?q=is%3Apr+reviewed-by%3Atomma5o" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!