<script lang="ts">
	import '../app.css';

	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$i18n/i18n';

	import { Head } from '$components/@main';
</script>

<ParaglideJS {i18n}>
	<Head />

	<div class="grid grid-rows-[auto_1fr_auto]">
		<!-- Header -->
		{#if $$slots.header}
			<header class="sticky top-0 z-10 bg-red-500/80 p-4 backdrop-blur-sm">
				<slot name="header" />
			</header>
		{/if}
		<!-- Page -->
		<div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
			<!-- Sidebar (Left) -->
			<!-- NOTE: hidden in smaller screen sizes -->
			{#if $$slots.sidebarLeft}
				<aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">
					<slot name="sidebarLeft" />
				</aside>
			{/if}
			<!-- Main -->
			<main class="col-span-1 space-y-4 bg-green-500 p-4">
				<slot />
			</main>
			<!-- Sidebar (Right) -->
			<!-- NOTE: hidden in smaller screen sizes -->
			{#if $$slots.sidebarRight}
				<aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">
					<slot name="sidebarRight" />
				</aside>
			{/if}
		</div>
		<!-- Footer -->
		{#if $$slots.footer}
			<footer class="bg-blue-500 p-4">
				<slot name="footer" />
			</footer>
		{/if}
	</div>
</ParaglideJS>
