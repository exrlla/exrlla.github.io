<script>
  import SEO from '$lib/components/SEO.svelte';
  import { onMount } from 'svelte';
  import { Avatar } from 'flowbite-svelte';
  import Ellie from '../assets/ellie_prof.jpg'
  import { TerminalIcon, SendIcon, HeartIcon } from 'svelte-feather-icons'

  let home = true;
  let projects = false;
  let readHackathons = false;
  let readAbout = false;

  function changeStateTrue() {
    home = !home;
    projects = !projects;

  }

  function changeStateFalse() {
    home = true;
    projects = false;
    readHackathons = false;
    readAbout = false;
  }

  // function changeStateHackathons() {
  //   readHackathons = !readHackathons;
  //   readAbout = false;
  //   home = false;
  //   projects = false;

  // }

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


<SEO title="Ellie Popoca" metadescription="Ellie Popoca is a student at UIUC studying Information Science and Game Design." />

<div class="h-screen bg-gradient-to-br from-[#F7B2B7] via-[#FE938C] to-[#DE639A]">
<section class="flex justify-center min-h-screen py-10 "> 
  
  <div class="bg-rose-400 w-3/4 rounded-xl flex border-pink-300 border-2">
    <div class="flex flex-col justify-between">
      <div class="flex flex-col">
        <div class="flex">
          {#if home}
            <button class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 py-6 rounded-xl ml-3 my-3 border-pink-300 border-2">
            🏠
            </button>
            
            <button on:click={changeStateTrue} class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 rounded-xl m-3 border-transparent border-2">
              🌎
            </button>
            <a class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 rounded-xl my-3 mr-3 py-6" href="https://drive.google.com/file/d/19gv7iZ0Yoe8gHru2aQPzifO5hSjP_IDb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button >
              📁
            </button>
          </a>
          {/if}

          {#if projects}
            <button on:click={changeStateFalse} class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 py-6 rounded-xl ml-3 my-3 border-transparent border-2">
            🏠
            </button>
            
            <button class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 rounded-xl m-3  border-pink-300 border-2">
              🌎
            </button>
            <a class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 py-6 rounded-xl my-3 mr-3" href="https://drive.google.com/file/d/19gv7iZ0Yoe8gHru2aQPzifO5hSjP_IDb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button class="">
                📁
              </button>
            </a>
          {/if}

          {#if readAbout || readHackathons}
            <button on:click={changeStateFalse} class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 py-6 rounded-xl ml-3 my-3 border-transparent border-2">
            🏠
            </button>
            
            <button class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 rounded-xl m-3 border-transparent border-2">
              🌎
            </button>
            <a class="bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-7 py-6 rounded-xl my-3 mr-3" href="https://drive.google.com/file/d/19gv7iZ0Yoe8gHru2aQPzifO5hSjP_IDb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button >
                📁
              </button>
            </a>
          {/if}
        </div>

        <div class="flex mb-2">
          <TerminalIcon class="w-5 h-5 ml-6 text-pink-200 opacity-80"/>
          <p class="text-sm font-semibold font-SpaceGrotesk ml-2 text-pink-200 opacity-80">Into the Void</p>
        </div>

        <div class="border-t-2 mx-4 opacity-10"></div>
        <a href="https://www.linkedin.com/in/elliepopoca/" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mt-3 mx-3 ">
          <button class="flex">
            <img  alt="Linkedin"class="w-5 h-5 my-3 ml-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png">
            <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">Estrella (Ellie) Popoca</p>
          </button>
        </a>
        <a href="https://github.com/exrlla" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3">
          <button class="flex">
            <img  alt="Linkedin"class="w-5 h-5 my-3 ml-2" src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
            <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">exrlla (Ellie Popoca)</p>
          </button>
        </a>
        <a href="https://jelliefish.substack.com/" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3">
          <button class="flex">
            <img  alt="Linkedin"class="w-6 h-6 my-3 ml-1" src="https://substack.com/img/substack.png">
            <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">the sea depths of the creat..</p>
          </button>
        </a>
        <a href="https://jelliefish.substack.com/" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3">
          <button class="flex">
            <img  alt="Linkedin"class="w-5 h-5 my-3 ml-2" src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000">
            <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">Ellie's Tech Twitter</p>
          </button>
        </a>
        <div class="border-t-2 mx-4 mt-4 opacity-10"></div>
        <button on:click={changeStateFalse} class="flex hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3 mt-4">
          <img  alt="Linkedin"class="w-5 h-5 my-3 ml-3" src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/000/911/089/datas/large.png">
          <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">Read: Hackathons!</p>
        </button>
        <button on:click={changeStateFalse} class="flex hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3 mt-2">
          <img  alt="Linkedin"class="w-5 h-5 my-3 ml-3" src="https://yt3.googleusercontent.com/qSqmb9GaIyvWgVGFYGOJKIZ3SFHuUxeP9O5-4VkGReaIv4pYNkJiFPjAppvps0hyQ9JfUVBFQ5s=s900-c-k-c0x00ffffff-no-rj">
          <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">Arc Browser Info Dump!</p>
        </button>
        <button on:click={changeStateFalse} class="flex hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3 mt-2">
          <img  alt="Linkedin"class="w-5 h-5 my-3 ml-3" src="https://yt3.googleusercontent.com/qSqmb9GaIyvWgVGFYGOJKIZ3SFHuUxeP9O5-4VkGReaIv4pYNkJiFPjAppvps0hyQ9JfUVBFQ5s=s900-c-k-c0x00ffffff-no-rj">
          <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">my world of music</p>
        </button>
        <button on:click={changeStateFalse} class="flex hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3 mt-2">
          <img  alt="Linkedin"class="w-6 h-6 my-2 ml-3" src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9317a359-2ea6-42ae-8f1d-c2e2348d0437_280x312.gif">
          <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">changelog!</p>
        </button>
      </div>

      <div class="flex justify-center mb-3">
        <HeartIcon class="w-5 h-5 text-pink-200 opacity-80"/>

      </div>
    </div>
      
    
    <div class="bg-slate-50 w-3/4 rounded-lg my-3 mr-3 flex flex-col justify-between">
      {#if home}
      <div class="flex">
        <Avatar class="ml-3 mt-3" src={Ellie} size="sm" dot={{ placement: 'bottom-right', color: 'green' }} />
        <p class="text-lg font-semibold ml-3 mt-4 font-IBMPlexMono text-gray-600">@exrlla | </p>
        <div class="bg-gray-300 rounded-lg ml-2 my-5 p-1 text-xs font-semibold">AKA</div>
        <p class="text-sm font-IBMPlexMono ml-2 mt-5 text-gray-400"> ellie, estrella, eepy</p>
      </div>

      
      <div class="flex flex-col mb-2">
        <div class="mb-2">
          <div class="flex ml-5 "><Avatar src={Ellie} size="sm"/> 
            <p class="ml-2 text-violet-600 font-semibold font-IBMPlexMono">ellie</p>
            <p class="ml-4 text-gray-600 font-IBMPlexMono text-xs mt-1">08/29/2023 3:40 PM</p>
          </div>
          <p class="font-IBMPlexMono text-sm ml-14 mr-4">
            Hey! My name is Ellie, and I study <strong>Game Design and Information Sciences</strong> at The University of Illinois at Urbana Champaign! I'm currently a software engineer @ Acxiom
            and was a Curriculum Developer @ Codédex this past summer! I'm a part of some intiatives here on campus such as TEDxUIUC and the Hack4Impact UIUC Chapter.
            <br />
            <br />
            My eyes light up when talking about gamified education, learning languages, and video games! I have a fun blog where I talk about all of my interests
            and also love doing side projects where I like to learn about new tech surrounding creative coding! This fun website is inspired by <a class="text-pink-500 underline" href="https://anhvn.com/about/">anh</a>
            and <a class="text-pink-500 underline" href="https://arc.net/">arc browser</a>, my favorite piece of tech to date. 
            <br />
            <br />
            Feel free to take a look around my site, and explore all of the projects I have been working on! I'm currently looking for PM, Game Design, and Software roles for Summer 2024!
          </p>
          <img class="h-48 ml-14 rounded-md mt-4" alt="" src="https://steamuserimages-a.akamaihd.net/ugc/2022727520904620554/853E1F4F183C371B70DEC9F23970CE0A1AD35C00/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true">
          <a href="https://www.codedex.io/projects/deploy-a-website-with-vercel">
            <button class="bg-rose-300 hover:bg-rose-400 ml-14 mt-4 mr-10 p-2 flex rounded-lg border-pink-300 border-2">
              <img class="h-20 w-20 m-4 rounded-lg" alt="" src="https://www.codedex.io/images/projects/card_images/deploy-vercel-project.png">
              <p class="mt-8 font-Sora text-slate-50 mr-10 text-sm">
                Teaching web dev is one of my biggest interests! I published a Project Tutorial with Vercel on how to deploy your simple static personal website! ٩(ˊᗜˋ*)و ♡
              </p>
            </button>
          </a>
        </div>

        <a href="mailto:ellie@popoca.io">
          <div class="bg-pink-200 mx-3 rounded h-10 mt-4 flex justify-between items-center">
            <p class="ml-4 font-IBMPlexMono text-rose-400">Send me an email! ✧˖°</p>
            <SendIcon class="w-5 h-5 mr-4 text-rose-400"/>
          </div>
        </a>
      </div>
      {:else if projects}
      <div class="flex">
        <Avatar class="ml-3 mt-3" src="https://img.freepik.com/free-vector/cute-jellyfish-swimming-ocean-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-7012.jpg?w=2000" size="sm" dot={{ placement: 'bottom-right', color: 'red' }} />
        <p class="text-lg font-semibold ml-3 mt-4 font-IBMPlexMono text-gray-600">@jellie | </p>
        <div class="bg-gray-300 rounded-lg ml-2 my-5 p-1 text-xs font-semibold">BOT</div>
        <p class="text-sm font-IBMPlexMono ml-2 mt-5 text-gray-400"> Playing Tears of the Kingdom </p>
      </div>

      <div class="flex flex-col mb-2">
        <div class="mb-2">
          <div class="flex ml-5 "><Avatar src="https://img.freepik.com/free-vector/cute-jellyfish-swimming-ocean-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-7012.jpg?w=2000" size="sm"/> 
            <p class="ml-2 text-cyan-600 font-semibold font-IBMPlexMono">jellie</p>
            <p class="ml-4 text-gray-600 font-IBMPlexMono text-xs mt-1">08/29/2023 3:40 PM</p>
          </div>
          <p class="font-IBMPlexMono text-sm ml-14 mr-4">
           Check out all the stuff I have been doing recently! 
           <br />
            <br />
            💎 <strong> Application Development Intern — Acxiom </strong>
            <br />
            I'm a solo designer and developer for an internal frontend tool for our API that helps create monitor tests for Acxiom services!
            <br />
            <br />
            🎨 <strong> Curriculum Developer — Codédex </strong>
            <br />
            I build Curriculum and create project tutorials for the Codédex site! Check out my <a class="text-pink-500 underline" href="https://www.codedex.io/projects/build-an-interactive-soundboard-with-p5js">project tutorial on p5.js</a> and my featured <a class="text-pink-500 underline" href="https://www.codedex.io/blog/a-day-in-the-life-curriculum-intern-codedex-ellie-popoca">blog post!</a>
            <br />
            <br />
            👩🏽‍💻 <strong> Software Developer — Hack4Impact UIUC </strong>
            <br />
            Created the frontend for the app <a class="text-pink-500 underline" href="https://www.7000.org/">7000 Langauges</a>, a platform for language contributors of endangered languages to create courses!
            <br />
            <br />
            🪐 <strong>Hackathon Coach — Major League Hacking (MLH) </strong>
            <br />
            Attended events all over the country to help hackathon organizers and meet hackers! Coached for HackKU, HackGT9 @ Georgia Tech, and Uncommon Hacks @ UChicago! I also taught some fun topics during Global Hack Week @ MLH, like Unreal Engine, UI/UX, Frontend Development, and more! 
            <br />
            <br />
            🎙️ <strong>Web Designer — TEDxUIUC </strong>
            <br />
            Building the website for the TEDxUIUC Event with fun CSS, and creative coding technologies! 
          </p>
         
           </div>
        <a href="mailto:ellie@popoca.io">
          <div class="bg-pink-200 mx-3 rounded h-10 mt-4 flex justify-between items-center">
            <p class="ml-4 font-IBMPlexMono text-rose-400">Have Questions?? You can send me a message! (˵ •̀ ᴗ - ˵ ) ✧</p>
            <SendIcon class="w-5 h-5 mr-4 text-rose-400"/>
          </div>
        </a>
      </div>
      {/if}
    </div>
  </div>

</section>
</div>

