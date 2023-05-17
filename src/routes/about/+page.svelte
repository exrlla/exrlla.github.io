<script>
  import { Body } from 'svelte-body'
  import SEO from '$lib/components/SEO.svelte';

  const style = {
    backgroundImage: 'url(/assets/purpleback.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
</script>

<Body {style} />
<SEO title="About — Ellie's Page" />

<!-- Container for the entire screen -->
<div class="flex justify-center flex-col mx-12 xl:mx-60">
<img alt="" src="/assets/orgabout.png">
  
</div>