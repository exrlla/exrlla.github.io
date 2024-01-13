<script lang="ts">
    export let emoji: string;
    export let name: string;
    export let currentlySelected: string;
    export let onClick: () => void;
</script>

<button on:click={onClick} class={`bg-pink-200 bg-opacity-40 hover:bg-opacity-20 px-6 py-5 rounded-xl my-3 ${currentlySelected == name ? "border-pink-300" : "border-transparent"} border-2`}>
    {emoji}
</button>