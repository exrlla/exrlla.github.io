<script>
    import { Avatar } from 'flowbite-svelte';
    import { SendIcon } from 'svelte-feather-icons'
    import Cat from '../../assets/scarycat.jpeg';

</script>

<div class="bg-slate-50 w-11/12 rounded-lg my-3 mr-3 flex flex-col justify-start">
  <!-- Top header -->
  <div class="flex">
    <Avatar class="ml-3 mt-3" src="https://i.pinimg.com/564x/55/33/65/55336531569bf9ec16b44bc771b3dd89.jpg" size="sm" dot={{ placement: 'bottom-right', color: 'red' }} />
    <p class="text-lg font-semibold ml-3 mt-4 font-IBMPlexMono text-gray-600">@ellie | </p>
    <div class="bg-gray-300 rounded-lg ml-2 my-5 p-1 text-xs font-semibold">BOT</div>

  </div>

  <!-- Page content -->
  <div class="flex flex-col mb-2 overflow-scroll max-h-[80vh]">
    <div class="mb-2 mt-[11rem]">
      <div class="flex ml-5 "><Avatar src="https://i.pinimg.com/564x/55/33/65/55336531569bf9ec16b44bc771b3dd89.jpg" size="sm"/> 
        <p class="ml-2 text-pink-600 font-semibold font-IBMPlexMono">ellie</p>
        <p class="ml-2 text-gray-600 font-IBMPlexMono text-xs mt-1">01/12/2024 8:00 PM</p>
      </div>
      <div>
      <h1 class="font-SpaceGrotesk text-lg font-bold ml-14 mr-6">
      Work in Progress here!
      </h1>
      <p class="font-SpaceGrotesk text-sm ml-14 mr-6">
        I'll be making a couple changes to this website! In the meantime, feel free to check out my blog and my projects! I talk about my experiences of my first
        internship, all the hackathons I have attended, and learning about cool new tech!
        <br />
        <br />
      </p>
     
      
      
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
      