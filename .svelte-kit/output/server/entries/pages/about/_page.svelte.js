import { G as attr, C as pop, A as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<h1>Welcome to SvelteKit2</h1> <p>Visit <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://svelte.dev/docs/kit`, void 0))}>svelte.dev/docs/kit</a> to read the documentation</p>`;
  pop();
}
export {
  _page as default
};
