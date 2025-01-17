

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/disclaimer/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CcJ-Q5zS.js","_app/immutable/chunks/legacy.BKtvFfwk.js","_app/immutable/chunks/runtime.CAQaYCc3.js"];
export const stylesheets = [];
export const fonts = [];
