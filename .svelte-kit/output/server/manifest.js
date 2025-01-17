export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "darslu.github.io/_app",
	assets: new Set(["favicon.png","images/best-boxers-2025.jpg","images/chart-durability.png","images/curves.jpg","images/dariaus-profile.jpg","images/darntough.png","images/icebreaker-boxers.jpg","images/icebreaker-boxers.png","images/icebreaker-logo.png","images/icebreaker.png","images/logo.svg","images/lululemon-boxers.jpg","images/lululemon-boxers.png","images/lululemon-logo.png","images/medal.svg","images/menique-boxers.jpg","images/menique-boxers.png","images/menique-logo.png","images/merino-sheep.jpg","images/minus33.png","images/number1.svg","images/patagonia-boxers.jpg","images/patagonia-boxers.png","images/patagonia-logo.png","images/patagonia.png","images/recommend.svg","images/smartwool-boxers.jpg","images/smartwool-boxers.png","images/smartwool-logo.png","images/smartwool.png","images/tailwind.config.ts","images/Trustpilot_Logo__2022__svg.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".ts":"video/mp2t",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.B2nf95kT.js","app":"_app/immutable/entry/app.D49lU0bH.js","imports":["_app/immutable/entry/start.B2nf95kT.js","_app/immutable/chunks/entry.CFtMtGOY.js","_app/immutable/chunks/runtime.CAQaYCc3.js","_app/immutable/chunks/index.CO1Q27f-.js","_app/immutable/chunks/index-client.DgjFkw8c.js","_app/immutable/entry/app.D49lU0bH.js","_app/immutable/chunks/i18n.DoFv87S1.js","_app/immutable/chunks/legacy.BKtvFfwk.js","_app/immutable/chunks/runtime.CAQaYCc3.js","_app/immutable/chunks/entry.CFtMtGOY.js","_app/immutable/chunks/index.CO1Q27f-.js","_app/immutable/chunks/index-client.DgjFkw8c.js","_app/immutable/chunks/render.Eb9ZH_O9.js","_app/immutable/chunks/if.DCIrtqk8.js","_app/immutable/chunks/props.CsUJYzN7.js","_app/immutable/chunks/this.DLmH6BIA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
