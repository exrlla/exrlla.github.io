<script lang="ts">
    export let favicon: string;
    export let alt: string;
    export let name: string;
    export let currentlySelected: string;
    export let text: string;
    export let onClick: () => void;
</script>

<button on:click={onClick} class={`flex ${name == currentlySelected && "bg-pink-200 bg-opacity-60"} hover:bg-pink-200 hover:bg-opacity-40 rounded-md mx-3 mt-2`}>
    <img  alt={alt} class="w-5 h-5 my-3 ml-3" src={favicon}>
    <p class="mt-3 ml-2 text-sm font-SpaceGrotesk text-gray-800">{text}</p>
</button>