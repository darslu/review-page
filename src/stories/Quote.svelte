<script lang="ts">import { Section, Quotes, Testimonial } from "flowbite-svelte-blocks";
</script>

<Section name="testimonial" sectionClass="py-0">
  <Testimonial icon={Quotes} >
    <blockquote>
      <p class="text-2xl font-medium text-gray-900 dark:text-white">"With so many merino brands out there, it's overwhelming to decide which one truly stands out. Each has its own strengths, and finding the perfect balance of quality, comfort, and price can feel like a guessing game!"</p>
    </blockquote>
    <svelte:fragment slot="footer">
      <img class="w-6 h-6 rounded-full" src="images/dariaus-profile.jpg" alt="Dariaus profile" />
      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
        <div class="pr-3 font-medium text-gray-900 dark:text-white">Darius Slubelis</div>
        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Customer</div>
      </div>
    </svelte:fragment>
  </Testimonial>
</Section> 