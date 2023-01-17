<script>
    export let project_name = "Project Name"
    export let project_image_link = "https://via.placeholder.com/150"
    export let project_description = "Project Description here, fill up with whatever you like! Wow this is big and long"
    export let project_date = "Sep 2023"
    export let project_link = "/idc"
</script>

    <div class="flex flex-col">
        <a href={project_link}><img alt="project-card" src={project_image_link} class="rounded-md border-2 border-orange-400 hover:border-red-400" />
        <h1 class="font-Unbounded mt-2 text-xl text-cyan-600 hover:text-orange-400">
            {project_name}
        </h1>
        </a>
        <p class="font-Sora text-gray-600">
            {project_description}
        </p>
        <p class="font-Sora text-gray-400 mt-2">
            {project_date}
        </p>
    </div>