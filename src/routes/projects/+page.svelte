<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte'
</script>
<div class="flex flex-col mx-14 md:mx-20 xl:mx-60 items-center">
    <h2 class="text-center font-Shrikhand text-red-300 text-4xl md:text-5xl mb-10">
        ✧ projects!✧
    </h2>

    <div class="flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:justify-center">
        <ProjectCard
        project_name="Leyden Consulting Website Redesign"
        project_image_link="/assets/leyden.gif"
        project_description="I worked with Peggy Leyden, Founder of Leyden Consulting Associates, to redesign her website! Learn about the process and 
        everything I changed from top to bottom."
        project_date="Dec 2022"
        project_link="/design/lca"
         />
        <ProjectCard
             project_name="Wellapp"
             project_image_link="/assets/Wellapp.png"
             project_description="IS 226 Assignment for Intro to Human Computer Interaction. I designed a mental health wellness app!"
             project_date="Dec 2022"
             project_link="/design/wellapp"
              />

        <ProjectCard
            project_name="Illinois Design Consulting Website Redesign!"
            project_image_link="/assets/idc.png"
            project_description="As a design consultant for IDC, I helped redesign our main website! Take a look at what we have built!"
            project_date="Sep 2022"
            project_link="/design/idc"
             />
        <ProjectCard
            project_name="IS 445 Steam Games: Data Visualization in R "
            project_image_link="/assets/IS445.png"
            project_description="What are some of the best genres of Steam games? I used R to visualize the data from the past 10 years. Learn more
            about the process and what I found!"
            project_date="Dec 2022"
            project_link="/design/is445"
             />
        </div>
</div>

