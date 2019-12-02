import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-e8d0ea3b.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component",{"api":[16],"amount":[32],"currency":[32],"refresh":[64]}]]]], options);
});
