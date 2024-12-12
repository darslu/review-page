export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "darslu.github.io/_app",
	assets: new Set(["favicon.png","images/dariaus-profile.jpg","images/darntough.png","images/icebreaker.png","images/logo.jpg","images/menique-logo.png","images/merino-sheep.jpg","images/minus33.png","images/pantagonia.png","images/smartwool.png","images/Trustpilot_Logo__2022__svg.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CJycCxzi.js","app":"_app/immutable/entry/app.CUw0icg7.js","imports":["_app/immutable/entry/start.CJycCxzi.js","_app/immutable/chunks/entry.NbQQeXeT.js","_app/immutable/chunks/runtime.1leVv6K8.js","_app/immutable/chunks/index.BYBHISAS.js","_app/immutable/entry/app.CUw0icg7.js","_app/immutable/chunks/i18n.B_bEFHsy.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/entry.NbQQeXeT.js","_app/immutable/chunks/runtime.1leVv6K8.js","_app/immutable/chunks/index.BYBHISAS.js","_app/immutable/chunks/stores.CoE39tvr.js","_app/immutable/chunks/store.C_k5hwti.js","_app/immutable/chunks/utils.DNXFTXOW.js","_app/immutable/chunks/index-client.8U-tRCaW.js","_app/immutable/chunks/svelte-component.Bkg8UJzR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/review",
				pattern: /^\/review\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
