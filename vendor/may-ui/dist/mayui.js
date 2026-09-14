import { F as B, P as F, a as N, R as D, S as R, b as z, T as I, c as H, d as V, e as G, g as K, p as W, r as X, s as q, f as U, u as Y, v as Z, h as w, w as J, m as f, i as Q, j as aa, k as sa, l as ta, M as ea, n as oa, o as j, q as ia } from "./useSlidingThumb-5xXE6H74.js";
import { t as Wa, x as Xa, y as qa, z as Ua, A as Ya } from "./useSlidingThumb-5xXE6H74.js";
import { d as na, a as ra, e as la, p as ca, r as da, b as ma, s as ya, c as pa, u as ua, P as fa, L as va } from "./pull-physics-5-0PmDuF.js";
import { B as Ja, F as Qa, S as as, f as ss, g as ts, h as es, i as os } from "./pull-physics-5-0PmDuF.js";
import { p as ga, s as ba, u as ka, r as Sa, a as Ta, T as Ca, d as Ma, b as Pa, t as xa } from "./index-xJS3j9Go.js";
import { A as ns, c as rs, e as ls, f as cs, g as ds, h as ms, i as ys, B as ps, j as us, k as fs, l as vs, C as gs, m as bs, n as ks, o as Ss, q as Ts, v as Cs, w as Ms, x as Ps, D as xs, y as Os, E as _s, F as hs, G as ws, H as js, I as Es, z as $s, L as As, J as Ls, K as Bs, M as Fs, N as Ns, O as Ds, P as Rs, Q as zs, R as Is, S as Hs, U as Vs, V as Gs, W as Ks, X as Ws, Y as Xs, Z as qs, _ as Us, $ as Ys, a0 as Zs, a1 as Js, a2 as Qs, a3 as at, a4 as st, a5 as tt, a6 as et, a7 as ot, a8 as it, a9 as nt, aa as rt, ab as lt, ac as ct, ad as dt, ae as mt, af as yt, ag as pt, ah as ut, ai as ft, aj as vt } from "./index-xJS3j9Go.js";
import { C as bt, I as kt, K as St, P as Tt, S as Ct, u as Mt, a as Pt } from "./index-VbbkXlrT.js";
import { jsx as m, jsxs as O } from "react/jsx-runtime";
import { useEffect as M, useId as Oa, useMemo as T } from "react";
const Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FOLLOW_MS: B,
  PRESS_SCALE_X: F,
  PRESS_SCALE_Y: N,
  RUBBER_MAX: D,
  SETTLE_EASE: R,
  SETTLE_MS: z,
  TINT_MS: I,
  applyThumb: H,
  clampWithRubber: V,
  dampPull: na,
  draggable: G,
  duration: ra,
  ease: la,
  geometryFor: K,
  play: ga,
  projectFlick: W,
  pullProgress: ca,
  resolveCurve: da,
  resolvePullStatus: ma,
  rubber: X,
  scrub: q,
  segmentAt: U,
  shouldTriggerRefresh: ya,
  snapshot: ba,
  spring: pa,
  useSlidingThumb: Y,
  velocityFrom: Z
}, Symbol.toStringTag, { value: "Module" })), _a = ".may-host{display:contents}.may-toast-viewport{position:fixed;z-index:var(--may-z-toast);display:flex;flex-direction:column;--may-toast-gap: var(--may-space-2);gap:var(--may-toast-gap);inset-inline:0;padding-inline-start:calc(var(--may-space-4) + var(--may-inset-left));padding-inline-end:calc(var(--may-space-4) + var(--may-inset-right));pointer-events:none}.may-toast-viewport[data-side=top]{inset-block-start:0;padding-block-start:calc(var(--may-space-4) + var(--may-inset-top));flex-direction:column-reverse}.may-toast-viewport[data-side=bottom]{inset-block-end:0;padding-block-end:calc(var(--may-space-4) + var(--may-inset-bottom))}.may-toast-viewport[data-align=start]{align-items:flex-start}.may-toast-viewport[data-align=center]{align-items:center}.may-toast-viewport[data-align=end]{align-items:flex-end}.may-toast-slot{display:grid;grid-template-rows:1fr;animation:may-toast-slot-in var(--may-duration-settle) var(--may-ease-out) both}.may-toast-slot__inner{min-height:0}.may-toast-slot[data-closing=true]{animation:may-toast-slot-out var(--may-duration-sheet-out) var(--may-ease-out) forwards}@keyframes may-toast-slot-in{0%{grid-template-rows:0fr;margin-block-end:calc(-1 * var(--may-toast-gap, 0px))}to{grid-template-rows:1fr;margin-block-end:0}}@keyframes may-toast-slot-out{0%{grid-template-rows:1fr;margin-block-end:0}to{grid-template-rows:0fr;margin-block-end:calc(-1 * var(--may-toast-gap, 0px))}}";
function ha({
  position: o,
  max: a = 3,
  duration: n,
  closeLabel: i,
  label: t = "Notifications",
  className: r
}) {
  const { toasts: c } = ka(), v = ua();
  M(() => Sa(), []), M(() => Ta(a), [a]);
  const g = o ?? (v ? "top-end" : "top-center"), s = /* @__PURE__ */ new Map();
  for (const l of c) {
    if (l.pending) continue;
    const d = l.position ?? g, y = s.get(d);
    y ? y.push(l) : s.set(d, [l]);
  }
  return /* @__PURE__ */ m("div", { "data-slot": "may-host", className: w("may-host", r), children: [...s].map(([l, d]) => {
    const [y, p] = l.split("-");
    return /* @__PURE__ */ m(
      "div",
      {
        role: "region",
        "aria-label": t,
        "data-slot": "toast-viewport",
        "data-side": y,
        "data-align": p,
        className: "may-toast-viewport",
        children: d.map((e) => (
          /*
           * The slot animates the SPACE the toast occupies; the toast
           * animates itself. Without it a dismissal only fades the capsule
           * while its height stays put until React unmounts the record, and
           * the rest of the stack jumps a whole toast plus one gap in a
           * single frame. Same two-layer arrangement as Alert.
           */
          /* @__PURE__ */ m(
            "div",
            {
              className: "may-toast-slot",
              "data-closing": e.dismissed ? "true" : void 0,
              children: /* @__PURE__ */ m("div", { className: "may-toast-slot__inner", children: /* @__PURE__ */ m(
                Ca,
                {
                  title: e.title,
                  description: e.description,
                  tone: e.tone,
                  icon: e.icon,
                  action: e.action,
                  dismissible: e.dismissible,
                  closeButton: e.closeButton,
                  closeLabel: e.closeLabel ?? i,
                  duration: e.duration ?? n,
                  position: l,
                  closed: e.dismissed,
                  onDismiss: () => Ma(e.id)
                }
              ) })
            },
            e.id
          )
        ))
      },
      l
    );
  }) });
}
const wa = f("MayHost", _a), ja = f("Toast", xa), Ea = f("Button", Pa), $a = [Ea, ja, wa], E = J("MayHost", ha, $a), Aa = ".may-root:not(.may-root--inline){min-height:100%}", $ = f("MayProvider", Aa);
var h;
const La = typeof process > "u" || ((h = process.env) == null ? void 0 : h.NODE_ENV) !== "production", C = (o, a) => {
  if (!a) return o;
  const n = { ...o };
  for (const [i, t] of Object.entries(a))
    t !== void 0 && (n[i] = t);
  return n;
}, Ba = (o) => {
  const a = {};
  for (const [n, i] of Object.entries(o)) {
    const t = n === "tokens" ? "" : `${n}-`;
    for (const [r, c] of Object.entries(i))
      c !== void 0 && (a[`--may-user-${t}${j[r]}`] = c);
  }
  return a;
}, _ = (o, a) => [.../* @__PURE__ */ new Set([...Object.keys(o ?? {}), ...Object.keys(a ?? {})])].map((i) => {
  const t = j[i], r = a == null ? void 0 : a[i], c = o == null ? void 0 : o[i];
  return r !== void 0 && c !== void 0 ? `--may-${t}:var(--may-user-MODE-${t},var(--may-user-${t}));` : r !== void 0 ? `--may-${t}:var(--may-user-MODE-${t});` : `--may-${t}:var(--may-user-${t});`;
}).join(""), Fa = (o, a) => {
  const n = _(a.tokens, a.light).replace(/MODE/g, "light"), i = _(a.tokens, a.dark).replace(/MODE/g, "dark");
  if (!n && !i) return "";
  const t = `[data-may-scope="${o}"]`;
  return `@layer may-ui{${t}{${n}}${t}[data-may-theme='dark']{${i}}@media(prefers-color-scheme:dark){${t}:not([data-may-theme='light']){${i}}}}`;
};
function Na({
  children: o,
  theme: a,
  components: n,
  platform: i,
  linkComponent: t,
  host: r,
  styleNonce: c,
  className: v,
  inline: g = !1
}) {
  const s = Q(), l = ((s == null ? void 0 : s.depth) ?? -1) + 1, d = (a == null ? void 0 : a.mode) ?? (s == null ? void 0 : s.theme.mode) ?? "system", y = aa(d), p = `may${Oa().replace(/[^a-zA-Z0-9_-]/g, "")}`, e = T(() => Object.freeze({
    tokens: Object.freeze(C((s == null ? void 0 : s.tokenOverrides.tokens) ?? {}, a == null ? void 0 : a.tokens)),
    light: Object.freeze(C((s == null ? void 0 : s.tokenOverrides.light) ?? {}, a == null ? void 0 : a.light)),
    dark: Object.freeze(C((s == null ? void 0 : s.tokenOverrides.dark) ?? {}, a == null ? void 0 : a.dark))
  }), [s, a == null ? void 0 : a.tokens, a == null ? void 0 : a.light, a == null ? void 0 : a.dark]), P = T(
    () => sa((s == null ? void 0 : s.components) ?? {}, n),
    [s == null ? void 0 : s.components, n]
  ), u = (s == null ? void 0 : s.host) ?? (r === !1 ? !1 : r ?? {}), b = s ? s.styleNonce : c, k = i ?? (s == null ? void 0 : s.platform) ?? "auto", S = t ?? (s == null ? void 0 : s.linkComponent) ?? "a", A = T(() => Object.freeze({
    depth: l,
    theme: { mode: d, resolvedMode: y },
    tokenOverrides: e,
    tokens: ta(y, e),
    components: P,
    platform: k,
    linkComponent: S,
    host: u,
    styleNonce: b
  }), [
    l,
    d,
    y,
    e,
    P,
    k,
    S,
    u,
    b
  ]);
  M(() => {
    !La || !s || (r !== void 0 && console.warn("MayProvider: host is only read by the outermost provider"), c !== void 0 && console.warn("MayProvider: styleNonce is only read by the outermost provider"));
  }, [s, r, c]);
  const x = Fa(p, e), L = Ba(e);
  return /* @__PURE__ */ m(ea.Provider, { value: A, children: /* @__PURE__ */ m(fa, { platform: k, children: /* @__PURE__ */ O(va, { linkComponent: S, children: [
    /* @__PURE__ */ m(oa, { sheets: [$] }),
    x && /* @__PURE__ */ m("style", { nonce: b, children: x }),
    /* @__PURE__ */ O(
      "div",
      {
        "data-slot": "root",
        "data-may-scope": p,
        className: w("may-root", g && "may-root--inline", v),
        "data-may-theme": d === "system" ? void 0 : d,
        style: L,
        children: [
          !s && u !== !1 && /* @__PURE__ */ m(E, { ...u }),
          o
        ]
      }
    )
  ] }) }) });
}
Object.defineProperty(Na, "__mayStyles", {
  value: Object.freeze([
    ia,
    $,
    ...E.__mayStyles ?? []
  ])
});
export {
  ns as Accordion,
  rs as AccordionItem,
  ls as ActionSheet,
  cs as Alert,
  ds as AlertDialog,
  ms as Avatar,
  ys as AvatarGroup,
  Ja as Badge,
  ps as Box,
  us as Breadcrumb,
  fs as Button,
  vs as ButtonGroup,
  gs as Card,
  bs as CardBody,
  ks as CardDescription,
  Ss as CardFooter,
  Ts as CardHeader,
  Cs as CardTitle,
  bt as Checkbox,
  Ms as CircularProgress,
  Ps as Collapsible,
  xs as DescriptionItem,
  Os as Descriptions,
  _s as EmptyState,
  Qa as Fab,
  hs as Field,
  ws as Grid,
  js as Heading,
  Es as IconButton,
  $s as IconTile,
  kt as Input,
  St as Kbd,
  As as Label,
  Ls as List,
  Bs as ListRow,
  Na as MayProvider,
  Fs as Menu,
  Ns as Modal,
  Ds as NavigationBar,
  Rs as NoticeBar,
  Tt as Pagination,
  fa as PlatformProvider,
  zs as Popover,
  Is as Progress,
  Hs as Radio,
  Vs as RadioGroup,
  Gs as SafeArea,
  Ks as ScrollArea,
  Ws as SearchField,
  Xs as SegmentedControl,
  Ct as Select,
  qs as Separator,
  as as Sheet,
  Us as Skeleton,
  Ys as Slider,
  ss as Spinner,
  Zs as Stack,
  Js as Statistic,
  Qs as Stepper,
  at as Steps,
  st as Switch,
  tt as Tab,
  et as TabList,
  ot as TabPanel,
  it as Table,
  nt as Tabs,
  rt as Tag,
  lt as Text,
  ct as Textarea,
  Ca as Toast,
  dt as Toolbar,
  mt as ToolbarSpacer,
  yt as Tooltip,
  pt as VisuallyHidden,
  w as cx,
  Ma as dismiss,
  ut as dismissAll,
  ft as initialsFrom,
  Va as motion,
  Ta as setToastLimit,
  vt as toast,
  Mt as useFieldContext,
  Pt as useFieldControl,
  ua as useIsDesktop,
  ts as useKeyboardInset,
  es as useLinkComponent,
  Wa as useMayConfig,
  Xa as useMayTheme,
  qa as useMayTokens,
  os as usePlatform,
  Ua as usePressFeedback,
  Ya as useReducedMotion,
  ka as useToast
};
//# sourceMappingURL=mayui.js.map
