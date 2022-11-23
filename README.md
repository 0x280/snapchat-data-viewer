# snapchat-data-viewer

## Project setup

```console
yarn install
```

### Compiles and hot-reloads for development

```console
yarn serve
```

### Compiles and minifies for production

```console
yarn build
```

### Run your unit tests

```console
yarn test:unit
```

### Lints and fixes files

```console
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploy

```console
docker rm -f snapchat_data_viewer 2> /dev/null \
&& \
docker run \
    -dp 3435:80 \
    --restart=always \
    --name snapchat_data_viewer\
    ghcr.io/0x280/snapchat-data-viewer
```
