import { A as push, E as store_get, F as ensure_array_like, G as attr, I as unsubscribe_stores, J as bind_props, C as pop, K as head, L as slot, M as fallback, N as rest_props, O as getContext, P as spread_attributes, Q as escape_html, R as sanitize_props, B as setContext, S as spread_props, T as element } from "../../chunks/index.js";
import { n as normaliseBase, p as parseRoute, s as serializeRoute, g as getHrefBetween, i as i18n } from "../../chunks/i18n.js";
import { p as page } from "../../chunks/stores.js";
import { b as base } from "../../chunks/paths.js";
import { g as get, w as writable } from "../../chunks/index2.js";
import { s as setParaglideContext, g as getTranslationFunctions, h as html } from "../../chunks/index3.js";
import "@inlang/paraglide-js/internal/adapter-utils";
import { F as Frame } from "../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
function isExternal(url, currentUrl, base2) {
  const absoluteBase = new URL(base2 ?? "/", currentUrl).pathname;
  return url.origin !== currentUrl.origin || !url.pathname.startsWith(absoluteBase);
}
function AlternateLinks($$payload, $$props) {
  push();
  var $$store_subs;
  let localisedPath, canonicalPath, alternateLinks;
  const absoluteBase = normaliseBase(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let availableLanguageTags = $$props["availableLanguageTags"];
  let strategy = $$props["strategy"];
  let currentLang = $$props["currentLang"];
  const getAlternateLinks = (canonicalPath2, strategy2) => {
    const links = [];
    for (const lang of availableLanguageTags) {
      const localisedPath2 = strategy2.getLocalisedPath(canonicalPath2, lang);
      const fullPath = serializeRoute(localisedPath2, absoluteBase, void 0);
      const link = new URL(fullPath, new URL(store_get($$store_subs ??= {}, "$page", page).url)).href;
      links.push(link);
    }
    return links;
  };
  localisedPath = parseRoute(store_get($$store_subs ??= {}, "$page", page).url.pathname, absoluteBase)[0];
  canonicalPath = strategy.getCanonicalPath(localisedPath, currentLang);
  alternateLinks = getAlternateLinks(canonicalPath, strategy);
  if (availableLanguageTags.length >= 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(alternateLinks);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let href = each_array[i];
      $$payload.out += `<link rel="alternate"${attr("hreflang", availableLanguageTags[i])}${attr("href", href)}>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { availableLanguageTags, strategy, currentLang });
  pop();
}
function ParaglideJS($$payload, $$props) {
  push();
  var $$store_subs;
  let lang;
  const absoluteBase = normaliseBase(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let languageTag = fallback($$props["languageTag"], () => void 0, true);
  let i18n2 = $$props["i18n"];
  function translateHref(href, hreflang) {
    try {
      const localisedCurrentUrl = new URL(get(page).url);
      const [localisedCurrentPath, suffix] = parseRoute(localisedCurrentUrl.pathname, absoluteBase);
      const canonicalCurrentPath = i18n2.strategy.getCanonicalPath(localisedCurrentPath, lang);
      const canonicalCurrentUrl = new URL(localisedCurrentUrl);
      canonicalCurrentUrl.pathname = serializeRoute(canonicalCurrentPath, absoluteBase, suffix);
      const original_to = new URL(href, new URL(canonicalCurrentUrl));
      if (isExternal(original_to, localisedCurrentUrl, absoluteBase) || i18n2.config.exclude(original_to.pathname)) return href;
      const targetLanguage = hreflang ?? lang;
      const [canonicalPath, dataSuffix] = parseRoute(original_to.pathname, absoluteBase);
      const translatedPath = i18n2.strategy.getLocalisedPath(canonicalPath, targetLanguage);
      const to = new URL(original_to);
      to.pathname = serializeRoute(translatedPath, absoluteBase, dataSuffix);
      return getHrefBetween(localisedCurrentUrl, to);
    } catch (error) {
      return href;
    }
  }
  setParaglideContext({ translateHref });
  lang = languageTag ?? i18n2.getLanguageFromUrl(store_get($$store_subs ??= {}, "$page", page).url);
  head($$payload, ($$payload2) => {
    if (i18n2.config.seo.noAlternateLinks !== true && !i18n2.config.exclude(store_get($$store_subs ??= {}, "$page", page).url.pathname)) {
      $$payload2.out += "<!--[-->";
      AlternateLinks($$payload2, {
        availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
        strategy: i18n2.strategy,
        currentLang: lang
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<!---->`;
  {
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { languageTag, i18n: i18n2 });
  pop();
}
function ToolbarButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "name",
    "ariaLabel",
    "size",
    "href"
  ]);
  push();
  let color = fallback($$props["color"], "default");
  let name = fallback($$props["name"], () => void 0, true);
  let ariaLabel = fallback($$props["ariaLabel"], () => void 0, true);
  let size = fallback($$props["size"], "md");
  let href = fallback($$props["href"], () => void 0, true);
  const background = getContext("background");
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  buttonClass = twMerge("focus:outline-none whitespace-normal", sizing[size], colors[color], color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"), $$sanitized_props.class);
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
        {
          "href": href,
          ...$$restProps,
          "class": buttonClass,
          "aria-label": ariaLabel ?? name
        },
        [
          {
            attribute_name: "href",
            lang_attribute_name: "hreflang"
          }
        ]
      )
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
        {
          "type": `button`,
          ...$$restProps,
          "class": buttonClass,
          "aria-label": ariaLabel ?? name
        },
        [{ attribute_name: "formaction" }]
      )
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { color, name, ariaLabel, size, href });
  pop();
}
function Footer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["footerType"]);
  push();
  let footerType = fallback($$props["footerType"], () => void 0, true);
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$sanitized_props.class);
  $$payload.out += `<footer${spread_attributes({ ...$$restProps, class: footerClass })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></footer>`;
  bind_props($$props, { footerType });
  pop();
}
function FooterBrand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "aClass",
    "spanClass",
    "imgClass",
    "href",
    "src",
    "alt",
    "name",
    "target",
    "classA",
    "classSpan",
    "classImg"
  ]);
  push();
  let aClass = fallback($$props["aClass"], "flex items-center");
  let spanClass = fallback($$props["spanClass"], "self-center text-2xl font-semibold whitespace-nowrap dark:text-white");
  let imgClass = fallback($$props["imgClass"], "me-3 h-8");
  let href = fallback($$props["href"], "");
  let src = fallback($$props["src"], "");
  let alt = fallback($$props["alt"], "");
  let name = fallback($$props["name"], "");
  let target = fallback($$props["target"], "");
  let classA = fallback($$props["classA"], "");
  let classSpan = fallback($$props["classSpan"], "");
  let classImg = fallback($$props["classImg"], "");
  let aCls = twMerge(aClass, classA);
  let spanCls = twMerge(spanClass, classSpan);
  let imgCls = twMerge(imgClass, classImg);
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
        {
          ...$$restProps,
          "href": href,
          "target": target,
          "class": aCls
        },
        [
          {
            attribute_name: "href",
            lang_attribute_name: "hreflang"
          }
        ]
      )
    })}><img${attr("src", src)}${attr("class", imgCls)}${attr("alt", alt)}> <span${attr("class", spanCls)}>${escape_html(name)}</span> <!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({ ...$$restProps, src, class: imgCls, alt })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    target,
    classA,
    classSpan,
    classImg
  });
  pop();
}
function FooterCopyright($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "spanClass",
    "aClass",
    "year",
    "href",
    "by",
    "target",
    "copyrightMessage",
    "classSpan",
    "classA"
  ]);
  push();
  let spanClass = fallback($$props["spanClass"], "block text-sm text-gray-500 sm:text-center dark:text-gray-400");
  let aClass = fallback($$props["aClass"], "hover:underline");
  let year = fallback($$props["year"], () => /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear(), true);
  let href = fallback($$props["href"], "");
  let by = fallback($$props["by"], "");
  let target = fallback($$props["target"], () => void 0, true);
  let copyrightMessage = fallback($$props["copyrightMessage"], "All Rights Reserved.");
  let classSpan = fallback($$props["classSpan"], "");
  let classA = fallback($$props["classA"], "");
  let spanCls = twMerge(spanClass, classSpan);
  let aCls = twMerge(aClass, classA);
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<span${attr("class", spanCls)}>© ${escape_html(year)} `;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
        {
          ...$$restProps,
          "href": href,
          "target": target,
          "class": aCls
        },
        [
          {
            attribute_name: "href",
            lang_attribute_name: "hreflang"
          }
        ]
      )
    })}>${escape_html(by)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="ms-1">${escape_html(by)}</span>`;
  }
  $$payload.out += `<!--]--> ${escape_html(copyrightMessage)}</span>`;
  bind_props($$props, {
    spanClass,
    aClass,
    year,
    href,
    by,
    target,
    copyrightMessage,
    classSpan,
    classA
  });
  pop();
}
function FooterLink($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "liClass",
    "aClass",
    "href",
    "target",
    "classLi",
    "classA"
  ]);
  push();
  let liClass = fallback($$props["liClass"], "me-4 last:me-0 md:me-6");
  let aClass = fallback($$props["aClass"], "hover:underline");
  let href = fallback($$props["href"], "");
  let target = fallback($$props["target"], () => void 0, true);
  let classLi = fallback($$props["classLi"], "");
  let classA = fallback($$props["classA"], "");
  let liCls = twMerge(liClass, classLi);
  let aCls = twMerge(aClass, classA);
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<li${attr("class", liCls)}><a${spread_attributes({
    ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
      {
        ...$$restProps,
        "href": href,
        "class": aCls,
        "target": target
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
  $$payload.out += `<!----></a></li>`;
  bind_props($$props, {
    liClass,
    aClass,
    href,
    target,
    classLi,
    classA
  });
  pop();
}
function FooterLinkGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["ulClass"]);
  push();
  let ulClass = fallback($$props["ulClass"], "text-gray-600 dark:text-gray-400");
  $$payload.out += `<ul${spread_attributes({
    ...$$restProps,
    class: twMerge(ulClass, $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { ulClass });
  pop();
}
function NavContainer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid"]);
  push();
  let fluid = fallback($$props["fluid"], false);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    class: twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { fluid });
  pop();
}
function Navbar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid", "navContainerClass"]);
  push();
  var $$store_subs;
  let fluid = fallback($$props["fluid"], false);
  let navContainerClass = fallback($$props["navContainerClass"], "");
  let hidden = writable(true);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  {
    $$restProps.color = $$restProps.color ?? "navbar";
  }
  Frame($$payload, spread_props([
    { tag: "nav" },
    $$restProps,
    {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$sanitized_props.class),
      children: ($$payload2) => {
        NavContainer($$payload2, {
          fluid,
          class: navContainerClass,
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            slot(
              $$payload3,
              $$props,
              "default",
              {
                hidden: store_get($$store_subs ??= {}, "$hidden", hidden),
                toggle,
                NavContainer
              },
              null
            );
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    }
  ]));
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { fluid, navContainerClass });
  pop();
}
function NavBrand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href"]);
  push();
  let href = fallback($$props["href"], "");
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<a${spread_attributes({
    ...paraglide_sveltekit_translate_attribute_pass_handle_attributes(
      {
        "href": href,
        ...$$restProps,
        "class": twMerge("flex items-center", $$sanitized_props.class)
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
  bind_props($$props, { href });
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "color", "variation", "ariaLabel"]);
  push();
  let size = fallback($$props["size"], "24");
  let color = fallback($$props["color"], "currentColor");
  let variation = fallback($$props["variation"], "outline");
  let ariaLabel = fallback($$props["ariaLabel"], "bars 3");
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  switch (variation) {
    case "outline":
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
      break;
    case "solid":
      svgpath = svgsolid;
      viewBox = "0 0 24 24";
      break;
    default:
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
  }
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "button",
      tabindex: "0",
      width: size,
      height: size,
      class: $$sanitized_props.class,
      ...$$restProps,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    void 0,
    void 0,
    3
  )}>${html(svgpath)}</svg>`;
  bind_props($$props, { size, color, variation, ariaLabel });
  pop();
}
function NavHamburger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["menuClass", "onClick", "classMenu"]);
  push();
  let menuClass = fallback($$props["menuClass"], "h-6 w-6 shrink-0");
  let onClick = fallback($$props["onClick"], () => void 0, true);
  let classMenu = fallback($$props["classMenu"], "");
  let btnClass = "ms-3 md:hidden";
  getContext("navHidden") ?? writable(true);
  ToolbarButton($$payload, spread_props([
    { name: "Open main menu" },
    $$restProps,
    {
      class: twMerge(btnClass, $$sanitized_props.class),
      children: ($$payload2) => {
        Menu($$payload2, { class: twMerge(menuClass, classMenu) });
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { menuClass, onClick, classMenu });
  pop();
}
function NavLi($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "activeClass", "nonActiveClass"]);
  push();
  let active, liClass;
  let href = fallback($$props["href"], "");
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let nonActiveClass = fallback($$props["nonActiveClass"], () => void 0, true);
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  active = navUrl ? href === navUrl : false;
  liClass = twMerge("block py-2 pe-4 ps-3 md:p-0 rounded md:border-0", active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$sanitized_props.class);
  const $$tag = href ? "a" : "div";
  $$payload.out += `<li>`;
  element(
    $$payload,
    $$tag,
    () => {
      $$payload.out += `${spread_attributes({
        ...`${href ? "a" : "div"}` === "button" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes(
          {
            "role": href ? void 0 : "link",
            "href": href,
            ...$$restProps,
            "class": liClass
          },
          [{ attribute_name: "formaction" }]
        ) : `${href ? "a" : "div"}` === "form" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes(
          {
            "role": href ? void 0 : "link",
            "href": href,
            ...$$restProps,
            "class": liClass
          },
          [{ attribute_name: "action" }]
        ) : `${href ? "a" : "div"}` === "a" ? paraglide_sveltekit_translate_attribute_pass_handle_attributes(
          {
            "role": href ? void 0 : "link",
            "href": href,
            ...$$restProps,
            "class": liClass
          },
          [
            {
              attribute_name: "href",
              lang_attribute_name: "hreflang"
            }
          ]
        ) : {
          "role": href ? void 0 : "link",
          "href": href,
          ...$$restProps,
          "class": liClass
        }
      })}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
  );
  $$payload.out += `</li>`;
  bind_props($$props, { href, activeClass, nonActiveClass });
  pop();
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}
function NavUl($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass",
    "classUl"
  ]);
  push();
  var $$store_subs;
  let activeUrl = fallback($$props["activeUrl"], "");
  let divClass = fallback($$props["divClass"], "w-full md:block md:w-auto");
  let ulClass = fallback($$props["ulClass"], "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium");
  let hidden = fallback($$props["hidden"], () => void 0, true);
  let slideParams = fallback($$props["slideParams"], () => ({ delay: 250, duration: 500, easing: sineIn }), true);
  let activeClass = fallback($$props["activeClass"], "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent");
  let nonActiveClass = fallback($$props["nonActiveClass"], "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent");
  let classUl = fallback($$props["classUl"], "");
  const activeUrlStore = writable("");
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  let _hidden;
  let _divClass;
  let _ulClass;
  {
    activeUrlStore.set(activeUrl);
  }
  _hidden = hidden ?? store_get($$store_subs ??= {}, "$hiddenStore", hiddenStore) ?? true;
  _divClass = twMerge(divClass, $$sanitized_props.class);
  _ulClass = twMerge(ulClass, classUl);
  if (!_hidden) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...$$restProps,
      class: _divClass,
      role: "button",
      tabindex: "0"
    })}>`;
    Frame($$payload, {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({
      ...$$restProps,
      class: _divClass,
      hidden: _hidden
    })}><ul${attr("class", _ulClass)}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></ul></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    activeUrl,
    divClass,
    ulClass,
    hidden,
    slideParams,
    activeClass,
    nonActiveClass,
    classUl
  });
  pop();
}
function Header($$payload) {
  Navbar($$payload, {
    children: ($$payload2) => {
      NavBrand($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<img src="images/logo.svg" class="me-3 h-10 sm:h-15" alt="worldtopreviews.com logo"> <span class="text-[#191919] self-center whitespace-nowrap text-xl dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      NavHamburger($$payload2, {});
      $$payload2.out += `<!----> `;
      NavUl($$payload2, {
        children: ($$payload3) => {
          NavLi($$payload3, {
            href: "/the-best-mens-boxer-briefs-money-can-buy-2025",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Merino top 10 brands`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavLi($$payload3, {
            href: "/about",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavLi($$payload3, {
            href: "/contact",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Contact`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Footer_1($$payload) {
  Footer($$payload, {
    footerType: "socialmedia",
    children: ($$payload2) => {
      $$payload2.out += `<div class="md:flex md:justify-between"><div class="mb-6 md:mb-0 flex">`;
      FooterBrand($$payload2, {
        href: "/",
        src: "images/logo.svg",
        alt: "Flowbite Logo",
        name: "",
        imgClass: "h-20 ml-5 mr-2"
      });
      $$payload2.out += `<!----> <span class="self-center whitespace-nowrap text-xl dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span></div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2> `;
      FooterLinkGroup($$payload2, {
        children: ($$payload3) => {
          FooterLink($$payload3, {
            liClass: "mb-4",
            href: "/the-best-mens-boxer-briefs-money-can-buy-2025",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Merino top 10 brands`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLink($$payload3, {
            liClass: "mb-4",
            href: "/about",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLink($$payload3, {
            liClass: "mb-4",
            href: "/contact",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Contact`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2> `;
      FooterLinkGroup($$payload2, {
        children: ($$payload3) => {
          FooterLink($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Privacy Policy`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLink($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Terms &amp; Conditions`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLink($$payload3, {
            liClass: "mb-4",
            href: "/disclaimer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Disclaimer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div></div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between">`;
      FooterCopyright($$payload2, {
        href: "/",
        by: "WorldTopReviews",
        spanClass: "ml-5"
      });
      $$payload2.out += `<!----> <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0"></div></div>`;
    },
    $$slots: { default: true }
  });
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  ParaglideJS($$payload, {
    i18n,
    children: ($$payload2) => {
      Header($$payload2);
      $$payload2.out += `<!----> `;
      children($$payload2);
      $$payload2.out += `<!----> `;
      Footer_1($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  _layout as default
};
