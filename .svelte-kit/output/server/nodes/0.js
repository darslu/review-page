import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Dghvn5GD.js","_app/immutable/chunks/legacy.BKtvFfwk.js","_app/immutable/chunks/runtime.CAQaYCc3.js","_app/immutable/chunks/i18n.DoFv87S1.js","_app/immutable/chunks/entry.CFtMtGOY.js","_app/immutable/chunks/index.CO1Q27f-.js","_app/immutable/chunks/index-client.DgjFkw8c.js","_app/immutable/chunks/render.Eb9ZH_O9.js","_app/immutable/chunks/if.DCIrtqk8.js","_app/immutable/chunks/bundle-mjs.Bfn3NTub.js","_app/immutable/chunks/lifecycle.CWq_QhHN.js","_app/immutable/chunks/props.CsUJYzN7.js","_app/immutable/chunks/Frame.BpMVq55e.js","_app/immutable/chunks/attributes.DDKjeBUs.js","_app/immutable/chunks/this.DLmH6BIA.js"];
export const stylesheets = ["_app/immutable/assets/0.B0rCx4ER.css"];
export const fonts = [];
