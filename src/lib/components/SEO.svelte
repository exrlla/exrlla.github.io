<script>
  export let title = "Ellie's Site"
  export let metadescription = ""


</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metadescription} />
  <meta
     name="robots"
     content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
   />
</svelte:head>