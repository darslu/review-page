import { N as rest_props, A as push, M as fallback, B as setContext, S as spread_props, J as bind_props, C as pop, R as sanitize_props, L as slot, O as getContext, T as element, G as attr, P as spread_attributes, U as sanitize_slots, F as ensure_array_like, Q as escape_html, V as stringify, W as copy_payload, X as assign_payload } from "./index.js";
import { twMerge } from "tailwind-merge";
import { g as getTranslationFunctions, h as html } from "./index3.js";
import { A as Avatar } from "./Avatar.js";
import { F as Frame } from "./Frame.js";
import { w as writable } from "./index2.js";
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
function HeroBanner($$payload) {
  Section($$payload, {
    name: "heroVisual",
    classDiv: "py-4 lg:py-8 mx-auto max-w-screen-xl px-0 md:px-4 lg:gap-0",
    sectionClass: "py-2",
    children: ($$payload2) => {
      $$payload2.out += `<div class="mr-auto col-span-12 w-full">`;
      HeroHeader($$payload2, {
        h1Class: "mb-4 font-extrabold tracking-tight text-2xl md:text-5xl dark:text-white text-center mb-5 md:mb-10 font-black",
        pClass: "  mb-6 font-light lg:mb-0 md:text-lg lg:text-xl dark:text-gray-400 text-center mx-auto lg:mb-10 ",
        $$slots: {
          h1: ($$payload3) => {
            {
              $$payload3.out += `The Best Men’s Boxer Briefs Money Can Buy in 2025`;
            }
          },
          paragraph: ($$payload3) => {
            {
              $$payload3.out += `Based on my testing, menique's boxer briefs are exceptional for their superior comfort and high-quality design.`;
            }
          }
        }
      });
      $$payload2.out += `<!----></div> <div class="col-span-12 lg:mt-0 lg:flex mx-auto"><img src="images/best-boxers-2025.jpg" alt="merino sheeps"></div>`;
    },
    $$slots: { default: true }
  });
}
function ReviewTrust($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<h2 class="mb-4 mb-5 mt-10 text-center text-2xl font-bold dark:text-white md:mb-16 md:mt-16 md:text-3xl">Top 5 Boxer Briefs: Test Results</h2> <div class="max-w-[1600px] mx-auto"><div class="flex gap-6 overflow-x-auto snap-x snap-mandatory sm:gap-8 md:gap-3 lg:overflow-visible lg:grid lg:grid-cols-5 mx-5"><div class="mt-10 snap-center shrink-0 w-[80%] max-w-[80%] lg:w-[100%] lg:max-w-none relative"><img src="images/recommend.svg" alt="Winner badge" class="mx-auto h-8 recommended-position svelte-1q25o0e"> <div class="space-y-6 p-6 border-4 rounded-md border-[#5DCE8B] min-h-[400px] text-center"><img src="images/menique-logo.png" alt="Menique" class="mx-auto h-8 mt-[72px] mb-4"> <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 my-5">100% Merino Boxer Briefs</span> <div class="flex justify-center text-[#5DCE8B] dark:text-white mb-10 text-center"><span class="text-5xl font-extrabold tracking-tight text-center">9.8</span></div> <div class="text-xl font-medium text-[#191919] text-center mb-5">£27.00</div> <div><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://menique.com/collections/mens-merino-underwear/products/mens-merino-160gsm-short-boxer-briefs`, void 0))} class="w-full rounded-md bg-[#5DCE8B] text-white px-14 py-2">GET DEAL</a></div></div></div> <div class="mt-10 snap-center shrink-0 w-[80%] max-w-[80%] lg:w-[100%] lg:max-w-none"><div class="space-y-6 p-6 border-4 rounded-md min-h-[400px] text-center"><img src="images/smartwool-logo.png" alt="Smartwool" class="mx-auto h-8 mt-[72px] mb-4"> <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 my-5">Merino Boxer Briefs</span> <div class="flex justify-center text-[#FAB907] dark:text-white mb-10 text-center"><span class="text-5xl font-extrabold tracking-tight text-center">8.6</span></div> <div class="text-xl font-medium text-[#191919] text-center mb-5">£45</div></div></div> <div class="mt-10 snap-center shrink-0 w-[80%] max-w-[80%] lg:w-[100%] lg:max-w-none"><div class="space-y-6 p-6 border-4 rounded-md min-h-[400px] text-center"><img src="images/icebreaker-logo.png" alt="Icebreaker" class="mx-auto h-8 mt-[72px] mb-4"> <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 my-5">Anatomica Merino Boxers</span> <div class="flex justify-center text-[#FAB907] dark:text-white mb-10 text-center"><span class="text-5xl font-extrabold tracking-tight text-center">8.2</span></div> <div class="text-xl font-medium text-[#191919] text-center mb-5">£40</div></div></div> <div class="mt-10 snap-center shrink-0 w-[80%] max-w-[80%] lg:w-[100%] lg:max-w-none"><div class="space-y-6 p-6 border-4 rounded-md min-h-[400px] text-center"><img src="images/patagonia-logo.png" alt="Patagonia" class="mx-auto h-8 mt-[72px] mb-4"> <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 my-5">Sender Boxer Briefs 6"</span> <div class="flex justify-center text-[#EA3D3D] dark:text-white mb-10 text-center"><span class="text-5xl font-extrabold tracking-tight text-center">7.6</span></div> <div class="text-xl font-medium text-[#191919] text-center mb-5">£35</div></div></div> <div class="mt-10 snap-center shrink-0 w-[80%] max-w-[80%] lg:w-[100%] lg:max-w-none"><div class="space-y-6 p-6 border-4 rounded-md min-h-[400px] text-center"><img src="images/lululemon-logo.png" alt="Patagonia" class="mx-auto h-8 mt-[72px] mb-4"> <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 my-5">Rapid Vent Tech Boxer 5"</span> <div class="flex justify-center text-[#EA3D3D] dark:text-white mb-10 text-center"><span class="text-5xl font-extrabold tracking-tight text-center">7.2</span></div> <div class="text-xl font-medium text-[#191919] text-center mb-5">£20</div></div></div></div></div>`;
  pop();
}
function Writer($$payload) {
  $$payload.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse container mx-auto px-5 md:px-60 mt-2 mb-6">`;
  Avatar($$payload, {
    src: "images/dariaus-profile.jpg",
    class: "ounded-full"
  });
  $$payload.out += `<!----> <div class="space-y-1 font-medium dark:text-white"><div>By Darius</div> <div class="text-sm text-gray-500 dark:text-gray-400">A programmer with a practical twist—solving problems and testing what works in the real world.</div></div></div>`;
}
function CompareTable($$payload, $$props) {
  push();
  let boxerBriefsData = [
    {
      feature: "Overall score",
      Menique: 9.8,
      Smartwool: 8.6,
      Icebreaker: 8.2,
      Patagonia: 7.6,
      Lululemon: 7.2
    },
    {
      feature: "True to size",
      Menique: true,
      Smartwool: true,
      Icebreaker: false,
      Patagonia: false,
      Lululemon: false
    },
    {
      feature: "Shape retention",
      Menique: true,
      Smartwool: false,
      Icebreaker: true,
      Patagonia: false,
      Lululemon: false
    },
    {
      feature: "Seam comfort",
      Menique: true,
      Smartwool: true,
      Icebreaker: true,
      Patagonia: true,
      Lululemon: false
    },
    {
      feature: "Fit consistency",
      Menique: true,
      Smartwool: true,
      Icebreaker: false,
      Patagonia: true,
      Lululemon: false
    },
    {
      feature: "Waistband comfort",
      Menique: true,
      Smartwool: true,
      Icebreaker: false,
      Patagonia: false,
      Lululemon: true
    },
    {
      feature: "Composition",
      Menique: "100% Merino Wool",
      Smartwool: "88% Merino Wool, <br>12% Nylon",
      Icebreaker: "83% Merino Wool,<br> 12% Nylon,<br> 5% Elastane",
      Patagonia: "89% Recycled Nylon, <br>11% Spandex",
      Lululemon: "91% Nylon, <br>9% Elastane"
    },
    {
      feature: "Price",
      Menique: "£27.00",
      Smartwool: "£45",
      Icebreaker: "£40",
      Patagonia: "£35",
      Lululemon: "£20"
    }
  ];
  const getIcon = (condition) => {
    if (typeof condition === "boolean") {
      return {
        icon: condition ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#5DCE8B" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.285 2.28l-11.321 11.333-4.243-4.242-2.121 2.121 6.364 6.364 13.443-13.444z"/></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.364 18.364l-6.364-6.364-6.364 6.364-2.121-2.121 6.364-6.364-6.364-6.364 2.121-2.121 6.364 6.364 6.364-6.364 2.121 2.121-6.364 6.364 6.364 6.364z"/></svg>`,
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
  const each_array = ensure_array_like(boxerBriefsData);
  $$payload.out += `<h2 class="mb-4 mb-5 mt-10 text-center text-2xl font-bold dark:text-white md:mt-16 md:mb-16 md:text-3xl">Top 5 Boxer Briefs: Test Results</h2> <div class="table-container 2xl:mx-auto 2xl:w-[1600px] mb-20 svelte-yvpoxi"><table class="mx-5 xl:mx-0 svelte-yvpoxi"><thead><tr><th class="svelte-yvpoxi"></th><th${attr("class", `${stringify("main-column pt-0 rounded-t-md border-x-4 border-t-4 border-[#5DCE8B]")} svelte-yvpoxi`)}><img src="images/medal.svg" alt="Winner badge" class="mx-auto h-20 medal-position svelte-yvpoxi"> <img src="images/menique-logo.png" alt="Menique" class="mx-auto h-10"> <span class="mt-2 block text-sm font-medium text-gray-600">100% Merino Boxer Briefs</span></th><th${attr("class", `${stringify("")} svelte-yvpoxi`)}><img src="images/smartwool-logo.png" alt="Smartwool" class="mx-auto h-8 mt-[84px]"> <span class="mt-2 block text-sm font-medium text-gray-600">Merino Boxer Briefs</span></th><th${attr("class", `${stringify("")} svelte-yvpoxi`)}><img src="images/icebreaker-logo.png" alt="Icebreaker" class="mx-auto h-8 mt-[84px]"> <span class="mt-2 block text-sm font-medium text-gray-600">Anatomica Merino Boxers</span></th><th${attr("class", `${stringify("")} svelte-yvpoxi`)}><img src="images/patagonia-logo.png" alt="Patagonia" class="mx-auto h-8 mt-[84px]"> <span class="mt-2 block text-sm font-medium text-gray-600">Sender Boxer Briefs 6"</span></th><th${attr("class", `${stringify("")} svelte-yvpoxi`)}><img src="images/lululemon-logo.png" alt="Patagonia" class="mx-auto h-8 mt-[84px]"> <span class="mt-2 block text-sm font-medium text-gray-600">Rapid Vent Tech Boxer 5"</span></th></tr></thead><tbody class="svelte-yvpoxi"><tr class="svelte-yvpoxi"><td class="svelte-yvpoxi"></td><td${attr("class", `${stringify("main-column border-x-4 border-[#5DCE8B]")} svelte-yvpoxi`)}><img src="images/menique-boxers.png" alt="Menique Boxer Briefs" class="mx-auto w-8/12"></td><td${attr("class", `${stringify("p-0")} svelte-yvpoxi`)}><img src="/images/smartwool-boxers.png" alt="Smartwool Boxer Briefs" class="mx-auto w-8/12"></td><td${attr("class", `${stringify("p-0")} svelte-yvpoxi`)}><img src="/images/icebreaker-boxers.png" alt="Icebreaker Boxer Briefs" class="mx-auto w-8/12"></td><td${attr("class", `${stringify("p-0")} svelte-yvpoxi`)}><img src="/images/patagonia-boxers.png" alt="Patagonia Boxer Briefs" class="mx-auto w-8/12"></td><td${attr("class", `${stringify("p-0")} svelte-yvpoxi`)}><img src="/images/lululemon-boxers.png" alt="Lululemon Boxer Briefs" class="mx-auto w-8/12"></td></tr><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let row = each_array[$$index];
    $$payload.out += `<tr class="svelte-yvpoxi"><td class="svelte-yvpoxi">${escape_html(row.feature)}</td><td${attr("class", `${stringify("main-column border-x-4 border-[#5DCE8B]")} svelte-yvpoxi`)}><span${attr("class", `${stringify(getIcon(row.Menique).class)} svelte-yvpoxi`)}>${html(getIcon(row.Menique).icon)}</span></td><td${attr("class", `${stringify("")} svelte-yvpoxi`)}><span${attr("class", `${stringify(getIcon(row.Smartwool).class)} svelte-yvpoxi`)}>${html(getIcon(row.Smartwool).icon)}</span></td><td${attr("class", `${stringify("")} svelte-yvpoxi`)}><span${attr("class", `${stringify(getIcon(row.Icebreaker).class)} svelte-yvpoxi`)}>${html(getIcon(row.Icebreaker).icon)}</span></td><td${attr("class", `${stringify("")} svelte-yvpoxi`)}><span${attr("class", `${stringify(getIcon(row.Patagonia).class)} svelte-yvpoxi`)}>${html(getIcon(row.Patagonia).icon)}</span></td><td${attr("class", `${stringify("")} svelte-yvpoxi`)}><span${attr("class", `${stringify(getIcon(row.Lululemon).class)} svelte-yvpoxi`)}>${html(getIcon(row.Lululemon).icon)}</span></td></tr>`;
  }
  $$payload.out += `<!--]--><tr class="svelte-yvpoxi"><td class="svelte-yvpoxi"></td><td class="main-column my-10 rounded-b-md border-x-4 border-b-4 border-[#5DCE8B] px-0 svelte-yvpoxi"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://menique.com/collections/mens-merino-underwear/products/mens-merino-160gsm-short-boxer-briefs`, void 0))} class="block my-2 rounded-md bg-[#5DCE8B] w-full py-2 text-white" aria-label="Visit Menique">Get Deal</a></td><td class="svelte-yvpoxi"></td><td class="svelte-yvpoxi"></td><td class="svelte-yvpoxi"></td><td class="svelte-yvpoxi"></td></tr></tbody></table></div>`;
  pop();
}
function ProductDetails($$payload, $$props) {
  push();
  let products = [
    {
      title: "Menique Men's 100% Merino Boxer Briefs",
      productUrl: [
        "https://menique.com/products/mens-merino-160gsm-short-boxer-briefs",
        "https://www.amazon.co.uk/menique-Merino-Short-Briefs-Regular/dp/B0CPYCB6CR/"
      ],
      linkTitle: ["£27.00 Official Dealer", "£21.95 Amazon"],
      overallScore: 9.8,
      ratings: {
        Material: 10,
        Support: 10,
        Breathability: 10,
        Durability: 9,
        "Odor Control": 10
      },
      reasonsToBuy: [
        "Incredibly soft natural 100% Merino Wool",
        "Flatlock seam construction designed to minimize chafing",
        "Very stretchy to accommodate a variety of body shapes",
        "Even after long days, these keep smelling fresh",
        "Sturdy, comfortable waistband"
      ],
      reasonsToAvoid: ["Price point could be a barrier"],
      review: `I’ve been wearing the <b>Menique 100% Merino Boxer Briefs</b> for a few weeks now, and I have to say—they’re legit. The fit is snug without being restrictive, and the Merino wool feels soft and breathable all day. One thing I love is how they stay put. No annoying bunching or constant adjusting, which is a game-changer when I’m working out, running errands, or just chilling at home. Plus, the waistband is super comfy and doesn’t dig in, which is rare for me with most brands. 
        <br><br>The performance is what really sold me. These wick sweat like pros and keep me cool when I’m active but warm on colder days. The Merino wool also resists odors naturally, so I’ve been able to wear them a couple of times before washing (don’t judge—it’s impressive). For travel or busy weeks, that’s a huge win. They might not have fancy support panels like some brands, but the simplicity works. They’re breathable, flexible, and super versatile for pretty much anything.
        <br><br> Now, let’s talk price. At $39.95 a pair, they’re not exactly cheap, especially if you’re used to grabbing underwear for under $20. But considering the quality, durability, and the fact that Menique offers bulk pricing and sales on their site, I think they’re worth it if you’re looking to invest in better basics. I don’t regret picking them up—they’re easily some of the best boxer briefs I’ve tried in a long time.
      `,
      productImg: "images/menique-boxers.png"
    },
    {
      title: "Smartwool Merino Boxer Briefs",
      productUrl: [
        "https://www.smartwool.co.uk/uk/men-s-merino-boxer-brief-sw016998n061.html",
        "https://www.amazon.co.uk/Smartwool-Merino-Sport-Boxer-Briefs/dp/B0BKWW171Z"
      ],
      linkTitle: ["£45.00 Official Dealer", "£34.95 Amazon"],
      overallScore: 8.6,
      ratings: {
        Material: 9,
        Support: 9,
        Breathability: 8,
        Durability: 8,
        "Odor Control": 9
      },
      reasonsToBuy: [
        "Can be worn for multiple days without smells",
        "Great for daily wear"
      ],
      reasonsToAvoid: [
        "Do not keep you cool in very humid situations",
        "Wear out faster over time"
      ],
      review: `I’ve been wearing the Smartwool Merino Boxer Briefs for a few weeks, and while they’re a reliable option, they’re not without flaws. The Merino Wool and nylon blend feels soft and stretchy, making them comfortable for all-day wear. For example, I wore them during a long flight, and they kept me comfortable without any chafing, which was a big plus. The odor resistance is also impressive—after a hike, they still smelled fresh, which is something I love about Merino Wool.
        <br><br>That said, there are a couple of downsides. On a particularly humid day, I noticed they felt a bit stuffy, which surprised me since I usually expect Merino to breathe better. I’ve also found that after a few washes, they’re not holding up as well as I’d hoped—some fraying at the seams has started to show. Compared to Menique’s 100% Merino Wool briefs, which feel more breathable and durable, Smartwool falls short. Still, for the price and day-to-day use, they’re a decent choice if you can live with a few compromises.
      `,
      productImg: "images/smartwool-boxers.png"
    },
    {
      title: "Icebreaker Anatomica Merino Boxers",
      productUrl: [
        "https://www.icebreaker.com/en-gb/mens-underwear/merino-150-anatomica-boxers/103029G2.html",
        "https://www.amazon.co.uk/Icebreaker-Mens-Boxer-Briefs/dp/B0D2JLZ7TK"
      ],
      linkTitle: ["£40.00 Official Dealer", "£34.10 Amazon"],
      overallScore: 8.2,
      ratings: {
        Material: 8,
        Support: 7,
        Breathability: 9,
        Durability: 8,
        "Odor Control": 9
      },
      reasonsToBuy: [],
      reasonsToAvoid: [
        "Could be better for intense activities",
        "Inseam is a bit short for some",
        "The cost feels a bit steep"
      ],
      review: `I’ve been trying out the Icebreaker Anatomica Merino Boxers, and while they have some great features, they’re definitely not perfect. The breathability is a big win—on hot days or during light activity, they feel airy and comfortable. Plus, the odor control is top-notch, even after long wear. That said, they run small. I’m usually a medium, but these felt tight enough that I’d suggest sizing up if you want a more comfortable fit. The price is another sticking point; they’re on the higher end, and for what you’re getting, I feel like there are better options out there, like Menique, which has more durable and supportive designs for a similar (or even better) price.
         <br><br>Where they struggle most is in durability and support. The lightweight fabric feels great initially, but after a few washes, I noticed it started losing its elasticity. For the price, I expected these to hold up better. Also, if you’re looking for something that stays put during more intense activities, these might not be the best option. They’re fine for casual wear, but for high-movement days, I found myself adjusting them more often than I’d like. Overall, they’re okay, but with the sizing issues and steep price tag, I think you can find better value elsewhere.
        `,
      productImg: "images/icebreaker-boxers.png"
    },
    {
      title: 'Patagonia Sender Boxer Briefs 6"',
      productUrl: [
        "https://www.patagonia.com/product/mens-sender-boxer-briefs-6-inch/32545.html",
        "https://www.amazon.co.uk/Patagonia-Sender-Briefs-6-Briefs-32545/dp/B07N28MN24"
      ],
      linkTitle: ["$35 Official Dealer", "£34.50 Amazon"],
      overallScore: 7.6,
      ratings: {
        Material: 8,
        Support: 8,
        Breathability: 7,
        Durability: 8,
        "Odor Control": 7
      },
      reasonsToBuy: [
        "Recycled nylon and spandex are tough and resistant to wear",
        "Has a decent amount of support"
      ],
      reasonsToAvoid: [
        "Poor breathability on hot days",
        "Support could be better",
        "Odor control isn’t great compared to Merino options"
      ],
      review: `The Patagonia Sender Boxer Briefs are a pretty solid choice. They’re made with a blend of recycled nylon and spandex, which feels comfortable and is a nice nod to eco-conscious shopping. It holds up well after multiple washes and daily wear, showing off decent durability. I’ve worn these on lazy weekends and casual days, and they’ve held their shape and looked fresh enough to pass the “everyday wear” test. That said, this blend isn’t 100% natural, and that’s a noticeable trade-off when compared to natural options like Menique or Smartwool.
      <br><br>Where they fall short is breathability—on hot days, you’ll feel like they trap heat more than you’d want. A recent hike I did in the summer left me sweating more than expected, and they just didn’t offer the airy, cooling feel I’m used to with Merino wool options. Similarly, support was okay but not great; for lounging or casual office days, they’re fine, but trying to wear them during a heavier workout made me feel like I wasn’t getting the stability I needed. Odor control is also a weak spot here—where Merino’s natural properties combat odor seamlessly, these synthetic blends struggled to keep up. After a full day of wear, I could smell it creeping in, especially if I’d been on my feet all day or spent time in a warm environment. On the flip side, they’re great for guys who want something durable and versatile for everyday use at a reasonable price. 
      `,
      productImg: "images/patagonia-boxers.png"
    },
    {
      title: 'Lululemon Rapid Vent Tech Boxer 5"',
      productUrl: [
        "https://www.lululemon.co.uk/en-gb/p/always-in-motion-boxer-5%22/prod9270823.html",
        "https://www.reversible.com/gb/shopping/men/item/lululemon-rapid-vent-tech-boxer-5-891128797"
      ],
      linkTitle: ["£25 Official Dealer", "£20 Reversible.com"],
      overallScore: 7.2,
      ratings: {
        Material: 7,
        Support: 8,
        Breathability: 7,
        Durability: 8,
        "Odor Control": 6
      },
      reasonsToBuy: [
        "Material is soft, stretchy, and easy on the skin, perfect for all-day wear"
      ],
      reasonsToAvoid: [
        "Loose fit that shifts during higher-intensity movement",
        "Breathability and odor control aren’t great",
        "Higher price than expected for the performance level"
      ],
      review: `I’ve worn the Lululemon Rapid Vent Tech Boxer 5" a few times for both casual days and light gym sessions, and here’s the honest rundown from real experience. These are comfortable for regular daily wear—walking around town, running errands, or just lounging. The material feels soft against your skin, and the stretch gives you enough freedom to move without any discomfort. They fit well enough for everyday use and stay put during light movement, which is great for casual running around. However, they have a loose fit, which might not work for everyone—especially if you’re looking for something more snug or form-fitting during active workouts. I found they shift a bit too much during higher-intensity movement, which can get annoying if you’re sweating or trying to stay in motion for extended periods.
      <br><br>That said, when I wore them during a few intense summer workouts, the breathability fell flat. After about 20 minutes of heavy movement and sweating, I could feel them sticking and getting hot—something that wouldn’t happen with Merino alternatives like Menique. Also, after a few hours, I started noticing some odor creeping in, which makes sense because their odor control isn’t the best. For instance, after a quick jog and a few hours at work, I had to throw them in the wash sooner than I’d like. These boxers are stylish and functional enough for light workouts or casual wear but aren’t great for extended heat, sweating, or long days without a change. 
      `,
      productImg: "images/lululemon-boxers.png"
    }
  ];
  let showMoreState = products.map((_, i) => i === 0);
  function calculateAverageScore(ratings) {
    return Object.values(ratings).reduce((sum, value) => sum + value, 0) / Object.values(ratings).length;
  }
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array = ensure_array_like(products);
  $$payload.out += `<div class="mx-5 my-28 space-y-8"><h2 class="s-hmLmOhxWmjw9 mb-4 mb-5 text-center text-2xl font-bold dark:text-white md:mb-16 md:text-3xl">A Closer Look at Bestsellers</h2> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let product = each_array[i];
    const each_array_1 = ensure_array_like(Object.entries(product.ratings));
    $$payload.out += `<section${attr("class", `${stringify(`w-full rounded-md bg-gray-50 p-6 shadow-md xl:mx-auto xl:w-[1110px] ${product.title === "Menique Men's 100% Merino Boxer Briefs" ? "border-4 border-[#5DCE8B]" : ""}`)} svelte-5x6hoo`)}><div class="mb-10 mt-4 flex items-center justify-center"><h3 class="text-center text-2xl font-bold">${escape_html(product.title)}</h3></div> <div class="mt-6 grid grid-cols-1 items-start gap-4 md:grid-cols-[calc(40%-10px),calc(40%-10px),calc(20%-10px)]"><img${attr("src", product.productImg)}${attr("alt", product.title)} class="w-full rounded-md object-cover xl:px-20"> <div class="pr-0 xl:pr-10"><div class="flex justify-between"><div><div${attr("class", `text-5xl font-bold`)}>${escape_html(calculateAverageScore(product.ratings).toFixed(1))}</div> <div class="text-sm text-gray-500">Overall Score</div></div> `;
    if (product.overallScore > 9) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex"><span class="text-black"><img src="images/recommend.svg" alt="Winner badge" class="mx-auto h-8"></span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="mt-4"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let [key, value] = each_array_1[$$index];
      $$payload.out += `<div class="mb-2 mt-3 flex items-center justify-between"><span class="text-sm">${escape_html(key)}</span> <span class="text-sm font-bold">${escape_html(value)}</span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div${attr("class", `h-2 rounded-full ${stringify(value > 8 ? "bg-[#5DCE8B]" : value > 6 ? "bg-[#FAB907]" : value > 2 ? "bg-[#EA3D3D]" : "bg-[#EA3D3D]")}`)}${attr("style", `width: calc(${stringify(value * 10)}%);`)}></div></div>`;
    }
    $$payload.out += `<!--]--></div></div> `;
    if (product.productUrl) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(product.productUrl);
      $$payload.out += `<div class="mt-6 flex flex-col justify-center xl:mt-0"><!--[-->`;
      for (let i2 = 0, $$length2 = each_array_2.length; i2 < $$length2; i2++) {
        let url = each_array_2[i2];
        Button($$payload, {
          href: url,
          class: "mb-3 rounded-md bg-[#5DCE8B] hover:bg-[#79e5a5]",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(product.linkTitle[i2])}`;
          },
          $$slots: { default: true }
        });
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"><div class="product-pros svelte-5x6hoo"><h4 class="mb-3 text-lg font-bold">Reasons to Buy</h4> <ul class="list-inside list-disc text-[#191919]">`;
    if (product.reasonsToBuy.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_3 = ensure_array_like(product.reasonsToBuy);
      $$payload.out += `<!--[-->`;
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let reason = each_array_3[$$index_2];
        $$payload.out += `<li class="mb-2 flex items-center svelte-5x6hoo"><svg class="mr-2 h-5" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.98 23.71"><defs><style>
												.cls-4 {
													fill: #5dce8b;
												}

												.cls-5 {
													fill: #fff;
												}

												.cls-6 {
													fill: #ea3d3d;
												}
											</style></defs><path class="cls-6" d="M-76.64,11.4c-1.01-.07-2.02-.11-3.05-.11-8.98,0-17.31,2.81-24.18,7.59l-33.29-66.28h31.22l29.3,58.8ZM-53.45-47.4L-77.48,2.55l4.55,9.11c5.38,1.22,13.02,4.15,17.42,7.22L-22.23-47.4h-31.22Z"></path><g><circle class="cls-4" cx="11.99" cy="11.86" r="11.13"></circle><path class="cls-5" d="M17.45,13.35H6.52c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.93c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z"></path><path class="cls-5" d="M11.99,18.82c-.83,0-1.5-.67-1.5-1.5V6.39c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5v10.93c0,.83-.67,1.5-1.5,1.5Z"></path></g></svg> ${escape_html(reason)}</li>`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<li class="text-[#191919] svelte-5x6hoo"><svg class="mr-2 h-5" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.98 23.71"><defs><style>
											.cls-4 {
												fill: #5dce8b;
											}

											.cls-5 {
												fill: #fff;
											}

											.cls-6 {
												fill: #ea3d3d;
											}
										</style></defs><path class="cls-6" d="M-76.64,11.4c-1.01-.07-2.02-.11-3.05-.11-8.98,0-17.31,2.81-24.18,7.59l-33.29-66.28h31.22l29.3,58.8ZM-53.45-47.4L-77.48,2.55l4.55,9.11c5.38,1.22,13.02,4.15,17.42,7.22L-22.23-47.4h-31.22Z"></path><g><circle class="cls-4" cx="11.99" cy="11.86" r="11.13"></circle><path class="cls-5" d="M17.45,13.35H6.52c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.93c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z"></path><path class="cls-5" d="M11.99,18.82c-.83,0-1.5-.67-1.5-1.5V6.39c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5v10.93c0,.83-.67,1.5-1.5,1.5Z"></path></g></svg>No reasons listed.</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="product-cons svelte-5x6hoo"><h4 class="mb-3 text-lg font-bold">Reasons to Avoid</h4> <ul class="list-inside list-disc text-[#191919]">`;
    if (product.reasonsToAvoid.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_4 = ensure_array_like(product.reasonsToAvoid);
      $$payload.out += `<!--[-->`;
      for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
        let reason = each_array_4[$$index_3];
        $$payload.out += `<li class="mb-2 flex items-center svelte-5x6hoo"><svg class="mr-2 h-5" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.98 23.71"><defs><style>
												.cls-7 {
													fill: #848484;
												}

												.cls-9 {
													fill: #fff;
												}
											</style></defs><circle class="cls-7" cx="11.99" cy="11.86" r="11.13"></circle><path class="cls-9" d="M17.45,13.35H6.52c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.93c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z"></path></svg> ${escape_html(reason)}</li>`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<li class="text-[#191919] svelte-5x6hoo">No reasons listed.</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div> <div class="mt-10"><h3 class="mb-2 text-lg font-semibold">Review</h3> <p class="text-gray-700">${html(showMoreState[i] ? product.review : `${product.review.slice(0, 400)}...`)}</p> <button class="mt-2 text-blue-500 underline hover:text-blue-700">${escape_html(showMoreState[i] ? "Show Less" : "Show More")}</button></div> `;
    if (product.title === "Menique Men's 100% Merino Boxer Briefs") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="mt-10"><p class="text-gray-700"><span class="font-semibold">Read more:</span> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(product.productUrl, void 0))} class="underline underline-offset-2">Menique Merino Wool Boxer Briefs.</a></p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></section>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function FAQ($$payload) {
  const items = Array(3);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="container mx-auto mb-10 mt-10 space-y-8 px-5 md:px-20 lg:px-40"><h2 class="text-3xl font-bold mb-6 text-center mt-20 md:mb-10">Faqs</h2> `;
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
          defaultClass: "text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800",
          activeClass: "bg-white-0 hover:bg-white-0",
          inactiveClass: "bg-white-0 hover:bg-white-0",
          children: ($$payload4) => {
            $$payload4.out += `<p class="mb-2 text-[#191919] dark:text-gray-400">When it comes to finding the best type of underwear, boxer briefs are a top choice for their blend of comfort, versatility, and support. They provide excellent coverage while staying breathable and flexible, making them ideal for everyday wear, working out, or even travel. In my own experience, they stay put without bunching and feel secure without being overly tight. The support they offer is especially beneficial for active days or long commutes. Based on personal trial, boxer briefs tend to outperform other styles for both functionality and comfort. <br><br>On warmer days or when I want a looser fit, boxers are my go-to choice because they’re incredibly breathable and lightweight. They’re perfect for lounging or casual days when support isn’t as much of a priority. However, while comfortable, they lack the structure boxer briefs offer, which can lead to discomfort during physical activity. For those who prioritize simplicity and movement, briefs are another good option—they provide excellent support for running or sports without excess fabric. <br><br>Ultimately, the "best" type of underwear will depend on body type, activity level, and personal fit preferences. Comfort is key, so trial and error may lead to finding the perfect pair for any occasion.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<span slot="header">Which type of underwear is best for males?</span>`;
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
          defaultClass: "text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800",
          activeClass: "bg-white-0 hover:bg-white-0",
          inactiveClass: "bg-white-0 hover:bg-white-0",
          children: ($$payload4) => {
            $$payload4.out += `<p class="mb-2 text-[#191919] dark:text-gray-400">Based on my personal experience and testing, I recommend brands that offer natural materials, like Merino wool boxers for their unbeatable comfort, performance, and durability. Brands like Menique, Smartwool, and Icebreaker stand out for their high-quality options. However, after my latest research and hands-on experience, Menique's products are my top choice. They provide the perfect balance of comfort, odor resistance, breathability, and durability while maintaining a great fit for everyday wear. What makes Menique even better is that they offer a wide range of underwear options for both men and women, focusing on style, quality, and natural comfort.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<div slot="header">What is the best men's underwear brand?</div>`;
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
          defaultClass: "text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800",
          activeClass: "bg-white-0 hover:bg-white-0",
          inactiveClass: "bg-white-0 hover:bg-white-0",
          children: ($$payload4) => {
            $$payload4.out += `<p class="mb-2 text-[#191919] dark:text-gray-400">Optimizing the comfort of boxers begins with choosing the right materials, as factors like moisture management, softness, and temperature depend on fabric selection. <br><br><b>Cotton</b>: While 100% cotton has long been a popular choice due to its breathability, it falls short in moisture management and can lose shape over time, leading to discomfort. Additionally, it can lead to an unpleasant feeling in warm conditions. Blended fabrics are a better option as they are typically more moisture-wicking and comfortable. Alternatives like Tencel and Merino wool are highly recommended for their breathability, odor control, and moisture management properties. <br><br><b>Blends</b>Blends: Blending fabrics such as nylon and spandex offers a modern approach. Nylon is excellent for moisture-wicking and maintains shape without pilling, while spandex adds flexibility and enhances comfort for movement. For those who prefer a single material, 100% Merino wool is a strong alternative due to its natural moisture-wicking and breathable properties. <br><br><b>Modal</b>Modal: Fabrics like micro modal are moisture-wicking, lightweight, and resistant to shrinkage while maintaining a silky, soft feel. Micro modal is also known for not locking in bacteria like polyester does. For an even stronger alternative, lyocell offers superior softness, durability, and tear resistance compared to modal, though it comes at a higher price.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<div slot="header">Which underwear material is best for men?</div>`;
            }
          }
        });
        $$payload3.out += `<!----> `;
        AccordionItem($$payload3, {
          get open() {
            return items[3];
          },
          set open($$value) {
            items[3] = $$value;
            $$settled = false;
          },
          defaultClass: "text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800",
          activeClass: "bg-white-0 hover:bg-white-0",
          inactiveClass: "bg-white-0 hover:bg-white-0",
          children: ($$payload4) => {
            $$payload4.out += `<p class="mb-2 text-[#191919] dark:text-gray-400">I typically replace my boxers every 6 to 12 months, depending on how often I wear them and how they’re holding up. In my experience, even the best quality boxers start showing wear over time—losing their shape, elasticity, or developing small holes. I try to keep an eye on them, and if they start feeling less supportive or showing obvious signs of damage, I’ll swap them out. Regularly replacing them keeps things comfortable, prevents hygiene issues, and ensures they’re working the way they should.</p>`;
          },
          $$slots: {
            default: true,
            header: ($$payload4) => {
              $$payload4.out += `<div slot="header">How often should I replace my boxers?</div>`;
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
function Summary($$payload) {
  $$payload.out += `<div class="container mx-auto mb-20 mt-10 space-y-8 px-5 md:px-20 lg:px-40"><h2 class="mb-6 text-3xl font-bold">4 Key Factors for Choosing the Best Pair</h2> <p class="mb-5 text-base leading-relaxed">When selecting the best boxer briefs, my process wasn’t just about personal testing; I also took
		a deeper look at what real people are saying. To get a broader perspective, I did some research
		on Amazon review section, Reddit, and other forums, reading through discussions and reviews to
		see what men are actually wearing and recommending. It gave me valuable insight into what people
		look for in their underwear—comfort, durability, fit, and performance in everyday situations.</p> <p class="mb-8 text-base leading-relaxed">Here's what I learned from my research on the platform and how it helped shape my picks:</p> <div class="grid gap-6 md:grid-cols-2"><div class="flex items-start space-x-4"><div class="flex flex-col items-center justify-center"><div class="flex w-full justify-center bg-[#F7F7F7] py-3"><svg class="h-16 w-16 text-blue-500" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130"><defs><style>
								.cls-11 {
									fill: none;
									stroke: #5dce8b;
									stroke-linecap: round;
									stroke-linejoin: round;
									stroke-width: 2px;
								}
							</style></defs><circle class="cls-11" cx="65" cy="29.27" r="21.24"></circle><path class="cls-11" d="M73.99,32.27c0,4.96-4.04,8.99-8.99,8.99s-8.99-4.04-8.99-8.99"></path><path class="cls-11" d="M44.58,23.41H12.2c-5.57,0-10.09,5-10.09,11.17h0c0,8.61,3.06,16.87,8.52,23l11.36,12.76c3.44,3.86,12.04,34.47,15.36,46.65.81,2.96,3.27,4.98,6.06,4.98h21.59"></path><path class="cls-11" d="M46.19,39.15h-19.31c-.57,0-.75.78-.23,1.02l15.67,7.35c4.19,1.97,8.76,2.99,13.39,2.99h9.29"></path><path class="cls-11" d="M85.42,23.41h32.38c5.57,0,10.09,5,10.09,11.17h0c0,8.61-3.06,16.87-8.52,23l-11.36,12.76c-3.44,3.86-12.04,34.47-15.36,46.65-.81,2.96-3.27,4.98-6.06,4.98h-21.59"></path><path class="cls-11" d="M83.81,39.15h19.31c.57,0,.75.78.23,1.02l-15.67,7.35c-4.19,1.97-8.76,2.99-13.39,2.99h-9.29"></path></svg></div> <h3 class="my-3 text-xl font-semibold">Comfort is Key</h3> <p class="text-base leading-relaxed">One thing that came up repeatedly on Reddit was how important comfort is for men when it
					comes to boxer briefs. Many users mentioned that they couldn't stand tight waistbands or
					fabrics that feel scratchy...</p></div></div> <div class="flex items-start space-x-4"><div class="flex flex-col items-center justify-center"><div class="flex w-full justify-center bg-[#F7F7F7] py-3"><svg class="h-16 w-16 text-blue-500" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 130 130"><defs><style>
								.cls-12 {
									fill: none;
									stroke: #5dce8b;
									stroke-miterlimit: 10;
									stroke-width: 2px;
								}

								.cls-2 {
									clip-path: url(#clippath);
								}
							</style><clipPath id="clippath"><circle class="cls-12" cx="65" cy="65" r="56.97"></circle></clipPath></defs><g class="cls-2"><g><path class="cls-12" d="M68.66,103.34c-.56,6.92-1.79,14.1-3.66,22.21H17.13c-7,0-12.68-5.68-12.68-12.68v-47.86c8.11,1.88,15.29,3.11,22.21,3.66,1.85.15,3.43-1.31,3.43-3.17v-.13c0-.82-.31-1.61-.88-2.19-1.36-1.4-2.19-3.31-2.18-5.42.03-4.24,3.45-7.64,7.69-7.64s7.68,3.43,7.69,7.68c0,2.07-.81,3.96-2.14,5.34-.58.6-.91,1.39-.91,2.23v.18c0,1.85,1.57,3.31,3.41,3.17,6.92-.52,14.11-1.75,22.22-3.71,1.96,8.11,3.18,15.3,3.71,22.22.14,1.84-1.32,3.41-3.17,3.41h-.18c-.83,0-1.63-.33-2.23-.91-1.39-1.33-3.27-2.15-5.34-2.14-4.25,0-7.68,3.44-7.68,7.69s3.4,7.66,7.64,7.69c2.11.01,4.02-.82,5.42-2.18.58-.57,1.38-.88,2.19-.88h.13c1.85,0,3.32,1.58,3.17,3.43Z"></path><path class="cls-12" d="M61.34,26.66c.56-6.92,1.79-14.1,3.66-22.21h47.87c7,0,12.68,5.68,12.68,12.68v47.86c-8.11-1.88-15.29-3.11-22.21-3.66-1.85-.15-3.43,1.31-3.43,3.17v.13c0,.82.31,1.61.88,2.19,1.36,1.4,2.19,3.31,2.18,5.42-.03,4.24-3.45,7.64-7.69,7.64s-7.68-3.43-7.69-7.68c0-2.07.81-3.96,2.14-5.34.58-.6.91-1.39.91-2.23v-.18c0-1.85-1.57-3.31-3.41-3.17-6.92.52-14.11,1.75-22.22,3.71-1.96-8.11-3.18-15.3-3.71-22.22-.14-1.84,1.32-3.41,3.17-3.41h.18c.83,0,1.63.33,2.23.91,1.39,1.33,3.27,2.15,5.34,2.14,4.25,0,7.68-3.44,7.68-7.69,0-4.24-3.4-7.66-7.64-7.69-2.11-.01-4.02.82-5.42,2.18-.58.57-1.38.88-2.19.88h-.13c-1.85,0-3.32-1.58-3.17-3.43Z"></path></g></g><circle class="cls-12" cx="65" cy="65" r="56.97"></circle></svg></div> <h3 class="my-3 text-xl font-semibold">Fit and Support Matter</h3> <p class="text-base leading-relaxed">Reddit threads frequently mention the issue of boxer briefs that don’t stay in place. A
					lot of users complained about boxer briefs that ride up or shift during the day...</p></div></div> <div class="flex items-start space-x-4"><div class="flex flex-col items-center justify-center"><div class="flex w-full justify-center bg-[#F7F7F7] py-3"><svg class="h-16 w-16 text-blue-500" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130"><defs><style>
								.cls-13 {
									fill: none;
									stroke: #5dce8b;
									stroke-linecap: round;
									stroke-linejoin: round;
									stroke-width: 2px;
								}
							</style></defs><g><path class="cls-13" d="M76.46,74.42c5.18,3.61,7.19,9.6,5.3,14.14-1.42,3.41-5.28,6.52-8.51,5.94-3.29-.59-3.58-4.58-7.87-6.59-2.93-1.37-6.02-1.01-8.19-.48"></path><path class="cls-13" d="M60.95,94.34c-.63.21-9.74,3.08-15.42-2.25-2.84-2.66-3.48-6.11-3.7-7.39-1.58-9.26,6.05-17.63,10.76-22.81,3.11-3.41,15.95-18.01,18.8-30.85"></path></g><path class="cls-13" d="M65,121.89c-2.49,0-4.98-.59-7.27-1.76-15.96-8.2-33.31-24.31-39.16-48.43-5.48-22.58-6.25-38.67-6.09-47.33.05-2.5,1.74-4.67,4.16-5.32,4.21-1.14,10.43-2.8,19.16-5.05,7.79-2.01,14.01-3.54,18.74-4.66,6.88-1.64,14.04-1.64,20.92,0,4.73,1.12,10.95,2.65,18.74,4.66,8.73,2.25,14.95,3.91,19.16,5.05,2.41.65,4.11,2.82,4.15,5.32.16,8.66-.6,24.75-6.09,47.33-5.86,24.12-23.2,40.24-39.16,48.43-2.28,1.17-4.78,1.76-7.27,1.76Z"></path></svg></div> <h3 class="my-3 text-xl font-semibold">Odor Control is a Must</h3> <p class="text-base leading-relaxed">Another fact I discovered through Reddit was the importance of odor control in boxer
					briefs. Many men were looking for pairs that could withstand a full day of wear without
					smelling by the end...</p></div></div> <div class="flex items-start space-x-4"><div class="flex flex-col items-center justify-center"><div class="flex w-full justify-center bg-[#F7F7F7] py-3"><svg class="h-16 w-16 text-blue-500" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130"><defs><style>
								.cls-14 {
									fill: none;
									stroke: #5dce8b;
									stroke-linecap: round;
									stroke-linejoin: round;
									stroke-width: 2px;
								}
							</style></defs><path class="cls-14" d="M15.09,56.6h33.15v2.64c0,4.09-3.32,7.41-7.41,7.41h-18.33c-4.09,0-7.41-3.32-7.41-7.41v-2.64h0Z"></path><polyline class="cls-14" points="15.09 56.6 31.67 8.11 48.24 56.6"></polyline><path class="cls-14" d="M81.76,88.75h33.15v2.64c0,4.09-3.32,7.41-7.41,7.41h-18.33c-4.09,0-7.41-3.32-7.41-7.41v-2.64h0Z"></path><polyline class="cls-14" points="81.76 88.75 98.33 40.26 114.91 88.75"></polyline><line class="cls-14" x1="31.67" y1="8.11" x2="98.5" y2="40.35"></line><line class="cls-14" x1="64.05" y1="23.73" x2="64.05" y2="120.74"></line><line class="cls-14" x1="32.39" y1="121.89" x2="95.71" y2="121.89"></line></svg></div> <h3 class="my-3 text-xl font-semibold">Value for Money</h3> <p class="text-base leading-relaxed">Redditors love to share recommendations for high-quality boxer briefs that don’t break the
					bank. Many users emphasized the importance of finding a balance between quality and
					price...</p></div></div></div></div>`;
}
function Reassurance($$payload) {
  $$payload.out += `<div class="container mx-auto px-5 md:px-20 lg:px-40 mt-10 mb-10 space-y-8"><p class="text-base leading-relaxed mb-5">After months of rigorous testing, I’ve narrowed down the best boxer briefs from over 15 brands that truly deserve your attention. This isn’t just another roundup of quick reviews—I’ve put each pair to the test in real-life situations, from long office days and intense workouts to grueling travel schedules and everything in between. If a pair couldn’t handle the demands of my everyday life, it didn’t make the cut.</p> <p class="text-base leading-relaxed mb-8">Here’s how I put these boxer briefs through their paces:</p> <div class="space-y-6"><div><h3 class="text-xl font-semibold mb-3">Comfort That Lasts All Day</h3> <p class="text-base leading-relaxed">I tested over 40 pairs since the start of 2024, wearing each for at least two weeks. From cotton and moisture-wicking synthetics to merino wool, only a few fabrics kept their comfort levels consistent after hours of wear. Cotton often lost its softness after the first wash, while some synthetics became rough after a few hours. The standout materials, like merino wool and certain performance blends, remained soft, breathable, and irritation-free, even after 12+ hours.</p></div> <div><h3 class="text-xl font-semibold mb-3">Heat, Cold, and Sweat? No Problem</h3> <p class="text-base leading-relaxed">I tested these boxer briefs in every climate—from 90°F summer workouts to chilly winter commutes—and during demanding activities like gym sessions and long-haul flights. Pairs with superior breathability shined in hot conditions, keeping me cool and dry, while others left me feeling overheated. The top-performing boxer briefs adapted to both heat and cold without compromising comfort.</p></div> <div><h3 class="text-xl font-semibold mb-3">Built to Last Through Washes and Workouts</h3> <p class="text-base leading-relaxed">Some boxer briefs feel great initially but fail to hold up after multiple washes or intense wear. I put each pair through 10+ laundry cycles and wore them during activities that tested their shape retention, from gym sessions to full travel days. The boxer briefs I recommend didn’t sag, roll, or ride up, maintaining their fit and comfort even after hours of movement.</p> <img src="images/curves.jpg" alt="Durability over Wash Cycles" class="my-10"> <p class="text-base leading-relaxed">Natural materials like Merino wool (from brands like Menique, Smartwool, and Icebreaker) hold up way better to repeated washes than synthetic blends like nylon and spandex (used by Patagonia and Lululemon). That’s because natural fibers like Merino keep their shape and strength even with consistent use and care. <br><br>For example, Menique’s 100% Merino Wool stays impressively durable even after 10 washes, with very little wear. Smartwool and Icebreaker show the same slow decline over time. Meanwhile, nylon-based blends might feel great at first but lose durability quickly after the 5th or 6th wash—and they fall apart much faster by the 10th wash. <br><br>So, while synthetic blends can feel nice and work well for lighter use, they just don’t last as long as natural fibers. Merino wool, on the other hand, stands the test of time, performs consistently, and resists wear much better over the long haul.</p></div> <div><h3 class="text-xl font-semibold mb-3">Tested, Trusted &amp; Ready for You</h3> <p class="text-base leading-relaxed">While some premium brands delivered exceptional performance, I found that many mid-range options offered the same comfort, durability, and fit for a fraction of the price. By comparing cost per wear, I focused on boxer briefs that provide exceptional quality without breaking the bank.</p></div></div></div>`;
}
function Schema($$payload) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Darius Insights",
    url: "https://worldtopreviews.com/about",
    logo: "https://yourwebsite.com/images/logo.png",
    image: "https://yourwebsite.com/images/dariaus-profile.jpg",
    description: "Honest, no-nonsense reviews and insights on products, productivity hacks, and parenting tips from Darius, a programmer with a practical mindset.",
    sameAs: ["https://www.linkedin.com/in/yourprofile"],
    founder: {
      "@type": "Person",
      name: "Darius",
      image: "https://worldtopreviews.com/images/dariaus-profile.jpg",
      url: "https://worldtopreviews.com/about",
      description: "Darius is a programmer sharing honest insights and reviews. He focuses on straightforward, practical solutions for everyday challenges.",
      jobTitle: "Enthusiast of testing products + Programmer",
      alumniOf: "Vytautas Magnus university",
      sameAs: ["https://linkedin.com/in/yourprofile"]
    }
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which type of underwear is best for males?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When it comes to finding the best type of underwear, boxer briefs are a top choice for their blend of comfort, versatility, and support..."
        }
      },
      {
        "@type": "Question",
        name: "What is the best men's underwear brand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on my personal experience and testing, I recommend brands that offer natural materials, like Merino wool boxers for their unbeatable comfort, performance, and durability..."
        }
      },
      {
        "@type": "Question",
        name: "Which underwear material is best for men?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Optimizing the comfort of boxers begins with choosing the right materials, as factors like moisture management, softness, and temperature depend on fabric selection..."
        }
      },
      {
        "@type": "Question",
        name: "How often should I replace my boxers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I typically replace my boxers every 6 to 12 months, depending on how often I wear them and how they’re holding up..."
        }
      }
    ]
  };
  const reviewsData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Menique Men's 100% Merino Boxer Briefs",
          "url": "https://worldtopreviews.com/the-best-mens-boxer-briefs-money-can-buy-2025",
          "image": "images/menique-boxers.png",
          "description": "I’ve been wearing the <b>Menique 100% Merino Boxer Briefs</b> for a few weeks now, and I have to say—they’re legit. The fit is snug without being restrictive, and the Merino wool feels soft and breathable all day. One thing I love is how they stay put. No annoying bunching or constant adjusting, which is a game-changer when I’m working out, running errands, or just chilling at home. Plus, the waistband is super comfy and doesn’t dig in, which is rare for me with most brands. The performance is what really sold me. These wick sweat like pros and keep me cool when I’m active but warm on colder days. The Merino wool also resists odors naturally, so I’ve been able to wear them a couple of times before washing (don’t judge—it’s impressive). For travel or busy weeks, that’s a huge win. They might not have fancy support panels like some brands, but the simplicity works. They’re breathable, flexible, and super versatile for pretty much anything.Now, let’s talk price. At $39.95 a pair, they’re not exactly cheap, especially if you’re used to grabbing underwear for under $20. But considering the quality, durability, and the fact that Menique offers bulk pricing and sales on their site, I think they’re worth it if you’re looking to invest in better basics. I don’t regret picking them up—they’re easily some of the best boxer briefs I’ve tried in a long time.",
          "brand": { "@type": "Brand", "name": "Menique" },
          "offers": [
            {
              "@type": "Offer",
              "url": "https://menique.com/products/mens-merino-160gsm-short-boxer-briefs",
              "price": "39.95",
              "priceValidUntil": "2025-12-31",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Menique Official Dealer"
              }
            },
            {
              "@type": "Offer",
              "url": "https://www.amazon.com/menique-merino-briefs",
              "price": "39.95",
              "priceValidUntil": "2025-12-31",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Amazon" }
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "9.8",
            "bestRating": "10",
            "worstRating": "1",
            "reviewCount": "1"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Darius Slu" },
            "datePublished": "2024-12-20",
            "reviewBody": "I’ve been wearing the <b>Menique 100% Merino Boxer Briefs</b> for a few weeks now, and I have to say—they’re legit. The fit is snug without being restrictive, and the Merino wool feels soft and breathable all day. One thing I love is how they stay put. No annoying bunching or constant adjusting, which is a game-changer when I’m working out, running errands, or just chilling at home. Plus, the waistband is super comfy and doesn’t dig in, which is rare for me with most brands. The performance is what really sold me. These wick sweat like pros and keep me cool when I’m active but warm on colder days. The Merino wool also resists odors naturally, so I’ve been able to wear them a couple of times before washing (don’t judge—it’s impressive). For travel or busy weeks, that’s a huge win. They might not have fancy support panels like some brands, but the simplicity works. They’re breathable, flexible, and super versatile for pretty much anything.Now, let’s talk price. At $39.95 a pair, they’re not exactly cheap, especially if you’re used to grabbing underwear for under $20. But considering the quality, durability, and the fact that Menique offers bulk pricing and sales on their site, I think they’re worth it if you’re looking to invest in better basics. I don’t regret picking them up—they’re easily some of the best boxer briefs I’ve tried in a long time."
          },
          "positiveNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Incredibly soft natural 100% Merino Wool"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Flatlock seam construction designed to minimize chafing"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Very stretchy to accommodate a variety of body shapes"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Even after long days, these keep smelling fresh"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Sturdy, comfortable waistband"
              }
            ]
          },
          "negativeNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Price point could be a barrier"
              }
            ]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Smartwool Merino Boxer Briefs",
          "url": "https://worldtopreviews.com/the-best-mens-boxer-briefs-money-can-buy-2025",
          "image": "images/menique-boxers.png",
          "description": "I’ve been wearing the Smartwool Merino Boxer Briefs for a few weeks, and while they’re a reliable option, they’re not without flaws. The Merino Wool and nylon blend feels soft and stretchy, making them comfortable for all-day wear. For example, I wore them during a long flight, and they kept me comfortable without any chafing, which was a big plus. The odor resistance is also impressive—after a hike, they still smelled fresh, which is something I love about Merino Wool. That said, there are a couple of downsides. On a particularly humid day, I noticed they felt a bit stuffy, which surprised me since I usually expect Merino to breathe better. I’ve also found that after a few washes, they’re not holding up as well as I’d hoped—some fraying at the seams has started to show. Compared to Menique’s 100% Merino Wool briefs, which feel more breathable and durable, Smartwool falls short. Still, for the price and day-to-day use, they’re a decent choice if you can live with a few compromises.",
          "brand": { "@type": "Brand", "name": "Smartwool" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "8.6",
            "bestRating": "10",
            "worstRating": "1",
            "reviewCount": "1"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Darius Slu" },
            "datePublished": "2024-12-18",
            "reviewBody": "I’ve been wearing the Smartwool Merino Boxer Briefs for a few weeks, and while they’re a reliable option, they’re not without flaws. The Merino Wool and nylon blend feels soft and stretchy, making them comfortable for all-day wear. For example, I wore them during a long flight, and they kept me comfortable without any chafing, which was a big plus. The odor resistance is also impressive—after a hike, they still smelled fresh, which is something I love about Merino Wool. That said, there are a couple of downsides. On a particularly humid day, I noticed they felt a bit stuffy, which surprised me since I usually expect Merino to breathe better. I’ve also found that after a few washes, they’re not holding up as well as I’d hoped—some fraying at the seams has started to show. Compared to Menique’s 100% Merino Wool briefs, which feel more breathable and durable, Smartwool falls short. Still, for the price and day-to-day use, they’re a decent choice if you can live with a few compromises."
          },
          "positiveNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Can be worn for multiple days without smells"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Great for daily wear"
              }
            ]
          },
          "negativeNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Do not keep you cool in very humid situations"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Wear out faster over time"
              }
            ]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Icebreaker Anatomica Merino Boxers",
          "url": "https://worldtopreviews.com/the-best-mens-boxer-briefs-money-can-buy-2025",
          "image": "images/menique-boxers.png",
          "description": "I’ve been trying out the Icebreaker Anatomica Merino Boxers, and while they have some great features, they’re definitely not perfect. The breathability is a big win—on hot days or during light activity, they feel airy and comfortable. Plus, the odor control is top-notch, even after long wear. That said, they run small. I’m usually a medium, but these felt tight enough that I’d suggest sizing up if you want a more comfortable fit. The price is another sticking point; they’re on the higher end, and for what you’re getting, I feel like there are better options out there, like Menique, which has more durable and supportive designs for a similar (or even better) price. Where they struggle most is in durability and support. The lightweight fabric feels great initially, but after a few washes, I noticed it started losing its elasticity. For the price, I expected these to hold up better. Also, if you’re looking for something that stays put during more intense activities, these might not be the best option. They’re fine for casual wear, but for high-movement days, I found myself adjusting them more often than I’d like. Overall, they’re okay, but with the sizing issues and steep price tag, I think you can find better value elsewhere.",
          "brand": { "@type": "Brand", "name": "Icebreaker" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "8.2",
            "bestRating": "10",
            "worstRating": "1",
            "reviewCount": "1"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Darius Slu" },
            "datePublished": "2024-12-19",
            "reviewBody": "I’ve been trying out the Icebreaker Anatomica Merino Boxers, and while they have some great features, they’re definitely not perfect. The breathability is a big win—on hot days or during light activity, they feel airy and comfortable. Plus, the odor control is top-notch, even after long wear. That said, they run small. I’m usually a medium, but these felt tight enough that I’d suggest sizing up if you want a more comfortable fit. The price is another sticking point; they’re on the higher end, and for what you’re getting, I feel like there are better options out there, like Menique, which has more durable and supportive designs for a similar (or even better) price. Where they struggle most is in durability and support. The lightweight fabric feels great initially, but after a few washes, I noticed it started losing its elasticity. For the price, I expected these to hold up better. Also, if you’re looking for something that stays put during more intense activities, these might not be the best option. They’re fine for casual wear, but for high-movement days, I found myself adjusting them more often than I’d like. Overall, they’re okay, but with the sizing issues and steep price tag, I think you can find better value elsewhere."
          },
          "positiveNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Soft and breathable"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Top-notch odor control"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Great for casual use"
              }
            ]
          },
          "negativeNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Could be better for intense activities"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Inseam is a bit short for some"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "The cost feels a bit steep"
              }
            ]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": 'Patagonia Sender Boxer Briefs 6"',
          "url": "https://worldtopreviews.com/the-best-mens-boxer-briefs-money-can-buy-2025",
          "image": "images/menique-boxers.png",
          "description": "Durable boxer briefs made from recycled nylon and spandex, ideal for eco-conscious buyers.",
          "brand": { "@type": "Brand", "name": "Patagonia" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "7.6",
            "bestRating": "10",
            "worstRating": "1",
            "reviewCount": "1"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Darius Slu" },
            "datePublished": "2024-12-15",
            "reviewBody": "The Patagonia Sender Boxer Briefs are a pretty solid choice. They’re made with a blend of recycled nylon and spandex, which feels comfortable and is a nice nod to eco-conscious shopping. It holds up well after multiple washes and daily wear, showing off decent durability. I’ve worn these on lazy weekends and casual days, and they’ve held their shape and looked fresh enough to pass the “everyday wear” test. That said, this blend isn’t 100% natural, and that’s a noticeable trade-off when compared to natural options like Menique or Smartwool. Where they fall short is breathability—on hot days, you’ll feel like they trap heat more than you’d want. A recent hike I did in the summer left me sweating more than expected, and they just didn’t offer the airy, cooling feel I’m used to with Merino wool options. Similarly, support was okay but not great; for lounging or casual office days, they’re fine, but trying to wear them during a heavier workout made me feel like I wasn’t getting the stability I needed. Odor control is also a weak spot here—where Merino’s natural properties combat odor seamlessly, these synthetic blends struggled to keep up. After a full day of wear, I could smell it creeping in, especially if I’d been on my feet all day or spent time in a warm environment. On the flip side, they’re great for guys who want something durable and versatile for everyday use at a reasonable price."
          },
          "positiveNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Recycled nylon and spandex are tough and resistant to wear"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Has a decent amount of support"
              }
            ]
          },
          "negativeNotes": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Poor breathability on hot days"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Support could be better"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Odor control isn’t great compared to Merino options"
              }
            ]
          }
        }
      }
    ]
  };
  $$payload.out += `${html(`<script type="application/ld+json">${JSON.stringify(faqData)}<\/script>`)} ${html(`<script type="application/ld+json">${JSON.stringify(reviewsData)}<\/script>`)} ${html(`<script type="application/ld+json">${JSON.stringify(organizationData)}<\/script>`)}`;
}
function FullWidthElement($$payload) {
  $$payload.out += `<div class="my-20 bg-[#F7F7F7]"><div class="container mx-auto px-5 py-16 md:px-60"><img src="images/number1.svg" alt="number one performance fabric" class="mx-auto mb-10 h-32 w-32"> <h3 class="my-3 text-center text-xl font-bold leading-relaxed">Merino Wool and Performance Fabrics Outshine the Rest</h3> <p class="mt-8 text-center leading-relaxed">While cotton and nylon are common, it struggled to keep up in both durability and performance.
			Merino wool and performance blends consistently outperformed, resisting odor, holding shape,
			and staying comfortable through multi-day wear. One merino wool pair lasted five straight days
			of travel—including workouts—without losing freshness or form.</p> <p class="mt-8 text-center leading-relaxed">Whether you’re looking for all-day comfort, workout performance, or travel-ready durability,
			these picks have proven their worth in every category.</p></div></div> <div class="container mx-auto mb-10 mt-10 space-y-8 px-5 md:px-20 lg:px-40"><h2 class="mb-4 text-3xl font-semibold text-gray-800">So why should you trust me?</h2> <p class="text-base leading-relaxed text-gray-700">I’ve spent months testing over 15 different brands of boxer briefs—putting them through long
		workdays, intense workouts, and countless washes—to see how they really perform. I’ve looked at
		everything: fabric quality, stretch, breathability, moisture-wicking, and how they hold up after
		repeated use. Each pair was checked for fit, support, and durability, so you don’t have to go
		through the trial and error.</p> <p class="text-base leading-relaxed text-gray-700">When I recommend a pair, it’s because they’ve proven themselves—tested, worn, and measured in
		real-world conditions. No fluff, no hype—just honest insights backed by experience and data.
		These boxer briefs have shown they can handle daily life, and I trust they’ll do the same for
		you.</p></div>`;
}
function TestingFeatures($$payload) {
  $$payload.out += `<div class="max-w-[1600px] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4"><div class="md:min-h-[290px] xl:min-h-[388px] flex flex-col items-center justify-center rounded-md border bg-gray-100 p-4 ml-4"><div class="mb-4"><svg class="h-32 w-32 md:h-56 md:w-56" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.77 219.77"><defs><style>
						.cls-1 {
							fill: #5dce8b;
						}

						.cls-8 {
							fill: #191919;
						}
					</style></defs><path class="cls-8" d="M60.58,71.25v75.76h-21.43v-59.2h-14.07v-16.56h35.5Z"></path><path class="cls-8" d="M132.02,122.65c0,13.53-10.17,25.87-33.01,25.87-10.5,0-21.65-2.6-29.33-7.47l7.68-16.13c6.17,4.11,13.75,6.28,21,6.28s12.12-2.92,12.12-8.01c0-4.65-3.14-7.68-14.72-7.68h-20.56l3.79-44.27h48.27v16.56h-30.52l-.97,11.04h5.09c22.4,0,31.17,10.39,31.17,23.81Z"></path><path class="cls-1" d="M194.68,117.03h-18.29v17.86h-16.67v-17.86h-18.4v-15.8h18.4v-17.86h16.67v17.86h18.29v15.8Z"></path></svg></div> <p class="text-center text-lg font-semibold">Brands were thoroughly included in the assessment</p></div> <div class="flex flex-col items-center justify-center rounded-md border bg-gray-100 p-4 mr-4 sm:mr-0"><div class="mb-4 text-4xl text-orange-500"><svg class="h-32 w-32 md:h-56 md:w-56" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.77 219.77"><defs><style>
            .cls-1 {
              fill: #5dce8b;
            }
      
            .cls-8 {
              fill: #191919;
            }
          </style></defs><path class="cls-8" d="M78.12,133.26h-11.26v14.5h-20.89v-14.5H5.93v-13.96l33.98-47.3h22.19l-30.85,44.27h15.37v-12.88h20.24v12.88h11.26v16.99Z"></path><path class="cls-8" d="M82.99,109.88c0-25,14.07-39.4,33.44-39.4s33.34,14.4,33.34,39.4-14.07,39.4-33.34,39.4-33.44-14.39-33.44-39.4ZM128.23,109.88c0-15.91-4.98-21.86-11.8-21.86s-11.91,5.95-11.91,21.86,4.98,21.86,11.91,21.86,11.8-5.95,11.8-21.86Z"></path><path class="cls-1" d="M213.84,117.78h-18.29v17.86h-16.67v-17.86h-18.4v-15.8h18.4v-17.86h16.67v17.86h18.29v15.8Z"></path></svg></div> <p class="text-center text-lg font-semibold">Pairs were rigorously tested to find the best choice</p></div> <div class="flex flex-col items-center justify-center rounded-md border bg-gray-100 p-4 ml-4 sm:ml-0"><div class="mb-4 text-4xl text-blue-500"><svg class="h-32 w-32 md:h-56 md:w-56" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.77 219.77"><defs><style>
						.cls-1 {
							fill: #5dce8b;
						}

						.cls-8 {
							fill: #191919;
						}
					</style></defs><path class="cls-8" d="M56.25,72v75.76h-21.43v-59.2h-14.07v-16.56h35.5Z"></path><path class="cls-8" d="M68.16,109.88c0-25,14.07-39.4,33.44-39.4s33.34,14.4,33.34,39.4-14.07,39.4-33.34,39.4-33.44-14.39-33.44-39.4ZM113.4,109.88c0-15.91-4.98-21.86-11.8-21.86s-11.91,5.95-11.91,21.86,4.98,21.86,11.91,21.86,11.8-5.95,11.8-21.86Z"></path><path class="cls-1" d="M199.01,117.78h-18.29v17.86h-16.67v-17.86h-18.4v-15.8h18.4v-17.86h16.67v17.86h18.29v15.8Z"></path></svg></div> <p class="text-center text-lg font-semibold">Washes were made to check shape retention</p></div> <div class="flex flex-col items-center justify-center rounded-md border bg-gray-100 p-4 mr-4"><div class="mb-4 text-4xl text-yellow-500"><svg class="h-32 w-32 md:h-56 md:w-56" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.77 219.77"><defs><style>
            .cls-1 {
              fill: #5dce8b;
            }
      
            .cls-8 {
              fill: #191919;
            }
          </style></defs><g><path class="cls-8" d="M64.8,141.04h37.5v11.11h-37.5v-11.11Z"></path><path class="cls-8" d="M153.92,115.03v53.25h-15.06v-41.61h-9.89v-11.64h24.95Z"></path><path class="cls-8" d="M204.12,151.16c0,9.51-7.15,18.18-23.2,18.18-7.38,0-15.21-1.83-20.61-5.25l5.4-11.33c4.34,2.89,9.66,4.41,14.76,4.41s8.52-2.05,8.52-5.63c0-3.27-2.21-5.4-10.34-5.4h-14.45l2.66-31.11h33.93v11.64h-21.45l-.68,7.76h3.58c15.75,0,21.91,7.3,21.91,16.73Z"></path></g><g><path class="cls-8" d="M102.3,78.07h-12.85v12.55h-11.71v-12.55h-12.93v-11.11h12.93v-12.55h11.71v12.55h12.85v11.11Z"></path><path class="cls-8" d="M149.15,82.49c0,9.05-7.15,17.72-23.2,17.72-7.38,0-15.21-1.83-20.69-5.25l5.48-11.33c4.26,2.89,9.74,4.41,14.76,4.41s8.44-1.98,8.44-5.55c0-3.19-2.36-5.17-8.14-5.17h-6.31v-9.51l9.51-10.27h-20.99v-11.64h38.49v9.43l-11.03,11.87c8.98,1.9,13.69,7.68,13.69,15.29Z"></path><path class="cls-8" d="M154.4,72.52c0-17.57,9.89-27.69,23.5-27.69s23.43,10.12,23.43,27.69-9.89,27.69-23.43,27.69-23.5-10.12-23.5-27.69ZM186.19,72.52c0-11.18-3.5-15.37-8.29-15.37s-8.37,4.18-8.37,15.37,3.5,15.36,8.37,15.36,8.29-4.18,8.29-15.36Z"></path></g><g><path class="cls-8" d="M29.91,174.93c-7.86,0-14.26-6.37-14.26-14.21,0-5.09,2.65-9.71,6.98-12.27V57.67c0-4.02,3.27-7.28,7.28-7.28s7.28,3.27,7.28,7.28v90.84c4.29,2.58,6.92,7.17,6.92,12.21,0,7.83-6.37,14.21-14.21,14.21ZM29.91,53.49c-2.26,0-4.18,1.91-4.18,4.18v91.7c0,.59-.33,1.12-.85,1.39-3.78,1.91-6.12,5.73-6.12,9.97,0,6.12,5,11.1,11.15,11.1s11.1-4.98,11.1-11.1c0-4.19-2.33-8-6.08-9.92-.52-.27-.84-.8-.84-1.38V57.67c0-2.26-1.91-4.18-4.18-4.18Z"></path><path class="cls-1" d="M29.88,154.4c-.86,0-1.55-.7-1.55-1.55v-40.18c0-.86.7-1.55,1.55-1.55s1.55.7,1.55,1.55v40.18c0,.86-.7,1.55-1.55,1.55Z"></path><path class="cls-1" d="M29.88,169.18c-4.71,0-8.54-3.83-8.54-8.54s3.83-8.54,8.54-8.54,8.54,3.83,8.54,8.54-3.83,8.54-8.54,8.54Z"></path></g></svg></div> <p class="text-center text-lg font-semibold">Each pair was tested in all conditions, from heat to cold</p></div></div>`;
}
export {
  CompareTable as C,
  FullWidthElement as F,
  HeroBanner as H,
  ProductDetails as P,
  ReviewTrust as R,
  Schema as S,
  TestingFeatures as T,
  Writer as W,
  Summary as a,
  Reassurance as b,
  FAQ as c
};
