import { Q as escape_html } from "../../../chunks/index.js";
import { h as html } from "../../../chunks/index3.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
function About($$payload) {
  let name = "Darius";
  let introText = `I’m just an ordinary person trying to find what works best for me without having to sort through hundreds of poor options. All I want is simplicity—straightforward choices without the noise, ads, or endless lists.
      <br><br>One day, I needed to buy a solid pair of trunks—just a quick, simple buy. But the second I hit the internet, it was like stepping into a maze of ads, ‘must-have’ lists, and life hacks that seemed too good to be true. I couldn’t shake the feeling that a lot of what I found online wasn’t trustworthy anymore.
      <br><br>So, I decided to figure things out for myself. I started testing products—everything from clothing and travel gear to productivity hacks and even parenting tips. This space is where I share my honest, no-nonsense findings—the good, the bad, and everything in between. Because sometimes, the best way to find what works is to try it yourself.
      <br><br>If you’re tired of being bombarded by half-truths and just want real talk, you’re in the right place. I’ve been there, done that, and I’m sharing what’s actually worked for me.
      `;
  let experienceText = `I work as a <b>programmer</b>, which means I spend my days solving logical challenges and testing variables to find the best solutions. That mindset has naturally translated into wanting to test everyday products as well. My approach is simple: evaluate things practically and honestly, so you can avoid unnecessary choices and wasted time.
      <br><br>Life is already full of challenges, decisions, and unpredictability. My goal is to strip away some of the noise and offer real, clear insights to help you make better choices without the endless second-guessing.
      <br><br><b>Fun fact:</b> My great-grandfather was a tailor who left war-torn Lithuania and rebuilt his life in Argentina with nothing but his skills, a needle, and thread. His story of resilience and craftsmanship has always stuck with me. At one point in my life, I even considered becoming a tailor myself—something about working with your hands and creating something lasting felt incredibly rewarding.
      `;
  $$payload.out += `<div class="about-me-container svelte-euny9y"><section class="intro svelte-euny9y">`;
  Avatar($$payload, {
    src: "images/dariaus-profile.jpg",
    class: "rounded-full mb-5",
    rounded: true,
    size: "xl"
  });
  $$payload.out += `<!----> <h2 class="text-3xl font-bold svelte-euny9y">About Me</h2> <p class="mt-4 text-lg svelte-euny9y">${html(introText)}</p> <p class="mt-6 font-semibold text-xl svelte-euny9y">— ${escape_html(name)}</p></section> <section class="experience mt-12 svelte-euny9y"><h3 class="text-2xl font-bold svelte-euny9y">What You Deal With, I Get</h3> <p class="mt-4 text-lg svelte-euny9y">${html(experienceText)}</p></section></div>`;
}
function _page($$payload) {
  About($$payload);
}
export {
  _page as default
};
