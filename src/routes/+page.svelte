<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { onMount } from 'svelte';
  import { Avatar } from 'flowbite-svelte';
  import FavoritesButton from '$lib/components/FavoritesButton.svelte';
  import SideTab from '$lib/components/SideTab.svelte';
  import HomeSlate from '$lib/components/HomeSlate.svelte';
  import { TerminalIcon, HeartIcon } from 'svelte-feather-icons'
	import ProjectsSlate from '$lib/components/ProjectsSlate.svelte';
  import Slate1 from '$lib/components/Slate1.svelte';

 
  let currentPage = 'home';
  function changeState(new_component: string) {
    currentPage = new_component;
  }

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

<div class="h-screen bg-gradient-to-br from-[#F7B2B7] via-[#FE938C] to-[#DE639A] max-h-screen ">
<section class="h-screen flex justify-center items-center"> 
  <div class="bg-rose-400 w-3/4 xl:w-4/6 rounded-xl flex border-pink-300 border-2">
    <div class="flex flex-col justify-between">
      <div class="flex flex-col">
        <div class="flex justify-evenly gap-3 mx-2">
            <FavoritesButton emoji="🏠" name="home" currentlySelected={currentPage} onClick={() => changeState('home')}/>
            <FavoritesButton emoji="🌎" name="projects" currentlySelected={currentPage} onClick={() => changeState('projects')}/>
            <a class="" href="https://drive.google.com/file/d/19gv7iZ0Yoe8gHru2aQPzifO5hSjP_IDb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <a class="" href="https://drive.google.com/file/d/19gv7iZ0Yoe8gHru2aQPzifO5hSjP_IDb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FavoritesButton emoji="📁" name="resume" currentlySelected={currentPage} onClick={() => {}}/>
              </a>
          </a>
        </div>

        <div class="flex mb-2">
          <TerminalIcon class="w-5 h-5 ml-6 text-pink-200 opacity-80"/>
          <p class="text-sm font-semibold font-SpaceGrotesk ml-2 text-pink-200 opacity-80">2024</p>
        </div>

          <a href="https://www.linkedin.com/in/elliepopoca/" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mt-3 mx-3 ">
            <button class="flex">
              <img  alt="Linkedin"class="w-5 h-5 my-3 ml-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png">
              <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-white">LinkedIn</p>
            </button>
          </a>
          <a href="https://github.com/exrlla" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3">
            <button class="flex">
              <img  alt="github"class="w-5 h-5 my-3 ml-2" src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
              <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-white">exrlla</p>
            </button>
          </a>
          <a href="https://jelliefish.substack.com/" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3">
            <button class="flex">
              <img  alt="substack"class="w-6 h-6 my-3 ml-1" src="https://substack.com/img/substack.png">
              <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-white">my substack blog</p>
            </button>
          </a>
          <a href="https://twitter.com/exrlla" class="hover:bg-pink-200 hover:bg-opacity-20 rounded-md mx-3">
            <button class="flex">
              <img  alt="twitter"class="w-5 h-5 my-3 ml-2" src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000">
              <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-white">x</p>
            </button>
          </a>

      <!-- Side Tabs  -->
        <div class="border-t-2 mx-4 mt-4 opacity-10"></div>
          <SideTab text="My journey in edtech" favicon="https://www.codedex.io/images/codedex-bot-logo.gif" alt="Linkedin" name="one" currentlySelected={currentPage} onClick={() => changeState('one')}/>
          <SideTab text="Changelog" favicon="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9317a359-2ea6-42ae-8f1d-c2e2348d0437_280x312.gif" alt="Linkedin" name="changelog" currentlySelected={currentPage} onClick={() => changeState('changelog')}/>
        </div>

      <!-- Side -->
      <div class="flex justify-center mb-3">
        <HeartIcon class="w-5 h-5 text-pink-200 opacity-80"/>
      </div>
    </div>
      
      {#if currentPage == 'home'}
        <HomeSlate />
      {:else if currentPage == 'projects'}
        <ProjectsSlate />
      {:else if currentPage == 'one'}
        <Slate1 />
        {/if}
    </div>
    

</section>
</div>

