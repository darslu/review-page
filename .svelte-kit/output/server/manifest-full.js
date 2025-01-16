export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "darslu.github.io/_app",
	assets: new Set(["favicon.png","images/best-boxers-2025.jpg","images/chart-durability.png","images/curves.jpg","images/dariaus-profile.jpg","images/darntough.png","images/icebreaker-boxers.jpg","images/icebreaker-boxers.png","images/icebreaker-logo.png","images/icebreaker.png","images/logo.svg","images/lululemon-boxers.jpg","images/lululemon-boxers.png","images/lululemon-logo.png","images/medal.svg","images/menique-boxers.jpg","images/menique-boxers.png","images/menique-logo.png","images/merino-sheep.jpg","images/minus33.png","images/number1.svg","images/patagonia-boxers.jpg","images/patagonia-boxers.png","images/patagonia-logo.png","images/patagonia.png","images/recommend.svg","images/smartwool-boxers.jpg","images/smartwool-boxers.png","images/smartwool-logo.png","images/smartwool.png","images/Trustpilot_Logo__2022__svg.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CZ0-3MdQ.js","app":"_app/immutable/entry/app.CVEjE0I5.js","imports":["_app/immutable/entry/start.CZ0-3MdQ.js","_app/immutable/chunks/entry.CXypfH_8.js","_app/immutable/chunks/runtime.B8yr7RlE.js","_app/immutable/chunks/index.DfydkkRW.js","_app/immutable/chunks/utils.B9icjhNj.js","_app/immutable/entry/app.CVEjE0I5.js","_app/immutable/chunks/i18n.qxHLrD7p.js","_app/immutable/chunks/disclose-version.Ngrio3uf.js","_app/immutable/chunks/runtime.B8yr7RlE.js","_app/immutable/chunks/entry.CXypfH_8.js","_app/immutable/chunks/index.DfydkkRW.js","_app/immutable/chunks/utils.B9icjhNj.js","_app/immutable/chunks/stores.DzTGDMa0.js","_app/immutable/chunks/render.CibR8zfC.js","_app/immutable/chunks/if.CN7rCe4z.js","_app/immutable/chunks/props.EjNDRUzf.js","_app/immutable/chunks/store.B1g6_enR.js","_app/immutable/chunks/index-client.B4tOOGG-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/disclaimer",
				pattern: /^\/disclaimer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/the-best-mens-boxer-briefs-money-can-buy-2025",
				pattern: /^\/the-best-mens-boxer-briefs-money-can-buy-2025\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
