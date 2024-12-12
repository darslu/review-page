import { N as rest_props, M as fallback, B as setContext, S as spread_props, J as bind_props, C as pop, R as sanitize_props, A as push, L as slot, O as getContext, T as element, G as attr, U as sanitize_slots, P as spread_attributes, V as stringify, Q as escape_html, W as copy_payload, X as assign_payload, F as ensure_array_like } from "../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { F as Frame, h as html } from "../../../chunks/Frame.js";
import { w as writable } from "../../../chunks/index2.js";
import { g as getTranslationFunctions } from "../../../chunks/index3.js";
function Accordion($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "multiple",
    "flush",
    "activeClass",
    "inactiveClass",
    "defaultClass",
    "classActive",
    "classInactive"
  ]);
  push();
  let multiple = fallback($$props["multiple"], false);
  let flush = fallback($$props["flush"], false);
  let activeClass = fallback($$props["activeClass"], "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800");
  let inactiveClass = fallback($$props["inactiveClass"], "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800");
  let defaultClass = fallback($$props["defaultClass"], "text-gray-500 dark:text-gray-400");
  let classActive = fallback($$props["classActive"], "");
  let classInactive = fallback($$props["classInactive"], "");
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, classActive),
    inactiveClass: twMerge(inactiveClass, classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  frameClass = twMerge(defaultClass, $$sanitized_props.class);
  Frame($$payload, spread_props([
    $$restProps,
    {
      class: frameClass,
      color: "none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, {
    multiple,
    flush,
    activeClass,
    inactiveClass,
    defaultClass,
    classActive,
    classInactive
  });
  pop();
}
function AccordionItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let contentClass;
  let tag = fallback($$props["tag"], "h2");
  let open = fallback($$props["open"], false);
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let inactiveClass = fallback($$props["inactiveClass"], () => void 0, true);
  let defaultClass = fallback($$props["defaultClass"], "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700");
  let transitionType = fallback($$props["transitionType"], "slide");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let paddingFlush = fallback($$props["paddingFlush"], "py-5");
  let paddingDefault = fallback($$props["paddingDefault"], "p-5");
  let textFlushOpen = fallback($$props["textFlushOpen"], "text-gray-900 dark:text-white");
  let textFlushDefault = fallback($$props["textFlushDefault"], "text-gray-500 dark:text-gray-400");
  let borderClass = fallback($$props["borderClass"], "border-s border-e group-first:border-t");
  let borderOpenClass = fallback($$props["borderOpenClass"], "border-s border-e");
  let borderBottomClass = fallback($$props["borderBottomClass"], "border-b");
  let borderSharedClass = fallback($$props["borderSharedClass"], "border-gray-200 dark:border-gray-700");
  let classActive = fallback($$props["classActive"], () => void 0, true);
  let classInactive = fallback($$props["classInactive"], () => void 0, true);
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  open = false;
  let buttonClass;
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$sanitized_props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += ` class="group"`;
    },
    () => {
      $$payload.out += `<button type="button"${attr("class", buttonClass)}${attr("aria-expanded", open)}><!---->`;
      slot($$payload, $$props, "header", {}, null);
      $$payload.out += `<!----> `;
      if (open) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "arrowup", {}, () => {
          $$payload.out += `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`;
        });
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "arrowdown", {}, () => {
          $$payload.out += `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`;
        });
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]--></button>`;
    }
  );
  $$payload.out += ` `;
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div${attr("class", contentClass)}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    open,
    activeClass,
    inactiveClass,
    defaultClass,
    transitionType,
    transitionParams,
    paddingFlush,
    paddingDefault,
    textFlushOpen,
    textFlushDefault,
    borderClass,
    borderOpenClass,
    borderBottomClass,
    borderSharedClass,
    classActive,
    classInactive
  });
  pop();
}
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
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  push();
  const group = getContext("group");
  let pill = fallback($$props["pill"], false);
  let outline = fallback($$props["outline"], false);
  let size = fallback($$props["size"], group ? "sm" : "md");
  let href = fallback($$props["href"], () => void 0, true);
  let type = fallback($$props["type"], "button");
  let color = fallback($$props["color"], group ? outline ? "dark" : "alternative" : "primary");
  let shadow = fallback($$props["shadow"], false);
  let tag = fallback($$props["tag"], "button");
  let checked = fallback($$props["checked"], () => void 0, true);
  let disabled = fallback($$props["disabled"], false);
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  buttonClass = twMerge("text-center font-medium", group ? "focus-within:ring-2" : "focus-within:ring-4", group && "focus-within:z-10", group || "focus-within:outline-none", "inline-flex items-center justify-center " + sizeClasses[size], outline && checked && "border dark:border-gray-900", outline && checked && colorCheckedClasses[color], outline && !checked && outlineClasses[color], !outline && checked && colorCheckedClasses[color], !outline && !checked && colorClasses[color], color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"), outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"), coloredFocusClasses[color], hasBorder() && group && "[&:not(:first-child)]:-ms-px", group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg", shadow && "shadow-lg", shadow && coloredShadowClasses[color], disabled && "cursor-not-allowed opacity-50", $$sanitized_props.class);
  if (href && !disabled) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
        {
          "href": href,
          ...$$restProps,
          "class": buttonClass,
          "role": `button`
        },
        [
          {
            attribute_name: "href",
            lang_attribute_name: "hreflang"
          }
        ]
      )
    })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (tag === "button") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button${spread_attributes({
        ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
          {
            "type": type,
            ...$$restProps,
            "disabled": disabled,
            "class": buttonClass
          },
          [{ attribute_name: "formaction" }]
        )
      })}><!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!----></button>`;
    } else {
      $$payload.out += "<!--[!-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({
            ...`${tag}` === "button" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes({ ...$$restProps, "class": buttonClass }, [{ attribute_name: "formaction" }]) : `${tag}` === "form" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes({ ...$$restProps, "class": buttonClass }, [{ attribute_name: "action" }]) : `${tag}` === "a" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes({ ...$$restProps, "class": buttonClass }, [
              {
                attribute_name: "href",
                lang_attribute_name: "hreflang"
              }
            ]) : { ...$$restProps, "class": buttonClass }
          })}`;
        },
        () => {
          $$payload.out += `<!---->`;
          slot($$payload, $$props, "default", {}, null);
          $$payload.out += `<!---->`;
        }
      );
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    pill,
    outline,
    size,
    href,
    type,
    color,
    shadow,
    tag,
    checked,
    disabled
  });
  pop();
}
function CheckCircleSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "check circle solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function Section($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let sectionClass = fallback($$props["sectionClass"], "relative py-6 sm:py-10");
  let name = fallback($$props["name"], "default");
  const sectionClasses = {
    advancedTable: { div: "mx-auto max-w-screen-xl px-4 lg:px-12" },
    blog: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    blogTemplate: {
      div: "flex justify-between px-4 mx-auto max-w-screen-xl"
    },
    comment: { div: "max-w-2xl mx-auto px-4" },
    contact: {
      div: "py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
    },
    content: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    contentwithimg: {
      div: "gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    },
    crudcreateform: { div: "py-8 px-4 mx-auto max-w-2xl lg:py-16" },
    crudcreatedrawer: { div: "h-80" },
    crudreadsection: { div: "py-8 px-4 mx-auto max-w-2xl lg:py-16" },
    cta: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    ctawithimg: {
      div: "gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    },
    default: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    faq: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    feature: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    forgotpassword: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0"
    },
    headingwithctabutton: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    heroDefault: {
      div: "py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    },
    heroVisual: {
      div: "grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    },
    login: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    },
    logos: {
      div: "py-8 lg:py-16 mx-auto max-w-screen-xl px-4"
    },
    maintenance: {
      div: "py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12"
    },
    newsletter: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    none: { div: "" },
    page500: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    page404: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    portfolio: {
      div: "max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24"
    },
    pricing: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    register: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    },
    reset: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    },
    schedule: {
      div: "max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24"
    },
    social: {
      div: "max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
    },
    tableheader: {
      div: "max-w-screen-xl px-4 mx-auto lg:px-12 w-full"
    },
    team: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    testimonial: {
      div: "max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
    }
  };
  $$payload.out += `<section${attr("class", twMerge(sectionClass, $$sanitized_props.classSection))}><div${attr("class", twMerge(sectionClasses[name]["div"], $$sanitized_props.classDiv))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div></section>`;
  bind_props($$props, { sectionClass, name });
  pop();
}
function HeroHeader($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["h1Class", "h2Class", "pClass"]);
  push();
  let h1Class = fallback($$props["h1Class"], "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white");
  let h2Class = fallback($$props["h2Class"], "mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl");
  let pClass = fallback($$props["pClass"], "mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400");
  $$payload.out += `<div${attr("class", $$sanitized_props.class)}>`;
  if ($$slots.h1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1${spread_attributes({
      class: twMerge(h1Class, $$sanitized_props.classH1),
      ...$$restProps
    })}><!---->`;
    slot($$payload, $$props, "h1", {}, null);
    $$payload.out += `<!----></h1>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if ($$slots.h2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2${attr("class", twMerge(h2Class, $$sanitized_props.classH2))}><!---->`;
    slot($$payload, $$props, "h2", {}, null);
    $$payload.out += `<!----></h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if ($$slots.paragraph) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p${attr("class", twMerge(pClass, $$sanitized_props.classP))}><!---->`;
    slot($$payload, $$props, "paragraph", {}, null);
    $$payload.out += `<!----></p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { h1Class, h2Class, pClass });
  pop();
}
function PricingCard($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let divClass = fallback($$props["divClass"], "flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white");
  $$payload.out += `<div${attr("class", twMerge(divClass, $$sanitized_props.class))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { divClass });
  pop();
}
function PricingBodyHead($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let h3Class = fallback($$props["h3Class"], "mb-4 text-2xl font-semibold");
  let pClass = fallback($$props["pClass"], "font-light text-gray-500 sm:text-lg dark:text-gray-400");
  let priceClass = fallback($$props["priceClass"], "flex justify-center items-baseline my-8");
  if ($$slots.h3) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h3${attr("class", twMerge(h3Class, $$sanitized_props.class))}><!---->`;
    slot($$payload, $$props, "h3", {}, null);
    $$payload.out += `<!----></h3>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if ($$slots.paragraph) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p${attr("class", twMerge(pClass, $$sanitized_props.classP))}><!---->`;
    slot($$payload, $$props, "paragraph", {}, null);
    $$payload.out += `<!----></p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if ($$slots.price) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", twMerge(priceClass, $$sanitized_props.classPrice))}><!---->`;
    slot($$payload, $$props, "price", {}, null);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { h3Class, pClass, priceClass });
  pop();
}
function PricingItemWrapper($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let ulClass = fallback($$props["ulClass"], "mb-8 space-y-4 text-left");
  $$payload.out += `<ul${attr("class", twMerge(ulClass, $$sanitized_props.class))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul> `;
  if ($$slots.btn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "btn", {}, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ulClass });
  pop();
}
function PricingHead($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let divClass = fallback($$props["divClass"], "mx-auto max-w-screen-md text-center mb-8 lg:mb-12");
  let h2Class = fallback($$props["h2Class"], "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white");
  let pClass = fallback($$props["pClass"], "mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400");
  $$payload.out += `<div${attr("class", twMerge(divClass, $$sanitized_props.class))}>`;
  if ($$slots.h2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2${attr("class", twMerge(h2Class, $$sanitized_props.classH2))}><!---->`;
    slot($$payload, $$props, "h2", {}, null);
    $$payload.out += `<!----></h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if ($$slots.paragraph) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p${attr("class", twMerge(pClass, $$sanitized_props.classP))}><!---->`;
    slot($$payload, $$props, "paragraph", {}, null);
    $$payload.out += `<!----></p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { divClass, h2Class, pClass });
  pop();
}
function PricingItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let liClass = fallback($$props["liClass"], "flex items-center space-x-3");
  $$payload.out += `<li${attr("class", liClass)}><!---->`;
  CheckCircleSolid?.($$payload, {
    size: "sm",
    class: twMerge("ml-2", $$sanitized_props.class)
  });
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></li>`;
  bind_props($$props, { liClass });
  pop();
}
function HeroBanner($$payload) {
  Section($$payload, {
    name: "heroVisual",
    classDiv: "py-4 lg:py-8 mx-auto max-w-screen-xl px-4",
    sectionClass: "py-2",
    children: ($$payload2) => {
      $$payload2.out += `<div class="mr-auto col-span-12 w-full">`;
      HeroHeader($$payload2, {
        h1Class: "mb-4  font-extrabold tracking-tight  md:text-5xl dark:text-white text-center mb-10",
        pClass: " max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-xl dark:text-gray-400 text-center mx-auto lg:mb-10",
        $$slots: {
          h1: ($$payload3) => {
            {
              $$payload3.out += `Top 10 Merino Brands`;
            }
          },
          paragraph: ($$payload3) => {
            {
              $$payload3.out += `Exploring the top merino brands for unmatched comfort, durability, and eco-friendly style
				in every season`;
            }
          }
        }
      });
      $$payload2.out += `<!----></div> <div class="col-span-12 lg:mt-0 lg:flex"><img src="images/merino-sheep.jpg" alt="merino sheeps"></div>`;
    },
    $$slots: { default: true }
  });
}
function ReviewTrust($$payload) {
  const items = Array(3);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Section($$payload2, {
      name: "pricing",
      children: ($$payload3) => {
        PricingHead($$payload3, {
          h2Class: "flex justify-center items-center mb-6",
          $$slots: {
            h2: ($$payload4) => {
              {
                $$payload4.out += `<div class="flex flex-col md:flex-row"><span class="flex items-end text-4xl">Best reviews in</span> <img src="images/Trustpilot_Logo__2022__svg.webp" class="ml-3 h-12" alt="Trustpilot"></div>`;
              }
            },
            paragraph: ($$payload4) => {
              {
                $$payload4.out += `Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
			long-term value and drive economic growth.`;
              }
            }
          }
        });
        $$payload3.out += `<!----> <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">`;
        PricingCard($$payload3, {
          children: ($$payload4) => {
            PricingBodyHead($$payload4, {
              $$slots: {
                h3: ($$payload5) => {
                  {
                    $$payload5.out += `Menique`;
                  }
                },
                paragraph: ($$payload5) => {
                  {
                    $$payload5.out += `Relevant for multiple users, extended &amp; premium support.`;
                  }
                },
                price: ($$payload5) => {
                  {
                    $$payload5.out += `<span class="mr-2 text-5xl font-extrabold">4.7</span> <span class="text-gray-500 dark:text-gray-400">(1551 reviews)</span>`;
                  }
                }
              }
            });
            $$payload4.out += `<!----> `;
            PricingItemWrapper($$payload4, {
              children: ($$payload5) => {
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Super soft 100% merino</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Premium quality</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Minimalist style</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-red-500 dark:text-red-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Limited sizing options</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-red-500 dark:text-red-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Not always in stock</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: {
                default: true,
                btn: ($$payload5) => {
                  {
                    Button($$payload5, {
                      color: "red",
                      href: "https://menique.com",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Get started`;
                      },
                      $$slots: { default: true }
                    });
                  }
                }
              }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        PricingCard($$payload3, {
          children: ($$payload4) => {
            PricingBodyHead($$payload4, {
              $$slots: {
                h3: ($$payload5) => {
                  {
                    $$payload5.out += `Allbirds`;
                  }
                },
                paragraph: ($$payload5) => {
                  {
                    $$payload5.out += `Best option for personal use &amp; for your next project.`;
                  }
                },
                price: ($$payload5) => {
                  {
                    $$payload5.out += `<span class="mr-2 text-5xl font-extrabold">4.3</span> <span class="text-gray-500 dark:text-gray-400">(2026 reviews)</span>`;
                  }
                }
              }
            });
            $$payload4.out += `<!----> `;
            PricingItemWrapper($$payload4, {
              children: ($$payload5) => {
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Individual configuration</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>No setup, or hidden fees</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Team size: <span class="font-semibold">1 developer</span></span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-red-500 dark:text-red-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Premium support: <span class="font-semibold">6 months</span></span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-red-500 dark:text-red-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Free updates: <span class="font-semibold">6 months</span></span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: {
                default: true,
                btn: ($$payload5) => {
                  {
                    Button($$payload5, {
                      color: "red",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Get started`;
                      },
                      $$slots: { default: true }
                    });
                  }
                }
              }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        PricingCard($$payload3, {
          children: ($$payload4) => {
            PricingBodyHead($$payload4, {
              $$slots: {
                h3: ($$payload5) => {
                  {
                    $$payload5.out += `Icebreaker`;
                  }
                },
                paragraph: ($$payload5) => {
                  {
                    $$payload5.out += `Best for large scale uses and extended redistribution rights.`;
                  }
                },
                price: ($$payload5) => {
                  {
                    $$payload5.out += `<span class="mr-2 text-5xl font-extrabold">4.0</span> <span class="text-gray-500 dark:text-gray-400">(1526 reviews)</span>`;
                  }
                }
              }
            });
            $$payload4.out += `<!----> `;
            PricingItemWrapper($$payload4, {
              children: ($$payload5) => {
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Individual configuration</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>No setup, or hidden fees</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-green-500 dark:text-green-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Team size: <span class="font-semibold">100+ developer</span></span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-red-500 dark:text-red-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Premium support: <span class="font-semibold">36 months</span></span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> `;
                PricingItem($$payload5, {
                  class: "text-red-500 dark:text-red-400",
                  children: ($$payload6) => {
                    $$payload6.out += `<span>Free updates: <span class="font-semibold">36 months</span></span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: {
                default: true,
                btn: ($$payload5) => {
                  {
                    Button($$payload5, {
                      color: "red",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Get started`;
                      },
                      $$slots: { default: true }
                    });
                  }
                }
              }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="container mx-auto px-3 px-md-60 mb-10"><h3 class="mb-5 text-center text-3xl">Another brands...</h3> `;
    Accordion($$payload2, {
      multiple: true,
      children: ($$payload3) => {
        AccordionItem($$payload3, {
          get open() {
            return items[0];
          },
          set open($$value) {
            items[0] = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            $$payload4.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">U.S. brand known for comfortable and durable merino products, especially socks.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<span slot="header">Smartwool `;
              PricingItem($$payload4, {
                class: "text-green-500 dark:text-green-400",
                children: ($$payload5) => {
                  $$payload5.out += `<span>4.4 (1600reviews)</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></span>`;
            }
          }
        });
        $$payload3.out += `<!----> `;
        AccordionItem($$payload3, {
          get open() {
            return items[1];
          },
          set open($$value) {
            items[1] = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            $$payload4.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Renowned for outdoor gear, with merino blends for durability and sustainability.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<div slot="header">Patagonia `;
              PricingItem($$payload4, {
                class: "text-green-500 dark:text-green-400",
                children: ($$payload5) => {
                  $$payload5.out += `<span>4.3 (600reviews)</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div>`;
            }
          }
        });
        $$payload3.out += `<!----> `;
        AccordionItem($$payload3, {
          get open() {
            return items[2];
          },
          set open($$value) {
            items[2] = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            $$payload4.out += `<p>Affordable and versatile merino clothing focused on quality and everyday wear.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<div slot="header">Minus33 `;
              PricingItem($$payload4, {
                class: "text-green-500 dark:text-green-400",
                children: ($$payload5) => {
                  $$payload5.out += `<span>4.1 (400reviews)</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div>`;
            }
          }
        });
        $$payload3.out += `<!----> `;
        AccordionItem($$payload3, {
          get open() {
            return items[2];
          },
          set open($$value) {
            items[2] = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            $$payload4.out += `<p>Vermont-based, known for durable merino wool socks with a lifetime warranty.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<div slot="header">Darn Tough `;
              PricingItem($$payload4, {
                class: "text-yellow-500 dark:text-yellow-400",
                children: ($$payload5) => {
                  $$payload5.out += `<span>4.2 (300reviews)</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div>`;
            }
          }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function Writer($$payload) {
  $$payload.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse container mx-auto px-10 md:px-60 mt-2 mb-6">`;
  Avatar($$payload, {
    src: "images/dariaus-profile.jpg",
    class: "ounded-full"
  });
  $$payload.out += `<!----> <div class="space-y-1 font-medium dark:text-white"><div>Darius Šlu</div> <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div></div></div>`;
}
function CompareTable($$payload, $$props) {
  push();
  let vpnData = [
    {
      feature: "Device Number",
      Surfshark: "Unlimited",
      ExpressVPN: 8,
      ProtonVPN: 10,
      PIA: "Unlimited",
      CyberGhost: 7
    },
    {
      feature: "Server Locations",
      Surfshark: 100,
      ExpressVPN: 105,
      ProtonVPN: 100,
      PIA: 91,
      CyberGhost: 100
    },
    {
      feature: "Alternative Email Generator",
      Surfshark: true,
      ExpressVPN: false,
      ProtonVPN: false,
      PIA: false,
      CyberGhost: false
    },
    {
      feature: "Data Breach Alerts",
      Surfshark: true,
      ExpressVPN: false,
      ProtonVPN: false,
      PIA: true,
      CyberGhost: false
    },
    {
      feature: "Malware Protection",
      Surfshark: true,
      ExpressVPN: false,
      ProtonVPN: false,
      PIA: true,
      CyberGhost: false
    },
    {
      feature: "Tracker and Ad Blocker",
      Surfshark: true,
      ExpressVPN: true,
      ProtonVPN: true,
      PIA: false,
      CyberGhost: true
    },
    {
      feature: "Test info",
      Surfshark: true,
      ExpressVPN: true,
      ProtonVPN: true,
      PIA: false,
      CyberGhost: true
    }
  ];
  const getIcon = (condition) => {
    if (typeof condition === "boolean") {
      return {
        icon: condition ? `<svg xmlns="http://www.w3.org/2000/svg" fill="green" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.285 2.28l-11.321 11.333-4.243-4.242-2.121 2.121 6.364 6.364 13.443-13.444z"/></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" fill="red" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.364 18.364l-6.364-6.364-6.364 6.364-2.121-2.121 6.364-6.364-6.364-6.364 2.121-2.121 6.364 6.364 6.364-6.364 2.121 2.121-6.364 6.364 6.364 6.364z"/></svg>`,
        class: condition ? "check-icon" : "cross-icon"
      };
    } else {
      return { icon: condition, class: "" };
    }
  };
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array = ensure_array_like(vpnData);
  $$payload.out += `<div class="table-container md:w-[1400px] mx-auto svelte-ovgz21"><table class="svelte-ovgz21"><thead><tr><th class="svelte-ovgz21"></th><th${attr("class", `${stringify("main-column border-black border-t border-x rounded-t-md")} svelte-ovgz21`)}>Surfshark</th><th${attr("class", `${stringify("")} svelte-ovgz21`)}>ExpressVPN</th><th${attr("class", `${stringify("")} svelte-ovgz21`)}>ProtonVPN</th><th${attr("class", `${stringify("")} svelte-ovgz21`)}>Private Internet Access</th><th${attr("class", `${stringify("")} svelte-ovgz21`)}>CyberGhost</th></tr></thead><tbody class="svelte-ovgz21"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let row = each_array[$$index];
    $$payload.out += `<tr class="svelte-ovgz21"><td class="svelte-ovgz21">${escape_html(row.feature)}</td><td${attr("class", `${stringify("main-column border-black border-x")} svelte-ovgz21`)}><span${attr("class", `${stringify(getIcon(row.Surfshark).class)} svelte-ovgz21`)}>${html(getIcon(row.Surfshark).icon)}</span></td><td${attr("class", `${stringify("")} svelte-ovgz21`)}><span${attr("class", `${stringify(getIcon(row.ExpressVPN).class)} svelte-ovgz21`)}>${html(getIcon(row.ExpressVPN).icon)}</span></td><td${attr("class", `${stringify("")} svelte-ovgz21`)}><span${attr("class", `${stringify(getIcon(row.ProtonVPN).class)} svelte-ovgz21`)}>${html(getIcon(row.ProtonVPN).icon)}</span></td><td${attr("class", `${stringify("")} svelte-ovgz21`)}><span${attr("class", `${stringify(getIcon(row.PIA).class)} svelte-ovgz21`)}>${html(getIcon(row.PIA).icon)}</span></td><td${attr("class", `${stringify("")} svelte-ovgz21`)}><span${attr("class", `${stringify(getIcon(row.CyberGhost).class)} svelte-ovgz21`)}>${html(getIcon(row.CyberGhost).icon)}</span></td></tr>`;
  }
  $$payload.out += `<!--]--><tr class="svelte-ovgz21"><td class="svelte-ovgz21"></td><td class="main-column border-black border-b border-x rounded-b-md mt-10 svelte-ovgz21"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://menique.com/collections/mens-merino-underwear/products/mens-merino-160gsm-short-boxer-briefs`, void 0))} class="bg-green-500 px-3 py-2 rounded-md text-white" aria-label="visit menique">Get deal</a></td><td class="svelte-ovgz21"></td><td class="svelte-ovgz21"></td><td class="svelte-ovgz21"></td><td class="svelte-ovgz21"></td></tr></tbody></table></div>`;
  pop();
}
function ProductDetails($$payload, $$props) {
  push();
  let products = [
    {
      title: "Best Overall Gaiter",
      name: "Rab Muztag GTX",
      score: 72,
      ratings: [
        { name: "Comfort and Breathability", value: 7 },
        { name: "Debris Protection", value: 9 },
        { name: "Durability", value: 6 },
        { name: "Ease of Attachment", value: 6 },
        { name: "Water Resistance", value: 8 },
        { name: "Weight", value: 4 }
      ],
      reasonsToBuy: [
        "Fully waterproof",
        "Lightweight for the height"
      ],
      reasonsToAvoid: ["Durability concerns", "Difficult to unhook"],
      prices: [
        { label: "$90 at Backcountry", link: "#" },
        { label: "$90 at Amazon", link: "#" },
        { label: "Check price at REI", link: "#" }
      ],
      image: "https://menique.com/cdn/shop/files/2-dark-green_6a969e5b-076d-45d8-9ef1-a18c7c80d44b.jpg"
    },
    {
      title: "Best Budget Gaiter",
      name: "Black Diamond GTX",
      score: 65,
      ratings: [
        { name: "Comfort and Breathability", value: 6.5 },
        { name: "Debris Protection", value: 8 },
        { name: "Durability", value: 7 },
        { name: "Ease of Attachment", value: 5 },
        { name: "Water Resistance", value: 7.5 },
        { name: "Weight", value: 6 }
      ],
      reasonsToBuy: ["Affordable", "Durable materials"],
      reasonsToAvoid: ["Heavier than competitors"],
      prices: [
        { label: "$70 at Backcountry", link: "#" },
        { label: "Check price at Amazon", link: "#" }
      ],
      image: "https://unboundmerino.com/cdn/shop/products/10PK-BB_BLK-2.jpg?crop=center&height=650&v=1616463057&width=541"
      // Replace with actual image path
    }
  ];
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array = ensure_array_like(products);
  $$payload.out += `<div class="space-y-8 my-20"><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array.length; $$index_4 < $$length; $$index_4++) {
    let product = each_array[$$index_4];
    const each_array_1 = ensure_array_like(product.ratings);
    const each_array_2 = ensure_array_like(product.prices);
    const each_array_3 = ensure_array_like(product.reasonsToBuy);
    const each_array_4 = ensure_array_like(product.reasonsToAvoid);
    $$payload.out += `<section class="md:w-[1000px] mx-auto w-full rounded-lg bg-gray-50 p-6 shadow-md"><div class="flex items-center justify-between"><h2 class="text-2xl font-bold">${escape_html(product.title)}</h2> <span class="rounded bg-green-200 px-2 py-1 text-green-700">Editors' Choice</span></div> <h3 class="text-xl text-gray-600">${escape_html(product.name)}</h3> <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"><img${attr("src", product.image)}${attr("alt", product.name)} class="h-60 w-full rounded-lg object-cover"> <div><div class="text-5xl font-bold text-green-700">${escape_html(product.score)}</div> <div class="text-sm text-gray-500">Overall Score</div> <div class="mt-4"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let rating = each_array_1[$$index];
      $$payload.out += `<div class="mb-2 flex items-center justify-between"><span class="text-sm">${escape_html(rating.name)}</span> <span class="text-sm font-bold">${escape_html(rating.value)}</span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div${attr("class", `h-2 rounded-full ${stringify(rating.value > 8 ? "bg-green-700" : rating.value > 6 ? "bg-green-500" : rating.value > 4 ? "bg-yellow-400" : "bg-red-500")}`)}${attr("style", `width: calc(${stringify(rating.value * 10)}%);`)}></div></div>`;
    }
    $$payload.out += `<!--]--></div></div> <div><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let price = each_array_2[$$index_1];
      $$payload.out += `<a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(price.link, void 0))} class="mt-2 block rounded-lg bg-blue-500 py-2 text-center text-white hover:bg-blue-600">${escape_html(price.label)}</a>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"><div class="product-pros svelte-ooqlc2"><h4 class="text-lg font-bold">Reasons to Buy</h4> <ul class="list-inside list-disc text-green-700"><!--[-->`;
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let reason = each_array_3[$$index_2];
      $$payload.out += `<li class="flex items-center svelte-ooqlc2">${escape_html(reason)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="product-cons svelte-ooqlc2"><h4 class="text-lg font-bold">Reasons to Avoid</h4> <ul class="list-inside list-disc text-yellow-700"><!--[-->`;
    for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
      let reason = each_array_4[$$index_3];
      $$payload.out += `<li class="flex items-center svelte-ooqlc2">${escape_html(reason)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div></section>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function ProductsTable($$payload, $$props) {
  push();
  let products = [
    {
      name: "Rab Muztag GTX",
      image: "",
      award: "Best Overall Gaiter",
      price: "$90.00",
      pros: "Comfortable, lightweight for the size, replaceable instep, excellent protection",
      cons: "Thinner material for a full length, challenging lace hook",
      bottomLine: "An adjustable, lightweight full-length gaiter for sloppy mud, rain, and winter snow",
      categories: {
        "Comfort and Breathability": { value: 7, weight: 25 },
        "Debris Protection": { value: 9, weight: 25 },
        "Durability": { value: 6, weight: 15 },
        "Ease of Attachment": { value: 6, weight: 15 },
        "Water Resistance": { value: 8, weight: 10 },
        "Weight": { value: 6, weight: 10 }
      }
    },
    {
      name: "Outdoor Research Helium",
      image: "",
      award: "Most Comfortable Full-Length Option",
      price: "$35.53",
      pros: "Light, instep strap can be replaced, comfortable, good breathability",
      cons: "No insulation, thin material isn’t as durable",
      bottomLine: "A full-length yet lightweight gaiter that feels good and is great in the shoulder seasons",
      categories: {
        "Comfort and Breathability": { value: 7, weight: 25 },
        "Debris Protection": { value: 9, weight: 25 },
        "Durability": { value: 6, weight: 15 },
        "Ease of Attachment": { value: 6, weight: 15 },
        "Water Resistance": { value: 8, weight: 10 },
        "Weight": { value: 6, weight: 10 }
      }
    }
  ];
  const calculateOverallScore = (categories) => {
    const totalWeight = Object.values(categories).reduce((sum, category) => sum + category.weight, 0);
    const weightedSum = Object.values(categories).reduce((sum, category) => sum + category.value * category.weight, 0);
    const overallScore = weightedSum / totalWeight;
    return Math.round(overallScore * 10) / 10;
  };
  const each_array = ensure_array_like(products);
  const each_array_1 = ensure_array_like(products);
  const each_array_2 = ensure_array_like(products);
  const each_array_3 = ensure_array_like(products);
  const each_array_4 = ensure_array_like(products);
  const each_array_5 = ensure_array_like(products);
  const each_array_6 = ensure_array_like(products);
  const each_array_7 = ensure_array_like(products);
  const each_array_8 = ensure_array_like(products);
  const each_array_9 = ensure_array_like(Object.keys(products[0].categories));
  $$payload.out += `<div class="overflow-x-auto md:w-[750px] mx-auto"><table class="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm"><thead class="bg-gray-100"><tr><th class="px-4 py-2 text-left font-semibold text-gray-700 svelte-1nby3xc">Feature</th><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    $$payload.out += `<th class="px-4 py-2 text-left font-semibold text-gray-700 svelte-1nby3xc">${escape_html(product.name)}</th>`;
  }
  $$payload.out += `<!--]--></tr></thead><tbody class="divide-y divide-gray-200"><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Award</td><td class="px-4 py-2 svelte-1nby3xc">Best Overall Gaiter</td><td class="px-4 py-2 svelte-1nby3xc">Most Comfortable Full-Length Option</td></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Image</td><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let product = each_array_1[$$index_1];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(product.image ? `<img src="${product.image}" alt="${product.name}" />` : "No Image")}</td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Award</td><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let product = each_array_2[$$index_2];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(product.award)}</td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Price</td><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let product = each_array_3[$$index_3];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(product.price)}</td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Overall Score</td><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let product = each_array_4[$$index_4];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(calculateOverallScore(product.categories) * 10)}</td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Overall Score</td><!--[-->`;
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let product = each_array_5[$$index_5];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc"><div class="relative w-full bg-gray-200 rounded"><div class="bg-green-500 text-xs leading-none text-right pr-2 text-white h-4 rounded flex justify-end items-center"${attr("style", `width: ${stringify(calculateOverallScore(product.categories) * 10)}%;`)}>${escape_html(calculateOverallScore(product.categories) * 10)}</div></div></td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Pros</td><!--[-->`;
  for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
    let product = each_array_6[$$index_6];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(product.pros)}</td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Cons</td><!--[-->`;
  for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
    let product = each_array_7[$$index_7];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(product.cons)}</td>`;
  }
  $$payload.out += `<!--]--></tr><tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">Bottom Line</td><!--[-->`;
  for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
    let product = each_array_8[$$index_8];
    $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc">${escape_html(product.bottomLine)}</td>`;
  }
  $$payload.out += `<!--]--></tr><!--[-->`;
  for (let $$index_10 = 0, $$length = each_array_9.length; $$index_10 < $$length; $$index_10++) {
    let category = each_array_9[$$index_10];
    const each_array_10 = ensure_array_like(products);
    $$payload.out += `<tr><td class="px-4 py-2 font-medium text-gray-800 svelte-1nby3xc">${escape_html(category)} (${escape_html(products[0].categories[category].weight)}%)</td><!--[-->`;
    for (let $$index_9 = 0, $$length2 = each_array_10.length; $$index_9 < $$length2; $$index_9++) {
      let product = each_array_10[$$index_9];
      $$payload.out += `<td class="px-4 py-2 svelte-1nby3xc"><div class="relative w-full bg-gray-200 rounded"><div class="bg-blue-500 text-xs leading-none text-right pr-2 text-white h-4 rounded flex justify-end items-center"${attr("style", `width: ${stringify(product.categories[category].value * 10)}%;`)}>${escape_html(product.categories[category].value)}</div></div></td>`;
    }
    $$payload.out += `<!--]--></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  pop();
}
function _page($$payload) {
  HeroBanner($$payload);
  $$payload.out += `<!----> `;
  Writer($$payload);
  $$payload.out += `<!----> <div class="container mx-auto px-10 md:px-60"><p class="mb-5">Merino wool is renowned for its exceptional qualities, making it a preferred choice for outdoor enthusiasts and everyday wearers alike. Sourced from the Merino sheep, this fine wool boasts natural properties that offer unparalleled comfort, breathability, and temperature regulation. Whether you're facing the chill of winter or the warmth of summer, merino wool adapts to your body’s needs, keeping you cozy without overheating.</p> <p class="mb-5">In addition to its performance features, merino wool is celebrated for its sustainability. As a renewable resource, it is biodegradable and often produced under ethical farming practices. This makes merino clothing not only a smart choice for your wardrobe but also a responsible option for the environment.</p> <p class="mb-5">In this guide, we explore the top 10 merino brands that stand out for their quality, innovation, and commitment to sustainability. From luxurious base layers to durable outdoor gear, these brands offer a wide range of products designed to enhance your lifestyle while embracing the natural benefits of merino wool.</p></div> `;
  CompareTable($$payload);
  $$payload.out += `<!----> `;
  ProductDetails($$payload);
  $$payload.out += `<!----> `;
  ProductsTable($$payload);
  $$payload.out += `<!---->  `;
  ReviewTrust($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
