/* eslint-disable no-console */
const fsp = require('fs/promises');
const path = require('path');

const pkg = require('../package.json');
const manifest = require('../src/constants/manifest');

(async () => {
  const icons = manifest.icon.main.map((size) => ({
    src: `/icons/android-chrome-${size}.png`,
    type: 'image/png',
    sizes: size
  }));

  const manifestContent = {
    name: manifest.name,
    short_name: manifest.name,
    version: pkg.version,
    description: manifest.description,
    background_color: manifest.backgroundColor,
    theme_color: manifest.themeColor,
    start_url: '/',
    display: 'standalone',
    scope: '/',
    icons
  };

  const browserConfigIcon = Object.entries(manifest.icon.msTile)
    .map(([key, value]) => `<${value}${key}logo src="/icons/mstile-${key}.png" />`)
    .join('\n\t\t\t');

  const browserConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      ${browserConfigIcon}
      <TileColor>${manifest.themeColor}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

  const publicPath = path.resolve(__dirname, '../public');
  const manifestPath = path.resolve(publicPath, 'manifest.json');
  const browserConfigPath = path.resolve(publicPath, 'browserconfig.xml');

  try {
    await Promise.all([
      fsp.writeFile(manifestPath, JSON.stringify(manifestContent, null, 2), { encoding: 'utf-8' }),
      fsp.writeFile(browserConfigPath, browserConfigContent, { encoding: 'utf-8' })
    ]);
    console.log(
      '\x1b[32m%s\x1b[0m',
      `Generate manifest file ${manifestPath} and browserconfig file ${browserConfigPath} success 🚀`
    );
  } catch (error) {
    console.log(
      '\x1b[31m%s\x1b[0m',
      `Couldn't generate manifest file ${manifestPath}
      and broserconfig file ${browserConfigPath} 🤦 .
      Error: ${error.message}`
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
    );
  }
})();
