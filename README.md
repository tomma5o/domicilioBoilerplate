# Ferrara a Domicilio

> If you want to make the same proj for your city, the only thing i ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) for make it yours.
> Thanks!

## How to

1. Change the specific label related to me and my city are inside the `.env` file, if you change that the js is now clean ;)
2. Change the city in `template.html` file
3. Change the **name** and **short_name** inside `manifest.json`
4. Change the **name** inside `package.json`

## Data source

All the data is fetched from this gist:
https://gist.githubusercontent.com/tomma5o/1ca63d091b01a2fa6a73a17cc86b8fe6/raw/FerraraDomicilio.json

When you add your gist url remember to delete the last hash because points directly to a specific commit, otherwise you have an outdated version, so for example:

```
remove the second hash ------------------------------------┐
                                                         
https://gist.githubusercontent.com/tomma5o/<hash>/raw/<removeThisHash>/FerraraDomicilio.json
```

## Deploy

The site is developed with some specific https://netlify.com apis.
And if you want to add analytics just put it in your netlify admin panel

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