import { K as va, k as me, C as ye, S as Ae, I as Pe, P as Be, c as Ke, b as je, i as Fe, s as Ue, p as We } from "./index-DzxRow2V.js";
import { jsx as r, jsxs as R, Fragment as ka } from "react/jsx-runtime";
import { useRef as U, useState as A, useEffect as W, useMemo as Q, useCallback as ra, useLayoutEffect as Ya, isValidElement as Ye, createContext as ue, useContext as La, Children as He } from "react";
import { IoSearch as Ve, IoCheckmark as Ce, IoChevronForward as Ha } from "react-icons/io5";
import { B as Na, A as pe, C as Oe, h as O, z as ha, w as da, m as aa, e as ve, p as Ge, R as Xe, r as qe } from "./useSlidingThumb-CUFxfOOx.js";
const Ze = '.may-command__scrim{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--may-z-sheet);display:flex;align-items:flex-start;justify-content:center;padding:var(--may-space-6);padding-block-start:min(16vh,var(--may-space-24));background:var(--may-color-scrim);animation:may-command-scrim-in var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-command{display:flex;flex-direction:column;width:100%;max-width:42rem;max-height:min(60vh,calc(var(--may-space-24) * 4));min-height:0;border-radius:var(--may-radius-sheet);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-2xl);overflow:hidden;animation:may-command-in var(--may-duration-settle) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}@keyframes may-command-scrim-in{0%{opacity:0}to{opacity:1}}@keyframes may-command-in{0%{opacity:0;transform:scale(.92) translateY(calc(var(--may-space-4) * -1))}to{opacity:1;transform:none}}.may-command__field{position:relative;display:flex;align-items:center;gap:var(--may-space-3);flex-shrink:0;height:var(--may-control-h-lg);padding-inline:var(--may-space-5)}.may-command__field:after{content:"";position:absolute;inset-inline:0;inset-block-end:0;height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-command__field:after{height:var(--may-hairline)}}.may-command__search{width:var(--may-space-4);height:var(--may-space-4);flex-shrink:0;color:var(--may-color-text-tertiary)}.may-command__input{flex:1;min-width:0;padding:0;border:0;background:transparent;color:var(--may-color-text);font-family:inherit;font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);outline:none}.may-command__input::placeholder{color:var(--may-color-text-tertiary)}.may-command__input::-webkit-search-cancel-button{display:none}.may-command__escape{flex-shrink:0}.may-command__list{flex:1;min-height:0;overflow-y:auto;padding:var(--may-space-2);scroll-padding-block:var(--may-space-8)}.may-command__heading{padding:var(--may-space-3) var(--may-space-3) var(--may-space-1);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);letter-spacing:.06em;text-transform:uppercase;color:var(--may-color-text-secondary)}.may-command__row{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-space-3);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-text);font:inherit;text-align:start;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-command__row[data-active=true]{background:var(--may-color-highlight-strong)}.may-command__row[data-pressed=true]{background:var(--may-color-fill-secondary)}.may-command__row[aria-disabled=true]{opacity:.35;cursor:not-allowed}.may-command__row[data-destructive=true] .may-command__label{color:var(--may-color-danger)}.may-command__icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-space-6);height:var(--may-space-6);border-radius:var(--may-radius-xs);background:var(--may-color-fill-quaternary);color:var(--may-color-text-secondary)}.may-command__icon>svg{width:1em;height:1em;display:block}.may-command__row[data-destructive=true] .may-command__icon{color:var(--may-color-danger)}.may-command__text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}.may-command__label{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-command__hint{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-command__match{background:transparent;color:var(--may-color-tint);font-weight:var(--may-text-headline-weight)}.may-command__row[data-destructive=true] .may-command__match{color:var(--may-color-danger)}.may-command__shortcut{display:inline-flex;align-items:center;gap:var(--may-space-1);flex-shrink:0}.may-command__empty{margin:0;padding:var(--may-space-10) var(--may-space-6);text-align:center;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);color:var(--may-color-text-secondary)}.may-command__footer{position:relative;display:flex;align-items:center;gap:var(--may-space-5);flex-shrink:0;padding:var(--may-space-2) var(--may-space-5);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);color:var(--may-color-text-tertiary);background:var(--may-color-fill-quaternary)}.may-command__legend{display:inline-flex;align-items:center;gap:var(--may-space-1)}@media(prefers-reduced-motion:reduce){.may-command,.may-command__scrim{animation:none}}.may-command__scrim[data-state=closed]{opacity:0;pointer-events:none}.may-command[data-state=closed]{opacity:0}', Je = 150, Qe = 12, at = 10, et = 14, tt = 1, rt = 40, nt = (a, e) => {
  if (e === 0) return !0;
  const t = a[e - 1];
  return t === " " || t === "-" || t === "_" || t === "/" || t === "." || // camelCase: the capital is the boundary, not the character before it.
  t === t.toLowerCase() && a[e] !== a[e].toLowerCase();
};
function ae(a, e) {
  if (!a) return { score: 0, ranges: [] };
  const t = e.toLowerCase(), i = a.toLowerCase(), s = [];
  let o = 0, m = 0, f = -2;
  for (const b of i) {
    const _ = t.indexOf(b, m);
    if (_ === -1) return null;
    _ === f + 1 ? (o += Qe, s[s.length - 1][1] = _ + 1) : (o -= (_ - m) * tt, s.push([_, _ + 1])), _ === 0 ? o += et : nt(e, _) && (o += at), f = _, m = _ + 1;
  }
  return { score: o - e.length * 0.1, ranges: s };
}
function it(a, e) {
  const t = ae(a, e.label);
  if (t) return t;
  let i = null;
  for (const s of e.keywords ?? []) {
    const o = ae(a, s);
    o && (!i || o.score > i.score) && (i = o);
  }
  return i ? { score: i.score - rt, ranges: [] } : null;
}
function ot({ text: a, ranges: e }) {
  if (e.length === 0) return /* @__PURE__ */ r(ka, { children: a });
  const t = [];
  let i = 0;
  return e.forEach(([s, o], m) => {
    s > i && t.push(a.slice(i, s)), t.push(
      /* @__PURE__ */ r("mark", { className: "may-command__match", children: a.slice(s, o) }, m)
    ), i = o;
  }), i < a.length && t.push(a.slice(i)), /* @__PURE__ */ r(ka, { children: t });
}
function st({ match: a, id: e, active: t, onActivate: i, onHover: s }) {
  const { item: o } = a, { pressProps: m } = ha(o.disabled);
  return /* @__PURE__ */ R(
    "button",
    {
      ...m,
      id: e,
      type: "button",
      role: "option",
      "aria-selected": t,
      "aria-disabled": o.disabled || void 0,
      tabIndex: -1,
      "data-active": t ? "true" : void 0,
      "data-destructive": o.destructive ? "true" : void 0,
      onMouseDown: (f) => f.preventDefault(),
      onMouseMove: s,
      onClick: i,
      className: "may-command__row",
      children: [
        o.icon && /* @__PURE__ */ r("span", { className: "may-command__icon", "aria-hidden": !0, children: o.icon }),
        /* @__PURE__ */ R("span", { className: "may-command__text", children: [
          /* @__PURE__ */ r("span", { className: "may-command__label", children: /* @__PURE__ */ r(ot, { text: o.label, ranges: a.ranges }) }),
          o.hint && /* @__PURE__ */ r("span", { className: "may-command__hint", children: o.hint })
        ] }),
        o.shortcut && o.shortcut.length > 0 && /* @__PURE__ */ r("span", { className: "may-command__shortcut", children: o.shortcut.map((f) => /* @__PURE__ */ r(va, { size: "xs", children: f }, f)) })
      ]
    }
  );
}
function lt({
  open: a,
  onOpenChange: e,
  groups: t,
  onSelect: i,
  query: s,
  defaultQuery: o,
  onQueryChange: m,
  recentIds: f,
  maxRecent: b = 5,
  recentHeading: _ = "Recent",
  placeholder: v = "Search commands",
  hotkey: u = "k",
  emptyState: $,
  hideFooter: E = !1,
  label: g = "Commands",
  className: x
}) {
  const k = Na(), N = pe(), I = Oe(a, N ? 0 : Je), z = U(null), P = U(null), V = U(null), [M, L] = A(o ?? ""), C = s ?? M, j = C.trim(), F = (c) => {
    s === void 0 && L(c), m == null || m(c);
  }, G = U(a);
  G.current = a, W(() => {
    if (u === !1 || typeof window > "u") return;
    const c = (u || "k").toLowerCase(), d = (h) => {
      !(h.metaKey || h.ctrlKey) || h.altKey || h.key.toLowerCase() === c && (h.preventDefault(), e(!G.current));
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [u, e]), W(() => {
    var ia;
    if (!a) return;
    V.current = document.activeElement;
    const c = document.body, d = c.style.overflow, h = c.style.paddingRight, D = window.innerWidth - document.documentElement.clientWidth;
    return c.style.overflow = "hidden", D > 0 && (c.style.paddingRight = `${D}px`), (ia = z.current) == null || ia.focus(), () => {
      var oa, ma;
      c.style.overflow = d, c.style.paddingRight = h, (ma = (oa = V.current) == null ? void 0 : oa.focus) == null || ma.call(oa);
    };
  }, [a]), W(() => {
    !a && s === void 0 && L("");
  }, [a, s]);
  const na = Q(() => {
    const c = /* @__PURE__ */ new Map();
    for (const d of t) for (const h of d.items) c.set(h.id, h);
    return c;
  }, [t]), p = Q(() => {
    if (!j) {
      const c = (f ?? []).map((h) => na.get(h)).filter((h) => !!h).slice(0, b);
      if (c.length === 0)
        return t.map((h) => ({
          id: h.id,
          heading: h.heading,
          matches: h.items.map((D) => ({ item: D, ranges: [] }))
        }));
      const d = new Set(c.map((h) => h.id));
      return [
        { id: `${k}-recent`, heading: _, matches: c.map((h) => ({ item: h, ranges: [] })) },
        ...t.map((h) => ({
          id: h.id,
          heading: h.heading,
          matches: h.items.filter((D) => !d.has(D.id)).map((D) => ({ item: D, ranges: [] }))
        }))
      ].filter((h) => h.matches.length > 0);
    }
    return t.map((c) => {
      const d = c.items.map((h) => {
        const D = it(j, h);
        return D ? { item: h, ranges: D.ranges, score: D.score } : null;
      }).filter((h) => h !== null).sort((h, D) => D.score - h.score);
      return { id: c.id, heading: c.heading, matches: d };
    }).filter((c) => c.matches.length > 0);
  }, [j, t, f, b, _, na, k]), l = Q(() => p.flatMap((c) => c.matches), [p]), S = Q(
    () => new Map(l.map((c, d) => [c.item.id, d])),
    [l]
  ), [K, T] = A(0);
  W(() => {
    T(0);
  }, [j, a]), W(() => {
    T((c) => c >= l.length ? 0 : c);
  }, [l.length]), W(() => {
    var c, d;
    a && ((d = (c = P.current) == null ? void 0 : c.querySelector('[data-active="true"]')) == null || d.scrollIntoView({ block: "nearest" }));
  }, [K, a]);
  const ea = (c) => {
    if (l.length === 0) return;
    let d = K;
    for (let h = 0; h < l.length && (d = (d + c + l.length) % l.length, !!l[d].item.disabled); h++)
      ;
    T(d);
  }, Z = (c) => {
    var d;
    c.disabled || (i == null || i(c), (d = c.onSelect) == null || d.call(c), e(!1));
  }, X = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), ea(1);
        break;
      case "ArrowUp":
        c.preventDefault(), ea(-1);
        break;
      case "Home":
        c.preventDefault(), T(0);
        break;
      case "End":
        c.preventDefault(), T(Math.max(0, l.length - 1));
        break;
      case "Enter": {
        const d = l[K];
        if (!d) return;
        c.preventDefault(), Z(d.item);
        break;
      }
      case "Escape":
        c.preventDefault(), e(!1);
        break;
    }
  };
  if (!I) return null;
  const H = `${k}-list`;
  return /* @__PURE__ */ r(
    "div",
    {
      className: "may-command__scrim",
      "data-slot": "scrim",
      "data-state": a ? "open" : "closed",
      onMouseDown: (c) => {
        c.target === c.currentTarget && e(!1);
      },
      children: /* @__PURE__ */ R(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": g,
          "data-slot": "command-palette",
          "data-state": a ? "open" : "closed",
          className: O("may-command", x),
          children: [
            /* @__PURE__ */ R("div", { className: "may-command__field", children: [
              /* @__PURE__ */ r(Ve, { className: "may-command__search", "aria-hidden": !0, focusable: "false" }),
              /* @__PURE__ */ r(
                "input",
                {
                  ref: z,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": "true",
                  "aria-controls": H,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": l[K] ? `${k}-option-${l[K].item.id}` : void 0,
                  autoComplete: "off",
                  spellCheck: !1,
                  placeholder: v,
                  value: C,
                  onChange: (c) => F(c.target.value),
                  onKeyDown: X,
                  className: "may-command__input"
                }
              ),
              /* @__PURE__ */ r(va, { size: "sm", live: !0, className: "may-command__escape", children: "esc" })
            ] }),
            /* @__PURE__ */ r(
              "div",
              {
                ref: P,
                id: H,
                role: "listbox",
                "aria-label": g,
                "data-slot": "scroll-area",
                className: "may-command__list",
                children: l.length === 0 ? $ ?? /* @__PURE__ */ R("p", { className: "may-command__empty", children: [
                  "No commands match “",
                  j,
                  "”."
                ] }) : p.map((c) => (
                  // A real `group` inside the listbox, named by its heading. The
                  // heading element itself is presentational — announced as an
                  // option it would be a row in the list that cannot be selected.
                  /* @__PURE__ */ R("div", { role: "group", "aria-label": c.heading, className: "may-command__group", children: [
                    c.heading && /* @__PURE__ */ r("div", { className: "may-command__heading", role: "presentation", children: c.heading }),
                    c.matches.map((d) => {
                      const h = S.get(d.item.id) ?? -1;
                      return /* @__PURE__ */ r(
                        st,
                        {
                          id: `${k}-option-${d.item.id}`,
                          match: d,
                          active: h === K,
                          onActivate: () => Z(d.item),
                          onHover: () => T(h)
                        },
                        d.item.id
                      );
                    })
                  ] }, c.id)
                ))
              }
            ),
            !E && /* @__PURE__ */ R("div", { className: "may-command__footer", children: [
              /* @__PURE__ */ R("span", { className: "may-command__legend", children: [
                /* @__PURE__ */ r(va, { size: "xs", live: !0, children: "up" }),
                /* @__PURE__ */ r(va, { size: "xs", live: !0, children: "down" }),
                "Navigate"
              ] }),
              /* @__PURE__ */ R("span", { className: "may-command__legend", children: [
                /* @__PURE__ */ r(va, { size: "xs", live: !0, children: "enter" }),
                "Select"
              ] }),
              /* @__PURE__ */ R("span", { className: "may-command__legend", children: [
                /* @__PURE__ */ r(va, { size: "xs", live: !0, children: "esc" }),
                "Close"
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const ct = aa("CommandPalette", Ze), dt = aa("Kbd", me), mt = [dt, ct], lr = da("CommandPalette", lt, mt), yt = '.may-context{display:contents}.may-menu{position:fixed;z-index:var(--may-z-popover);display:flex;flex-direction:column;min-width:13rem;max-width:22rem;max-height:calc(100vh - var(--may-space-4));overflow-y:auto;padding:var(--may-space-1);border-radius:var(--may-radius-lg);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-xl);visibility:hidden;transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-menu[data-placed=true]{visibility:visible;animation:may-menu-in var(--may-duration-settle) var(--may-ease-out)}.may-menu:not([data-level="0"])[data-placed=true]{animation-duration:var(--may-duration-fast);animation-timing-function:var(--may-ease-out)}@keyframes may-menu-in{0%{opacity:0;transform:scale(.88)}to{opacity:1;transform:none}}.may-menu__slot{display:block}.may-menu__item{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-height:var(--may-control-h);padding:var(--may-space-1) var(--may-space-3);border:0;border-radius:var(--may-radius-sm);background:transparent;color:var(--may-color-text);font-family:inherit;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);text-align:start;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-menu[data-size=sm] .may-menu__item{min-height:var(--may-control-h-sm);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-menu__item[data-active=true]{background:var(--may-color-highlight-strong)}.may-menu__item[data-pressed=true]{background:var(--may-color-fill-secondary)}.may-menu__item[aria-disabled=true]{opacity:.35;cursor:not-allowed}.may-menu__item[data-destructive=true]{color:var(--may-color-danger)}.may-menu__lead{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-space-4);height:var(--may-space-4);color:var(--may-color-text-secondary)}.may-menu__item[data-destructive=true] .may-menu__lead{color:var(--may-color-danger)}.may-menu__lead>svg{width:100%;height:100%;display:block}.may-menu__check{width:100%;height:100%;display:block;color:var(--may-color-tint);animation:may-menu-check-in var(--may-duration-settle) var(--may-ease-out) both}@keyframes may-menu-check-in{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:none}}.may-menu__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-menu__shortcut{display:inline-flex;align-items:center;gap:var(--may-space-1);flex-shrink:0}.may-menu__chevron{width:var(--may-space-3);height:var(--may-space-3);flex-shrink:0;color:var(--may-color-text-tertiary)}.may-menu__item[data-active=true] .may-menu__chevron{color:var(--may-color-text-secondary)}.may-menu__separator{position:relative;height:var(--may-space-2);flex-shrink:0}.may-menu__separator:before{content:"";position:absolute;inset-block-start:50%;inset-inline:var(--may-space-2);height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-menu__separator:before{height:var(--may-hairline)}}.may-menu__section{padding:var(--may-space-2) var(--may-space-3) var(--may-space-1);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);letter-spacing:.06em;text-transform:uppercase;color:var(--may-color-text-secondary)}@media(prefers-reduced-motion:reduce){.may-menu[data-placed=true],.may-menu__check{animation:none}}.may-menu[data-state=closed]{opacity:0;pointer-events:none}', ut = 150, ca = 8, ee = 6, pt = 4, vt = 110, ht = 260, te = typeof window > "u" ? W : Ya, re = (a) => a.type !== "separator" && a.type !== "label";
function ft(a, e) {
  var v;
  const { width: t, height: i } = a.getBoundingClientRect(), s = window.innerWidth, o = window.innerHeight;
  let m, f, b = !1, _ = !1;
  if (e.kind === "point")
    m = e.x, f = e.y, m + t > s - ca && (m = e.x - t, b = !0), f + i > o - ca && (f = e.y - i, _ = !0);
  else {
    const u = e.anchorRef.current, $ = u == null ? void 0 : u.getBoundingClientRect(), E = (v = u == null ? void 0 : u.closest('[data-slot="menu"]')) == null ? void 0 : v.getBoundingClientRect();
    m = ((E == null ? void 0 : E.right) ?? 0) - ee, f = (($ == null ? void 0 : $.top) ?? 0) - pt, m + t > s - ca && (m = ((E == null ? void 0 : E.left) ?? 0) - t + ee, b = !0), f + i > o - ca && (f = o - ca - i, _ = !0);
  }
  return {
    x: Math.max(ca, Math.min(m, s - ca - t)),
    y: Math.max(ca, Math.min(f, o - ca - i)),
    origin: `${b ? "right" : "left"} ${_ ? "bottom" : "top"}`
  };
}
function bt({
  item: a,
  active: e,
  submenuOpen: t,
  submenuAutoFocus: i,
  size: s,
  level: o,
  register: m,
  onOpenSubmenu: f,
  onHover: b,
  onHoverEnd: _,
  onSelectAction: v,
  onCloseAll: u,
  onCloseSubmenu: $
}) {
  var k;
  const { pressProps: E } = ha(a.disabled), g = U(null), x = !!((k = a.items) != null && k.length);
  return (
    /*
     * role="none" because a menu's children have to be menuitems, separators or
     * groups, and an unlabelled wrapper between them breaks the pattern. The
     * wrapper exists so the pointer can travel from an item into its own
     * submenu without ever leaving one element's subtree — which is what makes
     * the close delay below reliable rather than approximate.
     */
    /* @__PURE__ */ R("div", { role: "none", className: "may-menu__slot", onMouseEnter: b, onMouseLeave: _, children: [
      /* @__PURE__ */ R(
        "button",
        {
          ...E,
          ref: (N) => {
            g.current = N, m(N);
          },
          type: "button",
          role: a.checked === void 0 ? "menuitem" : "menuitemcheckbox",
          "aria-checked": a.checked,
          "aria-haspopup": x ? "menu" : void 0,
          "aria-expanded": x ? t : void 0,
          "aria-disabled": a.disabled || void 0,
          tabIndex: e ? 0 : -1,
          "data-active": e ? "true" : void 0,
          "data-destructive": a.destructive ? "true" : void 0,
          onClick: () => {
            if (!a.disabled) {
              if (x) {
                f();
                return;
              }
              v(a), u();
            }
          },
          className: "may-menu__item",
          children: [
            /* @__PURE__ */ r("span", { className: "may-menu__lead", "aria-hidden": !0, children: a.checked ? /* @__PURE__ */ r(Ce, { className: "may-menu__check", focusable: "false" }) : a.icon }),
            /* @__PURE__ */ r("span", { className: "may-menu__label", children: a.label }),
            a.shortcut && a.shortcut.length > 0 && /* @__PURE__ */ r("span", { className: "may-menu__shortcut", children: a.shortcut.map((N) => /* @__PURE__ */ r(va, { size: "xs", children: N }, N)) }),
            x && /* @__PURE__ */ r(Ha, { className: "may-menu__chevron", "aria-hidden": !0, focusable: "false" })
          ]
        }
      ),
      x && t && /* @__PURE__ */ r(
        he,
        {
          entries: a.items,
          placement: { kind: "submenu", anchorRef: g },
          size: s,
          level: o + 1,
          autoFocus: i,
          label: typeof a.label == "string" ? a.label : void 0,
          onSelectAction: v,
          onCloseAll: u,
          onCloseLevel: $
        }
      )
    ] })
  );
}
function he({
  entries: a,
  placement: e,
  size: t,
  level: i,
  closing: s,
  autoFocus: o,
  label: m,
  panelRef: f,
  onSelectAction: b,
  onCloseAll: _,
  onCloseLevel: v
}) {
  const u = U(null), $ = f ?? u, E = U([]), g = U(null), [x, k] = A(null), [N, I] = A(-1), [z, P] = A(null), [V, M] = A(!1), L = a.reduce((p, l, S) => (re(l) && !l.disabled && p.push(S), p), []);
  te(() => {
    const p = $.current;
    p && k(ft(p, e));
  }, []), te(() => {
    var p;
    o && L[0] !== void 0 ? I(L[0]) : (p = $.current) == null || p.focus();
  }, []), W(() => {
    var p;
    N >= 0 && ((p = E.current[N]) == null || p.focus());
  }, [N]), W(
    () => () => {
      g.current && clearTimeout(g.current);
    },
    []
  );
  const C = (p) => {
    g.current && clearTimeout(g.current), p !== z && (g.current = setTimeout(
      () => {
        M(!1), P(p);
      },
      p === null ? ht : vt
    ));
  }, j = (p) => {
    if (L.length === 0) return;
    const l = L.indexOf(N), S = l === -1 ? p > 0 ? 0 : L.length - 1 : (l + p + L.length) % L.length;
    I(L[S]);
  }, F = (p) => {
    g.current && clearTimeout(g.current), I(p), M(!0), P(p);
  }, G = () => {
    var p;
    g.current && clearTimeout(g.current), M(!1), P(null), N >= 0 && ((p = E.current[N]) == null || p.focus());
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: $,
      role: "menu",
      "aria-label": m,
      "aria-orientation": "vertical",
      tabIndex: -1,
      "data-slot": "menu",
      "data-scroll-area": "true",
      "data-scroll-hint": "true",
      "data-size": t,
      "data-level": i,
      "data-state": s ? "closed" : "open",
      "data-placed": x ? "true" : void 0,
      onKeyDown: (p) => {
        var T;
        const l = N >= 0 ? a[N] : void 0, S = l && re(l) ? l : void 0, K = !!((T = S == null ? void 0 : S.items) != null && T.length);
        switch (p.key) {
          case "ArrowDown":
            j(1);
            break;
          case "ArrowUp":
            j(-1);
            break;
          case "Home":
            L[0] !== void 0 && I(L[0]);
            break;
          case "End":
            L.length && I(L[L.length - 1]);
            break;
          case "ArrowRight":
            if (!K) return;
            F(N);
            break;
          case "ArrowLeft":
            if (i === 0) return;
            v();
            break;
          case "Enter":
          case " ":
            if (!S) return;
            K ? F(N) : (b(S), _());
            break;
          case "Escape":
            z !== null ? G() : v();
            break;
          case "Tab":
            _();
            break;
          default:
            return;
        }
        p.preventDefault(), p.stopPropagation();
      },
      className: "may-menu",
      style: {
        insetInlineStart: (x == null ? void 0 : x.x) ?? 0,
        insetBlockStart: (x == null ? void 0 : x.y) ?? 0,
        transformOrigin: (x == null ? void 0 : x.origin) ?? "left top"
      },
      children: a.map((p, l) => p.type === "separator" ? /* @__PURE__ */ r(
        "div",
        {
          role: "separator",
          className: "may-menu__separator"
        },
        p.id ?? `separator-${l}`
      ) : p.type === "label" ? /* @__PURE__ */ r(
        "div",
        {
          role: "presentation",
          className: "may-menu__section",
          children: p.label
        },
        p.id ?? `label-${l}`
      ) : /* @__PURE__ */ r(
        bt,
        {
          item: p,
          active: l === N,
          submenuOpen: z === l,
          submenuAutoFocus: z === l && V,
          size: t,
          level: i,
          register: (S) => {
            E.current[l] = S;
          },
          onOpenSubmenu: () => F(l),
          onHover: () => {
            var S;
            p.disabled || I(l), C((S = p.items) != null && S.length ? l : null);
          },
          onHoverEnd: () => C(null),
          onSelectAction: b,
          onCloseAll: _,
          onCloseSubmenu: G
        },
        p.id
      ))
    }
  );
}
function _t({
  items: a,
  children: e,
  onSelect: t,
  onOpenChange: i,
  disabled: s = !1,
  size: o = "md",
  label: m = "Context menu",
  className: f,
  onContextMenu: b,
  ..._
}) {
  const [v, u] = A(null), [$, E] = A(!1), g = U(null), x = U(null), k = U(null), N = pe(), I = ra(() => {
    E(!0), g.current && clearTimeout(g.current), g.current = setTimeout(
      () => {
        u(null), E(!1);
      },
      N ? 0 : ut
    );
  }, [N]);
  W(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const z = () => {
    var M, L;
    I(), i == null || i(!1), (L = (M = k.current) == null ? void 0 : M.focus) == null || L.call(M);
  }, P = (M) => {
    b == null || b(M), !(s || M.defaultPrevented) && (M.preventDefault(), k.current = document.activeElement, g.current && clearTimeout(g.current), E(!1), u({ x: M.clientX, y: M.clientY }), i == null || i(!0));
  };
  W(() => {
    if (!v) return;
    const M = (F) => {
      var G;
      return !!((G = x.current) != null && G.contains(F));
    }, L = (F) => {
      M(F.target) || (I(), i == null || i(!1));
    }, C = (F) => {
      F.key === "Escape" && z();
    }, j = (F) => {
      M(F.target) || z();
    };
    return document.addEventListener("pointerdown", L, !0), document.addEventListener("keydown", C), window.addEventListener("resize", z), window.addEventListener("scroll", j, !0), () => {
      document.removeEventListener("pointerdown", L, !0), document.removeEventListener("keydown", C), window.removeEventListener("resize", z), window.removeEventListener("scroll", j, !0);
    };
  }, [v, i]);
  const V = (M) => {
    var L;
    t == null || t(M), (L = M.onSelect) == null || L.call(M);
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ..._,
      "data-slot": "context-menu",
      "data-size": o,
      className: O("may-context", f),
      onContextMenu: P,
      children: [
        e,
        v && /* @__PURE__ */ r(
          he,
          {
            entries: a,
            closing: $,
            placement: { kind: "point", x: v.x, y: v.y },
            size: o,
            level: 0,
            autoFocus: !1,
            label: m,
            panelRef: x,
            onSelectAction: V,
            onCloseAll: z,
            onCloseLevel: z
          },
          `${v.x},${v.y}`
        )
      ]
    }
  );
}
const gt = aa("ContextMenu", yt), wt = aa("Kbd", me), xt = [wt, gt], cr = da("ContextMenu", _t, xt), kt = '.may-datatable{--may-dt-select-w: var(--may-control-h);position:relative}.may-datatable__scroller{position:relative}.may-datatable[data-fixed=true] .may-table__table{table-layout:fixed;width:max-content;min-width:100%}.may-datatable[data-sticky-head=true] .may-table__head-cell{position:sticky;inset-block-start:0;z-index:var(--may-z-sticky)}.may-datatable .may-table__head-cell{padding-inline-end:var(--may-space-3)}.may-datatable__sorter{display:inline-flex;align-items:center;gap:var(--may-space-1);max-width:100%;padding:0;border:0;border-radius:var(--may-radius-xs);background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:inherit;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}@media(hover:hover)and (pointer:fine){.may-datatable__sorter:hover{color:var(--may-color-text)}.may-datatable__sorter:hover .may-datatable__sort{opacity:1}}.may-datatable__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-datatable .may-table__head-cell[data-align=end] .may-datatable__sorter{flex-direction:row-reverse}.may-datatable .may-table__head-cell[data-align=center] .may-datatable__sorter{justify-content:center}.may-datatable__sort{display:inline-flex;align-items:center;gap:.1em;flex-shrink:0;opacity:0;color:var(--may-color-tint);transition:opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-datatable__sort>svg{width:1em;height:1em;display:block;transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-datatable__sort[data-direction]{opacity:1}.may-datatable__sort[data-direction=asc]>svg{transform:rotate(180deg)}.may-datatable__rank{font-size:var(--may-text-caption-2);line-height:1;font-weight:var(--may-text-headline-weight);font-variant-numeric:tabular-nums;color:var(--may-color-tint);animation:may-dt-rank-in var(--may-duration-settle) var(--may-spring-bouncy) both}@keyframes may-dt-rank-in{0%{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}.may-datatable__grip{position:absolute;inset-block:0;inset-inline-end:0;width:var(--may-space-2);z-index:var(--may-z-base);cursor:col-resize;-webkit-user-select:none;user-select:none;touch-action:none}.may-datatable__grip:before{content:"";position:absolute;inset-block:var(--may-space-2);inset-inline-end:0;width:1px;border-radius:var(--may-radius-full);background:var(--may-color-tint);opacity:0;transform:scaleY(.6);transition:opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}@media(min-resolution:2dppx){.may-datatable__grip:before{width:var(--may-hairline)}}.may-datatable__grip:focus-visible:before,.may-datatable__grip[data-dragging=true]:before{opacity:1;transform:scaleY(1)}@media(hover:hover)and (pointer:fine){.may-datatable__grip:hover:before{opacity:1;transform:scaleY(1)}}.may-datatable__grip[data-dragging=true]:before{inset-block:0;width:var(--may-space-1)}.may-datatable__filter-cell{position:relative;padding:var(--may-space-2) var(--may-table-pad-x);vertical-align:middle;background:var(--may-color-surface)}.may-datatable[data-sticky-head=true] .may-datatable__filter-cell{position:sticky;inset-block-start:var(--may-table-row-h);z-index:var(--may-z-sticky)}.may-datatable:has(.may-datatable__filter-cell) .may-table__head-cell:after{content:none}.may-datatable__filter-cell:after{content:"";position:absolute;inset-inline:0;inset-block-end:0;height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-datatable__filter-cell:after{height:var(--may-hairline)}}.may-datatable__select-col,.may-datatable__select-cell{width:var(--may-dt-select-w)}.may-datatable__select-cell{padding-inline:var(--may-space-2);text-align:center}.may-datatable__check.may-checkbox{min-height:var(--may-table-row-h);padding-inline:0;margin-inline:0;justify-content:center}.may-datatable[data-sticky-column=true] .may-datatable__pinned{position:sticky}.may-datatable[data-sticky-column=true] .may-datatable__pinned[data-pin=lead],.may-datatable[data-sticky-column=true] .may-datatable__pinned[data-pin=body]{inset-inline-start:0}.may-datatable[data-selectable=true][data-sticky-column=true] .may-datatable__pinned[data-pin=body]{inset-inline-start:var(--may-dt-select-w)}.may-datatable[data-sticky-column=true] td.may-datatable__pinned{z-index:calc(var(--may-z-sticky) - 1);background-color:var(--may-color-surface);background-image:linear-gradient(var(--may-table-row-bg, transparent),var(--may-table-row-bg, transparent))}.may-datatable[data-sticky-column=true] th.may-datatable__pinned,.may-datatable[data-sticky-column=true] td.may-datatable__filter-cell.may-datatable__pinned{z-index:calc(var(--may-z-sticky) + 1)}.may-datatable[data-sticky-column=true][data-scrolled-x=true] .may-datatable__pinned{box-shadow:var(--may-space-1) 0 var(--may-space-2) calc(var(--may-space-2) * -1) rgba(var(--may-shadow-color),var(--may-shadow-a4)),var(--may-hairline) 0 0 0 var(--may-color-separator)}.may-datatable[data-selectable=true][data-sticky-column=true][data-scrolled-x=true] .may-datatable__pinned[data-pin=lead]{box-shadow:none}.may-datatable__footer{display:flex;align-items:center;justify-content:space-between;gap:var(--may-space-4);flex-wrap:wrap;padding:var(--may-space-3) var(--may-space-2) 0}.may-datatable__status{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-variant-numeric:tabular-nums;color:var(--may-color-text-secondary)}@media(prefers-reduced-motion:reduce){.may-datatable__rank{animation:none}}', Nt = 10, St = 72, ne = 16, ie = 6, Et = { sm: 36, md: 44, lg: 52 }, Mt = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }), oe = typeof window > "u" ? W : Ya;
function se(a, e, t) {
  if (typeof a == "function") return String(a(e, t));
  const i = e[a];
  return i == null ? String(t) : String(i);
}
function zt(a, e, t) {
  if (a.render) return a.render(e, t);
  const i = e[a.key];
  return typeof i == "string" || typeof i == "number" || Ye(i) ? i : null;
}
function Ta(a, e) {
  if (a.value) return a.value(e);
  const t = e[a.key];
  if (t != null)
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" ? t : void 0;
}
const pa = (a) => a == null || a === "";
function Tt(a, e) {
  return typeof a == "number" && typeof e == "number" ? a - e : typeof a == "boolean" || typeof e == "boolean" ? Number(a) - Number(e) : Mt.compare(String(a), String(e));
}
function fe(a) {
  return a.align ?? (a.numeric ? "end" : "start");
}
function $t(a, e, t) {
  const i = a.find((o) => o.key === e), s = i ? i.direction === "asc" ? { key: e, direction: "desc" } : null : { key: e, direction: "asc" };
  return t ? i ? a.flatMap((o) => o.key !== e ? [o] : s ? [s] : []) : [...a, { key: e, direction: "asc" }] : s ? [s] : [];
}
function Lt({ direction: a, rank: e }) {
  return /* @__PURE__ */ R("span", { className: "may-datatable__sort", "data-direction": a ?? void 0, "aria-hidden": !0, children: [
    /* @__PURE__ */ r("svg", { viewBox: "0 0 16 16", focusable: "false", children: /* @__PURE__ */ r(
      "path",
      {
        d: "M3.5 6L8 10.5L12.5 6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }),
    e !== null && /* @__PURE__ */ r("span", { className: "may-datatable__rank", children: e })
  ] });
}
function Rt({ columnKey: a, label: e, min: t, onResize: i }) {
  const s = U(null), [o, m] = A(!1);
  W(() => {
    const b = s.current;
    if (!b) return;
    const _ = b.closest("th");
    let v = 0;
    return ve(b, {
      axis: "x",
      // No dead zone: a grip that ignores the first four pixels feels stuck.
      threshold: 0,
      onStart: () => {
        v = (_ == null ? void 0 : _.getBoundingClientRect().width) ?? t, m(!0);
      },
      onMove: ({ dx: u }) => i(a, Math.max(t, Math.round(v + u))),
      onEnd: () => m(!1)
    });
  }, [a, t, i]);
  const f = (b) => {
    var u;
    const _ = b.key === "ArrowRight" ? ne : b.key === "ArrowLeft" ? -ne : 0;
    if (!_) return;
    b.preventDefault();
    const v = ((u = b.currentTarget.closest("th")) == null ? void 0 : u.getBoundingClientRect().width) ?? t;
    i(a, Math.max(t, Math.round(v + _)));
  };
  return /* @__PURE__ */ r(
    "span",
    {
      ref: s,
      role: "separator",
      "aria-orientation": "vertical",
      "aria-label": `Resize ${e} column`,
      tabIndex: 0,
      onKeyDown: f,
      "data-dragging": o ? "true" : void 0,
      className: "may-datatable__grip"
    }
  );
}
function It({
  row: a,
  index: e,
  renderIndex: t,
  columns: i,
  selected: s,
  selectable: o,
  selectLabel: m,
  onToggle: f,
  zebra: b,
  stickyColumn: _,
  onRowClick: v
}) {
  const u = !!v, { pressProps: $ } = ha(!u);
  return /* @__PURE__ */ R(
    "tr",
    {
      ...u ? $ : null,
      onClick: u ? (g) => {
        v && (g.target.closest("button, a, input, select, textarea, label") || v(a, e));
      } : void 0,
      "data-clickable": u ? "true" : void 0,
      "data-selected": s ? "true" : void 0,
      "data-zebra": b ? "true" : void 0,
      className: O("may-table__row", u && "may-hoverable"),
      style: { "--may-table-row-i": Math.min(t, Nt) },
      children: [
        o && /* @__PURE__ */ r(
          "td",
          {
            className: O("may-table__cell", "may-datatable__select-cell", _ && "may-datatable__pinned"),
            "data-pin": _ ? "lead" : void 0,
            children: /* @__PURE__ */ r(
              ye,
              {
                size: "sm",
                checked: s,
                onCheckedChange: f,
                "aria-label": m,
                className: "may-datatable__check"
              }
            )
          }
        ),
        i.map((g, x) => {
          const k = zt(g, a, e), N = _ && x === 0;
          return /* @__PURE__ */ r(
            "td",
            {
              className: O("may-table__cell", N && "may-datatable__pinned"),
              "data-pin": N ? "body" : void 0,
              "data-align": fe(g),
              "data-numeric": g.numeric ? "true" : void 0,
              children: u && x === 0 ? (
                // The activator carries no styling of its own — the row is what
                // lights up. It exists so the row is reachable by keyboard and
                // announced as activatable, which a <tr onClick> never is.
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: "may-table__activator",
                    onClick: () => v == null ? void 0 : v(a, e),
                    children: k
                  }
                )
              ) : k
            },
            g.key
          );
        })
      ]
    }
  );
}
function Dt({
  columns: a,
  data: e,
  rowKey: t,
  size: i = "md",
  caption: s,
  sort: o,
  defaultSort: m,
  onSortChange: f,
  filters: b,
  defaultFilters: _,
  onFiltersChange: v,
  selectable: u = !1,
  selectedKeys: $,
  defaultSelectedKeys: E,
  onSelectionChange: g,
  onRowClick: x,
  resizableColumns: k = !1,
  stickyHeader: N = !0,
  stickyColumn: I = !1,
  pageSize: z,
  virtualized: P = !1,
  rowHeight: V,
  maxHeight: M,
  zebra: L = !1,
  emptyState: C,
  noResultsState: j,
  selectAllLabel: F = "Select all rows",
  className: G,
  style: na,
  ...p
}) {
  const l = Na(), [S, K] = A(m ?? []), T = o ?? S, ea = (n) => {
    o === void 0 && K(n), f == null || f(n);
  }, [Z, X] = A(_ ?? {}), H = b ?? Z, c = (n, y) => {
    const w = { ...H, [n]: y };
    y || delete w[n], b === void 0 && X(w), v == null || v(w);
  }, [d, h] = A(
    E ?? []
  ), D = $ ?? d, ia = Q(() => new Set(D), [D]), oa = (n) => {
    $ === void 0 && h(n), g == null || g(n);
  }, ma = a.some((n) => n.filter), J = Q(() => {
    const n = /* @__PURE__ */ new Map();
    for (const y of a) {
      if (y.filter !== "select") continue;
      const w = /* @__PURE__ */ new Set();
      for (const B of e) {
        const Y = Ta(y, B);
        pa(Y) || w.add(String(Y));
      }
      n.set(y.key, [...w]);
    }
    return n;
  }, [a, e]), q = Q(() => {
    const n = a.filter((w) => w.filter && H[w.key]);
    let y = e.map((w, B) => ({ row: w, index: B }));
    if (n.length && (y = y.filter(
      ({ row: w }) => n.every((B) => {
        const Y = H[B.key], ua = Ta(B, w), ga = pa(ua) ? "" : String(ua);
        return B.filter === "select" ? ga === Y : ga.toLowerCase().includes(Y.trim().toLowerCase());
      })
    )), T.length) {
      const w = new Map(a.map((B) => [B.key, B]));
      y = [...y].sort((B, Y) => {
        for (const { key: ua, direction: ga } of T) {
          const ja = w.get(ua);
          if (!ja) continue;
          const za = Ta(ja, B.row), Fa = Ta(ja, Y.row);
          if (pa(za) || pa(Fa)) {
            if (pa(za) && pa(Fa)) continue;
            return pa(za) ? 1 : -1;
          }
          const Ua = Tt(za, Fa);
          if (Ua !== 0) return ga === "asc" ? Ua : -Ua;
        }
        return 0;
      });
    }
    return y;
  }, [e, a, H, T]), sa = q.length, fa = sa !== e.length, [ya, Sa] = A(1), ba = z ? Math.max(1, Math.ceil(sa / z)) : 1;
  W(() => {
    Sa((n) => Math.min(n, ba));
  }, [ba]);
  const ta = Q(
    () => z ? q.slice((ya - 1) * z, ya * z) : q,
    [q, z, ya]
  ), _a = U(null), [we, xe] = A(0), [ke, Va] = A(0), [Ne, Se] = A(!1), la = P && !z;
  W(() => {
    const n = _a.current;
    if (!n) return;
    let y = 0;
    const w = () => {
      y = 0, Se(n.scrollLeft > 0), la && xe(n.scrollTop);
    }, B = () => {
      y || (y = requestAnimationFrame(w));
    };
    return w(), n.addEventListener("scroll", B, { passive: !0 }), () => {
      y && cancelAnimationFrame(y), n.removeEventListener("scroll", B);
    };
  }, [la]), W(() => {
    const n = _a.current;
    if (!n || typeof ResizeObserver > "u") return;
    const y = new ResizeObserver(() => Va(n.clientHeight));
    return y.observe(n), Va(n.clientHeight), () => y.disconnect();
  }, []);
  const [Da, Ee] = A(null), Ea = V ?? Da ?? Et[i];
  oe(() => {
    var w;
    if (!la || V !== void 0) return;
    const n = (w = _a.current) == null ? void 0 : w.querySelector("tbody .may-table__row");
    if (!n) return;
    const y = Math.round(n.getBoundingClientRect().height);
    y > 0 && y !== Da && Ee(y);
  }, [la, V, Da, i, ta.length]);
  const wa = la ? Math.max(0, Math.floor(we / Ea) - ie) : 0, Aa = la ? Math.min(ta.length, wa + Math.ceil(ke / Ea) + ie * 2) : ta.length, Me = la ? ta.slice(wa, Aa) : ta, [Ca, Oa] = A(() => {
    const n = {};
    for (const y of a) y.width !== void 0 && (n[y.key] = y.width);
    return n;
  }), Ga = U({}), [ze, Te] = A(!1), Pa = a.map((n) => n.key).join("\0"), Xa = U(null);
  oe(() => {
    if (!k || Xa.current === Pa) return;
    const n = {};
    for (const y of a) {
      const w = Ga.current[y.key];
      w && (n[y.key] = Math.round(w.getBoundingClientRect().width));
    }
    Xa.current = Pa, Oa((y) => ({ ...n, ...y })), Te(!0);
  }, [k, Pa, a]);
  const $e = ra((n, y) => {
    Oa((w) => w[n] === y ? w : { ...w, [n]: y });
  }, []), xa = Q(
    () => q.map(({ row: n, index: y }) => se(t, n, y)),
    [q, t]
  ), Ma = xa.filter((n) => ia.has(n)).length, Ba = xa.length > 0 && Ma === xa.length, Le = Ma > 0 && !Ba, Re = () => {
    if (Ba) {
      const n = new Set(xa);
      oa(D.filter((y) => !n.has(y)));
    } else
      oa([.../* @__PURE__ */ new Set([...D, ...xa])]);
  }, Ie = (n) => oa(
    ia.has(n) ? D.filter((y) => y !== n) : [...D, n]
  ), Ka = a.length + (u ? 1 : 0), qa = ta.length === 0, Za = fa ? j ?? C : C, Ja = {};
  M !== void 0 && (Ja["--may-table-max"] = typeof M == "number" ? `${M}px` : String(M));
  const Qa = new Map(T.map((n, y) => [n.key, y])), De = (n) => {
    const y = n.sortable !== !1, w = Qa.get(n.key), B = w === void 0 ? null : T[w].direction, Y = k && n.resizable !== !1, ua = typeof n.header == "string" ? n.header : n.key;
    return /* @__PURE__ */ R(ka, { children: [
      y ? /* @__PURE__ */ R(
        "button",
        {
          type: "button",
          className: "may-datatable__sorter",
          title: `Sort by ${ua} — hold Shift to add to the current sort`,
          onClick: (ga) => ea($t(T, n.key, ga.shiftKey)),
          children: [
            /* @__PURE__ */ r("span", { className: "may-datatable__label", children: n.header }),
            /* @__PURE__ */ r(Lt, { direction: B, rank: T.length > 1 && w !== void 0 ? w + 1 : null })
          ]
        }
      ) : /* @__PURE__ */ r("span", { className: "may-datatable__label", children: n.header }),
      Y && /* @__PURE__ */ r(
        Rt,
        {
          columnKey: n.key,
          label: ua,
          min: n.minWidth ?? St,
          onResize: $e
        }
      )
    ] });
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ...p,
      "data-slot": "data-table",
      "data-size": i,
      "data-selectable": u ? "true" : void 0,
      "data-sticky-head": N ? "true" : void 0,
      "data-sticky-column": I ? "true" : void 0,
      "data-scrolled-x": Ne ? "true" : void 0,
      "data-bounded": M !== void 0 ? "true" : void 0,
      "data-fixed": k && ze ? "true" : void 0,
      className: O("may-table", "may-datatable", G),
      style: { ...Ja, ...na },
      children: [
        s && /* @__PURE__ */ r("div", { className: "may-table__caption", id: l, children: s }),
        /* @__PURE__ */ r("div", { className: "may-table__scroller may-datatable__scroller", ref: _a, "data-slot": "scroll-area", children: /* @__PURE__ */ R("table", { className: "may-table__table", "aria-labelledby": s ? l : void 0, children: [
          /* @__PURE__ */ R("colgroup", { children: [
            u && /* @__PURE__ */ r("col", { className: "may-datatable__select-col" }),
            a.map((n) => /* @__PURE__ */ r(
              "col",
              {
                style: Ca[n.key] !== void 0 ? { width: Ca[n.key] } : void 0
              },
              n.key
            ))
          ] }),
          /* @__PURE__ */ R("thead", { className: "may-table__head", children: [
            /* @__PURE__ */ R("tr", { children: [
              u && /* @__PURE__ */ r(
                "th",
                {
                  scope: "col",
                  className: O(
                    "may-table__head-cell",
                    "may-datatable__select-cell",
                    I && "may-datatable__pinned"
                  ),
                  "data-pin": I ? "lead" : void 0,
                  children: /* @__PURE__ */ r(
                    ye,
                    {
                      size: "sm",
                      checked: Ba,
                      indeterminate: Le,
                      onCheckedChange: Re,
                      "aria-label": F,
                      className: "may-datatable__check"
                    }
                  )
                }
              ),
              a.map((n, y) => {
                const w = Qa.get(n.key), B = I && y === 0;
                return /* @__PURE__ */ r(
                  "th",
                  {
                    ref: (Y) => {
                      Ga.current[n.key] = Y;
                    },
                    scope: "col",
                    "aria-sort": w === void 0 ? n.sortable === !1 ? void 0 : "none" : T[w].direction === "asc" ? "ascending" : "descending",
                    className: O("may-table__head-cell", B && "may-datatable__pinned"),
                    "data-pin": B ? "body" : void 0,
                    "data-align": fe(n),
                    children: De(n)
                  },
                  n.key
                );
              })
            ] }),
            ma && /* @__PURE__ */ R("tr", { children: [
              u && /* @__PURE__ */ r(
                "td",
                {
                  className: O(
                    "may-datatable__filter-cell",
                    "may-datatable__select-cell",
                    I && "may-datatable__pinned"
                  ),
                  "data-pin": I ? "lead" : void 0
                }
              ),
              a.map((n, y) => {
                const w = I && y === 0, B = typeof n.header == "string" ? n.header : n.key;
                return /* @__PURE__ */ r(
                  "td",
                  {
                    className: O("may-datatable__filter-cell", w && "may-datatable__pinned"),
                    "data-pin": w ? "body" : void 0,
                    children: n.filter === "select" ? /* @__PURE__ */ r(
                      Ae,
                      {
                        size: "sm",
                        fullWidth: !0,
                        placeholder: "Any",
                        value: H[n.key] ?? "",
                        onValueChange: (Y) => c(n.key, Y),
                        "aria-label": `Filter by ${B}`,
                        options: (J.get(n.key) ?? []).map((Y) => ({
                          label: Y,
                          value: Y
                        }))
                      }
                    ) : n.filter === "text" ? /* @__PURE__ */ r(
                      Pe,
                      {
                        size: "sm",
                        fullWidth: !0,
                        type: "search",
                        placeholder: "Filter",
                        value: H[n.key] ?? "",
                        onChange: (Y) => c(n.key, Y.target.value),
                        "aria-label": `Filter by ${B}`
                      }
                    ) : null
                  },
                  n.key
                );
              })
            ] })
          ] }),
          /* @__PURE__ */ r("tbody", { children: qa ? Za && /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r("td", { className: "may-table__empty", colSpan: Ka, children: Za }) }) : /* @__PURE__ */ R(ka, { children: [
            wa > 0 && /* @__PURE__ */ r("tr", { "aria-hidden": !0, style: { height: wa * Ea }, children: /* @__PURE__ */ r("td", { colSpan: Ka }) }),
            Me.map(({ row: n, index: y }, w) => {
              const B = se(t, n, y);
              return /* @__PURE__ */ r(
                It,
                {
                  row: n,
                  index: y,
                  renderIndex: la ? wa + w : w,
                  columns: a,
                  selected: ia.has(B),
                  selectable: u,
                  selectLabel: `Select row ${y + 1}`,
                  onToggle: () => Ie(B),
                  zebra: L && y % 2 === 1,
                  stickyColumn: I,
                  onRowClick: x
                },
                B
              );
            }),
            la && Aa < ta.length && /* @__PURE__ */ r("tr", { "aria-hidden": !0, style: { height: (ta.length - Aa) * Ea }, children: /* @__PURE__ */ r("td", { colSpan: Ka }) })
          ] }) })
        ] }) }),
        (z !== void 0 || u) && !qa && /* @__PURE__ */ R("div", { className: "may-datatable__footer", children: [
          /* @__PURE__ */ r("span", { className: "may-datatable__status", "aria-live": "polite", children: u && Ma > 0 ? `${Ma} of ${sa} selected` : `${sa} ${sa === 1 ? "row" : "rows"}${fa ? ` of ${e.length}` : ""}` }),
          z !== void 0 && ba > 1 && /* @__PURE__ */ r(Be, { page: ya, pageCount: ba, onPageChange: Sa, size: "sm" })
        ] })
      ]
    }
  );
}
const At = aa("DataTable", kt), Pt = aa("Table", Ke), Bt = aa("Checkbox", je), Kt = aa("Input", Fe), jt = aa("Select", Ue), Ft = aa("Pagination", We), Ut = [
  Pt,
  Bt,
  Kt,
  jt,
  Ft,
  At
], dr = da("DataTable", Dt, Ut), Wt = '.may-navtree{--may-navtree-gutter: var(--may-space-2);--may-navtree-indent: var(--may-space-4);--may-navtree-twisty: var(--may-space-4);--may-navtree-level: 0;display:flex;flex-direction:column;width:100%;min-width:0}.may-navtree__group{position:relative;display:flex;flex-direction:column;min-width:0}.may-navtree__group:not([data-level="0"]):before{content:"";position:absolute;inset-block:0;inset-inline-start:calc(var(--may-navtree-gutter) + var(--may-navtree-indent) * (var(--may-navtree-level) - 1) + var(--may-navtree-twisty) / 2);width:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-navtree__group:not([data-level="0"]):before{width:var(--may-hairline)}}.may-navtree__node{display:flex;flex-direction:column;min-width:0}.may-navtree__row{position:relative;display:flex;align-items:center;gap:var(--may-space-2);width:100%;min-height:var(--may-control-h);padding-inline:calc(var(--may-navtree-gutter) + var(--may-navtree-indent) * var(--may-navtree-level)) var(--may-space-3);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-text);font-family:inherit;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);font-weight:var(--may-text-subheadline-weight);text-align:start;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out)}.may-navtree__row:disabled{cursor:not-allowed;opacity:.4}.may-navtree__row[data-selected=true]{background:color-mix(in srgb,var(--may-color-tint) 14%,transparent);color:var(--may-color-tint);font-weight:var(--may-text-headline-weight)}.may-navtree .may-navtree__row[data-pressed=true]{background:var(--may-color-highlight-strong)}.may-navtree .may-navtree__row[data-selected=true][data-pressed=true]{background:color-mix(in srgb,var(--may-color-tint) 24%,transparent)}@media(hover:hover)and (pointer:fine){.may-navtree .may-navtree__row[data-selected=true]:hover:not(:disabled){background:color-mix(in srgb,var(--may-color-tint) 20%,transparent)}}.may-navtree__twisty{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-navtree-twisty);height:var(--may-navtree-twisty);color:var(--may-color-text-tertiary);transform:rotate(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-navtree__twisty>svg{width:var(--may-space-3);height:var(--may-space-3);display:block}.may-navtree__node[data-state=open]>.may-navtree__row>.may-navtree__twisty{transform:rotate(90deg)}.may-navtree__row[data-selected=true]>.may-navtree__twisty{color:currentColor}.may-navtree__icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-space-5);height:var(--may-space-5);color:inherit}.may-navtree__icon>svg{width:1.2em;height:1.2em;display:block}.may-navtree__label{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.may-navtree__badge{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:var(--may-space-5);height:var(--may-space-5);padding-inline:var(--may-space-2);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);font-weight:var(--may-text-headline-weight);font-variant-numeric:tabular-nums}.may-navtree__row[data-selected=true] .may-navtree__badge{background:color-mix(in srgb,var(--may-color-tint) 22%,transparent);color:var(--may-color-tint)}.may-navtree__panel{display:grid;grid-template-rows:0fr;visibility:hidden;transition:grid-template-rows var(--may-duration-settle) var(--may-spring-smooth),visibility 0s linear var(--may-duration-settle)}.may-navtree__node[data-state=open]>.may-navtree__panel{grid-template-rows:1fr;visibility:visible;transition:grid-template-rows var(--may-duration-settle) var(--may-spring-smooth),visibility 0s}.may-navtree__clip{overflow:hidden;min-height:0}.may-navtree__panel>.may-navtree__clip{opacity:0;transition:opacity var(--may-duration-instant) var(--may-ease-out)}.may-navtree__node[data-state=open]>.may-navtree__panel>.may-navtree__clip{opacity:1;transition:opacity var(--may-duration-settle) var(--may-ease-out)}';
function be(a, e, t = 0, i = null, s = []) {
  var o;
  for (const m of a)
    s.push({ node: m, level: t, parentId: i }), (o = m.children) != null && o.length && e.has(m.id) && be(m.children, e, t + 1, m.id, s);
  return s;
}
const $a = (a) => {
  var e;
  return !!((e = a.children) != null && e.length);
}, _e = ue(null);
function Yt({
  nodes: a,
  selectedId: e,
  defaultSelectedId: t,
  onSelect: i,
  expandedIds: s,
  defaultExpandedIds: o,
  onExpandedChange: m,
  className: f,
  id: b,
  ..._
}) {
  var na, p;
  const v = Na(b), [u, $] = A(t), [E, g] = A(o ?? []), [x, k] = A(t ?? e), N = U(/* @__PURE__ */ new Map()), I = e ?? u, z = Q(
    () => new Set(s ?? E),
    [s, E]
  ), P = Q(() => be(a, z), [a, z]), V = ((na = P.find((l) => l.node.id === x)) == null ? void 0 : na.node.id) ?? ((p = P[0]) == null ? void 0 : p.node.id), M = ra(
    (l, S) => {
      const K = new Set(s ?? E);
      S ? K.add(l) : K.delete(l);
      const T = [...K];
      s === void 0 && g(T), m == null || m(T);
    },
    [s, E, m]
  ), L = ra(
    (l) => {
      e === void 0 && $(l.id), i == null || i(l.id, l);
    },
    [e, i]
  ), C = ra((l, S) => {
    S ? N.current.set(l, S) : N.current.delete(l);
  }, []), j = ra((l) => {
    var S;
    l && (k(l), (S = N.current.get(l)) == null || S.focus());
  }, []), F = Q(
    () => ({
      baseId: v,
      selectedId: I,
      expanded: z,
      tabbableId: V,
      setExpanded: M,
      select: L,
      onRowFocus: k,
      registerRow: C
    }),
    [v, I, z, V, M, L, C]
  ), G = (l) => {
    var Z, X, H, c, d;
    const S = P.findIndex((h) => h.node.id === V);
    if (S === -1) return;
    const K = P[S], T = K.node, ea = z.has(T.id);
    switch (l.key) {
      case "ArrowDown":
        l.preventDefault(), j((Z = P[S + 1]) == null ? void 0 : Z.node.id);
        break;
      case "ArrowUp":
        l.preventDefault(), j((X = P[S - 1]) == null ? void 0 : X.node.id);
        break;
      case "ArrowRight":
        l.preventDefault(), $a(T) && !ea ? M(T.id, !0) : $a(T) && j((H = P[S + 1]) == null ? void 0 : H.node.id);
        break;
      case "ArrowLeft":
        l.preventDefault(), $a(T) && ea ? M(T.id, !1) : j(K.parentId ?? void 0);
        break;
      case "Home":
        l.preventDefault(), j((c = P[0]) == null ? void 0 : c.node.id);
        break;
      case "End":
        l.preventDefault(), j((d = P[P.length - 1]) == null ? void 0 : d.node.id);
        break;
    }
  };
  return /* @__PURE__ */ r(_e.Provider, { value: F, children: /* @__PURE__ */ r(
    "div",
    {
      ..._,
      id: v,
      role: "tree",
      "data-slot": "nav-tree",
      className: O("may-navtree", f),
      onKeyDown: G,
      children: /* @__PURE__ */ r(ge, { nodes: a, level: 0 })
    }
  ) });
}
function ge({ nodes: a, level: e }) {
  return /* @__PURE__ */ r(
    "div",
    {
      role: "group",
      "data-level": e,
      className: "may-navtree__group",
      style: { "--may-navtree-level": e },
      children: a.map((t) => /* @__PURE__ */ r(Ht, { node: t, level: e }, t.id))
    }
  );
}
function Ht({ node: a, level: e }) {
  const t = La(_e), { pressProps: i } = ha(a.disabled);
  if (!t) throw new Error("NavTree rows must render inside <NavTree>");
  const s = $a(a), o = s && t.expanded.has(a.id), m = a.id === t.selectedId, f = `${t.baseId}-${a.id}-group`;
  return (
    /* `role="none"` flattens this wrapper away, so the treeitem stays an owned
     * child of the tree rather than sitting behind an anonymous div. */
    /* @__PURE__ */ R("div", { className: "may-navtree__node", "data-state": o ? "open" : "closed", role: "none", children: [
      /* @__PURE__ */ R(
        "button",
        {
          ...i,
          ref: (b) => t.registerRow(a.id, b),
          type: "button",
          role: "treeitem",
          "aria-level": e + 1,
          "aria-selected": m,
          "aria-expanded": s ? o : void 0,
          "aria-owns": s ? f : void 0,
          tabIndex: a.id === t.tabbableId ? 0 : -1,
          disabled: a.disabled,
          "data-slot": "nav-tree-item",
          "data-selected": m ? "true" : void 0,
          className: "may-navtree__row may-hoverable",
          onFocus: () => t.onRowFocus(a.id),
          onClick: () => {
            t.select(a), s && t.setExpanded(a.id, !o);
          },
          children: [
            /* @__PURE__ */ r("span", { className: "may-navtree__twisty", "aria-hidden": !0, children: s && /* @__PURE__ */ r(Ha, { focusable: "false" }) }),
            a.icon && /* @__PURE__ */ r("span", { className: "may-navtree__icon", "aria-hidden": !0, children: a.icon }),
            /* @__PURE__ */ r("span", { className: "may-navtree__label", children: a.label }),
            a.badge != null && /* @__PURE__ */ r("span", { className: "may-navtree__badge", children: a.badge })
          ]
        }
      ),
      s && /* @__PURE__ */ r("div", { id: f, className: "may-navtree__panel", children: /* @__PURE__ */ r("div", { className: "may-navtree__clip", children: /* @__PURE__ */ r(ge, { nodes: a.children, level: e + 1 }) }) })
    ] })
  );
}
const Vt = aa("NavTree", Wt), Ct = [Vt], mr = da("NavTree", Yt, Ct), Ot = '.may-sidebar{--may-sidebar-w: calc(var(--may-control-h) * 5.5);--may-sidebar-gutter: var(--may-space-3);--may-sidebar-rail-w: calc(var(--may-control-h) + var(--may-sidebar-gutter) * 2);--may-sidebar-icon: var(--may-space-6);position:relative;display:flex;flex:0 0 auto;flex-direction:column;width:var(--may-sidebar-w);height:100%;min-height:0;background:var(--may-color-bg);color:var(--may-color-text);transition:width var(--may-duration-settle) var(--may-spring-smooth)}.may-sidebar[data-collapsed=true]{width:var(--may-sidebar-rail-w)}.may-sidebar__header,.may-sidebar__footer{position:relative;display:flex;align-items:center;gap:var(--may-space-2);flex-shrink:0;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-sidebar-gutter);overflow:hidden}.may-sidebar__footer:before{content:"";position:absolute;inset-block-start:0;inset-inline:var(--may-sidebar-gutter);height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-sidebar__footer:before{height:var(--may-hairline)}}.may-sidebar__body{display:flex;flex:1 1 auto;flex-direction:column;gap:var(--may-space-4);min-height:0;padding:var(--may-space-2) var(--may-sidebar-gutter);overflow-x:hidden;overflow-y:auto}.may-sidebar-section{position:relative;display:flex;flex-direction:column;min-width:0}.may-sidebar[data-collapsed=true] .may-sidebar-section+.may-sidebar-section:before{content:"";position:absolute;inset-block-start:calc(var(--may-space-2) * -1);inset-inline:var(--may-space-2);height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-sidebar[data-collapsed=true] .may-sidebar-section+.may-sidebar-section:before{height:var(--may-hairline)}}.may-sidebar-section__header{display:flex;align-items:center;gap:var(--may-space-2);width:100%;min-height:var(--may-control-h-xs);padding:0 var(--may-space-2);margin-block-end:var(--may-space-1);border:0;border-radius:var(--may-radius-sm);background:transparent;color:var(--may-color-text-secondary);font:inherit;text-align:start;overflow:hidden;transition:background-color var(--may-duration-color) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out),min-height var(--may-duration-settle) var(--may-spring-smooth),margin-block-end var(--may-duration-settle) var(--may-spring-smooth)}button.may-sidebar-section__header{cursor:pointer}.may-sidebar button.may-sidebar-section__header[data-pressed=true]{background-color:var(--may-color-highlight-strong)}.may-sidebar[data-collapsed=true] .may-sidebar-section__header{min-height:0;margin-block-end:0;opacity:0;pointer-events:none}.may-sidebar-section__title{flex:1;min-width:0;font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);font-weight:var(--may-text-headline-weight);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.may-sidebar-section__chevron{width:var(--may-space-3);height:var(--may-space-3);flex-shrink:0;color:var(--may-color-text-tertiary);transform:rotate(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-sidebar-section[data-state=open]>.may-sidebar-section__header>.may-sidebar-section__chevron{transform:rotate(90deg)}.may-sidebar-section__panel{display:grid;grid-template-rows:0fr;visibility:hidden;transition:grid-template-rows var(--may-duration-settle) var(--may-spring-smooth),visibility 0s linear var(--may-duration-settle)}.may-sidebar-section[data-state=open]>.may-sidebar-section__panel{grid-template-rows:1fr;visibility:visible;transition:grid-template-rows var(--may-duration-settle) var(--may-spring-smooth),visibility 0s}.may-sidebar-section__clip{overflow:hidden;min-height:0}.may-sidebar-section__items{display:flex;flex-direction:column;gap:1px}.may-sidebar-item{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-height:var(--may-control-h);padding-inline:var(--may-sidebar-gutter);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-text);font-family:inherit;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);font-weight:var(--may-text-subheadline-weight);text-align:start;text-decoration:none;cursor:pointer;overflow:hidden;transition:background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out),padding-inline var(--may-duration-settle) var(--may-spring-smooth)}.may-sidebar-item:disabled,.may-sidebar-item[aria-disabled=true]{cursor:not-allowed;opacity:.4}.may-sidebar[data-collapsed=true] .may-sidebar-item{padding-inline:calc((var(--may-sidebar-rail-w) - var(--may-sidebar-gutter) * 2 - var(--may-sidebar-icon)) / 2)}.may-sidebar-item[data-active=true]{background:color-mix(in srgb,var(--may-color-tint) 14%,transparent);color:var(--may-color-tint);font-weight:var(--may-text-headline-weight)}.may-sidebar .may-sidebar-item[data-pressed=true]{background:var(--may-color-highlight-strong)}.may-sidebar .may-sidebar-item[data-active=true][data-pressed=true]{background:color-mix(in srgb,var(--may-color-tint) 24%,transparent)}@media(hover:hover)and (pointer:fine){.may-sidebar .may-sidebar-item[data-active=true]:hover:not(:disabled){background:color-mix(in srgb,var(--may-color-tint) 20%,transparent)}}.may-sidebar-item__icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-sidebar-icon);height:var(--may-sidebar-icon);color:inherit}.may-sidebar-item__icon>svg{width:1.25em;height:1.25em;display:block}.may-sidebar-item__label{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:1;transition:opacity var(--may-duration-fast) var(--may-ease-out) var(--may-duration-fast)}.may-sidebar[data-collapsed=true] .may-sidebar-item__label{opacity:0;transition:opacity var(--may-duration-instant) var(--may-ease-out)}.may-sidebar-item__badge{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:var(--may-space-5);height:var(--may-space-5);padding-inline:var(--may-space-2);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);font-weight:var(--may-text-headline-weight);font-variant-numeric:tabular-nums;transition:min-width var(--may-duration-settle) var(--may-spring-smooth),width var(--may-duration-settle) var(--may-spring-smooth),height var(--may-duration-settle) var(--may-spring-smooth)}.may-sidebar-item[data-active=true] .may-sidebar-item__badge{background:color-mix(in srgb,var(--may-color-tint) 22%,transparent);color:var(--may-color-tint)}.may-sidebar[data-collapsed=true] .may-sidebar-item__badge{position:absolute;inset-block-start:var(--may-space-2);inset-inline-start:calc(50% + var(--may-space-1));min-width:0;width:var(--may-space-2);height:var(--may-space-2);padding-inline:0;overflow:hidden;color:transparent;background:var(--may-color-primary)}.may-sidebar-toggle{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-control-h);height:var(--may-control-h);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-text-secondary);cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-sidebar-toggle__icon{width:var(--may-space-4);height:var(--may-space-4);transform:rotate(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-sidebar[data-collapsed=true] .may-sidebar-toggle__icon{transform:rotate(180deg)}.may-sidebar__tooltip{position:fixed;z-index:var(--may-z-tooltip);display:block;max-width:calc(var(--may-control-h) * 5);padding:var(--may-space-1) var(--may-space-3);border-radius:var(--may-radius-sm);background:var(--may-color-surface);box-shadow:var(--may-shadow-md);color:var(--may-color-text);font-family:var(--may-font-sans);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none;transform:translate(var(--may-space-2),-50%);animation:may-sidebar-tip-in var(--may-duration-settle) var(--may-spring-bouncy) both}@keyframes may-sidebar-tip-in{0%{opacity:0;transform:translate(calc(var(--may-space-2) * -.5),-50%)}to{opacity:1;transform:translate(var(--may-space-2),-50%)}}', Wa = () => {
}, Ra = ue({
  collapsed: !1,
  toggle: Wa,
  showTooltip: Wa,
  hideTooltip: Wa
});
function Gt({
  children: a,
  collapsed: e,
  defaultCollapsed: t = !1,
  onCollapsedChange: i,
  header: s,
  footer: o,
  className: m,
  ...f
}) {
  const [b, _] = A(t), v = e ?? b, [u, $] = A(null), E = U(0), g = ra(() => {
    const I = !(e ?? b);
    e === void 0 && _(I), i == null || i(I);
  }, [e, b, i]), x = ra((I, z) => {
    const P = z.getBoundingClientRect();
    E.current += 1, $({ label: I, top: P.top + P.height / 2, left: P.right, seq: E.current });
  }, []), k = ra(() => $(null), []);
  W(() => $(null), [v]);
  const N = Q(
    () => ({ collapsed: v, toggle: g, showTooltip: x, hideTooltip: k }),
    [v, g, x, k]
  );
  return /* @__PURE__ */ r(Ra.Provider, { value: N, children: /* @__PURE__ */ R(
    "nav",
    {
      ...f,
      "data-slot": "sidebar",
      "data-collapsed": v ? "true" : void 0,
      className: O("may-sidebar", m),
      children: [
        s && /* @__PURE__ */ r("div", { className: "may-sidebar__header", children: s }),
        /* @__PURE__ */ r("div", { className: "may-sidebar__body", "data-slot": "scroll-area", children: a }),
        o && /* @__PURE__ */ r("div", { className: "may-sidebar__footer", children: o }),
        v && u && /* @__PURE__ */ r(
          "span",
          {
            className: "may-sidebar__tooltip",
            style: { top: u.top, left: u.left },
            "aria-hidden": !0,
            children: u.label
          },
          u.seq
        )
      ]
    }
  ) });
}
function Xt({
  children: a,
  title: e,
  collapsible: t = !1,
  open: i,
  defaultOpen: s = !0,
  onOpenChange: o,
  className: m,
  id: f,
  ...b
}) {
  const { collapsed: _ } = La(Ra), [v, u] = A(s), $ = Na(f), E = `${$}-panel`, { pressProps: g } = ha(), x = !t || _ ? !0 : i ?? v, k = () => {
    const N = !x;
    i === void 0 && u(N), o == null || o(N);
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ...b,
      id: $,
      "data-slot": "sidebar-section",
      "data-state": x ? "open" : "closed",
      className: O("may-sidebar-section", m),
      children: [
        e && (t ? /* @__PURE__ */ R(
          "button",
          {
            ...g,
            type: "button",
            "aria-expanded": x,
            "aria-controls": E,
            onClick: k,
            className: "may-sidebar-section__header may-hoverable",
            children: [
              /* @__PURE__ */ r("span", { className: "may-sidebar-section__title", children: e }),
              /* @__PURE__ */ r(Ha, { className: "may-sidebar-section__chevron", "aria-hidden": !0, focusable: "false" })
            ]
          }
        ) : /* @__PURE__ */ r("div", { className: "may-sidebar-section__header", children: /* @__PURE__ */ r("span", { className: "may-sidebar-section__title", children: e }) })),
        /* @__PURE__ */ r("div", { id: E, className: "may-sidebar-section__panel", children: /* @__PURE__ */ r("div", { className: "may-sidebar-section__clip", children: /* @__PURE__ */ r("div", { className: "may-sidebar-section__items", children: a }) }) })
      ]
    }
  );
}
function qt({
  children: a,
  icon: e,
  badge: t,
  active: i = !1,
  disabled: s = !1,
  onClick: o,
  href: m,
  className: f,
  ...b
}) {
  const { collapsed: _, showTooltip: v, hideTooltip: u } = La(Ra), { pressProps: $ } = ha(s), E = (k) => {
    _ && v(a, k);
  }, g = {
    ...$,
    "data-slot": "sidebar-item",
    "data-active": i ? "true" : void 0,
    "aria-current": i ? "page" : void 0,
    className: O("may-sidebar-item", "may-hoverable", f),
    onPointerEnter: (k) => {
      k.pointerType === "mouse" && E(k.currentTarget);
    },
    onPointerLeave: () => {
      $.onPointerLeave(), u();
    },
    onFocus: (k) => {
      k.currentTarget.matches(":focus-visible") && E(k.currentTarget);
    },
    onBlur: u
  }, x = /* @__PURE__ */ R(ka, { children: [
    e && /* @__PURE__ */ r("span", { className: "may-sidebar-item__icon", "aria-hidden": !0, children: e }),
    /* @__PURE__ */ r("span", { className: "may-sidebar-item__label", children: a }),
    t != null && /* @__PURE__ */ r("span", { className: "may-sidebar-item__badge", children: t })
  ] });
  return m ? /* @__PURE__ */ r(
    "a",
    {
      ...b,
      ...g,
      href: s ? void 0 : m,
      "aria-disabled": s || void 0,
      tabIndex: s ? -1 : void 0,
      children: x
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      ...b,
      ...g,
      type: "button",
      onClick: o,
      disabled: s,
      children: x
    }
  );
}
function Zt({ label: a, className: e, onClick: t, ...i }) {
  const { collapsed: s, toggle: o } = La(Ra), { pressProps: m } = ha(i.disabled), f = a ?? (s ? "Expand sidebar" : "Collapse sidebar");
  return /* @__PURE__ */ r(
    "button",
    {
      ...i,
      ...m,
      type: "button",
      title: f,
      "aria-label": f,
      "aria-expanded": !s,
      onClick: (b) => {
        t == null || t(b), o();
      },
      "data-slot": "sidebar-toggle",
      className: O("may-sidebar-toggle", "may-pressable", "may-hoverable", e),
      children: /* @__PURE__ */ r("svg", { className: "may-sidebar-toggle__icon", viewBox: "0 0 16 16", "aria-hidden": !0, focusable: "false", children: /* @__PURE__ */ r(
        "path",
        {
          d: "M9.5 3.5L5 8l4.5 4.5M13.5 3.5L9 8l4.5 4.5",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) })
    }
  );
}
const Jt = aa("Sidebar", Ot), Ia = [Jt], yr = da("Sidebar", Gt, Ia), ur = da("SidebarSection", Xt, Ia), pr = da("SidebarItem", qt, Ia), vr = da("SidebarToggle", Zt, Ia), Qt = '.may-splitpane{--may-splitpane-size: var(--may-space-0);--may-splitpane-drag: var(--may-splitpane-size);--may-splitpane-hit: var(--may-space-2);display:flex;width:100%;height:100%;min-width:0;min-height:0;background:var(--may-color-bg)}.may-splitpane[data-orientation=horizontal]{flex-direction:row}.may-splitpane[data-orientation=vertical]{flex-direction:column}.may-splitpane__pane{position:relative;min-width:0;min-height:0;overflow:auto}.may-splitpane__pane--start{flex-grow:0;flex-shrink:0;flex-basis:var(--may-splitpane-size);transition:flex-basis var(--may-duration-settle) var(--may-spring-smooth)}.may-splitpane[data-dragging=true]>.may-splitpane__pane--start{flex-basis:var(--may-splitpane-drag);transition:none}.may-splitpane__pane--end{flex:1 1 0}.may-splitpane[data-collapsed=true]>.may-splitpane__pane--start{overflow:hidden;visibility:hidden;transition:flex-basis var(--may-duration-settle) var(--may-spring-smooth),visibility 0s linear var(--may-duration-settle)}.may-splitpane__divider{position:relative;flex:0 0 auto;align-self:stretch;padding:0;border:0;border-radius:0;background:var(--may-color-separator);z-index:var(--may-z-base);transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-splitpane__divider[data-slot=split-divider]{touch-action:none}.may-splitpane[data-orientation=horizontal]>.may-splitpane__divider{width:1px;cursor:col-resize}.may-splitpane[data-orientation=vertical]>.may-splitpane__divider{height:1px;cursor:row-resize}@media(min-resolution:2dppx){.may-splitpane[data-orientation=horizontal]>.may-splitpane__divider{width:var(--may-hairline)}.may-splitpane[data-orientation=vertical]>.may-splitpane__divider{height:var(--may-hairline)}}.may-splitpane__divider:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:transparent;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-splitpane[data-orientation=horizontal]>.may-splitpane__divider:before{inset-inline:calc(var(--may-splitpane-hit) * -1)}.may-splitpane[data-orientation=vertical]>.may-splitpane__divider:before{inset-block:calc(var(--may-splitpane-hit) * -1)}.may-splitpane[data-dragging=true]>.may-splitpane__divider{background:var(--may-color-tint)}.may-splitpane[data-dragging=true]>.may-splitpane__divider:before{background:color-mix(in srgb,var(--may-color-tint) 16%,transparent)}@media(hover:hover)and (pointer:fine){.may-splitpane__divider:hover{background:var(--may-color-tint)}.may-splitpane__divider:hover:before{background:color-mix(in srgb,var(--may-color-tint) 10%,transparent)}}.may-splitpane__divider:focus-visible{outline-offset:var(--may-space-1)}', le = 16, ce = Xe / 2, de = typeof window > "u" ? W : Ya;
function ar({
  children: a,
  orientation: e = "horizontal",
  size: t,
  defaultSize: i = 260,
  onSizeChange: s,
  min: o = 180,
  max: m = 480,
  collapsible: f = !1,
  collapsed: b,
  defaultCollapsed: _ = !1,
  onCollapsedChange: v,
  dividerLabel: u = "Resize panes",
  className: $,
  id: E,
  ...g
}) {
  const [x, k] = He.toArray(a), N = Na(E), I = `${N}-pane`, z = U(null), P = U(null), [V, M] = A(i), [L, C] = A(_), [j, F] = A(!1), [G, na] = A(0), p = b ?? L, l = e === "horizontal", S = G > 0 ? Math.min(m, Math.max(o, G - o)) : m, K = Math.min(Math.max(t ?? V, o), S), T = p ? 0 : K, ea = ra(
    (d) => {
      t === void 0 && M(d), s == null || s(d);
    },
    [t, s]
  ), Z = ra(
    (d) => {
      b === void 0 && C(d), v == null || v(d);
    },
    [b, v]
  );
  de(() => {
    const d = z.current;
    if (!d) return;
    const h = () => na(l ? d.offsetWidth : d.offsetHeight);
    if (h(), typeof ResizeObserver > "u") return;
    const D = new ResizeObserver(h);
    return D.observe(d), () => D.disconnect();
  }, [l]);
  const X = U({
    shown: T,
    min: o,
    max: S,
    collapsible: f,
    collapsed: p,
    commitSize: ea,
    commitCollapsed: Z
  });
  de(() => {
    X.current = {
      shown: T,
      min: o,
      max: S,
      collapsible: f,
      collapsed: p,
      commitSize: ea,
      commitCollapsed: Z
    };
  }), W(() => {
    const d = P.current, h = z.current;
    if (!d || !h) return;
    let D = 0, ia = !1;
    const oa = (J) => {
      const { min: q, max: sa, collapsible: fa } = X.current;
      return J > sa ? sa : J >= q ? J : fa ? ia ? Math.max(0, J) : Math.max(0, q + qe(J - q)) : q;
    }, ma = (J) => h.style.setProperty("--may-splitpane-drag", `${J}px`);
    return ve(d, {
      axis: l ? "x" : "y",
      onStart: () => {
        D = X.current.shown, ia = X.current.collapsed, ma(D), F(!0);
      },
      onMove: ({ dx: J, dy: q }) => {
        ma(oa(D + (l ? J : q)));
      },
      onEnd: ({ dx: J, dy: q, vx: sa, vy: fa }) => {
        F(!1);
        const { min: ya, max: Sa, collapsible: ba } = X.current, ta = D + (l ? J : q), _a = ta + Ge(l ? sa : fa);
        if (ba && _a < (ia ? ce : ya - ce)) {
          X.current.commitCollapsed(!0);
          return;
        }
        X.current.commitCollapsed(!1), X.current.commitSize(Math.min(Math.max(ta, ya), Sa));
      }
    });
  }, [l]);
  const H = (d) => {
    Z(!1), ea(Math.min(Math.max((p ? 0 : K) + d, o), S));
  }, c = (d) => {
    const h = l ? "ArrowLeft" : "ArrowUp", D = l ? "ArrowRight" : "ArrowDown";
    switch (d.key) {
      case h:
        d.preventDefault(), H(-le);
        break;
      case D:
        d.preventDefault(), H(le);
        break;
      case "Home":
        d.preventDefault(), H(o - K);
        break;
      case "End":
        d.preventDefault(), H(S - K);
        break;
      case "Enter":
      case " ":
        if (!f) return;
        d.preventDefault(), Z(!p);
        break;
    }
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ...g,
      ref: z,
      id: N,
      "data-slot": "split-pane",
      "data-orientation": e,
      "data-collapsed": p ? "true" : void 0,
      "data-dragging": j ? "true" : void 0,
      className: O("may-splitpane", $),
      style: { ...g.style, "--may-splitpane-size": `${T}px` },
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            id: I,
            "data-slot": "scroll-area",
            className: "may-splitpane__pane may-splitpane__pane--start",
            children: x
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            ref: P,
            type: "button",
            role: "separator",
            "aria-orientation": l ? "vertical" : "horizontal",
            "aria-label": u,
            "aria-controls": I,
            "aria-valuenow": Math.round(T),
            "aria-valuemin": f ? 0 : o,
            "aria-valuemax": Math.round(S),
            onKeyDown: c,
            onDoubleClick: () => {
              Z(!1), ea(i);
            },
            "data-slot": "split-divider",
            className: "may-splitpane__divider"
          }
        ),
        /* @__PURE__ */ r("div", { "data-slot": "scroll-area", className: "may-splitpane__pane may-splitpane__pane--end", children: k })
      ]
    }
  );
}
const er = aa("SplitPane", Qt), tr = [er], hr = da("SplitPane", ar, tr);
export {
  lr as C,
  dr as D,
  mr as N,
  yr as S,
  cr as a,
  pr as b,
  ur as c,
  vr as d,
  hr as e
};
//# sourceMappingURL=index-Df19cS72.js.map
