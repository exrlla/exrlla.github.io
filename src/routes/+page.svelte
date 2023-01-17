<script>
  import SEO from '$lib/components/SEO.svelte';
  import { onMount } from 'svelte';

  const attributes = ['developer 👩🏽‍💻', 'student 📚', 'designer ✨', 'matcha lover 🍵'];
  const colors = ['#f86faa', '#8ea604', '#F5BB00', '#EC9F05', '#5EB1BF'];
  $: timer = 0; // timer for setInterval


    onMount(() => {
    const interval = setInterval(() => {
      timer+=1;
    }, 1500);
    return () => { clearInterval(interval); }
  });
  
</script>


<SEO title="Ellie's Page" />
<div class="mx-16 mt-20 md:mx-60 md:mt-40">
  <h2 class="font-Sora text-6xl italic">Hi, I'm
    {#each [...'Ellie!!!'] as letter, i}
    <span class="font-Shrikhand text-7xl pl-1"
    style="{`color: ${colors[i % colors.length]}`}">{letter}</span>
    {/each}
  </h2>
  <h2 class="font-Sora text-2xl flex italic">I'm a &nbsp; <span class="text-orange-400">{attributes[timer % attributes.length]}</span> </h2>
</div>


<div class="flex flex-col mx-16 md:mx-60 md:mt-10">
  
  
  <div class="lg:grid grid-cols-2 gap-6">
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
</div>


  