import { jsx as Z, jsxs as ma, Fragment as Ca } from "react/jsx-runtime";
import { useId as Ea, useState as ca, useRef as w, useEffect as j, useCallback as W, useSyncExternalStore as ba, isValidElement as qa, cloneElement as Ia, useLayoutEffect as ha, useContext as ta, createContext as Ba, useMemo as Pa, createElement as sa, Fragment as Fa } from "react";
function ya(...a) {
  return a.filter(Boolean).join(" ");
}
function Ra(a) {
  const r = Ea();
  return a ?? `may-${r.replace(/:/g, "")}`;
}
const Aa = 90;
function Ha(a = !1) {
  const [r, t] = ca(!1), i = w(0), l = w(null);
  j(
    () => () => {
      l.current && clearTimeout(l.current);
    },
    []
  );
  const f = W(() => {
    a || (l.current && (clearTimeout(l.current), l.current = null), i.current = Date.now(), t(!0));
  }, [a]), d = W(() => {
    const v = Date.now() - i.current, k = Math.max(0, Aa - v);
    if (k === 0) {
      t(!1);
      return;
    }
    l.current = setTimeout(() => t(!1), k);
  }, []);
  return {
    pressed: r,
    pressProps: {
      onPointerDown: f,
      onPointerUp: d,
      onPointerCancel: d,
      onPointerLeave: d,
      "data-pressed": r ? "true" : void 0
    }
  };
}
const Wa = "(prefers-reduced-motion: reduce)";
let la = null;
function va() {
  return la || (typeof window > "u" || !window.matchMedia ? null : la = window.matchMedia(Wa));
}
function Da(a) {
  const r = va();
  return r ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : () => {
  };
}
const Qa = () => {
  var a;
  return ((a = va()) == null ? void 0 : a.matches) ?? !1;
};
function xa() {
  return ba(Da, Qa, () => !1);
}
const $a = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Na = 8, U = 8, _a = 8, Xa = 24, ja = 150, da = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', Ga = typeof window > "u" ? j : ha;
function Ya(a, r, t, i) {
  const l = document.documentElement.clientWidth, f = document.documentElement.clientHeight, [d, v] = t.split("-"), k = v ?? "center", E = {
    top: a.top - U,
    bottom: f - a.bottom - U,
    left: a.left - U,
    right: l - a.right - U
  }, O = (d === "top" || d === "bottom" ? r.height : r.width) + i, I = $a[d], p = E[d] >= O || E[I] <= E[d] ? d : I, C = p === "top" || p === "bottom", m = C ? E[p] - i : f - U * 2, A = Math.min(r.height, m), g = Math.min(r.width, l - U * 2);
  let T = 0, b = 0;
  p === "top" ? b = a.top - i - A : p === "bottom" ? b = a.bottom + i : p === "left" ? T = a.left - i - g : T = a.right + i;
  const z = C ? a.left : a.top, L = C ? a.width : a.height, P = C ? g : A;
  let F = z + (L - P) / 2;
  k === "start" ? F = z : k === "end" && (F = z + L - P);
  const G = (C ? l : f) - U - P;
  F = Math.max(U, Math.min(F, Math.max(U, G))), C ? T = F : b = F;
  const R = Math.min(Xa, P / 2), V = z + L / 2 - F, N = Math.max(R, Math.min(V, P - R));
  return {
    x: Math.round(T),
    y: Math.round(b),
    side: p,
    align: k,
    anchorOffset: Math.round(N),
    maxHeight: Math.round(m)
  };
}
function Ua(a, r) {
  const [t, i] = ca(a);
  return j(() => {
    if (a) {
      i(!0);
      return;
    }
    if (!t) return;
    const l = setTimeout(() => i(!1), r);
    return () => clearTimeout(l);
  }, [a, t, r]), t;
}
function ze({
  trigger: a,
  children: r,
  placement: t = "bottom",
  offset: i = Na,
  open: l,
  defaultOpen: f = !1,
  onOpenChange: d,
  arrow: v = !0,
  role: k = "dialog",
  haspopup: E = "dialog",
  autoFocus: q = !0,
  padded: O = !0,
  className: I,
  surfaceClassName: p,
  "aria-label": C
}) {
  const [m, A] = ca(f), g = l ?? m, T = xa(), b = Ua(g, T ? 0 : ja), z = w(null), L = w(null), P = w(null), F = w(!1), G = w(g), R = Ra(), { pressProps: V } = Ha(), N = W(
    (s) => {
      l === void 0 && A(s), d == null || d(s);
    },
    [l, d]
  ), D = i + (v ? _a : 0), H = W(() => {
    const s = L.current, n = P.current;
    if (!s || !n) return;
    n.style.maxHeight = "";
    const S = { width: n.offsetWidth, height: n.offsetHeight }, B = Ya(s.getBoundingClientRect(), S, t, D);
    n.style.left = `${B.x}px`, n.style.top = `${B.y}px`, n.style.maxHeight = `${B.maxHeight}px`, n.style.setProperty("--may-popover-anchor", `${B.anchorOffset}px`), n.dataset.side = B.side, n.dataset.align = B.align, n.dataset.positioned = "true";
  }, [t, D]);
  Ga(() => {
    if (!b) return;
    H();
    const s = (S) => {
      var B;
      (B = P.current) != null && B.contains(S.target) || H();
    };
    window.addEventListener("scroll", s, !0), window.addEventListener("resize", s);
    const n = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => H());
    return L.current && (n == null || n.observe(L.current)), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s), n == null || n.disconnect();
    };
  }, [b, g, H]);
  const M = W(
    (s) => {
      F.current = !s, N(!1);
    },
    [N]
  );
  j(() => {
    if (!g) return;
    const s = (S) => {
      S.key === "Escape" && (S.stopPropagation(), M(!0));
    }, n = (S) => {
      var B;
      (B = z.current) != null && B.contains(S.target) || M(!1);
    };
    return document.addEventListener("keydown", s, !0), document.addEventListener("pointerdown", n, !0), () => {
      document.removeEventListener("keydown", s, !0), document.removeEventListener("pointerdown", n, !0);
    };
  }, [g, M]), j(() => {
    if (!g || !q) return;
    const s = P.current;
    if (!s) return;
    (s.querySelector(da) ?? s).focus({ preventScroll: !0 });
  }, [g, q]), j(() => {
    var s, n;
    if (G.current && !g) {
      if (((s = P.current) == null ? void 0 : s.contains(document.activeElement)) && !F.current) {
        const B = (n = L.current) == null ? void 0 : n.querySelector(da);
        B == null || B.focus({ preventScroll: !0 });
      }
      F.current = !1;
    }
    G.current = g;
  }, [g]);
  const e = (s) => {
    s.defaultPrevented || (g ? M(!0) : N(!0));
  }, o = {
    "aria-haspopup": E,
    "aria-expanded": g,
    "aria-controls": b ? R : void 0
  }, y = qa(a) ? Ia(a, {
    ...o,
    onClick: (s) => {
      var n, S;
      (S = (n = a.props).onClick) == null || S.call(n, s), e(s);
    }
  }) : /* @__PURE__ */ Z(
    "button",
    {
      ...o,
      ...V,
      type: "button",
      onClick: e,
      className: "may-popover__trigger may-pressable may-hoverable",
      children: a
    }
  );
  return /* @__PURE__ */ ma(
    "span",
    {
      ref: z,
      "data-slot": "popover",
      className: ya("may-popover", I),
      onBlur: (s) => {
        var S;
        const n = s.relatedTarget;
        !g || !n || (S = z.current) != null && S.contains(n) || M(!1);
      },
      children: [
        /* @__PURE__ */ Z("span", { ref: L, className: "may-popover__anchor", children: y }),
        b && /* @__PURE__ */ ma(
          "div",
          {
            ref: P,
            id: R,
            role: k === "none" ? void 0 : k,
            "aria-label": C,
            tabIndex: -1,
            "data-slot": "popover-surface",
            "data-state": g ? "open" : "closed",
            "data-positioned": "false",
            "data-padded": O ? void 0 : "false",
            className: ya("may-popover__surface", p),
            children: [
              v && /* @__PURE__ */ Z("span", { className: "may-popover__arrow", "aria-hidden": !0 }),
              /* @__PURE__ */ Z("div", { className: "may-popover__body", "data-slot": "scroll-area", "data-scroll-hint": "true", children: r })
            ]
          }
        )
      ]
    }
  );
}
const Le = {
  alertGap: "alert-gap",
  bgBase: "bg-base",
  bgElevated: "bg-elevated",
  bgGrouped: "bg-grouped",
  bgNested: "bg-nested",
  blue: "blue",
  breakpointDesktop: "breakpoint-desktop",
  brown: "brown",
  colorBg: "color-bg",
  colorDanger: "color-danger",
  colorDestructive: "color-destructive",
  colorFill: "color-fill",
  colorFillQuaternary: "color-fill-quaternary",
  colorFillSecondary: "color-fill-secondary",
  colorFillTertiary: "color-fill-tertiary",
  colorHighlight: "color-highlight",
  colorHighlightStrong: "color-highlight-strong",
  colorInfo: "color-info",
  colorOnDestructive: "color-on-destructive",
  colorOnPrimary: "color-on-primary",
  colorPrimary: "color-primary",
  colorRing: "color-ring",
  colorScrim: "color-scrim",
  colorSeparator: "color-separator",
  colorSeparatorOpaque: "color-separator-opaque",
  colorSuccess: "color-success",
  colorSurface: "color-surface",
  colorSurfaceNested: "color-surface-nested",
  colorText: "color-text",
  colorTextQuaternary: "color-text-quaternary",
  colorTextSecondary: "color-text-secondary",
  colorTextTertiary: "color-text-tertiary",
  colorTint: "color-tint",
  colorWarning: "color-warning",
  controlH: "control-h",
  controlHLg: "control-h-lg",
  controlHMd: "control-h-md",
  controlHSm: "control-h-sm",
  controlHXs: "control-h-xs",
  cyan: "cyan",
  durationColor: "duration-color",
  durationFast: "duration-fast",
  durationFollow: "duration-follow",
  durationInstant: "duration-instant",
  durationSettle: "duration-settle",
  durationSheetIn: "duration-sheet-in",
  durationSheetOut: "duration-sheet-out",
  easeBack: "ease-back",
  easeBounce: "ease-bounce",
  easeElastic: "ease-elastic",
  easeExpo: "ease-expo",
  easeOut: "ease-out",
  easeSheet: "ease-sheet",
  easeStandard: "ease-standard",
  fillPrimary: "fill-primary",
  fillQuaternary: "fill-quaternary",
  fillSecondary: "fill-secondary",
  fillTertiary: "fill-tertiary",
  fontMono: "font-mono",
  fontRounded: "font-rounded",
  fontSans: "font-sans",
  gradBlue: "grad-blue",
  gradGray: "grad-gray",
  gradGreen: "grad-green",
  gradIndigo: "grad-indigo",
  gradOrange: "grad-orange",
  gradPink: "grad-pink",
  gradPurple: "grad-purple",
  gradRed: "grad-red",
  gradSpectrum: "grad-spectrum",
  gradTeal: "grad-teal",
  gradYellow: "grad-yellow",
  gray: "gray",
  gray2: "gray-2",
  gray3: "gray-3",
  gray4: "gray-4",
  gray5: "gray-5",
  gray6: "gray-6",
  green: "green",
  hairline: "hairline",
  indigo: "indigo",
  insetBottom: "inset-bottom",
  insetLeft: "inset-left",
  insetRight: "inset-right",
  insetTop: "inset-top",
  keyboardInset: "keyboard-inset",
  label: "label",
  labelQuaternary: "label-quaternary",
  labelSecondary: "label-secondary",
  labelTertiary: "label-tertiary",
  listLeadingW: "list-leading-w",
  mint: "mint",
  navBarSpace: "nav-bar-space",
  navbarH: "navbar-h",
  onColor: "on-color",
  orange: "orange",
  pink: "pink",
  purple: "purple",
  radiusCard: "radius-card",
  radiusFull: "radius-full",
  radiusLg: "radius-lg",
  radiusMd: "radius-md",
  radiusSheet: "radius-sheet",
  radiusSm: "radius-sm",
  radiusSquircle: "radius-squircle",
  radiusXs: "radius-xs",
  red: "red",
  scrim: "scrim",
  scrollbarSize: "scrollbar-size",
  scrollbarThumb: "scrollbar-thumb",
  scrollbarThumbHover: "scrollbar-thumb-hover",
  separator: "separator",
  separatorOpaque: "separator-opaque",
  shadow: "shadow",
  shadow2xl: "shadow-2xl",
  shadow2xs: "shadow-2xs",
  shadowA1: "shadow-a1",
  shadowA2: "shadow-a2",
  shadowA3: "shadow-a3",
  shadowA4: "shadow-a4",
  shadowA5: "shadow-a5",
  shadowA6: "shadow-a6",
  shadowA7: "shadow-a7",
  shadowColor: "shadow-color",
  shadowLg: "shadow-lg",
  shadowMd: "shadow-md",
  shadowSm: "shadow-sm",
  shadowXl: "shadow-xl",
  shadowXs: "shadow-xs",
  space0: "space-0",
  space1: "space-1",
  space10: "space-10",
  space12: "space-12",
  space16: "space-16",
  space2: "space-2",
  space20: "space-20",
  space24: "space-24",
  space3: "space-3",
  space4: "space-4",
  space5: "space-5",
  space6: "space-6",
  space8: "space-8",
  springBouncy: "spring-bouncy",
  springBouncyDuration: "spring-bouncy-duration",
  springPlayful: "spring-playful",
  springPlayfulDuration: "spring-playful-duration",
  springSmooth: "spring-smooth",
  springSmoothDuration: "spring-smooth-duration",
  springSnappy: "spring-snappy",
  springSnappyDuration: "spring-snappy-duration",
  tabBarSpace: "tab-bar-space",
  tabbarH: "tabbar-h",
  teal: "teal",
  textBody: "text-body",
  textBodyLeading: "text-body-leading",
  textBodyTracking: "text-body-tracking",
  textBodyWeight: "text-body-weight",
  textCallout: "text-callout",
  textCalloutLeading: "text-callout-leading",
  textCalloutTracking: "text-callout-tracking",
  textCalloutWeight: "text-callout-weight",
  textCaption1: "text-caption-1",
  textCaption1Leading: "text-caption-1-leading",
  textCaption1Tracking: "text-caption-1-tracking",
  textCaption1Weight: "text-caption-1-weight",
  textCaption2: "text-caption-2",
  textCaption2Leading: "text-caption-2-leading",
  textCaption2Tracking: "text-caption-2-tracking",
  textCaption2Weight: "text-caption-2-weight",
  textFootnote: "text-footnote",
  textFootnoteLeading: "text-footnote-leading",
  textFootnoteTracking: "text-footnote-tracking",
  textFootnoteWeight: "text-footnote-weight",
  textHeadline: "text-headline",
  textHeadlineLeading: "text-headline-leading",
  textHeadlineTracking: "text-headline-tracking",
  textHeadlineWeight: "text-headline-weight",
  textLargeTitle: "text-large-title",
  textLargeTitleLeading: "text-large-title-leading",
  textLargeTitleTracking: "text-large-title-tracking",
  textLargeTitleWeight: "text-large-title-weight",
  textSubheadline: "text-subheadline",
  textSubheadlineLeading: "text-subheadline-leading",
  textSubheadlineTracking: "text-subheadline-tracking",
  textSubheadlineWeight: "text-subheadline-weight",
  textTitle1: "text-title-1",
  textTitle1Leading: "text-title-1-leading",
  textTitle1Tracking: "text-title-1-tracking",
  textTitle1Weight: "text-title-1-weight",
  textTitle2: "text-title-2",
  textTitle2Leading: "text-title-2-leading",
  textTitle2Tracking: "text-title-2-tracking",
  textTitle2Weight: "text-title-2-weight",
  textTitle3: "text-title-3",
  textTitle3Leading: "text-title-3-leading",
  textTitle3Tracking: "text-title-3-tracking",
  textTitle3Weight: "text-title-3-weight",
  yellow: "yellow",
  zBase: "z-base",
  zNav: "z-nav",
  zOverlay: "z-overlay",
  zPopover: "z-popover",
  zSheet: "z-sheet",
  zSticky: "z-sticky",
  zToast: "z-toast",
  zTooltip: "z-tooltip"
}, Va = {
  alertGap: "0px",
  bgBase: "#ffffff",
  bgElevated: "#ffffff",
  bgGrouped: "#f2f2f7",
  bgNested: "#f2f2f7",
  blue: "#007aff",
  breakpointDesktop: "1024px",
  brown: "#a2845e",
  colorBg: "var(--may-bg-grouped)",
  colorDanger: "var(--may-red)",
  colorDestructive: "var(--may-red)",
  colorFill: "var(--may-fill-primary)",
  colorFillQuaternary: "var(--may-fill-quaternary)",
  colorFillSecondary: "var(--may-fill-secondary)",
  colorFillTertiary: "var(--may-fill-tertiary)",
  colorHighlight: "var(--may-fill-quaternary)",
  colorHighlightStrong: "var(--may-fill-tertiary)",
  colorInfo: "var(--may-blue)",
  colorOnDestructive: "var(--may-on-color)",
  colorOnPrimary: "var(--may-on-color)",
  colorPrimary: "var(--may-blue)",
  colorRing: "var(--may-color-tint)",
  colorScrim: "var(--may-scrim)",
  colorSeparator: "var(--may-separator)",
  colorSeparatorOpaque: "var(--may-separator-opaque)",
  colorSuccess: "var(--may-green)",
  colorSurface: "var(--may-bg-elevated)",
  colorSurfaceNested: "var(--may-bg-nested)",
  colorText: "var(--may-label)",
  colorTextQuaternary: "var(--may-label-quaternary)",
  colorTextSecondary: "var(--may-label-secondary)",
  colorTextTertiary: "var(--may-label-tertiary)",
  colorTint: "var(--may-blue)",
  colorWarning: "var(--may-orange)",
  controlH: "2.75rem",
  controlHLg: "calc(var(--may-control-h) + 0.5rem)",
  controlHMd: "var(--may-control-h)",
  controlHSm: "calc(var(--may-control-h) - 0.5rem)",
  controlHXs: "calc(var(--may-control-h) - 0.75rem)",
  cyan: "#32ade6",
  durationColor: "0ms",
  durationFast: "150ms",
  durationFollow: "90ms",
  durationInstant: "80ms",
  durationSettle: "340ms",
  durationSheetIn: "500ms",
  durationSheetOut: "300ms",
  easeBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeElastic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeSheet: "cubic-bezier(0.32, 0.72, 0, 1)",
  easeStandard: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  fillPrimary: "rgba(120, 120, 128, 0.2)",
  fillQuaternary: "rgba(116, 116, 128, 0.08)",
  fillSecondary: "rgba(120, 120, 128, 0.16)",
  fillTertiary: "rgba(118, 118, 128, 0.12)",
  fontMono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
  fontRounded: "ui-rounded, var(--may-font-sans)",
  fontSans: "-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  gradBlue: "linear-gradient(180deg, #64b5ff 0%, #007aff 52%, #005ecb 100%)",
  gradGray: "linear-gradient(180deg, #b8b8bd 0%, #8e8e93 52%, #6d6d72 100%)",
  gradGreen: "linear-gradient(180deg, #5fe07a 0%, #34c759 52%, #28a745 100%)",
  gradIndigo: "linear-gradient(180deg, #8b8ae8 0%, #5856d6 52%, #4442b5 100%)",
  gradOrange: "linear-gradient(180deg, #ffb340 0%, #ff9500 52%, #d97e00 100%)",
  gradPink: "linear-gradient(180deg, #ff6b8a 0%, #ff2d55 52%, #d92546 100%)",
  gradPurple: "linear-gradient(180deg, #cd8ae8 0%, #af52de 52%, #9040ba 100%)",
  gradRed: "linear-gradient(180deg, #ff6b63 0%, #ff3b30 52%, #d92b20 100%)",
  gradSpectrum: "linear-gradient(135deg, #ff2d55 0%, #ff9500 28%, #ffcc00 52%, #34c759 72%, #007aff 100%)",
  gradTeal: "linear-gradient(180deg, #6fd0e0 0%, #30b0c7 52%, #2894a8 100%)",
  gradYellow: "linear-gradient(180deg, #ffe066 0%, #ffcc00 52%, #d9ad00 100%)",
  gray: "#8e8e93",
  gray2: "#aeaeb2",
  gray3: "#c7c7cc",
  gray4: "#d1d1d6",
  gray5: "#e5e5ea",
  gray6: "#f2f2f7",
  green: "#34c759",
  hairline: "0.5px",
  indigo: "#5856d6",
  insetBottom: "env(safe-area-inset-bottom, 0px)",
  insetLeft: "env(safe-area-inset-left, 0px)",
  insetRight: "env(safe-area-inset-right, 0px)",
  insetTop: "env(safe-area-inset-top, 0px)",
  keyboardInset: "0px",
  label: "#000000",
  labelQuaternary: "rgba(60, 60, 67, 0.18)",
  labelSecondary: "rgba(60, 60, 67, 0.6)",
  labelTertiary: "rgba(60, 60, 67, 0.3)",
  listLeadingW: "29px",
  mint: "#00c7be",
  navBarSpace: "calc(var(--may-navbar-h) + var(--may-inset-top))",
  navbarH: "2.75rem",
  onColor: "#ffffff",
  orange: "#ff9500",
  pink: "#ff2d55",
  purple: "#af52de",
  radiusCard: "16px",
  radiusFull: "9999px",
  radiusLg: "12px",
  radiusMd: "10px",
  radiusSheet: "20px",
  radiusSm: "8px",
  radiusSquircle: "22%",
  radiusXs: "6px",
  red: "#ff3b30",
  scrim: "rgba(0, 0, 0, 0.4)",
  scrollbarSize: "8px",
  scrollbarThumb: "rgba(60, 60, 67, 0.28)",
  scrollbarThumbHover: "rgba(60, 60, 67, 0.42)",
  separator: "rgba(60, 60, 67, 0.29)",
  separatorOpaque: "#c6c6c8",
  shadow: "0 2px 6px -1px rgba(var(--may-shadow-color), var(--may-shadow-a3))",
  shadow2xl: "0 28px 64px -14px rgba(var(--may-shadow-color), var(--may-shadow-a7))",
  shadow2xs: "0 1px 1px 0 rgba(var(--may-shadow-color), var(--may-shadow-a1))",
  shadowA1: "0.03",
  shadowA2: "0.04",
  shadowA3: "0.06",
  shadowA4: "0.08",
  shadowA5: "0.12",
  shadowA6: "0.16",
  shadowA7: "0.2",
  shadowColor: "0, 0, 0",
  shadowLg: "0 12px 32px -6px rgba(var(--may-shadow-color), var(--may-shadow-a5))",
  shadowMd: "0 4px 12px -2px rgba(var(--may-shadow-color), var(--may-shadow-a4))",
  shadowSm: "0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2))",
  shadowXl: "0 20px 48px -10px rgba(var(--may-shadow-color), var(--may-shadow-a6))",
  shadowXs: "0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2))",
  space0: "0",
  space1: "0.25rem",
  space10: "2.5rem",
  space12: "3rem",
  space16: "4rem",
  space2: "0.5rem",
  space20: "5rem",
  space24: "6rem",
  space3: "0.75rem",
  space4: "1rem",
  space5: "1.25rem",
  space6: "1.5rem",
  space8: "2rem",
  springBouncy: "cubic-bezier(0.34, 1.4, 0.64, 1)",
  springBouncyDuration: "767ms",
  springPlayful: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  springPlayfulDuration: "987ms",
  springSmooth: "cubic-bezier(0.32, 0.72, 0, 1)",
  springSmoothDuration: "683ms",
  springSnappy: "cubic-bezier(0.2, 0, 0.2, 1)",
  springSnappyDuration: "475ms",
  tabBarSpace: "calc( var(--may-tabbar-h) + var(--may-inset-bottom) + var(--may-space-4) * 2 )",
  tabbarH: "3.25rem",
  teal: "#30b0c7",
  textBody: "1.0625rem",
  textBodyLeading: "1.375rem",
  textBodyTracking: "-0.002em",
  textBodyWeight: "400",
  textCallout: "1rem",
  textCalloutLeading: "1.3125rem",
  textCalloutTracking: "0em",
  textCalloutWeight: "400",
  textCaption1: "0.75rem",
  textCaption1Leading: "1rem",
  textCaption1Tracking: "0.005em",
  textCaption1Weight: "400",
  textCaption2: "0.6875rem",
  textCaption2Leading: "0.8125rem",
  textCaption2Tracking: "0.006em",
  textCaption2Weight: "400",
  textFootnote: "0.8125rem",
  textFootnoteLeading: "1.125rem",
  textFootnoteTracking: "0em",
  textFootnoteWeight: "400",
  textHeadline: "1.0625rem",
  textHeadlineLeading: "1.375rem",
  textHeadlineTracking: "-0.006em",
  textHeadlineWeight: "600",
  textLargeTitle: "2.125rem",
  textLargeTitleLeading: "2.5625rem",
  textLargeTitleTracking: "-0.02em",
  textLargeTitleWeight: "700",
  textSubheadline: "0.9375rem",
  textSubheadlineLeading: "1.25rem",
  textSubheadlineTracking: "0em",
  textSubheadlineWeight: "400",
  textTitle1: "1.75rem",
  textTitle1Leading: "2.125rem",
  textTitle1Tracking: "-0.016em",
  textTitle1Weight: "700",
  textTitle2: "1.375rem",
  textTitle2Leading: "1.75rem",
  textTitle2Tracking: "-0.012em",
  textTitle2Weight: "700",
  textTitle3: "1.25rem",
  textTitle3Leading: "1.5625rem",
  textTitle3Tracking: "-0.01em",
  textTitle3Weight: "600",
  yellow: "#ffcc00",
  zBase: "1",
  zNav: "200",
  zOverlay: "1000",
  zPopover: "1200",
  zSheet: "1100",
  zSticky: "100",
  zToast: "1300",
  zTooltip: "1400"
}, Ka = {
  alertGap: "0px",
  bgBase: "#000000",
  bgElevated: "#1c1c1e",
  bgGrouped: "#000000",
  bgNested: "#2c2c2e",
  blue: "#0a84ff",
  breakpointDesktop: "1024px",
  brown: "#ac8e68",
  colorBg: "var(--may-bg-grouped)",
  colorDanger: "var(--may-red)",
  colorDestructive: "var(--may-red)",
  colorFill: "var(--may-fill-primary)",
  colorFillQuaternary: "var(--may-fill-quaternary)",
  colorFillSecondary: "var(--may-fill-secondary)",
  colorFillTertiary: "var(--may-fill-tertiary)",
  colorHighlight: "var(--may-fill-quaternary)",
  colorHighlightStrong: "var(--may-fill-tertiary)",
  colorInfo: "var(--may-blue)",
  colorOnDestructive: "var(--may-on-color)",
  colorOnPrimary: "var(--may-on-color)",
  colorPrimary: "var(--may-blue)",
  colorRing: "var(--may-color-tint)",
  colorScrim: "var(--may-scrim)",
  colorSeparator: "var(--may-separator)",
  colorSeparatorOpaque: "var(--may-separator-opaque)",
  colorSuccess: "var(--may-green)",
  colorSurface: "var(--may-bg-elevated)",
  colorSurfaceNested: "var(--may-bg-nested)",
  colorText: "var(--may-label)",
  colorTextQuaternary: "var(--may-label-quaternary)",
  colorTextSecondary: "var(--may-label-secondary)",
  colorTextTertiary: "var(--may-label-tertiary)",
  colorTint: "var(--may-blue)",
  colorWarning: "var(--may-orange)",
  controlH: "2.75rem",
  controlHLg: "calc(var(--may-control-h) + 0.5rem)",
  controlHMd: "var(--may-control-h)",
  controlHSm: "calc(var(--may-control-h) - 0.5rem)",
  controlHXs: "calc(var(--may-control-h) - 0.75rem)",
  cyan: "#64d2ff",
  durationColor: "0ms",
  durationFast: "150ms",
  durationFollow: "90ms",
  durationInstant: "80ms",
  durationSettle: "340ms",
  durationSheetIn: "500ms",
  durationSheetOut: "300ms",
  easeBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeElastic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeSheet: "cubic-bezier(0.32, 0.72, 0, 1)",
  easeStandard: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  fillPrimary: "rgba(120, 120, 128, 0.36)",
  fillQuaternary: "rgba(116, 116, 128, 0.18)",
  fillSecondary: "rgba(120, 120, 128, 0.32)",
  fillTertiary: "rgba(118, 118, 128, 0.24)",
  fontMono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
  fontRounded: "ui-rounded, var(--may-font-sans)",
  fontSans: "-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  gradBlue: "linear-gradient(180deg, #64b5ff 0%, #007aff 52%, #005ecb 100%)",
  gradGray: "linear-gradient(180deg, #b8b8bd 0%, #8e8e93 52%, #6d6d72 100%)",
  gradGreen: "linear-gradient(180deg, #5fe07a 0%, #34c759 52%, #28a745 100%)",
  gradIndigo: "linear-gradient(180deg, #8b8ae8 0%, #5856d6 52%, #4442b5 100%)",
  gradOrange: "linear-gradient(180deg, #ffb340 0%, #ff9500 52%, #d97e00 100%)",
  gradPink: "linear-gradient(180deg, #ff6b8a 0%, #ff2d55 52%, #d92546 100%)",
  gradPurple: "linear-gradient(180deg, #cd8ae8 0%, #af52de 52%, #9040ba 100%)",
  gradRed: "linear-gradient(180deg, #ff6b63 0%, #ff3b30 52%, #d92b20 100%)",
  gradSpectrum: "linear-gradient(135deg, #ff2d55 0%, #ff9500 28%, #ffcc00 52%, #34c759 72%, #007aff 100%)",
  gradTeal: "linear-gradient(180deg, #6fd0e0 0%, #30b0c7 52%, #2894a8 100%)",
  gradYellow: "linear-gradient(180deg, #ffe066 0%, #ffcc00 52%, #d9ad00 100%)",
  gray: "#8e8e93",
  gray2: "#636366",
  gray3: "#48484a",
  gray4: "#3a3a3c",
  gray5: "#2c2c2e",
  gray6: "#1c1c1e",
  green: "#30d158",
  hairline: "0.5px",
  indigo: "#5e5ce6",
  insetBottom: "env(safe-area-inset-bottom, 0px)",
  insetLeft: "env(safe-area-inset-left, 0px)",
  insetRight: "env(safe-area-inset-right, 0px)",
  insetTop: "env(safe-area-inset-top, 0px)",
  keyboardInset: "0px",
  label: "#ffffff",
  labelQuaternary: "rgba(235, 235, 245, 0.16)",
  labelSecondary: "rgba(235, 235, 245, 0.6)",
  labelTertiary: "rgba(235, 235, 245, 0.3)",
  listLeadingW: "29px",
  mint: "#63e6e2",
  navBarSpace: "calc(var(--may-navbar-h) + var(--may-inset-top))",
  navbarH: "2.75rem",
  onColor: "#ffffff",
  orange: "#ff9f0a",
  pink: "#ff375f",
  purple: "#bf5af2",
  radiusCard: "16px",
  radiusFull: "9999px",
  radiusLg: "12px",
  radiusMd: "10px",
  radiusSheet: "20px",
  radiusSm: "8px",
  radiusSquircle: "22%",
  radiusXs: "6px",
  red: "#ff453a",
  scrim: "rgba(0, 0, 0, 0.55)",
  scrollbarSize: "8px",
  scrollbarThumb: "rgba(235, 235, 245, 0.28)",
  scrollbarThumbHover: "rgba(235, 235, 245, 0.42)",
  separator: "rgba(84, 84, 88, 0.6)",
  separatorOpaque: "#38383a",
  shadow: "0 2px 6px -1px rgba(var(--may-shadow-color), var(--may-shadow-a3))",
  shadow2xl: "0 28px 64px -14px rgba(var(--may-shadow-color), var(--may-shadow-a7))",
  shadow2xs: "0 1px 1px 0 rgba(var(--may-shadow-color), var(--may-shadow-a1))",
  shadowA1: "0.2",
  shadowA2: "0.24",
  shadowA3: "0.32",
  shadowA4: "0.4",
  shadowA5: "0.48",
  shadowA6: "0.56",
  shadowA7: "0.64",
  shadowColor: "0, 0, 0",
  shadowLg: "0 12px 32px -6px rgba(var(--may-shadow-color), var(--may-shadow-a5))",
  shadowMd: "0 4px 12px -2px rgba(var(--may-shadow-color), var(--may-shadow-a4))",
  shadowSm: "0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2))",
  shadowXl: "0 20px 48px -10px rgba(var(--may-shadow-color), var(--may-shadow-a6))",
  shadowXs: "0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2))",
  space0: "0",
  space1: "0.25rem",
  space10: "2.5rem",
  space12: "3rem",
  space16: "4rem",
  space2: "0.5rem",
  space20: "5rem",
  space24: "6rem",
  space3: "0.75rem",
  space4: "1rem",
  space5: "1.25rem",
  space6: "1.5rem",
  space8: "2rem",
  springBouncy: "cubic-bezier(0.34, 1.4, 0.64, 1)",
  springBouncyDuration: "767ms",
  springPlayful: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  springPlayfulDuration: "987ms",
  springSmooth: "cubic-bezier(0.32, 0.72, 0, 1)",
  springSmoothDuration: "683ms",
  springSnappy: "cubic-bezier(0.2, 0, 0.2, 1)",
  springSnappyDuration: "475ms",
  tabBarSpace: "calc( var(--may-tabbar-h) + var(--may-inset-bottom) + var(--may-space-4) * 2 )",
  tabbarH: "3.25rem",
  teal: "#40c8e0",
  textBody: "1.0625rem",
  textBodyLeading: "1.375rem",
  textBodyTracking: "-0.002em",
  textBodyWeight: "400",
  textCallout: "1rem",
  textCalloutLeading: "1.3125rem",
  textCalloutTracking: "0em",
  textCalloutWeight: "400",
  textCaption1: "0.75rem",
  textCaption1Leading: "1rem",
  textCaption1Tracking: "0.005em",
  textCaption1Weight: "400",
  textCaption2: "0.6875rem",
  textCaption2Leading: "0.8125rem",
  textCaption2Tracking: "0.006em",
  textCaption2Weight: "400",
  textFootnote: "0.8125rem",
  textFootnoteLeading: "1.125rem",
  textFootnoteTracking: "0em",
  textFootnoteWeight: "400",
  textHeadline: "1.0625rem",
  textHeadlineLeading: "1.375rem",
  textHeadlineTracking: "-0.006em",
  textHeadlineWeight: "600",
  textLargeTitle: "2.125rem",
  textLargeTitleLeading: "2.5625rem",
  textLargeTitleTracking: "-0.02em",
  textLargeTitleWeight: "700",
  textSubheadline: "0.9375rem",
  textSubheadlineLeading: "1.25rem",
  textSubheadlineTracking: "0em",
  textSubheadlineWeight: "400",
  textTitle1: "1.75rem",
  textTitle1Leading: "2.125rem",
  textTitle1Tracking: "-0.016em",
  textTitle1Weight: "700",
  textTitle2: "1.375rem",
  textTitle2Leading: "1.75rem",
  textTitle2Tracking: "-0.012em",
  textTitle2Weight: "700",
  textTitle3: "1.25rem",
  textTitle3Leading: "1.5625rem",
  textTitle3Tracking: "-0.01em",
  textTitle3Weight: "600",
  yellow: "#ffd60a",
  zBase: "1",
  zNav: "200",
  zOverlay: "1000",
  zPopover: "1200",
  zSheet: "1100",
  zSticky: "100",
  zToast: "1300",
  zTooltip: "1400"
}, oa = Ba(null), Ja = (a) => {
  if (typeof window > "u" || !window.matchMedia) return () => {
  };
  const r = window.matchMedia("(prefers-color-scheme: dark)");
  return r.addEventListener("change", a), () => r.removeEventListener("change", a);
}, Za = () => {
  var a;
  return typeof window < "u" && !!((a = window.matchMedia) != null && a.call(window, "(prefers-color-scheme: dark)").matches);
}, ae = () => !1;
function ee() {
  return ba(Ja, Za, ae);
}
function re(a) {
  const r = ee();
  return a === "system" ? r ? "dark" : "light" : a;
}
function Oe(a, r) {
  if (!r) return Object.isFrozen(a) ? a : Object.freeze({ ...a });
  const t = { ...a };
  for (const [i, l] of Object.entries(r)) {
    const f = {
      ...a[i] ?? {}
    };
    for (const [d, v] of Object.entries(l ?? {}))
      v !== void 0 && (f[d] = v);
    t[i] = Object.freeze(f);
  }
  return Object.freeze(t);
}
function te(a, r) {
  return Object.freeze({
    ...a === "dark" ? Ka : Va,
    ...r.tokens,
    ...r[a]
  });
}
const oe = Object.freeze({
  tokens: Object.freeze({}),
  light: Object.freeze({}),
  dark: Object.freeze({})
});
function Ce() {
  return ta(oa);
}
function wa() {
  const a = ta(oa), r = re((a == null ? void 0 : a.theme.mode) ?? "system");
  return Pa(() => a || {
    theme: { mode: "system", resolvedMode: r },
    tokens: te(r, oe),
    components: Object.freeze({}),
    platform: "auto",
    linkComponent: "a",
    host: !1
  }, [a, r]);
}
function Ee() {
  return wa().theme;
}
function qe() {
  return wa().tokens;
}
function ne(a) {
  const r = ta(oa);
  return (r == null ? void 0 : r.components[a]) ?? {};
}
function ie() {
  var a;
  return (a = ta(oa)) == null ? void 0 : a.styleNonce;
}
const se = ':root{color-scheme:light;--may-bg-grouped: #f2f2f7;--may-bg-elevated: #ffffff;--may-bg-nested: #f2f2f7;--may-bg-base: #ffffff;--may-label: #000000;--may-label-secondary: rgba(60, 60, 67, .6);--may-label-tertiary: rgba(60, 60, 67, .3);--may-label-quaternary: rgba(60, 60, 67, .18);--may-fill-primary: rgba(120, 120, 128, .2);--may-fill-secondary: rgba(120, 120, 128, .16);--may-fill-tertiary: rgba(118, 118, 128, .12);--may-fill-quaternary: rgba(116, 116, 128, .08);--may-separator: rgba(60, 60, 67, .29);--may-separator-opaque: #c6c6c8;--may-blue: #007aff;--may-green: #34c759;--may-indigo: #5856d6;--may-orange: #ff9500;--may-pink: #ff2d55;--may-purple: #af52de;--may-red: #ff3b30;--may-teal: #30b0c7;--may-yellow: #ffcc00;--may-mint: #00c7be;--may-cyan: #32ade6;--may-brown: #a2845e;--may-gray: #8e8e93;--may-gray-2: #aeaeb2;--may-gray-3: #c7c7cc;--may-gray-4: #d1d1d6;--may-gray-5: #e5e5ea;--may-gray-6: #f2f2f7;--may-scrim: rgba(0, 0, 0, .4);--may-scrollbar-thumb: rgba(60, 60, 67, .28);--may-scrollbar-thumb-hover: rgba(60, 60, 67, .42);--may-on-color: #ffffff;--may-shadow-color: 0, 0, 0;--may-shadow-a1: .03;--may-shadow-a2: .04;--may-shadow-a3: .06;--may-shadow-a4: .08;--may-shadow-a5: .12;--may-shadow-a6: .16;--may-shadow-a7: .2;--may-color-bg: var(--may-bg-grouped);--may-color-surface: var(--may-bg-elevated);--may-color-surface-nested: var(--may-bg-nested);--may-color-text: var(--may-label);--may-color-text-secondary: var(--may-label-secondary);--may-color-text-tertiary: var(--may-label-tertiary);--may-color-text-quaternary: var(--may-label-quaternary);--may-color-fill: var(--may-fill-primary);--may-color-fill-secondary: var(--may-fill-secondary);--may-color-fill-tertiary: var(--may-fill-tertiary);--may-color-fill-quaternary: var(--may-fill-quaternary);--may-color-separator: var(--may-separator);--may-color-separator-opaque: var(--may-separator-opaque);--may-color-tint: var(--may-blue);--may-color-primary: var(--may-blue);--may-color-on-primary: var(--may-on-color);--may-color-danger: var(--may-red);--may-color-destructive: var(--may-red);--may-color-on-destructive: var(--may-on-color);--may-color-success: var(--may-green);--may-color-warning: var(--may-orange);--may-color-info: var(--may-blue);--may-color-highlight: var(--may-fill-quaternary);--may-color-highlight-strong: var(--may-fill-tertiary);--may-color-scrim: var(--may-scrim);--may-color-ring: var(--may-color-tint);--may-shadow-2xs: 0 1px 1px 0 rgba(var(--may-shadow-color), var(--may-shadow-a1));--may-shadow-xs: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow-sm: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow: 0 2px 6px -1px rgba(var(--may-shadow-color), var(--may-shadow-a3));--may-shadow-md: 0 4px 12px -2px rgba(var(--may-shadow-color), var(--may-shadow-a4));--may-shadow-lg: 0 12px 32px -6px rgba(var(--may-shadow-color), var(--may-shadow-a5));--may-shadow-xl: 0 20px 48px -10px rgba(var(--may-shadow-color), var(--may-shadow-a6));--may-shadow-2xl: 0 28px 64px -14px rgba(var(--may-shadow-color), var(--may-shadow-a7))}[data-may-theme=dark]{color-scheme:dark;--may-bg-grouped: #000000;--may-bg-elevated: #1c1c1e;--may-bg-nested: #2c2c2e;--may-bg-base: #000000;--may-label: #ffffff;--may-label-secondary: rgba(235, 235, 245, .6);--may-label-tertiary: rgba(235, 235, 245, .3);--may-label-quaternary: rgba(235, 235, 245, .16);--may-fill-primary: rgba(120, 120, 128, .36);--may-fill-secondary: rgba(120, 120, 128, .32);--may-fill-tertiary: rgba(118, 118, 128, .24);--may-fill-quaternary: rgba(116, 116, 128, .18);--may-separator: rgba(84, 84, 88, .6);--may-separator-opaque: #38383a;--may-blue: #0a84ff;--may-green: #30d158;--may-indigo: #5e5ce6;--may-orange: #ff9f0a;--may-pink: #ff375f;--may-purple: #bf5af2;--may-red: #ff453a;--may-teal: #40c8e0;--may-yellow: #ffd60a;--may-mint: #63e6e2;--may-cyan: #64d2ff;--may-brown: #ac8e68;--may-gray: #8e8e93;--may-gray-2: #636366;--may-gray-3: #48484a;--may-gray-4: #3a3a3c;--may-gray-5: #2c2c2e;--may-gray-6: #1c1c1e;--may-scrim: rgba(0, 0, 0, .55);--may-scrollbar-thumb: rgba(235, 235, 245, .28);--may-scrollbar-thumb-hover: rgba(235, 235, 245, .42);--may-on-color: #ffffff;--may-shadow-color: 0, 0, 0;--may-shadow-a1: .2;--may-shadow-a2: .24;--may-shadow-a3: .32;--may-shadow-a4: .4;--may-shadow-a5: .48;--may-shadow-a6: .56;--may-shadow-a7: .64;--may-color-bg: var(--may-bg-grouped);--may-color-surface: var(--may-bg-elevated);--may-color-surface-nested: var(--may-bg-nested);--may-color-text: var(--may-label);--may-color-text-secondary: var(--may-label-secondary);--may-color-text-tertiary: var(--may-label-tertiary);--may-color-text-quaternary: var(--may-label-quaternary);--may-color-fill: var(--may-fill-primary);--may-color-fill-secondary: var(--may-fill-secondary);--may-color-fill-tertiary: var(--may-fill-tertiary);--may-color-fill-quaternary: var(--may-fill-quaternary);--may-color-separator: var(--may-separator);--may-color-separator-opaque: var(--may-separator-opaque);--may-color-tint: var(--may-blue);--may-color-primary: var(--may-blue);--may-color-on-primary: var(--may-on-color);--may-color-danger: var(--may-red);--may-color-destructive: var(--may-red);--may-color-on-destructive: var(--may-on-color);--may-color-success: var(--may-green);--may-color-warning: var(--may-orange);--may-color-info: var(--may-blue);--may-color-highlight: var(--may-fill-quaternary);--may-color-highlight-strong: var(--may-fill-tertiary);--may-color-scrim: var(--may-scrim);--may-color-ring: var(--may-color-tint);--may-shadow-2xs: 0 1px 1px 0 rgba(var(--may-shadow-color), var(--may-shadow-a1));--may-shadow-xs: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow-sm: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow: 0 2px 6px -1px rgba(var(--may-shadow-color), var(--may-shadow-a3));--may-shadow-md: 0 4px 12px -2px rgba(var(--may-shadow-color), var(--may-shadow-a4));--may-shadow-lg: 0 12px 32px -6px rgba(var(--may-shadow-color), var(--may-shadow-a5));--may-shadow-xl: 0 20px 48px -10px rgba(var(--may-shadow-color), var(--may-shadow-a6));--may-shadow-2xl: 0 28px 64px -14px rgba(var(--may-shadow-color), var(--may-shadow-a7))}[data-may-theme=light]{color-scheme:light;--may-bg-grouped: #f2f2f7;--may-bg-elevated: #ffffff;--may-bg-nested: #f2f2f7;--may-bg-base: #ffffff;--may-label: #000000;--may-label-secondary: rgba(60, 60, 67, .6);--may-label-tertiary: rgba(60, 60, 67, .3);--may-label-quaternary: rgba(60, 60, 67, .18);--may-fill-primary: rgba(120, 120, 128, .2);--may-fill-secondary: rgba(120, 120, 128, .16);--may-fill-tertiary: rgba(118, 118, 128, .12);--may-fill-quaternary: rgba(116, 116, 128, .08);--may-separator: rgba(60, 60, 67, .29);--may-separator-opaque: #c6c6c8;--may-blue: #007aff;--may-green: #34c759;--may-indigo: #5856d6;--may-orange: #ff9500;--may-pink: #ff2d55;--may-purple: #af52de;--may-red: #ff3b30;--may-teal: #30b0c7;--may-yellow: #ffcc00;--may-mint: #00c7be;--may-cyan: #32ade6;--may-brown: #a2845e;--may-gray: #8e8e93;--may-gray-2: #aeaeb2;--may-gray-3: #c7c7cc;--may-gray-4: #d1d1d6;--may-gray-5: #e5e5ea;--may-gray-6: #f2f2f7;--may-scrim: rgba(0, 0, 0, .4);--may-scrollbar-thumb: rgba(60, 60, 67, .28);--may-scrollbar-thumb-hover: rgba(60, 60, 67, .42);--may-on-color: #ffffff;--may-shadow-color: 0, 0, 0;--may-shadow-a1: .03;--may-shadow-a2: .04;--may-shadow-a3: .06;--may-shadow-a4: .08;--may-shadow-a5: .12;--may-shadow-a6: .16;--may-shadow-a7: .2;--may-color-bg: var(--may-bg-grouped);--may-color-surface: var(--may-bg-elevated);--may-color-surface-nested: var(--may-bg-nested);--may-color-text: var(--may-label);--may-color-text-secondary: var(--may-label-secondary);--may-color-text-tertiary: var(--may-label-tertiary);--may-color-text-quaternary: var(--may-label-quaternary);--may-color-fill: var(--may-fill-primary);--may-color-fill-secondary: var(--may-fill-secondary);--may-color-fill-tertiary: var(--may-fill-tertiary);--may-color-fill-quaternary: var(--may-fill-quaternary);--may-color-separator: var(--may-separator);--may-color-separator-opaque: var(--may-separator-opaque);--may-color-tint: var(--may-blue);--may-color-primary: var(--may-blue);--may-color-on-primary: var(--may-on-color);--may-color-danger: var(--may-red);--may-color-destructive: var(--may-red);--may-color-on-destructive: var(--may-on-color);--may-color-success: var(--may-green);--may-color-warning: var(--may-orange);--may-color-info: var(--may-blue);--may-color-highlight: var(--may-fill-quaternary);--may-color-highlight-strong: var(--may-fill-tertiary);--may-color-scrim: var(--may-scrim);--may-color-ring: var(--may-color-tint);--may-shadow-2xs: 0 1px 1px 0 rgba(var(--may-shadow-color), var(--may-shadow-a1));--may-shadow-xs: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow-sm: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow: 0 2px 6px -1px rgba(var(--may-shadow-color), var(--may-shadow-a3));--may-shadow-md: 0 4px 12px -2px rgba(var(--may-shadow-color), var(--may-shadow-a4));--may-shadow-lg: 0 12px 32px -6px rgba(var(--may-shadow-color), var(--may-shadow-a5));--may-shadow-xl: 0 20px 48px -10px rgba(var(--may-shadow-color), var(--may-shadow-a6));--may-shadow-2xl: 0 28px 64px -14px rgba(var(--may-shadow-color), var(--may-shadow-a7))}@media(prefers-color-scheme:dark){:root:not([data-may-theme=light]){color-scheme:dark;--may-bg-grouped: #000000;--may-bg-elevated: #1c1c1e;--may-bg-nested: #2c2c2e;--may-bg-base: #000000;--may-label: #ffffff;--may-label-secondary: rgba(235, 235, 245, .6);--may-label-tertiary: rgba(235, 235, 245, .3);--may-label-quaternary: rgba(235, 235, 245, .16);--may-fill-primary: rgba(120, 120, 128, .36);--may-fill-secondary: rgba(120, 120, 128, .32);--may-fill-tertiary: rgba(118, 118, 128, .24);--may-fill-quaternary: rgba(116, 116, 128, .18);--may-separator: rgba(84, 84, 88, .6);--may-separator-opaque: #38383a;--may-blue: #0a84ff;--may-green: #30d158;--may-indigo: #5e5ce6;--may-orange: #ff9f0a;--may-pink: #ff375f;--may-purple: #bf5af2;--may-red: #ff453a;--may-teal: #40c8e0;--may-yellow: #ffd60a;--may-mint: #63e6e2;--may-cyan: #64d2ff;--may-brown: #ac8e68;--may-gray: #8e8e93;--may-gray-2: #636366;--may-gray-3: #48484a;--may-gray-4: #3a3a3c;--may-gray-5: #2c2c2e;--may-gray-6: #1c1c1e;--may-scrim: rgba(0, 0, 0, .55);--may-scrollbar-thumb: rgba(235, 235, 245, .28);--may-scrollbar-thumb-hover: rgba(235, 235, 245, .42);--may-on-color: #ffffff;--may-shadow-color: 0, 0, 0;--may-shadow-a1: .2;--may-shadow-a2: .24;--may-shadow-a3: .32;--may-shadow-a4: .4;--may-shadow-a5: .48;--may-shadow-a6: .56;--may-shadow-a7: .64;--may-color-bg: var(--may-bg-grouped);--may-color-surface: var(--may-bg-elevated);--may-color-surface-nested: var(--may-bg-nested);--may-color-text: var(--may-label);--may-color-text-secondary: var(--may-label-secondary);--may-color-text-tertiary: var(--may-label-tertiary);--may-color-text-quaternary: var(--may-label-quaternary);--may-color-fill: var(--may-fill-primary);--may-color-fill-secondary: var(--may-fill-secondary);--may-color-fill-tertiary: var(--may-fill-tertiary);--may-color-fill-quaternary: var(--may-fill-quaternary);--may-color-separator: var(--may-separator);--may-color-separator-opaque: var(--may-separator-opaque);--may-color-tint: var(--may-blue);--may-color-primary: var(--may-blue);--may-color-on-primary: var(--may-on-color);--may-color-danger: var(--may-red);--may-color-destructive: var(--may-red);--may-color-on-destructive: var(--may-on-color);--may-color-success: var(--may-green);--may-color-warning: var(--may-orange);--may-color-info: var(--may-blue);--may-color-highlight: var(--may-fill-quaternary);--may-color-highlight-strong: var(--may-fill-tertiary);--may-color-scrim: var(--may-scrim);--may-color-ring: var(--may-color-tint);--may-shadow-2xs: 0 1px 1px 0 rgba(var(--may-shadow-color), var(--may-shadow-a1));--may-shadow-xs: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow-sm: 0 1px 2px 0 rgba(var(--may-shadow-color), var(--may-shadow-a2));--may-shadow: 0 2px 6px -1px rgba(var(--may-shadow-color), var(--may-shadow-a3));--may-shadow-md: 0 4px 12px -2px rgba(var(--may-shadow-color), var(--may-shadow-a4));--may-shadow-lg: 0 12px 32px -6px rgba(var(--may-shadow-color), var(--may-shadow-a5));--may-shadow-xl: 0 20px 48px -10px rgba(var(--may-shadow-color), var(--may-shadow-a6));--may-shadow-2xl: 0 28px 64px -14px rgba(var(--may-shadow-color), var(--may-shadow-a7))}}:root{--may-control-h: 2.75rem;--may-control-h-xs: calc(var(--may-control-h) - .75rem);--may-control-h-sm: calc(var(--may-control-h) - .5rem);--may-control-h-md: var(--may-control-h);--may-control-h-lg: calc(var(--may-control-h) + .5rem);--may-radius-xs: 6px;--may-radius-sm: 8px;--may-radius-md: 10px;--may-radius-lg: 12px;--may-radius-card: 16px;--may-radius-sheet: 20px;--may-radius-full: 9999px;--may-radius-squircle: 22%;--may-space-0: 0;--may-space-1: .25rem;--may-space-2: .5rem;--may-space-3: .75rem;--may-space-4: 1rem;--may-space-5: 1.25rem;--may-space-6: 1.5rem;--may-space-8: 2rem;--may-space-10: 2.5rem;--may-space-12: 3rem;--may-space-16: 4rem;--may-space-20: 5rem;--may-space-24: 6rem;--may-font-sans: -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;--may-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--may-font-rounded: ui-rounded, var(--may-font-sans);--may-text-caption-2: .6875rem;--may-text-caption-2-leading: .8125rem;--may-text-caption-2-tracking: .006em;--may-text-caption-2-weight: 400;--may-text-caption-1: .75rem;--may-text-caption-1-leading: 1rem;--may-text-caption-1-tracking: .005em;--may-text-caption-1-weight: 400;--may-text-footnote: .8125rem;--may-text-footnote-leading: 1.125rem;--may-text-footnote-tracking: 0em;--may-text-footnote-weight: 400;--may-text-subheadline: .9375rem;--may-text-subheadline-leading: 1.25rem;--may-text-subheadline-tracking: 0em;--may-text-subheadline-weight: 400;--may-text-callout: 1rem;--may-text-callout-leading: 1.3125rem;--may-text-callout-tracking: 0em;--may-text-callout-weight: 400;--may-text-body: 1.0625rem;--may-text-body-leading: 1.375rem;--may-text-body-tracking: -.002em;--may-text-body-weight: 400;--may-text-headline: 1.0625rem;--may-text-headline-leading: 1.375rem;--may-text-headline-tracking: -.006em;--may-text-headline-weight: 600;--may-text-title-3: 1.25rem;--may-text-title-3-leading: 1.5625rem;--may-text-title-3-tracking: -.01em;--may-text-title-3-weight: 600;--may-text-title-2: 1.375rem;--may-text-title-2-leading: 1.75rem;--may-text-title-2-tracking: -.012em;--may-text-title-2-weight: 700;--may-text-title-1: 1.75rem;--may-text-title-1-leading: 2.125rem;--may-text-title-1-tracking: -.016em;--may-text-title-1-weight: 700;--may-text-large-title: 2.125rem;--may-text-large-title-leading: 2.5625rem;--may-text-large-title-tracking: -.02em;--may-text-large-title-weight: 700;--may-z-base: 1;--may-z-sticky: 100;--may-z-nav: 200;--may-z-overlay: 1000;--may-z-sheet: 1100;--may-z-popover: 1200;--may-z-toast: 1300;--may-z-tooltip: 1400;--may-breakpoint-desktop: 1024px;--may-hairline: .5px;--may-scrollbar-size: 8px;--may-list-leading-w: 29px;--may-tabbar-h: 3.25rem;--may-navbar-h: 2.75rem;--may-inset-top: env(safe-area-inset-top, 0px);--may-inset-bottom: env(safe-area-inset-bottom, 0px);--may-inset-left: env(safe-area-inset-left, 0px);--may-inset-right: env(safe-area-inset-right, 0px);--may-keyboard-inset: 0px;--may-alert-gap: 0px;--may-nav-bar-space: calc(var(--may-navbar-h) + var(--may-inset-top));--may-tab-bar-space: calc( var(--may-tabbar-h) + var(--may-inset-bottom) + var(--may-space-4) * 2 );--may-grad-blue: linear-gradient(180deg, #64b5ff 0%, #007aff 52%, #005ecb 100%);--may-grad-green: linear-gradient(180deg, #5fe07a 0%, #34c759 52%, #28a745 100%);--may-grad-red: linear-gradient(180deg, #ff6b63 0%, #ff3b30 52%, #d92b20 100%);--may-grad-orange: linear-gradient(180deg, #ffb340 0%, #ff9500 52%, #d97e00 100%);--may-grad-yellow: linear-gradient(180deg, #ffe066 0%, #ffcc00 52%, #d9ad00 100%);--may-grad-purple: linear-gradient(180deg, #cd8ae8 0%, #af52de 52%, #9040ba 100%);--may-grad-pink: linear-gradient(180deg, #ff6b8a 0%, #ff2d55 52%, #d92546 100%);--may-grad-teal: linear-gradient(180deg, #6fd0e0 0%, #30b0c7 52%, #2894a8 100%);--may-grad-indigo: linear-gradient(180deg, #8b8ae8 0%, #5856d6 52%, #4442b5 100%);--may-grad-gray: linear-gradient(180deg, #b8b8bd 0%, #8e8e93 52%, #6d6d72 100%);--may-grad-spectrum: linear-gradient(135deg, #ff2d55 0%, #ff9500 28%, #ffcc00 52%, #34c759 72%, #007aff 100%)}', le = ":root{--may-spring-snappy: linear(0, .0648, .1018, .1897, .2881, .3388, .4396, .5361, .5817, .6662, .741, .7746, .834, .8835, .9238, .9557, .9688, .9902, 1.0057, 1.0203, 1.0287, 1.0193, 1.011, 1.0028, 1);--may-spring-snappy-duration: 475ms;--may-spring-smooth: linear(0, .0158, .0474, .1391, .1924, .2199, .33, .4347, .4833, .5065, .5919, .6652, .6817, .7407, .7898, .811, .8208, .8556, .8838, .9015, .921, .9368, .9522, .9659, .977, .9862, .9941, 1);--may-spring-smooth-duration: 683ms;--may-spring-bouncy: linear(0, .0505, .1174, .203, .3009, .5127, .7175, .8095, .892, .9637, 1.0242, 1.0732, 1.1112, 1.1387, 1.1566, 1.166, 1.1422, 1.1268, 1.1008, 1.0652, 1.0328, 1.0067, .9881, .9769, .9874, .9967, 1.0044, 1);--may-spring-bouncy-duration: 767ms;--may-spring-playful: linear(0, .0416, .1339, .2161, .3597, .5155, .6202, .7713, .908, .9884, 1.0899, 1.2045, 1.2413, 1.2536, 1.256, 1.1944, 1.1566, 1.1298, 1.0895, 1.0637, .9972, .9593, .945, .9343, .9585, .9757, .9945, 1.0064, 1.016, 1.0057, .9972, 1);--may-spring-playful-duration: 987ms;--may-ease-back: linear(0, .1497, .2858, .4088, .5194, .6182, .7058, .7827, .8496, .9071, .9558, .9962, 1.029, 1.0548, 1.0742, 1.0877, 1.0984, 1.0848, 1.0698, 1.0524, 1.0348, 1.0189, 1.0068, 1);--may-ease-elastic: linear(0, .392, .8906, 1.25, 1.3729, 1.296, 1.125, .9655, .8794, .875, .924, .9863, 1.0313, 1.0466, 1.037, .9957, .9849, .9983, 1.0058, .9981, 1);--may-ease-bounce: linear(0, .0336, .0756, .1344, .2101, .3025, .4117, .5378, .6806, .8403, .9264, .9917, .91, .8451, .7969, .7656, .7511, .7884, .8327, .8938, .9717, .9919, .9576, .94, .9696, .9881, .9952, .9845, 1);--may-ease-expo: linear(0, .1091, .2063, .2929, .37, .4388, .5546, .6464, .7194, .7773, .8232, .8597, .8886, .9116, .9298, .9443, .9606, .9722, .9825, .9912, .9983, 1);--may-ease-sheet: cubic-bezier(.32, .72, 0, 1);--may-ease-standard: cubic-bezier(.25, .1, .25, 1);--may-ease-out: cubic-bezier(0, 0, .2, 1);--may-duration-instant: 80ms;--may-duration-fast: .15s;--may-duration-color: 0ms;--may-duration-settle: .34s;--may-duration-sheet-in: .5s;--may-duration-sheet-out: .3s;--may-duration-follow: 90ms}@supports not (animation-timing-function: linear(0,1)){:root{--may-spring-snappy: cubic-bezier(.2, 0, .2, 1);--may-spring-smooth: cubic-bezier(.32, .72, 0, 1);--may-spring-bouncy: cubic-bezier(.34, 1.4, .64, 1);--may-spring-playful: cubic-bezier(.34, 1.56, .64, 1);--may-ease-back: cubic-bezier(.34, 1.56, .64, 1);--may-ease-elastic: cubic-bezier(.34, 1.56, .64, 1);--may-ease-bounce: cubic-bezier(.34, 1.56, .64, 1);--may-ease-expo: cubic-bezier(.16, 1, .3, 1)}}", ce = ".may-root{font-family:var(--may-font-sans);font-size:var(--may-text-body);line-height:var(--may-text-body-leading);letter-spacing:var(--may-text-body-tracking);color:var(--may-color-text);background-color:var(--may-color-bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;scroll-behavior:auto}[data-may-theme]{color:var(--may-color-text)}.may-root *,.may-root *:before,.may-root *:after{box-sizing:border-box}.may-root button,.may-root a,.may-root label,.may-root summary,.may-root [role=button],.may-root [role=tab],.may-root [role=option],.may-root [role=menuitem],.may-root [data-slot=list-row],.may-root [data-slot=segmented],.may-root [data-slot=nav-bar],.may-root [data-slot=tab-bar],.may-root [data-slot=toolbar]{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation}.may-root [data-slot=segmented]{touch-action:none}.may-root p,.may-root [data-selectable],.may-root [data-slot=content],.may-root [data-slot=body]{-webkit-user-select:text;user-select:text}.may-root img,.may-root svg{-webkit-user-drag:none;-webkit-user-select:none;user-select:none}.may-root input,.may-root textarea{caret-color:var(--may-color-tint);font-size:max(16px,1em)}.may-root ::selection{background:color-mix(in srgb,var(--may-color-tint) 24%,transparent);color:var(--may-color-text)}@media(hover:hover)and (pointer:fine){.may-hoverable:hover:not([disabled]):not([aria-disabled=true]){background-color:var(--may-color-highlight)}}.may-pressable{transform:scale(1);transition:transform var(--may-duration-settle) var(--may-spring-bouncy);will-change:transform}.may-pressable[data-pressed=true]{transform:scale(.96);transition:transform var(--may-duration-instant) var(--may-ease-out)}.may-pressable[data-press-squish=true][data-pressed=true]{transform:scale(.97,.94)}.may-root :focus:not(:focus-visible){outline:none}.may-root :focus-visible{outline:3px solid color-mix(in srgb,var(--may-color-ring) 45%,transparent);outline-offset:2px;border-radius:inherit}.may-root [data-slot=scroll-area],.may-root [data-scroll-area=true]{overscroll-behavior:contain;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:var(--may-scrollbar-thumb) transparent}.may-root [data-slot=scroll-area]::-webkit-scrollbar,.may-root [data-scroll-area=true]::-webkit-scrollbar{width:var(--may-scrollbar-size);height:var(--may-scrollbar-size)}.may-root [data-slot=scroll-area]::-webkit-scrollbar-track,.may-root [data-scroll-area=true]::-webkit-scrollbar-track{background:transparent}.may-root [data-slot=scroll-area]::-webkit-scrollbar-thumb,.may-root [data-scroll-area=true]::-webkit-scrollbar-thumb{background:var(--may-scrollbar-thumb);border-radius:var(--may-radius-full);border:2px solid transparent;background-clip:content-box}.may-root [data-slot=scroll-area]::-webkit-scrollbar-thumb:hover,.may-root [data-scroll-area=true]::-webkit-scrollbar-thumb:hover{background:var(--may-scrollbar-thumb-hover);background-clip:content-box}.may-hairline{background-color:var(--may-color-separator);height:1px;flex-shrink:0}@media(min-resolution:2dppx){.may-hairline{height:var(--may-hairline)}}.may-safe-top{padding-top:var(--may-inset-top)}.may-safe-bottom{padding-bottom:var(--may-inset-bottom)}.may-safe-x{padding-left:var(--may-inset-left);padding-right:var(--may-inset-right)}.may-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media(prefers-reduced-motion:reduce){.may-root *,.may-root *:before,.may-root *:after{animation-duration:1ms!important;animation-iteration-count:1!important;transition-duration:1ms!important;scroll-behavior:auto!important}.may-pressable,.may-pressable[data-pressed=true]{transform:none}}:where(.may-root) :where(button,[type=button],[type=submit],[type=reset]){-moz-appearance:none;appearance:none;-webkit-appearance:none;border:0;font:inherit;color:inherit;background:none}.may-root svg:not([width]):not([height]):not([class]){width:1em;height:1em}.may-root [data-scroll-hint=true]{background-image:linear-gradient(to bottom,var(--may-color-surface) 30%,transparent),linear-gradient(to top,var(--may-color-surface) 30%,transparent),linear-gradient(to bottom,rgba(var(--may-shadow-color),var(--may-shadow-a4)),transparent),linear-gradient(to top,rgba(var(--may-shadow-color),var(--may-shadow-a4)),transparent);background-position:top center,bottom center,top center,bottom center;background-size:100% var(--may-space-6),100% var(--may-space-6),100% var(--may-space-2),100% var(--may-space-2);background-repeat:no-repeat;background-attachment:local,local,scroll,scroll}", me = (a) => {
  let r = 5381;
  for (let t = 0; t < a.length; t++) r = r * 33 ^ a.charCodeAt(t);
  return (r >>> 0).toString(36);
};
function ye(a, r, t = "may-ui-components") {
  const i = `@layer may-ui{${r}}`;
  return Object.freeze({ href: `may-ui:${a}:${me(i)}`, css: i, precedence: t });
}
const ka = ye(
  "foundation",
  `${se}
${le}
${ce}`,
  "may-ui-foundation"
);
function de({ sheets: a = [] }) {
  const r = ie();
  return /* @__PURE__ */ Z(Ca, { children: [ka, ...a].map((t) => /* @__PURE__ */ Z(
    "style",
    {
      href: t.href,
      precedence: t.precedence,
      nonce: r,
      children: t.css
    },
    t.href
  )) });
}
const ue = (a, r) => {
  const t = { ...a };
  for (const [i, l] of Object.entries(r))
    l !== void 0 && (t[i] = l);
  return t;
};
function Ie(a, r, t) {
  function i(l) {
    const f = ne(a);
    return sa(
      Fa,
      {},
      sa(de, { sheets: t }),
      sa(r, ue(f, l))
    );
  }
  return i.displayName = `MayStyled(${a})`, Object.defineProperty(i, "__mayStyles", {
    value: Object.freeze([ka, ...t])
  }), i;
}
var u = {}, ua;
function ge() {
  if (ua) return u;
  ua = 1, Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.linear = a, u.easeInSine = r, u.easeOutSine = t, u.easeInOutSine = i, u.easeInQuad = l, u.easeOutQuad = f, u.easeInOutQuad = d, u.easeInCubic = v, u.easeOutCubic = k, u.easeInOutCubic = E, u.easeInQuart = q, u.easeOutQuart = O, u.easeInOutQuart = I, u.easeInQuint = p, u.easeOutQuint = C, u.easeInOutQuint = m, u.easeInExpo = A, u.easeOutExpo = g, u.easeInOutExpo = T, u.easeInCirc = b, u.easeOutCirc = z, u.easeInOutCirc = L, u.easeInBack = P, u.easeOutBack = F, u.easeInOutBack = G, u.easeInElastic = R, u.easeOutElastic = V, u.easeInOutElastic = N, u.easeOutBounce = D, u.easeInBounce = H, u.easeInOutBounce = M;
  function a(e) {
    return e;
  }
  function r(e) {
    return -1 * Math.cos(e * (Math.PI / 2)) + 1;
  }
  function t(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function i(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function l(e) {
    return e * e;
  }
  function f(e) {
    return e * (2 - e);
  }
  function d(e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  }
  function v(e) {
    return e * e * e;
  }
  function k(e) {
    var o = e - 1;
    return o * o * o + 1;
  }
  function E(e) {
    return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
  }
  function q(e) {
    return e * e * e * e;
  }
  function O(e) {
    var o = e - 1;
    return 1 - o * o * o * o;
  }
  function I(e) {
    var o = e - 1;
    return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * o * o * o * o;
  }
  function p(e) {
    return e * e * e * e * e;
  }
  function C(e) {
    var o = e - 1;
    return 1 + o * o * o * o * o;
  }
  function m(e) {
    var o = e - 1;
    return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * o * o * o * o * o;
  }
  function A(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function g(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function T(e) {
    if (e === 0 || e === 1)
      return e;
    var o = e * 2, y = o - 1;
    return o < 1 ? 0.5 * Math.pow(2, 10 * y) : 0.5 * (-Math.pow(2, -10 * y) + 2);
  }
  function b(e) {
    var o = e / 1;
    return -1 * (Math.sqrt(1 - o * e) - 1);
  }
  function z(e) {
    var o = e - 1;
    return Math.sqrt(1 - o * o);
  }
  function L(e) {
    var o = e * 2, y = o - 2;
    return o < 1 ? -0.5 * (Math.sqrt(1 - o * o) - 1) : 0.5 * (Math.sqrt(1 - y * y) + 1);
  }
  function P(e) {
    var o = arguments.length <= 1 || arguments[1] === void 0 ? 1.70158 : arguments[1], y = e / 1;
    return y * y * ((o + 1) * y - o);
  }
  function F(e) {
    var o = arguments.length <= 1 || arguments[1] === void 0 ? 1.70158 : arguments[1], y = e / 1 - 1;
    return y * y * ((o + 1) * y + o) + 1;
  }
  function G(e) {
    var o = arguments.length <= 1 || arguments[1] === void 0 ? 1.70158 : arguments[1], y = e * 2, s = y - 2, n = o * 1.525;
    return y < 1 ? 0.5 * y * y * ((n + 1) * y - n) : 0.5 * (s * s * ((n + 1) * s + n) + 2);
  }
  function R(e) {
    var o = arguments.length <= 1 || arguments[1] === void 0 ? 0.7 : arguments[1];
    if (e === 0 || e === 1)
      return e;
    var y = e / 1, s = y - 1, n = 1 - o, S = n / (2 * Math.PI) * Math.asin(1);
    return -(Math.pow(2, 10 * s) * Math.sin((s - S) * (2 * Math.PI) / n));
  }
  function V(e) {
    var o = arguments.length <= 1 || arguments[1] === void 0 ? 0.7 : arguments[1], y = 1 - o, s = e * 2;
    if (e === 0 || e === 1)
      return e;
    var n = y / (2 * Math.PI) * Math.asin(1);
    return Math.pow(2, -10 * s) * Math.sin((s - n) * (2 * Math.PI) / y) + 1;
  }
  function N(e) {
    var o = arguments.length <= 1 || arguments[1] === void 0 ? 0.65 : arguments[1], y = 1 - o;
    if (e === 0 || e === 1)
      return e;
    var s = e * 2, n = s - 1, S = y / (2 * Math.PI) * Math.asin(1);
    return s < 1 ? -0.5 * (Math.pow(2, 10 * n) * Math.sin((n - S) * (2 * Math.PI) / y)) : Math.pow(2, -10 * n) * Math.sin((n - S) * (2 * Math.PI) / y) * 0.5 + 1;
  }
  function D(e) {
    var o = e / 1;
    if (o < 1 / 2.75)
      return 7.5625 * o * o;
    if (o < 2 / 2.75) {
      var y = o - 0.5454545454545454;
      return 7.5625 * y * y + 0.75;
    } else if (o < 2.5 / 2.75) {
      var s = o - 0.8181818181818182;
      return 7.5625 * s * s + 0.9375;
    } else {
      var n = o - 0.9545454545454546;
      return 7.5625 * n * n + 0.984375;
    }
  }
  function H(e) {
    return 1 - D(1 - e);
  }
  function M(e) {
    return e < 0.5 ? H(e * 2) * 0.5 : D(e * 2 - 1) * 0.5 + 0.5;
  }
  return u;
}
var fe = ge();
const pe = 56;
function ra(a, r = pe) {
  const t = Math.sign(a), i = Math.abs(a);
  return t * (i * r) / (i + r);
}
function Be(a, r, t) {
  return a < r ? r + ra(a - r) : a > t ? t + ra(a - t) : a;
}
function ga(a, r, t = 100) {
  if (a.length < 2) return 0;
  const i = a[a.length - 1];
  let l = a[0];
  for (let d = a.length - 1; d >= 0 && !(i.t - a[d].t > t); d--)
    l = a[d];
  const f = i.t - l.t;
  return f <= 0 ? 0 : (i[r] - l[r]) / f;
}
function Pe(a, r = 6e-4) {
  return a * Math.abs(a) / (2 * r) / 1e3;
}
function Fe(a, r) {
  const { axis: t = "both", threshold: i = 4, onStart: l, onMove: f, onEnd: d } = r;
  let v = !1, k = t === "both" ? null : t, E = 0, q = 0, O = [];
  const I = (m) => {
    m.isPrimary && (v = !0, k = t === "both" ? null : t, E = m.clientX, q = m.clientY, O = [{ x: m.clientX, y: m.clientY, t: m.timeStamp }], a.setPointerCapture(m.pointerId), l == null || l());
  }, p = (m) => {
    if (!v) return;
    const A = m.clientX - E, g = m.clientY - q;
    if (O.push({ x: m.clientX, y: m.clientY, t: m.timeStamp }), O.length > 12 && O.shift(), k === null) {
      if (Math.abs(A) < i && Math.abs(g) < i) return;
      k = Math.abs(A) > Math.abs(g) ? "x" : "y";
    }
    f({ dx: k === "y" ? 0 : A, dy: k === "x" ? 0 : g, event: m });
  }, C = (m) => {
    v && (v = !1, a.hasPointerCapture(m.pointerId) && a.releasePointerCapture(m.pointerId), d({
      dx: m.clientX - E,
      dy: m.clientY - q,
      vx: ga(O, "x"),
      vy: ga(O, "y")
    }), O = []);
  };
  return a.addEventListener("pointerdown", I), a.addEventListener("pointermove", p), a.addEventListener("pointerup", C), a.addEventListener("pointercancel", C), () => {
    a.removeEventListener("pointerdown", I), a.removeEventListener("pointermove", p), a.removeEventListener("pointerup", C), a.removeEventListener("pointercancel", C);
  };
}
const Re = (a) => fe.easeOutCubic(Math.min(1, Math.max(0, a))), Sa = 220, be = "cubic-bezier(.32,.72,0,1)", he = 90, Ae = 220, Ta = 1.16, He = Ta * 1.1;
function ve(a, r, t = "inline", i) {
  const l = i ?? a.getBoundingClientRect(), f = r.getBoundingClientRect();
  return t === "block" ? { x: f.top - l.top, width: f.height } : { x: f.left - l.left, width: f.width };
}
function xe(a, { x: r, width: t }, {
  axis: i = "inline",
  following: l = !1,
  pressed: f = !1,
  reducedMotion: d = !1,
  overdrag: v = 0,
  instant: k = !1,
  easing: E = be,
  settleMs: q = Sa,
  pressScale: O = Ta
} = {}) {
  const I = f ? O : 1, p = f ? 1 + (O - 1) * 1.1 : 1, m = k ? "transform 0s" : l ? `transform ${d ? 1 : he}ms linear` : `transform ${d ? 1 : q}ms ${E}`, g = r - t * (I - 1) / 2 + v, T = i === "block" ? `translateY(${g}px) scaleY(${t * I}) scaleX(${p})` : `translateX(${g}px) scaleX(${t * I}) scaleY(${p})`;
  let b = fa.get(a);
  b || (a.style.translate = "", a.style.scale = "", b = { transition: "", transform: "" }, fa.set(a, b)), b.transition !== m && (b.transition = m, a.style.transition = m), b.transform !== T && (b.transform = T, a.style.transform = T);
}
const fa = /* @__PURE__ */ new WeakMap();
function pa(a, r, t = "inline") {
  for (let i = 0; i < a.length; i++) {
    const l = a[i].getBoundingClientRect(), f = t === "block" ? l.top : l.left, d = t === "block" ? l.bottom : l.right;
    if (r >= f && r <= d) return i;
  }
  return -1;
}
const we = 56, ke = typeof window > "u" ? j : ha, Se = (a, r) => (r === "block" ? a.offsetWidth : a.offsetHeight) / 2;
function We({
  axis: a = "inline",
  itemCount: r,
  selectedIndex: t,
  onSelect: i,
  isDisabled: l,
  roundEnds: f = !1,
  pressScale: d,
  settleMs: v = Sa,
  easing: k,
  overdragMax: E = we,
  enabled: q = !0
}) {
  const O = xa(), I = i !== void 0, p = w(null), C = w(null), m = w([]), A = w(!0), g = w(0), T = w(null), b = w(!1), z = w(null), L = w(0), P = w(NaN), F = w(""), G = w(-1), R = w(t), V = w(t);
  V.current = t;
  const N = w({ onSelect: i, isDisabled: l });
  j(() => {
    N.current = { onSelect: i, isDisabled: l };
  });
  const D = W((c) => {
    const x = N.current.isDisabled;
    return x ? x(c) : !1;
  }, []), H = W((c) => {
    c !== G.current && (G.current = c, m.current.forEach((x, h) => {
      x && (h === c ? x.setAttribute("data-hit", "true") : x.removeAttribute("data-hit"));
    }));
  }, []), M = W(
    (c, x = {}) => {
      const h = p.current, Q = C.current;
      if (!h || !Q) return;
      if (c < 0) {
        Q.style.opacity = "0";
        return;
      }
      const X = m.current[c];
      if (!X) return;
      Q.style.opacity && (Q.style.opacity = "");
      const J = h.getBoundingClientRect();
      let _ = ve(h, X, a, J);
      if (T.current !== null) {
        const Y = m.current[0], $ = m.current[r - 1];
        if (Y && $) {
          const za = a === "block" ? J.top : J.left, na = a === "block" ? Y.offsetTop : Y.offsetLeft, ia = a === "block" ? $.offsetTop + $.offsetHeight : $.offsetLeft + $.offsetWidth, ea = T.current - za, La = ia - _.width;
          g.current = ea < na ? -ra(na - ea, E) : ea > ia ? ra(ea - ia, E) : 0;
          const Oa = ea - _.width / 2;
          _ = { ..._, x: Math.min(Math.max(Oa, na), La) };
        }
      }
      const K = f && _.width > 0 ? Se(Q, a) : 0;
      g.current !== P.current && (P.current = g.current, h.style.setProperty("--may-thumb-overdrag", `${g.current}px`));
      const aa = x.following === !0;
      if (aa !== h.hasAttribute("data-following") && (aa ? h.setAttribute("data-following", "true") : h.removeAttribute("data-following")), !(_.width <= 0)) {
        if (K > 0) {
          const Y = `${K / _.width}px`, $ = a === "block" ? `${K}px / ${Y}` : `${Y} / ${K}px`;
          $ !== F.current && (F.current = $, Q.style.borderRadius = $);
        }
        xe(Q, _, {
          ...x,
          axis: a,
          overdrag: g.current,
          pressScale: d,
          easing: k,
          settleMs: v,
          // Never animate into place on first paint — the thumb would fly in
          // from the leading edge on every mount.
          reducedMotion: O || A.current
        });
      }
    },
    [a, r, E, f, d, k, v, O]
  );
  ke(() => {
    var c;
    q && T.current === null && (R.current = t, (c = p.current) == null || c.style.setProperty("--may-thumb-settle", `${v}ms`), M(t), A.current = !1);
  }, [q, t, M, r, v]), j(
    () => () => {
      var c;
      (c = z.current) == null || c.abort(), L.current && cancelAnimationFrame(L.current);
    },
    []
  ), j(() => {
    if (!q || typeof ResizeObserver > "u" || !p.current) return;
    const c = new ResizeObserver(() => {
      T.current === null && M(V.current);
    });
    return c.observe(p.current), () => c.disconnect();
  }, [q, M]);
  const e = (c) => a === "block" ? c.clientY : c.clientX, o = W(() => {
    const c = T.current;
    if (c === null) return;
    const x = m.current.filter(Boolean), h = pa(x, c, a);
    h >= 0 && !D(h) && (R.current = h);
  }, [a, D]), y = W(
    (c) => {
      b.current && (T.current = e(c), !L.current && (L.current = requestAnimationFrame(() => {
        L.current = 0, b.current && (o(), H(R.current), M(R.current, { pressed: !0, following: !0 }));
      })));
    },
    [a, o, H, M]
  ), s = W(
    (c) => {
      var h, Q, X;
      if (!b.current) return;
      b.current = !1, L.current && (cancelAnimationFrame(L.current), L.current = 0, o()), (h = z.current) == null || h.abort(), z.current = null;
      const x = R.current;
      g.current = 0, T.current = null, H(-1), (Q = p.current) != null && Q.hasPointerCapture(c.pointerId) && p.current.releasePointerCapture(c.pointerId), I && x !== t && x >= 0 && !D(x) && N.current.onSelect(x), M(x >= 0 ? x : t), (X = p.current) == null || X.removeAttribute("data-dragging");
    },
    [I, t, D, H, M, o]
  ), n = W(() => {
    var c;
    b.current && (b.current = !1, (c = z.current) == null || c.abort(), z.current = null, M(t));
  }, [M, t]), S = W(
    (c) => {
      var J, _, K, aa;
      if (!q || c.button !== 0) return;
      const x = m.current.filter(Boolean), h = pa(x, e(c), a);
      if (!I) {
        if (h !== t || h < 0) return;
        b.current = !0, (J = z.current) == null || J.abort();
        const Y = new AbortController();
        z.current = Y;
        const $ = { signal: Y.signal };
        window.addEventListener("pointerup", n, $), window.addEventListener("pointercancel", n, $), window.addEventListener("lostpointercapture", n, $), M(t, { pressed: !0 });
        return;
      }
      b.current = !0, (_ = p.current) == null || _.setPointerCapture(c.pointerId), (K = z.current) == null || K.abort();
      const Q = new AbortController();
      z.current = Q;
      const X = { signal: Q.signal };
      window.addEventListener("pointermove", y, X), window.addEventListener("pointerup", s, X), window.addEventListener("pointercancel", s, X), window.addEventListener("lostpointercapture", s, X), T.current = e(c), R.current = h >= 0 && !D(h) ? h : t, H(R.current), M(R.current, { pressed: !0 }), (aa = p.current) == null || aa.setAttribute("data-dragging", "true");
    },
    [
      q,
      I,
      a,
      t,
      D,
      n,
      s,
      y,
      H,
      M
    ]
  ), B = w([]), Ma = W((c) => {
    const x = B.current;
    return x[c] ?? (x[c] = (h) => {
      m.current[c] = h;
    });
  }, []);
  return { trackRef: p, thumbRef: C, registerItem: Ma, onPointerDown: S };
}
export {
  xa as A,
  Ra as B,
  Ua as C,
  fe as D,
  ze as E,
  he as F,
  Ya as G,
  oa as M,
  Ta as P,
  pe as R,
  be as S,
  Ae as T,
  He as a,
  Sa as b,
  xe as c,
  Be as d,
  Fe as e,
  pa as f,
  ve as g,
  ya as h,
  Ce as i,
  re as j,
  Oe as k,
  te as l,
  ye as m,
  de as n,
  Le as o,
  Pe as p,
  ka as q,
  ra as r,
  Re as s,
  wa as t,
  We as u,
  ga as v,
  Ie as w,
  Ee as x,
  qe as y,
  Ha as z
};
//# sourceMappingURL=useSlidingThumb-CUFxfOOx.js.map
