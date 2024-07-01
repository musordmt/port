<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '15px';
	export let classes = '';
</script>

<div style="border-radius: 20%; background-color: grey;">
	<img class={`rounded-${radius} ${classes} aspect-square`} {src} {alt} height={size} width={size} />
</div>
