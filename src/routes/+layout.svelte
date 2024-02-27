<script>
	import '../app.css';
	import { HubzzLogo } from '$lib/assets/brands';
	import { BarsIconRegular } from '$lib/assets/icons';
</script>

<nav class="p-4 fixed h-20 z-50 top-0 left-0 right-0 w-full bg-neutral-900">
	<div class="flex items-center justify-between w-full">
		<a href="/">
			<HubzzLogo class="w-32 h-10 text-neutral-8" />
		</a>

		<button
			class="w-11 h-11 rounded-full border border-neutral-600 flex items-center justify-center"
		>
			<BarsIconRegular class="w-5 h-5 text-neutral-25 stroke-1.5" />
		</button>
	</div>
</nav>

<main class="mt-20">
	<slot />
</main>
