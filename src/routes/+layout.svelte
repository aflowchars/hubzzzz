<script>
	import '../app.css';
	import { HubzzLogo } from '$lib/assets/brands';
	import { BarsIconRegular, EnvelopeIconRegular } from '$lib/assets/icons';
</script>

<nav
	class="md:bg-transparent fixed left-0 right-0 top-0 z-50 h-20 w-full bg-neutral-900"
>
	<div
		class="container mx-auto flex w-full max-w-screen-xl items-center justify-between p-4 md:px-16 lg:px-10 lg:pb-5 lg:pt-9"
	>
		<a href="/">
			<HubzzLogo class="h-10 w-32 text-neutral-8" />
		</a>

		<div class="block xl:hidden">
			<button
				class="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-600"
			>
				<BarsIconRegular class="h-5 w-5 stroke-1.5 text-neutral-25" />
			</button>
		</div>

		<div class="hidden items-center gap-8 xl:flex">
			<a href="/" class="relative flex items-center gap-2 py-3">
				<EnvelopeIconRegular class="h-5 w-5 stroke-2 text-neutral-400" />
				<span class="text-sm font-medium text-neutral-300"> Contact Us </span>
			</a>

			<a
				href="/"
				class="relative flex items-center gap-3 rounded-full border border-neutral-600 px-5 py-3 outline-none transition-all duration-300 ease-in-out hover:bg-neutral-8/5"
			>
				<img class="h-5 w-4" src="/general/rocket-icon.png" alt="rocket-icon" />
				<span class="text-sm font-semibold text-neutral-25"> Launch Demo </span>
			</a>
		</div>
	</div>
</nav>

<main class="pt-20 md:min-h-screen">
	<slot />
</main>
