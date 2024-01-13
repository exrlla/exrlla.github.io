<script>
    import { Avatar } from 'flowbite-svelte';
    import Ellie from '../../assets/ellie_prof.jpg';
    import ProfilePhoto from '../../assets/Me2024.jpeg';
    import { TerminalIcon, SendIcon, HeartIcon } from 'svelte-feather-icons'
</script>


<div class="bg-slate-50 w-11/12 rounded-lg my-3 mr-3 flex flex-col justify-start">
    <!-- Top header -->
    <div class="flex">
      <Avatar class="ml-3 mt-3" src={Ellie} size="sm" dot={{ placement: 'bottom-right', color: 'green' }} />
      <p class="text-lg font-semibold ml-3 mt-4 font-IBMPlexMono text-gray-600">@exrlla | </p>
      <div class="bg-gray-300 rounded-lg ml-2 my-5 p-1 text-xs font-semibold">AKA</div>
      <p class="text-sm font-IBMPlexMono ml-2 mt-5 text-gray-400"> ellie, ellbells, Estrella</p>
    </div>

    <!-- Page content -->
    <div class="flex flex-col mb-2 overflow-scroll max-h-[80vh]">
      <div class="mb-2 mt-[11rem]">
        <div class="flex ml-5 "><Avatar src={Ellie} size="sm"/> 
          <p class="ml-2 text-violet-600 font-semibold font-IBMPlexMono">ellie</p>
          <p class="ml-2 text-gray-600 font-IBMPlexMono text-xs mt-1">01/12/2024 5:58 PM</p>
        </div>
        <p class="font-SpaceGrotesk text-sm ml-14 mr-6">
          Hey! My name is Ellie, and I study <strong>Game Design and Information Sciences</strong> at The University of Illinois at Urbana Champaign! I've been at <a href="https://codedex.io/">Codédex</a>as a Currciulum Developer for over half a year creating fun content on learning how to code!
          I'm also a current Campus Leader for Notion UIUC. Previously, I was a Software Developer for Hack4Impact UIUC, and a Hackathon Coach for Major League Hacking (MLH).
          <br />
          <br />
          My eyes light up when talking about gamified education, learning languages, and video games! I have a blog on Substack where I talk about all of my tech realted interests.
          I also love making side projects where I learn about new tech surrounding creative coding! This fun website is inspired by <a class="text-pink-500 underline" href="https://anhvn.com/about/">anh</a>
          and <a class="text-pink-500 underline" href="https://arc.net/">arc browser</a>, my favorite piece of tech to date. 
          <br />
          <br />
          Feel free to take a look around my site, and explore all of the projects I have been working on!
        </p>
        <img class="h-48 ml-14 rounded-md mt-4" alt="" src={ProfilePhoto}/>
      
      </div>
      

    </div>
    <a href="mailto:ellie@popoca.io">
      <div class="bg-pink-200 mx-3 rounded h-10 mb-2 flex justify-between items-center">
        <p class="ml-4 font-IBMPlexMono text-rose-400">Send me an email! ✧˖°</p>
        <SendIcon class="w-5 h-5 mr-4 text-rose-400"/>
      </div>
    </a>
  </div>