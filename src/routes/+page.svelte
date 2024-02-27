<script>
	import { ArrowRightFill } from '$lib/assets/icons';
	import { DiscordLogo, TelegramLogo, TwitterXLogo } from '$lib/assets/brands';
</script>

<div class="relative w-full">
	<header
		class="relative flex w-full flex-col items-center gap-20 px-4 pb-0 pt-6"
	>
		<section class="relative z-20">
			<h1 class="text-display-xs font-medium">
				<span class="text-neutral-25">Hubzz is a</span> social entertainment
				platform
				<span class="text-neutral-25"
					>that brings communities together in an</span
				> immersive open world.
			</h1>

			<p class="mt-3">
				Sign-up below to receive <span class="font-semibold"
					>early adopter rewards,</span
				> along with other beneficial info delivered straight to your inbox!
			</p>

			<div class="relative mt-8">
				<input
					type="text"
					placeholder="Email address"
					class="w-full rounded-full border border-neutral-600 bg-neutral-900 px-6 py-[1.125rem] text-neutral-8 outline-none placeholder:text-neutral-400"
				/>

				<button
					type="submit"
					class="absolute right-1.5 top-1/2 flex h-11 w-[3.75rem] -translate-y-1/2 items-center justify-center rounded-[2.5rem] bg-gradient-primary"
				>
					<ArrowRightFill class="h-5 w-5 text-neutral-25" />
				</button>
			</div>

			<div class="mt-8 flex items-center gap-4">
				<a
					target="_blank"
					href="/"
					class="flex h-8 w-8 items-center justify-center"
				>
					<TelegramLogo class="h-6 w-6 text-neutral-300" />
				</a>

				<a
					target="_blank"
					href="/"
					class="flex h-8 w-8 items-center justify-center"
				>
					<TwitterXLogo class="h-6 w-6 text-neutral-300" />
				</a>

				<a
					target="_blank"
					href="/"
					class="flex h-8 w-8 items-center justify-center"
				>
					<DiscordLogo class="h-6 w-6 text-neutral-300" />
				</a>
			</div>
		</section>

		<section class="relative z-20 flex w-full justify-center">
			<div class="relative z-10 h-[25rem] w-[21rem]">
				<img
					class="h-full w-full object-contain"
					src="/home/hero-1.png"
					alt="hero-1"
				/>
			</div>

			<img
				class="absolute bottom-4 left-5 z-10 h-16 w-auto"
				src="/home/doges-1.png"
				alt="doges-1"
			/>
		</section>

		<div
			class="absolute bottom-0 left-0 z-30 h-[8.25rem] w-full"
			style="background: linear-gradient(141deg, rgba(24, 27, 31, 0.00) 28.39%, rgba(24, 27, 31, 0.00) 47.8%, #181B1F 111%);"
		/>
		<div
			class="absolute bottom-0 left-0 -z-10 h-full w-full"
			style="background: linear-gradient(187deg, #181B1F 40%, rgba(24, 27, 31, 0.00) 79%);"
		/>

		<img
			class="absolute bottom-0 left-0 -z-20 h-full w-full"
			src="/home/bg-grid-1.png"
			alt="bg-ellipse-1"
		/>

		<img
			class="absolute bottom-0 left-0 -z-30 h-64 w-full"
			src="/home/bg-ellipse-1.png"
			alt="bg-ellipse-1"
		/>
	</header>

	<footer
		class="relative z-10 w-full bg-neutral-900 p-4 text-center text-sm text-neutral-500"
	>
		© 2024 HUBZZ INC. All rights reserved
	</footer>
</div>
