<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
    import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Footer footerType="socialmedia">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0 flex">
        <FooterBrand href="/" src="images/logo.svg" alt="Flowbite Logo" name="" imgClass="h-20 ml-5 mr-2"/>
        <span class="self-center whitespace-nowrap text-xl dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/the-best-mens-boxer-briefs-money-can-buy-2025">Merino top 10 brands</FooterLink>
            <FooterLink liClass="mb-4" href="/about">About</FooterLink>
            <FooterLink liClass="mb-4" href="/contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
            <FooterLink liClass="mb-4" href="/disclaimer">Disclaimer</FooterLink>

          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="WorldTopReviews" spanClass="ml-5"/>
      <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <!-- <FooterIcon href="/">
          <FacebookSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
        </FooterIcon> -->
      </div>
    </div>
  </Footer>