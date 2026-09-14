import { jsx as o, jsxs as Y, Fragment as _a } from "react/jsx-runtime";
import { useRef as h, useState as O, useEffect as q, useLayoutEffect as ia, forwardRef as wa } from "react";
import { IoChevronBack as xa, IoSearch as ka, IoCloseCircle as Sa, IoCheckmark as za } from "react-icons/io5";
import { A as ya, h as U, z as ea, w as Q, m as K, u as pa, d as ha, p as da, v as ma, e as Na, r as ca } from "./useSlidingThumb-CUFxfOOx.js";
import { F as Pa, j as Ca, S as Ra, k as $a, f as Ia, s as Ta, d as La, a as ua, p as Ea, b as Aa, l as Ma, h as Ba, B as Da, r as Fa, c as ja, m as Ya } from "./pull-physics-Be2EdsU4.js";
const Oa = '.may-nav-bar{position:relative;z-index:var(--may-z-nav);width:100%;padding-block-start:var(--may-inset-top);padding-inline:var(--may-inset-left) var(--may-inset-right);color:var(--may-color-text);transition:transform var(--may-duration-settle) var(--may-spring-snappy)}.may-nav-bar[data-variant=surface]{background:var(--may-color-surface)}.may-nav-bar[data-variant=plain]{background:transparent}.may-nav-bar[data-position=sticky]{position:sticky;inset-block-start:0}.may-nav-bar[data-position=fixed]{position:fixed;inset-block-start:0;inset-inline:0}.may-nav-bar[data-hidden=true]{transform:translateY(-100%);pointer-events:none}.may-nav-bar[data-separator=true]:after{content:"";position:absolute;inset-inline:0;inset-block-end:0;height:1px;background:var(--may-color-separator);pointer-events:none}@media(min-resolution:2dppx){.may-nav-bar[data-separator=true]:after{height:var(--may-hairline)}}.may-nav-bar__row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:var(--may-space-2);height:var(--may-navbar-h);padding-inline:var(--may-space-2)}.may-nav-bar__side{display:flex;align-items:center;gap:var(--may-space-1);min-width:0}.may-nav-bar__side--leading{justify-self:start}.may-nav-bar__side--trailing{justify-self:end}.may-nav-bar__title{margin:0;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text)}.may-nav-bar__back{display:inline-flex;align-items:center;gap:var(--may-space-1);height:var(--may-control-h);margin-inline-start:calc(var(--may-space-1) * -1);padding-inline:var(--may-space-1) var(--may-space-2);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-tint);font-family:inherit;font-size:var(--may-text-body);line-height:1;letter-spacing:var(--may-text-body-tracking);white-space:nowrap;text-decoration:none;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-nav-bar__chevron{width:1.05em;height:1.05em;flex-shrink:0;display:block}[dir=rtl] .may-nav-bar__chevron{transform:scaleX(-1)}.may-nav-bar__back-label{min-width:0;overflow:hidden;text-overflow:ellipsis}', Xa = 8;
function Wa({
  title: a,
  onBack: r,
  backHref: s,
  backLabel: i,
  backAriaLabel: y = "Back",
  leading: x,
  trailing: v,
  separator: _ = !0,
  position: z = "sticky",
  variant: N = "surface",
  hideOnScroll: E = !1,
  scrollRef: b,
  className: T,
  ...P
}) {
  const f = h(null), M = ya(), [B, R] = O(!1);
  q(() => {
    var e;
    if (!E || M) {
      R(!1);
      return;
    }
    const $ = (b == null ? void 0 : b.current) ?? null, g = $ ?? window, u = () => $ ? $.scrollTop : window.scrollY, j = ((e = f.current) == null ? void 0 : e.offsetHeight) ?? 0;
    let F = u(), c = 0;
    const k = () => {
      c || (c = requestAnimationFrame(() => {
        c = 0;
        const l = u(), t = l - F;
        Math.abs(t) < Xa || (F = l, R(t > 0 && l > j));
      }));
    };
    return g.addEventListener("scroll", k, { passive: !0 }), () => {
      g.removeEventListener("scroll", k), c && cancelAnimationFrame(c);
    };
  }, [E, M, b]);
  const L = x ?? (r || s ? /* @__PURE__ */ o(
    Ha,
    {
      onBack: r,
      href: s,
      label: i,
      ariaLabel: i == null ? y : void 0
    }
  ) : null);
  return /* @__PURE__ */ o(
    "header",
    {
      ...P,
      ref: f,
      "data-slot": "nav-bar",
      "data-variant": N,
      "data-position": z,
      "data-separator": _ ? "true" : void 0,
      "data-hidden": B ? "true" : void 0,
      className: U("may-nav-bar", T),
      children: /* @__PURE__ */ Y("div", { className: "may-nav-bar__row", children: [
        /* @__PURE__ */ o("div", { className: "may-nav-bar__side may-nav-bar__side--leading", children: L }),
        a != null && /* @__PURE__ */ o("h1", { className: "may-nav-bar__title", children: a }),
        /* @__PURE__ */ o("div", { className: "may-nav-bar__side may-nav-bar__side--trailing", children: v })
      ] })
    }
  );
}
function Ha({ onBack: a, href: r, label: s, ariaLabel: i }) {
  const { pressProps: y } = ea(), x = /* @__PURE__ */ Y(_a, { children: [
    /* @__PURE__ */ o(xa, { className: "may-nav-bar__chevron", "aria-hidden": !0, focusable: "false" }),
    s != null && /* @__PURE__ */ o("span", { className: "may-nav-bar__back-label", children: s })
  ] }), v = {
    ...y,
    "data-slot": "nav-bar-back",
    "aria-label": i,
    className: U("may-nav-bar__back", "may-pressable", "may-hoverable")
  };
  return r !== void 0 ? /* @__PURE__ */ o("a", { ...v, href: r, onClick: a, children: x }) : /* @__PURE__ */ o("button", { ...v, type: "button", onClick: a, children: x });
}
const qa = K("NavBar", Oa), Ua = [qa], Ve = Q("NavBar", Wa, Ua), Ka = '.may-capsule-tabs{--may-capsule-inset: 0px;position:relative;display:flex;align-items:center;max-width:100%;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;overscroll-behavior-x:contain;scroll-padding-inline:var(--may-space-8);min-height:var(--may-control-h)}.may-capsule-tabs::-webkit-scrollbar{display:none}.may-capsule-tabs__track{position:relative;display:flex;align-items:center;gap:var(--may-space-2);min-width:100%;width:max-content;padding:var(--may-capsule-inset);isolation:isolate}.may-capsule-tabs__thumb{position:absolute;z-index:0;inset-block:0;inset-inline-start:calc(var(--may-capsule-inset) * -1);width:1px;transform-origin:0 50%;pointer-events:none;border-radius:var(--may-radius-full)}.may-capsule-tabs[data-variant=filled] .may-capsule-tabs__thumb{background:var(--may-color-primary)}.may-capsule-tabs[data-variant=filled] .may-capsule-tabs__chip[aria-selected=true]{color:var(--may-color-on-primary)}.may-capsule-tabs[data-variant=tinted] .may-capsule-tabs__thumb{background:color-mix(in srgb,var(--may-color-primary) 14%,transparent)}.may-capsule-tabs[data-variant=tinted] .may-capsule-tabs__chip[aria-selected=true]{color:var(--may-color-tint)}.may-capsule-tabs[data-variant=surface]{--may-capsule-inset: 2px}.may-capsule-tabs[data-variant=surface] .may-capsule-tabs__track{background:var(--may-color-fill-tertiary);border-radius:var(--may-radius-full)}.may-capsule-tabs[data-variant=surface] .may-capsule-tabs__thumb{background:var(--may-color-surface);box-shadow:var(--may-shadow-sm)}.may-capsule-tabs[data-variant=surface] .may-capsule-tabs__chip[aria-selected=true]{color:var(--may-color-text)}.may-capsule-tabs__chip{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:var(--may-space-2);flex-shrink:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-secondary);font-family:inherit;font-weight:500;line-height:1;white-space:nowrap;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}.may-capsule-tabs__chip[aria-selected=true]{font-weight:600}.may-capsule-tabs__chip:disabled{opacity:.35;cursor:not-allowed}@media(hover:hover)and (pointer:fine){.may-capsule-tabs__chip.may-hoverable[aria-selected=true]:hover:not(:disabled){background-color:transparent}.may-capsule-tabs__chip:hover:not(:disabled):not([aria-selected=true]){color:var(--may-color-text)}}.may-capsule-tabs__icon{display:inline-flex;align-items:center;flex-shrink:0}.may-capsule-tabs__icon>svg{width:1.15em;height:1.15em;display:block}.may-capsule-tabs__label{display:inline-block}.may-capsule-tabs__count{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:var(--may-space-5);padding-inline:var(--may-space-1);border-radius:var(--may-radius-full);background:color-mix(in srgb,currentColor 20%,transparent);font-size:var(--may-text-caption-2);line-height:var(--may-text-caption-2-leading);font-weight:600;font-variant-numeric:tabular-nums}.may-capsule-tabs[data-size=sm] .may-capsule-tabs__chip{height:var(--may-control-h-sm);padding-inline:var(--may-space-3);font-size:var(--may-text-footnote);letter-spacing:var(--may-text-footnote-tracking)}.may-capsule-tabs[data-size=md] .may-capsule-tabs__chip{height:var(--may-control-h-md);padding-inline:var(--may-space-4);font-size:var(--may-text-subheadline);letter-spacing:var(--may-text-subheadline-tracking)}.may-capsule-tabs[data-size=lg] .may-capsule-tabs__chip{height:var(--may-control-h-lg);padding-inline:var(--may-space-5);font-size:var(--may-text-body);letter-spacing:var(--may-text-body-tracking)}.may-capsule-tabs[data-size=sm] .may-capsule-tabs__chip:after{content:"";position:absolute;inset-inline:0;inset-block-start:50%;height:var(--may-control-h);transform:translateY(-50%)}', Za = 1.1, Ga = typeof window > "u" ? q : ia;
function Ja(a, r, { onMount: s, reducedMotion: i }) {
  if (!r) return;
  if (!s) {
    r.scrollIntoView({
      behavior: i ? "auto" : "smooth",
      inline: "nearest",
      block: "nearest"
    });
    return;
  }
  if (!a || r.getBoundingClientRect().right <= a.getBoundingClientRect().right)
    return;
  const y = parseFloat(getComputedStyle(a).scrollPaddingInlineStart) || 0;
  a.scrollLeft = Math.max(0, r.offsetLeft - y);
}
function Qa({
  items: a = [],
  value: r,
  defaultValue: s,
  onValueChange: i,
  variant: y = "filled",
  size: x = "md",
  className: v,
  "aria-label": _,
  ...z
}) {
  var F;
  const [N, E] = O(s ?? ((F = a[0]) == null ? void 0 : F.value)), b = r ?? N, T = ya(), P = h(null), f = h(!0), M = h(null), B = Math.max(
    0,
    a.findIndex((c) => c.value === b)
  ), { trackRef: R, thumbRef: L, registerItem: $, onPointerDown: g } = pa({
    itemCount: a.length,
    selectedIndex: B,
    roundEnds: !0,
    pressScale: Za
  });
  Ga(() => {
    var c;
    M.current !== b && (Ja(P.current, ((c = R.current) == null ? void 0 : c.querySelector(
      '[data-slot="capsule-tab"][aria-selected="true"]'
    )) ?? null, {
      onMount: f.current,
      reducedMotion: T
    }), M.current = b), f.current = !1;
  }, [b, T]);
  const u = (c) => {
    r === void 0 && E(c), c !== b && (i == null || i(c));
  }, j = (c) => {
    var l, t, d, C, m;
    const k = c.key === "ArrowRight" ? 1 : c.key === "ArrowLeft" ? -1 : 0;
    let e = -1;
    if (k !== 0) {
      e = B;
      for (let I = 0; I < a.length && (e = (e + k + a.length) % a.length, !!((l = a[e]) != null && l.disabled)); I++)
        ;
    } else if (c.key === "Home")
      e = a.findIndex((I) => !I.disabled);
    else if (c.key === "End") {
      for (let I = a.length - 1; I >= 0; I--)
        if (!((t = a[I]) != null && t.disabled)) {
          e = I;
          break;
        }
    } else
      return;
    e < 0 || (d = a[e]) != null && d.disabled || (c.preventDefault(), u(a[e].value), (m = (C = R.current) == null ? void 0 : C.querySelectorAll('[data-slot="capsule-tab"]')[e]) == null || m.focus());
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ...z,
      ref: P,
      "data-slot": "capsule-tabs",
      "data-variant": y,
      "data-size": x,
      className: U("may-capsule-tabs", v),
      children: /* @__PURE__ */ Y(
        "div",
        {
          ref: R,
          role: "tablist",
          "aria-label": _,
          className: "may-capsule-tabs__track",
          onKeyDown: j,
          onPointerDown: g,
          children: [
            /* @__PURE__ */ o("span", { ref: L, className: "may-capsule-tabs__thumb", "aria-hidden": !0 }),
            a.map((c, k) => /* @__PURE__ */ o(
              Va,
              {
                chipRef: $(k),
                item: c,
                selected: c.value === b,
                onSelect: u
              },
              c.value
            ))
          ]
        }
      )
    }
  );
}
function Va({ item: a, selected: r, onSelect: s, chipRef: i }) {
  const { pressProps: y } = ea(a.disabled);
  return /* @__PURE__ */ Y(
    "button",
    {
      ...y,
      ref: i,
      type: "button",
      role: "tab",
      "aria-selected": r,
      tabIndex: r ? 0 : -1,
      disabled: a.disabled,
      "data-slot": "capsule-tab",
      onClick: () => s(a.value),
      className: U("may-capsule-tabs__chip", "may-pressable", "may-hoverable"),
      children: [
        a.icon && /* @__PURE__ */ o("span", { className: "may-capsule-tabs__icon", "aria-hidden": !0, children: a.icon }),
        /* @__PURE__ */ o("span", { className: "may-capsule-tabs__label", children: a.label }),
        a.count != null && /* @__PURE__ */ o("span", { className: "may-capsule-tabs__count", children: a.count })
      ]
    }
  );
}
const ae = K("CapsuleTabs", Ka), ee = [ae], at = Q("CapsuleTabs", Qa, ee), te = ".may-bubble{position:fixed;top:0;left:0;z-index:var(--may-z-overlay);display:inline-flex;margin-top:calc(var(--may-inset-top) + var(--may-space-4));margin-bottom:calc(var(--may-inset-bottom) + var(--may-space-4));margin-left:calc(var(--may-inset-left) + var(--may-space-4));margin-right:calc(var(--may-inset-right) + var(--may-space-4));translate:0 0;transition:translate var(--may-duration-settle) var(--may-spring-smooth);touch-action:none}.may-bubble:not([data-placed]),.may-bubble[data-dragging=true]{transition:none}.may-bubble[data-dragging=true] .may-fab.may-pressable{transform:scale(1.1);box-shadow:var(--may-shadow-2xl);transition:transform var(--may-duration-fast) var(--may-spring-bouncy),box-shadow var(--may-duration-fast) var(--may-ease-out)}.may-bubble .may-fab{cursor:grab}.may-bubble[data-dragging=true] .may-fab{cursor:grabbing}", va = 4, fa = (a, r, s) => Math.min(s, Math.max(r, a)), re = typeof window > "u" ? q : ia;
function ne({
  icon: a,
  children: r,
  "aria-label": s,
  tone: i = "tint",
  size: y = "md",
  defaultEdge: x = "end",
  defaultOffset: v = 0.62,
  onClick: _,
  onEdgeChange: z,
  disabled: N = !1,
  className: E,
  ...b
}) {
  const T = h(null), P = h(null), [f, M] = O(x), [B, R] = O(!1), L = h({ x: 0, y: 0 }), $ = h(!1), g = h(x), u = h(z);
  q(() => {
    u.current = z;
  });
  const j = (t, d) => {
    const C = T.current;
    C && (L.current = { x: t, y: d }, C.style.translate = `${t}px ${d}px`);
  }, F = () => {
    const t = T.current;
    if (!t) return { x: 0, y: 0 };
    const d = getComputedStyle(t), C = parseFloat(d.marginLeft) + parseFloat(d.marginRight), m = parseFloat(d.marginTop) + parseFloat(d.marginBottom), I = document.documentElement;
    return {
      x: Math.max(0, I.clientWidth - C - t.offsetWidth),
      y: Math.max(0, I.clientHeight - m - t.offsetHeight)
    };
  }, c = (t) => {
    const d = T.current, C = d ? getComputedStyle(d).direction === "rtl" : !1;
    return t === "end" !== C;
  }, k = (t, d) => {
    var m;
    const C = F();
    j(c(t) ? C.x : 0, fa(d, 0, C.y)), t !== g.current && (g.current = t, M(t), (m = u.current) == null || m.call(u, t));
  };
  re(() => {
    const t = T.current;
    if (!t) return;
    const d = F();
    j(c(g.current) ? d.x : 0, d.y * fa(v, 0, 1)), t.dataset.placed = "true";
  }, []), q(() => {
    const t = () => k(g.current, L.current.y);
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), q(() => {
    const t = P.current;
    if (!t || N) return;
    let d = { x: 0, y: 0 }, C = { x: 0, y: 0 }, m = [];
    const I = (D) => {
      !D.isPrimary || D.pointerType === "mouse" && D.button !== 0 || (t.setPointerCapture(D.pointerId), d = { x: D.clientX, y: D.clientY }, C = { ...L.current }, m = [{ x: D.clientX, y: D.clientY, t: D.timeStamp }], $.current = !1);
    }, G = (D) => {
      if (!t.hasPointerCapture(D.pointerId)) return;
      m.push({ x: D.clientX, y: D.clientY, t: D.timeStamp }), m.length > 12 && m.shift();
      const V = D.clientX - d.x, Z = D.clientY - d.y;
      if (!$.current) {
        if (Math.abs(V) < va && Math.abs(Z) < va) return;
        $.current = !0, R(!0);
      }
      const n = F();
      j(ha(C.x + V, 0, n.x), ha(C.y + Z, 0, n.y));
    }, H = (D) => {
      if (t.hasPointerCapture(D.pointerId) && t.releasePointerCapture(D.pointerId), !$.current) return;
      R(!1);
      const V = F(), Z = L.current.x + da(ma(m, "x")), n = L.current.y + da(ma(m, "y")), S = Z > V.x / 2;
      k(S === c("end") ? "end" : "start", n), m = [];
    };
    return t.addEventListener("pointerdown", I), t.addEventListener("pointermove", G), t.addEventListener("pointerup", H), t.addEventListener("pointercancel", H), () => {
      t.removeEventListener("pointerdown", I), t.removeEventListener("pointermove", G), t.removeEventListener("pointerup", H), t.removeEventListener("pointercancel", H);
    };
  }, [N]);
  const e = (t) => {
    $.current && ($.current = !1, t.preventDefault(), t.stopPropagation());
  }, l = (t) => {
    if (t.key === "ArrowLeft" || t.key === "ArrowRight") {
      t.preventDefault();
      const d = t.key === "ArrowRight";
      k(d === c("end") ? "end" : "start", L.current.y);
      return;
    }
    if (t.key === "ArrowUp" || t.key === "ArrowDown") {
      t.preventDefault();
      const d = F().y / 8;
      k(g.current, L.current.y + (t.key === "ArrowDown" ? d : -d));
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ...b,
      ref: T,
      "data-slot": "floating-bubble",
      "data-tone": i,
      "data-size": y,
      "data-edge": f,
      "data-dragging": B ? "true" : void 0,
      className: U("may-bubble", E),
      onClickCapture: e,
      onKeyDown: l,
      children: /* @__PURE__ */ o(
        Pa,
        {
          ref: P,
          icon: a,
          "aria-label": s,
          tone: i,
          size: y,
          disabled: N,
          onClick: _,
          children: r
        }
      )
    }
  );
}
const oe = K("FloatingBubble", te), se = K("Fab", Ca), ie = [se, oe], et = Q("FloatingBubble", ne, ie), ce = ".may-popup-host{display:contents;--may-popup-h: auto}.may-popup-host>.may-sheet__scrim[data-presentation]{padding:var(--may-space-0);justify-content:flex-start}.may-popup-host[data-position=bottom]>.may-sheet__scrim[data-presentation]{align-items:flex-end}.may-popup-host[data-position=top]>.may-sheet__scrim[data-presentation]{align-items:flex-start}.may-popup-host .may-popup[data-presentation][data-size]{width:100%;max-width:none;height:var(--may-popup-h);max-height:calc(100dvh - var(--may-space-12));border-radius:0}.may-popup-host[data-position=bottom] .may-popup[data-presentation][data-size]{border-start-start-radius:var(--may-radius-sheet);border-start-end-radius:var(--may-radius-sheet);animation:may-popup-in-bottom var(--may-duration-sheet-in) var(--may-ease-sheet)}.may-popup-host[data-position=top] .may-popup[data-presentation][data-size]{border-end-start-radius:var(--may-radius-sheet);border-end-end-radius:var(--may-radius-sheet);animation:may-popup-in-top var(--may-duration-sheet-in) var(--may-ease-sheet)}.may-popup-host[data-position=bottom][data-safe-area=true] .may-popup[data-presentation]{padding-bottom:var(--may-inset-bottom)}.may-popup-host[data-position=bottom][data-safe-area=false] .may-popup[data-presentation],.may-popup-host[data-position=top] .may-popup[data-presentation]{padding-bottom:var(--may-space-0)}.may-popup-host[data-position=top][data-safe-area=true] .may-popup[data-presentation]{padding-top:var(--may-inset-top)}.may-popup-host .may-popup[data-presentation]>.may-sheet__body{padding:var(--may-space-0)}.may-popup-host[data-padded=true] .may-popup[data-presentation]>.may-sheet__body{padding-inline:var(--may-space-5);padding-block-end:var(--may-space-5)}.may-popup-host[data-padded=true] .may-popup[data-presentation]:not(:has(.may-sheet__header))>.may-sheet__body{padding-block-start:var(--may-space-5)}@keyframes may-popup-in-bottom{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes may-popup-in-top{0%{transform:translateY(-100%)}to{transform:translateY(0)}}", le = (a) => typeof a == "number" ? `${a}px` : a;
function de({
  visible: a,
  onClose: r,
  children: s,
  position: i = "bottom",
  height: y,
  closeOnMaskClick: x = !0,
  grabber: v = !0,
  safeArea: _ = !0,
  title: z,
  padded: N = !1,
  className: E
}) {
  const b = i === "bottom";
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "popup",
      "data-position": i,
      "data-safe-area": _ ? "true" : "false",
      "data-padded": N ? "true" : void 0,
      className: "may-popup-host",
      style: y !== void 0 ? { "--may-popup-h": le(y) } : void 0,
      children: /* @__PURE__ */ o(
        Ra,
        {
          open: a,
          onClose: r,
          title: z,
          grabber: v && b,
          dismissible: b,
          closeOnScrimClick: x,
          className: U("may-popup", E),
          children: s
        }
      )
    }
  );
}
const me = K("Popup", ce), ye = K("Sheet", $a), pe = [ye, me], tt = Q("Popup", de, pe), ue = ".may-ptr{--may-ptr-pull: 0px;--may-ptr-progress: 0;--may-ptr-slot: var(--may-control-h);--may-ptr-dim: .16;position:relative;display:flex;flex-direction:column;min-height:0;width:100%;overflow:hidden;background:var(--may-color-bg)}.may-ptr[data-pulling=true]{-webkit-user-select:none;user-select:none}.may-ptr__indicator{position:absolute;inset-block-start:0;inset-inline:0;z-index:var(--may-z-base);display:flex;align-items:center;justify-content:center;height:var(--may-ptr-slot);pointer-events:none;translate:0 calc(var(--may-ptr-pull) - var(--may-ptr-slot));scale:calc(.5 + var(--may-ptr-progress) * .5);rotate:calc(var(--may-ptr-progress) * .5turn);opacity:var(--may-ptr-progress);transition:translate var(--may-duration-settle) var(--may-spring-smooth),scale var(--may-duration-fast) var(--may-spring-bouncy),opacity var(--may-duration-fast) var(--may-ease-out)}.may-ptr[data-pulling=true] .may-ptr__indicator{transition:scale var(--may-duration-fast) var(--may-spring-bouncy)}.may-ptr[data-status=ready] .may-ptr__indicator{scale:1.16;opacity:1}.may-ptr[data-status=pulling] .may-spinner__spoke,.may-ptr[data-status=ready] .may-spinner__spoke{animation:none;opacity:clamp(var(--may-ptr-dim),calc(var(--may-ptr-progress) * var(--may-spinner-count) - var(--may-spinner-i)),1)}.may-ptr__scroller{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;translate:0 var(--may-ptr-pull);transition:translate var(--may-duration-settle) var(--may-spring-smooth)}.may-ptr[data-pulling=true] .may-ptr__scroller{transition:none}";
function be({
  onRefresh: a,
  children: r,
  threshold: s = 64,
  max: i = 140,
  disabled: y = !1,
  label: x = "Refreshing",
  scrollRef: v,
  className: _,
  ...z
}) {
  const N = h(null), E = h(null);
  q(() => {
    if (v)
      return v.current = E.current, () => {
        v.current = null;
      };
  }, [v]);
  const [b, T] = O("idle"), P = h("idle"), f = h(0), M = h(0), B = h([]), R = h(!1), L = h(!0), $ = h(null);
  q(
    () => () => {
      L.current = !1, $.current && clearTimeout($.current);
    },
    []
  );
  const g = (e) => {
    const l = N.current;
    l && (f.current = e, l.style.setProperty("--may-ptr-pull", `${e}px`), l.style.setProperty("--may-ptr-progress", String(Ea(e, { threshold: s }))));
  }, u = (e) => {
    e !== P.current && (P.current = e, T(e));
  }, j = async () => {
    u("refreshing"), g(s);
    try {
      await a();
    } catch {
    } finally {
      L.current && (u("complete"), g(0), $.current = setTimeout(() => {
        L.current && u("idle");
      }, ua.settle));
    }
  }, F = (e) => {
    const l = E.current, t = N.current;
    y || !l || !t || P.current === "refreshing" || e.pointerType === "mouse" && e.button !== 0 || l.scrollTop > 0 || (R.current = !0, t.dataset.pulling = "true", M.current = e.clientY, B.current = [{ x: e.clientX, y: e.clientY, t: e.timeStamp }]);
  }, c = (e) => {
    if (!R.current) return;
    B.current.push({ x: e.clientX, y: e.clientY, t: e.timeStamp }), B.current.length > 12 && B.current.shift();
    const l = La(e.clientY - M.current, { threshold: s, max: i });
    g(l), u(Aa(l, !1, { threshold: s }));
  }, k = () => {
    if (!R.current) return;
    R.current = !1;
    const e = N.current;
    e && delete e.dataset.pulling;
    const l = f.current, t = ma(B.current, "y");
    if (B.current = [], l > 0 && Ta(l, t, { threshold: s })) {
      j();
      return;
    }
    g(0), u("idle");
  };
  return /* @__PURE__ */ Y(
    "div",
    {
      ...z,
      ref: N,
      "data-slot": "pull-to-refresh",
      "data-status": b,
      className: U("may-ptr", _),
      children: [
        /* @__PURE__ */ o("div", { className: "may-ptr__indicator", children: /* @__PURE__ */ o(Ia, { size: "sm", label: x, decorative: b !== "refreshing" }) }),
        /* @__PURE__ */ o(
          "div",
          {
            ref: E,
            "data-slot": "scroll-area",
            className: "may-ptr__scroller",
            onPointerDown: F,
            onPointerMove: c,
            onPointerUp: k,
            onPointerCancel: k,
            onPointerLeave: k,
            children: r
          }
        )
      ]
    }
  );
}
const he = K("PullToRefresh", ue), ve = K("Spinner", Ma), fe = [ve, he], rt = Q("PullToRefresh", be, fe), ge = ".may-search-bar{--may-search-bar-cancel-w: 0px;--may-search-bar-glyph: 1.05em;display:flex;align-items:center;width:100%;min-width:0;padding:var(--may-space-2) var(--may-space-4);background:transparent}.may-search-bar[data-disabled=true]{opacity:.4;cursor:not-allowed}.may-search-bar__field{position:relative;display:flex;align-items:center;flex:1 1 auto;min-width:0;padding-inline:var(--may-space-3);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);color:var(--may-color-text);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);cursor:text;box-shadow:0 0 0 0 transparent;transition:background-color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-settle) var(--may-spring-snappy)}.may-search-bar[data-focused=true] .may-search-bar__field{background:var(--may-color-fill-quaternary)}.may-search-bar__field:has(:focus-visible){box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-ring) 28%,transparent)}@media(hover:hover)and (pointer:fine){.may-search-bar:not([data-disabled=true]) .may-search-bar__field:not(:focus-within):hover{background:var(--may-color-fill-secondary)}}.may-search-bar[data-size=sm] .may-search-bar__field{height:var(--may-control-h-sm);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-search-bar[data-size=md] .may-search-bar__field{height:var(--may-control-h-md)}.may-search-bar[data-size=lg] .may-search-bar__field{height:var(--may-control-h-lg);padding-inline:var(--may-space-4)}.may-search-bar__lead{position:absolute;inset-block:0;inset-inline-start:50%;display:inline-flex;align-items:center;gap:var(--may-space-2);max-width:calc(100% - var(--may-space-4));white-space:nowrap;pointer-events:none;color:var(--may-color-text-tertiary);transform:translate(-50%);transition:inset-inline-start var(--may-duration-settle) var(--may-spring-snappy),transform var(--may-duration-settle) var(--may-spring-snappy),color var(--may-duration-color) var(--may-ease-out)}[dir=rtl] .may-search-bar__lead{transform:translate(50%)}.may-search-bar[data-lead=leading] .may-search-bar__lead{inset-inline-start:var(--may-space-3);transform:translate(0)}.may-search-bar[data-size=lg][data-lead=leading] .may-search-bar__lead{inset-inline-start:var(--may-space-4)}.may-search-bar[data-focused=true] .may-search-bar__lead{color:var(--may-color-text-secondary)}.may-search-bar__glyph{width:var(--may-search-bar-glyph);height:var(--may-search-bar-glyph);flex-shrink:0;display:block}.may-search-bar__placeholder{overflow:hidden;text-overflow:ellipsis;transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-search-bar[data-filled=true] .may-search-bar__placeholder{opacity:0}.may-search-bar__control{flex:1;min-width:0;height:100%;margin:0;padding:0;padding-inline-start:calc(var(--may-search-bar-glyph) + var(--may-space-2));border:0;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.may-search-bar__control::placeholder{color:transparent;opacity:1}.may-search-bar__control::-webkit-search-cancel-button,.may-search-bar__control::-webkit-search-decoration{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:none}.may-search-bar__control:focus-visible{outline:none}.may-search-bar__clear-slot{display:flex;align-items:center;flex:0 0 auto;width:0;overflow:hidden;opacity:0;transform:scale(.4);transition:width var(--may-duration-fast) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-search-bar__clear-slot[data-visible=true]{width:var(--may-control-h-xs);opacity:1;transform:none}.may-search-bar__clear{display:inline-flex;align-items:center;justify-content:center;width:var(--may-control-h-xs);height:100%;flex:0 0 auto;padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-tertiary);cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}.may-search-bar__clear>svg{width:var(--may-search-bar-glyph);height:var(--may-search-bar-glyph);display:block}.may-search-bar__cancel-slot{display:flex;align-items:stretch;align-self:stretch;flex:0 0 auto;width:0;overflow:hidden;opacity:0;transform:translate(var(--may-space-4));transition:width var(--may-duration-settle) var(--may-spring-snappy),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-snappy)}.may-search-bar[data-cancel=true] .may-search-bar__cancel-slot{width:var(--may-search-bar-cancel-w);opacity:1;transform:none}.may-search-bar__cancel{flex:0 0 auto;display:inline-flex;align-items:center;padding:0;padding-inline-start:var(--may-space-3);border:0;background:transparent;color:var(--may-color-tint);font:inherit;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);white-space:nowrap;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}.may-search-bar[data-size=sm] .may-search-bar__cancel{font-size:var(--may-text-subheadline)}.may-search-bar__cancel:disabled,.may-search-bar__clear:disabled{cursor:not-allowed}@media(hover:hover)and (pointer:fine){.may-search-bar .may-search-bar__clear.may-hoverable:hover:not(:disabled){background:transparent;color:var(--may-color-text-secondary)}.may-search-bar .may-search-bar__cancel.may-hoverable:hover:not(:disabled){background:transparent;color:color-mix(in srgb,var(--may-color-tint) 78%,var(--may-color-text))}}";
function _e(a, r) {
  typeof a == "function" ? a(r) : a && (a.current = r);
}
const we = typeof window > "u" ? q : ia, xe = wa(function({
  value: r,
  defaultValue: s,
  onValueChange: i,
  onSearch: y,
  onCancel: x,
  size: v = "md",
  showCancel: _ = "auto",
  cancelLabel: z = "Cancel",
  clearLabel: N = "Clear search",
  align: E = "center",
  wrapperClassName: b,
  className: T,
  placeholder: P = "Search",
  disabled: f,
  onChange: M,
  onKeyDown: B,
  onFocus: R,
  onBlur: L,
  style: $,
  ...g
}, u) {
  const [j, F] = O(s ?? ""), [c, k] = O(!1), [e, l] = O(0), t = h(null), d = h(null), C = r ?? j, m = C.length > 0, I = _ !== "never", G = _ === "always" || _ === "auto" && (c || m), H = E === "leading" || c || m ? "leading" : "center", D = ea(!m || f), V = ea(f);
  we(() => {
    const p = d.current;
    if (!p) return;
    const W = () => l(p.getBoundingClientRect().width);
    if (W(), typeof ResizeObserver > "u") return;
    const J = new ResizeObserver(W);
    return J.observe(p), () => J.disconnect();
  }, [I, z, v]);
  const Z = (p) => {
    r === void 0 && F(p), i == null || i(p);
  }, n = (p) => {
    Z(p.target.value), M == null || M(p);
  }, S = () => {
    var p;
    Z(""), (p = t.current) == null || p.focus();
  }, w = () => {
    var p;
    Z(""), (p = t.current) == null || p.blur(), k(!1), x == null || x();
  }, A = (p) => {
    p.key === "Enter" && (y == null || y(C)), p.key === "Escape" && (m ? S() : I && w()), B == null || B(p);
  }, X = (p) => {
    k(!0), R == null || R(p);
  }, aa = (p) => {
    k(!1), L == null || L(p);
  }, na = (p) => p.preventDefault(), ta = { "--may-search-bar-cancel-w": `${e}px` };
  return /* @__PURE__ */ Y(
    "div",
    {
      "data-slot": "search-bar",
      "data-size": v,
      "data-lead": H,
      "data-cancel": G ? "true" : void 0,
      "data-filled": m ? "true" : void 0,
      "data-focused": c ? "true" : void 0,
      "data-disabled": f ? "true" : void 0,
      className: U("may-search-bar", b),
      style: { ...ta, ...$ },
      children: [
        /* @__PURE__ */ Y("div", { className: "may-search-bar__field", children: [
          /* @__PURE__ */ Y("span", { className: "may-search-bar__lead", "aria-hidden": !0, children: [
            /* @__PURE__ */ o(ka, { className: "may-search-bar__glyph", focusable: "false" }),
            /* @__PURE__ */ o("span", { className: "may-search-bar__placeholder", children: P })
          ] }),
          /* @__PURE__ */ o(
            "input",
            {
              ...g,
              ref: (p) => {
                t.current = p, _e(u, p);
              },
              type: "search",
              value: C,
              placeholder: P,
              disabled: f,
              autoComplete: "off",
              autoCorrect: "off",
              autoCapitalize: "none",
              spellCheck: !1,
              enterKeyHint: "search",
              onChange: n,
              onKeyDown: A,
              onFocus: X,
              onBlur: aa,
              className: U("may-search-bar__control", T)
            }
          ),
          /* @__PURE__ */ o("span", { className: "may-search-bar__clear-slot", "data-visible": m ? "true" : void 0, children: /* @__PURE__ */ o(
            "button",
            {
              ...D.pressProps,
              type: "button",
              disabled: !m || f,
              "aria-hidden": !m || void 0,
              "aria-label": N,
              onMouseDown: na,
              onClick: S,
              className: "may-search-bar__clear may-pressable may-hoverable",
              children: /* @__PURE__ */ o(Sa, { "aria-hidden": !0, focusable: "false" })
            }
          ) })
        ] }),
        I && /* @__PURE__ */ o("div", { className: "may-search-bar__cancel-slot", children: /* @__PURE__ */ o(
          "button",
          {
            ...V.pressProps,
            ref: d,
            type: "button",
            tabIndex: G ? void 0 : -1,
            disabled: f,
            onMouseDown: na,
            onClick: w,
            className: "may-search-bar__cancel may-pressable may-hoverable",
            children: z
          }
        ) })
      ]
    }
  );
}), ke = K("SearchBar", ge), Se = [ke], nt = Q("SearchBar", xe, Se), ze = ".may-selector{--may-selector-cols: 2;--may-selector-check: 1.15em;display:grid;grid-template-columns:repeat(var(--may-selector-cols),minmax(0,1fr));gap:var(--may-space-3);min-width:0}.may-selector[data-columns=auto]{display:flex;flex-wrap:wrap}.may-selector[data-disabled=true]{cursor:not-allowed}.may-selector__option{position:relative;display:flex;align-items:center;gap:var(--may-space-3);min-width:0;border:0;background:var(--may-color-fill-tertiary);color:var(--may-color-text);font:inherit;text-align:start;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-selector__option:disabled{cursor:not-allowed;opacity:.35}.may-selector__option[data-selected=true]{background:color-mix(in srgb,var(--may-color-primary) 14%,transparent);color:var(--may-color-tint)}@media(hover:hover)and (pointer:fine){.may-selector .may-selector__option.may-hoverable:hover:not(:disabled){background:var(--may-color-fill-secondary)}.may-selector .may-selector__option.may-hoverable[data-selected=true]:hover:not(:disabled){background:color-mix(in srgb,var(--may-color-primary) 22%,transparent)}}.may-selector[data-variant=card] .may-selector__option{padding:var(--may-space-3) var(--may-space-4);border-radius:var(--may-radius-card)}.may-selector[data-variant=card][data-size=sm] .may-selector__option{min-height:var(--may-control-h)}.may-selector[data-variant=card][data-size=md] .may-selector__option{min-height:calc(var(--may-control-h) + var(--may-space-3))}.may-selector[data-variant=card][data-size=lg] .may-selector__option{min-height:calc(var(--may-control-h) + var(--may-space-6));padding:var(--may-space-4) var(--may-space-5)}.may-selector[data-variant=card] .may-selector__option[data-selected=true] .may-selector__label{font-weight:var(--may-text-headline-weight)}.may-selector[data-variant=chip] .may-selector__option{min-height:var(--may-control-h);padding-inline:var(--may-space-4);border-radius:var(--may-radius-full);justify-content:center;gap:0}.may-selector[data-variant=chip][data-size=lg] .may-selector__option{min-height:var(--may-control-h-lg);padding-inline:var(--may-space-5)}.may-selector[data-variant=chip] .may-selector__text{flex:0 0 auto}.may-selector[data-variant=chip] .may-selector__icon{margin-inline-end:var(--may-space-2)}.may-selector__icon{display:inline-flex;align-items:center;flex-shrink:0}.may-selector__icon>svg{width:1.25em;height:1.25em;display:block}.may-selector__text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}.may-selector__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-selector[data-size=sm] .may-selector__label{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-selector[data-size=md] .may-selector__label{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking)}.may-selector[data-size=lg] .may-selector__label{font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight)}.may-selector__description{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary);overflow:hidden;text-overflow:ellipsis}.may-selector__check{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.may-selector__check>svg{display:block}.may-selector[data-variant=card] .may-selector__check{width:calc(var(--may-selector-check) + var(--may-space-2));height:calc(var(--may-selector-check) + var(--may-space-2));border-radius:var(--may-radius-full);background:var(--may-color-primary);color:var(--may-color-on-primary);opacity:0;transform:scale(.3);transition:opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-selector[data-variant=card] .may-selector__check>svg{width:calc(var(--may-selector-check) * .72);height:calc(var(--may-selector-check) * .72)}.may-selector[data-variant=card] .may-selector__option[data-selected=true] .may-selector__check{opacity:1;transform:none}.may-selector[data-variant=chip] .may-selector__check{order:-1;width:0;margin-inline-end:0;overflow:hidden;opacity:0;transform:scale(.4);transition:width var(--may-duration-settle) var(--may-spring-snappy),margin-inline-end var(--may-duration-settle) var(--may-spring-snappy),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-selector[data-variant=chip] .may-selector__check>svg{width:var(--may-selector-check);height:var(--may-selector-check)}.may-selector[data-variant=chip] .may-selector__option[data-selected=true] .may-selector__check{width:var(--may-selector-check);margin-inline-end:var(--may-space-1);opacity:1;transform:none}.may-selector[data-thumb=true]{position:relative;isolation:isolate}.may-selector__thumb{position:absolute;z-index:0;inset-block:0;inset-inline-start:0;width:1px;transform-origin:0 50%;background:color-mix(in srgb,var(--may-color-primary) 14%,transparent);pointer-events:none}.may-selector[data-thumb=true] .may-selector__option[data-selected=true]{background:transparent}.may-selector[data-thumb=true] .may-selector__option[data-selected=true] .may-selector__check{width:0;margin-inline-end:0;opacity:0}", Ne = 1.1, Pe = typeof window > "u" ? q : ia, ga = (a) => a === void 0 ? [] : Array.isArray(a) ? a : [a];
function Ce(a) {
  const {
    options: r,
    variant: s = "card",
    size: i = "md",
    disabled: y = !1,
    className: x
  } = a, v = a.multiple === !0, _ = a.columns ?? (s === "chip" ? "auto" : 2), z = a.value !== void 0, [N, E] = O(() => ga(a.defaultValue)), b = z ? ga(a.value) : N, T = h([]), P = (e, l) => {
    var t, d;
    z || E(e), a.multiple ? (t = a.onChange) == null || t.call(a, e, l) : e[0] !== void 0 && ((d = a.onChange) == null || d.call(a, e[0], l));
  }, f = (e) => {
    if (!(y || e.disabled)) {
      if (a.multiple) {
        P(
          b.includes(e.value) ? b.filter((l) => l !== e.value) : [...b, e.value],
          e
        );
        return;
      }
      b[0] !== e.value && P([e.value], e);
    }
  }, M = r.findIndex((e) => b.includes(e.value)), B = M >= 0 ? M : r.findIndex((e) => !e.disabled), R = s === "chip" && !v, [L, $] = O(!0), g = R && L, { trackRef: u, thumbRef: j, registerItem: F, onPointerDown: c } = pa({
    itemCount: r.length,
    selectedIndex: g ? M : -1,
    roundEnds: !0,
    pressScale: Ne,
    enabled: g
  });
  Pe(() => {
    if (!R || typeof ResizeObserver > "u") return;
    const e = u.current;
    if (!e) return;
    const l = () => {
      const d = T.current.filter(Boolean);
      if (d.length < 2) return $(!0);
      const C = d[0].offsetTop;
      $(d.every((m) => m.offsetTop === C));
    };
    l();
    const t = new ResizeObserver(l);
    return t.observe(e), () => t.disconnect();
  }, [R, r.length]);
  const k = (e) => {
    var G;
    if (v || y || r.length === 0) return;
    const l = typeof _ == "number" ? Math.max(1, _) : 1, t = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : e.key === "ArrowDown" ? l : e.key === "ArrowUp" ? -l : 0;
    if (t === 0) return;
    e.preventDefault();
    const d = (H) => (H % r.length + r.length) % r.length, C = Math.sign(t);
    let m = d(Math.max(0, M) + t);
    for (let H = 0; H < r.length && r[m].disabled; H++)
      m = d(m + C);
    const I = r[m];
    I.disabled || (P([I.value], I), (G = T.current[m]) == null || G.focus());
  };
  return /* @__PURE__ */ Y(
    "div",
    {
      ref: u,
      role: v ? "group" : "radiogroup",
      "aria-label": a["aria-label"],
      "data-slot": "selector",
      "data-variant": s,
      "data-size": i,
      "data-columns": typeof _ == "number" ? "fixed" : "auto",
      "data-disabled": y ? "true" : void 0,
      "data-thumb": g ? "true" : void 0,
      className: U("may-selector", x),
      style: typeof _ == "number" ? { "--may-selector-cols": String(_) } : void 0,
      onKeyDown: k,
      onPointerDown: g ? c : void 0,
      children: [
        g && /* @__PURE__ */ o("span", { ref: j, className: "may-selector__thumb", "aria-hidden": !0 }),
        r.map((e, l) => /* @__PURE__ */ o(
          Re,
          {
            option: e,
            variant: s,
            multiple: v,
            selected: b.includes(e.value),
            disabled: y || !!e.disabled,
            tabIndex: v ? void 0 : l === B ? 0 : -1,
            onSelect: () => f(e),
            register: (t) => {
              T.current[l] = t, F(l)(t);
            }
          },
          e.value
        ))
      ]
    }
  );
}
function Re({
  option: a,
  variant: r,
  multiple: s,
  selected: i,
  disabled: y,
  tabIndex: x,
  onSelect: v,
  register: _
}) {
  const { pressProps: z } = ea(y);
  return /* @__PURE__ */ Y(
    "button",
    {
      ...z,
      ref: _,
      type: "button",
      role: s ? void 0 : "radio",
      "aria-checked": s ? void 0 : i,
      "aria-pressed": s ? i : void 0,
      tabIndex: x,
      disabled: y,
      "data-slot": "selector-option",
      "data-selected": i ? "true" : void 0,
      className: "may-selector__option may-pressable may-hoverable",
      onClick: v,
      children: [
        a.icon && /* @__PURE__ */ o("span", { className: "may-selector__icon", "aria-hidden": !0, children: a.icon }),
        /* @__PURE__ */ Y("span", { className: "may-selector__text", children: [
          /* @__PURE__ */ o("span", { className: "may-selector__label", children: a.label }),
          r === "card" && a.description && /* @__PURE__ */ o("span", { className: "may-selector__description", children: a.description })
        ] }),
        /* @__PURE__ */ o("span", { className: "may-selector__check", "aria-hidden": !0, children: /* @__PURE__ */ o(za, { focusable: "false" }) })
      ]
    }
  );
}
const $e = K("Selector", ze), Ie = [$e], ot = Q("Selector", Ce, Ie), Te = '.may-swipe{--may-swipe-reveal: 0px;position:relative;width:100%;min-width:0;overflow:hidden;touch-action:pan-y;background:var(--may-color-surface);isolation:isolate}.may-swipe__content{position:relative;z-index:var(--may-z-base);width:100%;min-width:0;background:var(--may-color-surface);transform:translateZ(0);transition:transform var(--may-duration-settle) var(--may-spring-smooth)}.may-swipe+.may-swipe .may-swipe__content:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:var(--may-space-4);inset-inline-end:0;height:1px;background:var(--may-color-separator)}.may-swipe:has(.may-list-row__leading)+.may-swipe .may-swipe__content:before{inset-inline-start:calc(var(--may-space-4) * 2 + var(--may-list-leading-w, 29px))}@media(min-resolution:2dppx){.may-swipe+.may-swipe .may-swipe__content:before{height:var(--may-hairline)}}.may-swipe[data-dragging=true] .may-swipe__content,.may-swipe[data-dragging=true] .may-swipe__group{transition:none}.may-swipe__group{position:absolute;inset-block:0;display:flex;width:0;overflow:hidden;transition:width var(--may-duration-settle) var(--may-spring-smooth)}.may-swipe__group[data-side=leading]{inset-inline-start:0}.may-swipe__group[data-side=trailing]{inset-inline-end:0;flex-direction:row-reverse}.may-swipe[data-side=leading] .may-swipe__group[data-side=leading],.may-swipe[data-side=trailing] .may-swipe__group[data-side=trailing]{width:var(--may-swipe-reveal)}.may-swipe__action{--may-swipe-fill: var(--may-gray);--may-swipe-on: var(--may-on-color);display:flex;align-items:center;justify-content:center;flex:1 1 calc(var(--may-control-h) * 1.7);min-width:0;padding-inline:var(--may-space-2);border:0;overflow:hidden;background:var(--may-swipe-fill);color:var(--may-swipe-on);font-family:inherit;cursor:pointer}.may-swipe__action.may-pressable{transition:max-width var(--may-duration-settle) var(--may-spring-smooth),padding var(--may-duration-settle) var(--may-spring-smooth),opacity var(--may-duration-fast) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-swipe__action[data-tone=neutral]{--may-swipe-fill: var(--may-gray);--may-swipe-on: var(--may-on-color)}.may-swipe__action[data-tone=tint]{--may-swipe-fill: var(--may-color-primary);--may-swipe-on: var(--may-color-on-primary)}.may-swipe__action[data-tone=danger]{--may-swipe-fill: var(--may-color-destructive);--may-swipe-on: var(--may-color-on-destructive)}.may-swipe__action[data-tone=success]{--may-swipe-fill: var(--may-color-success);--may-swipe-on: var(--may-on-color)}.may-swipe__action[data-tone=warning]{--may-swipe-fill: var(--may-color-warning);--may-swipe-on: var(--may-label)}.may-swipe__action-inner{display:flex;flex-direction:column;align-items:center;gap:var(--may-space-1);min-width:0;transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-swipe__action-icon{display:inline-flex}.may-swipe__action-icon>svg{width:1.35em;height:1.35em;display:block}.may-swipe__action-label{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);letter-spacing:var(--may-text-caption-1-tracking);font-weight:var(--may-text-headline-weight)}.may-swipe[data-armed=true] .may-swipe__action:not([data-primary=true]){max-width:0;padding-inline:0;opacity:0}.may-swipe[data-armed=true] .may-swipe__action[data-primary=true] .may-swipe__action-inner{transform:scale(1.14)}.may-swipe__action.may-pressable[data-pressed=true]{transform:none;background-color:color-mix(in srgb,var(--may-swipe-fill) 84%,var(--may-label))}.may-swipe__action[data-pressed=true] .may-swipe__action-inner{transform:scale(.88)}@media(hover:hover)and (pointer:fine){.may-swipe__action.may-hoverable[data-tone]:hover:not(:disabled){background-color:color-mix(in srgb,var(--may-swipe-fill) 88%,var(--may-label))}}', Le = 4, Ee = 0.5, Ae = 0.5;
function la(a) {
  if (!a) return 0;
  let r = 0;
  for (const s of Array.from(a.children)) {
    const i = parseFloat(getComputedStyle(s).flexBasis);
    r += Number.isFinite(i) ? i : s.offsetWidth;
  }
  return r;
}
function Me({
  children: a,
  leading: r,
  trailing: s,
  fullSwipe: i = !0,
  disabled: y = !1,
  onOpenChange: x,
  className: v,
  ..._
}) {
  const z = h(null), N = h(null), E = h(null), b = h(null), [T, P] = O(null), [f, M] = O(null), [B, R] = O(!1), [L, $] = O(!1), g = h(0), u = h(!1), j = h(null), F = h(!1), c = h(null), k = h(null), e = h({ leading: r, trailing: s, fullSwipe: i, onOpenChange: x });
  q(() => {
    e.current = { leading: r, trailing: s, fullSwipe: i, onOpenChange: x };
  }), q(
    () => () => {
      k.current && clearTimeout(k.current);
    },
    []
  );
  const l = (n) => {
    const S = z.current, w = N.current;
    !S || !w || (g.current = n, S.style.setProperty("--may-swipe-reveal", `${Math.abs(n)}px`), w.style.transform = `translate3d(${n}px, 0, 0)`);
  }, t = (n) => {
    F.current !== n && (F.current = n, R(n));
  }, d = (n) => {
    j.current !== n && (j.current = n, P(n));
  }, C = (n) => {
    var S, w;
    c.current !== n && (c.current = n, M(n), (w = (S = e.current).onOpenChange) == null || w.call(S, n));
  }, m = () => {
    l(0), t(!1), C(null);
  }, I = (n, S, w) => {
    d(n), l(S * (n === "leading" ? w : -w)), C(n);
  }, G = (n, S, w) => {
    const A = n === "leading" ? e.current.leading : e.current.trailing, X = A == null ? void 0 : A[0];
    if (!X) {
      m();
      return;
    }
    l(S * (n === "leading" ? w : -w)), X.onSelect(), k.current && clearTimeout(k.current), k.current = setTimeout(m, ua.settle);
  };
  q(() => {
    const n = z.current, S = N.current;
    if (!n || !S || y) return;
    let w = 1, A = 0, X = 0, aa = 0, na = 0;
    return Na(S, {
      /*
       * 'both', not 'x'. The axis lock is the whole point: a vertical scroll
       * that happens to start on a row reports dx = 0 for the rest of the
       * gesture, so a finger that meant to scroll can never drag the row
       * sideways by the few pixels a thumb wanders.
       */
      axis: "both",
      onStart: () => {
        w = getComputedStyle(n).direction === "rtl" ? -1 : 1, A = n.offsetWidth, X = la(E.current), aa = la(b.current), na = g.current, u.current = !1, $(!0);
      },
      onMove: ({ dx: ta }) => {
        if (!u.current) {
          if (Math.abs(ta) <= Le) return;
          u.current = !0;
        }
        const p = na + ta, W = Math.abs(p), J = Math.sign(p), oa = p * w >= 0 ? "leading" : "trailing", ra = oa === "leading" ? X : aa, ba = e.current.fullSwipe !== !1 && ra > 0;
        let sa;
        ra === 0 ? sa = J * ca(W) : ba ? sa = W <= A ? p : J * (A + ca(W - A)) : sa = W <= ra ? p : J * (ra + ca(W - ra)), W > 0 && d(oa), t(ba && W >= A * Ae), l(sa);
      },
      onEnd: ({ vx: ta }) => {
        if ($(!1), !u.current) return;
        const p = g.current, W = p * w >= 0 ? "leading" : "trailing", J = W === "leading" ? X : aa;
        if (p === 0 || J === 0) {
          m();
          return;
        }
        if (F.current) {
          G(W, w, A);
          return;
        }
        const oa = p + da(ta);
        Math.sign(oa) === Math.sign(p) && Math.abs(oa) >= J * Ee ? I(W, w, J) : m();
      }
    });
  }, [y]);
  const H = (n) => {
    const S = z.current;
    if (y || !S) return;
    if (n.key === "Escape" && c.current) {
      n.stopPropagation(), m();
      return;
    }
    if (n.key !== "ArrowLeft" && n.key !== "ArrowRight") return;
    const w = getComputedStyle(S).direction === "rtl" ? -1 : 1, A = n.key === "ArrowRight" == (w === 1) ? "leading" : "trailing", X = la(A === "leading" ? E.current : b.current);
    X && (n.preventDefault(), c.current === A ? m() : I(A, w, X));
  }, D = (n) => {
    if (u.current && n.detail > 0) {
      u.current = !1, n.preventDefault(), n.stopPropagation();
      return;
    }
    c.current && (n.preventDefault(), n.stopPropagation(), m());
  }, V = (n) => {
    const S = N.current;
    if (!S || n.target !== S) return;
    const w = document.elementFromPoint(n.clientX, n.clientY), A = w == null ? void 0 : w.closest('button, a, [role="button"]');
    A instanceof HTMLElement && A !== S && S.contains(A) && A.click();
  }, Z = (n, S, w) => {
    if (!n || n.length === 0) return null;
    const A = f === S;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: w,
        className: "may-swipe__group",
        "data-side": S,
        "aria-hidden": A ? void 0 : !0,
        children: n.map((X, aa) => /* @__PURE__ */ o(
          Be,
          {
            item: X,
            primary: aa === 0,
            reachable: A,
            onDone: m
          },
          `${X.label}-${aa}`
        ))
      }
    );
  };
  return /* @__PURE__ */ Y(
    "div",
    {
      ..._,
      ref: z,
      "data-slot": "swipe-action",
      "data-side": T ?? void 0,
      "data-armed": B ? "true" : void 0,
      "data-dragging": L ? "true" : void 0,
      className: U("may-swipe", v),
      onKeyDown: H,
      children: [
        Z(r, "leading", E),
        Z(s, "trailing", b),
        /* @__PURE__ */ o(
          "div",
          {
            ref: N,
            className: "may-swipe__content",
            onClickCapture: D,
            onClick: V,
            children: a
          }
        )
      ]
    }
  );
}
function Be({
  item: a,
  primary: r,
  reachable: s,
  onDone: i
}) {
  const { pressProps: y } = ea();
  return /* @__PURE__ */ o(
    "button",
    {
      ...y,
      type: "button",
      tabIndex: s ? void 0 : -1,
      "data-tone": a.tone ?? "neutral",
      "data-primary": r ? "true" : void 0,
      className: "may-swipe__action may-pressable may-hoverable",
      onClick: () => {
        a.onSelect(), i();
      },
      children: /* @__PURE__ */ Y("span", { className: "may-swipe__action-inner", children: [
        a.icon && /* @__PURE__ */ o("span", { className: "may-swipe__action-icon", "aria-hidden": !0, children: a.icon }),
        /* @__PURE__ */ o("span", { className: "may-swipe__action-label", children: a.label })
      ] })
    }
  );
}
const De = K("SwipeAction", Te), Fe = [De], st = Q("SwipeAction", Me, Fe), je = '.may-tab-bar{--may-tab-bar-icon: calc(var(--may-control-h) * .59);position:relative;display:flex;align-items:center;justify-content:center;gap:var(--may-space-3);width:100%;min-width:0}.may-tab-bar[data-fixed=true]{position:fixed;z-index:var(--may-z-nav);inset-block-end:calc(var(--may-inset-bottom) + var(--may-space-4));inset-inline:calc(var(--may-inset-left) + var(--may-space-4)) calc(var(--may-inset-right) + var(--may-space-4));pointer-events:none}.may-tab-bar__capsule,.may-tab-bar__action{pointer-events:auto}.may-tab-bar[data-fixed=true]:before{content:"";position:absolute;inset-inline:calc(var(--may-space-4) * -1);inset-block-end:calc((var(--may-inset-bottom) + var(--may-space-4)) * -1);block-size:calc(100% + var(--may-inset-bottom) + var(--may-space-10));background:linear-gradient(to top,var(--may-color-bg) 45%,color-mix(in srgb,var(--may-color-bg) 60%,transparent) 72%,transparent);pointer-events:none;z-index:-1}.may-tab-bar__capsule{position:relative;isolation:isolate;display:flex;align-items:stretch;flex:0 1 auto;min-width:0;padding-inline:var(--may-space-2);border-radius:var(--may-radius-full);background:var(--may-color-surface);box-shadow:var(--may-shadow-lg)}.may-tab-bar__thumb{position:absolute;z-index:0;inset-block:var(--may-space-1);inset-inline-start:0;width:1px;transform-origin:0 50%;background:color-mix(in srgb,var(--may-tab-bar-active) 14%,transparent);pointer-events:none}.may-tab-bar__action{display:flex;align-items:center;flex:0 0 auto}.may-tab-bar[data-tone=tint]{--may-tab-bar-active: var(--may-color-tint)}.may-tab-bar[data-tone=neutral]{--may-tab-bar-active: var(--may-color-text)}.may-tab-bar[data-tone=danger]{--may-tab-bar-active: var(--may-color-danger)}.may-tab-bar[data-tone=success]{--may-tab-bar-active: var(--may-color-success)}.may-tab-bar[data-tone=warning]{--may-tab-bar-active: var(--may-color-warning)}.may-tab-bar__item{position:relative;flex:0 1 auto;min-width:calc(var(--may-control-h) * 1.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--may-space-1);min-width:0;height:var(--may-tabbar-h);min-height:var(--may-control-h);padding-inline:var(--may-space-3);border:0;background:transparent;color:var(--may-color-text-secondary);font-family:inherit;text-align:center;text-decoration:none;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}.may-tab-bar__item[aria-current=page]{color:var(--may-tab-bar-active)}.may-tab-bar__item:disabled,.may-tab-bar__item[aria-disabled=true]{opacity:.35;cursor:not-allowed}@media(hover:hover)and (pointer:fine){.may-tab-bar__item.may-hoverable:hover:not([disabled]):not([aria-disabled=true]){background-color:transparent;color:var(--may-tab-bar-active)}}.may-tab-bar__glyph{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-tab-bar-icon);height:var(--may-tab-bar-icon);transform-origin:center}.may-tab-bar__icon{display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%}.may-tab-bar__icon>svg{width:100%;height:100%;display:block}.may-tab-bar__badge{position:absolute;inset-block-start:calc(var(--may-space-1) * -1);inset-inline-start:calc(100% - var(--may-space-2));pointer-events:none}.may-tab-bar__label{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--may-text-caption-2);line-height:var(--may-text-caption-2-leading);letter-spacing:var(--may-text-caption-2-tracking);font-weight:500}.may-tab-bar__item[aria-current=page] .may-tab-bar__label{font-weight:600}.may-tab-bar:not(:has(.may-tab-bar__label)) .may-tab-bar__glyph{width:calc(var(--may-tab-bar-icon) * 1.15);height:calc(var(--may-tab-bar-icon) * 1.15)}', Ye = 1.06, Oe = 0.78;
function Xe({
  items: a = [],
  value: r,
  defaultValue: s,
  onValueChange: i,
  fixed: y = !0,
  labels: x = !0,
  tone: v = "tint",
  children: _,
  className: z,
  "aria-label": N = "Tabs",
  ...E
}) {
  var g;
  const [b, T] = O(s ?? ((g = a[0]) == null ? void 0 : g.value)), P = r ?? b, f = ya(), M = (u) => {
    r === void 0 && T(u), u !== P && (i == null || i(u));
  }, { trackRef: B, thumbRef: R, registerItem: L, onPointerDown: $ } = pa({
    itemCount: a.length,
    selectedIndex: Math.max(
      0,
      a.findIndex((u) => u.value === P)
    ),
    roundEnds: !0,
    pressScale: Ye
  });
  return /* @__PURE__ */ Y(
    "nav",
    {
      ...E,
      "aria-label": N,
      "data-slot": "tab-bar",
      "data-tone": v,
      "data-fixed": y ? "true" : void 0,
      className: U("may-tab-bar", z),
      children: [
        /* @__PURE__ */ Y("div", { ref: B, className: "may-tab-bar__capsule", onPointerDown: $, children: [
          /* @__PURE__ */ o("span", { ref: R, className: "may-tab-bar__thumb", "aria-hidden": !0 }),
          a.map((u, j) => /* @__PURE__ */ o(
            We,
            {
              item: u,
              selected: u.value === P,
              labels: x,
              reducedMotion: f,
              itemRef: L(j),
              onSelect: M
            },
            u.value
          ))
        ] }),
        _ != null && /* @__PURE__ */ o("div", { className: "may-tab-bar__action", children: _ })
      ]
    }
  );
}
function We({
  item: a,
  selected: r,
  labels: s,
  reducedMotion: i,
  itemRef: y,
  onSelect: x
}) {
  const v = Ba(), _ = h(null), { pressProps: z } = ea(a.disabled), N = () => {
    const f = _.current;
    !f || i || typeof f.animate != "function" || f.animate([{ transform: `scale(${Oe})` }, { transform: "scale(1)" }], {
      duration: ua.settle,
      // The bouncy spring overshoots past 1, so the glyph swells past its
      // resting size on the way back and settles — the dip is what makes the
      // swell read as a bounce rather than as a resize.
      easing: Fa(f, ja("bouncy"))
    });
  }, E = (f) => {
    if (a.disabled) {
      f.preventDefault();
      return;
    }
    N(), x(a.value);
  }, b = a.badge != null && a.badge > 0 || a.dot === !0, T = /* @__PURE__ */ Y(_a, { children: [
    /* @__PURE__ */ Y("span", { ref: _, className: "may-tab-bar__glyph", children: [
      /* @__PURE__ */ o("span", { className: "may-tab-bar__icon", "aria-hidden": !0, children: r && a.activeIcon ? a.activeIcon : a.icon }),
      b && /*
      * Hidden from assistive tech and folded into the item's own name
      * below instead: read in DOM order it would announce "3, Messages",
      * which is the count arriving before the thing it counts.
      */
      /* @__PURE__ */ o("span", { className: "may-tab-bar__badge", "aria-hidden": !0, children: /* @__PURE__ */ o(
        Da,
        {
          size: "sm",
          tone: "danger",
          variant: "solid",
          ...a.badge != null && a.badge > 0 ? { count: a.badge } : { dot: !0 }
        }
      ) })
    ] }),
    s && /* @__PURE__ */ o("span", { className: "may-tab-bar__label", children: a.label })
  ] }), P = {
    ...z,
    ref: y,
    onClick: E,
    "data-slot": "tab-bar-item",
    // A composed name only where the label is genuinely a string; a rich node
    // keeps its own text and the count is dropped rather than mangled.
    "aria-label": typeof a.label == "string" && a.badge != null && a.badge > 0 ? `${a.label}, ${a.badge}` : void 0,
    "aria-current": r ? "page" : void 0,
    className: U("may-tab-bar__item", "may-pressable", "may-hoverable")
  };
  return a.href !== void 0 ? /* @__PURE__ */ o(
    v,
    {
      ...P,
      href: a.disabled ? void 0 : a.href,
      "aria-disabled": a.disabled || void 0,
      children: T
    }
  ) : /* @__PURE__ */ o("button", { ...P, type: "button", disabled: a.disabled, children: T });
}
const He = K("TabBar", je), qe = K("Badge", Ya), Ue = [qe, He], it = Q("TabBar", Xe, Ue);
export {
  at as C,
  et as F,
  Ve as N,
  tt as P,
  nt as S,
  it as T,
  rt as a,
  ot as b,
  st as c
};
//# sourceMappingURL=index-CuGgsgIk.js.map
