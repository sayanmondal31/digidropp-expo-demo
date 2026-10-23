# Digidropp Expo demo

A one-screen Expo app for testing [Digidropp](https://digidropp.online) automatic builds.

- Android package: `online.digidropp.expodemo` (set in `app.json`; the build needs it)
- The `android/` folder isn't committed. The Digidropp workflow generates it with `npx expo prebuild` on each build.
- Connect this repo in Digidropp under **Automatic builds**. Digidropp opens a pull request that adds
  `.github/workflows/digidropp.yml`; merge it, and every push to `main` builds a release APK and updates
  the install link. Pull requests get their own preview link.

Run locally: `npm install`, then `npx expo start`
