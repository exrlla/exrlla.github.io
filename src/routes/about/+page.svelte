<script>
  import SEO from '$lib/components/SEO.svelte';
</script>
<SEO title="About — Ellie's Page" />

<!-- Container for the entire screen -->
<div class="flex justify-center flex-col mx-12 xl:mx-60">

      <!-- ABOUT BLURB -->
      <div class="flex flex-col items-center lg:items-start lg:flex-row mb-10">
        <div>
        <img alt="Ellie's profile picture" class="w-90 md:w-80 rounded-lg" src="./assets/about_ellie.JPG">
        <div class="flex flex-col mt-4 md:w-80">
          <h2 class="b">My top songs of 2022 
            </br> — Jan and Dec! +*.｡(❁´◡`❁)｡.+* </h2>
          <img alt="Music player Taylor swift gif" class="rounded-lg mt-4 border-2 border-red-200" src="./assets/jan2022_music.gif">
          <img alt="Music player NIKI gif" class="rounded-lg mt-4 border-2 border-indigo-200" src="./assets/dec2022_music.gif">
          <iframe style="border-radius:10px; margin-top:16px" src="https://open.spotify.com/embed/playlist/4rpa6cJaNWzXu4MKbOT5Oi?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
          <div class="flex flex-col lg:mx-10 mt-6">
          <h2 class="a">
            Heyoo!!!! 🏄🏻‍♀️
          </h2>
          <p class="reg-text-main mr-2 mt-5">
            My name's Ellie Popoca, but you sometimes might see me as Estrella! (Star in English!) My pronouns are <span id="bolder-text">she/her</span> and <span id="bolder-text">they/them</span>! I'm a junior at UIUC, studying 
            information sciences with a minor in game studies and design! :sparkles: I'm passionate about social good, tech, and hackathons! 
          </br><br/>
            I care TONS about providing education opportunties to everyone! 👩🏽‍💻 Look at some of the stuff I'm working on below! I'm pretty invested
            in all things tech + of course, some fun stuff here and there!✨
          </p>
        </br></br>
        <div class="flex flex-row">
          <span class="mr-2">📍</span><p class="reg-text-main" id="bolder-text"> 
            Spring 2023: Where I'm traveling to next!
          </p>
        </div>
        <ul class="a ml-10 reg-text-main text-gray-500 mb-5 mt-2">
          <li>Coaching for <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">CruzHacks</span> @ UC Santa Cruz 🏝🌳 </li>
          <li>Hacking for <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">BoilerMake</span>  @ Purdue University 🚂 </li>
          <li>Attending <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">Harvard WeCode</span> @ Harvard University 🏫👩🏽‍💻</li>
          <li>Coaching for <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">Some Hackathon</span> @ UT Dallas</li>
          <li>Hacking for <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">AthenaHacks</span> @ USC! </li>
        </ul> 
        </div>

        
      </div> 

      
      <!-- END ABOUT BLURB -->
      <div class="flex justify-center">
        <img class="w-60 mb-4 mt-2" alt="Arrow pointing down" src="./assets/arrow_down.png">
      </div>




      <!-- 'CURRENTLY' SECTION -->
      <div class="flex justify-center mb-10">
        <img class="logo-sub-img mr-2"alt="happy emoticon" src="./assets/2.png">
        <h2 class="a">Currently...</h2>
      </div>

      <div class="flex-row justify-evenly align-middle lg:grid grid-cols-3 gap-x-4">
        <!-- CARD: HACKATHONS! -->
        <div class="bg-transparent rounded-lg border-4 border-purple-300 my-10">
          <div class="mx-10 my-10">
            <h3 class="blog-title-text">🌎 GOING PLACES</h3>
            <h2 class="b">@Jan, 2023 </h2>
            <p class="reg-text-main mt-6">
              I'm so excited to be traveling to so many places in the Spring of 2023! I'll be attending <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">Harvard WeCode</span> 
              at Harvard University, <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">BoilerMake</span> at Purdue University, and <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">AthenaHacks</span> at USC! 
              I'm also going to be coaching for <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">CruzHacks</span> at UC Santa Cruz and <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">Some Hackathon</span> at UT Dallas! 
              I'm so excited to be able to travel to all these places and meet so many amazing people!
          </div>
        </div>

          <!-- CARD: I'm a hackathon lead! -->
        <div class="bg-transparent rounded-lg border-4 border-purple-300 my-10">
          <div class="mx-10 my-10">
            <h3 class="blog-title-text">Organizing a Hackathon??!?!?</h3>
            <h2 class="b">@Jan, 2023 </h2>
            <p class="reg-text-main mt-6">
              I'm currently the hackathon lead for <span class="text-purple-300 underline decoration-indigo-300 decoration-wavy font-bold">WECEHacks @ UIUC</span>! I'm so excited to be working with an amazing team 
              to bring a hackathon to the UIUC community! We're planning to host the third iteration of WECEHacks in the Spring of 2023!
            </p>
          </div>
        </div>

        <!-- CARD: IDC -->
        <div class="bg-transparent rounded-lg border-4 border-purple-300 my-10">
          <div class="mx-10 my-10">
            <h3 class="blog-title-text">Designing for IDC — work work!</h3>
            <h2 class="b"> @Nov, 2022 </h2>
            <p class="reg-text-main mt-6">
              Excited for meeting my new project team for IDC! Last semester, I was a design consultant for the website redesign, and hoping for what comes next!! 
              I can't wait to see what we come up with!
            </p>
          </div>
        </div>

      </div>


      <div class="flex justify-center">
        <img class="w-60 mb-4 mt-2" alt="Arrow pointing down" src="./assets/arrow_down.png">
      </div>

      <!-- 'BLOG' SECTION -->
      <div class="flex justify-center my-10">
        <img class="logo-sub-img mr-4"alt="happy emoticon" src="./assets/1.png">
        <h2 class="a">I write sometimes :0</h2>
      </div>


      <!-- BLOG: Starting 100 days of Productivity  -->
<div class="mb-10" >

  <article class="rounded-lg flex bg-gray-100 transition hover:shadow-lg">
    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]"> 
      <time
        datetime="2022-12-31"
        class="flex items-center justify-between gap-4 blog-time-text"
      >
        <span>2022</span>
        <span class="w-px flex-1 bg-gray-900/10"></span>
        <span>Dec 31</span>
      </time>
    </div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt="Ellie standing in front of a HackGT stage"
          src="./assets/blog_1.JPG"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 class="blog-title-text">
              Why I'm starting 100 days of productivity
            </h3>
          </a>

          <p class="mt-3 body-main-text line-clamp-4">
            New year new me, and I'm starting up my Tumblr blog again alongisde 100 days of productivity! (And see why I'm doing it)
          </p>
        </div>

      <div class="sm:flex sm:items-end sm:justify-end">
        <a
          href="https://intgr4ls.tumblr.com/day/2022/12/31"
          class="block px-5 py-3 text-center blog-time-text transition"
        >
          Read on Tumblr
        </a>
      </div>
    </article>
</div>

   <!-- BLOG: I spoke to 1,000+ hackers at Georgia Tech  -->
    <div class="mb-10" >

  <article class="rounded-lg flex bg-gray-100 transition hover:shadow-sm">
    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]"> 
      <time
        datetime="2022-10-10"
        class="flex items-center justify-between gap-4 blog-time-text"
      >
        <span>2022</span>
        <span class="w-px flex-1 bg-gray-900/10"></span>
        <span>Oct 10</span>
      </time>
    </div>

    <div class="hidden sm:block sm:basis-56">
      <img
        alt="Ellie standing in front of a HackGT stage"
        src="./assets/blog_hackgt.jpg"
        class="aspect-square h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
        <a href="#">
          <h3 class="blog-title-text">
            I spoke to 1,000+ hackers at Georgia Tech for HackGt
          </h3>
        </a>

        <p class="mt-3 body-main-text line-clamp-4">
          In October, I was allocated by Major League Hacking to HackGT 9, a historically 1,000+ hacker event,
          where I coached the event and spoke to hackers from Georgia Tech! Learn about my experience and speaking to over 900 people in a single room for the first time...
        </p>
      </div>

      <div class="sm:flex sm:items-end sm:justify-end">
        <a
          href="#"
          class="block px-5 py-3 text-center blog-time-text transition"
        >
          Read on Medium
        </a>
      </div>

  </article>
</div>

</div>
