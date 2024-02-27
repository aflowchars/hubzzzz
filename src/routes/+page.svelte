<script>
	import { ArrowRightFill } from '$lib/assets/icons';
	import { DiscordLogo, TelegramLogo, TwitterXLogo } from '$lib/assets/brands';
</script>

<div class="relative w-full overflow-x-hidden">
	<header class="relative min-h-[calc(100vh_-_80px)] w-full">
		<div
			class="container mx-auto flex min-h-[calc(100vh_-_80px)] max-w-screen-xl flex-col items-start gap-20 px-4 pb-0 pt-6 md:px-16 lg:flex-row-reverse lg:items-center xl:items-end xl:px-10"
		>
			<section class="relative z-20 xl:flex-1 xl:pb-14">
				<h1
					class="md:text-display-sm xl:text-display-md text-display-xs font-medium"
				>
					<span class="text-neutral-25">Hubzz is a</span> social <br />
					entertainment platform
					<span class="text-neutral-25"
						>that brings communities together in an</span
					> immersive open world.
				</h1>

				<p class="md:text-md mt-3 text-sm md:mt-4">
					Sign-up below to receive <span class="font-semibold">
						early adopter rewards,
					</span> along with other beneficial info delivered straight to your inbox!
				</p>

				<div class="relative mt-8 md:mt-10">
					<input
						type="text"
						placeholder="Email address"
						class="w-full rounded-full border border-neutral-600 bg-neutral-900 px-6 py-[1.125rem] pr-20 text-neutral-8 outline-none placeholder:text-neutral-400"
					/>

					<button
						type="submit"
						class="absolute right-2 top-1/2 flex h-11 w-[3.75rem] -translate-y-1/2 items-center justify-center rounded-[2.5rem] bg-gradient-primary"
					>
						<ArrowRightFill class="h-5 w-5 text-neutral-25" />
					</button>
				</div>

				<div class="mt-8 flex items-center gap-4 md:mt-10">
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

				<footer
					class="text-md mt-40 hidden text-right text-neutral-500 xl:block"
				>
					© 2024 HUBZZ INC. All rights reserved
				</footer>
			</section>

			<section
				class="relative z-20 flex items-start justify-end md:max-w-[637px] xl:min-h-[calc(100vh_-_104px)] xl:items-end xl:justify-end"
			>
				<div class="relative z-10 block max-h-[25rem] max-w-[21rem] md:hidden">
					<img
						class="h-full w-full object-contain"
						src="/home/hero-1.png"
						alt="hero-1"
					/>
				</div>

				<div class="relative z-10 hidden h-auto w-full md:block">
					<img
						class="h-full w-full object-contain"
						src="/home/hero-1-desktop.png"
						alt="hero-1"
					/>
				</div>

				<img
					class="absolute bottom-4 left-5 z-10 h-16 w-auto md:h-20 xl:h-24"
					src="/home/doges-1.png"
					alt="doges-1"
				/>
			</section>
		</div>

		<div
			class="absolute bottom-0 left-0 z-30 h-[8.25rem] w-full"
			style="background: linear-gradient(141deg, rgba(24, 27, 31, 0.00) 28.39%, rgba(24, 27, 31, 0.00) 47.8%, #181B1F 111%);"
		/>

		<div
			class="absolute bottom-0 left-0 -z-10 block h-full w-full md:hidden"
			style="background: linear-gradient(187deg, #181B1F 40%, rgba(24, 27, 31, 0.00) 79%);"
		/>

		<div
			class="absolute bottom-0 left-0 -z-10 hidden h-full w-full md:block"
			style="background: linear-gradient(223deg, #181B1F 68%, rgba(24, 27, 31, 0.00) 105.03%);"
		/>

		<img
			class="absolute bottom-0 left-0 -z-20 block h-full w-full md:hidden"
			src="/home/bg-grid-1.png"
			alt="bg-grid-1"
		/>

		<img
			class="absolute bottom-0 left-0 -z-30 hidden h-full w-8/12 md:block"
			src="/home/bg-grid-1-desktop.png"
			alt="bg-grid-dekstop-1"
		/>

		<img
			class="absolute bottom-0 left-0 -z-30 block h-64 w-full md:-z-20 md:hidden"
			src="/home/bg-ellipse-1.png"
			alt="bg-ellipse-1"
		/>

		<img
			class="absolute bottom-0 left-0 -z-40 hidden h-[600px] w-[600px] md:block"
			src="/home/bg-ellipse-1-behind-grid-desktop.png"
			alt="bg-ellipse-1"
		/>

		<div
			class="absolute bottom-0 left-[32%] -z-10 hidden h-[355px] w-[355px] bg-[#391CFF]/25 blur-[117px] md:block"
		/>

		<div
			class="absolute bottom-0 left-0 z-10 h-32 w-full"
			style="background: linear-gradient(141deg, rgba(24, 27, 31, 0.00) 28.39%, rgba(24, 27, 31, 0.00) 47.8%, #181B1F 111%);"
		></div>
	</header>

	<div
		class="fixed -right-[182px] -top-[324px] hidden h-[430px] w-[430px] rounded-full bg-[#391CFF] blur-[182px] md:block"
	/>

	<footer
		class="relative z-10 block w-full bg-neutral-900 p-4 text-center text-sm text-neutral-500 md:hidden"
	>
		© 2024 HUBZZ INC. All rights reserved
	</footer>
</div>
