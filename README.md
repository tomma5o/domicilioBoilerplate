# Ferrara a Domicilio

> If you want to make the same proj for your city, the only thing i ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) for make it yours.
> Thanks!

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

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Data source

All the data is fetched from this gist:
https://gist.githubusercontent.com/tomma5o/1ca63d091b01a2fa6a73a17cc86b8fe6/raw/FerraraDomicilio.json

When you add your gist remember to delete the last hash because points directly at a specific commit, for example:

```diff
+ https://gist.githubusercontent.com/tomma5o/1ca63d091b01a2fa6a73a17cc86b8fe6/raw/2456kdue3a17cc86b8fe6/FerraraDomicilio.json
- https://gist.githubusercontent.com/tomma5o/1ca63d091b01a2fa6a73a17cc86b8fe6/raw/FerraraDomicilio.json
```

## Deploy

The site is developed with some specific Netlify.com apis.
And if you want to add analytics just put it in your netlify admin panel
