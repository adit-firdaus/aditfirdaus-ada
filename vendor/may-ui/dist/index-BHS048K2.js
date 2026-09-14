import { jsx as e, jsxs as T, Fragment as pa } from "react/jsx-runtime";
import { useRef as B, useState as U, useEffect as Y, useLayoutEffect as sa, forwardRef as Z, useSyncExternalStore as Ct, useMemo as ua, Children as nt, isValidElement as za, cloneElement as it, useCallback as X, useContext as Na, createContext as $a, Fragment as Dt } from "react";
import { B as ta, A as oa, C as Sa, h as I, z as W, w as C, m as R, e as ja, d as Ka, p as Pt, E as Mt, u as Lt, g as Rt, c as jt, G as Bt } from "./useSlidingThumb-CUFxfOOx.js";
import { u as va, n as st, r as Ft, h as Ot } from "./pull-physics-Be2EdsU4.js";
import { useDragControls as qt, MotionConfig as Ht, LayoutGroup as Gt, motion as ga, backOut as Ut } from "motion/react";
import { IoClose as ha, IoPerson as Yt, IoChevronForward as Ba, IoSearch as Wt, IoCloseCircle as Kt, IoCheckmarkCircleOutline as Xt, IoWarningOutline as Zt, IoAlertCircleOutline as Jt, IoInformationCircleOutline as Qt, IoCheckmark as Fa, IoChevronBack as Vt, IoCaretUp as ae, IoAdd as te, IoRemove as ee, IoAlert as re } from "react-icons/io5";
import { a as Ea, F as oe, c as ne } from "./index-DzxRow2V.js";
const ie = '.may-action-sheet__scrim{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;animation:may-action-sheet-scrim-in var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-action-sheet__scrim[data-presentation=sheet]{z-index:var(--may-z-sheet);align-items:flex-end;justify-content:center;padding:var(--may-space-2);padding-block-end:calc(var(--may-space-2) + var(--may-inset-bottom));background:var(--may-color-scrim)}.may-action-sheet__scrim[data-presentation=menu]{z-index:var(--may-z-popover);align-items:center;justify-content:center;background:transparent}.may-action-sheet{display:flex;flex-direction:column;min-height:0;color:var(--may-color-text)}.may-action-sheet[data-presentation=sheet]{width:100%;max-width:560px;max-height:100%;gap:var(--may-space-2);animation:may-action-sheet-rise var(--may-duration-sheet-in) var(--may-ease-sheet);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-action-sheet[data-presentation=menu]{min-width:220px;max-width:320px;max-height:100%;box-shadow:var(--may-shadow-lg);border-radius:var(--may-radius-lg);animation:may-action-sheet-menu-in var(--may-duration-settle) var(--may-ease-out),may-action-sheet-fade var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-action-sheet[data-anchored=true]{position:absolute;margin:0}.may-action-sheet[data-side=bottom]{transform-origin:top left}.may-action-sheet[data-side=top]{transform-origin:bottom left}.may-action-sheet__group{display:flex;flex-direction:column;min-height:0;overflow:hidden auto;overscroll-behavior:contain;background:var(--may-color-surface);border-radius:var(--may-radius-card)}.may-action-sheet[data-presentation=menu] .may-action-sheet__group{border-radius:var(--may-radius-lg);padding-block:var(--may-space-1)}.may-action-sheet[data-presentation=sheet] .may-action-sheet__group{box-shadow:var(--may-shadow-lg)}.may-action-sheet__group--cancel{flex-shrink:0}.may-action-sheet__group>*+*:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-action-sheet__group>*+*:before{height:var(--may-hairline)}}.may-action-sheet[data-presentation=menu] .may-action-sheet__group>*+*:before{content:none}.may-action-sheet__header{position:relative;display:flex;flex-direction:column;gap:var(--may-space-1);padding:var(--may-space-4);text-align:center}.may-action-sheet__title{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text-secondary)}.may-action-sheet__description{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary)}.may-action-sheet[data-presentation=menu] .may-action-sheet__header{padding:var(--may-space-2) var(--may-space-3);text-align:start}.may-action-sheet__action{position:relative;display:flex;align-items:center;width:100%;border:0;background:transparent;font-family:inherit;cursor:pointer;color:var(--may-color-tint);transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-action-sheet__action:disabled{cursor:not-allowed;opacity:.35}.may-action-sheet__action[data-destructive=true]{color:var(--may-color-danger)}.may-action-sheet__action[data-pressed=true]{background:var(--may-color-highlight-strong)}@media(hover:hover)and (pointer:fine){.may-action-sheet__action:hover:not(:disabled){background:var(--may-color-highlight)}}.may-action-sheet[data-presentation=sheet] .may-action-sheet__action{justify-content:center;min-height:calc(var(--may-control-h) + var(--may-space-3));padding-inline:var(--may-space-4);font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);font-weight:var(--may-text-body-weight)}.may-action-sheet__action--cancel{color:var(--may-color-tint);font-weight:var(--may-text-headline-weight)}.may-action-sheet[data-presentation=menu] .may-action-sheet__action{justify-content:flex-start;gap:var(--may-space-3);min-height:var(--may-control-h);padding-inline:var(--may-space-3);color:var(--may-color-text);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);font-weight:var(--may-text-body-weight);text-align:start}.may-action-sheet[data-presentation=menu] .may-action-sheet__action[data-destructive=true]{color:var(--may-color-danger)}.may-action-sheet__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-action-sheet__icon{display:inline-flex;align-items:center;flex-shrink:0}.may-action-sheet__icon>svg{width:1.1em;height:1.1em;display:block}.may-action-sheet[data-presentation=sheet] .may-action-sheet__icon{position:absolute;inset-inline-end:var(--may-space-4)}.may-action-sheet[data-presentation=menu] .may-action-sheet__icon{order:-1;color:var(--may-color-text-secondary)}.may-action-sheet[data-presentation=menu] .may-action-sheet__action[data-destructive=true] .may-action-sheet__icon{color:currentColor}.may-action-sheet__scrim[data-state=closed]{opacity:0;pointer-events:none}.may-action-sheet[data-state=closed]{opacity:0}@keyframes may-action-sheet-scrim-in{0%{opacity:0}to{opacity:1}}@keyframes may-action-sheet-fade{0%{opacity:0}to{opacity:1}}@keyframes may-action-sheet-rise{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes may-action-sheet-menu-in{0%{transform:scale(.92)}to{transform:scale(1)}}', se = 150, le = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', Ca = 6, Da = 8, ce = typeof window > "u" ? Y : sa;
function me({
  open: a,
  onClose: t,
  items: r,
  actions: o = [],
  title: n,
  description: i,
  cancelLabel: l = "Cancel",
  anchorRef: s,
  className: m
}) {
  const u = B(null), y = B(null), g = ta(), v = r ?? o, p = va(), [_, d] = U(null), k = oa(), E = Sa(a, k ? 0 : se), b = p, $ = _ !== null, P = () => {
    var f;
    return Array.from(
      ((f = u.current) == null ? void 0 : f.querySelectorAll(
        '[data-slot="action-sheet-action"]:not(:disabled)'
      )) ?? []
    );
  };
  Y(() => {
    var w;
    if (!a) return;
    y.current = document.activeElement;
    const f = document.body, c = f.style.overflow;
    return b || (f.style.overflow = "hidden"), (w = P()[0]) == null || w.focus(), () => {
      var M, z;
      f.style.overflow = c, (z = (M = y.current) == null ? void 0 : M.focus) == null || z.call(M);
    };
  }, [a, b]), ce(() => {
    const f = u.current, c = s == null ? void 0 : s.current;
    if (!a || !b || !f || !c) {
      d(null);
      return;
    }
    const w = () => {
      const z = c.getBoundingClientRect(), O = f.offsetHeight, S = f.offsetWidth, N = window.innerHeight - z.bottom, L = N < O + Ca && z.top > N ? "top" : "bottom", j = {
        side: L,
        top: L === "bottom" ? z.bottom + Ca : z.top - O - Ca,
        // Menus hang from the anchor's leading edge and only slide inward when
        // that would put them past the viewport.
        left: Math.min(
          Math.max(Da, z.left),
          Math.max(Da, window.innerWidth - S - Da)
        )
      };
      d(
        (F) => F && F.top === j.top && F.left === j.left && F.side === j.side ? F : j
      );
    }, M = (z) => {
      f.contains(z.target) || w();
    };
    return w(), window.addEventListener("resize", w), window.addEventListener("scroll", M, !0), () => {
      window.removeEventListener("resize", w), window.removeEventListener("scroll", M, !0);
    };
  }, [a, b, s, v.length]);
  const D = (f) => {
    var S;
    if (f.key === "Escape") {
      f.stopPropagation(), t();
      return;
    }
    const c = P();
    if (c.length === 0) return;
    const w = c.indexOf(document.activeElement);
    if (f.key === "ArrowDown" || f.key === "ArrowUp") {
      f.preventDefault();
      const N = f.key === "ArrowDown" ? 1 : -1;
      c[(w + N + c.length) % c.length].focus();
      return;
    }
    if (f.key === "Home") {
      f.preventDefault(), c[0].focus();
      return;
    }
    if (f.key === "End") {
      f.preventDefault(), c[c.length - 1].focus();
      return;
    }
    if (f.key !== "Tab") return;
    const M = (S = u.current) == null ? void 0 : S.querySelectorAll(le);
    if (!M || M.length === 0) return;
    const z = M[0], O = M[M.length - 1];
    f.shiftKey && document.activeElement === z ? (f.preventDefault(), O.focus()) : !f.shiftKey && document.activeElement === O && (f.preventDefault(), z.focus());
  }, A = (f) => {
    f.target === f.currentTarget && t();
  };
  if (!E) return null;
  const h = b ? "menu" : "sheet", x = n ? `${g}-title` : void 0;
  return /* @__PURE__ */ e(
    "div",
    {
      className: "may-action-sheet__scrim",
      "data-slot": "scrim",
      "data-state": a ? "open" : "closed",
      "data-presentation": h,
      onMouseDown: A,
      onKeyDown: D,
      children: /* @__PURE__ */ T(
        "div",
        {
          ref: u,
          role: b ? "menu" : "dialog",
          "aria-modal": b ? void 0 : "true",
          "aria-labelledby": x,
          "aria-describedby": i ? `${g}-description` : void 0,
          tabIndex: -1,
          "data-slot": "action-sheet",
          "data-state": a ? "open" : "closed",
          "data-presentation": h,
          "data-anchored": $ ? "true" : void 0,
          "data-side": _ == null ? void 0 : _.side,
          style: _ ? { top: _.top, left: _.left } : void 0,
          className: I("may-action-sheet", m),
          children: [
            /* @__PURE__ */ T("div", { className: "may-action-sheet__group", "data-slot": "scroll-area", children: [
              (n || i) && /* @__PURE__ */ T("div", { className: "may-action-sheet__header", children: [
                n && /* @__PURE__ */ e("span", { className: "may-action-sheet__title", id: `${g}-title`, children: n }),
                i && /* @__PURE__ */ e("span", { className: "may-action-sheet__description", id: `${g}-description`, children: i })
              ] }),
              v.map((f, c) => /* @__PURE__ */ e(
                de,
                {
                  action: f,
                  menu: b,
                  onClose: t
                },
                `${f.label}-${c}`
              ))
            ] }),
            !b && /* @__PURE__ */ e("div", { className: "may-action-sheet__group may-action-sheet__group--cancel", children: /* @__PURE__ */ e(ye, { label: l, onClose: t }) })
          ]
        }
      )
    }
  );
}
function de({ action: a, menu: t, onClose: r }) {
  const { pressProps: o } = W(a.disabled);
  return /* @__PURE__ */ T(
    "button",
    {
      ...o,
      type: "button",
      role: t ? "menuitem" : void 0,
      disabled: a.disabled,
      "data-slot": "action-sheet-action",
      "data-destructive": a.destructive ? "true" : void 0,
      className: "may-action-sheet__action may-hoverable",
      onClick: () => {
        a.onSelect(), r();
      },
      children: [
        /* @__PURE__ */ e("span", { className: "may-action-sheet__label", children: a.label }),
        a.icon && /* @__PURE__ */ e("span", { className: "may-action-sheet__icon", "aria-hidden": !0, children: a.icon })
      ]
    }
  );
}
function ye({ label: a, onClose: t }) {
  const { pressProps: r } = W();
  return /* @__PURE__ */ e(
    "button",
    {
      ...r,
      type: "button",
      "data-slot": "action-sheet-action",
      className: "may-action-sheet__action may-action-sheet__action--cancel may-hoverable",
      onClick: t,
      children: /* @__PURE__ */ e("span", { className: "may-action-sheet__label", children: a })
    }
  );
}
const pe = R("ActionSheet", ie), ue = [pe], ms = C("ActionSheet", me, ue), ve = ".may-grid{--may-grid-gap: var(--may-space-0);--may-grid-columns: 1;--may-grid-min: var(--may-space-20);display:grid;gap:var(--may-grid-gap);grid-template-columns:repeat(var(--may-grid-columns),minmax(0,1fr));min-width:0}.may-grid[data-auto-fill=true]{grid-template-columns:repeat(auto-fill,minmax(min(var(--may-grid-min),100%),1fr))}", he = (a) => `var(--may-space-${a})`, ge = Z(function({ columns: t = 1, minColumnWidth: r, gap: o = 0, className: n, style: i, children: l, ...s }, m) {
  const u = r !== void 0, y = { "--may-grid-gap": he(o) };
  return u ? y["--may-grid-min"] = typeof r == "number" ? `${r}px` : String(r) : y["--may-grid-columns"] = String(t), /* @__PURE__ */ e(
    "div",
    {
      ...s,
      ref: m,
      "data-slot": "grid",
      "data-auto-fill": u ? "true" : void 0,
      className: I("may-grid", n),
      style: { ...y, ...i },
      children: l
    }
  );
}), fe = R("Grid", ve), be = [fe], ds = C("Grid", ge, be), _e = '.may-icon-button{flex-shrink:0}.may-button.may-icon-button[data-size]{padding-inline:0}.may-icon-button[data-size=xs]{width:var(--may-control-h-xs)}.may-icon-button[data-size=sm]{width:var(--may-control-h-sm)}.may-icon-button[data-size=md]{width:var(--may-control-h-md)}.may-icon-button[data-size=lg]{width:var(--may-control-h-lg)}.may-icon-button[data-round=true][data-size]{border-radius:var(--may-radius-full)}.may-icon-button__glyph{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.may-icon-button__glyph>svg,.may-icon-button__glyph>svg[width="1em"]{width:1.25em;height:1.25em;display:block}.may-icon-button[data-size=xs]:after,.may-icon-button[data-size=sm]:after{content:"";position:absolute;inset-inline-start:50%;inset-block-start:50%;width:var(--may-control-h);height:var(--may-control-h);transform:translate(-50%,-50%)}', Oa = ".may-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:var(--may-space-2);border:0;border-radius:var(--may-radius-full);font-family:inherit;font-size:var(--may-text-body);font-weight:600;letter-spacing:var(--may-text-headline-tracking);line-height:1;white-space:nowrap;cursor:pointer;background:transparent;transition:background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-button:disabled{cursor:not-allowed;opacity:.35}.may-button[data-tone=tint]{--may-btn-solid: var(--may-color-primary);--may-btn-on-solid: var(--may-color-on-primary);--may-btn-text: var(--may-color-tint)}.may-button[data-tone=neutral]{--may-btn-solid: var(--may-label);--may-btn-on-solid: var(--may-bg-elevated);--may-btn-text: var(--may-color-text)}.may-button[data-tone=danger]{--may-btn-solid: var(--may-color-destructive);--may-btn-on-solid: var(--may-color-on-destructive);--may-btn-text: var(--may-color-danger)}.may-button[data-tone=success]{--may-btn-solid: var(--may-color-success);--may-btn-on-solid: var(--may-on-color);--may-btn-text: var(--may-color-success)}.may-button[data-tone=warning]{--may-btn-solid: var(--may-color-warning);--may-btn-on-solid: var(--may-label);--may-btn-text: var(--may-color-warning)}.may-button[data-variant=filled]{background:var(--may-btn-solid);color:var(--may-btn-on-solid)}.may-button[data-variant=tinted]{background:color-mix(in srgb,var(--may-btn-solid) 14%,transparent);color:var(--may-btn-text)}.may-button[data-variant=gray]{background:var(--may-color-fill-tertiary);color:var(--may-btn-text)}.may-button[data-variant=plain]{background:transparent;color:var(--may-btn-text)}@media(hover:hover)and (pointer:fine){.may-button[data-variant=filled]:hover:not(:disabled){background:color-mix(in srgb,var(--may-btn-solid) 88%,var(--may-label))}.may-button[data-variant=tinted]:hover:not(:disabled){background:color-mix(in srgb,var(--may-btn-solid) 22%,transparent)}.may-button[data-variant=gray]:hover:not(:disabled){background:var(--may-color-fill-secondary)}.may-button[data-variant=plain]:hover:not(:disabled){background:var(--may-color-fill-quaternary)}}.may-button[data-size=xs]{height:var(--may-control-h-xs);padding-inline:var(--may-space-3);font-size:var(--may-text-footnote);gap:var(--may-space-1)}.may-button[data-size=sm]{height:var(--may-control-h-sm);padding-inline:var(--may-space-4);font-size:var(--may-text-subheadline)}.may-button[data-size=md]{height:var(--may-control-h-md);padding-inline:var(--may-space-5)}.may-button[data-size=lg]{height:var(--may-control-h-lg);padding-inline:var(--may-space-6)}.may-button--pill{border-radius:var(--may-radius-full)}.may-button--full{width:100%}.may-button:has(>.may-button__icon){padding-inline:var(--may-space-4)}.may-button__icon{display:inline-flex;align-items:center;flex-shrink:0}.may-button__icon>svg{width:1.15em;height:1.15em;display:block}.may-button__label{display:inline-flex;align-items:center;justify-content:center;gap:var(--may-space-2)}.may-button__spinner{width:1.05em;height:1.05em;flex-shrink:0;border-radius:var(--may-radius-full);border:2px solid currentColor;border-top-color:transparent;animation:may-spin .7s linear infinite}@keyframes may-spin{to{transform:rotate(360deg)}}", xe = Z(function({
  children: t,
  asChild: r = !1,
  variant: o = "plain",
  tone: n = "tint",
  size: i = "md",
  round: l = !1,
  loading: s = !1,
  disabled: m,
  className: u,
  type: y = "button",
  ...g
}, v) {
  const p = m || s, { pressProps: _ } = W(p), d = (E) => s ? /* @__PURE__ */ e("span", { className: "may-button__spinner", "aria-hidden": !0 }) : /* @__PURE__ */ e("span", { className: "may-icon-button__glyph", "aria-hidden": !0, children: E }), k = {
    "data-slot": "icon-button",
    "data-variant": o,
    "data-tone": n,
    "data-size": i,
    "data-round": l ? "true" : void 0,
    className: I("may-button", "may-icon-button", "may-pressable", "may-hoverable", u)
  };
  return r ? st(
    t,
    { ...g, ..._, ref: v, ...k, "aria-busy": s || void 0, "aria-disabled": p || void 0 },
    d
  ) : /* @__PURE__ */ e(
    "button",
    {
      ...g,
      ..._,
      ref: v,
      type: y,
      disabled: p,
      "aria-busy": s || void 0,
      ...k,
      children: d(t)
    }
  );
}), we = R("IconButton", _e), ke = R("Button", Oa), ze = [ke, we], ys = C("IconButton", xe, ze), Ne = ".may-segmented{position:relative;display:inline-flex;width:fit-content;align-items:stretch;padding:2px;border-radius:var(--may-radius-full);isolation:isolate;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.may-segmented__track{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;border-radius:inherit;background:var(--may-color-fill-tertiary)}.may-segmented--full{display:flex;width:100%}.may-segmented.may-segmented--full .may-segmented__segment{flex:1 1 0}.may-segmented__thumb-layout{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;pointer-events:none}.may-segmented__thumb{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;overflow:hidden;border-radius:var(--may-radius-full);background:var(--may-color-primary);color:var(--may-color-on-primary);font-weight:600;box-shadow:var(--may-shadow-2xs)}.may-segmented__thumb-label{max-width:100%;overflow:hidden;padding-inline:var(--may-space-1);text-overflow:ellipsis;white-space:nowrap}.may-segmented[data-dragging=true] .may-segmented__thumb{box-shadow:var(--may-shadow-xs)}.may-segmented .may-segmented__segment{position:relative;z-index:1;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;min-width:0;padding-inline:var(--may-space-4);border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-secondary);font:inherit;font-weight:500;white-space:nowrap;cursor:pointer}.may-segmented__label{position:relative;z-index:1;transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-segmented[data-dragging=true] .may-segmented__segment[aria-selected=true]{color:var(--may-color-text-secondary)}.may-segmented[data-dragging=true] .may-segmented__segment[data-hit=true]{color:var(--may-color-on-primary)}.may-segmented__segment[aria-selected=true]{z-index:2;color:var(--may-color-on-primary);font-weight:600}.may-segmented__segment[aria-selected=true]>.may-segmented__label{opacity:0}.may-segmented[data-dragging=true] .may-segmented__segment[aria-selected=true]>.may-segmented__label{opacity:1}.may-segmented[data-dragging=true] .may-segmented__segment[data-hit=true]>.may-segmented__label{opacity:0}.may-segmented__segment:disabled{opacity:.35;cursor:not-allowed}.may-segmented[data-dragging=true] .may-segmented__segment{cursor:grabbing}.may-segmented[data-size=sm]{height:var(--may-control-h-sm)}.may-segmented[data-size=sm] .may-segmented__segment{font-size:var(--may-text-footnote)}.may-segmented[data-size=md]{height:var(--may-control-h-md)}.may-segmented[data-size=md] .may-segmented__segment{font-size:var(--may-text-subheadline)}.may-segmented[data-size=lg]{height:var(--may-control-h-lg)}.may-segmented[data-size=lg] .may-segmented__segment{font-size:var(--may-text-body)}", lt = 1.16, $e = 4, Xa = { type: "tween", duration: 0.22, ease: Ut }, Se = { type: "tween", duration: 0.14, ease: "easeOut" }, Ee = {
  resting: { scale: 1 },
  pressed: { scale: lt }
};
function Ae({
  options: a = [],
  value: t,
  defaultValue: r,
  onValueChange: o,
  size: n = "md",
  fullWidth: i = !1,
  className: l,
  ...s
}) {
  var S;
  const [m, u] = U(r ?? ((S = a[0]) == null ? void 0 : S.value)), [y, g] = U(!1), [v, p] = U(null), _ = t ?? m, d = ta(), k = B(null), E = B([]), b = B(-1), $ = B(null), P = qt(), D = Math.max(
    0,
    a.findIndex((N) => N.value === _)
  ), A = (N) => {
    N !== _ && (t === void 0 && u(N), o == null || o(N));
  }, h = () => {
    var N;
    E.current = [...((N = k.current) == null ? void 0 : N.querySelectorAll(".may-segmented__segment")) ?? []].map((L, j) => {
      const F = L.getBoundingClientRect();
      return { index: j, left: F.left, right: F.right };
    });
  }, x = (N) => {
    var L;
    return ((L = E.current.find(({ left: j, right: F }) => N >= j && N <= F)) == null ? void 0 : L.index) ?? -1;
  }, f = (N, L) => {
    var j;
    (j = a[L]) != null && j.disabled || (h(), b.current = L, $.current = { index: L, x: N.clientX, y: N.clientY });
  }, c = (N) => {
    const L = $.current;
    L && (Math.hypot(N.clientX - L.x, N.clientY - L.y) < $e || ($.current = null, p(L.index), P.start(N, { snapToCursor: !0 })));
  }, w = () => {
    $.current = null;
  }, M = (N, L) => {
    var F;
    const j = x(L.point.x);
    j < 0 || (F = a[j]) != null && F.disabled || j === b.current || (b.current = j, p(j));
  }, z = () => {
    var L;
    const N = b.current;
    g(!1), p(null), N >= 0 && !((L = a[N]) != null && L.disabled) && A(a[N].value);
  }, O = (N) => {
    var F, q, H;
    const L = N.key === "ArrowRight" ? 1 : N.key === "ArrowLeft" ? -1 : 0;
    if (!L) return;
    N.preventDefault();
    let j = D;
    for (let K = 0; K < a.length && (j = (j + L + a.length) % a.length, !!((F = a[j]) != null && F.disabled)); K++)
      ;
    A(a[j].value), (H = (q = k.current) == null ? void 0 : q.querySelectorAll(".may-segmented__segment")[j]) == null || H.focus();
  };
  return /* @__PURE__ */ e(Ht, { reducedMotion: "user", children: /* @__PURE__ */ e(Gt, { id: d, children: /* @__PURE__ */ T(
    ga.div,
    {
      ...s,
      ref: k,
      role: "tablist",
      "data-slot": "segmented",
      "data-size": n,
      "data-dragging": y ? "true" : void 0,
      className: I("may-segmented", i && "may-segmented--full", l),
      onKeyDown: O,
      onPointerMove: c,
      onPointerUp: w,
      onPointerCancel: w,
      initial: "resting",
      animate: "resting",
      whileTap: "pressed",
      children: [
        /* @__PURE__ */ e(
          ga.span,
          {
            className: "may-segmented__track",
            animate: { scale: y ? 0.98 : 1 },
            transition: Xa,
            "aria-hidden": !0
          }
        ),
        a.map((N, L) => {
          var j;
          return /* @__PURE__ */ T(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": N.value === _,
              tabIndex: N.value === _ ? 0 : -1,
              disabled: N.disabled,
              "data-hit": y && v === L ? "true" : void 0,
              onPointerDown: (F) => f(F, L),
              onClick: () => A(N.value),
              className: "may-segmented__segment",
              children: [
                L === D && /* @__PURE__ */ e(
                  ga.span,
                  {
                    layoutId: `may-segmented-thumb-${d}`,
                    className: "may-segmented__thumb-layout",
                    transition: { layout: Xa },
                    "aria-hidden": !0,
                    children: /* @__PURE__ */ e(
                      ga.span,
                      {
                        className: "may-segmented__thumb",
                        variants: Ee,
                        transition: { scale: Se },
                        drag: "x",
                        dragControls: P,
                        dragListener: !1,
                        dragConstraints: k,
                        dragElastic: 0.12,
                        dragMomentum: !1,
                        dragSnapToOrigin: !0,
                        whileDrag: { scale: lt },
                        onDragStart: () => g(!0),
                        onDrag: M,
                        onDragEnd: z,
                        children: /* @__PURE__ */ e("span", { className: "may-segmented__thumb-label", children: (j = a[v ?? D]) == null ? void 0 : j.label })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e("span", { className: "may-segmented__label", children: N.label })
              ]
            },
            N.value
          );
        })
      ]
    }
  ) }) });
}
const Te = R("SegmentedControl", Ne), Ie = [Te], ps = C("SegmentedControl", Ae, Ie), Ce = ".may-stack{--may-stack-gap: var(--may-space-0);display:flex;gap:var(--may-stack-gap);min-width:0}.may-stack--wrap{flex-wrap:wrap}.may-stack--full{width:100%}.may-stack[data-direction=row]{flex-direction:row}.may-stack[data-direction=column]{flex-direction:column}.may-stack[data-align=start]{align-items:flex-start}.may-stack[data-align=center]{align-items:center}.may-stack[data-align=end]{align-items:flex-end}.may-stack[data-align=stretch]{align-items:stretch}.may-stack[data-align=baseline]{align-items:baseline}.may-stack[data-justify=start]{justify-content:flex-start}.may-stack[data-justify=center]{justify-content:center}.may-stack[data-justify=end]{justify-content:flex-end}.may-stack[data-justify=between]{justify-content:space-between}.may-stack[data-justify=around]{justify-content:space-around}.may-stack[data-justify=evenly]{justify-content:space-evenly}", De = (a) => `var(--may-space-${a})`, Pe = Z(function({
  direction: t = "column",
  gap: r = 0,
  align: o = "stretch",
  justify: n = "start",
  wrap: i = !1,
  fullWidth: l = !1,
  className: s,
  style: m,
  children: u,
  ...y
}, g) {
  return /* @__PURE__ */ e(
    "div",
    {
      ...y,
      ref: g,
      "data-slot": "stack",
      "data-direction": t,
      "data-align": o,
      "data-justify": n,
      className: I(
        "may-stack",
        i && "may-stack--wrap",
        l && "may-stack--full",
        s
      ),
      style: { "--may-stack-gap": De(r), ...m },
      children: u
    }
  );
}), Me = R("Stack", Ce), Le = [Me], us = C("Stack", Pe, Le), qa = ".may-text{margin:0;font-family:var(--may-font-sans);font-size:var(--may-txt-size, var(--may-text-body));line-height:var(--may-txt-leading, var(--may-text-body-leading));letter-spacing:var(--may-txt-tracking, var(--may-text-body-tracking));font-weight:var(--may-txt-weight, var(--may-text-body-weight));color:var(--may-txt-color, var(--may-color-text));overflow-wrap:break-word;text-wrap:pretty;transition:color var(--may-duration-color) var(--may-ease-out)}.may-text[data-variant=large-title]{--may-txt-size: var(--may-text-large-title);--may-txt-leading: var(--may-text-large-title-leading);--may-txt-tracking: var(--may-text-large-title-tracking);--may-txt-weight: var(--may-text-large-title-weight)}.may-text[data-variant=title-1]{--may-txt-size: var(--may-text-title-1);--may-txt-leading: var(--may-text-title-1-leading);--may-txt-tracking: var(--may-text-title-1-tracking);--may-txt-weight: var(--may-text-title-1-weight)}.may-text[data-variant=title-2]{--may-txt-size: var(--may-text-title-2);--may-txt-leading: var(--may-text-title-2-leading);--may-txt-tracking: var(--may-text-title-2-tracking);--may-txt-weight: var(--may-text-title-2-weight)}.may-text[data-variant=title-3]{--may-txt-size: var(--may-text-title-3);--may-txt-leading: var(--may-text-title-3-leading);--may-txt-tracking: var(--may-text-title-3-tracking);--may-txt-weight: var(--may-text-title-3-weight)}.may-text[data-variant=headline]{--may-txt-size: var(--may-text-headline);--may-txt-leading: var(--may-text-headline-leading);--may-txt-tracking: var(--may-text-headline-tracking);--may-txt-weight: var(--may-text-headline-weight)}.may-text[data-variant=body]{--may-txt-size: var(--may-text-body);--may-txt-leading: var(--may-text-body-leading);--may-txt-tracking: var(--may-text-body-tracking);--may-txt-weight: var(--may-text-body-weight)}.may-text[data-variant=callout]{--may-txt-size: var(--may-text-callout);--may-txt-leading: var(--may-text-callout-leading);--may-txt-tracking: var(--may-text-callout-tracking);--may-txt-weight: var(--may-text-callout-weight)}.may-text[data-variant=subheadline]{--may-txt-size: var(--may-text-subheadline);--may-txt-leading: var(--may-text-subheadline-leading);--may-txt-tracking: var(--may-text-subheadline-tracking);--may-txt-weight: var(--may-text-subheadline-weight)}.may-text[data-variant=footnote]{--may-txt-size: var(--may-text-footnote);--may-txt-leading: var(--may-text-footnote-leading);--may-txt-tracking: var(--may-text-footnote-tracking);--may-txt-weight: var(--may-text-footnote-weight)}.may-text[data-variant=caption-1]{--may-txt-size: var(--may-text-caption-1);--may-txt-leading: var(--may-text-caption-1-leading);--may-txt-tracking: var(--may-text-caption-1-tracking);--may-txt-weight: var(--may-text-caption-1-weight)}.may-text[data-variant=caption-2]{--may-txt-size: var(--may-text-caption-2);--may-txt-leading: var(--may-text-caption-2-leading);--may-txt-tracking: var(--may-text-caption-2-tracking);--may-txt-weight: var(--may-text-caption-2-weight)}.may-text[data-tone=default]{--may-txt-color: var(--may-color-text)}.may-text[data-tone=secondary]{--may-txt-color: var(--may-color-text-secondary)}.may-text[data-tone=tertiary]{--may-txt-color: var(--may-color-text-tertiary)}.may-text[data-tone=tint]{--may-txt-color: var(--may-color-tint)}.may-text[data-tone=danger]{--may-txt-color: var(--may-color-danger)}.may-text[data-tone=success]{--may-txt-color: var(--may-color-success)}.may-text[data-weight=regular]{--may-txt-weight: 400}.may-text[data-weight=medium]{--may-txt-weight: 500}.may-text[data-weight=semibold]{--may-txt-weight: 600}.may-text[data-weight=bold]{--may-txt-weight: 700}.may-text[data-align=start]{text-align:start}.may-text[data-align=center]{text-align:center}.may-text[data-align=end]{text-align:end}.may-text[data-mono=true]{font-family:var(--may-font-mono);font-variant-numeric:tabular-nums;font-size:calc(var(--may-txt-size, var(--may-text-body)) * .94)}.may-text[data-clamp=true]{--may-txt-clamp: 2;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--may-txt-clamp);line-clamp:var(--may-txt-clamp);overflow:hidden;min-width:0}", Re = Z(function({
  children: t,
  variant: r = "body",
  tone: o = "default",
  weight: n,
  align: i,
  clamp: l,
  mono: s = !1,
  as: m,
  className: u,
  style: y,
  ...g
}, v) {
  return /* @__PURE__ */ e(
    m ?? "p",
    {
      ...g,
      ref: v,
      "data-slot": "text",
      "data-variant": r,
      "data-tone": o,
      "data-weight": n,
      "data-align": i,
      "data-mono": s ? "true" : void 0,
      "data-clamp": l != null ? "true" : void 0,
      className: I("may-text", u),
      style: l != null ? { ...y, "--may-txt-clamp": l } : y,
      children: t
    }
  );
}), je = R("Text", qa), Be = [je], vs = C("Text", Re, Be), Fe = '.may-toast{--may-toast-width: 24rem;position:relative;display:flex;align-items:center;gap:var(--may-space-3);max-width:min(100%,var(--may-toast-width));min-height:var(--may-control-h);padding-block:var(--may-space-2);padding-inline:var(--may-space-4);border-radius:var(--may-radius-full);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-lg);pointer-events:auto;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;animation:may-toast-in var(--may-duration-settle) var(--may-ease-out);transition:transform var(--may-duration-settle) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out)}.may-toast[data-position^=top]{--may-toast-enter: -100%}.may-toast[data-position^=bottom]{--may-toast-enter: 100%}.may-toast:has(button){padding-inline-end:var(--may-space-2)}.may-toast:has(.may-toast__description){border-radius:var(--may-radius-card)}.may-toast[data-dismissible=true]{touch-action:none}.may-toast[data-swiping=true]{transition:none;animation:none;transform:scale(.97)}.may-toast[data-entered=true]:not([data-state=closed]){animation:none}.may-toast[data-state=closed]{animation:may-toast-out var(--may-duration-sheet-out) var(--may-ease-out) forwards;pointer-events:none}.may-toast[data-swiped=true]{animation:none}.may-toast[data-tone=tint]{--may-toast-accent: var(--may-color-tint)}.may-toast[data-tone=neutral]{--may-toast-accent: var(--may-color-text-secondary)}.may-toast[data-tone=success]{--may-toast-accent: var(--may-color-success)}.may-toast[data-tone=warning]{--may-toast-accent: var(--may-color-warning)}.may-toast[data-tone=danger]{--may-toast-accent: var(--may-color-danger)}.may-toast__icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-control-h-xs);height:var(--may-control-h-xs);border-radius:var(--may-radius-full);background:color-mix(in srgb,var(--may-toast-accent) 16%,transparent);color:var(--may-toast-accent)}.may-toast__icon>svg{width:55%;height:55%;display:block}.may-toast__dot{flex-shrink:0;width:var(--may-space-2);height:var(--may-space-2);border-radius:var(--may-radius-full);background:var(--may-toast-accent)}.may-toast__text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}.may-toast__title{font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text)}.may-toast__description{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text-secondary)}.may-toast__action{flex-shrink:0;margin-inline-start:var(--may-space-1)}.may-toast__action:after{content:"";position:absolute;inset-inline:0;inset-block:calc((var(--may-control-h-sm) - var(--may-control-h)) / 2)}.may-toast__close{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-control-h);height:var(--may-control-h);margin-block:calc((var(--may-control-h-xs) - var(--may-control-h)) / 2);padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-secondary);cursor:pointer}.may-toast__close-chip{display:inline-flex;align-items:center;justify-content:center;width:var(--may-control-h-xs);height:var(--may-control-h-xs);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-toast__close-chip>svg{width:55%;height:55%;display:block}.may-toast__close[data-pressed=true] .may-toast__close-chip{background:var(--may-color-fill)}@media(hover:hover)and (pointer:fine){.may-toast__close:hover .may-toast__close-chip{background:var(--may-color-fill-secondary)}}@keyframes may-toast-in{0%{opacity:0;transform:translate3d(0,var(--may-toast-enter, 100%),0) scale(.92)}to{opacity:1;transform:translateZ(0) scale(1)}}@keyframes may-toast-out{0%{opacity:1;transform:translateZ(0) scale(1)}to{opacity:0;transform:translate3d(0,calc(var(--may-toast-enter, 100%) * .4),0) scale(.94)}}', Oe = Z(function({
  children: t,
  asChild: r = !1,
  variant: o = "filled",
  tone: n = "tint",
  size: i = "md",
  pill: l = !1,
  loading: s = !1,
  fullWidth: m = !1,
  leadingIcon: u,
  trailingIcon: y,
  disabled: g,
  className: v,
  type: p = "button",
  ..._
}, d) {
  const k = g || s, { pressProps: E } = W(k), b = (P) => /* @__PURE__ */ T(pa, { children: [
    s && /* @__PURE__ */ e("span", { className: "may-button__spinner", "aria-hidden": !0 }),
    u && !s && /* @__PURE__ */ e("span", { className: "may-button__icon", "aria-hidden": !0, children: u }),
    P != null && /* @__PURE__ */ e("span", { className: "may-button__label", children: P }),
    y && /* @__PURE__ */ e("span", { className: "may-button__icon", "aria-hidden": !0, children: y })
  ] }), $ = {
    "data-slot": "button",
    "data-variant": o,
    "data-tone": n,
    "data-size": i,
    "data-press-squish": "true",
    className: I(
      "may-button",
      "may-pressable",
      "may-hoverable",
      l && "may-button--pill",
      m && "may-button--full",
      v
    )
  };
  return r ? st(
    t,
    {
      ..._,
      ...E,
      ref: d,
      ...$,
      "aria-busy": s || void 0,
      // `disabled` is not a thing on an anchor; announce it instead.
      "aria-disabled": k || void 0
    },
    b
  ) : /* @__PURE__ */ e(
    "button",
    {
      ..._,
      ...E,
      ref: d,
      type: p,
      disabled: k,
      "aria-busy": s || void 0,
      ...$,
      children: b(t)
    }
  );
}), qe = R("Button", Oa), He = [qe], La = C("Button", Oe, He), Ge = 300, Ue = 3;
let aa = [], ct = Ue, Ye = 0, da = 0, xa = !1;
const Ra = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Map(), We = [];
var ot;
const Ke = typeof process > "u" || ((ot = process.env) == null ? void 0 : ot.NODE_ENV) !== "production";
function hs() {
  return da += 1, xa = !1, () => {
    da = Math.max(0, da - 1);
  };
}
function Xe() {
  !Ke || da > 0 || xa || queueMicrotask(() => {
    da > 0 || xa || (xa = !0, console.warn("May UI: toast() requires an outer MayProvider with hosting enabled"));
  });
}
function Aa(a) {
  aa = a;
  for (const t of Ra) t();
}
function Ze(a) {
  return Ra.add(a), () => {
    Ra.delete(a);
  };
}
const Je = () => aa, Qe = () => We;
function mt(a) {
  const t = ka.get(a);
  t && (clearTimeout(t), ka.delete(a));
}
function Ve(a) {
  mt(a), ka.set(
    a,
    setTimeout(() => {
      ka.delete(a), Aa(Ta(aa.filter((t) => t.id !== a)));
    }, Ge)
  );
}
function Ta(a) {
  let t = 0;
  return a.map((r) => {
    if (r.dismissed) return r.pending ? { ...r, pending: !1 } : r;
    const o = t >= ct;
    return o || (t += 1), !!r.pending === o ? r : { ...r, pending: o };
  });
}
function Ha(a, t = {}) {
  Xe();
  const { id: r = `may-toast-${++Ye}`, ...o } = t, n = { ...o, id: r, title: a, createdAt: Date.now() }, i = aa.findIndex((l) => l.id === r);
  return mt(r), Aa(
    Ta(
      i === -1 ? aa.concat(n) : aa.map((l) => l.id === r ? n : l)
    )
  ), r;
}
const ya = (a) => (t, r = {}) => Ha(t, { ...r, tone: a }), Za = (a, t) => typeof a == "function" ? a(t) : a;
function ar(a, t) {
  const r = Ha(t.loading, { duration: 0 }), o = a.then(
    (n) => (ya("success")(Za(t.success, n), { id: r }), n),
    (n) => {
      throw ya("danger")(Za(t.error, n), { id: r }), n;
    }
  );
  return o.catch(() => {
  }), { unwrap: () => o };
}
const tr = Object.assign(Ha, {
  success: ya("success"),
  warning: ya("warning"),
  danger: ya("danger"),
  promise: ar
});
function dt(a) {
  var r;
  const t = aa.find((o) => o.id === a);
  !t || t.dismissed || (Ve(a), Aa(Ta(aa.map((o) => o.id === a ? { ...o, dismissed: !0 } : o))), (r = t.onDismiss) == null || r.call(t));
}
function er() {
  for (const a of aa) a.dismissed || dt(a.id);
}
function gs(a) {
  ct = Math.max(1, a), Aa(Ta(aa));
}
function fs() {
  const a = Ct(Ze, Je, Qe);
  return ua(() => ({ toasts: a, toast: tr, dismiss: dt, dismissAll: er }), [a]);
}
const rr = 4e3, or = 0.4, nr = 0.45, ir = 180, sr = 0.3, lr = 'button, a, input, select, textarea, [role="button"]';
function cr({
  title: a,
  description: t,
  tone: r = "neutral",
  icon: o,
  action: n,
  duration: i = rr,
  position: l = "bottom-center",
  dismissible: s = !0,
  closeButton: m = !0,
  closeLabel: u = "Dismiss",
  closed: y = !1,
  onDismiss: g,
  className: v,
  ...p
}) {
  const _ = B(null), [d, k] = U(!1), [E, b] = U(!1), [$, P] = U(!1), [D, A] = U(!1), { pressProps: h } = W(), x = l.startsWith("top") ? "top" : "bottom", f = d || E || $, c = B(g);
  Y(() => {
    c.current = g;
  });
  const w = B(i);
  Y(() => {
    w.current = i;
  }, [i]), Y(() => {
    if (i <= 0 || f || y) return;
    const z = Date.now(), O = setTimeout(() => {
      var S;
      return (S = c.current) == null ? void 0 : S.call(c);
    }, w.current);
    return () => {
      clearTimeout(O), w.current = Math.max(0, w.current - (Date.now() - z));
    };
  }, [i, f, y]), Y(() => {
    const z = _.current;
    if (!z || !s || y) return;
    let O = !1;
    const S = (F) => {
      var H;
      const q = F.target;
      O = !!((H = q == null ? void 0 : q.closest) != null && H.call(q, lr));
    };
    z.addEventListener("pointerdown", S, !0);
    let N = null;
    const L = ja(z, {
      onStart: () => {
        N = null, O || P(!0);
      },
      onMove: ({ dx: F, dy: q }) => {
        if (O) return;
        N === null && (F !== 0 || q !== 0) && (N = F !== 0 ? "x" : "y");
        const H = x === "top" ? Ka(q, Number.NEGATIVE_INFINITY, 0) : Ka(q, 0, Number.POSITIVE_INFINITY);
        z.style.transform = `translate3d(${F}px, ${H}px, 0)`, z.style.opacity = String(
          Math.max(sr, 1 - (Math.abs(F) + Math.abs(H)) / ir)
        );
      },
      onEnd: ({ dx: F, dy: q, vx: H, vy: K }) => {
        var ma;
        if (P(!1), O || N === null) return;
        const Q = N === "x", J = Q ? F : q, V = Q ? H : K, na = Q ? z.offsetWidth : z.offsetHeight, ea = J + Pt(V), ia = Math.abs(ea) > na * or || Math.abs(V) > nr, ca = Q || (x === "top" ? ea < 0 : ea > 0);
        if (!ia || !ca) {
          z.style.transform = "", z.style.opacity = "";
          return;
        }
        z.dataset.swiped = "true", z.style.transition = "transform var(--may-duration-sheet-out) var(--may-ease-out), opacity var(--may-duration-sheet-out) var(--may-ease-out)";
        const ra = ea < 0 ? -1 : 1;
        z.style.transform = Q ? `translate3d(${ra * 100}%, 0, 0)` : `translate3d(0, ${ra * 100}%, 0)`, z.style.opacity = "0", (ma = c.current) == null || ma.call(c);
      }
    }), j = (F) => {
      O && z.hasPointerCapture(F.pointerId) && z.releasePointerCapture(F.pointerId);
    };
    return z.addEventListener("pointerdown", j), () => {
      z.removeEventListener("pointerdown", S, !0), z.removeEventListener("pointerdown", j), L();
    };
  }, [s, y, x]);
  const M = r === "danger";
  return /* @__PURE__ */ T(
    "div",
    {
      ...p,
      ref: _,
      role: M ? "alert" : "status",
      "aria-live": M ? "assertive" : "polite",
      "aria-atomic": "true",
      "data-slot": "toast",
      "data-tone": r,
      "data-position": l,
      "data-state": y ? "closed" : "open",
      "data-dismissible": s ? "true" : void 0,
      "data-swiping": $ ? "true" : void 0,
      "data-entered": D ? "true" : void 0,
      className: I("may-toast", v),
      onAnimationEnd: (z) => {
        z.target === z.currentTarget && z.animationName === "may-toast-in" && A(!0);
      },
      onPointerEnter: (z) => {
        z.pointerType === "mouse" && k(!0);
      },
      onPointerLeave: (z) => {
        z.pointerType === "mouse" && k(!1);
      },
      onFocus: () => b(!0),
      onBlur: () => b(!1),
      children: [
        o ? /* @__PURE__ */ e("span", { className: "may-toast__icon", "aria-hidden": !0, children: o }) : r !== "neutral" && /* @__PURE__ */ e("span", { className: "may-toast__dot", "aria-hidden": !0 }),
        /* @__PURE__ */ T("span", { className: "may-toast__text", children: [
          /* @__PURE__ */ e("span", { className: "may-toast__title", children: a }),
          t && /* @__PURE__ */ e("span", { className: "may-toast__description", children: t })
        ] }),
        n && /* @__PURE__ */ e(
          La,
          {
            variant: "plain",
            size: "sm",
            tone: r === "neutral" ? "tint" : r,
            className: "may-toast__action",
            onClick: () => {
              var z;
              n.onClick(), n.dismiss !== !1 && ((z = c.current) == null || z.call(c));
            },
            children: n.label
          }
        ),
        s && m && /* @__PURE__ */ e(
          "button",
          {
            ...h,
            type: "button",
            onClick: () => {
              var z;
              return (z = c.current) == null ? void 0 : z.call(c);
            },
            "aria-label": u,
            "data-slot": "toast-close",
            className: "may-toast__close may-pressable may-hoverable",
            children: /* @__PURE__ */ e("span", { className: "may-toast__close-chip", "aria-hidden": !0, children: /* @__PURE__ */ e(ha, { focusable: "false" }) })
          }
        )
      ]
    }
  );
}
const mr = R("Toast", Fe), dr = R("Button", Oa), yr = [dr, mr], bs = C("Toast", cr, yr), pr = '.may-toolbar{position:relative;display:flex;align-items:center;gap:var(--may-space-2);width:100%;min-width:0;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-space-4);color:var(--may-color-text)}.may-toolbar[data-align=start]{justify-content:flex-start}.may-toolbar[data-align=center]{justify-content:center}.may-toolbar[data-align=end]{justify-content:flex-end}.may-toolbar[data-align=between]{justify-content:space-between}.may-toolbar[data-variant=surface]{background:var(--may-color-surface)}.may-toolbar[data-sticky=true]{position:sticky;z-index:var(--may-z-sticky)}.may-toolbar[data-sticky=true][data-placement=top]{inset-block-start:0}.may-toolbar[data-sticky=true][data-placement=bottom]{inset-block-end:0}.may-toolbar[data-separator=true]:before{content:"";position:absolute;inset-inline:0;height:1px;background:var(--may-color-separator);pointer-events:none}.may-toolbar[data-separator=true][data-placement=top]:before{inset-block-end:0}.may-toolbar[data-separator=true][data-placement=bottom]:before{inset-block-start:0}@media(min-resolution:2dppx){.may-toolbar[data-separator=true]:before{height:var(--may-hairline)}}.may-toolbar[data-safe-area=true]{padding-inline:calc(var(--may-space-4) + var(--may-inset-left)) calc(var(--may-space-4) + var(--may-inset-right))}.may-toolbar[data-safe-area=true][data-placement=bottom]{padding-block-end:calc(var(--may-space-2) + var(--may-inset-bottom))}.may-toolbar[data-safe-area=true][data-placement=top]{padding-block-start:calc(var(--may-space-2) + var(--may-inset-top))}.may-toolbar__spacer{flex:1 1 auto;min-width:0}.may-toolbar[data-align=between]:has(>.may-toolbar__spacer){justify-content:flex-start}', Ja = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]):not([disabled])', ur = 'input, textarea, select, [contenteditable="true"], [role="tablist"], [role="slider"], [role="radiogroup"], [role="listbox"]';
function vr({
  children: a,
  placement: t = "bottom",
  sticky: r = !1,
  align: o = "between",
  separator: n = !1,
  variant: i,
  safeArea: l = !1,
  className: s,
  onKeyDown: m,
  ...u
}) {
  const y = B(null), g = i ?? (r ? "surface" : "plain"), v = (p) => {
    var $;
    if (m == null || m(p), p.defaultPrevented || p.altKey || p.metaKey || p.ctrlKey) return;
    const _ = p.target;
    if (_.closest(ur)) return;
    const d = Array.from((($ = y.current) == null ? void 0 : $.querySelectorAll(Ja)) ?? []), k = d.indexOf(_.closest(Ja) ?? _);
    if (d.length === 0 || k === -1) return;
    const E = p.key === "ArrowRight" ? 1 : p.key === "ArrowLeft" ? -1 : 0, b = E !== 0 ? (k + E + d.length) % d.length : p.key === "Home" ? 0 : p.key === "End" ? d.length - 1 : -1;
    b !== -1 && (p.preventDefault(), d[b].focus());
  };
  return /* @__PURE__ */ e(
    "div",
    {
      ...u,
      ref: y,
      role: "toolbar",
      "data-slot": "toolbar",
      "data-variant": g,
      "data-placement": t,
      "data-align": o,
      "data-sticky": r ? "true" : void 0,
      "data-separator": n ? "true" : void 0,
      "data-safe-area": l ? "true" : void 0,
      className: I("may-toolbar", s),
      onKeyDown: v,
      children: a
    }
  );
}
function hr() {
  return /* @__PURE__ */ e("span", { "data-slot": "toolbar-spacer", className: "may-toolbar__spacer", "aria-hidden": !0 });
}
const gr = R("Toolbar", pr), yt = [gr], _s = C("Toolbar", vr, yt), xs = C("ToolbarSpacer", hr, yt), fr = ".may-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-avatar-size);height:var(--may-avatar-size);overflow:hidden;background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-family:inherit;font-weight:600;line-height:1;vertical-align:middle;-webkit-user-select:none;user-select:none}.may-avatar[data-shape=circle]{border-radius:var(--may-radius-full)}.may-avatar[data-shape=square]{border-radius:var(--may-radius-squircle)}.may-avatar__image{width:100%;height:100%;display:block;object-fit:cover}.may-avatar__initials{font-size:calc(var(--may-avatar-size) * .4);letter-spacing:var(--may-text-headline-tracking)}.may-avatar__glyph{display:inline-flex;align-items:center;justify-content:center}.may-avatar__glyph>svg{width:calc(var(--may-avatar-size) * .62);height:calc(var(--may-avatar-size) * .62);display:block}.may-avatar[data-size=xs]{--may-avatar-size: calc(var(--may-control-h) * .55)}.may-avatar[data-size=sm]{--may-avatar-size: calc(var(--may-control-h) * .73)}.may-avatar[data-size=md]{--may-avatar-size: var(--may-control-h)}.may-avatar[data-size=lg]{--may-avatar-size: calc(var(--may-control-h) * 1.36)}.may-avatar[data-size=xl]{--may-avatar-size: calc(var(--may-control-h) * 2)}.may-avatar[data-hue]{color:var(--may-color-on-primary)}.may-avatar[data-hue=blue]{background:var(--may-grad-blue)}.may-avatar[data-hue=indigo]{background:var(--may-grad-indigo)}.may-avatar[data-hue=purple]{background:var(--may-grad-purple)}.may-avatar[data-hue=pink]{background:var(--may-grad-pink)}.may-avatar[data-hue=teal]{background:var(--may-grad-teal)}.may-avatar[data-hue=green]{background:var(--may-grad-green)}.may-avatar[data-hue=orange]{background:var(--may-grad-orange)}.may-avatar[data-hue=gray]{background:var(--may-grad-gray)}.may-avatar-group{display:inline-flex;align-items:center}.may-avatar-group>*{--may-avatar-lap: calc(var(--may-avatar-size) * .3);--may-avatar-cut-gap: calc(var(--may-avatar-size) * .055)}.may-avatar-group>*+*{margin-inline-start:calc(var(--may-avatar-lap) * -1)}.may-avatar-group>*:not(:last-child){--may-avatar-cutout: radial-gradient( circle calc(var(--may-avatar-size) * .5 + var(--may-avatar-cut-gap)) at calc(var(--may-avatar-size) * 1.5 - var(--may-avatar-lap)) 50%, transparent 100%, var(--may-color-text) 100% );-webkit-mask-image:var(--may-avatar-cutout);mask-image:var(--may-avatar-cutout)}.may-avatar--more{background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-size:calc(var(--may-avatar-size) * .34);font-variant-numeric:tabular-nums}", Qa = ["blue", "indigo", "purple", "pink", "teal", "green", "orange", "gray"];
function br(a) {
  const t = a.trim().split(/\s+/).filter(Boolean);
  return t.length === 0 ? "" : t.length === 1 ? t[0].slice(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
function _r(a) {
  let t = 2166136261;
  for (let r = 0; r < a.length; r++)
    t ^= a.charCodeAt(r), t = Math.imul(t, 16777619) >>> 0;
  return Qa[t % Qa.length];
}
function xr({
  name: a,
  src: t,
  alt: r,
  size: o = "md",
  shape: n = "circle",
  fallback: i,
  hue: l,
  className: s,
  "aria-label": m,
  ...u
}) {
  const [y, g] = U(!1);
  Y(() => g(!1), [t]);
  const v = !!t && !y, p = a ? br(a) : "", _ = r ?? a ?? m;
  return /* @__PURE__ */ e(
    "span",
    {
      ...u,
      "data-slot": "avatar",
      "data-size": o,
      "data-shape": n,
      "data-hue": !v && p ? l ?? _r(a ?? "") : void 0,
      role: !v && _ ? "img" : void 0,
      "aria-label": !v && _ ? _ : void 0,
      className: I("may-avatar", s),
      children: v ? /* @__PURE__ */ e(
        "img",
        {
          className: "may-avatar__image",
          src: t,
          alt: _ ?? "",
          draggable: !1,
          onError: () => g(!0)
        }
      ) : p ? /* @__PURE__ */ e("span", { className: "may-avatar__initials", "aria-hidden": !0, children: p }) : /* @__PURE__ */ e("span", { className: "may-avatar__glyph", "aria-hidden": !0, children: i ?? /* @__PURE__ */ e(Yt, { "aria-hidden": !0, focusable: "false" }) })
    }
  );
}
function wr({
  children: a,
  max: t = 4,
  size: r = "md",
  className: o,
  ...n
}) {
  const i = nt.toArray(a).filter(
    (m) => za(m)
  ), l = i.slice(0, t), s = i.length - l.length;
  return /* @__PURE__ */ T(
    "div",
    {
      ...n,
      "data-slot": "avatar-group",
      "data-size": r,
      className: I("may-avatar-group", o),
      children: [
        l.map(
          (m, u) => it(m, { key: u, size: m.props.size ?? r })
        ),
        s > 0 && /* @__PURE__ */ e(
          "span",
          {
            "data-slot": "avatar-more",
            "data-size": r,
            "data-shape": "circle",
            className: "may-avatar may-avatar--more",
            "aria-label": `${s} more`,
            role: "img",
            children: `+${s}`
          }
        )
      ]
    }
  );
}
const kr = R("Avatar", fr), pt = [kr], ws = C("Avatar", xr, pt), ks = C("AvatarGroup", wr, pt), ut = '.may-list-group{display:flex;flex-direction:column;width:100%;min-width:0}.may-list__header{padding:var(--may-space-4) var(--may-space-4) var(--may-space-2);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:.06em;text-transform:uppercase;color:var(--may-color-text-secondary)}.may-list__footer{padding:var(--may-space-2) var(--may-space-4) var(--may-space-4);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary)}.may-list{display:flex;flex-direction:column;min-width:0;background:var(--may-color-surface)}.may-list[data-variant=inset]{border-radius:var(--may-radius-card);overflow:hidden}.may-list-row{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-space-4);border:0;background:transparent;color:var(--may-color-text);font:inherit;text-align:start;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-list-row[data-align=top]{align-items:flex-start}.may-list-row[data-align=top] .may-list-row__leading,.may-list-row[data-align=top] .may-list-row__detail,.may-list-row[data-align=top] .may-list-row__accessory{margin-block-start:1px;align-items:flex-start}button.may-list-row{cursor:pointer}button.may-list-row:disabled{cursor:not-allowed;opacity:.4}.may-list-row+.may-list-row:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:var(--may-space-4);inset-inline-end:0;height:1px;background:var(--may-color-separator)}.may-list-row:has(.may-list-row__leading)+.may-list-row:before{inset-inline-start:calc(var(--may-space-4) * 2 + var(--may-list-leading-w, 29px))}@media(min-resolution:2dppx){.may-list-row+.may-list-row:before{height:var(--may-hairline)}}.may-list-row[data-pressed=true]{background:var(--may-color-highlight-strong)}@media(hover:hover)and (pointer:fine){button.may-list-row:hover:not(:disabled){background:var(--may-color-highlight)}}.may-list-row__leading{display:inline-flex;align-items:center;flex-shrink:0}.may-list-row__text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}.may-list-row__title{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-list-row[data-destructive=true] .may-list-row__title{color:var(--may-color-danger)}.may-list-row__subtitle{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-list-row__detail{font-size:var(--may-text-body);color:var(--may-color-text-secondary);max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:0}.may-list-row__accessory{display:inline-flex;align-items:center;flex-shrink:0}.may-list-row__chevron{width:14px;height:14px;flex-shrink:0;color:var(--may-color-text-tertiary)}';
function vt({
  children: a,
  header: t,
  footer: r,
  variant: o = "inset",
  className: n,
  ...i
}) {
  return /* @__PURE__ */ T("div", { className: I("may-list-group", n), children: [
    t && /* @__PURE__ */ e("div", { className: "may-list__header", children: t }),
    /* @__PURE__ */ e("div", { ...i, "data-slot": "list", "data-variant": o, className: "may-list", role: "list", children: a }),
    r && /* @__PURE__ */ e("div", { className: "may-list__footer", children: r })
  ] });
}
function ht({
  title: a,
  subtitle: t,
  leading: r,
  detail: o,
  accessory: n,
  onClick: i,
  chevron: l,
  align: s = "center",
  destructive: m = !1,
  disabled: u = !1,
  className: y,
  ...g
}) {
  const v = !!i, p = l ?? (v && !n), { pressProps: _ } = W(u || !v), d = /* @__PURE__ */ T(pa, { children: [
    r && /* @__PURE__ */ e("span", { className: "may-list-row__leading", children: r }),
    /* @__PURE__ */ T("span", { className: "may-list-row__text", children: [
      /* @__PURE__ */ e("span", { className: "may-list-row__title", children: a }),
      t && /* @__PURE__ */ e("span", { className: "may-list-row__subtitle", children: t })
    ] }),
    o && /* @__PURE__ */ e("span", { className: "may-list-row__detail", children: o }),
    n && /* @__PURE__ */ e("span", { className: "may-list-row__accessory", children: n }),
    p && /* @__PURE__ */ e(Ba, { className: "may-list-row__chevron", "aria-hidden": !0, focusable: "false" })
  ] }), k = {
    "data-slot": "list-row",
    "data-align": s === "center" ? void 0 : s,
    "data-destructive": m ? "true" : void 0,
    className: I("may-list-row", v && "may-hoverable", y),
    role: "listitem"
  };
  return v ? /* @__PURE__ */ e(
    "button",
    {
      ...g,
      ...k,
      ..._,
      type: "button",
      onClick: i,
      disabled: u,
      children: d
    }
  ) : /* @__PURE__ */ e("div", { ...g, ...k, children: d });
}
const zr = R("List", ut), gt = [zr], zs = C("List", vt, gt), Ns = C("ListRow", ht, gt), Nr = ".may-search{--may-search-cancel-w: 0px;display:inline-flex;align-items:center;min-width:0;max-width:100%}.may-search--full{display:flex;width:100%}.may-search__field{position:relative;display:flex;align-items:center;flex:1 1 auto;min-width:0;padding-inline:var(--may-space-3);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);color:var(--may-color-text);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);cursor:text;box-shadow:0 0 0 0 transparent;transition:background-color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-settle) var(--may-spring-snappy)}.may-search__field:focus-within{background:var(--may-color-fill-quaternary);box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-ring) 28%,transparent)}.may-search[data-invalid=true] .may-search__field{box-shadow:0 0 0 2px color-mix(in srgb,var(--may-color-danger) 45%,transparent)}.may-search[data-invalid=true] .may-search__field:focus-within{box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-danger) 40%,transparent)}.may-search[data-disabled=true]{opacity:.4;cursor:not-allowed}@media(hover:hover)and (pointer:fine){.may-search:not([data-disabled=true]) .may-search__field:not(:focus-within):hover{background:var(--may-color-fill-secondary)}}.may-search[data-size=sm] .may-search__field{height:var(--may-control-h-sm);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-search[data-size=md] .may-search__field{height:var(--may-control-h-md)}.may-search[data-size=lg] .may-search__field{height:var(--may-control-h-lg);padding-inline:var(--may-space-4)}.may-search__glyph{width:1.05em;height:1.05em;flex-shrink:0;display:block;margin-inline-end:var(--may-space-2);color:var(--may-color-text-tertiary);transition:color var(--may-duration-color) var(--may-ease-out)}.may-search__field:focus-within .may-search__glyph{color:var(--may-color-text-secondary)}.may-search__control{flex:1;min-width:0;height:100%;margin:0;padding:0;border:0;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.may-search__control::placeholder{color:var(--may-color-text-tertiary);opacity:1}.may-search__control::-webkit-search-cancel-button,.may-search__control::-webkit-search-decoration{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:none}.may-search__control:focus-visible{outline:none}.may-search__clear-slot{display:flex;align-items:center;flex:0 0 auto;width:0;overflow:hidden;opacity:0;transform:scale(.4);transition:width var(--may-duration-fast) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-search__clear-slot[data-visible=true]{width:var(--may-control-h-xs);opacity:1;transform:none}.may-search__clear{display:inline-flex;align-items:center;justify-content:center;width:var(--may-control-h-xs);height:100%;flex:0 0 auto;padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-tertiary);cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}.may-search__clear>svg{width:1.05em;height:1.05em;display:block}.may-search__cancel-slot{display:flex;align-items:stretch;flex:0 0 auto;width:0;overflow:hidden;opacity:0;transform:translate(var(--may-space-4));transition:width var(--may-duration-settle) var(--may-ease-standard),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-snappy)}.may-search[data-cancel=true] .may-search__cancel-slot{width:var(--may-search-cancel-w);opacity:1;transform:none}.may-search__cancel{flex:0 0 auto;display:inline-flex;align-items:center;padding:0 0 0 var(--may-space-3);border:0;background:transparent;color:var(--may-color-tint);font:inherit;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);white-space:nowrap;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out)}.may-search[data-size=sm] .may-search__cancel{font-size:var(--may-text-subheadline)}@media(hover:hover)and (pointer:fine){.may-search .may-search__clear.may-hoverable:hover:not(:disabled){background:transparent;color:var(--may-color-text-secondary)}.may-search .may-search__cancel.may-hoverable:hover:not(:disabled){background:transparent;color:color-mix(in srgb,var(--may-color-tint) 78%,var(--may-color-text))}}";
function $r(a, t) {
  typeof a == "function" ? a(t) : a && (a.current = t);
}
const Sr = typeof window > "u" ? Y : sa, Er = Z(function({
  value: t,
  defaultValue: r,
  onValueChange: o,
  onSearch: n,
  size: i = "md",
  cancelable: l = !1,
  cancelLabel: s = "Cancel",
  onCancel: m,
  clearLabel: u = "Clear search",
  invalid: y,
  fullWidth: g = !1,
  wrapperClassName: v,
  className: p,
  placeholder: _ = "Search",
  id: d,
  required: k,
  disabled: E,
  onChange: b,
  onKeyDown: $,
  onFocus: P,
  onBlur: D,
  "aria-describedby": A,
  style: h,
  ...x
}, f) {
  const c = Ea({ id: d, invalid: y, required: k, disabled: E, "aria-describedby": A }), [w, M] = U(r ?? ""), [z, O] = U(!1), [S, N] = U(0), L = B(null), j = B(null), F = t ?? w, q = F.length > 0, H = l && (z || q), K = W(!q), Q = W(c.disabled);
  Sr(() => {
    const G = j.current;
    if (!G) return;
    const Ya = () => N(G.getBoundingClientRect().width);
    if (Ya(), typeof ResizeObserver > "u") return;
    const Wa = new ResizeObserver(Ya);
    return Wa.observe(G), () => Wa.disconnect();
  }, [l, s, i]);
  const J = (G) => {
    t === void 0 && M(G), o == null || o(G);
  }, V = (G) => {
    J(G.target.value), b == null || b(G);
  }, na = () => {
    var G;
    J(""), (G = L.current) == null || G.focus();
  }, ea = () => {
    var G;
    J(""), (G = L.current) == null || G.blur(), O(!1), m == null || m();
  }, ia = (G) => {
    G.key === "Enter" && (n == null || n(F)), G.key === "Escape" && q && na(), $ == null || $(G);
  }, ca = (G) => {
    O(!0), P == null || P(G);
  }, ra = (G) => {
    O(!1), D == null || D(G);
  }, ma = (G) => G.preventDefault(), It = { "--may-search-cancel-w": `${S}px` };
  return /* @__PURE__ */ T(
    "div",
    {
      "data-slot": "search-field",
      "data-size": i,
      "data-cancel": H ? "true" : void 0,
      "data-invalid": c.invalid ? "true" : void 0,
      "data-disabled": c.disabled ? "true" : void 0,
      className: I("may-search", g && "may-search--full", v),
      style: { ...It, ...h },
      children: [
        /* @__PURE__ */ T("div", { className: "may-search__field", children: [
          /* @__PURE__ */ e(Wt, { className: "may-search__glyph", "aria-hidden": !0, focusable: "false" }),
          /* @__PURE__ */ e(
            "input",
            {
              ...x,
              ref: (G) => {
                L.current = G, $r(f, G);
              },
              type: "search",
              id: c.id,
              value: F,
              placeholder: _,
              required: c.required,
              disabled: c.disabled,
              "aria-invalid": c.invalid || void 0,
              "aria-describedby": c["aria-describedby"],
              autoComplete: "off",
              autoCorrect: "off",
              autoCapitalize: "none",
              spellCheck: !1,
              enterKeyHint: "search",
              onChange: V,
              onKeyDown: ia,
              onFocus: ca,
              onBlur: ra,
              className: I("may-search__control", p)
            }
          ),
          /* @__PURE__ */ e("span", { className: "may-search__clear-slot", "data-visible": q ? "true" : void 0, children: /* @__PURE__ */ e(
            "button",
            {
              ...K.pressProps,
              type: "button",
              disabled: !q || c.disabled,
              "aria-hidden": !q || void 0,
              "aria-label": u,
              onMouseDown: ma,
              onClick: na,
              className: "may-search__clear may-pressable may-hoverable",
              children: /* @__PURE__ */ e(Kt, { "aria-hidden": !0, focusable: "false" })
            }
          ) })
        ] }),
        l && /* @__PURE__ */ e("div", { className: "may-search__cancel-slot", children: /* @__PURE__ */ e(
          "button",
          {
            ...Q.pressProps,
            ref: j,
            type: "button",
            tabIndex: H ? void 0 : -1,
            disabled: c.disabled,
            onMouseDown: ma,
            onClick: ea,
            className: "may-search__cancel may-pressable may-hoverable",
            children: s
          }
        ) })
      ]
    }
  );
}), Ar = R("SearchField", Nr), Tr = [Ar], $s = C("SearchField", Er, Tr), Ir = ".may-separator[data-orientation=horizontal]{width:100%}.may-separator[data-orientation=vertical]{width:1px;height:auto;align-self:stretch;min-height:var(--may-space-4)}@media(min-resolution:2dppx){.may-separator[data-orientation=vertical]{width:var(--may-hairline)}}.may-separator--labelled{display:flex;align-items:center;gap:var(--may-space-3);width:100%}.may-separator__rule{flex:1}.may-separator__label{flex-shrink:0;font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-weight:var(--may-text-footnote-weight);color:var(--may-color-text-secondary)}", Cr = Z(function({ orientation: t = "horizontal", label: r, className: o, ...n }, i) {
  const l = r != null && t === "horizontal", s = {
    ref: i,
    "data-slot": "separator",
    "data-orientation": t,
    role: "separator",
    // horizontal is role="separator"'s implicit orientation, so only the
    // exception is worth announcing.
    "aria-orientation": t === "vertical" ? "vertical" : void 0
  };
  return l ? /* @__PURE__ */ T(
    "div",
    {
      ...n,
      ...s,
      "aria-label": typeof r == "string" ? r : void 0,
      className: I("may-separator", "may-separator--labelled", o),
      children: [
        /* @__PURE__ */ e("span", { className: "may-separator__rule may-hairline", "aria-hidden": !0 }),
        /* @__PURE__ */ e("span", { className: "may-separator__label", children: r }),
        /* @__PURE__ */ e("span", { className: "may-separator__rule may-hairline", "aria-hidden": !0 })
      ]
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      ...n,
      ...s,
      className: I("may-separator", "may-hairline", o)
    }
  );
}), Dr = R("Separator", Ir), Pr = [Dr], Ss = C("Separator", Cr, Pr), Mr = ".may-visually-hidden--focusable:focus-within{position:static;width:auto;height:auto;margin:0;overflow:visible;clip-path:none;white-space:normal;display:inline-block;padding:var(--may-space-2) var(--may-space-3);border-radius:var(--may-radius-sm);background:var(--may-color-surface);box-shadow:var(--may-shadow-md);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading)}", Lr = Z(function({ as: t = "span", focusable: r = !1, className: o, children: n, ...i }, l) {
  return /* @__PURE__ */ e(
    t,
    {
      ...i,
      ref: l,
      "data-slot": "visually-hidden",
      className: I(
        "may-sr-only",
        "may-visually-hidden",
        r && "may-visually-hidden--focusable",
        o
      ),
      children: n
    }
  );
}), Rr = R("VisuallyHidden", Mr), jr = [Rr], Es = C("VisuallyHidden", Lr, jr), Br = '.may-accordion-group{display:flex;flex-direction:column;width:100%;min-width:0}.may-accordion__section-header{padding:var(--may-space-4) var(--may-space-4) var(--may-space-2);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:.06em;text-transform:uppercase;color:var(--may-color-text-secondary)}.may-accordion__section-footer{padding:var(--may-space-2) var(--may-space-4) var(--may-space-4);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary)}.may-accordion{display:flex;flex-direction:column;min-width:0;background:var(--may-color-surface)}.may-accordion[data-variant=inset]{border-radius:var(--may-radius-card);overflow:hidden}.may-accordion[data-variant=plain]{background:transparent}.may-accordion__item{position:relative;min-width:0}.may-accordion__item+.may-accordion__item:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:var(--may-space-4);inset-inline-end:0;height:1px;background:var(--may-color-separator)}.may-accordion__item:has(.may-accordion__leading)+.may-accordion__item:before{inset-inline-start:calc(var(--may-space-4) * 2 + 29px)}@media(min-resolution:2dppx){.may-accordion__item+.may-accordion__item:before{height:var(--may-hairline)}}.may-accordion .may-accordion__trigger{padding:var(--may-space-2) var(--may-space-4);border-radius:0;min-height:var(--may-control-h)}.may-accordion__row{display:flex;align-items:center;gap:var(--may-space-3);min-width:0;width:100%}.may-accordion__leading{display:inline-flex;align-items:center;flex-shrink:0}.may-accordion__text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}.may-accordion__title{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-accordion__subtitle{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-accordion__detail{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);color:var(--may-color-text-secondary);max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:0}.may-accordion__panel>.may-collapsible__clip>.may-collapsible__content{padding:var(--may-space-0) var(--may-space-4) var(--may-space-4);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text-secondary)}.may-accordion__panel>.may-collapsible__clip>.may-collapsible__content:has(:is([data-slot=list],[data-slot=descriptions])){padding-inline:var(--may-space-0)}', ft = ".may-collapsible{display:flex;flex-direction:column;min-width:0}.may-collapsible__trigger{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-space-3);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-text);font:inherit;text-align:start;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-collapsible__trigger:disabled{cursor:not-allowed;opacity:.4}.may-collapsible__trigger[data-pressed=true]{background-color:var(--may-color-highlight-strong)}.may-collapsible__label{flex:1;min-width:0;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking)}.may-collapsible__chevron{width:14px;height:14px;flex-shrink:0;color:var(--may-color-text-tertiary);transform:rotate(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-collapsible[data-state=open]>.may-collapsible__trigger>.may-collapsible__chevron{transform:rotate(90deg)}.may-collapsible__panel{display:grid;grid-template-rows:0fr;visibility:hidden;transition:grid-template-rows var(--may-duration-settle) var(--may-ease-out),visibility 0s linear var(--may-duration-settle)}.may-collapsible[data-state=open]>.may-collapsible__panel{grid-template-rows:1fr;visibility:visible;transition:grid-template-rows var(--may-duration-settle) var(--may-ease-out),visibility 0s}.may-collapsible__clip{overflow:hidden;min-height:0;opacity:0;transition:opacity var(--may-duration-instant) var(--may-ease-out)}.may-collapsible[data-state=open]>.may-collapsible__panel>.may-collapsible__clip{opacity:1;transition:opacity var(--may-duration-settle) var(--may-ease-out)}.may-collapsible__content{padding:var(--may-space-1) var(--may-space-3) var(--may-space-4);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text-secondary)}";
function bt({
  open: a,
  defaultOpen: t = !1,
  onOpenChange: r,
  trigger: o,
  children: n,
  chevron: i = !0,
  disabled: l = !1,
  className: s,
  triggerClassName: m,
  panelClassName: u,
  id: y,
  ...g
}) {
  const [v, p] = U(t), _ = a ?? v, d = ta(y), k = `${d}-panel`, E = `${d}-trigger`, { pressProps: b } = W(l), $ = X(() => {
    if (l) return;
    const P = !_;
    a === void 0 && p(P), r == null || r(P);
  }, [l, _, a, r]);
  return /* @__PURE__ */ T(
    "div",
    {
      ...g,
      id: d,
      "data-slot": "collapsible",
      "data-state": _ ? "open" : "closed",
      className: I("may-collapsible", s),
      children: [
        /* @__PURE__ */ T(
          "button",
          {
            ...b,
            id: E,
            type: "button",
            disabled: l,
            "aria-expanded": _,
            "aria-controls": k,
            onClick: $,
            "data-slot": "collapsible-trigger",
            className: I("may-collapsible__trigger", "may-hoverable", m),
            children: [
              /* @__PURE__ */ e("span", { className: "may-collapsible__label", children: o }),
              i && /* @__PURE__ */ e(Ba, { className: "may-collapsible__chevron", "aria-hidden": !0, focusable: "false" })
            ]
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            id: k,
            role: "region",
            "aria-labelledby": E,
            "data-slot": "collapsible-panel",
            className: I("may-collapsible__panel", u),
            children: /* @__PURE__ */ e("div", { className: "may-collapsible__clip", children: /* @__PURE__ */ e("div", { className: "may-collapsible__content", "data-slot": "content", children: n }) })
          }
        )
      ]
    }
  );
}
const _t = $a(null);
function Fr({
  children: a,
  type: t = "single",
  value: r,
  defaultValue: o,
  onValueChange: n,
  collapsible: i = !0,
  variant: l = "inset",
  header: s,
  footer: m,
  className: u,
  ...y
}) {
  const [g, v] = U(
    () => t === "single" ? (o ?? []).slice(0, 1) : o ?? []
  ), p = r ?? g, _ = X(
    (k) => {
      const E = p.includes(k), b = t === "single" ? E ? i ? [] : p : [k] : E ? p.filter(($) => $ !== k) : [...p, k];
      b !== p && (r === void 0 && v(b), n == null || n(b));
    },
    [i, n, p, t, r]
  ), d = ua(
    () => ({ openValues: p, toggle: _ }),
    [p, _]
  );
  return /* @__PURE__ */ T("div", { className: I("may-accordion-group", u), children: [
    s && /* @__PURE__ */ e("div", { className: "may-accordion__section-header", children: s }),
    /* @__PURE__ */ e(_t.Provider, { value: d, children: /* @__PURE__ */ e("div", { ...y, "data-slot": "accordion", "data-variant": l, className: "may-accordion", children: a }) }),
    m && /* @__PURE__ */ e("div", { className: "may-accordion__section-footer", children: m })
  ] });
}
function Or({
  value: a,
  title: t,
  subtitle: r,
  leading: o,
  detail: n,
  children: i,
  disabled: l = !1,
  className: s
}) {
  const m = Na(_t);
  if (!m) throw new Error("<AccordionItem> must be rendered inside <Accordion>");
  const u = m.openValues.includes(a);
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "accordion-item",
      "data-state": u ? "open" : "closed",
      className: I("may-accordion__item", s),
      children: /* @__PURE__ */ e(
        bt,
        {
          open: u,
          onOpenChange: () => m.toggle(a),
          disabled: l,
          triggerClassName: "may-accordion__trigger",
          panelClassName: "may-accordion__panel",
          trigger: /* @__PURE__ */ T("span", { className: "may-accordion__row", children: [
            o && /* @__PURE__ */ e("span", { className: "may-accordion__leading", children: o }),
            /* @__PURE__ */ T("span", { className: "may-accordion__text", children: [
              /* @__PURE__ */ e("span", { className: "may-accordion__title", children: t }),
              r && /* @__PURE__ */ e("span", { className: "may-accordion__subtitle", children: r })
            ] }),
            n && /* @__PURE__ */ e("span", { className: "may-accordion__detail", children: n })
          ] }),
          children: i
        }
      )
    }
  );
}
const qr = R("Accordion", Br), Hr = R("Collapsible", ft), xt = [Hr, qr], As = C("Accordion", Fr, xt), Ts = C("AccordionItem", Or, xt), Gr = '.may-alert{display:grid;grid-template-rows:1fr;width:100%;min-width:0;animation:may-alert-reveal var(--may-duration-settle) var(--may-ease-out) both}.may-alert__slot{min-height:0}.may-alert__box{display:flex;align-items:flex-start;gap:var(--may-space-3);width:100%;min-width:0;padding:var(--may-space-4);border-radius:var(--may-radius-card);background:var(--may-alert-bg);color:var(--may-color-text);--may-alert-scale: .9;animation:may-alert-box-in var(--may-duration-settle) var(--may-ease-out) both}.may-alert[data-tone=tint]{--may-alert-bg: color-mix(in srgb, var(--may-color-primary) 12%, transparent);--may-alert-accent: var(--may-color-tint)}.may-alert[data-tone=neutral]{--may-alert-bg: var(--may-color-fill-tertiary);--may-alert-accent: var(--may-color-text-secondary)}.may-alert[data-tone=success]{--may-alert-bg: color-mix(in srgb, var(--may-color-success) 14%, transparent);--may-alert-accent: var(--may-color-success)}.may-alert[data-tone=warning]{--may-alert-bg: color-mix(in srgb, var(--may-color-warning) 18%, transparent);--may-alert-accent: var(--may-color-warning)}.may-alert[data-tone=danger]{--may-alert-bg: color-mix(in srgb, var(--may-color-destructive) 12%, transparent);--may-alert-accent: var(--may-color-danger)}.may-alert__icon{display:inline-flex;align-items:center;flex-shrink:0;height:var(--may-text-headline-leading);color:var(--may-alert-accent)}.may-alert__icon>svg{width:1.25em;height:1.25em;display:block}.may-alert__content{display:flex;flex-direction:column;gap:var(--may-space-1);flex:1;min-width:0}.may-alert__title{margin:0;font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight)}.may-alert__body{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text-secondary)}.may-alert__content>.may-alert__body:first-child{color:var(--may-color-text);font-size:var(--may-text-callout);line-height:var(--may-text-callout-leading);letter-spacing:var(--may-text-callout-tracking)}.may-alert__actions{display:flex;align-items:center;gap:var(--may-space-2);flex-wrap:wrap;margin-block-start:var(--may-space-2)}.may-alert__dismiss{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-control-h-xs);height:var(--may-control-h-xs);padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-secondary);cursor:pointer}.may-alert__dismiss:after{content:"";position:absolute;inset:calc((var(--may-control-h) - var(--may-control-h-xs)) / -2)}.may-alert__dismiss-chip{display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-alert__dismiss-chip>svg{width:55%;height:55%;display:block}.may-alert__dismiss[data-pressed=true] .may-alert__dismiss-chip{background:var(--may-color-fill)}@media(hover:hover)and (pointer:fine){.may-alert__dismiss:hover .may-alert__dismiss-chip{background:var(--may-color-fill)}}@keyframes may-alert-reveal{0%{grid-template-rows:0fr;margin-block-end:calc(-1 * var(--may-alert-gap, 0px))}to{grid-template-rows:1fr;margin-block-end:0}}@keyframes may-alert-box-in{0%{opacity:0;transform:scale(var(--may-alert-scale, .9))}to{opacity:1;transform:none}}.may-alert[data-exiting=true]{animation:may-alert-collapse var(--may-duration-fast) var(--may-ease-out) forwards;pointer-events:none}.may-alert[data-exiting=true]>.may-alert__slot>.may-alert__box{animation:may-alert-box-out var(--may-duration-fast) var(--may-ease-out) forwards}@keyframes may-alert-collapse{0%{grid-template-rows:1fr;margin-block-end:0}to{grid-template-rows:0fr;margin-block-end:calc(-1 * var(--may-alert-gap, 0px))}}@keyframes may-alert-box-out{0%{opacity:1;transform:none}to{opacity:0;transform:scale(var(--may-alert-scale, .9))}}';
function Ur({
  tone: a = "tint",
  title: t,
  children: r,
  icon: o,
  onDismiss: n,
  dismissLabel: i = "Dismiss",
  actions: l,
  role: s,
  className: m,
  ...u
}) {
  const [y, g] = U(!1), { pressProps: v } = W(!n), p = o === void 0 ? Yr(a) : o, _ = (d) => {
    !y || d.target !== d.currentTarget || (n == null || n(), g(!1));
  };
  return /* @__PURE__ */ e(
    "div",
    {
      ...u,
      "data-slot": "alert",
      "data-tone": a,
      "data-exiting": y ? "true" : void 0,
      role: s ?? (a === "danger" ? "alert" : "status"),
      className: I("may-alert", m),
      onAnimationEnd: _,
      children: /* @__PURE__ */ e("div", { className: "may-alert__slot", children: /* @__PURE__ */ T("div", { className: "may-alert__box", children: [
        p != null && /* @__PURE__ */ e("span", { className: "may-alert__icon", "aria-hidden": !0, children: p }),
        /* @__PURE__ */ T("div", { className: "may-alert__content", children: [
          t != null && /* @__PURE__ */ e("p", { className: "may-alert__title", children: t }),
          r != null && /* @__PURE__ */ e("div", { className: "may-alert__body", "data-slot": "body", children: r }),
          l && /* @__PURE__ */ e("div", { className: "may-alert__actions", children: l })
        ] }),
        n && /* @__PURE__ */ e(
          "button",
          {
            ...v,
            type: "button",
            onClick: () => g(!0),
            "aria-label": i,
            className: "may-alert__dismiss may-pressable may-hoverable",
            children: /* @__PURE__ */ e("span", { className: "may-alert__dismiss-chip", "aria-hidden": !0, children: /* @__PURE__ */ e(ha, { focusable: "false" }) })
          }
        )
      ] }) })
    }
  );
}
function Yr(a) {
  const t = {
    className: "may-alert__glyph",
    "aria-hidden": !0,
    focusable: "false"
  };
  return a === "success" ? /* @__PURE__ */ e(Xt, { ...t }) : a === "warning" ? /* @__PURE__ */ e(Zt, { ...t }) : a === "danger" ? /* @__PURE__ */ e(Jt, { ...t }) : /* @__PURE__ */ e(Qt, { ...t });
}
const Wr = R("Alert", Gr), Kr = [Wr], Is = C("Alert", Ur, Kr), Xr = ".may-alert-dialog__scrim{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--may-z-popover);display:flex;align-items:center;justify-content:center;padding:var(--may-space-5);background:var(--may-color-scrim);animation:may-alert-scrim-in var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-alert-dialog{display:flex;flex-direction:column;width:100%;max-width:320px;max-height:calc(100% - var(--may-space-8));border-radius:var(--may-radius-card);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-xl);overflow:hidden;animation:may-alert-in var(--may-duration-settle) var(--may-ease-out),may-alert-fade var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-alert-dialog__scrim[data-state=closed]{opacity:0;pointer-events:none}.may-alert-dialog[data-state=closed]{opacity:0}.may-alert-dialog[data-nudge=true]{animation:may-alert-nudge var(--may-duration-settle) var(--may-ease-standard)}.may-alert-dialog__content{padding:var(--may-space-6) var(--may-space-5) var(--may-space-4);overflow-y:auto;text-align:center}.may-alert-dialog__title{margin:0;font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight)}.may-alert-dialog__description{margin:var(--may-space-2) 0 0;font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary)}.may-alert-dialog__actions{display:flex;gap:var(--may-space-2);padding:0 var(--may-space-5) var(--may-space-5);flex-shrink:0}.may-alert-dialog[data-presentation=desktop] .may-alert-dialog__actions{flex-direction:row}.may-alert-dialog[data-presentation=desktop] .may-alert-dialog__actions>*{flex:1;min-width:0}.may-alert-dialog[data-presentation=compact] .may-alert-dialog__actions{flex-direction:column-reverse;align-items:stretch}@keyframes may-alert-scrim-in{0%{opacity:0}to{opacity:1}}@keyframes may-alert-fade{0%{opacity:0}to{opacity:1}}@keyframes may-alert-in{0%{transform:scale(.86)}to{transform:scale(1)}}@keyframes may-alert-nudge{0%,to{transform:translate(0)}15%{transform:translate(calc(var(--may-space-2) * -1))}40%{transform:translate(var(--may-space-2))}65%{transform:translate(calc(var(--may-space-1) * -1))}85%{transform:translate(var(--may-space-1))}}", Zr = 150, Jr = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Qr({
  open: a,
  title: t,
  description: r,
  confirmLabel: o = "OK",
  cancelLabel: n = "Cancel",
  destructive: i = !1,
  onConfirm: l,
  onCancel: s,
  children: m,
  className: u,
  ...y
}) {
  const g = B(null), v = B(null), p = B(null), _ = B(null), d = ta(), k = va(), E = oa(), b = Sa(a, E ? 0 : Zr);
  Y(() => {
    if (!b) return;
    _.current = document.activeElement;
    const A = document.body, h = A.style.overflow, x = A.style.paddingRight, f = window.innerWidth - document.documentElement.clientWidth;
    A.style.overflow = "hidden", f > 0 && (A.style.paddingRight = `${f}px`);
    const c = i ? p.current : v.current;
    return c == null || c.focus(), () => {
      var w, M;
      A.style.overflow = h, A.style.paddingRight = x, (M = (w = _.current) == null ? void 0 : w.focus) == null || M.call(w);
    };
  }, [b, i]);
  const $ = () => {
    const A = g.current;
    A && (A.removeAttribute("data-nudge"), A.offsetWidth, A.setAttribute("data-nudge", "true"));
  }, P = (A) => {
    var c;
    if (A.key === "Escape") {
      A.stopPropagation(), s();
      return;
    }
    if (A.key !== "Tab") return;
    const h = (c = g.current) == null ? void 0 : c.querySelectorAll(Jr);
    if (!h || h.length === 0) return;
    const x = h[0], f = h[h.length - 1];
    A.shiftKey && document.activeElement === x ? (A.preventDefault(), f.focus()) : !A.shiftKey && document.activeElement === f && (A.preventDefault(), x.focus());
  }, D = (A) => {
    var h;
    A.target === A.currentTarget && ($(), (h = g.current) == null || h.focus());
  };
  return b ? /* @__PURE__ */ e(
    "div",
    {
      className: "may-alert-dialog__scrim",
      "data-slot": "scrim",
      "data-state": a ? "open" : "closed",
      onMouseDown: D,
      onKeyDown: P,
      children: /* @__PURE__ */ T(
        "div",
        {
          ref: g,
          role: "alertdialog",
          "aria-modal": "true",
          "aria-labelledby": `${d}-title`,
          "aria-describedby": r ? `${d}-description` : void 0,
          tabIndex: -1,
          "data-slot": "alert-dialog",
          "data-state": a ? "open" : "closed",
          "data-presentation": k ? "desktop" : "compact",
          "data-destructive": i ? "true" : void 0,
          onAnimationEnd: () => {
            var A;
            return (A = g.current) == null ? void 0 : A.removeAttribute("data-nudge");
          },
          ...y,
          className: I("may-alert-dialog", u),
          children: [
            /* @__PURE__ */ T("div", { className: "may-alert-dialog__content", "data-slot": "scroll-area", children: [
              /* @__PURE__ */ e("h2", { className: "may-alert-dialog__title", id: `${d}-title`, children: t }),
              r && /* @__PURE__ */ e("p", { className: "may-alert-dialog__description", id: `${d}-description`, children: r }),
              m
            ] }),
            /* @__PURE__ */ T("div", { className: "may-alert-dialog__actions", children: [
              /* @__PURE__ */ e(La, { ref: p, variant: "gray", onClick: s, children: n }),
              /* @__PURE__ */ e(
                La,
                {
                  ref: v,
                  tone: i ? "danger" : "tint",
                  variant: "filled",
                  onClick: l,
                  children: o
                }
              )
            ] })
          ]
        }
      )
    }
  ) : null;
}
const Vr = R("AlertDialog", Xr), ao = [Vr], Cs = C("AlertDialog", Qr, ao), to = '.may-box{--may-box-pt: var(--may-space-0);--may-box-pr: var(--may-space-0);--may-box-pb: var(--may-space-0);--may-box-pl: var(--may-space-0);padding:var(--may-box-pt) var(--may-box-pr) var(--may-box-pb) var(--may-box-pl);min-width:0}.may-box--full{width:100%}.may-box[data-surface=base]{background-color:var(--may-color-surface)}.may-box[data-surface=nested]{background-color:var(--may-color-surface-nested)}.may-box[data-surface=grouped]{background-color:var(--may-color-bg)}.may-box[data-radius=xs]{border-radius:var(--may-radius-xs)}.may-box[data-radius=sm]{border-radius:var(--may-radius-sm)}.may-box[data-radius=md]{border-radius:var(--may-radius-md)}.may-box[data-radius=lg]{border-radius:var(--may-radius-lg)}.may-box[data-radius=card]{border-radius:var(--may-radius-card)}.may-box[data-radius=sheet]{border-radius:var(--may-radius-sheet)}.may-box[data-radius=full]{border-radius:var(--may-radius-full)}.may-box[data-shadow="2xs"]{box-shadow:var(--may-shadow-2xs)}.may-box[data-shadow=xs]{box-shadow:var(--may-shadow-xs)}.may-box[data-shadow=sm]{box-shadow:var(--may-shadow-sm)}.may-box[data-shadow=md]{box-shadow:var(--may-shadow-md)}.may-box[data-shadow=lg]{box-shadow:var(--may-shadow-lg)}.may-box[data-shadow=xl]{box-shadow:var(--may-shadow-xl)}.may-box[data-shadow="2xl"]{box-shadow:var(--may-shadow-2xl)}', fa = (a) => `var(--may-space-${a})`;
function eo({
  as: a,
  children: t,
  padding: r,
  paddingX: o,
  paddingY: n,
  surface: i = "none",
  radius: l = "none",
  shadow: s = "none",
  fullWidth: m = !1,
  className: u,
  style: y,
  ...g
}) {
  const v = a ?? "div", p = n ?? r, _ = o ?? r, d = {};
  return p !== void 0 && (d["--may-box-pt"] = fa(p), d["--may-box-pb"] = fa(p)), _ !== void 0 && (d["--may-box-pl"] = fa(_), d["--may-box-pr"] = fa(_)), /* @__PURE__ */ e(
    v,
    {
      ...g,
      "data-slot": "box",
      "data-surface": i,
      "data-radius": l,
      "data-shadow": s,
      className: I("may-box", m && "may-box--full", u),
      style: { ...d, ...y },
      children: t
    }
  );
}
const ro = R("Box", to), oo = [ro], Ds = C("Box", eo, oo), no = '.may-breadcrumb{min-width:0;color:var(--may-color-text-secondary)}.may-breadcrumb__list{display:flex;align-items:center;flex-wrap:wrap;gap:var(--may-space-1) 0;margin:0;padding:0;list-style:none;min-width:0}.may-breadcrumb__item{display:inline-flex;align-items:center;min-width:0}.may-breadcrumb__crumb{position:relative;display:inline-flex;align-items:center;gap:var(--may-space-1);min-width:0;min-height:var(--may-control-h-sm);padding-inline:var(--may-space-4);border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-tint);font-family:inherit;font-size:inherit;font-weight:400;letter-spacing:inherit;text-decoration:none;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out)}.may-breadcrumb__crumb[aria-current=page]{color:var(--may-color-text);font-weight:600;cursor:default}span.may-breadcrumb__crumb:not([aria-current=page]){color:var(--may-color-text-secondary);cursor:default}@media(hover:hover)and (pointer:fine){a.may-breadcrumb__crumb:hover,button.may-breadcrumb__crumb:hover{color:var(--may-color-text)}}a.may-breadcrumb__crumb:after,button.may-breadcrumb__crumb:after{content:"";position:absolute;inset-inline:0;inset-block-start:50%;height:var(--may-control-h);transform:translateY(-50%)}.may-breadcrumb__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-breadcrumb__icon{display:inline-flex;align-items:center;flex-shrink:0;color:var(--may-color-text-tertiary)}.may-breadcrumb__icon>svg{width:1.1em;height:1.1em;display:block}.may-breadcrumb__crumb[aria-current=page] .may-breadcrumb__icon{color:var(--may-color-text-secondary)}.may-breadcrumb__ellipsis{aspect-ratio:1;justify-content:center;padding-inline:var(--may-space-2);background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-weight:600;line-height:.8}@media(hover:hover)and (pointer:fine){.may-breadcrumb__ellipsis:hover{background:var(--may-color-fill-secondary);color:var(--may-color-text)}}.may-breadcrumb__separator{display:inline-flex;align-items:center;flex-shrink:0;color:var(--may-color-text-quaternary)}.may-breadcrumb__separator>svg{width:.85em;height:.85em;display:block}[dir=rtl] .may-breadcrumb__separator>svg{transform:scaleX(-1)}.may-breadcrumb[data-size=sm]{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking)}.may-breadcrumb[data-size=md]{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-breadcrumb[data-size=lg]{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking)}.may-breadcrumb[data-size=sm] .may-breadcrumb__crumb{min-height:var(--may-control-h-xs);padding-inline:var(--may-space-3)}.may-breadcrumb[data-size=lg] .may-breadcrumb__crumb{min-height:var(--may-control-h-md);padding-inline:var(--may-space-5)}';
function io(a) {
  const t = /* @__PURE__ */ new Map();
  for (const r of a) t.set(r, r.getBoundingClientRect());
  return t;
}
function so(a, t, { duration: r = 340, easing: o = "var(--may-spring-smooth)", onFinish: n } = {}) {
  const i = [];
  for (const l of a) {
    const s = t.get(l), m = l.getBoundingClientRect(), u = Ft(l, o);
    if (!s) {
      i.push(
        l.animate([{ opacity: 0, transform: "scale(0.96)" }, { opacity: 1, transform: "none" }], {
          duration: r,
          easing: u,
          fill: "none"
        })
      );
      continue;
    }
    const y = s.left - m.left, g = s.top - m.top, v = s.width / m.width || 1, p = s.height / m.height || 1;
    Math.abs(y) < 1 && Math.abs(g) < 1 && Math.abs(v - 1) < 0.01 && Math.abs(p - 1) < 0.01 || i.push(
      l.animate(
        [
          { transform: `translate(${y}px, ${g}px) scale(${v}, ${p})` },
          { transform: "none" }
        ],
        { duration: r, easing: u, fill: "none" }
      )
    );
  }
  return n && i.length && Promise.allSettled(i.map((l) => l.finished)).then(n), i;
}
const lo = typeof window > "u" ? Y : sa;
function co({ item: a, current: t }) {
  const r = Ot(), o = !t && (a.href != null || a.onClick != null), { pressProps: n } = W(!o), i = /* @__PURE__ */ T(pa, { children: [
    a.icon && /* @__PURE__ */ e("span", { className: "may-breadcrumb__icon", "aria-hidden": !0, children: a.icon }),
    /* @__PURE__ */ e("span", { className: "may-breadcrumb__label", children: a.label })
  ] });
  return o ? a.href != null ? /* @__PURE__ */ e(
    r,
    {
      ...n,
      href: a.href,
      onClick: a.onClick,
      className: "may-breadcrumb__crumb may-pressable may-hoverable",
      children: i
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      ...n,
      type: "button",
      onClick: a.onClick,
      className: "may-breadcrumb__crumb may-pressable may-hoverable",
      children: i
    }
  ) : /* @__PURE__ */ e("span", { className: "may-breadcrumb__crumb", "aria-current": t ? "page" : void 0, children: i });
}
function mo({ hidden: a, onExpand: t }) {
  const { pressProps: r } = W();
  return /* @__PURE__ */ e(
    "button",
    {
      ...r,
      type: "button",
      onClick: t,
      "aria-label": `Show ${a} hidden ${a === 1 ? "level" : "levels"}`,
      className: "may-breadcrumb__crumb may-breadcrumb__ellipsis may-pressable may-hoverable",
      children: /* @__PURE__ */ e("span", { "aria-hidden": !0, children: "…" })
    }
  );
}
function yo({
  items: a = [],
  maxItems: t,
  itemsBeforeCollapse: r = 1,
  itemsAfterCollapse: o = 2,
  separator: n,
  size: i = "md",
  className: l,
  "aria-label": s = "Breadcrumb",
  ...m
}) {
  const [u, y] = U(!1), g = oa(), v = B(null), p = B(null), _ = !u && t != null && a.length > Math.max(t, r + o + 1), d = a.length - o, k = _ ? [
    ...a.slice(0, r).map((b, $) => ({ item: b, index: $ })),
    { item: null, index: -1 },
    ...a.slice(d).map((b, $) => ({ item: b, index: d + $ }))
  ] : a.map((b, $) => ({ item: b, index: $ })), E = () => {
    !g && v.current && (p.current = io(v.current.children)), y(!0);
  };
  return lo(() => {
    const b = p.current;
    !b || !v.current || (p.current = null, so(v.current.children, b, { easing: "var(--may-spring-smooth)" }));
  }, [u]), /* @__PURE__ */ e(
    "nav",
    {
      ...m,
      "aria-label": s,
      "data-slot": "breadcrumb",
      "data-size": i,
      className: I("may-breadcrumb", l),
      children: /* @__PURE__ */ e("ol", { ref: v, className: "may-breadcrumb__list", children: k.map((b, $) => {
        const P = $ === k.length - 1;
        return /* @__PURE__ */ T(
          "li",
          {
            className: "may-breadcrumb__item",
            children: [
              b.item ? /* @__PURE__ */ e(co, { item: b.item, current: P }) : /* @__PURE__ */ e(
                mo,
                {
                  hidden: a.length - r - o,
                  onExpand: E
                }
              ),
              !P && /* @__PURE__ */ e("span", { className: "may-breadcrumb__separator", "aria-hidden": !0, children: n ?? /* @__PURE__ */ e(Ba, { "aria-hidden": !0, focusable: "false" }) })
            ]
          },
          b.item ? `crumb-${b.index}` : "ellipsis"
        );
      }) })
    }
  );
}
const po = R("Breadcrumb", no), uo = [po], Ps = C("Breadcrumb", yo, uo), vo = ".may-button-group{display:inline-flex;align-items:stretch;min-width:0}.may-button-group[data-orientation=vertical]{flex-direction:column}.may-button-group[data-attached=false]{gap:var(--may-space-2)}.may-button-group[data-attached=true]{gap:1px}@media(min-resolution:2dppx){.may-button-group[data-attached=true]{gap:var(--may-hairline)}}.may-button-group[data-attached=true][data-orientation=horizontal]>*:not(:first-child){border-start-start-radius:0;border-end-start-radius:0}.may-button-group[data-attached=true][data-orientation=horizontal]>*:not(:last-child){border-start-end-radius:0;border-end-end-radius:0}.may-button-group[data-attached=true][data-orientation=vertical]>*:not(:first-child){border-start-start-radius:0;border-start-end-radius:0}.may-button-group[data-attached=true][data-orientation=vertical]>*:not(:last-child){border-end-start-radius:0;border-end-end-radius:0}.may-button-group--full{display:flex;width:100%}.may-button-group--full[data-orientation=horizontal]>*{flex:1 1 0;min-width:0}.may-button-group--full[data-orientation=vertical]>*{width:100%}.may-button-group[data-attached=true] .may-pressable[data-pressed=true]{transform:none}.may-button-group[data-attached=true]{transform:scale(1);transform-origin:center;transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-button-group[data-attached=true]:has(.may-pressable[data-pressed=true]){transform:scale(.98);transition:transform var(--may-duration-instant) var(--may-ease-out)}@media(prefers-reduced-motion:reduce){.may-button-group[data-attached=true],.may-button-group[data-attached=true]:has(.may-pressable[data-pressed=true]){transform:none}}.may-button-group[data-attached=true] .may-icon-button:after{content:none}";
function ho({
  children: a,
  attached: t = !0,
  orientation: r = "horizontal",
  fullWidth: o = !1,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      ...i,
      role: "group",
      "data-slot": "button-group",
      "data-orientation": r,
      "data-attached": t ? "true" : "false",
      className: I("may-button-group", o && "may-button-group--full", n),
      children: a
    }
  );
}
const go = R("ButtonGroup", vo), fo = [go], Ms = C("ButtonGroup", ho, fo), bo = ".may-card{--may-card-bg: var(--may-color-surface);--may-card-pad: var(--may-space-5);--may-card-gap: var(--may-space-4);position:relative;display:flex;flex-direction:column;gap:var(--may-card-gap);min-width:0;padding:var(--may-card-pad);border-radius:var(--may-radius-card);background-color:var(--may-card-bg);color:var(--may-color-text);overflow:hidden}.may-card[data-variant=elevated]{--may-card-bg: var(--may-color-surface);box-shadow:var(--may-shadow-sm)}.may-card[data-variant=grouped]{--may-card-bg: var(--may-color-surface)}.may-card[data-variant=nested]{--may-card-bg: var(--may-color-surface-nested)}.may-card[data-variant=plain]{--may-card-bg: transparent}.may-card[data-padding=none]{--may-card-pad: var(--may-space-0);--may-card-gap: var(--may-space-0)}.may-card[data-padding=xs]{--may-card-pad: var(--may-space-3);--may-card-gap: var(--may-space-2)}.may-card[data-padding=sm]{--may-card-pad: var(--may-space-4);--may-card-gap: var(--may-space-3)}.may-card[data-padding=md]{--may-card-pad: var(--may-space-5);--may-card-gap: var(--may-space-4)}.may-card[data-padding=lg]{--may-card-pad: var(--may-space-6);--may-card-gap: var(--may-space-5)}button.may-card{width:100%;border:0;font:inherit;text-align:start;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:box-shadow var(--may-duration-settle) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}button.may-card:disabled{cursor:not-allowed;opacity:.4}@media(hover:hover)and (pointer:fine){button.may-card[data-variant]:hover:not(:disabled){background-color:var(--may-card-bg);background-image:linear-gradient(var(--may-color-highlight),var(--may-color-highlight))}button.may-card[data-variant=elevated]:hover:not(:disabled){box-shadow:var(--may-shadow-md)}}button.may-card[data-variant=elevated][data-pressed=true]{box-shadow:var(--may-shadow-2xs);transition:box-shadow var(--may-duration-instant) var(--may-ease-out)}.may-card__header{display:flex;align-items:flex-start;gap:var(--may-space-3);min-width:0}.may-card__header-text{display:flex;flex-direction:column;gap:var(--may-space-1);min-width:0;flex:1}.may-card__header-accessory{display:inline-flex;align-items:center;flex-shrink:0}.may-card__title{margin:0;font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text)}.may-card__description{margin:0;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);font-weight:var(--may-text-subheadline-weight);color:var(--may-color-text-secondary)}.may-card__body{display:flex;flex-direction:column;gap:var(--may-space-3);min-width:0;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking)}.may-card__footer{display:flex;align-items:center;justify-content:flex-end;gap:var(--may-space-2);margin-block-start:auto;min-width:0}.may-card[data-padding=none]>.may-card__header,.may-card[data-padding=none]>.may-card__footer{padding:var(--may-space-4)}";
function _o({
  children: a,
  variant: t = "elevated",
  padding: r = "md",
  interactive: o,
  onClick: n,
  disabled: i = !1,
  className: l,
  ...s
}) {
  const m = !!(o ?? n), { pressProps: u } = W(i || !m), y = {
    "data-slot": "card",
    "data-variant": t,
    "data-padding": r,
    className: I(
      "may-card",
      m && "may-pressable",
      m && "may-hoverable",
      l
    )
  };
  return m ? /* @__PURE__ */ e(
    "button",
    {
      ...s,
      ...y,
      ...u,
      type: "button",
      onClick: n,
      disabled: i,
      children: a
    }
  ) : /* @__PURE__ */ e("div", { ...s, ...y, children: a });
}
function xo({ children: a, accessory: t, className: r, ...o }) {
  return /* @__PURE__ */ T("div", { ...o, "data-slot": "card-header", className: I("may-card__header", r), children: [
    /* @__PURE__ */ e("div", { className: "may-card__header-text", children: a }),
    t && /* @__PURE__ */ e("div", { className: "may-card__header-accessory", children: t })
  ] });
}
function wo({ as: a = "h3", className: t, ...r }) {
  return /* @__PURE__ */ e(a, { ...r, "data-slot": "card-title", className: I("may-card__title", t) });
}
function ko({ className: a, ...t }) {
  return /* @__PURE__ */ e("p", { ...t, "data-slot": "card-description", className: I("may-card__description", a) });
}
function zo({ className: a, ...t }) {
  return /* @__PURE__ */ e("div", { ...t, "data-slot": "card-body", className: I("may-card__body", a) });
}
function No({ className: a, ...t }) {
  return /* @__PURE__ */ e("div", { ...t, "data-slot": "card-footer", className: I("may-card__footer", a) });
}
const $o = R("Card", bo), la = [$o], Ls = C("Card", _o, la), Rs = C("CardHeader", xo, la), js = C("CardTitle", wo, la), Bs = C("CardDescription", ko, la), Fs = C("CardBody", zo, la), Os = C("CardFooter", No, la), So = R("Collapsible", ft), Eo = [So], qs = C("Collapsible", bt, Eo), Ao = '.may-descriptions-group{display:flex;flex-direction:column;width:100%;min-width:0}.may-descriptions__section-header{padding:var(--may-space-4) var(--may-space-4) var(--may-space-2);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:.06em;text-transform:uppercase;color:var(--may-color-text-secondary)}.may-descriptions__section-footer{padding:var(--may-space-2) var(--may-space-4) var(--may-space-4);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary)}.may-descriptions{--may-desc-columns: 1;display:grid;grid-template-columns:repeat(var(--may-desc-columns),minmax(0,1fr));min-width:0;margin:0;background:var(--may-color-surface)}.may-descriptions[data-variant=inset]{border-radius:var(--may-radius-card);overflow:hidden}.may-descriptions[data-variant=plain]{background:transparent}.may-desc__item{position:relative;display:flex;align-items:baseline;gap:var(--may-space-4);min-width:0;min-height:var(--may-control-h);padding:calc((var(--may-control-h) - var(--may-text-body-leading)) / 2) var(--may-space-4)}.may-desc__item:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:var(--may-color-separator)}.may-descriptions[data-columns="1"] .may-desc__item:before{inset-inline-start:var(--may-space-4)}.may-desc__item[data-row-start=true]:before{content:none}@media(min-resolution:2dppx){.may-desc__item:before{height:var(--may-hairline)}}.may-desc__label{min-width:0;flex-shrink:1;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-desc__value{margin:0;margin-inline-start:auto;min-width:0;text-align:end;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text);overflow-wrap:anywhere}.may-descriptions[data-layout=stacked] .may-desc__item{flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--may-space-1);padding-block:var(--may-space-3)}.may-descriptions[data-layout=stacked] .may-desc__label{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading)}.may-descriptions[data-layout=stacked] .may-desc__value{margin-inline-start:0;text-align:start}', wt = $a({
  index: 0,
  columns: 1
});
function To({
  children: a,
  header: t,
  footer: r,
  variant: o = "inset",
  layout: n = "inline",
  columns: i = 1,
  className: l,
  style: s,
  ...m
}) {
  const y = va() ? Math.max(1, Math.floor(i)) : 1, g = nt.toArray(a);
  return /* @__PURE__ */ T("div", { className: I("may-descriptions-group", l), children: [
    t && /* @__PURE__ */ e("div", { className: "may-descriptions__section-header", children: t }),
    /* @__PURE__ */ e(
      "dl",
      {
        ...m,
        "data-slot": "descriptions",
        "data-variant": o,
        "data-layout": n,
        "data-columns": y,
        className: "may-descriptions",
        style: { ...s, "--may-desc-columns": y },
        children: g.map((v, p) => (
          // toArray has already given every row a stable key; reusing it means
          // reordering the pairs moves them rather than remounting them.
          /* @__PURE__ */ e(
            wt.Provider,
            {
              value: { index: p, columns: y },
              children: v
            },
            za(v) ? v.key ?? p : p
          )
        ))
      }
    ),
    r && /* @__PURE__ */ e("div", { className: "may-descriptions__section-footer", children: r })
  ] });
}
function Io({
  label: a,
  value: t,
  children: r,
  className: o,
  ...n
}) {
  const { index: i, columns: l } = Na(wt), s = i < l;
  return /* @__PURE__ */ T(
    "div",
    {
      ...n,
      "data-slot": "description-item",
      "data-row-start": s ? "true" : void 0,
      className: I("may-desc__item", o),
      children: [
        /* @__PURE__ */ e("dt", { className: "may-desc__label", children: a }),
        /* @__PURE__ */ e("dd", { className: "may-desc__value", children: t ?? r })
      ]
    }
  );
}
const Co = R("Descriptions", Ao), kt = [Co], Hs = C("Descriptions", To, kt), Gs = C("DescriptionItem", Io, kt), Do = ".may-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:var(--may-space-2);min-width:0;padding:var(--may-space-10) var(--may-space-6);color:var(--may-color-text);animation:may-empty-in var(--may-duration-settle) var(--may-ease-out) both}.may-empty__glyph{display:flex;align-items:center;justify-content:center;margin-block-end:var(--may-space-2);color:var(--may-color-text-tertiary);font-size:var(--may-text-large-title);line-height:1}.may-empty__glyph>svg{width:1em;height:1em;display:block}.may-empty__title{margin:0;font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);font-weight:var(--may-text-title-3-weight)}.may-empty__description{margin:0;max-width:38ch;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text-secondary)}.may-empty__action{display:flex;align-items:center;justify-content:center;gap:var(--may-space-3);flex-wrap:wrap;margin-block-start:var(--may-space-4)}.may-empty[data-size=sm]{padding:var(--may-space-6) var(--may-space-4);gap:var(--may-space-1)}.may-empty[data-size=sm] .may-empty__glyph{font-size:var(--may-text-title-1)}.may-empty[data-size=sm] .may-empty__title{font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight)}.may-empty[data-size=sm] .may-empty__description{font-size:var(--may-text-footnote)}.may-empty[data-size=sm] .may-empty__action{margin-block-start:var(--may-space-3)}.may-empty[data-size=lg]{padding:var(--may-space-16) var(--may-space-6)}.may-empty[data-size=lg] .may-empty__glyph{font-size:calc(var(--may-text-large-title) * 1.6)}.may-empty[data-size=lg] .may-empty__title{font-size:var(--may-text-title-2);line-height:var(--may-text-title-2-leading);letter-spacing:var(--may-text-title-2-tracking);font-weight:var(--may-text-title-2-weight)}.may-empty[data-size=lg] .may-empty__description{font-size:var(--may-text-body)}@keyframes may-empty-in{0%{opacity:0}to{opacity:1}}";
function Po({
  glyph: a,
  title: t,
  description: r,
  action: o,
  size: n = "md",
  as: i = "h3",
  className: l,
  ...s
}) {
  return /* @__PURE__ */ T(
    "div",
    {
      ...s,
      "data-slot": "empty-state",
      "data-size": n,
      className: I("may-empty", l),
      children: [
        a && /* @__PURE__ */ e("div", { className: "may-empty__glyph", "aria-hidden": !0, children: a }),
        /* @__PURE__ */ e(i, { className: "may-empty__title", children: t }),
        r && /* @__PURE__ */ e("p", { className: "may-empty__description", children: r }),
        o && /* @__PURE__ */ e("div", { className: "may-empty__action", children: o })
      ]
    }
  );
}
const Mo = R("EmptyState", Do), Lo = [Mo], Us = C("EmptyState", Po, Lo), Ro = ".may-field{display:flex;flex-direction:column;gap:var(--may-space-2);min-width:0}.may-field__label{display:inline-flex;align-items:baseline;gap:var(--may-space-1);align-self:flex-start;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text);cursor:default}.may-field[data-disabled=true] .may-field__label{opacity:.4}.may-field__required{color:var(--may-color-danger);font-size:var(--may-text-footnote);line-height:1}.may-field__message{margin:0;font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary)}.may-field__message[data-kind=error]{color:var(--may-color-danger);animation:may-field-error-in var(--may-duration-settle) var(--may-spring-snappy) both}@keyframes may-field-error-in{0%{opacity:0;transform:translateY(calc(-1 * var(--may-space-1)))}to{opacity:1;transform:none}}", jo = R("Field", Ro), Bo = [jo], Ys = C("Field", oe, Bo), Fo = ".may-text.may-heading{text-wrap:balance;scroll-margin-block-start:calc(var(--may-navbar-h) + var(--may-space-4))}", Oo = {
  1: "large-title",
  2: "title-1",
  3: "title-2",
  4: "title-3",
  5: "headline",
  6: "subheadline"
}, qo = Z(function({ children: t, level: r = 2, size: o, tone: n = "default", weight: i, align: l, clamp: s, className: m, style: u, ...y }, g) {
  const v = `h${r}`, p = o ?? Oo[r];
  return /* @__PURE__ */ e(
    v,
    {
      ...y,
      ref: g,
      "data-slot": "heading",
      "data-level": r,
      "data-variant": p,
      "data-tone": n,
      "data-weight": i,
      "data-align": l,
      "data-clamp": s != null ? "true" : void 0,
      className: I("may-text", "may-heading", m),
      style: s != null ? { ...u, "--may-txt-clamp": s } : u,
      children: t
    }
  );
}), Ho = R("Heading", Fo), Go = R("Text", qa), Uo = [Go, Ho], Ws = C("Heading", qo, Uo), Yo = '.may-icon-tile{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-tile-size);height:var(--may-tile-size);border-radius:var(--may-radius-squircle);color:var(--may-color-on-primary);font-family:inherit;font-weight:600;line-height:1;overflow:hidden;vertical-align:middle;-webkit-user-select:none;user-select:none}.may-icon-tile[data-size=sm]{--may-tile-size: calc(var(--may-control-h) * .66)}.may-icon-tile[data-size=md]{--may-tile-size: var(--may-control-h)}.may-icon-tile[data-size=lg]{--may-tile-size: calc(var(--may-control-h) * 1.375)}.may-icon-tile>svg,.may-icon-tile>svg[width="1em"]{width:calc(var(--may-tile-size) * .6);height:calc(var(--may-tile-size) * .6);display:block}.may-icon-tile{font-size:calc(var(--may-tile-size) * .5)}.may-icon-tile[data-gradient=blue]{background:var(--may-grad-blue)}.may-icon-tile[data-gradient=green]{background:var(--may-grad-green)}.may-icon-tile[data-gradient=red]{background:var(--may-grad-red)}.may-icon-tile[data-gradient=orange]{background:var(--may-grad-orange)}.may-icon-tile[data-gradient=yellow]{background:var(--may-grad-yellow)}.may-icon-tile[data-gradient=purple]{background:var(--may-grad-purple)}.may-icon-tile[data-gradient=pink]{background:var(--may-grad-pink)}.may-icon-tile[data-gradient=teal]{background:var(--may-grad-teal)}.may-icon-tile[data-gradient=indigo]{background:var(--may-grad-indigo)}.may-icon-tile[data-gradient=gray]{background:var(--may-grad-gray)}.may-icon-tile[data-gradient=spectrum]{background:var(--may-grad-spectrum)}.may-icon-tile[data-gradient=yellow]{color:var(--may-label)}';
function Wo({
  children: a,
  gradient: t = "blue",
  size: r = "sm",
  label: o,
  className: n,
  "aria-label": i,
  ...l
}) {
  const s = o ?? i;
  return /* @__PURE__ */ e(
    "span",
    {
      ...l,
      "data-slot": "icon-tile",
      "data-gradient": t,
      "data-size": r,
      role: s ? "img" : void 0,
      "aria-label": s,
      "aria-hidden": s ? void 0 : !0,
      className: I("may-icon-tile", n),
      children: a
    }
  );
}
const Ko = R("IconTile", Yo), Xo = [Ko], Ks = C("IconTile", Wo, Xo), Zo = ".may-text.may-label{display:inline-flex;align-items:baseline;gap:var(--may-space-1);cursor:default}.may-text.may-label[for]{cursor:pointer}.may-text.may-label[data-disabled=true]{opacity:.35;cursor:not-allowed;pointer-events:none}.may-label__required{color:var(--may-color-danger);line-height:1}.may-text.may-label.may-label--eyebrow{--may-txt-color: var(--may-color-text-secondary);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:.06em;text-transform:uppercase}", Jo = Z(function({
  children: t,
  htmlFor: r,
  required: o = !1,
  disabled: n = !1,
  variant: i = "subheadline",
  tone: l = "default",
  weight: s = "medium",
  uppercase: m = !1,
  className: u,
  ...y
}, g) {
  return /* @__PURE__ */ T(
    "label",
    {
      ...y,
      ref: g,
      htmlFor: r,
      "data-slot": "label",
      "data-variant": i,
      "data-tone": l,
      "data-weight": s,
      "data-disabled": n ? "true" : void 0,
      className: I("may-text", "may-label", m && "may-label--eyebrow", u),
      children: [
        t,
        o && /* @__PURE__ */ T(pa, { children: [
          /* @__PURE__ */ e("span", { className: "may-label__required", "aria-hidden": !0, children: "*" }),
          /* @__PURE__ */ e("span", { className: "may-sr-only", children: "(required)" })
        ] })
      ]
    }
  );
}), Qo = R("Label", Zo), Vo = R("Text", qa), an = [Vo, Qo], Xs = C("Label", Jo, an), tn = '.may-menu{display:flex;flex-direction:column;min-width:220px;padding-block:var(--may-space-1)}.may-menu__item{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-space-4);border:0;background:transparent;color:var(--may-color-text);font-family:inherit;font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);text-align:start;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-menu__item:disabled{cursor:not-allowed;opacity:.35}.may-menu__item[data-separator=true]{margin-block-start:var(--may-space-1)}.may-menu__item[data-separator=true]:before{content:"";position:absolute;inset-block-start:calc(var(--may-space-1) / -2);inset-inline:0;height:1px;background:var(--may-color-separator)}@media(min-resolution:2dppx){.may-menu__item[data-separator=true]:before{height:var(--may-hairline)}}.may-menu__item[data-pressed=true]{background:var(--may-color-highlight-strong)}@media(hover:hover)and (pointer:fine){.may-menu__item:hover:not(:disabled){background:var(--may-color-highlight)}}.may-menu .may-menu__item:focus-visible{outline:none;background:var(--may-color-highlight-strong)}.may-menu__item[data-destructive=true]{color:var(--may-color-danger)}.may-menu__icon{display:inline-flex;align-items:center;flex-shrink:0;color:var(--may-color-text-secondary)}.may-menu__item[data-destructive=true] .may-menu__icon{color:inherit}.may-menu__item[data-checked=true] .may-menu__icon{color:var(--may-color-tint)}.may-menu__icon>svg{width:1.15em;height:1.15em;display:block}.may-menu__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-menu__shortcut{flex-shrink:0;color:var(--may-color-text-tertiary);font-size:var(--may-text-subheadline);letter-spacing:var(--may-text-subheadline-tracking)}', en = ".may-popover,.may-popover__anchor{display:inline-flex;max-width:100%;min-width:0}.may-popover__trigger{display:inline-flex;align-items:center;justify-content:center;min-height:var(--may-control-h);padding-inline:var(--may-space-2);border:0;border-radius:var(--may-radius-sm);background:transparent;color:var(--may-color-tint);font:inherit;font-size:var(--may-text-body);font-weight:var(--may-text-headline-weight);cursor:pointer}@media(hover:hover)and (pointer:fine){.may-popover__trigger:hover{background:var(--may-color-fill-quaternary)}}.may-popover__surface{--may-popover-anchor: 50%;position:fixed;top:0;left:0;z-index:var(--may-z-popover);display:flex;flex-direction:column;min-height:0;max-width:calc(100vw - var(--may-space-4));border-radius:var(--may-radius-sheet);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-lg);opacity:0}.may-popover__surface[data-side=bottom]{transform-origin:var(--may-popover-anchor) 0}.may-popover__surface[data-side=top]{transform-origin:var(--may-popover-anchor) 100%}.may-popover__surface[data-side=right]{transform-origin:0 var(--may-popover-anchor)}.may-popover__surface[data-side=left]{transform-origin:100% var(--may-popover-anchor)}.may-popover__surface[data-positioned=true][data-state=open]{opacity:1;animation:may-popover-in var(--may-duration-settle) var(--may-ease-out)}.may-popover__surface[data-state=closed]{opacity:0;animation:may-popover-out var(--may-duration-fast) var(--may-ease-out);pointer-events:none}.may-popover__body{flex:1;min-height:0;overflow-y:auto;border-radius:inherit;padding:var(--may-space-4)}.may-popover__surface[data-padded=false] .may-popover__body{padding:0}.may-popover__arrow{position:absolute;width:var(--may-space-3);height:var(--may-space-3);margin:calc(var(--may-space-3) / -2);border-radius:2px;background:var(--may-color-surface);transform:rotate(45deg)}.may-popover__surface[data-side=bottom]>.may-popover__arrow{top:0;left:var(--may-popover-anchor)}.may-popover__surface[data-side=top]>.may-popover__arrow{bottom:0;left:var(--may-popover-anchor)}.may-popover__surface[data-side=right]>.may-popover__arrow{left:0;top:var(--may-popover-anchor)}.may-popover__surface[data-side=left]>.may-popover__arrow{right:0;top:var(--may-popover-anchor)}@keyframes may-popover-in{0%{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@keyframes may-popover-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.96)}}", rn = R("Popover", en), on = [rn], nn = C("Popover", Mt, on), sn = 700;
function ln({
  trigger: a,
  items: t = [],
  placement: r = "bottom-start",
  offset: o = 6,
  open: n,
  defaultOpen: i = !1,
  onOpenChange: l,
  className: s,
  "aria-label": m
}) {
  const [u, y] = U(i), g = n ?? u, [v, p] = U(-1), _ = B([]), d = B(t);
  d.current = t;
  const k = B(""), E = B(0), b = X(
    (c) => {
      n === void 0 && y(c), l == null || l(c);
    },
    [n, l]
  );
  Y(() => {
    g && p(d.current.findIndex((c) => !c.disabled));
  }, [g]), Y(() => {
    var c;
    !g || v < 0 || (c = _.current[v]) == null || c.focus({ preventScroll: !0 });
  }, [g, v]);
  const $ = (c) => {
    var z;
    const w = t.length;
    if (w === 0) return;
    const M = v >= 0 ? v : c === 1 ? -1 : 0;
    for (let O = 1; O <= w; O++) {
      const S = ((M + c * O) % w + w) % w;
      if (!((z = t[S]) != null && z.disabled)) {
        p(S);
        return;
      }
    }
  }, P = (c) => {
    const w = c === 1 ? t.findIndex((M) => !M.disabled) : cn(t);
    w >= 0 && p(w);
  }, D = (c) => {
    var M;
    const w = t[c];
    !w || w.disabled || ((M = w.onSelect) == null || M.call(w), b(!1));
  }, A = () => k.current !== "" && Date.now() - E.current <= sn, h = (c) => {
    const w = Date.now();
    k.current = A() ? k.current + c : c, E.current = w;
    const M = /^(.)\1*$/.test(k.current), z = M ? k.current[0] : k.current, O = !M && k.current.length > 1, S = (v < 0 ? -1 : v) + (O ? 0 : 1);
    for (let N = 0; N < t.length; N++) {
      const L = (S + N + t.length) % t.length, j = t[L];
      if (!j.disabled && j.label.toLowerCase().startsWith(z)) {
        p(L);
        return;
      }
    }
  }, x = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), $(1);
        return;
      case "ArrowUp":
        c.preventDefault(), $(-1);
        return;
      case "Home":
        c.preventDefault(), P(1);
        return;
      case "End":
        c.preventDefault(), P(-1);
        return;
    }
    c.key === " " && !A() || c.key.length === 1 && !c.metaKey && !c.ctrlKey && !c.altKey && (c.preventDefault(), h(c.key.toLowerCase()));
  }, f = v >= 0 ? v : t.findIndex((c) => !c.disabled);
  return /* @__PURE__ */ e(
    nn,
    {
      trigger: a,
      open: g,
      onOpenChange: b,
      placement: r,
      offset: o,
      arrow: !1,
      padded: !1,
      role: "none",
      haspopup: "menu",
      className: s,
      children: /* @__PURE__ */ e(
        "div",
        {
          role: "menu",
          "aria-label": m,
          "data-slot": "menu",
          className: "may-menu",
          onKeyDown: x,
          children: t.map((c, w) => /* @__PURE__ */ e(
            mn,
            {
              item: c,
              tabbable: w === f,
              register: (M) => {
                _.current[w] = M;
              },
              onActivate: () => D(w),
              onHover: () => {
                c.disabled || p(w);
              }
            },
            `${c.label}-${w}`
          ))
        }
      )
    }
  );
}
function cn(a) {
  var t;
  for (let r = a.length - 1; r >= 0; r--) if (!((t = a[r]) != null && t.disabled)) return r;
  return -1;
}
function mn({ item: a, tabbable: t, register: r, onActivate: o, onHover: n }) {
  const { pressProps: i } = W(a.disabled);
  return /* @__PURE__ */ T(
    "button",
    {
      ...i,
      ref: r,
      type: "button",
      role: a.checked === void 0 ? "menuitem" : "menuitemcheckbox",
      "aria-checked": a.checked,
      "data-slot": "menu-item",
      "data-checked": a.checked ? "true" : void 0,
      "data-destructive": a.destructive ? "true" : void 0,
      "data-separator": a.separator ? "true" : void 0,
      tabIndex: t ? 0 : -1,
      disabled: a.disabled,
      onClick: o,
      onPointerEnter: n,
      className: I("may-menu__item", "may-hoverable"),
      children: [
        (a.icon || a.checked !== void 0) && /* @__PURE__ */ e("span", { className: "may-menu__icon", "aria-hidden": !0, children: a.checked === void 0 ? a.icon : a.checked ? /* @__PURE__ */ e(Fa, {}) : null }),
        /* @__PURE__ */ e("span", { className: "may-menu__label", children: a.label }),
        a.shortcut && /* @__PURE__ */ e("span", { className: "may-menu__shortcut", "aria-hidden": !0, children: a.shortcut })
      ]
    }
  );
}
const dn = R("Menu", tn), yn = [dn], Zs = C("Menu", ln, yn), pn = ".may-modal__scrim{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--may-z-overlay);display:flex;align-items:center;justify-content:center;padding:var(--may-space-5);padding-block-start:calc(var(--may-space-5) + var(--may-inset-top));padding-block-end:calc(var(--may-space-5) + var(--may-inset-bottom));background:var(--may-color-scrim);animation:may-modal-scrim-in var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}@media(min-width:700px){.may-modal__scrim{padding:var(--may-space-10);padding-block-start:calc(var(--may-space-10) + var(--may-inset-top));padding-block-end:calc(var(--may-space-10) + var(--may-inset-bottom))}}.may-modal{position:relative;display:flex;flex-direction:column;width:100%;min-height:0;max-height:100%;border-radius:var(--may-radius-sheet);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-xl);overflow:hidden;animation:may-modal-in var(--may-duration-settle) var(--may-ease-out),may-modal-fade var(--may-duration-fast) var(--may-ease-out);transition:opacity var(--may-duration-fast) var(--may-ease-out)}.may-modal[data-size=sm]{max-width:360px}.may-modal[data-size=md]{max-width:480px}.may-modal[data-size=lg]{max-width:680px}.may-modal[data-size=full]{max-width:960px}.may-modal__close{position:absolute;inset-block-start:var(--may-space-2);inset-inline-end:var(--may-space-2);z-index:var(--may-z-base);display:inline-flex;align-items:center;justify-content:center;width:var(--may-control-h);height:var(--may-control-h);padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text-secondary);cursor:pointer}.may-modal__close-chip{display:inline-flex;align-items:center;justify-content:center;width:var(--may-control-h-xs);height:var(--may-control-h-xs);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-modal__close-chip>svg{width:60%;height:60%;display:block}.may-modal__close[data-pressed=true] .may-modal__close-chip{background:var(--may-color-fill)}@media(hover:hover)and (pointer:fine){.may-modal__close:hover .may-modal__close-chip{background:var(--may-color-fill-secondary)}}.may-modal__header{padding:var(--may-space-5) var(--may-space-5) var(--may-space-3);flex-shrink:0}.may-modal[data-closable=true] .may-modal__header{padding-inline-end:calc(var(--may-control-h) + var(--may-space-2))}.may-modal__title{margin:0;font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);font-weight:var(--may-text-title-3-weight)}.may-modal__description{margin:var(--may-space-1) 0 0;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text-secondary)}.may-modal__body{flex:1;min-height:0;overflow-y:auto;padding:0 var(--may-space-5) var(--may-space-5)}.may-modal:not(:has(.may-modal__header)) .may-modal__body{padding-block-start:var(--may-space-5)}.may-modal__footer{display:flex;align-items:center;justify-content:flex-end;gap:var(--may-space-2);padding:var(--may-space-4) var(--may-space-5) var(--may-space-5);flex-shrink:0}.may-modal[data-presentation=compact] .may-modal__footer{flex-direction:column-reverse;align-items:stretch;padding-block-start:var(--may-space-3)}.may-modal[data-presentation=compact] .may-modal__footer>*{width:100%}.may-modal__scrim[data-state=closed]{opacity:0;pointer-events:none}.may-modal[data-state=closed]{opacity:0}@keyframes may-modal-scrim-in{0%{opacity:0}to{opacity:1}}@keyframes may-modal-fade{0%{opacity:0}to{opacity:1}}@keyframes may-modal-in{0%{transform:translateY(var(--may-space-2)) scale(.9)}to{transform:translateY(0) scale(1)}}.may-modal__footer[data-footer=stack]{flex-direction:column;align-items:stretch;justify-content:flex-start}.may-modal__footer[data-footer=fill]{justify-content:stretch}.may-modal__footer[data-footer=fill]>*{flex:1 1 0}", un = 150, vn = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function hn({
  open: a,
  onClose: t,
  children: r,
  title: o,
  description: n,
  footer: i,
  footerLayout: l = "end",
  size: s = "md",
  closeButton: m = !0,
  closeLabel: u = "Close",
  closeOnScrimClick: y = !0,
  closeOnEscape: g = !0,
  className: v,
  ...p
}) {
  const _ = B(null), d = B(null), k = ta(), E = va(), b = oa(), $ = Sa(a, b ? 0 : un), { pressProps: P } = W();
  Y(() => {
    if (!$) return;
    const h = _.current;
    d.current = document.activeElement;
    const x = document.body, f = x.style.overflow, c = x.style.paddingRight, w = window.innerWidth - document.documentElement.clientWidth;
    return x.style.overflow = "hidden", w > 0 && (x.style.paddingRight = `${w}px`), h && !h.contains(document.activeElement) && h.focus(), () => {
      var M, z;
      x.style.overflow = f, x.style.paddingRight = c, (z = (M = d.current) == null ? void 0 : M.focus) == null || z.call(M);
    };
  }, [$]);
  const D = (h) => {
    var w;
    if (h.key === "Escape") {
      if (!g) return;
      h.stopPropagation(), t();
      return;
    }
    if (h.key !== "Tab") return;
    const x = (w = _.current) == null ? void 0 : w.querySelectorAll(vn);
    if (!x || x.length === 0) return;
    const f = x[0], c = x[x.length - 1];
    h.shiftKey && document.activeElement === f ? (h.preventDefault(), c.focus()) : !h.shiftKey && document.activeElement === c && (h.preventDefault(), f.focus());
  }, A = (h) => {
    var x;
    if (h.target === h.currentTarget) {
      if (y) {
        t();
        return;
      }
      (x = _.current) == null || x.focus();
    }
  };
  return $ ? /* @__PURE__ */ e(
    "div",
    {
      className: "may-modal__scrim",
      "data-slot": "scrim",
      "data-state": a ? "open" : "closed",
      onMouseDown: A,
      onKeyDown: D,
      children: /* @__PURE__ */ T(
        "div",
        {
          ref: _,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": o ? `${k}-title` : void 0,
          "aria-describedby": n ? `${k}-description` : void 0,
          tabIndex: -1,
          "data-slot": "modal",
          "data-state": a ? "open" : "closed",
          "data-size": s,
          "data-presentation": E ? "desktop" : "compact",
          "data-closable": m ? "true" : void 0,
          ...p,
          className: I("may-modal", v),
          children: [
            m && /* @__PURE__ */ e(
              "button",
              {
                ...P,
                type: "button",
                onClick: t,
                "aria-label": u,
                "data-slot": "modal-close",
                className: "may-modal__close may-pressable may-hoverable",
                children: /* @__PURE__ */ e("span", { className: "may-modal__close-chip", "aria-hidden": !0, children: /* @__PURE__ */ e(ha, { focusable: "false" }) })
              }
            ),
            (o || n) && /* @__PURE__ */ T("header", { className: "may-modal__header", children: [
              o && /* @__PURE__ */ e("h2", { className: "may-modal__title", id: `${k}-title`, children: o }),
              n && /* @__PURE__ */ e("p", { className: "may-modal__description", id: `${k}-description`, children: n })
            ] }),
            r && /* @__PURE__ */ e("div", { className: "may-modal__body", "data-slot": "scroll-area", children: r }),
            i && /* @__PURE__ */ e("footer", { className: "may-modal__footer", "data-footer": l, children: i })
          ]
        }
      )
    }
  ) : null;
}
const gn = R("Modal", pn), fn = [gn], Js = C("Modal", hn, fn), bn = '.may-nav-bar{--may-nav-progress: 0;--may-nav-large-h: var(--may-text-large-title-leading);position:relative;display:flex;flex-direction:column;width:100%;min-width:0;background:transparent;color:var(--may-color-text)}.may-nav-bar[data-large-title=true]:before{content:none}.may-nav-bar[data-large-title=true] .may-nav-bar__bar:before{content:"";position:absolute;inset-inline:0;inset-block-start:0;block-size:calc(100% + var(--may-space-6));background:linear-gradient(to bottom,var(--may-color-bg) 45%,color-mix(in srgb,var(--may-color-bg) 60%,transparent) 72%,transparent);pointer-events:none;z-index:-1}.may-nav-bar:before{content:"";position:absolute;inset-inline:0;inset-block-start:0;block-size:calc(100% + var(--may-space-6));background:linear-gradient(to bottom,var(--may-color-bg) 45%,color-mix(in srgb,var(--may-color-bg) 60%,transparent) 72%,transparent);pointer-events:none;z-index:-1}.may-nav-bar[data-sticky=true]:not([data-large-title=true]){position:sticky;inset-block-start:0;z-index:var(--may-z-nav)}.may-nav-bar[data-sticky=true][data-large-title=true]{display:contents}.may-nav-bar[data-sticky=true][data-large-title=true] .may-nav-bar__bar{position:sticky;inset-block-start:0;z-index:var(--may-z-nav)}.may-nav-bar__bar{display:grid;grid-template-columns:minmax(var(--may-control-h),1fr) auto minmax(var(--may-control-h),1fr);align-items:center;gap:var(--may-space-2);min-height:var(--may-navbar-h);padding-inline:var(--may-space-2)}.may-nav-bar__side{display:flex;align-items:center;gap:var(--may-space-1);min-width:0}.may-nav-bar__side--leading{justify-content:flex-start}.may-nav-bar__side--trailing{justify-content:flex-end}.may-nav-bar__back-chip{--may-nav-back-size: calc(var(--may-control-h) * .82);--may-nav-back-hit: var(--may-control-h);position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:var(--may-nav-back-size);block-size:var(--may-nav-back-size);padding:0;border:0;border-radius:var(--may-radius-full);background:var(--may-color-surface);color:var(--may-color-tint);box-shadow:var(--may-shadow-sm);cursor:pointer}.may-nav-bar__back-chip:after{content:"";position:absolute;inset:calc((var(--may-nav-back-hit) - var(--may-nav-back-size)) / -2)}.may-nav-bar__back-chevron{width:1.15em;height:1.15em;display:block}[dir=rtl] .may-nav-bar__back-chevron{transform:scaleX(-1)}.may-nav-bar__title{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0;text-align:center}.may-nav-bar__title-text{margin:0;font-size:var(--may-text-headline);line-height:var(--may-text-headline-leading);letter-spacing:var(--may-text-headline-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}.may-nav-bar__subtitle{font-size:var(--may-text-caption-2);line-height:var(--may-text-caption-2-leading);letter-spacing:var(--may-text-caption-2-tracking);color:var(--may-color-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}.may-nav-bar[data-large-title=true] .may-nav-bar__title-text,.may-nav-bar[data-large-title=true] .may-nav-bar__subtitle{opacity:calc(var(--may-nav-progress) * 2.2 - 1.2);transform:translateY(calc((1 - var(--may-nav-progress)) * var(--may-space-2)))}.may-nav-bar__large{display:flex;align-items:flex-end;overflow:hidden;min-block-size:var(--may-nav-large-h);padding-inline:var(--may-space-4)}.may-nav-bar[data-large-title=true]{padding-block-end:var(--may-space-2)}.may-nav-bar__large-group{display:flex;flex-direction:column;gap:var(--may-space-1);min-width:0;transform-origin:0 100%;transform:scale(calc(1 - var(--may-nav-progress) * .14));opacity:calc(1 - var(--may-nav-progress) * 1.5)}[dir=rtl] .may-nav-bar__large-group{transform-origin:100% 100%}.may-nav-bar__large-subtitle{margin:0;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.may-nav-bar__large-title{margin:0;font-size:var(--may-text-large-title);line-height:var(--may-text-large-title-leading);letter-spacing:var(--may-text-large-title-tracking);font-weight:var(--may-text-large-title-weight);color:var(--may-color-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.may-nav-bar[data-safe-area=true],.may-nav-bar[data-large-title=true][data-safe-area=true] .may-nav-bar__bar{padding-block-start:var(--may-inset-top)}.may-nav-bar[data-safe-area=true] .may-nav-bar__bar{padding-inline:calc(var(--may-space-2) + var(--may-inset-left)) calc(var(--may-space-2) + var(--may-inset-right))}.may-nav-bar[data-safe-area=true] .may-nav-bar__large{padding-inline:calc(var(--may-space-4) + var(--may-inset-left)) calc(var(--may-space-4) + var(--may-inset-right))}';
function _n({
  title: a,
  subtitle: t,
  largeTitle: r = !1,
  leading: o,
  trailing: n,
  onBack: i,
  backLabel: l = "Back",
  scrollRef: s,
  sticky: m = !0,
  safeArea: u = !0,
  className: y,
  ...g
}) {
  const v = B(null), p = B(null), _ = W();
  Y(() => {
    const k = v.current;
    if (!k) return;
    const E = (s == null ? void 0 : s.current) ?? null, b = E ?? window;
    let $ = 0, P = -1, D = "", A = null;
    const h = () => {
      var z;
      $ = 0;
      const f = E ? E.scrollTop : window.scrollY, c = ((z = p.current) == null ? void 0 : z.offsetHeight) ?? 0;
      c !== P && (P = c, k.style.setProperty("--may-nav-large-h", `${c}px`));
      const w = (c > 0 ? Math.min(1, Math.max(0, f / c)) : 0).toFixed(3);
      w !== D && (D = w, k.style.setProperty("--may-nav-progress", w));
      const M = f > 0;
      M !== A && (A = M, k.toggleAttribute("data-scrolled", M));
    }, x = () => {
      $ || ($ = requestAnimationFrame(h));
    };
    return h(), b.addEventListener("scroll", x, { passive: !0 }), window.addEventListener("resize", x), () => {
      $ && cancelAnimationFrame($), b.removeEventListener("scroll", x), window.removeEventListener("resize", x);
    };
  }, [s, r]);
  const d = i && /* @__PURE__ */ e(
    "button",
    {
      ..._.pressProps,
      type: "button",
      onClick: i,
      "aria-label": typeof l == "string" ? l : void 0,
      "data-slot": "nav-bar-back",
      className: "may-nav-bar__back-chip may-pressable may-hoverable",
      children: /* @__PURE__ */ e(Vt, { className: "may-nav-bar__back-chevron", "aria-hidden": !0, focusable: "false" })
    }
  );
  return /* @__PURE__ */ T(
    "header",
    {
      ...g,
      ref: v,
      "data-slot": "nav-bar",
      "data-large-title": r ? "true" : void 0,
      "data-sticky": m ? "true" : void 0,
      "data-safe-area": u ? "true" : void 0,
      className: I("may-nav-bar", y),
      children: [
        /* @__PURE__ */ T("div", { className: "may-nav-bar__bar", children: [
          /* @__PURE__ */ e("div", { className: "may-nav-bar__side may-nav-bar__side--leading", children: o ?? d }),
          /* @__PURE__ */ T("div", { className: "may-nav-bar__title", children: [
            r ? (
              // The large title below is the real heading; this one is its
              // visual twin, so announcing both would read the view's name
              // twice.
              /* @__PURE__ */ e("span", { className: "may-nav-bar__title-text", "aria-hidden": !0, children: a })
            ) : /* @__PURE__ */ e("h1", { className: "may-nav-bar__title-text", children: a }),
            t && /* @__PURE__ */ e("span", { className: "may-nav-bar__subtitle", children: t })
          ] }),
          /* @__PURE__ */ e("div", { className: "may-nav-bar__side may-nav-bar__side--trailing", children: n })
        ] }),
        r && /* @__PURE__ */ e("div", { className: "may-nav-bar__large", children: /* @__PURE__ */ T("div", { ref: p, className: "may-nav-bar__large-group", children: [
          /* @__PURE__ */ e("h1", { className: "may-nav-bar__large-title", children: a }),
          t && /* @__PURE__ */ e("p", { className: "may-nav-bar__large-subtitle", children: t })
        ] }) })
      ]
    }
  );
}
const xn = R("NavigationBar", bn), wn = [xn], Qs = C("NavigationBar", _n, wn), kn = '.may-notice{position:relative;display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-width:0;min-height:var(--may-control-h);padding:var(--may-space-2) var(--may-space-4);background:var(--may-notice-bg);color:var(--may-notice-fg);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);font-weight:500;animation:may-notice-in var(--may-duration-settle) var(--may-spring-bouncy) both}.may-notice[data-tone=tint]{--may-notice-bg: var(--may-color-primary);--may-notice-fg: var(--may-color-on-primary)}.may-notice[data-tone=neutral]{--may-notice-bg: var(--may-color-fill-secondary);--may-notice-fg: var(--may-color-text)}.may-notice[data-tone=success]{--may-notice-bg: var(--may-color-success);--may-notice-fg: var(--may-on-color)}.may-notice[data-tone=warning]{--may-notice-bg: var(--may-color-warning);--may-notice-fg: var(--may-label)}.may-notice[data-tone=danger]{--may-notice-bg: var(--may-color-destructive);--may-notice-fg: var(--may-color-on-destructive)}.may-notice__icon{display:inline-flex;align-items:center;flex-shrink:0}.may-notice__icon>svg{width:1.15em;height:1.15em;display:block}.may-notice__action{display:inline-flex;align-items:center;flex-shrink:0;color:inherit}.may-notice__action [data-slot=button][data-variant=plain],.may-notice__action [data-slot=button][data-variant=gray],.may-notice__action [data-slot=icon-button][data-variant=plain]{color:inherit}.may-notice__viewport{flex:1;min-width:0;overflow:hidden}.may-notice__track{--may-notice-shift: 0px;--may-notice-duration: calc(var(--may-duration-sheet-in) * 20);display:flex;min-width:0}.may-notice[data-marquee=true] .may-notice__copy{flex:none;white-space:nowrap;padding-inline-end:var(--may-space-16)}.may-notice__track[data-scrolling=true]{animation:may-notice-marquee var(--may-notice-duration) linear infinite;will-change:transform}@keyframes may-notice-marquee{0%{transform:translate(0)}to{transform:translate(calc(-1 * var(--may-notice-shift)))}}@media(hover:hover)and (pointer:fine){.may-notice:hover .may-notice__track[data-scrolling=true]{animation-play-state:paused}}.may-notice__close{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:calc(var(--may-control-h) * .5);height:calc(var(--may-control-h) * .5);padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:inherit;cursor:pointer;opacity:.65;transition:opacity var(--may-duration-fast) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-notice__close:after{--may-notice-slop: calc((var(--may-control-h) - var(--may-control-h) * .5) / 2);content:"";position:absolute;inset:calc(var(--may-notice-slop) * -1)}.may-notice__close>svg{width:.8em;height:.8em;display:block}@media(hover:hover)and (pointer:fine){.may-notice__close:hover{opacity:1}}.may-notice__close[data-pressed=true]{opacity:1}@keyframes may-notice-in{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:none}}.may-notice[data-exiting=true]{animation:may-notice-out var(--may-duration-fast) var(--may-ease-out) forwards;pointer-events:none}@keyframes may-notice-out{0%{opacity:1;transform:none}to{opacity:0;transform:translateY(-100%)}}@media(prefers-reduced-motion:reduce){.may-notice__track[data-scrolling=true]{animation:none;transform:none}}';
function zn({
  children: a,
  tone: t = "tint",
  icon: r,
  action: o,
  onClose: n,
  closeLabel: i = "Dismiss",
  marquee: l = !1,
  speed: s = 44,
  role: m,
  className: u,
  ...y
}) {
  const g = B(null), v = B(null), p = oa(), [_, d] = U(0), [k, E] = U(!1), { pressProps: b } = W(!n), $ = l && !p, P = _ > 0;
  Y(() => {
    const A = g.current, h = v.current;
    if (!$ || !A || !h) {
      d(0);
      return;
    }
    const x = () => {
      const c = parseFloat(getComputedStyle(h).paddingInlineEnd) || 0, w = h.offsetWidth - c;
      d(w > A.clientWidth ? h.offsetWidth : 0);
    };
    if (x(), typeof ResizeObserver > "u") return;
    const f = new ResizeObserver(x);
    return f.observe(A), f.observe(h), () => f.disconnect();
  }, [$]);
  const D = (A) => {
    !k || A.target !== A.currentTarget || (n == null || n(), E(!1));
  };
  return /* @__PURE__ */ T(
    "div",
    {
      ...y,
      "data-slot": "notice-bar",
      "data-tone": t,
      "data-marquee": $ ? "true" : void 0,
      "data-exiting": k ? "true" : void 0,
      role: m ?? (t === "danger" ? "alert" : "status"),
      className: I("may-notice", u),
      onAnimationEnd: D,
      children: [
        r && /* @__PURE__ */ e("span", { className: "may-notice__icon", "aria-hidden": !0, children: r }),
        /* @__PURE__ */ e("div", { className: "may-notice__viewport", ref: g, children: /* @__PURE__ */ T(
          "div",
          {
            className: "may-notice__track",
            "data-scrolling": P ? "true" : void 0,
            style: P ? {
              "--may-notice-shift": `${_}px`,
              // Content-derived, not a design duration: holding a constant
              // SPEED is what keeps a long notice and a short one equally
              // readable. A token here would do the opposite.
              "--may-notice-duration": `${_ / s}s`
            } : void 0,
            children: [
              /* @__PURE__ */ e("span", { className: "may-notice__copy", ref: v, children: a }),
              P && /* @__PURE__ */ e("span", { className: "may-notice__copy", "aria-hidden": !0, children: a })
            ]
          }
        ) }),
        o && /* @__PURE__ */ e("div", { className: "may-notice__action", children: o }),
        n && /* @__PURE__ */ e(
          "button",
          {
            ...b,
            type: "button",
            onClick: () => E(!0),
            "aria-label": i,
            className: "may-notice__close may-pressable may-hoverable",
            children: /* @__PURE__ */ e(ha, { "aria-hidden": !0, focusable: "false" })
          }
        )
      ]
    }
  );
}
const Nn = R("NoticeBar", kn), $n = [Nn], Vs = C("NoticeBar", zn, $n), Sn = ".may-progress,.may-ring{--may-progress-tint: var(--may-color-primary)}.may-progress[data-tone=neutral],.may-ring[data-tone=neutral]{--may-progress-tint: var(--may-label)}.may-progress[data-tone=success],.may-ring[data-tone=success]{--may-progress-tint: var(--may-color-success)}.may-progress[data-tone=warning],.may-ring[data-tone=warning]{--may-progress-tint: var(--may-color-warning)}.may-progress[data-tone=danger],.may-ring[data-tone=danger]{--may-progress-tint: var(--may-color-destructive)}.may-progress{--may-progress-pct: 0;display:flex;flex-direction:column;gap:var(--may-space-2);width:100%;min-width:0}.may-progress__meta{display:flex;align-items:baseline;justify-content:space-between;gap:var(--may-space-3);min-width:0}.may-progress__label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);color:var(--may-color-text)}.may-progress__value{flex-shrink:0;min-width:4ch;text-align:end;font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-variant-numeric:tabular-nums;color:var(--may-color-text-secondary)}.may-progress__track{position:relative;width:100%;height:var(--may-progress-h);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);overflow:hidden}.may-progress__fill{position:absolute;inset-block:0;inset-inline-start:0;width:calc(var(--may-progress-pct) * 100%);border-radius:inherit;background:var(--may-progress-tint);transition:width var(--may-duration-settle) var(--may-spring-snappy)}.may-progress[data-size=xs]{--may-progress-h: calc(var(--may-space-1) / 2)}.may-progress[data-size=sm]{--may-progress-h: calc(var(--may-space-1) * .75)}.may-progress[data-size=md]{--may-progress-h: var(--may-space-1)}.may-progress[data-size=lg]{--may-progress-h: var(--may-space-2)}.may-progress[data-indeterminate=true] .may-progress__fill{width:40%;transition:none;animation:may-progress-sweep calc(var(--may-duration-sheet-in) * 3) var(--may-ease-standard) infinite}@keyframes may-progress-sweep{0%{transform:translate(-100%)}to{transform:translate(250%)}}@media(prefers-reduced-motion:reduce){.may-progress[data-indeterminate=true] .may-progress__fill{animation:none;width:100%;opacity:.4}}.may-ring{position:relative;display:inline-grid;place-items:center;flex-shrink:0;width:var(--may-ring-size);height:var(--may-ring-size);vertical-align:middle}.may-ring__svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}.may-ring__rail,.may-ring__fill{fill:none;stroke-width:var(--may-ring-stroke)}.may-ring__rail{stroke:var(--may-color-fill-tertiary)}.may-ring__fill{stroke:var(--may-progress-tint);stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset var(--may-duration-settle) var(--may-spring-snappy)}.may-ring__centre{position:absolute;font-size:var(--may-ring-font);line-height:1;font-weight:var(--may-text-headline-weight);letter-spacing:var(--may-text-footnote-tracking);font-variant-numeric:tabular-nums;color:var(--may-color-text)}.may-ring[data-size=xs]{--may-ring-size: calc(var(--may-control-h) * .5);--may-ring-stroke: 10;--may-ring-font: var(--may-text-caption-2)}.may-ring[data-size=sm]{--may-ring-size: calc(var(--may-control-h) * .72);--may-ring-stroke: 9;--may-ring-font: var(--may-text-caption-1)}.may-ring[data-size=md]{--may-ring-size: var(--may-control-h);--may-ring-stroke: 8;--may-ring-font: var(--may-text-footnote)}.may-ring[data-size=lg]{--may-ring-size: calc(var(--may-control-h) * 1.5);--may-ring-stroke: 6.5;--may-ring-font: var(--may-text-subheadline)}.may-ring[data-indeterminate=true] .may-ring__svg{animation:may-ring-spin calc(var(--may-duration-sheet-in) * 2.4) linear infinite}.may-ring[data-indeterminate=true] .may-ring__fill{transition:none;animation:may-ring-breathe calc(var(--may-duration-sheet-in) * 3.4) var(--may-ease-standard) infinite}@keyframes may-ring-spin{to{transform:rotate(270deg)}}@keyframes may-ring-breathe{0%,to{stroke-dashoffset:86}50%{stroke-dashoffset:52}}@media(prefers-reduced-motion:reduce){.may-ring[data-indeterminate=true] .may-ring__svg{animation:none}.may-ring[data-indeterminate=true] .may-ring__fill{animation:none;stroke-dashoffset:75}}", Va = 45, ba = 100;
function Ga(a, t) {
  return !Number.isFinite(a) || !Number.isFinite(t) || t <= 0 ? 0 : Math.min(1, Math.max(0, a / t));
}
const zt = (a, t) => `${Math.round(Ga(a, t) * 100)}%`;
function En({
  value: a = 0,
  max: t = 100,
  indeterminate: r = !1,
  tone: o = "tint",
  size: n = "md",
  showValue: i = !1,
  formatValue: l,
  label: s,
  className: m,
  style: u,
  "aria-label": y,
  ...g
}) {
  const v = Ga(a, t), p = l ? l(a, t) : zt(a, t), _ = ta(), d = i && !r, k = s != null || d;
  return /* @__PURE__ */ T(
    "div",
    {
      ...g,
      "data-slot": "progress",
      "data-tone": o,
      "data-size": n,
      "data-indeterminate": r ? "true" : void 0,
      className: I("may-progress", m),
      style: { ...u, "--may-progress-pct": v },
      children: [
        k && /* @__PURE__ */ T("div", { className: "may-progress__meta", children: [
          s != null && /* @__PURE__ */ e("span", { className: "may-progress__label", id: _, children: s }),
          d && /* @__PURE__ */ e("span", { className: "may-progress__value", children: p })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: "may-progress__track",
            role: "progressbar",
            "aria-labelledby": s != null ? _ : void 0,
            "aria-label": s == null ? y : void 0,
            "aria-valuemin": 0,
            "aria-valuemax": t,
            "aria-valuenow": r ? void 0 : a,
            "aria-valuetext": r ? void 0 : p,
            children: /* @__PURE__ */ e("div", { className: "may-progress__fill" })
          }
        )
      ]
    }
  );
}
function An({
  value: a = 0,
  max: t = 100,
  indeterminate: r = !1,
  tone: o = "tint",
  size: n = "md",
  showValue: i = !1,
  formatValue: l,
  children: s,
  className: m,
  ...u
}) {
  const y = Ga(a, t), g = l ? l(a, t) : zt(a, t), v = s ?? (i && !r ? g : void 0);
  return /* @__PURE__ */ T(
    "div",
    {
      ...u,
      "data-slot": "circular-progress",
      "data-tone": o,
      "data-size": n,
      "data-indeterminate": r ? "true" : void 0,
      className: I("may-ring", m),
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": t,
      "aria-valuenow": r ? void 0 : a,
      "aria-valuetext": r ? void 0 : g,
      children: [
        /* @__PURE__ */ T("svg", { className: "may-ring__svg", viewBox: "0 0 100 100", "aria-hidden": !0, focusable: "false", children: [
          /* @__PURE__ */ e("circle", { className: "may-ring__rail", cx: "50", cy: "50", r: Va, pathLength: ba }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: "may-ring__fill",
              cx: "50",
              cy: "50",
              r: Va,
              pathLength: ba,
              style: r ? void 0 : { strokeDashoffset: ba - y * ba }
            }
          )
        ] }),
        v != null && /* @__PURE__ */ e("span", { className: "may-ring__centre", children: v })
      ]
    }
  );
}
const Tn = R("Progress", Sn), Nt = [Tn], al = C("Progress", En, Nt), tl = C("CircularProgress", An, Nt), In = ".may-radio-group{display:flex;min-width:0}.may-radio-group[data-orientation=vertical]{flex-direction:column;gap:var(--may-space-1)}.may-radio-group[data-orientation=horizontal]{flex-direction:row;flex-wrap:wrap;gap:var(--may-space-2) var(--may-space-5);align-items:center}.may-radio{position:relative;display:inline-flex;align-items:center;gap:var(--may-space-3);min-height:var(--may-control-h);padding-inline:var(--may-space-2);margin-inline:calc(var(--may-space-2) * -1);border-radius:var(--may-radius-md);color:var(--may-color-text);cursor:pointer}.may-radio[data-slot=radio].may-pressable{transform:none}.may-radio:has(.may-radio__description){align-items:flex-start;padding-block:var(--may-space-2)}.may-radio[aria-disabled=true]{cursor:not-allowed;opacity:.35}.may-radio__ring{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-radio-size);height:var(--may-radio-size);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);transform:scale(1);transition:background-color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-radio:has(.may-radio__description) .may-radio__ring{margin-block-start:calc((var(--may-text-body-leading) - var(--may-radio-size)) / 2)}.may-radio[data-pressed=true] .may-radio__ring{transform:scale(.88);transition:transform var(--may-duration-instant) var(--may-ease-out)}.may-radio__input:checked+.may-radio__ring{background:var(--may-color-primary)}.may-radio[data-invalid=true] .may-radio__ring{background:color-mix(in srgb,var(--may-color-destructive) 18%,transparent)}.may-radio[data-invalid=true] .may-radio__input:checked+.may-radio__ring{background:var(--may-color-destructive)}.may-radio__input:focus-visible+.may-radio__ring{outline:3px solid color-mix(in srgb,var(--may-color-ring) 45%,transparent);outline-offset:2px}.may-radio__dot{width:38%;height:38%;border-radius:var(--may-radius-full);background:var(--may-color-on-primary);transform:scale(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-radio__input:checked+.may-radio__ring .may-radio__dot{transform:scale(1)}.may-radio__text{display:flex;flex-direction:column;gap:1px;min-width:0}.may-radio__label{font-size:var(--may-radio-text);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text)}.may-radio__description{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary)}.may-radio[data-size=sm]{--may-radio-size: var(--may-space-5);--may-radio-text: var(--may-text-subheadline)}.may-radio[data-size=md]{--may-radio-size: var(--may-space-6);--may-radio-text: var(--may-text-body)}.may-radio[data-size=lg]{--may-radio-size: calc(var(--may-space-6) + var(--may-space-1));--may-radio-text: var(--may-text-body)}", $t = $a(null);
function Cn({
  children: a,
  name: t,
  value: r,
  defaultValue: o,
  onValueChange: n,
  orientation: i = "vertical",
  size: l = "md",
  disabled: s,
  invalid: m,
  className: u,
  "aria-describedby": y,
  ...g
}) {
  const v = Ea({ invalid: m, disabled: s, "aria-describedby": y }), p = ta(t), [_, d] = U(o), k = r ?? _, E = !!v.disabled, b = ua(
    () => ({
      name: p,
      value: k,
      select: ($) => {
        r === void 0 && d($), n == null || n($);
      },
      size: l,
      disabled: E,
      invalid: v.invalid
    }),
    [p, k, r, n, l, E, v.invalid]
  );
  return /* @__PURE__ */ e($t.Provider, { value: b, children: /* @__PURE__ */ e(
    "div",
    {
      ...g,
      role: "radiogroup",
      "data-slot": "radio-group",
      "data-size": l,
      "data-orientation": i,
      "data-invalid": v.invalid ? "true" : void 0,
      "aria-disabled": E || void 0,
      "aria-invalid": v.invalid || void 0,
      "aria-describedby": v["aria-describedby"],
      className: I("may-radio-group", u),
      children: a
    }
  ) });
}
const Dn = Z(function({
  value: t,
  children: r,
  description: o,
  size: n,
  invalid: i,
  onChange: l,
  checked: s,
  defaultChecked: m,
  disabled: u,
  name: y,
  className: g,
  style: v,
  ...p
}, _) {
  const d = Na($t), k = u ?? (d == null ? void 0 : d.disabled) ?? !1, E = i ?? (d == null ? void 0 : d.invalid) ?? !1, { pressProps: b } = W(k), $ = d ? d.value === t : s, P = (D) => {
    D.target.checked && (d == null || d.select(t)), l == null || l(D);
  };
  return /* @__PURE__ */ T(
    "label",
    {
      ...b,
      "data-slot": "radio",
      "data-size": n ?? (d == null ? void 0 : d.size) ?? "md",
      "data-checked": $ ? "true" : void 0,
      "data-invalid": E ? "true" : void 0,
      "aria-disabled": k || void 0,
      className: I("may-radio", "may-pressable", "may-hoverable", g),
      style: v,
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            ...p,
            ref: _,
            type: "radio",
            className: "may-radio__input may-sr-only",
            name: y ?? (d == null ? void 0 : d.name),
            value: t,
            disabled: k,
            "aria-invalid": E || void 0,
            onChange: P,
            ...d || s !== void 0 ? { checked: !!$ } : { defaultChecked: m }
          }
        ),
        /* @__PURE__ */ e("span", { className: "may-radio__ring", children: /* @__PURE__ */ e("span", { className: "may-radio__dot", "aria-hidden": !0 }) }),
        (r != null || o != null) && /* @__PURE__ */ T("span", { className: "may-radio__text", children: [
          r != null && /* @__PURE__ */ e("span", { className: "may-radio__label", children: r }),
          o != null && /* @__PURE__ */ e("span", { className: "may-radio__description", children: o })
        ] })
      ]
    }
  );
}), Pn = R("RadioGroup", In), St = [Pn], el = C("RadioGroup", Cn, St), rl = C("Radio", Dn, St), Mn = ".may-safe-area[data-edges~=top]{padding-top:var(--may-inset-top)}.may-safe-area[data-edges~=bottom]{padding-bottom:var(--may-inset-bottom)}.may-safe-area[data-edges~=left]{padding-left:var(--may-inset-left)}.may-safe-area[data-edges~=right]{padding-right:var(--may-inset-right)}", Ln = ["top", "bottom", "left", "right"], Rn = Z(function({ edges: t = Ln, className: r, children: o, ...n }, i) {
  const l = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ e(
    "div",
    {
      ...n,
      ref: i,
      "data-slot": "safe-area",
      "data-edges": l.join(" "),
      "aria-hidden": o == null ? !0 : void 0,
      className: I("may-safe-area", r),
      children: o
    }
  );
}), jn = R("SafeArea", Mn), Bn = [jn], ol = C("SafeArea", Rn, Bn), Fn = ".may-scroll-area{--may-scroll-max: none;position:relative;max-height:var(--may-scroll-max);min-height:0;min-width:0}.may-scroll-area[data-axis=vertical]{overflow-x:hidden;overflow-y:auto}.may-scroll-area[data-axis=horizontal]{overflow-x:auto;overflow-y:hidden}.may-scroll-area[data-axis=both]{overflow:auto}", On = Z(function({ maxHeight: t, axis: r = "vertical", className: o, style: n, children: i, ...l }, s) {
  const m = {};
  return t !== void 0 && (m["--may-scroll-max"] = typeof t == "number" ? `${t}px` : String(t)), /* @__PURE__ */ e(
    "div",
    {
      tabIndex: 0,
      ...l,
      ref: s,
      "data-slot": "scroll-area",
      "data-axis": r,
      className: I("may-scroll-area", o),
      style: { ...m, ...n },
      children: i
    }
  );
}), qn = R("ScrollArea", Fn), Hn = [qn], nl = C("ScrollArea", On, Hn), Gn = '.may-skeleton{display:block;min-width:0;--may-skeleton-radius: var(--may-radius-md);--may-skeleton-line-h: calc(var(--may-text-body) * .72);--may-skeleton-sweep: calc(var(--may-duration-sheet-in) * 3)}.may-skeleton[data-variant=block],.may-skeleton[data-variant=circle],.may-skeleton__line{position:relative;overflow:hidden;background:var(--may-color-fill-tertiary);border-radius:var(--may-skeleton-radius)}.may-skeleton[data-variant=block]:after,.may-skeleton[data-variant=circle]:after,.may-skeleton__line:after{content:"";position:absolute;inset-block:0;inset-inline-start:0;width:100%;background:linear-gradient(90deg,transparent 0%,var(--may-color-fill-quaternary) 50%,transparent 100%);transform:translate(-100%);animation:may-skeleton-sweep var(--may-skeleton-sweep) var(--may-ease-standard) infinite}@keyframes may-skeleton-sweep{0%{transform:translate(-100%)}to{transform:translate(100%)}}.may-skeleton[data-variant=text]{display:flex;flex-direction:column;gap:max(var(--may-space-1),calc(var(--may-text-body-leading) - var(--may-skeleton-line-h)));--may-skeleton-radius: var(--may-radius-full)}.may-skeleton__line{height:var(--may-skeleton-line-h);flex-shrink:0}.may-skeleton__line[data-tail=true]{width:60%}.may-skeleton[data-variant=block]{width:100%;height:var(--may-control-h)}.may-skeleton[data-variant=circle]{width:var(--may-control-h);aspect-ratio:1;--may-skeleton-radius: var(--may-radius-full)}@media(prefers-reduced-motion:reduce){.may-skeleton[data-variant=block]:after,.may-skeleton[data-variant=circle]:after,.may-skeleton__line:after{animation:none;opacity:0}}', Pa = (a) => typeof a == "number" ? `${a}px` : a;
function Un({
  variant: a = "text",
  lines: t = 1,
  width: r,
  height: o,
  radius: n,
  label: i,
  className: l,
  style: s,
  ...m
}) {
  const u = a === "text", y = u ? Math.max(1, Math.round(t)) : 0, g = {
    ...s,
    width: Pa(r),
    // For text the height belongs to each bar; the stack's own height is the
    // sum of the bars and the gaps between them and must stay derived.
    ...u ? { "--may-skeleton-line-h": Pa(o) } : { height: Pa(o) },
    ...n ? { "--may-skeleton-radius": `var(--may-radius-${n})` } : null
  };
  return /* @__PURE__ */ T(
    "div",
    {
      ...m,
      "data-slot": "skeleton",
      "data-variant": a,
      role: i ? "status" : void 0,
      "aria-hidden": i ? void 0 : !0,
      className: I("may-skeleton", l),
      style: g,
      children: [
        u && Array.from({ length: y }, (v, p) => /* @__PURE__ */ e(
          "span",
          {
            className: "may-skeleton__line",
            "data-tail": y > 1 && p === y - 1 ? "true" : void 0
          },
          p
        )),
        i && /* @__PURE__ */ e("span", { className: "may-sr-only", children: i })
      ]
    }
  );
}
const Yn = R("Skeleton", Gn), Wn = [Yn], il = C("Skeleton", Un, Wn), Kn = ".may-slider{--may-slider-pct: 0;--may-slider-rail-h: var(--may-space-1);--may-slider-thumb: calc(var(--may-control-h-xs) - var(--may-space-1));--may-slider-tick-w: calc(var(--may-slider-rail-h) / 2);display:flex;align-items:center;gap:var(--may-space-3);width:100%;min-width:0;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.may-slider[data-tone=tint]{--may-slider-tint: var(--may-color-primary)}.may-slider[data-tone=neutral]{--may-slider-tint: var(--may-label)}.may-slider[data-tone=success]{--may-slider-tint: var(--may-color-success)}.may-slider[data-tone=warning]{--may-slider-tint: var(--may-color-warning)}.may-slider[data-tone=danger]{--may-slider-tint: var(--may-color-destructive)}.may-slider[data-disabled=true]{opacity:.35}.may-slider__control{position:relative;flex:1;min-width:0;height:var(--may-control-h);container-type:inline-size;cursor:pointer;touch-action:none}.may-slider[data-disabled=true] .may-slider__control{cursor:not-allowed}.may-slider[data-dragging=true] .may-slider__control{cursor:grabbing}.may-slider__rail{position:absolute;inset-inline:0;top:50%;translate:0 -50%;height:var(--may-slider-rail-h);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);overflow:hidden}.may-slider__fill{position:absolute;inset-block:0;inset-inline-start:0;width:calc(var(--may-slider-thumb) / 2 + var(--may-slider-pct) * (100cqi - var(--may-slider-thumb)));border-radius:inherit;background:var(--may-slider-tint);transition:width var(--may-duration-settle) var(--may-spring-snappy)}.may-slider__ticks{position:absolute;inset-block:0;inset-inline:calc(var(--may-slider-thumb) / 2)}.may-slider__tick{position:absolute;inset-block:0;width:var(--may-slider-tick-w);translate:-50% 0;border-radius:var(--may-radius-full);background:var(--may-color-text-quaternary)}.may-slider__thumb{position:absolute;top:50%;inset-inline-start:0;width:var(--may-slider-thumb);height:var(--may-slider-thumb);padding:0;border:0;border-radius:var(--may-radius-full);background:var(--may-on-color);box-shadow:var(--may-shadow-sm);cursor:grab;touch-action:none;translate:calc(var(--may-slider-pct) * (100cqi - var(--may-slider-thumb))) -50%;scale:1;transition:translate var(--may-duration-settle) var(--may-spring-snappy),scale var(--may-duration-settle) var(--may-spring-bouncy),box-shadow var(--may-duration-fast) var(--may-ease-out)}.may-slider__thumb:disabled{cursor:not-allowed}.may-slider[data-dragging=true] .may-slider__thumb{scale:1.22;cursor:grabbing;box-shadow:var(--may-shadow-md);transition:translate var(--may-duration-follow) linear,scale var(--may-duration-settle) var(--may-spring-bouncy),box-shadow var(--may-duration-fast) var(--may-ease-out)}.may-slider[data-dragging=true] .may-slider__fill{transition:width var(--may-duration-follow) linear}.may-slider__thumb:focus-visible{scale:1.12}@media(hover:hover)and (pointer:fine){.may-slider:not([data-disabled=true]):not([data-dragging=true]) .may-slider__thumb:hover{scale:1.1}}.may-slider__adornment{display:inline-flex;align-items:center;flex-shrink:0;color:var(--may-color-text-tertiary)}.may-slider__adornment>svg{width:1.15em;height:1.15em;display:block}.may-slider__value{flex-shrink:0;min-width:4ch;text-align:end;font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking);font-variant-numeric:tabular-nums;color:var(--may-color-text-secondary);transition:color var(--may-duration-color) var(--may-ease-out)}.may-slider[data-dragging=true] .may-slider__value{color:var(--may-color-text)}", Xn = 40;
function Ma(a, t, r, o) {
  const n = Math.min(r, Math.max(t, a));
  if (!(o > 0)) return n;
  const i = t + Math.round((n - t) / o) * o, l = (String(o).split(".")[1] ?? "").length;
  return Number(Math.min(r, Math.max(t, i)).toFixed(l));
}
function Zn({
  value: a,
  defaultValue: t,
  onValueChange: r,
  min: o = 0,
  max: n = 100,
  step: i = 1,
  disabled: l = !1,
  showValue: s = !1,
  formatValue: m,
  ticks: u = !1,
  tone: y = "tint",
  leading: g,
  trailing: v,
  className: p,
  style: _,
  "aria-label": d,
  "aria-labelledby": k,
  ...E
}) {
  const [b, $] = U(() => Ma(t ?? o, o, n, i)), [P, D] = U(!1), A = B(null), h = B(null), x = Math.min(n, Math.max(o, a ?? b)), f = n > o ? (x - o) / (n - o) : 0, c = X(
    (S) => {
      const N = Ma(S, o, n, i);
      N !== x && (a === void 0 && $(N), r == null || r(N));
    },
    [x, o, n, i, a, r]
  ), w = B({ min: o, max: n, step: i, commit: c });
  Y(() => {
    w.current = { min: o, max: n, step: i, commit: c };
  }), Y(() => {
    const S = A.current;
    if (!S || l) return;
    let N = 0, L = !1;
    const j = (H) => {
      var ra;
      const { min: K, max: Q, step: J } = w.current, V = S.getBoundingClientRect(), na = S.offsetWidth > 0 ? V.width / S.offsetWidth : 1, ea = (((ra = h.current) == null ? void 0 : ra.offsetWidth) ?? 0) * na, ia = V.width - ea;
      if (ia <= 0) return K;
      const ca = (H - V.left - ea / 2) / ia;
      return Ma(K + ca * (Q - K), K, Q, J);
    }, F = (H) => {
      if (L = H.button === 0, !L) return;
      const K = h.current;
      if (!!K && H.target instanceof Node && K.contains(H.target)) {
        const J = K.getBoundingClientRect();
        N = J.left + J.width / 2 - H.clientX;
      } else
        N = 0, w.current.commit(j(H.clientX));
      K == null || K.focus({ preventScroll: !0 });
    };
    S.addEventListener("pointerdown", F);
    const q = ja(S, {
      axis: "x",
      onStart: () => {
        L && D(!0);
      },
      // Absolute position, not accumulated delta — a dropped move event then
      // costs a frame of smoothness rather than permanent drift.
      onMove: ({ event: H }) => {
        L && w.current.commit(j(H.clientX + N));
      },
      onEnd: () => D(!1)
    });
    return () => {
      S.removeEventListener("pointerdown", F), q();
    };
  }, [l]);
  const M = (S) => {
    const N = Math.max(i, (n - o) / 10), L = S.shiftKey ? N : i;
    let j = null;
    switch (S.key) {
      case "ArrowRight":
      case "ArrowUp":
        j = x + L;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        j = x - L;
        break;
      case "PageUp":
        j = x + N;
        break;
      case "PageDown":
        j = x - N;
        break;
      case "Home":
        j = o;
        break;
      case "End":
        j = n;
        break;
      default:
        return;
    }
    S.preventDefault(), c(j);
  }, z = ua(() => {
    if (n <= o) return [];
    const S = Array.isArray(u) ? u : (() => {
      if (!u || !(i > 0)) return [];
      const L = Math.round((n - o) / i);
      return L < 1 || L > Xn ? [] : Array.from({ length: L + 1 }, (j, F) => o + F * i);
    })(), N = /* @__PURE__ */ new Set();
    return S.filter((L) => L < o || L > n || N.has(L) ? !1 : (N.add(L), !0));
  }, [u, o, n, i]), O = m ? m(x) : String(x);
  return /* @__PURE__ */ T(
    "div",
    {
      ...E,
      "data-slot": "slider",
      "data-tone": y,
      "data-dragging": P ? "true" : void 0,
      "data-disabled": l ? "true" : void 0,
      className: I("may-slider", p),
      style: { ..._, "--may-slider-pct": f },
      children: [
        g && /* @__PURE__ */ e("span", { className: "may-slider__adornment", "aria-hidden": !0, children: g }),
        /* @__PURE__ */ T("div", { ref: A, className: "may-slider__control", children: [
          /* @__PURE__ */ T("span", { className: "may-slider__rail", children: [
            z.length > 0 && /* @__PURE__ */ e("span", { className: "may-slider__ticks", "aria-hidden": !0, children: z.map((S) => /* @__PURE__ */ e(
              "span",
              {
                className: "may-slider__tick",
                style: { insetInlineStart: `${(S - o) / (n - o) * 100}%` }
              },
              S
            )) }),
            /* @__PURE__ */ e("span", { className: "may-slider__fill" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              ref: h,
              type: "button",
              role: "slider",
              className: "may-slider__thumb",
              disabled: l,
              "aria-label": d,
              "aria-labelledby": k,
              "aria-orientation": "horizontal",
              "aria-valuemin": o,
              "aria-valuemax": n,
              "aria-valuenow": x,
              "aria-valuetext": m ? O : void 0,
              onKeyDown: M
            }
          )
        ] }),
        v && /* @__PURE__ */ e("span", { className: "may-slider__adornment", "aria-hidden": !0, children: v }),
        s && /* @__PURE__ */ e("span", { className: "may-slider__value", children: O })
      ]
    }
  );
}
const Jn = R("Slider", Kn), Qn = [Jn], sl = C("Slider", Zn, Qn), Vn = ".may-statistic{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--may-space-4);min-width:0;color:var(--may-color-text)}.may-statistic[data-variant=card]{padding:var(--may-space-4);border-radius:var(--may-radius-card);background:var(--may-color-surface)}.may-statistic__text{display:flex;flex-direction:column;gap:var(--may-space-1);min-width:0}.may-statistic__label{color:var(--may-color-text-secondary);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-statistic__value{display:flex;align-items:baseline;gap:var(--may-space-1);font-family:var(--may-font-rounded);font-variant-numeric:tabular-nums;color:var(--may-color-text)}.may-statistic__unit{font-size:.5em;font-weight:600;color:var(--may-color-text-secondary);letter-spacing:0}.may-statistic__delta{display:inline-flex;align-items:center;gap:var(--may-space-1);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);font-weight:600;font-variant-numeric:tabular-nums;color:var(--may-color-text-secondary)}.may-statistic__delta[data-sentiment=positive]{color:var(--may-color-success)}.may-statistic__delta[data-sentiment=negative]{color:var(--may-color-danger)}.may-statistic__arrow{width:.85em;height:.85em;display:block;transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-statistic__delta[data-direction=down] .may-statistic__arrow{transform:rotate(180deg)}.may-statistic__delta[data-direction=flat] .may-statistic__arrow{transform:rotate(90deg) scaleY(.28)}.may-statistic__trailing{display:inline-flex;align-items:center;flex-shrink:0}.may-statistic[data-size=sm] .may-statistic__value{font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);font-weight:var(--may-text-title-3-weight)}.may-statistic[data-size=sm] .may-statistic__label{font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading)}.may-statistic[data-size=md] .may-statistic__value{font-size:var(--may-text-title-1);line-height:var(--may-text-title-1-leading);letter-spacing:var(--may-text-title-1-tracking);font-weight:var(--may-text-title-1-weight)}.may-statistic[data-size=lg] .may-statistic__value{font-size:var(--may-text-large-title);line-height:var(--may-text-large-title-leading);letter-spacing:var(--may-text-large-title-tracking);font-weight:var(--may-text-large-title-weight)}.may-statistic[data-size=lg] .may-statistic__label{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading)}";
function ai({
  label: a,
  value: t,
  unit: r,
  delta: o,
  direction: n = "flat",
  invertDelta: i = !1,
  trailing: l,
  size: s = "md",
  variant: m = "plain",
  className: u,
  ...y
}) {
  const g = n === "flat" ? "flat" : n === "up" !== i ? "positive" : "negative";
  return /* @__PURE__ */ T(
    "div",
    {
      ...y,
      "data-slot": "statistic",
      "data-variant": m,
      "data-size": s,
      className: I("may-statistic", u),
      children: [
        /* @__PURE__ */ T("div", { className: "may-statistic__text", children: [
          /* @__PURE__ */ e("span", { className: "may-statistic__label", children: a }),
          /* @__PURE__ */ T("span", { className: "may-statistic__value", children: [
            t,
            r != null && /* @__PURE__ */ e("span", { className: "may-statistic__unit", children: r })
          ] }),
          o != null && /* @__PURE__ */ T(
            "span",
            {
              className: "may-statistic__delta",
              "data-direction": n,
              "data-sentiment": g,
              children: [
                /* @__PURE__ */ e(ae, { className: "may-statistic__arrow", "aria-hidden": !0, focusable: "false" }),
                /* @__PURE__ */ e("span", { className: "may-sr-only", children: n === "up" ? "Up " : n === "down" ? "Down " : "Unchanged, " }),
                o
              ]
            }
          )
        ] }),
        l && /* @__PURE__ */ e("span", { className: "may-statistic__trailing", children: l })
      ]
    }
  );
}
const ti = R("Statistic", Vn), ei = [ti], ll = C("Statistic", ai, ei), ri = '.may-stepper{position:relative;display:inline-flex;align-items:stretch;flex-shrink:0;border-radius:var(--may-radius-md);background:var(--may-color-fill-tertiary);isolation:isolate}.may-stepper:before{content:"";position:absolute;inset-block:var(--may-space-2);inset-inline-start:50%;width:1px;translate:-50% 0;background:var(--may-color-separator);pointer-events:none}@media(min-resolution:2dppx){.may-stepper:before{width:var(--may-hairline)}}.may-stepper[data-disabled=true]{cursor:not-allowed}.may-stepper__button{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:1;padding:0;border:0;background:transparent;color:var(--may-color-text);font-family:inherit;cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-stepper__button[data-action=decrement]{border-start-start-radius:inherit;border-end-start-radius:inherit}.may-stepper__button[data-action=increment]{border-start-end-radius:inherit;border-end-end-radius:inherit}.may-stepper__button:disabled,.may-stepper__button[aria-disabled=true]{cursor:not-allowed;opacity:.3}.may-stepper__button:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;background-color:transparent;transition:background-color var(--may-duration-color) var(--may-ease-out);pointer-events:none}.may-stepper__button[data-pressed=true]:after{background-color:var(--may-color-fill-secondary);transition-duration:var(--may-duration-instant)}.may-stepper__button>svg{width:1em;height:1em;display:block}.may-stepper[data-size=sm]{height:var(--may-control-h-sm);border-radius:var(--may-radius-sm)}.may-stepper[data-size=sm] .may-stepper__button{width:calc(var(--may-control-h-sm) * 1.55);font-size:var(--may-text-footnote)}.may-stepper[data-size=md]{height:var(--may-control-h-md);border-radius:var(--may-radius-md)}.may-stepper[data-size=md] .may-stepper__button{width:calc(var(--may-control-h-md) * 1.5);font-size:var(--may-text-callout)}.may-stepper[data-size=lg]{height:var(--may-control-h-lg);border-radius:var(--may-radius-lg)}.may-stepper[data-size=lg] .may-stepper__button{width:calc(var(--may-control-h-lg) * 1.45);font-size:var(--may-text-body)}', oi = 480, ni = 260, ii = 42, si = 0.84;
function _a(a, t, r, o) {
  const n = Math.min(r, Math.max(t, a));
  if (!(o > 0) || !Number.isFinite(t)) return n;
  const i = t + Math.round((n - t) / o) * o, l = (String(o).split(".")[1] ?? "").length;
  return Number(Math.min(r, Math.max(t, i)).toFixed(l));
}
function at({
  action: a,
  label: t,
  disabled: r,
  atLimit: o,
  onPress: n,
  onRelease: i,
  onActivate: l
}) {
  const s = r || o, { pressProps: m } = W(s);
  return /* @__PURE__ */ e(
    "button",
    {
      ...m,
      type: "button",
      disabled: r,
      "aria-disabled": o || void 0,
      "aria-label": t,
      "data-action": a,
      "data-press-squish": "true",
      className: "may-stepper__button may-pressable may-hoverable",
      onPointerDown: (u) => {
        m.onPointerDown(), u.button === 0 && !s && n();
      },
      onPointerUp: () => {
        m.onPointerUp(), i();
      },
      onPointerCancel: () => {
        m.onPointerCancel(), i();
      },
      onPointerLeave: () => {
        m.onPointerLeave(), i();
      },
      onClick: (u) => {
        u.detail === 0 && !s && l();
      },
      children: a === "increment" ? /* @__PURE__ */ e(te, { "aria-hidden": !0, focusable: "false" }) : /* @__PURE__ */ e(ee, { "aria-hidden": !0, focusable: "false" })
    }
  );
}
function li({
  value: a,
  defaultValue: t,
  onValueChange: r,
  min: o = Number.NEGATIVE_INFINITY,
  max: n = Number.POSITIVE_INFINITY,
  step: i = 1,
  size: l = "md",
  disabled: s = !1,
  formatValue: m,
  decrementLabel: u = "Decrease",
  incrementLabel: y = "Increase",
  className: g,
  ...v
}) {
  const [p, _] = U(
    () => _a(t ?? (Number.isFinite(o) ? o : 0), o, n, i)
  ), d = Math.min(n, Math.max(o, a ?? p)), k = B(d);
  Y(() => {
    k.current = d;
  });
  const E = B(null), b = X(() => {
    E.current && (clearTimeout(E.current), E.current = null);
  }, []);
  Y(() => b, [b]);
  const $ = X(
    (f) => {
      const c = k.current, w = _a(c + f * i, o, n, i);
      return w === c ? !1 : (k.current = w, a === void 0 && _(w), r == null || r(w), !0);
    },
    [i, o, n, a, r]
  ), P = X(
    (f) => {
      b();
      let c = ni;
      const w = () => {
        if (!$(f)) {
          b();
          return;
        }
        c = Math.max(ii, c * si), E.current = setTimeout(w, c);
      };
      E.current = setTimeout(w, oi);
    },
    [$, b]
  ), D = X(
    (f) => {
      $(f), P(f);
    },
    [$, P]
  ), A = _a(d - i, o, n, i) !== d, h = _a(d + i, o, n, i) !== d, x = m ? m(d) : String(d);
  return /* @__PURE__ */ T(
    "div",
    {
      ...v,
      role: "group",
      "data-slot": "stepper",
      "data-size": l,
      "data-disabled": s ? "true" : void 0,
      className: I("may-stepper", g),
      children: [
        /* @__PURE__ */ e(
          at,
          {
            action: "decrement",
            label: u,
            disabled: s,
            atLimit: !A,
            onPress: () => D(-1),
            onRelease: b,
            onActivate: () => $(-1)
          }
        ),
        /* @__PURE__ */ e(
          at,
          {
            action: "increment",
            label: y,
            disabled: s,
            atLimit: !h,
            onPress: () => D(1),
            onRelease: b,
            onActivate: () => $(1)
          }
        ),
        /* @__PURE__ */ e("span", { className: "may-sr-only", "aria-live": "polite", children: x })
      ]
    }
  );
}
const ci = R("Stepper", ri), mi = [ci], cl = C("Stepper", li, mi), di = '.may-steps{--may-steps-marker: var(--may-control-h-sm);--may-steps-pad: var(--may-space-2);--may-steps-track: 2px;position:relative;isolation:isolate;display:flex;margin:0;padding:0;list-style:none;min-width:0}.may-steps__thumb{position:absolute;z-index:0;background:var(--may-color-primary);transform-origin:0 0;pointer-events:none}.may-steps[data-orientation=horizontal] .may-steps__thumb{inset-block-start:0;inset-inline-start:0;width:1px;height:var(--may-steps-marker)}.may-steps[data-orientation=vertical] .may-steps__thumb{inset-block-start:0;inset-inline-start:0;width:var(--may-steps-marker);height:1px}.may-steps[data-clickable=true] .may-steps__step[data-status=current] .may-steps__marker{background:transparent}.may-steps[data-orientation=horizontal]{flex-direction:row;align-items:flex-start}.may-steps[data-orientation=vertical]{flex-direction:column;align-items:stretch}.may-steps__step{position:relative;display:flex;min-width:0}.may-steps[data-orientation=horizontal] .may-steps__step{flex:1 1 0}.may-steps[data-orientation=vertical] .may-steps__step:not(:last-child){padding-block-end:var(--may-space-6)}.may-steps__body{position:relative;display:flex;width:100%;min-width:0;padding:var(--may-steps-pad);border:0;border-radius:var(--may-radius-md);background:transparent;color:inherit;font:inherit;letter-spacing:inherit}button.may-steps__body{cursor:pointer}button.may-steps__body:disabled{cursor:default}.may-steps[data-orientation=horizontal] .may-steps__body{flex-direction:column;align-items:center;gap:var(--may-space-2);text-align:center}.may-steps[data-orientation=vertical] .may-steps__body{flex-direction:row;align-items:flex-start;gap:var(--may-space-3);text-align:start}.may-steps__marker{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-steps-marker);height:var(--may-steps-marker);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);color:var(--may-color-text-tertiary);font-weight:600;font-variant-numeric:tabular-nums;line-height:1;box-shadow:0 0 color-mix(in srgb,var(--may-color-primary) 18%,transparent);transition:background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-settle) var(--may-spring-bouncy)}.may-steps__marker>svg{width:58%;height:58%;display:block}.may-steps__step[data-status=complete] .may-steps__marker{background:color-mix(in srgb,var(--may-color-primary) 16%,transparent);color:var(--may-color-tint)}.may-steps__step[data-status=current] .may-steps__marker{background:var(--may-color-primary);color:var(--may-color-on-primary);box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-primary) 18%,transparent)}.may-steps__step[data-status=error] .may-steps__marker{background:var(--may-color-destructive);color:var(--may-color-on-destructive)}.may-steps__check path{stroke-dasharray:480;stroke-dashoffset:480;animation:may-step-check var(--may-duration-settle) var(--may-ease-out) forwards}@keyframes may-step-check{to{stroke-dashoffset:0}}.may-steps__text{display:flex;flex-direction:column;gap:1px;min-width:0}.may-steps__title{color:var(--may-color-text-secondary);font-weight:500;transition:color var(--may-duration-color) var(--may-ease-out)}.may-steps__step[data-status=complete] .may-steps__title{color:var(--may-color-text)}.may-steps__step[data-status=current] .may-steps__title{color:var(--may-color-text);font-weight:600}.may-steps__step[data-status=error] .may-steps__title{color:var(--may-color-danger);font-weight:600}.may-steps__description{color:var(--may-color-text-tertiary);font-weight:400}.may-steps__connector{position:absolute;overflow:hidden;border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);pointer-events:none}.may-steps__connector:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:var(--may-color-primary);transition:transform var(--may-duration-settle) var(--may-ease-out)}.may-steps[data-orientation=horizontal] .may-steps__connector{inset-block-start:calc(var(--may-steps-pad) + var(--may-steps-marker) / 2);inset-inline-start:calc(50% + var(--may-steps-marker) / 2 + var(--may-space-2));width:calc(100% - var(--may-steps-marker) - var(--may-space-2) * 2);height:var(--may-steps-track);transform:translateY(-50%)}.may-steps[data-orientation=horizontal] .may-steps__connector:before{transform:scaleX(0);transform-origin:0 50%}.may-steps[data-orientation=vertical] .may-steps__connector{inset-inline-start:calc(var(--may-steps-pad) + var(--may-steps-marker) / 2);inset-block-start:calc(var(--may-steps-pad) + var(--may-steps-marker) + var(--may-space-2));inset-block-end:var(--may-space-2);width:var(--may-steps-track);transform:translate(-50%)}.may-steps[data-orientation=vertical] .may-steps__connector:before{transform:scaleY(0);transform-origin:50% 0}.may-steps__step[data-status=complete] .may-steps__connector:before{transform:scale(1)}[dir=rtl] .may-steps[data-orientation=horizontal] .may-steps__connector:before{transform-origin:100% 50%}[dir=rtl] .may-steps[data-orientation=vertical] .may-steps__connector{transform:translate(50%)}.may-steps[data-size=sm]{--may-steps-marker: var(--may-control-h-xs)}.may-steps[data-size=md]{--may-steps-marker: var(--may-control-h-sm)}.may-steps[data-size=lg]{--may-steps-marker: var(--may-control-h-md)}.may-steps[data-size=sm] .may-steps__marker{font-size:var(--may-text-caption-1)}.may-steps[data-size=md] .may-steps__marker{font-size:var(--may-text-footnote)}.may-steps[data-size=lg] .may-steps__marker{font-size:var(--may-text-subheadline)}.may-steps[data-size=sm] .may-steps__title{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking)}.may-steps[data-size=md] .may-steps__title{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-steps[data-size=lg] .may-steps__title{font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking)}.may-steps[data-size=sm] .may-steps__description,.may-steps[data-size=md] .may-steps__description{font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);letter-spacing:var(--may-text-caption-1-tracking)}.may-steps[data-size=lg] .may-steps__description{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking)}', yi = 1.12, pi = {
  complete: "Completed",
  current: "Current step",
  upcoming: "Not started",
  error: "Failed"
};
function ui({ item: a, index: t, status: r, last: o, clickable: n, markerRef: i, onSelect: l }) {
  const s = n && r !== "upcoming", { pressProps: m } = W(!s), u = /* @__PURE__ */ e("span", { ref: i, className: "may-steps__marker", "aria-hidden": !0, children: a.icon ?? (r === "complete" ? /* @__PURE__ */ e(Fa, { className: "may-steps__check", "aria-hidden": !0, focusable: "false" }) : r === "error" ? /* @__PURE__ */ e(re, { "aria-hidden": !0, focusable: "false" }) : t + 1) }), y = /* @__PURE__ */ T(pa, { children: [
    u,
    /* @__PURE__ */ T("span", { className: "may-steps__text", children: [
      /* @__PURE__ */ e("span", { className: "may-steps__title", children: a.title }),
      a.description && /* @__PURE__ */ e("span", { className: "may-steps__description", children: a.description })
    ] }),
    /* @__PURE__ */ e("span", { className: "may-sr-only", children: pi[r] })
  ] });
  return /* @__PURE__ */ T(
    "li",
    {
      className: "may-steps__step",
      "data-slot": "step",
      "data-status": r,
      "aria-current": r === "current" ? "step" : void 0,
      children: [
        n ? /* @__PURE__ */ e(
          "button",
          {
            ...m,
            type: "button",
            disabled: !s,
            onClick: () => l == null ? void 0 : l(t),
            className: "may-steps__body may-pressable may-hoverable",
            children: y
          }
        ) : /* @__PURE__ */ e("span", { className: "may-steps__body", children: y }),
        !o && /* @__PURE__ */ e("span", { className: "may-steps__connector", "aria-hidden": !0 })
      ]
    }
  );
}
function vi({
  items: a = [],
  current: t,
  orientation: r = "horizontal",
  clickable: o = !1,
  onStepChange: n,
  size: i = "md",
  className: l,
  "aria-label": s = "Progress",
  ...m
}) {
  const u = (_) => {
    var d;
    return ((d = a[_]) == null ? void 0 : d.status) ?? (_ < t ? "complete" : _ === t ? "current" : "upcoming");
  }, { trackRef: y, thumbRef: g, registerItem: v, onPointerDown: p } = Lt({
    axis: r === "vertical" ? "block" : "inline",
    itemCount: a.length,
    selectedIndex: t,
    roundEnds: !0,
    pressScale: yi,
    enabled: o
  });
  return /* @__PURE__ */ T(
    "ol",
    {
      ...m,
      ref: y,
      "aria-label": s,
      "data-slot": "steps",
      "data-orientation": r,
      "data-size": i,
      "data-clickable": o ? "true" : void 0,
      className: I("may-steps", l),
      onPointerDown: o ? p : void 0,
      children: [
        o && /* @__PURE__ */ e("span", { ref: g, className: "may-steps__thumb", "aria-hidden": !0 }),
        a.map((_, d) => /* @__PURE__ */ e(
          ui,
          {
            item: _,
            index: d,
            status: u(d),
            last: d === a.length - 1,
            clickable: o,
            markerRef: v(d),
            onSelect: n
          },
          d
        ))
      ]
    }
  );
}
const hi = R("Steps", di), gi = [hi], ml = C("Steps", vi, gi), fi = ".may-switch{--may-switch-pad: calc(var(--may-space-1) / 2);--may-switch-w: calc(var(--may-switch-h) * 1.62);--may-switch-thumb: calc(var(--may-switch-h) - var(--may-space-1));--may-switch-travel: calc(var(--may-switch-w) - var(--may-switch-h));--may-switch-grow: 0px;--may-switch-x: 0px;--may-switch-drag: 0;--may-switch-dir: 1;position:relative;display:inline-flex;align-items:center;justify-content:space-between;gap:var(--may-space-4);min-height:var(--may-control-h);padding-inline:var(--may-space-2);margin-inline:calc(var(--may-space-2) * -1);border-radius:var(--may-radius-md);color:var(--may-color-text);cursor:pointer}.may-switch[data-slot=switch].may-pressable{transform:none}.may-switch:has(.may-switch__description){padding-block:var(--may-space-2)}[dir=rtl] .may-switch{--may-switch-dir: -1}.may-switch[aria-disabled=true]{cursor:not-allowed;opacity:.35}.may-switch__track{position:relative;flex-shrink:0;width:var(--may-switch-w);height:var(--may-switch-h);border-radius:var(--may-radius-full);background:var(--may-color-fill);touch-action:pan-y;transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-switch__input:checked+.may-switch__track{background:var(--may-color-primary)}.may-switch__input:focus-visible+.may-switch__track{outline:3px solid color-mix(in srgb,var(--may-color-ring) 45%,transparent);outline-offset:2px}.may-switch__thumb{position:absolute;inset-block-start:var(--may-switch-pad);inset-inline-start:var(--may-switch-pad);width:calc(var(--may-switch-thumb) + var(--may-switch-grow));height:var(--may-switch-thumb);border-radius:var(--may-radius-full);background:var(--may-on-color);box-shadow:var(--may-shadow-sm);transform:translate(calc(var(--may-switch-x) * var(--may-switch-dir)));transition:transform var(--may-duration-settle) var(--may-spring-bouncy),width var(--may-duration-fast) var(--may-ease-out)}.may-switch[data-pressed=true] .may-switch__thumb{--may-switch-grow: var(--may-space-1)}.may-switch__input:checked+.may-switch__track .may-switch__thumb{--may-switch-x: calc(var(--may-switch-travel) - var(--may-switch-grow))}.may-switch[data-dragging=true] .may-switch__thumb,.may-switch[data-dragging=true] .may-switch__input:checked+.may-switch__track .may-switch__thumb{--may-switch-x: calc((var(--may-switch-travel) - var(--may-switch-grow)) * var(--may-switch-drag));transition:width var(--may-duration-fast) var(--may-ease-out)}.may-switch[data-dragging=true] .may-switch__input+.may-switch__track{background:color-mix(in srgb,var(--may-color-primary) calc(var(--may-switch-drag) * 100%),var(--may-color-fill));transition:none}.may-switch__text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}.may-switch__label{font-size:var(--may-switch-text);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text)}.may-switch__description{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary)}.may-switch[data-size=sm]{--may-switch-h: var(--may-space-6);--may-switch-text: var(--may-text-subheadline)}.may-switch[data-size=md]{--may-switch-h: var(--may-space-8);--may-switch-text: var(--may-text-body)}.may-switch[data-size=lg]{--may-switch-h: var(--may-space-10);--may-switch-text: var(--may-text-body)}", bi = 4, _i = 0.35, xi = Z(function({
  children: t,
  description: r,
  size: o = "md",
  labelPosition: n = "start",
  onCheckedChange: i,
  onChange: l,
  checked: s,
  defaultChecked: m,
  disabled: u,
  required: y,
  id: g,
  className: v,
  style: p,
  "aria-describedby": _,
  ...d
}, k) {
  const E = Ea({ id: g, required: y, disabled: u, "aria-describedby": _ }), b = !!E.disabled, { pressProps: $ } = W(b), [P, D] = U(!!m), A = s ?? P, h = B(null), x = B(null), f = B(null), c = B(!1), w = (S) => {
    f.current = S, typeof k == "function" ? k(S) : k && (k.current = S);
  }, M = (S) => {
    s === void 0 && D(S.target.checked), i == null || i(S.target.checked), l == null || l(S);
  };
  Y(() => {
    const S = x.current, N = h.current;
    if (!S || !N || b) return;
    let L = 0, j = 0, F = 1;
    return ja(S, {
      axis: "x",
      onStart: () => {
        var H;
        const q = S.getBoundingClientRect();
        L = q.width - q.height, j = (H = f.current) != null && H.checked ? 1 : 0, F = getComputedStyle(S).direction === "rtl" ? -1 : 1, c.current = !1;
      },
      onMove: ({ dx: q }) => {
        if (!c.current) {
          if (Math.abs(q) < bi) return;
          c.current = !0, N.dataset.dragging = "true";
        }
        N.style.setProperty("--may-switch-drag", String(tt(j, q * F, L)));
      },
      onEnd: ({ dx: q, vx: H }) => {
        var J, V;
        if (!c.current) return;
        delete N.dataset.dragging, N.style.removeProperty("--may-switch-drag");
        const K = tt(j, q * F, L);
        (Math.abs(H) > _i ? H * F > 0 : K > 0.5) !== !!((J = f.current) != null && J.checked) && ((V = f.current) == null || V.click());
      }
    });
  }, [b]);
  const z = (S) => {
    !c.current || S.target === f.current || (S.preventDefault(), c.current = !1);
  }, O = (t != null || r != null) && /* @__PURE__ */ T("span", { className: "may-switch__text", children: [
    t != null && /* @__PURE__ */ e("span", { className: "may-switch__label", children: t }),
    r != null && /* @__PURE__ */ e("span", { className: "may-switch__description", children: r })
  ] });
  return /* @__PURE__ */ T(
    "label",
    {
      ...$,
      ref: h,
      "data-slot": "switch",
      "data-size": o,
      "data-checked": A ? "true" : void 0,
      "data-label-position": n,
      "aria-disabled": b || void 0,
      className: I("may-switch", "may-pressable", "may-hoverable", v),
      style: p,
      onClickCapture: z,
      children: [
        n === "start" && O,
        /* @__PURE__ */ e(
          "input",
          {
            ...d,
            ref: w,
            id: E.id,
            type: "checkbox",
            role: "switch",
            className: "may-switch__input may-sr-only",
            disabled: b,
            required: E.required,
            "aria-describedby": E["aria-describedby"],
            onChange: M,
            ...s !== void 0 ? { checked: s } : { defaultChecked: m }
          }
        ),
        /* @__PURE__ */ e("span", { ref: x, className: "may-switch__track", "aria-hidden": !0, children: /* @__PURE__ */ e("span", { className: "may-switch__thumb" }) }),
        n === "end" && O
      ]
    }
  );
});
function tt(a, t, r) {
  return r <= 0 ? a : Math.min(1, Math.max(0, a + t / r));
}
const wi = R("Switch", fi), ki = [wi], dl = C("Switch", xi, ki), zi = /* @__PURE__ */ new Set(), Et = 10;
function et(a, t, r) {
  if (typeof a == "function") return String(a(t, r));
  const o = t[a];
  return o == null ? String(r) : String(o);
}
function wa(a, t, r) {
  if (a.render) return a.render(t, r);
  const o = t[a.key];
  return typeof o == "string" || typeof o == "number" || za(o) ? o : null;
}
function At(a) {
  return a.align ?? (a.numeric ? "end" : "start");
}
function Ni({
  row: a,
  index: t,
  columns: r,
  primaryIndex: o,
  selected: n,
  zebra: i,
  onRowClick: l
}) {
  const s = !!l, { pressProps: m } = W(!s);
  return /* @__PURE__ */ e(
    "tr",
    {
      ...s ? m : null,
      onClick: s ? (y) => {
        l && (y.target.closest("button, a, input, select, textarea, label") || l(a, t));
      } : void 0,
      "data-clickable": s ? "true" : void 0,
      "data-selected": n ? "true" : void 0,
      "data-zebra": i ? "true" : void 0,
      className: I("may-table__row", s && "may-hoverable"),
      style: { "--may-table-row-i": Math.min(t, Et) },
      children: r.map((y, g) => {
        const v = wa(y, a, t), p = g === o;
        return /* @__PURE__ */ e(
          "td",
          {
            className: "may-table__cell",
            "data-align": At(y),
            "data-numeric": y.numeric ? "true" : void 0,
            children: s && p ? (
              // The activator carries no styling of its own: the row is what
              // lights up. It exists so the row is reachable by keyboard and
              // announced as activatable, which a <tr onClick> never is.
              /* @__PURE__ */ T(
                "button",
                {
                  type: "button",
                  className: "may-table__activator",
                  onClick: () => l == null ? void 0 : l(a, t),
                  children: [
                    v,
                    n && /* @__PURE__ */ e("span", { className: "may-sr-only", children: "Selected" })
                  ]
                }
              )
            ) : v
          },
          y.key
        );
      })
    }
  );
}
function $i({
  columns: a,
  data: t,
  rowKey: r,
  selectedKeys: o,
  onRowClick: n,
  size: i = "md",
  stickyHeader: l = !1,
  zebra: s = !1,
  emptyState: m,
  caption: u,
  maxHeight: y,
  className: g,
  style: v,
  ...p
}) {
  const _ = va(), d = ta(), k = o ? new Set(o) : zi, E = t.length === 0, b = Math.max(
    0,
    a.findIndex((h) => h.primary)
  ), $ = {};
  y !== void 0 && ($["--may-table-max"] = typeof y == "number" ? `${y}px` : String(y));
  const P = {
    "data-slot": "table",
    "data-size": i,
    "data-sticky": l ? "true" : void 0,
    "data-bounded": y !== void 0 ? "true" : void 0,
    style: { ...$, ...v }
  }, D = u && /* @__PURE__ */ e("div", { className: "may-table__caption", id: d, children: u });
  if (!_) {
    const h = a.length < 2 ? -1 : b === a.length - 1 ? a.length - 2 : a.length - 1, x = a[b];
    return /* @__PURE__ */ T("div", { ...p, ...P, "data-layout": "stacked", className: I("may-table", g), children: [
      D,
      /* @__PURE__ */ e(vt, { variant: "inset", "aria-labelledby": u ? d : void 0, children: E ? m && /* @__PURE__ */ e("div", { className: "may-table__empty", children: m }) : t.map((f, c) => {
        const w = et(r, f, c), M = k.has(w), z = h >= 0 ? a[h] : void 0, O = a.filter((S, N) => N !== b && N !== h).map((S) => wa(S, f, c)).filter((S) => S != null && S !== "");
        return /* @__PURE__ */ e(
          ht,
          {
            className: "may-table__mrow",
            style: { "--may-table-row-i": Math.min(c, Et) },
            title: x ? wa(x, f, c) : null,
            subtitle: O.length > 0 ? O.map((S, N) => /* @__PURE__ */ T(Dt, { children: [
              N > 0 && /* @__PURE__ */ e("span", { className: "may-table__sep", "aria-hidden": !0, children: "·" }),
              S
            ] }, N)) : void 0,
            detail: z ? /* @__PURE__ */ e("span", { className: "may-table__value", "data-numeric": z.numeric ? "true" : void 0, children: wa(z, f, c) }) : void 0,
            accessory: M ? /* @__PURE__ */ e(
              Fa,
              {
                className: "may-table__check",
                role: "img",
                "aria-label": "Selected"
              }
            ) : void 0,
            onClick: n ? () => n(f, c) : void 0
          },
          w
        );
      }) })
    ] });
  }
  const A = a.some((h) => h.width !== void 0);
  return /* @__PURE__ */ T("div", { ...p, ...P, "data-layout": "table", className: I("may-table", g), children: [
    D,
    /* @__PURE__ */ e(
      "div",
      {
        className: "may-table__scroller",
        "data-slot": "scroll-area",
        tabIndex: y !== void 0 && !n ? 0 : void 0,
        children: /* @__PURE__ */ T(
          "table",
          {
            className: "may-table__table",
            "aria-labelledby": u ? d : void 0,
            "data-selectable": !0,
            children: [
              A && /* @__PURE__ */ e("colgroup", { children: a.map((h) => /* @__PURE__ */ e(
                "col",
                {
                  style: h.width !== void 0 ? { width: h.width } : void 0
                },
                h.key
              )) }),
              /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: a.map((h) => /* @__PURE__ */ e(
                "th",
                {
                  scope: "col",
                  className: "may-table__head-cell",
                  "data-align": At(h),
                  children: h.header
                },
                h.key
              )) }) }),
              /* @__PURE__ */ e("tbody", { children: E ? m && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { className: "may-table__empty", colSpan: a.length, children: m }) }) : t.map((h, x) => {
                const f = et(r, h, x);
                return /* @__PURE__ */ e(
                  Ni,
                  {
                    row: h,
                    index: x,
                    columns: a,
                    primaryIndex: b,
                    selected: k.has(f),
                    zebra: s && x % 2 === 1,
                    onRowClick: n
                  },
                  f
                );
              }) })
            ]
          }
        )
      }
    )
  ] });
}
const Si = R("Table", ne), Ei = R("List", ut), Ai = [Ei, Si], yl = C("Table", $i, Ai), Ti = '.may-tabs{--may-tabs-bar: 3px;display:flex;flex-direction:column;gap:var(--may-space-4);min-width:0}.may-tabs[data-orientation=vertical]{flex-direction:row;align-items:flex-start;gap:var(--may-space-5)}.may-tabs__list{position:relative;min-width:0;max-width:100%}.may-tabs[data-orientation=horizontal] .may-tabs__list{overflow-x:auto;overflow-y:hidden;scrollbar-width:none;overscroll-behavior-x:contain}.may-tabs[data-orientation=horizontal] .may-tabs__list::-webkit-scrollbar{display:none}.may-tabs[data-orientation=vertical] .may-tabs__list{flex-shrink:0}.may-tabs__track{position:relative;display:flex;align-items:stretch;gap:var(--may-space-1);min-width:100%;width:max-content;isolation:isolate}.may-tabs[data-orientation=vertical] .may-tabs__track{flex-direction:column;width:100%;min-width:0}.may-tabs__track--full>.may-tabs__tab{flex:1 1 0}.may-tabs__indicator{position:absolute;z-index:0;transform-origin:0 0;pointer-events:none}.may-tabs[data-orientation=horizontal] .may-tabs__indicator{inset-inline-start:0;width:1px}.may-tabs[data-orientation=vertical] .may-tabs__indicator{inset-block-start:0;height:1px}.may-tabs[data-variant=underline][data-orientation=horizontal] .may-tabs__indicator{inset-block-end:0;height:var(--may-tabs-bar)}.may-tabs[data-variant=underline][data-orientation=vertical] .may-tabs__indicator{inset-inline-start:0;width:var(--may-tabs-bar)}.may-tabs[data-variant=underline] .may-tabs__indicator{background:var(--may-color-primary)}.may-tabs[data-variant=pill][data-orientation=horizontal] .may-tabs__indicator{inset-block:0}.may-tabs[data-variant=pill][data-orientation=vertical] .may-tabs__indicator{inset-inline:0}.may-tabs[data-variant=pill] .may-tabs__indicator{border-radius:var(--may-radius-full);background:color-mix(in srgb,var(--may-color-primary) 15%,transparent)}.may-tabs[data-variant=pill] .may-tabs__tab{border-radius:var(--may-radius-full)}.may-tabs[data-variant=underline] .may-tabs__track:before{content:"";position:absolute;background:var(--may-color-separator);pointer-events:none}.may-tabs[data-variant=underline][data-orientation=horizontal] .may-tabs__track:before{inset-inline:0;inset-block-end:0;height:1px}.may-tabs[data-variant=underline][data-orientation=vertical] .may-tabs__track:before{inset-block:0;inset-inline-start:0;width:1px}@media(min-resolution:2dppx){.may-tabs[data-variant=underline][data-orientation=horizontal] .may-tabs__track:before{height:var(--may-hairline)}.may-tabs[data-variant=underline][data-orientation=vertical] .may-tabs__track:before{width:var(--may-hairline)}}.may-tabs__tab{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:var(--may-space-2);flex-shrink:0;min-width:0;padding-inline:var(--may-space-4);border:0;border-radius:var(--may-radius-md);background:transparent;color:var(--may-color-text-secondary);font-family:inherit;font-weight:500;line-height:1;white-space:nowrap;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out)}.may-tabs[data-orientation=vertical] .may-tabs__tab{justify-content:flex-start;text-align:start}.may-tabs__tab:disabled{opacity:.35;cursor:not-allowed}.may-tabs__tab[aria-selected=true]{font-weight:600}.may-tabs[data-variant=underline] .may-tabs__tab[aria-selected=true]{color:var(--may-color-text)}.may-tabs[data-variant=pill] .may-tabs__tab[aria-selected=true]{color:var(--may-color-tint)}@media(hover:hover)and (pointer:fine){.may-tabs[data-variant=pill] .may-tabs__tab[aria-selected=true]:hover{background-color:transparent}.may-tabs__tab:hover:not(:disabled):not([aria-selected=true]){color:var(--may-color-text)}}.may-tabs__tab-icon{display:inline-flex;align-items:center;flex-shrink:0}.may-tabs__tab-icon>svg{width:1.15em;height:1.15em;display:block}.may-tabs__tab-label{overflow:hidden;text-overflow:ellipsis}.may-tabs__tab-badge{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:var(--may-space-5);padding-inline:var(--may-space-1);border-radius:var(--may-radius-full);background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-size:var(--may-text-caption-2);font-weight:600;line-height:var(--may-text-caption-2-leading)}.may-tabs__tab[aria-selected=true] .may-tabs__tab-badge{background:color-mix(in srgb,var(--may-color-primary) 18%,transparent);color:var(--may-color-tint)}.may-tabs[data-size=sm] .may-tabs__tab{height:var(--may-control-h-sm);padding-inline:var(--may-space-3);font-size:var(--may-text-footnote);letter-spacing:var(--may-text-footnote-tracking)}.may-tabs[data-size=md] .may-tabs__tab{height:var(--may-control-h-md);font-size:var(--may-text-subheadline);letter-spacing:var(--may-text-subheadline-tracking)}.may-tabs[data-size=lg] .may-tabs__tab{height:var(--may-control-h-lg);padding-inline:var(--may-space-5);font-size:var(--may-text-body);letter-spacing:var(--may-text-body-tracking)}.may-tabs[data-size=sm] .may-tabs__tab:after{content:"";position:absolute;inset-inline-start:0;inset-inline-end:0;inset-block-start:50%;height:var(--may-control-h);transform:translateY(-50%)}.may-tabs__panel{min-width:0;flex:1 1 auto;animation:may-tab-panel-in var(--may-duration-settle) var(--may-ease-out) both}.may-tabs__panel[hidden]{display:none}@keyframes may-tab-panel-in{0%{opacity:0}}', Tt = $a(null);
function Ua(a) {
  const t = Na(Tt);
  if (!t) throw new Error(`<${a}> must be rendered inside <Tabs>.`);
  return t;
}
const Ii = typeof window > "u" ? Y : sa, rt = (a) => Array.from((a == null ? void 0 : a.querySelectorAll('[data-slot="tab"]')) ?? []), Ci = 1.08;
function Di({
  children: a,
  value: t,
  defaultValue: r,
  onValueChange: o,
  variant: n = "underline",
  orientation: i = "horizontal",
  size: l = "md",
  className: s,
  ...m
}) {
  const [u, y] = U(r ?? ""), g = t ?? u, v = ta(m.id), p = X(
    (d) => {
      t === void 0 && y(d), d !== g && (o == null || o(d));
    },
    [g, o, t]
  ), _ = ua(
    () => ({ value: g, select: p, orientation: i, variant: n, baseId: v }),
    [g, p, i, n, v]
  );
  return /* @__PURE__ */ e(Tt.Provider, { value: _, children: /* @__PURE__ */ e(
    "div",
    {
      ...m,
      "data-slot": "tabs",
      "data-variant": n,
      "data-orientation": i,
      "data-size": l,
      className: I("may-tabs", s),
      children: a
    }
  ) });
}
function Pi({
  children: a,
  fullWidth: t = !1,
  className: r,
  onKeyDown: o,
  "aria-label": n,
  "aria-labelledby": i,
  ...l
}) {
  const { value: s, select: m, orientation: u, variant: y } = Ua("TabList"), g = oa(), v = u === "vertical" ? "block" : "inline", p = B(null), _ = B(null), d = B(!0), k = B(null), E = B(!1), b = B(null), $ = B(""), P = X(
    (h) => {
      const x = p.current, f = _.current;
      if (!x || !f) return;
      const c = x.querySelector('[data-slot="tab"][aria-selected="true"]');
      if (!c) {
        f.style.opacity = "0";
        return;
      }
      f.style.opacity && (f.style.opacity = "");
      const w = Rt(x, c, v), M = y === "pill" && w.width > 0 ? (v === "block" ? f.offsetWidth : f.offsetHeight) / 2 : 0;
      if (M > 0) {
        const z = `${M / w.width}px`, O = v === "block" ? `${M}px / ${z}` : `${z} / ${M}px`;
        O !== $.current && ($.current = O, f.style.borderRadius = O);
      }
      jt(f, w, {
        axis: v,
        // The underline is a thin bar; a puff on it reads as noise, so only the
        // pill takes the press scale.
        pressed: E.current && y === "pill",
        pressScale: Ci,
        reducedMotion: !h
      });
    },
    [v, y]
  ), D = (h) => {
    var w;
    if (h.button !== 0) return;
    const x = (w = h.target) == null ? void 0 : w.closest('[data-slot="tab"]');
    if (!x || x.getAttribute("aria-selected") !== "true" || x.disabled) return;
    E.current = !0, P(!0);
    const f = new AbortController(), c = () => {
      E.current && (E.current = !1, P(!0), f.abort());
    };
    window.addEventListener("pointerup", c, { signal: f.signal }), window.addEventListener("pointercancel", c, { signal: f.signal }), window.addEventListener("lostpointercapture", c, { signal: f.signal });
  };
  Ii(() => {
    var c;
    const h = p.current;
    if (!h) return;
    const x = rt(h), f = x.find((w) => w.dataset.value === s) ?? null;
    if (!f) {
      const w = (c = x.find((M) => !M.disabled)) == null ? void 0 : c.dataset.value;
      w && b.current !== w && (b.current = w, m(w)), P(!1);
      return;
    }
    if (b.current = null, P(!d.current && !g), k.current !== s) {
      const w = !d.current && !g;
      k.current = s, f.scrollIntoView({
        behavior: w ? "smooth" : "auto",
        inline: "nearest",
        block: "nearest"
      });
    }
    d.current = !1;
  }), Y(() => {
    const h = p.current;
    if (!h || typeof ResizeObserver > "u") return;
    const x = new ResizeObserver(() => P(!1));
    return x.observe(h), () => x.disconnect();
  }, [P]);
  const A = (h) => {
    if (o == null || o(h), h.defaultPrevented || h.altKey || h.metaKey || h.ctrlKey) return;
    const x = rt(p.current);
    if (x.length === 0) return;
    const f = u === "vertical" ? "ArrowDown" : "ArrowRight", c = u === "vertical" ? "ArrowUp" : "ArrowLeft", w = x.indexOf(document.activeElement), M = w >= 0 ? w : x.findIndex((S) => S.dataset.value === s);
    let z = -1;
    if (h.key === f || h.key === c) {
      const S = h.key === f ? 1 : -1;
      z = M < 0 ? S > 0 ? -1 : 0 : M;
      for (let N = 0; N < x.length && (z = (z + S + x.length) % x.length, !!x[z].disabled); N++)
        ;
    } else if (h.key === "Home")
      z = x.findIndex((S) => !S.disabled);
    else if (h.key === "End") {
      for (let S = x.length - 1; S >= 0; S--)
        if (!x[S].disabled) {
          z = S;
          break;
        }
    } else
      return;
    if (z < 0 || x[z].disabled) return;
    h.preventDefault(), x[z].focus();
    const O = x[z].dataset.value;
    O && m(O);
  };
  return /* @__PURE__ */ e("div", { ...l, "data-slot": "tab-list", className: I("may-tabs__list", r), children: /* @__PURE__ */ T(
    "div",
    {
      ref: p,
      role: "tablist",
      "aria-label": n,
      "aria-labelledby": i,
      "aria-orientation": u,
      className: I("may-tabs__track", t && "may-tabs__track--full"),
      onKeyDown: A,
      onPointerDown: D,
      children: [
        /* @__PURE__ */ e("span", { ref: _, className: "may-tabs__indicator", "aria-hidden": !0 }),
        a
      ]
    }
  ) });
}
function Mi({ value: a, children: t, icon: r, badge: o, className: n, disabled: i, ...l }) {
  const { value: s, select: m, baseId: u } = Ua("Tab"), y = a === s, { pressProps: g } = W(i);
  return /* @__PURE__ */ T(
    "button",
    {
      ...l,
      ...g,
      type: "button",
      role: "tab",
      id: `${u}-tab-${a}`,
      "aria-controls": `${u}-panel-${a}`,
      "aria-selected": y,
      tabIndex: y ? 0 : -1,
      disabled: i,
      "data-slot": "tab",
      "data-value": a,
      onClick: () => m(a),
      className: I("may-tabs__tab", "may-pressable", "may-hoverable", n),
      children: [
        r && /* @__PURE__ */ e("span", { className: "may-tabs__tab-icon", "aria-hidden": !0, children: r }),
        t != null && /* @__PURE__ */ e("span", { className: "may-tabs__tab-label", children: t }),
        o != null && /* @__PURE__ */ e("span", { className: "may-tabs__tab-badge", children: o })
      ]
    }
  );
}
function Li({
  value: a,
  children: t,
  keepMounted: r = !1,
  className: o,
  ...n
}) {
  const { value: i, baseId: l } = Ua("TabPanel"), s = a === i;
  return !s && !r ? null : /* @__PURE__ */ e(
    "div",
    {
      ...n,
      id: `${l}-panel-${a}`,
      role: "tabpanel",
      "aria-labelledby": `${l}-tab-${a}`,
      tabIndex: 0,
      hidden: !s,
      "data-slot": "tab-panel",
      className: I("may-tabs__panel", o),
      children: t
    }
  );
}
const Ri = R("Tabs", Ti), Ia = [Ri], pl = C("Tabs", Di, Ia), ul = C("TabList", Pi, Ia), vl = C("Tab", Mi, Ia), hl = C("TabPanel", Li, Ia), ji = '.may-tag{display:inline-flex;align-items:center;gap:var(--may-space-2);max-width:100%;height:var(--may-tag-h);padding-inline:var(--may-tag-pad);border-radius:var(--may-radius-full);background:var(--may-tag-bg);color:var(--may-tag-fg);font-family:inherit;font-weight:500;line-height:1;vertical-align:middle;animation:may-tag-in var(--may-duration-settle) var(--may-spring-bouncy) both}@keyframes may-tag-in{0%{transform:scale(.82);opacity:0}to{transform:scale(1);opacity:1}}.may-tag:has(.may-tag__remove){padding-inline-end:var(--may-space-1)}.may-tag[data-tone=neutral]{--may-tag-bg: var(--may-color-fill-tertiary);--may-tag-fg: var(--may-color-text)}.may-tag[data-tone=tint]{--may-tag-bg: color-mix(in srgb, var(--may-color-primary) 14%, transparent);--may-tag-fg: var(--may-color-tint)}.may-tag[data-tone=success]{--may-tag-bg: color-mix(in srgb, var(--may-color-success) 16%, transparent);--may-tag-fg: var(--may-color-success)}.may-tag[data-tone=warning]{--may-tag-bg: color-mix(in srgb, var(--may-color-warning) 20%, transparent);--may-tag-fg: var(--may-color-warning)}.may-tag[data-tone=danger]{--may-tag-bg: color-mix(in srgb, var(--may-color-destructive) 14%, transparent);--may-tag-fg: var(--may-color-danger)}.may-tag[data-size=sm]{--may-tag-h: var(--may-control-h-xs);--may-tag-pad: var(--may-space-3);font-size:var(--may-text-footnote);letter-spacing:var(--may-text-footnote-tracking)}.may-tag[data-size=md]{--may-tag-h: var(--may-control-h-sm);--may-tag-pad: var(--may-space-3);font-size:var(--may-text-subheadline);letter-spacing:var(--may-text-subheadline-tracking)}.may-tag[data-size=lg]{--may-tag-h: var(--may-control-h-md);--may-tag-pad: var(--may-space-4);font-size:var(--may-text-body);letter-spacing:var(--may-text-body-tracking)}.may-tag__label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.may-tag__icon{display:inline-flex;align-items:center;flex-shrink:0;margin-inline-start:calc(var(--may-space-1) * -1)}.may-tag__icon>svg,.may-tag__icon>svg[width="1em"]{width:1.1em;height:1.1em;display:block}.may-tag__remove{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:calc(var(--may-tag-h) * .6);height:calc(var(--may-tag-h) * .6);padding:0;border:0;border-radius:var(--may-radius-full);background:transparent;color:inherit;cursor:pointer;opacity:.5;transition:opacity var(--may-duration-fast) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-tag__remove:after{--may-tag-slop: calc((var(--may-control-h) - var(--may-tag-h) * .6) / 2);content:"";position:absolute;inset-block:calc(var(--may-tag-slop) * -1);inset-inline-start:calc(var(--may-tag-slop) * -1);inset-inline-end:calc(var(--may-space-1) * -1)}.may-tag__remove>svg{width:.7em;height:.7em;display:block}@media(hover:hover)and (pointer:fine){.may-tag__remove:hover{opacity:1}}.may-tag__remove[data-pressed=true]{opacity:1}';
function Bi({
  children: a,
  tone: t = "neutral",
  size: r = "md",
  onRemove: o,
  removeLabel: n,
  leadingIcon: i,
  className: l,
  ...s
}) {
  const { pressProps: m } = W(!o), u = n ?? (typeof a == "string" ? `Remove ${a}` : "Remove");
  return /* @__PURE__ */ T(
    "span",
    {
      ...s,
      "data-slot": "tag",
      "data-tone": t,
      "data-size": r,
      className: I("may-tag", l),
      children: [
        i && /* @__PURE__ */ e("span", { className: "may-tag__icon", "aria-hidden": !0, children: i }),
        a != null && /* @__PURE__ */ e("span", { className: "may-tag__label", children: a }),
        o && /* @__PURE__ */ e(
          "button",
          {
            ...m,
            type: "button",
            onClick: o,
            "aria-label": u,
            className: "may-tag__remove may-pressable may-hoverable",
            children: /* @__PURE__ */ e(ha, { "aria-hidden": !0, focusable: "false" })
          }
        )
      ]
    }
  );
}
const Fi = R("Tag", ji), Oi = [Fi], gl = C("Tag", Bi, Oi), qi = ".may-textarea{position:relative;display:flex;min-width:0;padding:var(--may-space-3) var(--may-space-4);background:var(--may-color-fill-tertiary);color:var(--may-color-text);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);border-radius:var(--may-radius-md);cursor:text;box-shadow:0 0 0 0 transparent;transition:background-color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-settle) var(--may-spring-snappy)}.may-textarea--full{width:100%}.may-textarea:focus-within{background:var(--may-color-fill-quaternary);box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-ring) 30%,transparent)}.may-textarea[data-invalid=true]{box-shadow:0 0 0 2px color-mix(in srgb,var(--may-color-danger) 45%,transparent)}.may-textarea[data-invalid=true]:focus-within{box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-danger) 40%,transparent)}.may-textarea[data-disabled=true]{opacity:.4;cursor:not-allowed}@media(hover:hover)and (pointer:fine){.may-textarea:not([data-disabled=true]):not(:focus-within):hover{background:var(--may-color-fill-secondary)}}.may-textarea[data-size=sm]{padding:var(--may-space-2) var(--may-space-3);border-radius:var(--may-radius-sm);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-textarea[data-size=md]{padding:var(--may-space-3) var(--may-space-4);border-radius:var(--may-radius-md)}.may-textarea[data-size=lg]{padding:var(--may-space-4) var(--may-space-5);border-radius:var(--may-radius-lg)}.may-textarea__control{flex:1;min-width:0;max-width:100%;margin:0;padding:0;border:0;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;line-height:inherit;display:block}.may-textarea__control::placeholder{color:var(--may-color-text-tertiary);opacity:1}.may-textarea__control:disabled{cursor:not-allowed;-webkit-text-fill-color:currentColor;opacity:1}.may-textarea__control:focus-visible{outline:none}.may-textarea[data-resize=none] .may-textarea__control{resize:none}.may-textarea[data-resize=vertical] .may-textarea__control{resize:vertical}.may-textarea[data-resize=both] .may-textarea__control{resize:both}.may-textarea[data-autogrow=true] .may-textarea__control{overflow-y:hidden}";
function Hi(a, t) {
  typeof a == "function" ? a(t) : a && (a.current = t);
}
const Gi = typeof window > "u" ? Y : sa, Ui = Z(function({
  size: t = "md",
  invalid: r,
  fullWidth: o = !1,
  rows: n = 3,
  resize: i = "vertical",
  autoGrow: l = !1,
  wrapperClassName: s,
  className: m,
  id: u,
  required: y,
  disabled: g,
  value: v,
  onChange: p,
  "aria-describedby": _,
  style: d,
  ...k
}, E) {
  const b = Ea({ id: u, invalid: r, required: y, disabled: g, "aria-describedby": _ }), $ = B(null), P = B(null), D = X(() => {
    const h = $.current;
    if (h) {
      if (!l) {
        h.style.height = "";
        return;
      }
      h.style.height = "auto", h.style.height = `${h.scrollHeight}px`;
    }
  }, [l]);
  Gi(D, [D, v, n]), Y(() => {
    if (!l || typeof ResizeObserver > "u" || !P.current) return;
    const h = new ResizeObserver(D);
    return h.observe(P.current), () => h.disconnect();
  }, [l, D]);
  const A = (h) => {
    D(), p == null || p(h);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      ref: P,
      "data-slot": "textarea",
      "data-size": t,
      "data-resize": l ? "none" : i,
      "data-autogrow": l ? "true" : void 0,
      "data-invalid": b.invalid ? "true" : void 0,
      "data-disabled": b.disabled ? "true" : void 0,
      className: I("may-textarea", o && "may-textarea--full", s),
      style: d,
      children: /* @__PURE__ */ e(
        "textarea",
        {
          ...k,
          ref: (h) => {
            $.current = h, Hi(E, h);
          },
          id: b.id,
          rows: n,
          value: v,
          onChange: A,
          required: b.required,
          disabled: b.disabled,
          "aria-invalid": b.invalid || void 0,
          "aria-describedby": b["aria-describedby"],
          className: I("may-textarea__control", m)
        }
      )
    }
  );
}), Yi = R("Textarea", qi), Wi = [Yi], fl = C("Textarea", Ui, Wi), Ki = ".may-tooltip,.may-tooltip__anchor{display:inline-flex;max-width:100%;min-width:0}.may-tooltip__surface{--may-tooltip-anchor: 50%;position:fixed;top:0;left:0;z-index:var(--may-z-tooltip);max-width:240px;padding:var(--may-space-2) var(--may-space-3);border-radius:var(--may-radius-sm);background:var(--may-color-surface);color:var(--may-color-text);box-shadow:var(--may-shadow-lg);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-weight:var(--may-text-footnote-weight);text-align:center;pointer-events:none;opacity:0}.may-tooltip__surface[data-side=bottom]{transform-origin:var(--may-tooltip-anchor) 0}.may-tooltip__surface[data-side=top]{transform-origin:var(--may-tooltip-anchor) 100%}.may-tooltip__surface[data-side=right]{transform-origin:0 var(--may-tooltip-anchor)}.may-tooltip__surface[data-side=left]{transform-origin:100% var(--may-tooltip-anchor)}.may-tooltip__surface[data-positioned=true][data-state=open]{opacity:1;animation:may-tooltip-in var(--may-duration-fast) var(--may-ease-out)}.may-tooltip__surface[data-state=closed]{opacity:0;animation:may-tooltip-out var(--may-duration-fast) var(--may-ease-out)}@keyframes may-tooltip-in{0%{opacity:0;transform:scale(.88)}to{opacity:1;transform:scale(1)}}@keyframes may-tooltip-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.96)}}", Xi = 8, Zi = 150, Ji = typeof window > "u" ? Y : sa;
function Qi() {
  return typeof window > "u" || !window.matchMedia ? !1 : window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
function Vi(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function as({
  children: a,
  label: t,
  placement: r = "top",
  offset: o = Xi,
  delay: n = 500,
  disabled: i = !1,
  className: l
}) {
  const [s, m] = U(!1), u = oa(), y = Sa(s && !i, u ? 0 : Zi), g = B(null), v = B(null), p = B(null), _ = ta(), d = X(() => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, []), k = X(
    (D) => {
      if (d(), D <= 0) {
        m(!0);
        return;
      }
      p.current = setTimeout(() => m(!0), D);
    },
    [d]
  ), E = X(() => {
    d(), m(!1);
  }, [d]);
  Y(() => d, [d]);
  const b = X(() => {
    const D = g.current, A = v.current;
    if (!D || !A) return;
    const h = { width: A.offsetWidth, height: A.offsetHeight }, x = Bt(D.getBoundingClientRect(), h, r, o);
    A.style.left = `${x.x}px`, A.style.top = `${x.y}px`, A.style.setProperty("--may-tooltip-anchor", `${x.anchorOffset}px`), A.dataset.side = x.side, A.dataset.positioned = "true";
  }, [r, o]);
  Ji(() => {
    if (!y) return;
    b();
    const D = () => b();
    return window.addEventListener("scroll", D, !0), window.addEventListener("resize", D), () => {
      window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D);
    };
  }, [y, s, b]), Y(() => {
    if (!s) return;
    const D = (A) => {
      A.key === "Escape" && E();
    };
    return document.addEventListener("keydown", D, !0), () => document.removeEventListener("keydown", D, !0);
  }, [s, E]);
  const $ = (D) => {
    D.pointerType !== "mouse" || !Qi() || k(n);
  }, P = za(a) ? it(a, {
    // Compose rather than replace: the control may already point at its own
    // help text, and dropping that would trade one description for another.
    "aria-describedby": y ? [a.props["aria-describedby"], _].filter(Boolean).join(" ") : a.props["aria-describedby"]
  }) : a;
  return /* @__PURE__ */ T(
    "span",
    {
      "data-slot": "tooltip",
      className: I("may-tooltip", l),
      onPointerEnter: $,
      onPointerLeave: E,
      onPointerDown: E,
      onFocus: (D) => {
        Vi(D.target) && k(0);
      },
      onBlur: E,
      children: [
        /* @__PURE__ */ e("span", { ref: g, className: "may-tooltip__anchor", children: P }),
        y && /* @__PURE__ */ e(
          "span",
          {
            ref: v,
            id: _,
            role: "tooltip",
            "data-slot": "tooltip-surface",
            "data-state": s && !i ? "open" : "closed",
            "data-positioned": "false",
            className: "may-tooltip__surface",
            children: t
          }
        )
      ]
    }
  );
}
const ts = R("Tooltip", Ki), es = [ts], bl = C("Tooltip", as, es);
export {
  sl as $,
  As as A,
  Ds as B,
  Ls as C,
  Gs as D,
  Us as E,
  Ys as F,
  ds as G,
  Ws as H,
  ys as I,
  zs as J,
  Ns as K,
  Xs as L,
  Zs as M,
  Js as N,
  Qs as O,
  Vs as P,
  nn as Q,
  al as R,
  rl as S,
  bs as T,
  el as U,
  ol as V,
  nl as W,
  $s as X,
  ps as Y,
  Ss as Z,
  il as _,
  gs as a,
  us as a0,
  ll as a1,
  cl as a2,
  ml as a3,
  dl as a4,
  vl as a5,
  ul as a6,
  hl as a7,
  yl as a8,
  pl as a9,
  gl as aa,
  vs as ab,
  fl as ac,
  _s as ad,
  xs as ae,
  bl as af,
  Es as ag,
  er as ah,
  br as ai,
  tr as aj,
  Oa as b,
  Ts as c,
  dt as d,
  ms as e,
  Is as f,
  Cs as g,
  ws as h,
  ks as i,
  Ps as j,
  La as k,
  Ms as l,
  Fs as m,
  Bs as n,
  Os as o,
  so as p,
  Rs as q,
  hs as r,
  io as s,
  Fe as t,
  fs as u,
  js as v,
  tl as w,
  qs as x,
  Hs as y,
  Ks as z
};
//# sourceMappingURL=index-BHS048K2.js.map
