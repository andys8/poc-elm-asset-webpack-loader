# `elm-asset-webpack-loader`

This project is a POC, how to require files/assets/images in Elm and use webpack plugins. One of the use cases is to have path safety on compile time, and use other webpack loaders to hash or optimize images.

## Usage

```elm
img [ src "require:src/assets/logo.svg" ] []
```
