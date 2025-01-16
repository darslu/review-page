import { U as sanitize_slots, N as rest_props, A as push, M as fallback, P as spread_attributes, L as slot, J as bind_props, C as pop, R as sanitize_props, T as element, G as attr, S as spread_props, V as stringify } from "./index.js";
import { g as getTranslationFunctions } from "./index3.js";
import { twMerge } from "tailwind-merge";
function Indicator($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "rounded",
    "size",
    "border",
    "placement",
    "offset"
  ]);
  push();
  let color = fallback($$props["color"], "gray");
  let rounded = fallback($$props["rounded"], false);
  let size = fallback($$props["size"], "md");
  let border = fallback($$props["border"], false);
  let placement = fallback($$props["placement"], () => void 0, true);
  let offset = fallback($$props["offset"], true);
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$sanitized_props.class);
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: dotClass })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    color,
    rounded,
    size,
    border,
    placement,
    offset
  });
  pop();
}
function Avatar($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "src",
    "href",
    "rounded",
    "border",
    "stacked",
    "dot",
    "alt",
    "size"
  ]);
  push();
  let src = fallback($$props["src"], "");
  let href = fallback($$props["href"], () => void 0, true);
  let rounded = fallback($$props["rounded"], false);
  let border = fallback($$props["border"], false);
  let stacked = fallback($$props["stacked"], false);
  let dot = fallback($$props["dot"], () => void 0, true);
  let alt = fallback($$props["alt"], "");
  let size = fallback($$props["size"], "md");
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36",
    none: ""
  };
  let avatarClass;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ms-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 object-cover", $$sanitized_props.class);
  if (!src || !!href || $$slots.default || dot) {
    $$payload.out += "<!--[-->";
    const $$tag = href ? "a" : "div";
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes({
          ...`${href ? "a" : "div"}` === "button" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes(
            {
              "href": href,
              ...$$restProps,
              "class": `relative flex justify-center items-center ${avatarClass}`
            },
            [{ attribute_name: "formaction" }]
          ) : `${href ? "a" : "div"}` === "form" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes(
            {
              "href": href,
              ...$$restProps,
              "class": `relative flex justify-center items-center ${avatarClass}`
            },
            [{ attribute_name: "action" }]
          ) : `${href ? "a" : "div"}` === "a" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes(
            {
              "href": href,
              ...$$restProps,
              "class": `relative flex justify-center items-center ${avatarClass}`
            },
            [
              {
                attribute_name: "href",
                lang_attribute_name: "hreflang"
              }
            ]
          ) : {
            "href": href,
            ...$$restProps,
            "class": `relative flex justify-center items-center ${avatarClass}`
          }
        })}`;
      },
      () => {
        if (src) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img${attr("alt", alt)}${attr("src", src)}${attr("class", rounded ? "rounded" : "rounded-full")}>`;
        } else {
          $$payload.out += "<!--[!-->";
          $$payload.out += `<!---->`;
          slot($$payload, $$props, "default", {}, () => {
            $$payload.out += `<svg${attr("class", `w-full h-full ${stringify(rounded ? "rounded" : "rounded-full")}`)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`;
          });
          $$payload.out += `<!---->`;
        }
        $$payload.out += `<!--]--> `;
        if (dot) {
          $$payload.out += "<!--[-->";
          Indicator($$payload, spread_props([{ border: true, offset: rounded }, dot]));
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      alt,
      src,
      ...$$restProps,
      class: avatarClass
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    src,
    href,
    rounded,
    border,
    stacked,
    dot,
    alt,
    size
  });
  pop();
}
export {
  Avatar as A
};
