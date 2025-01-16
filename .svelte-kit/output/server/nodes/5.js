

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/disclaimer/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BrFns2tY.js","_app/immutable/chunks/disclose-version.Ngrio3uf.js","_app/immutable/chunks/runtime.B8yr7RlE.js"];
export const stylesheets = [];
export const fonts = [];
