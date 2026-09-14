import { jsxs as k, jsx as l, Fragment as U } from "react/jsx-runtime";
import { createElement as A, createContext as O, useContext as R, useSyncExternalStore as W, useRef as $, useEffect as P, isValidElement as B, cloneElement as X, forwardRef as G, useState as J, useCallback as Q } from "react";
import { A as V, h as E, w as M, m as I, z as Z, B as aa, C as ea, e as ta, d as na, p as ra, D as sa } from "./useSlidingThumb-CUFxfOOx.js";
const q = O("auto");
function ia() {
  return R(q);
}
function Oa({ platform: a, children: e }) {
  return A(q.Provider, { value: a }, e);
}
function oa() {
  return typeof window > "u" ? "(min-width: 1024px)" : `(min-width: ${getComputedStyle(document.documentElement).getPropertyValue("--may-breakpoint-desktop").trim() || "1024px"})`;
}
let F = null;
function Y() {
  return F || (typeof window > "u" || !window.matchMedia ? null : F = window.matchMedia(oa()));
}
function da(a) {
  const e = Y();
  return e ? (e.addEventListener("change", a), () => e.removeEventListener("change", a)) : () => {
  };
}
const ma = () => {
  var a;
  return ((a = Y()) == null ? void 0 : a.matches) ?? !1;
}, la = () => !0;
function ya() {
  const a = W(da, ma, la), e = ia();
  return e === "phone" ? !1 : e === "desktop" ? !0 : a;
}
const ca = ".may-badge{display:inline-flex;align-items:center;justify-content:center;gap:var(--may-space-1);height:var(--may-badge-h);padding-inline:var(--may-badge-pad);border-radius:var(--may-radius-full);font-family:inherit;font-weight:600;line-height:1;white-space:nowrap;vertical-align:middle;flex-shrink:0;font-variant-numeric:tabular-nums;transform-origin:center}.may-badge[data-tone=tint]{--may-badge-solid: var(--may-color-primary);--may-badge-on-solid: var(--may-color-on-primary);--may-badge-text: var(--may-color-tint)}.may-badge[data-tone=neutral]{--may-badge-solid: var(--may-label);--may-badge-on-solid: var(--may-bg-elevated);--may-badge-text: var(--may-color-text-secondary)}.may-badge[data-tone=danger]{--may-badge-solid: var(--may-color-destructive);--may-badge-on-solid: var(--may-color-on-destructive);--may-badge-text: var(--may-color-danger)}.may-badge[data-tone=success]{--may-badge-solid: var(--may-color-success);--may-badge-on-solid: var(--may-on-color);--may-badge-text: var(--may-color-success)}.may-badge[data-tone=warning]{--may-badge-solid: var(--may-color-warning);--may-badge-on-solid: var(--may-label);--may-badge-text: var(--may-color-warning)}.may-badge[data-variant=solid]{background:var(--may-badge-solid);color:var(--may-badge-on-solid)}.may-badge[data-variant=tinted]{background:color-mix(in srgb,var(--may-badge-solid) 16%,transparent);color:var(--may-badge-text)}.may-badge[data-size=sm]{--may-badge-h: calc(var(--may-control-h) * .4);--may-badge-pad: var(--may-space-2);font-size:var(--may-text-caption-2);letter-spacing:var(--may-text-caption-2-tracking)}.may-badge[data-size=md]{--may-badge-h: calc(var(--may-control-h) * .5);--may-badge-pad: var(--may-space-2);font-size:var(--may-text-caption-1);letter-spacing:var(--may-text-caption-1-tracking)}.may-badge[data-size=lg]{--may-badge-h: calc(var(--may-control-h) * .6);--may-badge-pad: var(--may-space-3);font-size:var(--may-text-footnote);letter-spacing:var(--may-text-footnote-tracking)}.may-badge--count{min-width:var(--may-badge-h);padding-inline:var(--may-space-1)}.may-badge__dot{width:.5em;height:.5em;flex-shrink:0;border-radius:var(--may-radius-full);background:currentColor}.may-badge--dot-only[data-variant]{width:calc(var(--may-badge-h) * .5);height:calc(var(--may-badge-h) * .5);min-width:0;padding-inline:0;background:var(--may-badge-solid)}", ua = (a) => `var(--may-spring-${a})`, Ra = (a) => `var(--may-ease-${a})`, pa = {
  instant: 80,
  fast: 150,
  settle: 340,
  sheetIn: 500,
  sheetOut: 300,
  follow: 90
};
function fa(a, e) {
  var r;
  const n = (r = e.match(/var\((--[\w-]+)\)/)) == null ? void 0 : r[1];
  return n ? getComputedStyle(a).getPropertyValue(n).trim() || "ease-out" : e;
}
function ha({
  children: a,
  variant: e = "tinted",
  tone: n = "tint",
  size: t = "sm",
  dot: r = !1,
  count: s,
  max: m = 99,
  className: c,
  ...o
}) {
  const p = s !== void 0, u = r && !p && a == null, b = $(null), v = $(s), g = V();
  return P(() => {
    const d = b.current;
    s === void 0 || v.current === s || (v.current = s, !(!d || g || typeof d.animate != "function") && d.animate([{ transform: "scale(1.34)" }, { transform: "scale(1)" }], {
      duration: pa.settle,
      // The spring overshoots past 1, so the badge settles with a second,
      // smaller bounce — the same curve every press in the system rides.
      easing: fa(d, ua("bouncy"))
    }));
  }, [s, g]), /* @__PURE__ */ k(
    "span",
    {
      ...o,
      ref: b,
      "data-slot": "badge",
      "data-variant": e,
      "data-tone": n,
      "data-size": t,
      "data-shape": p ? "count" : void 0,
      className: E(
        "may-badge",
        p && "may-badge--count",
        u && "may-badge--dot-only",
        c
      ),
      children: [
        r && !u && !p && /* @__PURE__ */ l("span", { className: "may-badge__dot", "aria-hidden": !0 }),
        p ? s > m ? `${m}+` : s : a
      ]
    }
  );
}
const va = I("Badge", ca), ga = [va], Ba = M("Badge", ha, ga);
function ba(a, e, n) {
  if (!B(a)) return null;
  const t = a, { className: r, ...s } = e;
  return X(
    t,
    {
      ...s,
      ...t.props,
      className: E(r, t.props.className)
    },
    n(t.props.children)
  );
}
const K = O("a");
function Va() {
  return R(K);
}
function qa({ linkComponent: a, children: e }) {
  return A(K.Provider, { value: a }, e);
}
const xa = '.may-fab{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:var(--may-space-2);height:var(--may-fab-size);min-width:var(--may-fab-size);padding:0;border:0;border-radius:var(--may-radius-full);font-family:inherit;font-weight:var(--may-text-headline-weight);line-height:1;white-space:nowrap;cursor:pointer;box-shadow:var(--may-shadow-lg);transition:transform var(--may-duration-settle) var(--may-spring-bouncy),box-shadow var(--may-duration-settle) var(--may-spring-bouncy),background-color var(--may-duration-color) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out);animation:may-fab-in var(--may-duration-settle) var(--may-ease-out)}.may-fab:disabled{cursor:not-allowed;opacity:.35;box-shadow:var(--may-shadow-sm)}.may-fab[data-tone]{background:var(--may-fab-solid);color:var(--may-fab-on-solid)}.may-fab[data-tone=tint]{--may-fab-solid: var(--may-color-primary);--may-fab-on-solid: var(--may-color-on-primary)}.may-fab[data-tone=neutral]{--may-fab-solid: var(--may-label);--may-fab-on-solid: var(--may-bg-elevated)}.may-fab[data-tone=danger]{--may-fab-solid: var(--may-color-destructive);--may-fab-on-solid: var(--may-color-on-destructive)}.may-fab[data-tone=success]{--may-fab-solid: var(--may-color-success);--may-fab-on-solid: var(--may-on-color)}.may-fab[data-tone=warning]{--may-fab-solid: var(--may-color-warning);--may-fab-on-solid: var(--may-label)}.may-fab[data-size=sm]{--may-fab-size: var(--may-control-h-md);font-size:var(--may-text-subheadline);letter-spacing:var(--may-text-subheadline-tracking)}.may-fab[data-size=md]{--may-fab-size: var(--may-control-h-lg);font-size:var(--may-text-headline);letter-spacing:var(--may-text-headline-tracking)}.may-fab[data-size=lg]{--may-fab-size: calc(var(--may-control-h-lg) + var(--may-space-2));font-size:var(--may-text-title-3);letter-spacing:var(--may-text-title-3-tracking)}.may-fab__glyph{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.may-fab__glyph>svg,.may-fab__glyph>svg[width="1em"]{width:1.35em;height:1.35em;display:block}.may-fab__label{display:inline-block}.may-fab--extended{padding-inline:var(--may-space-5)}.may-fab--extended:has(.may-fab__glyph){padding-inline-start:var(--may-space-4)}.may-fab__spinner{width:1.2em;height:1.2em;flex-shrink:0;border-radius:var(--may-radius-full);border:2px solid currentColor;border-top-color:transparent;animation:may-fab-spin .7s linear infinite}.may-fab.may-pressable[data-pressed=true]{transform:scale(.96);box-shadow:var(--may-shadow-sm);transition:transform var(--may-duration-instant) var(--may-ease-out),box-shadow var(--may-duration-instant) var(--may-ease-out)}@media(hover:hover)and (pointer:fine){.may-fab.may-hoverable[data-tone]:hover:not(:disabled):not([data-pressed]){background-color:color-mix(in srgb,var(--may-fab-solid) 88%,var(--may-label));transform:scale(1.03)}}.may-fab--fixed{position:fixed;z-index:var(--may-z-nav);inset-block-end:calc(var(--may-inset-bottom) + var(--may-space-5))}.may-fab--fixed[data-position=end]{inset-inline-end:calc(var(--may-inset-right) + var(--may-space-5))}.may-fab--fixed[data-position=start]{inset-inline-start:calc(var(--may-inset-left) + var(--may-space-5))}.may-fab--fixed[data-position=center]{inset-inline-start:50%;translate:-50% 0}@keyframes may-fab-in{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes may-fab-spin{to{transform:rotate(360deg)}}', wa = G(function({
  icon: e,
  children: n,
  asChild: t = !1,
  tone: r = "tint",
  size: s = "md",
  fixed: m = !1,
  position: c = "end",
  loading: o = !1,
  disabled: p,
  className: u,
  type: b = "button",
  ...v
}, g) {
  const d = p || o, { pressProps: z } = Z(d), x = (t && B(n) ? n.props.children : n) != null, w = {
    "data-slot": "fab",
    "data-tone": r,
    "data-size": s,
    "data-position": c,
    className: E(
      "may-fab",
      "may-pressable",
      "may-hoverable",
      x && "may-fab--extended",
      m && "may-fab--fixed",
      u
    )
  }, N = o ? /* @__PURE__ */ l("span", { className: "may-fab__spinner", "aria-hidden": !0 }) : /* @__PURE__ */ l("span", { className: "may-fab__glyph", "aria-hidden": !0, children: e });
  return t ? ba(
    n,
    { ...v, ...z, ref: g, ...w, "aria-busy": o || void 0, "aria-disabled": d || void 0 },
    (C) => /* @__PURE__ */ k(U, { children: [
      N,
      C != null && /* @__PURE__ */ l("span", { className: "may-fab__label", children: C })
    ] })
  ) : /* @__PURE__ */ k(
    "button",
    {
      ...v,
      ...z,
      ref: g,
      type: b,
      disabled: d,
      "aria-busy": o || void 0,
      ...w,
      children: [
        N,
        x && /* @__PURE__ */ l("span", { className: "may-fab__label", children: n })
      ]
    }
  );
}), _a = I("Fab", xa), ka = [_a], Ya = M("Fab", wa, ka), za = ".may-sheet__scrim{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--may-z-sheet);display:flex;background:var(--may-color-scrim);animation:may-fade-in var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-sheet__scrim[data-presentation=sheet]{align-items:flex-end}.may-sheet__scrim[data-presentation=dialog]{align-items:center;justify-content:center;padding:var(--may-space-6)}.may-sheet{display:flex;flex-direction:column;min-height:0;background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-xl);overflow:hidden;transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-sheet[data-presentation=sheet]{width:100%;border-start-start-radius:var(--may-radius-sheet);border-start-end-radius:var(--may-radius-sheet);padding-bottom:var(--may-inset-bottom);animation:may-sheet-in var(--may-duration-sheet-in) var(--may-ease-sheet);transition:transform var(--may-duration-settle) var(--may-spring-smooth);touch-action:none}.may-sheet[data-presentation=sheet][data-size=sm]{max-height:40vh}.may-sheet[data-presentation=sheet][data-size=md]{max-height:60vh}.may-sheet[data-presentation=sheet][data-size=lg]{max-height:85vh}.may-sheet[data-presentation=sheet][data-size=full]{height:100dvh;max-height:none}.may-sheet[data-dragging=true]{transition:none}.may-sheet__grabber{width:36px;height:5px;margin:var(--may-space-2) auto var(--may-space-1);border-radius:var(--may-radius-full);background:var(--may-color-fill);flex-shrink:0}.may-sheet[data-presentation=dialog]{width:100%;border-radius:var(--may-radius-sheet);max-height:calc(100vh - var(--may-space-16));animation:may-dialog-in var(--may-duration-settle) var(--may-ease-out)}.may-sheet[data-presentation=dialog][data-size=sm]{max-width:360px}.may-sheet[data-presentation=dialog][data-size=md]{max-width:480px}.may-sheet[data-presentation=dialog][data-size=lg]{max-width:680px}.may-sheet[data-presentation=dialog][data-size=full]{max-width:960px}.may-sheet__header{padding:var(--may-space-5) var(--may-space-5) var(--may-space-3);flex-shrink:0}.may-sheet__title{margin:0;font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);font-weight:var(--may-text-title-3-weight)}.may-sheet__description{margin:var(--may-space-1) 0 0;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);color:var(--may-color-text-secondary)}.may-sheet__body{flex:1;min-height:0;overflow-y:auto;padding:0 var(--may-space-5) var(--may-space-5)}.may-sheet__footer{display:flex;align-items:center;justify-content:flex-end;gap:var(--may-space-2);padding:var(--may-space-4) var(--may-space-5);padding-block-end:max(var(--may-space-4),var(--may-inset-bottom, 0px),var(--may-keyboard-inset, 0px));flex-shrink:0}@keyframes may-fade-in{0%{opacity:0}to{opacity:1}}@keyframes may-sheet-in{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes may-dialog-in{0%{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}.may-sheet__scrim[data-state=closed]{opacity:0;pointer-events:none}.may-sheet[data-state=closed]{opacity:0}.may-sheet__footer[data-footer=stack]{flex-direction:column;align-items:stretch;justify-content:flex-start}.may-sheet__footer[data-footer=fill]{justify-content:stretch}.may-sheet__footer[data-footer=fill]>*{flex:1 1 0}.may-sheet__scrim[data-presentation=drawer]{align-items:stretch}.may-sheet__scrim[data-side=start]{justify-content:flex-start}.may-sheet__scrim[data-side=end]{justify-content:flex-end}.may-sheet[data-presentation=drawer]{height:100%;max-width:100%;padding-bottom:var(--may-inset-bottom);animation:may-drawer-in var(--may-duration-sheet-in) var(--may-ease-sheet)}.may-sheet[data-presentation=drawer][data-size=sm]{width:20rem}.may-sheet[data-presentation=drawer][data-size=md]{width:26rem}.may-sheet[data-presentation=drawer][data-size=lg]{width:34rem}.may-sheet[data-presentation=drawer][data-size=full]{width:100%}.may-sheet[data-presentation=drawer][data-side=end]{border-start-start-radius:var(--may-radius-sheet);border-end-start-radius:var(--may-radius-sheet)}.may-sheet[data-presentation=drawer][data-side=start]{border-start-end-radius:var(--may-radius-sheet);border-end-end-radius:var(--may-radius-sheet)}@keyframes may-drawer-in{0%{transform:translate(var(--may-drawer-from, 100%))}to{transform:translate(0)}}.may-sheet[data-presentation=drawer][data-side=start]{--may-drawer-from: -100%}@media(prefers-reduced-motion:reduce){.may-sheet[data-presentation=drawer]{animation:none}}";
function Sa(a = !0) {
  P(() => {
    const e = typeof window > "u" ? null : window.visualViewport;
    if (!a || !e) return;
    const n = document.documentElement;
    let t = 0, r = "";
    const s = () => {
      t = 0;
      const c = Math.max(0, window.innerHeight - e.height - e.offsetTop), o = `${Math.round(c)}px`;
      o !== r && (r = o, n.style.setProperty("--may-keyboard-inset", o));
    }, m = () => {
      t || (t = requestAnimationFrame(s));
    };
    return s(), e.addEventListener("resize", m), e.addEventListener("scroll", m), () => {
      t && cancelAnimationFrame(t), e.removeEventListener("resize", m), e.removeEventListener("scroll", m), n.style.removeProperty("--may-keyboard-inset");
    };
  }, [a]);
}
const Ea = 150, T = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', Na = 0.35, Ca = 0.5;
function $a({
  open: a,
  onClose: e,
  children: n,
  title: t,
  description: r,
  footer: s,
  footerLayout: m = "end",
  side: c = "bottom",
  size: o = "md",
  grabber: p = !0,
  dismissible: u = !0,
  closeOnScrimClick: b = !0,
  className: v,
  ...g
}) {
  const d = $(null), z = $(null), S = aa(), x = ya(), w = V(), N = ea(a, w ? 0 : Ea), [C, D] = J(!1);
  Sa(a);
  const j = Q(
    (i) => {
      var _;
      if (i.key === "Escape") {
        i.stopPropagation(), e();
        return;
      }
      if (i.key !== "Tab") return;
      const y = (_ = d.current) == null ? void 0 : _.querySelectorAll(T);
      if (!y || y.length === 0) return;
      const h = y[0], f = y[y.length - 1];
      i.shiftKey && document.activeElement === h ? (i.preventDefault(), f.focus()) : !i.shiftKey && document.activeElement === f && (i.preventDefault(), h.focus());
    },
    [e]
  );
  if (P(() => {
    var h;
    if (!a) return;
    z.current = document.activeElement;
    const i = document.body.style.overflow;
    document.body.style.overflow = "hidden", document.addEventListener("keydown", j, !0);
    const y = ((h = d.current) == null ? void 0 : h.querySelector(T)) ?? d.current;
    return y == null || y.focus(), () => {
      var f, _;
      document.removeEventListener("keydown", j, !0), document.body.style.overflow = i, (_ = (f = z.current) == null ? void 0 : f.focus) == null || _.call(f);
    };
  }, [a, j]), P(() => {
    const i = d.current;
    if (!a || !i || L !== "sheet" || !u || w) return;
    let y = i.offsetHeight;
    return ta(i, {
      axis: "y",
      onStart: () => {
        y = i.offsetHeight, D(!0), i.style.transition = "none";
      },
      onMove: ({ dy: h }) => {
        i.style.transform = `translateY(${na(h, 0, Number.POSITIVE_INFINITY)}px)`;
      },
      onEnd: ({ dy: h, vy: f }) => {
        D(!1), i.style.transition = "";
        const H = h + ra(f) > y * Na || f > Ca;
        i.style.transform = "", H && e();
      }
    });
  }, [a, x, u, w, e]), !N) return null;
  const L = c !== "bottom" ? "drawer" : x ? "dialog" : "sheet";
  return /* @__PURE__ */ l(
    "div",
    {
      className: "may-sheet__scrim",
      "data-slot": "scrim",
      "data-state": a ? "open" : "closed",
      "data-presentation": L,
      "data-side": c,
      onMouseDown: (i) => {
        b && i.target === i.currentTarget && e();
      },
      children: /* @__PURE__ */ k(
        "div",
        {
          ref: d,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": t ? `${S}-title` : void 0,
          "aria-describedby": r ? `${S}-description` : void 0,
          tabIndex: -1,
          "data-slot": "sheet",
          "data-state": a ? "open" : "closed",
          "data-presentation": L,
          "data-side": c,
          "data-size": o,
          "data-dragging": C ? "true" : void 0,
          ...g,
          className: E("may-sheet", v),
          children: [
            p && !x && u && /* @__PURE__ */ l("span", { className: "may-sheet__grabber", "aria-hidden": !0 }),
            (t || r) && /* @__PURE__ */ k("header", { className: "may-sheet__header", children: [
              t && /* @__PURE__ */ l("h2", { className: "may-sheet__title", id: `${S}-title`, children: t }),
              r && /* @__PURE__ */ l("p", { className: "may-sheet__description", id: `${S}-description`, children: r })
            ] }),
            n && /* @__PURE__ */ l("div", { className: "may-sheet__body", "data-slot": "scroll-area", children: n }),
            s && /* @__PURE__ */ l("footer", { className: "may-sheet__footer", "data-footer": m, children: s })
          ]
        }
      )
    }
  );
}
const Pa = I("Sheet", za), Ma = [Pa], Ka = M("Sheet", $a, Ma), Ia = ".may-spinner{position:relative;display:inline-block;flex-shrink:0;width:var(--may-spinner-size);height:var(--may-spinner-size);vertical-align:middle;color:var(--may-spinner-tint);--may-spinner-count: 8;--may-spinner-spoke-w: max(2px, calc(var(--may-spinner-size) * .1));--may-spinner-spoke-h: calc(var(--may-spinner-size) * .3);--may-spinner-cycle: calc(var(--may-duration-sheet-in) * 2);--may-spinner-dim: .16}.may-spinner[data-tone=neutral]{--may-spinner-tint: var(--may-gray)}.may-spinner[data-tone=tint]{--may-spinner-tint: var(--may-color-tint)}.may-spinner[data-tone=success]{--may-spinner-tint: var(--may-color-success)}.may-spinner[data-tone=warning]{--may-spinner-tint: var(--may-color-warning)}.may-spinner[data-tone=danger]{--may-spinner-tint: var(--may-color-danger)}.may-spinner[data-size=xs]{--may-spinner-size: calc(var(--may-control-h) * .34)}.may-spinner[data-size=sm]{--may-spinner-size: calc(var(--may-control-h) * .46)}.may-spinner[data-size=md]{--may-spinner-size: calc(var(--may-control-h) * .62)}.may-spinner[data-size=lg]{--may-spinner-size: calc(var(--may-control-h) * .86)}.may-spinner__spoke{--may-spinner-i: 0;position:absolute;inset-block-start:0;inset-inline-start:calc(50% - var(--may-spinner-spoke-w) / 2);width:var(--may-spinner-spoke-w);height:var(--may-spinner-spoke-h);border-radius:var(--may-radius-full);background:currentColor;clip-path:polygon(0 0,100% 0,74% 100%,26% 100%);transform-origin:50% calc(var(--may-spinner-size) / 2);transform:rotate(calc(var(--may-spinner-i) * 1turn / var(--may-spinner-count)));animation:may-spinner-fade var(--may-spinner-cycle) linear infinite;animation-delay:calc(-1 * var(--may-spinner-i) * var(--may-spinner-cycle) / var(--may-spinner-count))}@keyframes may-spinner-fade{0%{opacity:1}to{opacity:var(--may-spinner-dim)}}@media(prefers-reduced-motion:reduce){.may-spinner__spoke{animation:none;opacity:.55}}";
function ja({
  tone: a = "neutral",
  size: e = "md",
  spokes: n = 8,
  label: t = "Loading",
  decorative: r = !1,
  className: s,
  style: m,
  ...c
}) {
  const o = Math.min(16, Math.max(6, Math.round(n)));
  return /* @__PURE__ */ k(
    "span",
    {
      ...c,
      "data-slot": "spinner",
      "data-tone": a,
      "data-size": e,
      role: r ? void 0 : "status",
      "aria-hidden": r || void 0,
      className: E("may-spinner", s),
      style: { ...m, "--may-spinner-count": o },
      children: [
        Array.from({ length: o }, (p, u) => /* @__PURE__ */ l(
          "span",
          {
            className: "may-spinner__spoke",
            style: { "--may-spinner-i": u },
            "aria-hidden": !0
          },
          u
        )),
        !r && /* @__PURE__ */ l("span", { className: "may-sr-only", children: t })
      ]
    }
  );
}
const La = I("Spinner", Ia), Fa = [La], Ha = M("Spinner", ja, Fa);
function Ua(a, { threshold: e = 64, max: n = 140 } = {}) {
  if (a <= 0) return 0;
  const t = e / 3;
  if (a <= t) return a;
  const r = a - t, s = n - t;
  return t + s * sa.easeOutCubic(Math.min(1, r / (s * 1.8)));
}
function Wa(a, e, { threshold: n = 64 } = {}) {
  return e ? "refreshing" : a <= 0 ? "idle" : a >= n ? "ready" : "pulling";
}
function Xa(a, e, { threshold: n = 64 } = {}) {
  return a >= n || a >= n * 0.6 && e > 0.5;
}
function Ga(a, { threshold: e = 64 } = {}) {
  return Math.min(1, a / e);
}
export {
  Ba as B,
  Ya as F,
  qa as L,
  Oa as P,
  Ka as S,
  pa as a,
  Wa as b,
  ua as c,
  Ua as d,
  Ra as e,
  Ha as f,
  Sa as g,
  Va as h,
  ia as i,
  xa as j,
  za as k,
  Ia as l,
  ca as m,
  ba as n,
  Ga as p,
  fa as r,
  Xa as s,
  ya as u
};
//# sourceMappingURL=pull-physics-Be2EdsU4.js.map
