import { jsx as e, jsxs as k, Fragment as T } from "react/jsx-runtime";
import { forwardRef as E, useState as R, useEffect as K, useMemo as U, createContext as H, useContext as O, useRef as q } from "react";
import { h as z, w as N, m as S, B as G, z as D, u as X } from "./useSlidingThumb-CUFxfOOx.js";
import { IoChevronDown as W, IoChevronForward as J, IoChevronBack as Q } from "react-icons/io5";
const V = ".may-kbd{display:inline-flex;align-items:center;justify-content:center;min-width:1.9em;padding-inline:var(--may-space-1);padding-block:.15em;border-radius:var(--may-radius-xs);background:var(--may-color-fill-tertiary);color:var(--may-color-text-secondary);font-family:var(--may-font-mono);font-variant-numeric:tabular-nums;font-weight:500;white-space:nowrap;box-shadow:var(--may-shadow-2xs);transition:transform var(--may-duration-settle) var(--may-spring-bouncy),background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-fast) var(--may-ease-out)}.may-kbd[data-pressed=true]{transform:translateY(1px) scale(.94);background:var(--may-color-fill);color:var(--may-color-text);box-shadow:none;transition:transform var(--may-duration-instant) var(--may-ease-out),background-color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-instant) var(--may-ease-out)}.may-kbd[data-size=xs]{font-size:var(--may-text-caption-2);line-height:var(--may-text-caption-2-leading)}.may-kbd[data-size=sm]{font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading)}.may-kbd[data-size=md]{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading)}.may-kbd[data-size=lg]{font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading)}", Z = {
  cmd: "⌘",
  command: "⌘",
  meta: "⌘",
  mod: "⌘",
  shift: "⇧",
  opt: "⌥",
  option: "⌥",
  alt: "⌥",
  ctrl: "⌃",
  control: "⌃",
  caps: "⇪",
  capslock: "⇪",
  enter: "↩",
  return: "↩",
  esc: "⎋",
  escape: "⎋",
  tab: "⇥",
  backspace: "⌫",
  delete: "⌫",
  space: "␣",
  up: "↑",
  arrowup: "↑",
  down: "↓",
  arrowdown: "↓",
  left: "←",
  arrowleft: "←",
  right: "→",
  arrowright: "→",
  pageup: "⇞",
  pagedown: "⇟",
  home: "↖",
  end: "↘",
  eject: "⏏"
}, aa = {
  cmd: "Meta",
  command: "Meta",
  meta: "Meta",
  mod: "Meta",
  shift: "Shift",
  opt: "Alt",
  option: "Alt",
  alt: "Alt",
  ctrl: "Control",
  control: "Control",
  caps: "CapsLock",
  capslock: "CapsLock",
  enter: "Enter",
  return: "Enter",
  esc: "Escape",
  escape: "Escape",
  tab: "Tab",
  backspace: "Backspace",
  delete: "Backspace",
  space: " ",
  up: "ArrowUp",
  arrowup: "ArrowUp",
  down: "ArrowDown",
  arrowdown: "ArrowDown",
  left: "ArrowLeft",
  arrowleft: "ArrowLeft",
  right: "ArrowRight",
  arrowright: "ArrowRight",
  pageup: "PageUp",
  pagedown: "PageDown",
  home: "Home",
  end: "End"
}, j = /* @__PURE__ */ new Set(["Meta", "Shift", "Alt", "Control", "CapsLock"]), ea = {
  "⌘": "Command",
  "⇧": "Shift",
  "⌥": "Option",
  "⌃": "Control",
  "⇪": "Caps Lock",
  "↩": "Return",
  "⎋": "Escape",
  "⇥": "Tab",
  "⌫": "Delete",
  "␣": "Space",
  "↑": "Up arrow",
  "↓": "Down arrow",
  "←": "Left arrow",
  "→": "Right arrow",
  "⇞": "Page Up",
  "⇟": "Page Down",
  "↖": "Home",
  "↘": "End",
  "⏏": "Eject"
}, ta = E(function({ children: a, size: l = "sm", pressed: d = !1, live: n = !1, className: t, ...s }, y) {
  const p = typeof a == "string" ? a.trim().toLowerCase() : null, c = p ? Z[p] : void 0, [o, v] = R(!1);
  return K(() => {
    if (!n || !p) return;
    const m = aa[p] ?? p, _ = (b) => b.key === m || b.key.toLowerCase() === m.toLowerCase() || b.code.replace(/^(Key|Digit|Numpad)/, "").toLowerCase() === m.toLowerCase(), f = (b) => {
      _(b) && v(!0);
    }, h = (b) => {
      (_(b) || !j.has(m) && j.has(b.key)) && v(!1);
    }, x = () => v(!1);
    return window.addEventListener("keydown", f), window.addEventListener("keyup", h), window.addEventListener("blur", x), () => {
      window.removeEventListener("keydown", f), window.removeEventListener("keyup", h), window.removeEventListener("blur", x);
    };
  }, [n, p]), /* @__PURE__ */ e(
    "kbd",
    {
      ...s,
      ref: y,
      "data-slot": "kbd",
      "data-size": l,
      "data-pressed": d || o ? "true" : void 0,
      className: z("may-kbd", t),
      children: c ? /* @__PURE__ */ k(T, { children: [
        /* @__PURE__ */ e("span", { "aria-hidden": !0, children: c }),
        /* @__PURE__ */ e("span", { className: "may-sr-only", children: ea[c] ?? a })
      ] }) : a
    }
  );
}), ra = S("Kbd", V), ia = [ra], Pa = N("Kbd", ta, ia), Ia = '.may-table{--may-table-row-h: var(--may-control-h-md);--may-table-pad-x: var(--may-space-4);--may-table-font: var(--may-text-subheadline);--may-table-leading: var(--may-text-subheadline-leading);--may-table-tracking: var(--may-text-subheadline-tracking);--may-table-stagger: calc(var(--may-duration-instant) / 4);--may-table-max: none;--may-table-row-i: 0;display:flex;flex-direction:column;width:100%;min-width:0}.may-table__caption{padding:var(--may-space-4) var(--may-space-4) var(--may-space-2);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:.06em;text-transform:uppercase;color:var(--may-color-text-secondary)}.may-table[data-size=sm]{--may-table-row-h: var(--may-control-h-sm);--may-table-pad-x: var(--may-space-3);--may-table-font: var(--may-text-footnote);--may-table-leading: var(--may-text-footnote-leading);--may-table-tracking: var(--may-text-footnote-tracking)}.may-table[data-size=lg]{--may-table-row-h: var(--may-control-h-lg);--may-table-pad-x: var(--may-space-5);--may-table-font: var(--may-text-body);--may-table-leading: var(--may-text-body-leading);--may-table-tracking: var(--may-text-body-tracking)}.may-table__scroller{min-width:0;overflow-x:auto;background:var(--may-color-surface);border-radius:var(--may-radius-card)}.may-table[data-bounded=true] .may-table__scroller{max-height:var(--may-table-max);overflow-y:auto}.may-table[data-sticky=true]:not([data-bounded=true]) .may-table__scroller{overflow:visible}.may-table__table{width:100%;border-collapse:separate;border-spacing:0;background:transparent;color:var(--may-color-text)}.may-table__head-cell{position:relative;height:var(--may-table-row-h);padding:var(--may-space-2) var(--may-table-pad-x);text-align:start;vertical-align:middle;white-space:nowrap;font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);font-weight:var(--may-text-headline-weight);color:var(--may-color-text-secondary);background:var(--may-color-surface)}.may-table[data-sticky=true] .may-table__head-cell{position:sticky;inset-block-start:0;z-index:var(--may-z-sticky)}.may-table__head-cell:after{content:"";position:absolute;inset-inline:0;inset-block-end:0;height:1px;background:var(--may-color-separator)}.may-table__head-cell:first-child{border-start-start-radius:var(--may-radius-card)}.may-table__head-cell:last-child{border-start-end-radius:var(--may-radius-card)}.may-table__row{--may-table-row-bg: transparent}.may-table__row[data-clickable=true]{cursor:pointer}.may-table__row[data-zebra=true]{--may-table-row-bg: var(--may-color-fill-quaternary)}.may-table__row[data-selected=true]{--may-table-row-bg: color-mix(in srgb, var(--may-color-tint) 12%, transparent)}.may-table__row[data-pressed=true]{--may-table-row-bg: var(--may-color-highlight-strong)}.may-table__row[data-selected=true][data-pressed=true]{--may-table-row-bg: color-mix(in srgb, var(--may-color-tint) 22%, transparent)}@keyframes may-table-row-in{0%{opacity:0;transform:translateY(var(--may-space-2))}to{opacity:1;transform:none}}.may-table__row,.may-table__mrow{animation:may-table-row-in var(--may-duration-settle) var(--may-ease-out) both;animation-delay:calc(var(--may-table-row-i) * var(--may-table-stagger))}@media(prefers-reduced-motion:reduce){.may-table__row,.may-table__mrow,.may-table__check{animation:none}}.may-table__cell{position:relative;height:var(--may-table-row-h);padding:var(--may-space-2) var(--may-table-pad-x);vertical-align:middle;text-align:start;font-size:var(--may-table-font);line-height:var(--may-table-leading);letter-spacing:var(--may-table-tracking);color:var(--may-color-text);background-color:var(--may-table-row-bg, transparent);transition:background-color var(--may-duration-color) var(--may-ease-out)}.may-table__cell[data-align=center],.may-table__head-cell[data-align=center]{text-align:center}.may-table__cell[data-align=end],.may-table__head-cell[data-align=end]{text-align:end}.may-table__cell[data-numeric=true]{font-variant-numeric:tabular-nums}.may-table__cell:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:var(--may-color-separator)}.may-table__row:first-child .may-table__cell:before{content:none}@media(min-resolution:2dppx){.may-table__head-cell:after,.may-table__cell:before{height:var(--may-hairline)}}.may-table__cell:first-child:after{content:"";position:absolute;inset-block:var(--may-space-2);inset-inline-start:0;width:var(--may-space-1);border-radius:var(--may-radius-full);background:var(--may-color-tint);transform:scaleY(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-table__row[data-selected=true] .may-table__cell:first-child:after{transform:scaleY(1)}.may-table__row:last-child .may-table__cell:first-child{border-end-start-radius:var(--may-radius-card)}.may-table__row:last-child .may-table__cell:last-child{border-end-end-radius:var(--may-radius-card)}.may-table__activator{display:inline-flex;align-items:center;gap:var(--may-space-2);width:100%;min-width:0;padding:0;border:0;border-radius:var(--may-radius-xs);background:transparent;color:inherit;font:inherit;text-align:start;cursor:pointer}.may-table__empty{padding:var(--may-space-8) var(--may-space-4);text-align:center;color:var(--may-color-text-secondary)}.may-table__sep{padding-inline:var(--may-space-1);color:var(--may-color-text-tertiary)}.may-table__value[data-numeric=true]{font-variant-numeric:tabular-nums}.may-table__check{width:var(--may-space-4);height:var(--may-space-4);flex-shrink:0;color:var(--may-color-tint);animation:may-table-check-in var(--may-duration-settle) var(--may-spring-bouncy) both}@keyframes may-table-check-in{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:none}}', oa = ".may-checkbox{position:relative;display:inline-flex;align-items:flex-start;gap:var(--may-space-3);min-height:var(--may-control-h);padding-block:calc((var(--may-control-h) - var(--may-text-body-leading)) / 2);padding-inline:var(--may-space-2);margin-inline:calc(var(--may-space-2) * -1);border-radius:var(--may-radius-md);color:var(--may-color-text);cursor:pointer}.may-checkbox[data-slot=checkbox].may-pressable{transform:none}.may-checkbox:has(.may-checkbox__description){padding-block:var(--may-space-2)}.may-checkbox[aria-disabled=true]{cursor:not-allowed;opacity:.35}.may-checkbox__box{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--may-check-size);height:var(--may-check-size);margin-block:calc((var(--may-text-body-leading) - var(--may-check-size)) / 2);border-radius:var(--may-radius-xs);background:var(--may-color-fill-tertiary);color:var(--may-color-on-primary);transform:scale(1);transition:background-color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-checkbox:has(.may-checkbox__description) .may-checkbox__box{margin-block-start:calc((var(--may-text-body-leading) - var(--may-check-size)) / 2)}.may-checkbox[data-pressed=true] .may-checkbox__box{transform:scale(.88);transition:transform var(--may-duration-instant) var(--may-ease-out)}.may-checkbox__input:checked+.may-checkbox__box,.may-checkbox__input:indeterminate+.may-checkbox__box{background:var(--may-color-primary)}.may-checkbox[data-invalid=true] .may-checkbox__box{background:color-mix(in srgb,var(--may-color-destructive) 18%,transparent)}.may-checkbox[data-invalid=true] .may-checkbox__input:checked+.may-checkbox__box,.may-checkbox[data-invalid=true] .may-checkbox__input:indeterminate+.may-checkbox__box{background:var(--may-color-destructive)}.may-checkbox__input:focus-visible+.may-checkbox__box{outline:3px solid color-mix(in srgb,var(--may-color-ring) 45%,transparent);outline-offset:2px}.may-checkbox__tick{width:100%;height:100%}.may-checkbox__tick path{stroke-dasharray:1.5 3;stroke-dashoffset:1.5;transition:stroke-dashoffset var(--may-duration-settle) var(--may-ease-out)}.may-checkbox__input:checked+.may-checkbox__box .may-checkbox__tick path{stroke-dashoffset:.5}.may-checkbox__input:indeterminate+.may-checkbox__box .may-checkbox__tick path{stroke-dashoffset:1.5}.may-checkbox__dash{position:absolute;width:55%;height:calc(var(--may-check-size) / 10);border-radius:var(--may-radius-full);background:currentColor;transform:scaleX(0);transition:transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-checkbox__input:indeterminate+.may-checkbox__box .may-checkbox__dash{transform:scaleX(1)}.may-checkbox__text{display:flex;flex-direction:column;gap:1px;min-width:0}.may-checkbox__label{font-size:var(--may-check-text);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text)}.may-checkbox__description{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking);color:var(--may-color-text-secondary)}.may-checkbox[data-size=sm]{--may-check-size: var(--may-space-5);--may-check-text: var(--may-text-subheadline)}.may-checkbox[data-size=md]{--may-check-size: var(--may-space-6);--may-check-text: var(--may-text-body)}.may-checkbox[data-size=lg]{--may-check-size: calc(var(--may-space-6) + var(--may-space-1));--may-check-text: var(--may-text-body)}", na = ".may-input{position:relative;display:inline-flex;align-items:center;gap:var(--may-space-2);min-width:0;background:var(--may-color-fill-tertiary);color:var(--may-color-text);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);cursor:text;box-shadow:0 0 0 0 transparent;transition:background-color var(--may-duration-color) var(--may-ease-out),box-shadow var(--may-duration-settle) var(--may-spring-snappy)}.may-input--full{display:flex;width:100%}.may-input:focus-within{background:var(--may-color-fill-quaternary);box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-ring) 30%,transparent)}.may-input[data-invalid=true]{box-shadow:0 0 0 2px color-mix(in srgb,var(--may-color-danger) 45%,transparent)}.may-input[data-invalid=true]:focus-within{box-shadow:0 0 0 var(--may-space-1) color-mix(in srgb,var(--may-color-danger) 40%,transparent)}@media(hover:none)and (pointer:coarse){.may-input:focus-within{box-shadow:none}.may-input[data-invalid=true],.may-input[data-invalid=true]:focus-within{box-shadow:0 0 0 2px color-mix(in srgb,var(--may-color-danger) 45%,transparent)}}.may-input[data-disabled=true]{opacity:.4;cursor:not-allowed}@media(hover:hover)and (pointer:fine){.may-input:not([data-disabled=true]):not(:focus-within):hover{background:var(--may-color-fill-secondary)}}.may-input[data-size=sm]{height:var(--may-control-h-sm);padding-inline:var(--may-space-3);border-radius:var(--may-radius-sm);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.may-input[data-size=md]{height:var(--may-control-h-md);padding-inline:var(--may-space-4);border-radius:var(--may-radius-md)}.may-input[data-size=lg]{height:var(--may-control-h-lg);padding-inline:var(--may-space-5);border-radius:var(--may-radius-lg)}.may-input__control{flex:1;min-width:0;height:100%;margin:0;padding:0;border:0;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-overflow:ellipsis}.may-input__control::placeholder{color:var(--may-color-text-tertiary);opacity:1}.may-input__control:disabled{cursor:not-allowed;-webkit-text-fill-color:currentColor;opacity:1}.may-input__control:focus-visible{outline:none}.may-input__affix{display:inline-flex;align-items:center;flex-shrink:0;gap:var(--may-space-1);color:var(--may-color-text-tertiary);font-size:var(--may-text-subheadline);white-space:nowrap;transition:color var(--may-duration-color) var(--may-ease-out)}.may-input__affix>svg{width:1.1em;height:1.1em;display:block}.may-input:focus-within .may-input__affix[data-side=leading]{color:var(--may-color-text-secondary)}", sa = ".may-select{position:relative;display:inline-flex;align-items:center;min-width:0;max-width:100%;border-radius:var(--may-radius-md);background:var(--may-color-fill-tertiary);color:var(--may-color-text);cursor:pointer;transition:background-color var(--may-duration-color) var(--may-ease-out),color var(--may-duration-color) var(--may-ease-out),transform var(--may-duration-settle) var(--may-spring-bouncy)}.may-select--full{display:flex;width:100%}.may-select[aria-disabled=true]{opacity:.35;cursor:not-allowed}.may-select[data-pressed=true]{background:var(--may-color-fill-secondary)}.may-select[data-invalid=true]{background:color-mix(in srgb,var(--may-color-destructive) 14%,transparent);color:var(--may-color-danger)}@media(hover:hover)and (pointer:fine){.may-select.may-hoverable[data-size]:hover:not([aria-disabled=true]){background:var(--may-color-fill-secondary)}.may-select.may-hoverable[data-invalid=true]:hover:not([aria-disabled=true]){background:color-mix(in srgb,var(--may-color-destructive) 22%,transparent)}}.may-select__native{-moz-appearance:none;appearance:none;-webkit-appearance:none;flex:1;width:100%;min-width:0;height:100%;margin:0;border:0;border-radius:inherit;background:transparent;color:inherit;font-family:inherit;font-size:inherit;font-weight:var(--may-text-body-weight);letter-spacing:var(--may-text-body-tracking);line-height:1;text-overflow:ellipsis;cursor:inherit;padding-inline:var(--may-space-4) calc(var(--may-space-4) + var(--may-space-5))}.may-select__native:disabled{cursor:not-allowed;-webkit-text-fill-color:currentColor;opacity:1}.may-select__native:focus-visible{outline:none}.may-select:has(.may-select__native:focus-visible){outline:3px solid color-mix(in srgb,var(--may-color-ring) 45%,transparent);outline-offset:2px}.may-select__native option{color:var(--may-color-text);background:var(--may-color-surface)}.may-select[data-placeholder=true] .may-select__native{color:var(--may-color-text-secondary)}.may-select__chevron{position:absolute;inset-inline-end:var(--may-space-3);width:var(--may-space-4);height:var(--may-space-4);flex-shrink:0;color:var(--may-color-text-tertiary);pointer-events:none;transition:color var(--may-duration-color) var(--may-ease-out)}.may-select[data-invalid=true] .may-select__chevron{color:var(--may-color-danger)}.may-select[data-size=xs]{height:var(--may-control-h-xs);font-size:var(--may-text-footnote);border-radius:var(--may-radius-xs)}.may-select[data-size=xs] .may-select__native{padding-inline:var(--may-space-3) calc(var(--may-space-3) + var(--may-space-4))}.may-select[data-size=xs] .may-select__chevron{inset-inline-end:var(--may-space-2);width:var(--may-space-3);height:var(--may-space-3)}.may-select[data-size=sm]{height:var(--may-control-h-sm);font-size:var(--may-text-subheadline);border-radius:var(--may-radius-sm)}.may-select[data-size=sm] .may-select__native{padding-inline:var(--may-space-3) calc(var(--may-space-3) + var(--may-space-5))}.may-select[data-size=md]{height:var(--may-control-h-md);font-size:var(--may-text-body);border-radius:var(--may-radius-md)}.may-select[data-size=lg]{height:var(--may-control-h-lg);font-size:var(--may-text-body);border-radius:var(--may-radius-lg)}.may-select[data-size=lg] .may-select__native{padding-inline:var(--may-space-5) calc(var(--may-space-5) + var(--may-space-5))}", la = '.may-pagination{min-width:0;color:var(--may-color-text)}.may-pagination__list{position:relative;isolation:isolate;display:flex;align-items:center;flex-wrap:nowrap;gap:var(--may-space-1);margin:0;padding:0;list-style:none}.may-pagination__item{display:inline-flex}.may-pagination__thumb{position:absolute;z-index:0;inset-block:0;inset-inline-start:0;width:1px;transform-origin:0 50%;background:var(--may-color-primary);pointer-events:none}.may-pagination__key{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;padding-inline:var(--may-space-2);border:0;border-radius:var(--may-radius-full);background:transparent;color:var(--may-color-text);font-family:inherit;font-weight:500;font-variant-numeric:tabular-nums;line-height:1;cursor:pointer;transition:color var(--may-duration-color) var(--may-ease-out),opacity var(--may-duration-fast) var(--may-ease-out)}.may-pagination__key:disabled{opacity:.3;cursor:not-allowed}.may-pagination__digit{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center}.may-pagination__page[aria-current=page]{color:var(--may-color-on-primary);font-weight:600;cursor:default}.may-pagination__arrow{color:var(--may-color-tint)}.may-pagination__arrow>.may-pagination__digit>svg{width:1.05em;height:1.05em;display:block}@media(hover:hover)and (pointer:fine){.may-pagination__page[aria-current=page]:hover{background-color:transparent}}.may-pagination__gap,.may-pagination__status{display:inline-flex;align-items:center;justify-content:center;color:var(--may-color-text-secondary);-webkit-user-select:none;user-select:none}.may-pagination__gap{color:var(--may-color-text-tertiary);line-height:.8}.may-pagination__status{padding-inline:var(--may-space-3);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}.may-pagination[data-size=sm] .may-pagination__key,.may-pagination[data-size=sm] .may-pagination__gap{min-width:var(--may-control-h-sm);height:var(--may-control-h-sm);font-size:var(--may-text-footnote)}.may-pagination[data-size=md] .may-pagination__key,.may-pagination[data-size=md] .may-pagination__gap{min-width:var(--may-control-h-md);height:var(--may-control-h-md);font-size:var(--may-text-subheadline)}.may-pagination[data-size=lg] .may-pagination__key,.may-pagination[data-size=lg] .may-pagination__gap{min-width:var(--may-control-h-lg);height:var(--may-control-h-lg);font-size:var(--may-text-body)}.may-pagination[data-size=sm] .may-pagination__status{font-size:var(--may-text-footnote)}.may-pagination[data-size=md] .may-pagination__status{font-size:var(--may-text-subheadline)}.may-pagination[data-size=lg] .may-pagination__status{font-size:var(--may-text-body)}.may-pagination[data-size=sm] .may-pagination__key:after{content:"";position:absolute;inset-inline:0;inset-block-start:50%;height:var(--may-control-h);transform:translateY(-50%)}.may-pagination[data-compact=true] .may-pagination__list{flex-wrap:nowrap;justify-content:space-between}', Y = H(null);
function ca() {
  return O(Y);
}
function B(i = {}) {
  const a = ca(), l = [i["aria-describedby"], a == null ? void 0 : a.describedBy].filter(Boolean).join(" ");
  return {
    id: i.id ?? (a == null ? void 0 : a.id),
    invalid: i.invalid ?? (a == null ? void 0 : a.invalid) ?? !1,
    required: i.required ?? (a == null ? void 0 : a.required),
    disabled: i.disabled ?? (a == null ? void 0 : a.disabled),
    "aria-describedby": l || void 0
  };
}
function Ma({
  children: i,
  label: a,
  description: l,
  error: d,
  required: n = !1,
  disabled: t = !1,
  id: s,
  className: y,
  ...p
}) {
  const c = G(s), o = !!d, v = o ? d : l, m = o ? `${c}-error` : l ? `${c}-description` : void 0, _ = U(
    () => ({ id: c, describedBy: m, invalid: o, required: n, disabled: t }),
    [c, m, o, n, t]
  );
  return /* @__PURE__ */ k(
    "div",
    {
      ...p,
      "data-slot": "field",
      "data-invalid": o ? "true" : void 0,
      "data-disabled": t ? "true" : void 0,
      className: z("may-field", y),
      children: [
        a != null && /* @__PURE__ */ k("label", { className: "may-field__label", htmlFor: c, children: [
          a,
          n && /* @__PURE__ */ e("span", { className: "may-field__required", "aria-hidden": !0, children: "*" })
        ] }),
        /* @__PURE__ */ e(Y.Provider, { value: _, children: i }),
        v != null && v !== !1 && /* @__PURE__ */ e(
          "p",
          {
            id: m,
            className: "may-field__message",
            "data-kind": o ? "error" : "description",
            role: o ? "alert" : void 0,
            children: v
          }
        )
      ]
    }
  );
}
const ma = E(function({
  children: a,
  description: l,
  size: d = "md",
  indeterminate: n = !1,
  invalid: t,
  onCheckedChange: s,
  onChange: y,
  checked: p,
  defaultChecked: c,
  disabled: o,
  required: v,
  id: m,
  className: _,
  style: f,
  "aria-describedby": h,
  ...x
}, b) {
  const r = B({ id: m, invalid: t, required: v, disabled: o, "aria-describedby": h }), u = !!r.disabled, w = q(null), { pressProps: L } = D(u), [C, P] = R(!!c), I = p ?? C;
  K(() => {
    w.current && (w.current.indeterminate = n);
  });
  const M = (g) => {
    w.current = g, typeof b == "function" ? b(g) : b && (b.current = g);
  }, $ = (g) => {
    p === void 0 && P(g.target.checked), s == null || s(g.target.checked), y == null || y(g);
  };
  return /* @__PURE__ */ k(
    "label",
    {
      ...L,
      "data-slot": "checkbox",
      "data-size": d,
      "data-checked": I && !n ? "true" : void 0,
      "data-indeterminate": n ? "true" : void 0,
      "data-invalid": r.invalid ? "true" : void 0,
      "aria-disabled": u || void 0,
      className: z("may-checkbox", "may-pressable", "may-hoverable", _),
      style: f,
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            ...x,
            ref: M,
            id: r.id,
            type: "checkbox",
            className: "may-checkbox__input may-sr-only",
            disabled: u,
            required: r.required,
            "aria-invalid": r.invalid || void 0,
            "aria-describedby": r["aria-describedby"],
            onChange: $,
            ...p !== void 0 ? { checked: p } : { defaultChecked: c }
          }
        ),
        /* @__PURE__ */ k("span", { className: "may-checkbox__box", children: [
          /* @__PURE__ */ e("svg", { className: "may-checkbox__tick", viewBox: "0 0 24 24", "aria-hidden": !0, focusable: "false", children: /* @__PURE__ */ e(
            "path",
            {
              d: "M5.5 12.5L10 17L18.5 7",
              pathLength: 1,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ) }),
          /* @__PURE__ */ e("span", { className: "may-checkbox__dash", "aria-hidden": !0 })
        ] }),
        (a != null || l != null) && /* @__PURE__ */ k("span", { className: "may-checkbox__text", children: [
          a != null && /* @__PURE__ */ e("span", { className: "may-checkbox__label", children: a }),
          l != null && /* @__PURE__ */ e("span", { className: "may-checkbox__description", children: l })
        ] })
      ]
    }
  );
}), da = S("Checkbox", oa), ya = [da], $a = N("Checkbox", ma, ya);
function pa(i, a) {
  typeof i == "function" ? i(a) : i && (i.current = a);
}
const ba = "button, a[href], input, select, textarea, [tabindex]", ua = E(function({
  size: a = "md",
  invalid: l,
  prefix: d,
  suffix: n,
  fullWidth: t = !1,
  wrapperClassName: s,
  className: y,
  id: p,
  required: c,
  disabled: o,
  "aria-describedby": v,
  style: m,
  ..._
}, f) {
  const h = B({ id: p, invalid: l, required: c, disabled: o, "aria-describedby": v }), x = q(null), b = (r) => {
    var w;
    const u = r.target;
    u === x.current || u.closest(ba) || (r.preventDefault(), (w = x.current) == null || w.focus());
  };
  return /* @__PURE__ */ k(
    "div",
    {
      "data-slot": "input",
      "data-size": a,
      "data-invalid": h.invalid ? "true" : void 0,
      "data-disabled": h.disabled ? "true" : void 0,
      className: z("may-input", t && "may-input--full", s),
      style: m,
      onMouseDown: b,
      children: [
        d != null && /* @__PURE__ */ e("span", { className: "may-input__affix", "data-side": "leading", children: d }),
        /* @__PURE__ */ e(
          "input",
          {
            ..._,
            ref: (r) => {
              x.current = r, pa(f, r);
            },
            id: h.id,
            required: h.required,
            disabled: h.disabled,
            "aria-invalid": h.invalid || void 0,
            "aria-describedby": h["aria-describedby"],
            className: z("may-input__control", y)
          }
        ),
        n != null && /* @__PURE__ */ e("span", { className: "may-input__affix", "data-side": "trailing", children: n })
      ]
    }
  );
}), va = S("Input", na), ha = [va], Aa = N("Input", ua, ha), ga = E(function({
  size: a = "md",
  invalid: l,
  fullWidth: d = !1,
  options: n,
  placeholder: t,
  onValueChange: s,
  children: y,
  className: p,
  disabled: c,
  required: o,
  id: v,
  value: m,
  defaultValue: _,
  onChange: f,
  "aria-describedby": h,
  style: x,
  ...b
}, r) {
  const u = B({ id: v, invalid: l, required: o, disabled: c, "aria-describedby": h }), w = !!u.disabled, { pressProps: L } = D(w), [C, P] = R(
    () => _ !== void 0 ? String(_) : ""
  ), I = m !== void 0 ? String(m) : C, M = !!t && I === "", $ = (g) => {
    m === void 0 && P(g.target.value), s == null || s(g.target.value), f == null || f(g);
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ...L,
      "data-slot": "select",
      "data-size": a,
      "data-invalid": u.invalid ? "true" : void 0,
      "data-placeholder": M ? "true" : void 0,
      "aria-disabled": w || void 0,
      className: z(
        "may-select",
        "may-pressable",
        "may-hoverable",
        d && "may-select--full",
        p
      ),
      style: x,
      children: [
        /* @__PURE__ */ k(
          "select",
          {
            ...b,
            ref: r,
            id: u.id,
            className: "may-select__native",
            disabled: w,
            required: u.required,
            "aria-invalid": u.invalid || void 0,
            "aria-describedby": u["aria-describedby"],
            onChange: $,
            ...m !== void 0 ? { value: m } : (
              // An empty default is what keeps the placeholder selected on mount.
              { defaultValue: _ ?? (t ? "" : void 0) }
            ),
            children: [
              t && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: t }),
              n == null ? void 0 : n.map((g) => /* @__PURE__ */ e("option", { value: g.value, disabled: g.disabled, children: g.label }, g.value)),
              y
            ]
          }
        ),
        /* @__PURE__ */ e(W, { className: "may-select__chevron", "aria-hidden": !0, focusable: "false" })
      ]
    }
  );
}), _a = S("Select", sa), fa = [_a], Ra = N("Select", ga, fa), xa = 1.14, F = (i, a) => Array.from({ length: Math.max(0, a - i + 1) }, (l, d) => i + d);
function ka(i, a, l) {
  const d = l * 2 + 5;
  if (a <= d) return F(1, a);
  const n = d - 3;
  let t = i - l - 1, s = i + l + 1;
  t < 2 ? (t = 2, s = t + n) : s > a - 1 && (s = a - 1, t = s - n);
  const y = F(t, s);
  return t > 2 && (y[0] = "gap-start"), s < a - 1 && (y[y.length - 1] = "gap-end"), [1, ...y, a];
}
function A({
  children: i,
  label: a,
  current: l = !1,
  disabled: d = !1,
  onClick: n,
  className: t,
  keyRef: s
}) {
  const { pressProps: y } = D(d);
  return /* @__PURE__ */ e(
    "button",
    {
      ...y,
      ref: s,
      type: "button",
      "aria-label": a,
      "aria-current": l ? "page" : void 0,
      disabled: d,
      onClick: n,
      className: z("may-pagination__key", "may-pressable", "may-hoverable", t),
      children: /* @__PURE__ */ e("span", { className: "may-pagination__digit", children: i })
    }
  );
}
function wa({
  page: i,
  pageCount: a,
  onPageChange: l,
  siblingCount: d = 1,
  size: n = "md",
  compact: t = !1,
  className: s,
  "aria-label": y = "Pagination",
  ...p
}) {
  const c = Math.max(1, Math.floor(a)), o = Math.min(Math.max(1, Math.floor(i)), c), v = (r) => {
    const u = Math.min(Math.max(1, r), c);
    u !== o && l(u);
  }, m = t ? [] : ka(o, c, d), { trackRef: _, thumbRef: f, registerItem: h, onPointerDown: x } = X({
    itemCount: m.length,
    selectedIndex: m.findIndex((r) => r === o),
    roundEnds: !0,
    pressScale: xa,
    enabled: !t
  }), b = /* @__PURE__ */ e("li", { className: "may-pagination__item", children: /* @__PURE__ */ e(
    A,
    {
      label: "Previous page",
      disabled: o <= 1,
      onClick: () => v(o - 1),
      className: "may-pagination__arrow",
      children: /* @__PURE__ */ e(Q, { "aria-hidden": !0, focusable: "false" })
    }
  ) });
  return /* @__PURE__ */ e(
    "nav",
    {
      ...p,
      "aria-label": y,
      "data-slot": "pagination",
      "data-size": n,
      "data-compact": t ? "true" : void 0,
      className: z("may-pagination", s),
      children: /* @__PURE__ */ k("ul", { ref: _, className: "may-pagination__list", onPointerDown: x, children: [
        !t && /* @__PURE__ */ e("span", { ref: f, className: "may-pagination__thumb", "aria-hidden": !0 }),
        b,
        t ? /* @__PURE__ */ e("li", { className: "may-pagination__item", children: /* @__PURE__ */ k("span", { className: "may-pagination__status", "aria-live": "polite", children: [
          "Page ",
          o,
          " of ",
          c
        ] }) }) : m.map(
          (r, u) => typeof r == "number" ? /* @__PURE__ */ e("li", { className: "may-pagination__item", children: /* @__PURE__ */ e(
            A,
            {
              keyRef: h(u),
              label: r === o ? `Page ${r}, current page` : `Go to page ${r}`,
              current: r === o,
              onClick: () => v(r),
              className: "may-pagination__page",
              children: r
            }
          ) }, r) : /* @__PURE__ */ e("li", { className: "may-pagination__item", children: /* @__PURE__ */ e("span", { className: "may-pagination__gap", "aria-hidden": !0, children: "…" }) }, r)
        ),
        /* @__PURE__ */ e("li", { className: "may-pagination__item", children: /* @__PURE__ */ e(
          A,
          {
            label: "Next page",
            disabled: o >= c,
            onClick: () => v(o + 1),
            className: "may-pagination__arrow",
            children: /* @__PURE__ */ e(J, { "aria-hidden": !0, focusable: "false" })
          }
        ) })
      ] })
    }
  );
}
const za = S("Pagination", la), Na = [za], Da = N("Pagination", wa, Na);
export {
  $a as C,
  Ma as F,
  Aa as I,
  Pa as K,
  Da as P,
  Ra as S,
  B as a,
  oa as b,
  Ia as c,
  na as i,
  V as k,
  la as p,
  sa as s,
  ca as u
};
//# sourceMappingURL=index-DzxRow2V.js.map
