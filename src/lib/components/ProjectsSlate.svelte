<script>
    import { Avatar } from 'flowbite-svelte';
    import { SendIcon } from 'svelte-feather-icons'
    import Cat from '../../assets/scarycat.jpeg';

</script>

<div class="bg-slate-50 w-11/12 rounded-lg my-3 mr-3 flex flex-col justify-start">
  <!-- Top header -->
  <div class="flex">
    <Avatar class="ml-3 mt-3" src={Cat} size="sm" dot={{ placement: 'bottom-right', color: 'red' }} />
    <p class="text-lg font-semibold ml-3 mt-4 font-IBMPlexMono text-gray-600">@jellie | </p>
    <div class="bg-gray-300 rounded-lg ml-2 my-5 p-1 text-xs font-semibold">BOT</div>

  </div>

  <!-- Page content -->
  <div class="flex flex-col mb-2 overflow-scroll max-h-[80vh]">
    <div class="mb-2 mt-[11rem]">
      <div class="flex ml-5 "><Avatar src={Cat} size="sm"/> 
        <p class="ml-2 text-pink-600 font-semibold font-IBMPlexMono">jellie</p>
        <p class="ml-2 text-gray-600 font-IBMPlexMono text-xs mt-1">01/12/2024 5:58 PM</p>
      </div>
      <div>
      <h1 class="font-SpaceGrotesk text-lg font-bold ml-14 mr-6">
      This is an experimental place. 🧚🏻‍♀️🧚🏻‍♀️🧚🏻‍♀️🧚🏻‍♀️🧚🏻‍♀️
      </h1>
      <p class="font-SpaceGrotesk text-sm ml-14 mr-6">
        This page will go through a bunch of different changes as a part of Ellie's creative journey! As a passionate product designer, 
        there will be different iterations of this site as she creates and edits new features. 
        <br />
        <br />
      </p>
      <h2 class="font-SpaceGrotesk text-md font-bold ml-14 mr-6">
        Projects and Hackathons
      </h2>
      <ul class="list-disc">
        <li class="font-SpaceGrotesk text-sm ml-16">
          Hack4Impact UIUC, 7000 Languages App
        </li>
        <li class="font-SpaceGrotesk text-sm ml-16 ">
          Uncommon Hacks @ UChicago: Letra
        </li> 
        <li class="font-SpaceGrotesk text-sm ml-16 ">
          Athena Hacks @ USC: Forté
        </li>
        <li class="font-SpaceGrotesk text-sm ml-16 ">
          WECEHacks @ UIUC Website
        </li>
        <li class="font-SpaceGrotesk text-sm ml-16 ">
          WECE @ UIUC Link Shortner
        </li>
      </ul>

      <div class="flex ml-5 mt-5 "><Avatar src={Cat} size="sm"/> 
        <p class="ml-2 text-pink-600 font-semibold font-IBMPlexMono">jellie</p>
        <p class="ml-2 text-gray-600 font-IBMPlexMono text-xs mt-1">01/12/2024 6:05 PM</p>
      </div>

      <h2 class="font-SpaceGrotesk text-sm font-bold ml-14 mr-6">
        You can look at all of these projects and more on <a class="text-pink-500 underline" href="https://github.com/exrlla">my github!</a>
      </h2>
    </div>

    


    </div>
    

  </div>
  <a href="mailto:ellie@popoca.io">
    <div class="bg-pink-200 mx-3 rounded h-10 mb-2 flex justify-between items-center">
      <p class="ml-4 font-IBMPlexMono text-rose-400">Send me an email! ✧˖°</p>
      <SendIcon class="w-5 h-5 mr-4 text-rose-400"/>
    </div>
  </a>
</div>
      