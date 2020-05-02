# Kwarantine Client (Next.js)

## Deploy

```
cd client
# update src/Config for the PROD config
npm run build
npm run export
rm -rf ../server/public/*
cp -a out/ ../server/public
```