import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.OXJFpQ0X.js","_app/immutable/chunks/disclose-version.Ngrio3uf.js","_app/immutable/chunks/runtime.B8yr7RlE.js","_app/immutable/chunks/i18n.qxHLrD7p.js","_app/immutable/chunks/entry.CXypfH_8.js","_app/immutable/chunks/index.DfydkkRW.js","_app/immutable/chunks/utils.B9icjhNj.js","_app/immutable/chunks/stores.DzTGDMa0.js","_app/immutable/chunks/render.CibR8zfC.js","_app/immutable/chunks/if.CN7rCe4z.js","_app/immutable/chunks/bundle-mjs.DJ-AVjIe.js","_app/immutable/chunks/lifecycle.DFGkAeJ4.js","_app/immutable/chunks/props.EjNDRUzf.js","_app/immutable/chunks/store.B1g6_enR.js","_app/immutable/chunks/attributes.BinqIs3c.js","_app/immutable/chunks/Frame.D8kswh0M.js","_app/immutable/chunks/index-client.B4tOOGG-.js"];
export const stylesheets = ["_app/immutable/assets/0.6k95PsVb.css"];
export const fonts = [];
