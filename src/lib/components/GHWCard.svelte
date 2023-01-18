<script>
    export let month = "Janurary";
    export let slides = "";
    export let documentation = "";
    export let documentation_link = "";
    export let slides_link = "https://www.canva.com/design/DAFXMSkRxoI/-dnBwfi1RFj9-62t0wYSKg/view?utm_content=DAFXMSkRxoI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
    export let stream_link = "https://www.youtube.com/watch?v=9ATQ3Pqu4Bk";
    export let repo = "";
    export let repo_link = "";
    export let description = "This is a description of the GHW";
</script>
<div class="lg:flex flex-col items-center">
    <div class="lg:w-1/2">
        <h1 class="flex justify-center font-Unbounded text-orange-400 mt-10 mb-1 text-2xl">
            GHW {month}
        </h1>
        <h3 class="flex justify-center text-center font-Sora text-amber-600 mb-4">
            {description}
        </h3>
    </div>

    <div class="flex flex-col gap-2 lg:w-60">
    {#if !slides}
        <button class="rounded-md bg-blue-700 hover:bg-red-600 p-2">
            <a class="text-white
            font-Sora"href="{slides_link}">Slides</a>
        </button>
    {/if}

    {#if !documentation}
        <button class="rounded-md bg-blue-700 hover:bg-red-600 p-2">
            <a class="text-white
            font-Sora"href="{documentation_link}">Documentation</a>
        </button>
    {/if}

    {#if !repo}
        <button class="rounded-md bg-blue-700 hover:bg-red-600 p-2">
            <a class="text-white
            font-Sora"href="{repo_link}">Repo</a>
        </button>
    {/if}

    <button class="rounded-md bg-blue-700 hover:bg-red-600 p-2">
        <a class="text-white
        font-Sora"href="{stream_link}">The Stream!</a>
    </button>
</div>
  
    
</div>