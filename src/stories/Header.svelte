<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar>
  <NavBrand href="/">
    <img src="images/logo.svg" class="me-3 h-10 sm:h-15" alt="worldtopreviews.com logo" />
    <span class="text-[#191919] self-center whitespace-nowrap text-xl dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span>
  </NavBrand>
  <NavHamburger/>
  <NavUl >
    <NavLi href="/the-best-mens-boxer-briefs-money-can-buy-2025">Top 5 Men's Boxers of 2025</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>