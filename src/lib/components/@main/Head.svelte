<svelte:head>
	<!-- Default meta -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<!-- Fonts -->
	<script>
		(function (d) {
			var config = { kitId: 'lnv7ujg', scriptTimeout: 3000, async: false },
				h = d.documentElement,
				t = setTimeout(function () {
					h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
				}, config.scriptTimeout),
				tk = d.createElement('script'),
				f = false,
				s = d.getElementsByTagName('script')[0],
				a;
			h.className += ' wf-loading';
			tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
			tk.async = true;
			tk.onload = tk.onreadystatechange = function () {
				a = this.readyState;
				if (f || (a && a != 'complete' && a != 'loaded')) return;
				f = true;
				clearTimeout(t);
				try {
					Typekit.load(config);
				} catch (e) {}
			};
			s.parentNode.insertBefore(tk, s);
		})(document);
	</script>
</svelte:head>
