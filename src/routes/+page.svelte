<script>
	import Post from './../lib/components/Post.svelte';
	import Intro from '../lib/assets/lotties/Intro.svelte';
</script>

<section class="text-left *:ml-5 *:text-2xl">
	<div class="flex items-center">
		<div class="flex flex-col">
			<h1>Hi, I'm Arsalan Mohseni</h1>
			<p>A fullstack web developer that loves to build things.</p>
			<p>
				I'm currently working on a project called <a
					href="https://github.com/arsalanmohseni/sveltekit-blog">Sveltekit Blog</a
				> that is a blog built with SvelteKit and Tailwind CSS.
			</p>
			<p>
				I'm also a big fan of <a href="https://www.typescriptlang.org/">Typescript</a>,
				<a href="https://svelte.dev/">Svelte and Sveltekit</a>,
				<a href="https://tailwindcss.com/">Tailwind CSS</a>
				and <a href="https://nextjs.org/">React and Next JS</a>.
			</p>
			<p>
				If you want to contact me, you can find me on <a
					href="https://github.com/arsalanmohseni">Github</a
				>
			</p>
		</div>
		<Intro />
	</div>
</section>

<section class="ml-5 mt-10">
	<h3 class="ml-5 text-center text-4xl font-black">The most recent posts</h3>
    <Post title="First post!" description={`Hi! This is the first post of my blog. This post was posted on 2024-11-08 do this date is the start of my blog. In this blog I will post about things that I learned, Tips & Tricks, news about programming and what's new in things in programming.`} imgsrc="/images/posts/first-post.png" imgalt="First post" />
</section>
