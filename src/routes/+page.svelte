<script>
  import SEO from '$lib/components/SEO.svelte';
  import { onMount } from 'svelte';

  const attributes = ['listening to music!', 'drinking tea...', 'running a 5k!', 'playing stardew valley.', 'rock climbing!', 'drawing something fun.'];
  const colors = ['#4B844C', '#8ea604', '#F5BB00', '#EC9F05', '#5EB1BF', '#907ABB'];
  $: timer = 0; // timer for setInterval


    onMount(() => {
    const interval = setInterval(() => {
      timer+=1;
    }, 1500);
    return () => { clearInterval(interval); }
  });
  
</script>


<SEO title="Ellie's Page" />
<!-- the header title-->
<section class="mx-16 md:mx-60 3xl:mx-80">
  <div class="3xl:mx-60">
    <h2 class="font-Sora text-7xl italic">What if the internet was a little more
    {#each [...'different?'] as letter, i}
    <span class="font-Sora text-7xl pl-1"
    style="{`color: ${colors[i % colors.length]}`}">{letter}</span>
    {/each}
    </h2>
    <h2 class="font-Sora text-2xl ">Hi, I'm Ellie, I'm probably just &nbsp; <span class="text-green-800 italic">{attributes[timer % attributes.length]}</span> </h2>
  </div>
</section>

<!-- the about me section -->
<section class="mx-16 md:mx-60 3xl:mx-80">
  <div class="mt-20 flex flex-col items-center md:flex-row md:items-start">
    <img alt="" src="/assets/elliepfp.png" class="md:w-80 mx-auto mb-4">
    <p class="font-Sora mt-10 md:mt-0 md:ml-10 text-2xl md:text-4xl text-green-900">
      My name is Ellie Popoca, and I'm a student at the <span class="text-orange-500 font-bold">university of illinois</span> who cares a lot about technology,
      social good, and advocating for quality education. I study information science, human computer interaction,
      and minoring in <span class=" italic underline text-cyan-600">game studies and design.</span> I’m contributing to the world of the creative internet, 🌎 social good 🌎, and gamifying education! ✨
    </p>

</div>
</section>

<section class="mx-16 mt-20 md:mx-60 3xl:mx-80">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-Sora font-bold text-lime-600 mb-4">
      playground
    </h1>
    <ul class="list-disc underline">
      <li>
        <a href="https://bento.me/estrella" class="text-xl font-Sora hover:text-orange-600">
          bento.me/estrella
        </a>
      </li>
      <li>
        <a href="/" class="text-xl font-Sora hover:text-orange-600">
          breaking down Arc Browser
        </a>
      </li>
      <li>
        <a href="/" class="text-xl font-Sora hover:text-orange-600">
          I attended 20+ hackathons in 2022
        </a>
      </li>
      <li>
        <a href="/" class="text-xl font-Sora hover:text-orange-600">
          my tech tiktok!
        </a>
      </li>
      
    </ul>

  </div>
</section>


<!-- <div class="flex flex-col mx-16 md:mx-60 md:mt-10 3xl:mx-80">
  
  
  <div class="lg:grid grid-cols-2 gap-6 3xl:mx-60">
    <div class="bg-transparent hover:bg-orange-200 rounded-lg border-2 border-orange-300 mt-10 lg:mt-0">
      <a href="/mlh">
        <div class="mx-4 my-4 flex">
        <img alt="twitch logo" src="/assets/twitch.svg" class="w-8 mr-2">
        <h3 class="font-Sora text-sm text-gray-600 hover:text-gray-800 ml-2">I create design and coding streams for
          <a href="https://mlh.io/" class="text-red-600">Major League Hacking! </a> Check out all of the resources I make here!</h3>
      </div>
      </a>
    </div>

    <div class="bg-transparent hover:bg-orange-200 rounded-lg border-2 border-orange-300 mt-6 lg:mt-0">
      <a href="/resources">
        <div class="mx-4 my-4 flex">
        <img alt="star logo" src="/assets/star.svg" class="w-8 mr-2">
        <h3 class="font-Sora text-sm text-gray-600 hover:text-gray-800 ml-2">
          I make resources and guides! Check out some of my favorites for React, CSS, and getting involved in the hacker space!
        </h3>
      </div>
      </a>
    </div>

    <div class="bg-transparent hover:bg-orange-200 rounded-lg border-2 border-orange-300 mt-6 lg:mt-0 ">
      <a href="/design">
        <div class="mx-4 my-4 flex">
        <img alt="edit pencil" src="/assets/edit-2.svg" class="w-8 mr-2">
        <h3 class="font-Sora text-sm text-gray-600 hover:text-gray-800 ml-2">
          I like to design and illustrate! Check out some of my projects 👀
        </h3>
      </div>
      </a>
    </div>

    <div class="bg-transparent hover:bg-orange-200 rounded-lg border-2 border-orange-300 mt-6 lg:mt-0 ">
      <a href="/blog">
        <div class="mx-4 my-4 flex">
        <img alt="globe icon" src="/assets/globe.svg" class="w-8 mr-2">
        <h3 class="font-Sora text-sm text-gray-600 hover:text-gray-800 ml-2">
          Learn about ALL <strong>10+ hackathons</strong> I have coached including Uncommon Hacks at Uchicago and 
          HackGT 9 at Georgia Tech!
        </h3>
      </div>
      </a>
    </div>

  </div>
</div> -->


  