<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar>
  <NavBrand href="/">
    <img src="images/logo.jpg" class="me-3 h-14 sm:h-20" alt="raitings guide Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ratings guide</span>
  </NavBrand>
  <NavHamburger/>
  <NavUl >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/review">Merino top 10 brands</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>