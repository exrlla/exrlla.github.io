<script>
    import SEO from '$lib/components/SEO.svelte';
    import GHWCard from '$lib/components/GHWCard.svelte';
  </script>
  <SEO title="Global Hack Week Resources — Ellie's Page" />

<div class="mx-10 md:mx-60">
    <img src="/assets/mlh.png" alt="Global Hack Week" class="w-20 mx-auto pb-4">
    <img src="/assets/ghw.png" alt="Global Hack Week" class="w-60 mx-auto pb-4">
    <h1 class="flex justify-center font-Unbounded text-orange-300 text-2xl">Ellie's Resources</h1>
    <img src="/assets/sparkle-1.svg" alt="line" class="w-10 mx-auto mt-6">
    <div class="bg-orange-200 px-10 rounded-md mt-8 lg:mx-40">
        <p class="font-Sora text-amber-600 text-sm pt-6 text-center leading-tight">
            Hi! This is Ellie from MLH, your fave frontend/design coach!
            If you're an avid viewer for Global Hack Week, or just browsing around at some 
            of my content, welcome!!! I'm so glad you're here. 
            <br><br>
            I've put together a list of
            all of the resources I use for my streams, and some of my favorite resources for learning
            different technologies and tutorials! I hope you find this helpful, and if you have any
            questions, feel free to reach out to me on Twitter or Discord! <br><br>
        </p>
    </div>
    <GHWCard
    description="Intro to UI/UX: Learn about the basics of UI/UX, UX Research, and more! Pre reqs: None"
    documentation=false
    repo=false
    slides_link="https://www.canva.com/design/DAFXX7XFmUY/GslyJYLzYoJns18OWPhZaA/view?utm_content=DAFXX7XFmUY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    stream_link="https://www.youtube.com/watch?v=nWnydXEfrmA"/>

    <GHWCard
    description="Intro to React: Learn about how to get started in React, some of my essentials, and create a component
    with me on stream! Pre reqs: Basic Understanding of HTML/CSS and JavaScript"
    documentation=false
    repo_link="https://replit.com/@exrlla/OverjoyedOrdinaryNamebinding?v=1"
    stream_link="https://www.youtube.com/watch?v=9ATQ3Pqu4Bk"/>

    <GHWCard
    month="October"
    repo=false
    description="Create your own P5.js Sketch: Learn about how to get started in P5.js, play around with some javascript functions, and make a project of your own!"
    documentation_link="https://ell-ie.notion.site/Create-your-own-P5-js-project-GHW-October-0f9c41970bbd4bb5abcf878b825dac23"
    stream_link="https://www.youtube.com/watch?v=uh6op7qhnNc"/>
    
    <GHWCard
    month="September"
    documentation=false
    repo=false
    description="Build a Personal Website: Learn about some of my favorite portfolios out there, and watch me design my own in Figma!"
    slides_link="https://www.canva.com/design/DAFL9rNdsdU/0hQjLqijp4y_idmPa_MQaQ/view?utm_content=DAFL9rNdsdU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    stream_link="https://www.youtube.com/watch?v=8FNrEBE6vWo" />

    <GHWCard
    month="September"
    description="Getting Started with Frontend Dev: Learn about what technologies front end devs use, and learn about my journey as a frontend dev in tech!"
    documentation=false
    repo=false
    slides_link="https://www.canva.com/design/DAFL1Ms4xFU/9J_QHNrSSiAz2kSh76NIrw/view?utm_content=DAFL1Ms4xFU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    stream_link="https://www.youtube.com/watch?v=rCZAx1q1tPY" />

    <GHWCard
    month="INIT 2021"
    description="Intro to UI/UX: Learn about design do's and don'ts, methodologies, and more!"
    documentation=false
    repo=false
    slides_link="https://www.canva.com/design/DAFFH5sYseY/yk_KBuWi0zibYLbOi5rHjA/view?utm_content=DAFFH5sYseY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    stream_link="https://www.youtube.com/watch?v=eF77WsXcDRc&t=4327s" />

    <GHWCard
    month="INIT 2021"
    description="Hack with React: Set up your dev environment, learn about React, and make a component with me on stream! Pre Req: JS/HTML/CSS"
    documentation=false
    repo_link="https://github.com/exrlla/ghw-hack-with-react"
    stream_link="https://www.twitch.tv/videos/1521667203"
    slides_link="https://www.canva.com/design/DAFFS6t06To/xoW0bnSNvtFwAhCOQnBwJQ/view?utm_content=DAFFS6t06To&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" />
</div>