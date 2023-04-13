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
<div class="flex justify-between mx-6 lg:mx-14 mt-10">
<img alt="tab decoration"  src="/src/tab.png" class="w-60">
<nav class="">
  <ul class="flex space-x-2">
    <li><a class="underline text-orange-400" href="/about">who is ellie</a> |</li>
    <li><a class="underline text-orange-400" href="/about">thoughts in writing ⏰</a> |</li>
    <li><a class="underline text-orange-400" href="/projects">projects</a> |</li>
    <li><a class="underline text-orange-400" href="https://drive.google.com/file/d/1_I-QbZ20EibbFUCOnsnILqTBThV9O_Nm/view?usp=sharing">resume</a> | </li>
</nav>
</div>
<!-- Overall Container -->
<div class="flex mx-6 lg:mx-14 bg-white h-auto px-10 py-10 flex-wrap">


<div class="md:flex">

  <!-- ############  COL 1 ########### -->
  <div class="md:mr-10 md:w-1/5 mx-auto">
    <!-- Name Header -->
    <div class="flex flex-col items-center">
      <h1 class="font-Inter font-bold italic text-center text-4xl text-purple-300">ELLIE POPOCA!!</h1>
      <img alt="ellie popoca" src="/assets/about_ellie.JPG" class="w-full h-80 object-cover rounded-lg mt-6">
    </div>

    <!-- About me -->
    <div class="flex mt-2 font-Inter">
      <img alt="purple jelly pop pixel art" src="/assets/jellypop.png" class="w-14 h-14 mr-2">
      <p class="text-gray-500 mt-2"><span class="text-orange-400">she/they ₊˚ʚ ᗢ₊˚✧ ﾟ</span>infp, <br/> studying info sci @ uiuc </p>
    </div>

    <!-- Social Links -->
    <div class="mt-4 flex flex-col">
      <p class="font-Inter font-bold text-lg">☇ LINKS!</p>
      <p class="text-orange-400">
      <a href="https://holder/png" class="underline">my substack |</a>
      <a href="https://holder/png" class="underline">twt for my tech interests |</a>
      <a href="https://holder/png" class="underline">code insta |</a>
      <a href="https://holder/png" class="underline">github!~ </a>
      </p>
    </div>

    <!-- My current jobs -->
    <div class="mt-6 flex flex-col font-Inter">
      <p class="font-bold text-lg mb-2"> <span class="text-black">☇ </span>CURRENTLY</p>
      <p>I'm an incoming <span class="text-cyan-600 font-semibold">Technical Project Manager Intern </span>for Acxiom, Summer 2023</p>
      <p class="mt-4">I'm a <span class="text-cyan-600 font-semibold">Product Designer </span>or Illinois Design Consulting under Gies School of Business @ Illinois </p>
      <p class="mt-4">Coaching at Hackathons for <span class="text-cyan-600 font-semibold">Major League Hacking </span></p>
    </div>

    <!-- Spotity embeds -->
    <div class="mt-6 flex flex-col font-Inter">
      <p class="font-bold text-lg mb-2"> <span class="text-black">☇ </span>MY BOPS 🎧₊˚ʚ₊˚✧ </p>
      <iframe title="spotify-track-1" class="border-none w-full h-20" src="https://open.spotify.com/embed/track/5nUDcx6mps8VXSpru1x2qz?utm_source=generator"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe title="spotify-track-1" class="border-none w-full h-20 mt-2" src="https://open.spotify.com/embed/track/12M5uqx0ZuwkpLp5rJim1a?si=e789e74c21f74b63" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

  </div>





  <!-- ############  COL 2 ########### -->
  <div class="md:mr-6 md:w-2/5">
    <!-- Purple Text Box -->
    <div class="mt-10 md:mt-0">
      <div class="font-Inter bg-purple-200">
        <h1 class="align-middle py-2 pl-2 font-semibold italic text-violet-500 border-2 border-violet-400 text-sm"># I STREAM ON MLH TWITCH.TV~ :^) </h1>
      </div>
      <div class="border-l-2 border-r-2 border-b-2 border-gray-400">
        <p class="p-2"><a href="https://ghw.mlh.io/" class="underline text-orange-400">Global Hack Week </a> is a Major League Hacking Initiative, where students from all over the world tune in to complete daily challenges for a week every month. As an MLH Coach, I make some twitch streams about fun topics regarding ux design, web dev, and non profit work ✨
        check out my stream docs!  </p>
      </div>
    </div>

    <!-- Current Projects Summer Blurb -->
    <div class="mt-6">
      <img src="/assets/Bg_Bg.jpeg" alt="" class="w-full h-56 md:h-full object-cover rounded-md border-2 border-black">
      <p class="text-xs mt-1 text-gray-400"> from @poqu_a_doodle on twt | <a class="underline" href="https://twitter.com/poqu_a_doodle">source</a> </p>
      <h1 class="my-2 text-md font-bold text-center">SUMMER 2023 | UPCOMING + UPDATES! </h1>
      <p class="text-gray-500 text-md text-justify">
        This Summer, I’m interning as a Project Manager for Acxiom. During my time of side projects and learning this summer, 
        I hope to level up my skill in Ruby(just for fun), Python(i love data science), Unreal Engine(Making more games), and Adobe Illustrator! 
        Alongside learning, I hope to travel to some cool places this summer with some of my good friends! Follow along with me on 
        Twitter and Substack Blog for updates on my summer!
      </p>
    </div>
  </div>


  <!-- ############  COL 3 ########### -->
  <div class="md:w-2/5">
  <!-- Purple Text Box -->
  <div class="mt-6 md:mt-0">
    <div class="font-Inter bg-purple-200">
      <h1 class="align-middle py-2 pl-2 font-semibold italic text-violet-500 border-2 border-violet-400 text-sm"># I RLLY LIKE HACKATHONS ^-^ </h1>
    </div>
    <div class="border-l-2 border-r-2 border-b-2 border-gray-400">
      <p class="p-2">
        I learned to code at a hackathon back in 2019, and since the, have never looked back. Becoming a hackathon Coach for MLH developed a new perspective for how opportunities can make a difference in a multitude of communities. 
      <br/><br/>
        Some of my fave hackathons include Uncommon Hacks @ UChicago 2022,
      HackGT (Georgia Tech) 2022,
      FronteraHacks 2023, and
      HackKU 2022.
      <br/><br/>
      <a class="text-orange-400 underline"href="https://smaple.com">Learn more about the 20+ hackathons I have been to + speaking to over 900 hackers at Georgia Tech! </a>
    </div>
  </div>
</div>

</div>
  
</div>