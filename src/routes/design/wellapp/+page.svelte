<script>
  import SEO from '$lib/components/SEO.svelte';

</script>

<SEO title="Wellapp — Ellie's Page" />

<!-- Wellapp -->
<div class="spacing-home-container">

  <!-- Back Button -->
  <div class="flex">
    <a href="/projects">
      <h4 class="font-Sora text-xl ml-10 text-red-400">↙ go back! ✧ ˚ · .</h4>
    </a>
  </div>


<!-- Design Process -->
<div class="px-8">

  <div class="flex mt-10">
    <h2 class="font-Sora text-gray-600 text-4xl">
      Wellapp</h2>
  </div>
  <p class="font-Sora text-gray-500 mt-4">
    Wellapp is an application mockup for IS 226 Intro to Human Computer Interaction at the University of Illinois. With a team, we came up
    with a solution to help college students improve and keep track of their mental health.
   </p>
  <!-- Image -->
  <div class="grid sm:gap-6 lg:gap-8 mt-10">
    <img src="/assets/Wellapp.png" alt="Wellapp" class="add-border rounded-lg bg-gray-100">
  </div>
  
  <div>
    <dl class="mt-16 grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-y-6 lg:gap-x-2">
      <div class="border-t border-gray-200">
        <dt class="font-Sora text-gray-500 text-lg" id="bolder-text">Role</dt>
        <dd class="font-Sora mt-2 text-sm text-gray-500">Designer</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-Sora text-gray-500  text-lg" id="bolder-text">Team</dt>
        <dd class="font-Sora mt-2 text-sm text-gray-500">Brayden Riesberg</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-Sora text-gray-500" id="bolder-text">Timeline</dt>
        <dd class="font-Sora mt-2 text-sm text-gray-500">Aug 2022 - Dec 2022</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-Sora text-gray-500 text-lg" id="bolder-text">The Problem</dt>
        <dd class="font-Sora mt-2 text-sm text-gray-500">
          Currently, there is no application that helps college students keep track of their mental health specifically for college students.
          However, as college students, we can relate to the struggles of keeping track of our mental health and how it can be difficult to do so and its social stigma.
          Therefore, we have designed an application addressing this problem.</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-Sora text-gray-500 text-lg" id="bolder-text">Skills</dt>
        <dd class="font-Sora mt-2 text-sm text-gray-500">
            Visual Design <br/>
            User Research</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-Sora text-gray-500 text-lg" id="bolder-text">Tools</dt>
        <dd class="font-Sora mt-2 text-sm text-gray-500">
            Figma <br/>
            FigJam <br/>
            Miro </dd>
      </div>
    </dl>
  </div>

<a href="https://www.figma.com/proto/id3jKSmBc8sxBEqpWB23sA/IS-226-Checkpoint-3?page-id=107%3A1173&node-id=313%3A1294&viewport=156%2C473%2C0.3&scaling=scale-down&starting-point-node-id=107%3A1174">
  <button class="font-Sora bg-orange-400 p-2 rounded-md text-white my-2">View figma file</button></a>
  <!-- Design Process: Competitor Analysis -->
    <h3 class="font-Sora text-red-300 text-3xl mt-10 md:text-4xl">
      research - mental health and competitior analysis!</h3>
    <p class="font-Sora mt-4 text-gray-500"> 
        Despite mental health apps being present, students rarely adopt a consistent usage of the apps even when they are interested. 
        Due to the stigma and social influence surrounding mental health apps, students that feel as if they are forced to use the app, 
        suggested by health professionals, are less inclined to stick to it after initial use.   
    </p>
    <h5 class="a tracking-tight sm:text-3xl">examples of other interactive systems</h5>
    <p class="font-Sora mt-4 text-gray-500"> 
        We looked at other interactive systems that are similar to our application. We looked at the strengths and weaknesses 
        of each application and how we can improve on them.
    <div class="">
      <img src="/assets/Wellapp_1.png" alt="Competitor Analysis of other websites similar to Wellapp" class="mt-10 mb-10">
    </div>
    <p class="font-Sora mt-4 text-gray-500">
      With this app, we intend to show an improvement in engagement and consistency when compared to other apps of the same genre. 
      In designing the app for students, our goal is to design an app that is as engaging and inviting as it is effective. 
    </p>
    
    
    <!-- Design Process: System Design Plan -->
    <h3 class="font-Sora text-red-300 text-3xl mt-10 md:text-4xl">
      System Design Plan</h3>
    
      <div>
        <p class="font-Sora mt-4 text-gray-500">
          As we think about designing a solution for our system, we have discussed what we will consider before we start wireframing 
          potential user interfaces. 
          <br/><br/>
          <p class="font-Sora text-gray-500" id="bolder-text">
            We will consider the following questions when deciding on 
            multiple approaches to our design system and user interface:
          </p> <br/><br/>
          <ul class="a font-Sora text-gray-500 pb-5">
            <li>What are the similarities between current popular apps?</li>
            <li>What is the preferred language of students/young adults from 18-26 (casual, to the point, informative)? 
            </li>
            <li>Generally, what are the similarities between a college student on a mental health app versus a teenager on a mental health app? 
            </li>
            <li>What are common themes in popular applications in terms of typography, colors, and layout?</li>
          </ul> 
        <p class="font-Sora text-gray-500" id="bolder-text">
          Below is the figma mockup where I put all of my research and ideas together! Keeping this in mind, this is the flow that I decided to go with!
        </p>
    </div>


    <img class="modal-style img-style mb-10 mt-10" id="modal-img" src="/assets/wellapp_mockup.png" alt="Key Features of Wellapp">
      <!-- The Modals -->
      <div id="img-modal" class="modal">
        <span class="close">&times;</span>
        <img alt="modal" class="modal-content" id="img01">
      </div>
      
    


    <!-- Design Process: HCI Analysis and User Needs Report -->
    <h3 class="font-Sora text-red-300 text-3xl mt-10 md:text-4xl">
      HCI analysis and User Needs</h3>
      <p class="font-Sora mt-4 text-gray-500 "> 
        As we develop a prototype and workflows for how our app might look and prioritize the needs of being fast-paced and 
        essentially “click-less”, we have conducted user interviews of college students at UIUC to understand their knowledge 
        of current mental health apps, and their usage of apps connected to their mental health. 
          <br/><br/>
        The following are questions we asked during our user interviews: <br/><br/>
      </p>
      <ul class="a font-Sora text-gray-500">
        <li>Have you used mental health apps in the Past? Why or why not? </li>
        <li>How much time on average do you spend on Social Media?</li>
        <li>What are your notification settings for apps? Do you change these manually or have the default?</li>
      </ul> 
      <p class="font-Sora mt-4 text-gray-500"> 
        Through our interviews, we noticed 4 themes that we could use to test out potential features in our 
        application that could be helpful when we create a mock application: Low maintenance, Innovation for mental health, 
        Commfortability, and Relatability.  <br/><br/>       
    
      
  
    <!-- Design Process: Key Features-->
    <h3 class="font-Sora text-red-300 text-3xl mt-10 md:text-4xl">
      key features!</h3>
    <h5 class="a tracking-tight sm:text-3xl">at a glance ✧･ﾟ</h5>
    <p class="font-Sora mt-4 text-gray-500"> 
      These are some of the base case designs for Wellapp!
    </p>
    <img class="img-style" src="/assets/wellapp_homecase.png" alt="Key Features of Wellapp">
    
    
    <h5 class="a tracking-tight sm:text-3xl">key screens ✧･ﾟ</h5>
    <p class="font-Sora mt-4 text-gray-500"> 
      These designs contain the calendar view, alerts, and profile. 
    </p>
    <img class="img-style mb-10" src="/assets/wellapp_views.png" alt="Key Features of Wellapp">
    
    <h5 class="a tracking-tight sm:text-3xl">additional modals ✧･ﾟ</h5>
    <p class="font-Sora mt-4 text-gray-500"> 
      These are some of the modals of Wellapp where users can login, and change their email.
    </p>
    <img class="img-style mb-10" src="/assets/wellapp_modals.png" alt="Key Features of Wellapp">

    <!-- Design Process: Reflections -->
    <h3 class="font-Sora text-red-300 text-3xl mt-10 md:text-4xl">Reflections</h3>
    <p class="font-Sora mt-4 text-gray-500"> 
      <ul class="a font-Sora text-gray-500">
        <li> Getting a sense of the audience is essential! I didn't know many things about tech x mental health if I didn't do the research! <br/><br/> </li>
        <li>TIME is needed for a lot of design work alongside all the interviews. Time allocation is a big lesson for me!  <br/><br/> </li>
        <li>Getting feedback should be a main priortiy in a future case study to improve as much as podsible. </li>
      </ul> 
</div>
<div class="mt-10 flex">
<a href="/design">
  <h4 class="text-style-back">↙ designs ✧ ˚ · .</h4>
</a>
</div>
</div>
