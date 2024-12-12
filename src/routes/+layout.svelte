<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Header from '../stories/Header.svelte';
	import Footer from '../stories/Footer.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header></Header>
	{@render children()}
	<Footer></Footer>
</ParaglideJS>
