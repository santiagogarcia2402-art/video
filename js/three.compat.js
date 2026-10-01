// Compatibility barrel for three r186: the mind-ar bundle still imports the
// `sRGBEncoding` constant that was removed from three (r162+). It's only used
// to assign `renderer.outputEncoding` (a no-op in modern three), so exporting
// `undefined` is safe. Everything else comes from three.module.js.
export * from './three.module.js';
export const sRGBEncoding = undefined;