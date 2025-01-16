import { G as attr, Q as escape_html, C as pop, A as push } from "../../../chunks/index.js";
import "emailjs-com";
function ContactForm($$payload, $$props) {
  push();
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  $$payload.out += `<div class="contact-form-container svelte-1rrugo6"><div class="mb-6 text-center"><h2 class="text-2xl font-bold text-gray-800 mb-3">Got a question, suggestion, or just want to say hi?</h2> <p class="text-lg text-gray-600 mb-4">Whether you're curious about my product reviews or just want to chat about life (or why your socks never match), I'm here for it.</p> <p class="text-sm text-gray-500">I promise, no robot replies here—just real talk!</p></div> <h2 class="text-2xl font-bold">Contact Us</h2> <form class="space-y-4 mt-6"><div class="form-group svelte-1rrugo6"><label for="name" class="block text-sm font-medium">Name</label> <input id="name" type="text"${attr("value", name)} class="input-field svelte-1rrugo6" placeholder="Enter your name"> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="form-group svelte-1rrugo6"><label for="email" class="block text-sm font-medium">Email</label> <input id="email" type="email"${attr("value", email)} class="input-field svelte-1rrugo6" placeholder="Enter your email"> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="form-group svelte-1rrugo6"><label for="subject" class="block text-sm font-medium">Subject</label> <input id="subject" type="text"${attr("value", subject)} class="input-field svelte-1rrugo6" placeholder="Enter subject"> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="form-group svelte-1rrugo6"><label for="message" class="block text-sm font-medium">Message</label> <textarea id="message" class="input-field svelte-1rrugo6" placeholder="Enter your message" rows="4">`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div><button type="submit" class="submit-button svelte-1rrugo6">Submit</button></div></form></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<main>`;
  ContactForm($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
