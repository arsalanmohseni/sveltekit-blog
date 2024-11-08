<script>
	export let title;
	export let description;
	export let imgsrc;
	export let imgalt;
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
	<figure>
		<img
			src={imgsrc}
			alt={imgalt}
		/>
	</figure>
	<div class="card-body">
		<h3 class="card-title">{title}</h3>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Let's read!</button>
		</div>
	</div>
</div>
