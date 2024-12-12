import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B90ChM7u.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.1leVv6K8.js","_app/immutable/chunks/utils.DNXFTXOW.js","_app/immutable/chunks/i18n.B_bEFHsy.js","_app/immutable/chunks/entry.NbQQeXeT.js","_app/immutable/chunks/index.BYBHISAS.js","_app/immutable/chunks/stores.CoE39tvr.js","_app/immutable/chunks/store.C_k5hwti.js","_app/immutable/chunks/index-client.8U-tRCaW.js","_app/immutable/chunks/Frame.Cfy6tkXl.js","_app/immutable/chunks/index.BMiruCca.js","_app/immutable/chunks/lifecycle.CeDcA8c6.js"];
export const stylesheets = ["_app/immutable/assets/0.DCgTb6P0.css"];
export const fonts = [];
