import { h as vt, w as Ee, m as _e } from "./useSlidingThumb-CUFxfOOx.js";
import { jsxs as a, jsx as e, Fragment as ze } from "react/jsx-runtime";
import { P as ft, B as W, F as ki, f as Si, S as Sa } from "./pull-physics-Be2EdsU4.js";
import { useState as h, useRef as ve, useMemo as fa, useEffect as Ci } from "react";
import { IoCheckmark as xi, IoShareOutline as Ai, IoHeartOutline as Ca, IoTrashOutline as Y, IoCopyOutline as Mi, IoFolderOutline as se, IoDocumentOutline as ea, IoArrowUndoOutline as Le, IoArrowRedoOutline as Qe, IoArchiveOutline as He, IoAdd as xa, IoCreateOutline as Ve, IoFileTrayOutline as fe, IoCalendar as Aa, IoEllipsisHorizontal as be, IoStarOutline as aa, IoHeart as Ma, IoGrid as bt, IoGridOutline as wt, IoAlbums as kt, IoAlbumsOutline as St, IoSearchOutline as Ii, IoLinkOutline as Ct, IoPerson as Ti, IoBriefcase as xt, IoMoon as ia, IoCar as At, IoFlag as Mt, IoTime as Pi, IoMail as $e, IoRadioButtonOn as It, IoAirplane as Tt, IoWifi as Pt, IoBluetooth as Dt, IoCellular as Rt, IoRadio as Ot, IoSettings as Nt, IoSunny as Di, IoVolumeHigh as Ri, IoHourglass as Bt, IoMailOutline as ba, IoFilterOutline as Ft, IoFlagOutline as Me, IoTimeOutline as Oi, IoAttachOutline as Xe, IoChevronDown as Ia, IoShuffle as zt, IoPlaySkipBack as Lt, IoPause as Wt, IoPlay as Gt, IoPlaySkipForward as Et, IoRepeat as _t, IoVolumeLow as Ht, IoChatboxEllipses as Vt, IoList as $t, IoPencil as Ut, IoCard as Ni, IoStar as jt, IoPeople as Bi, IoNavigate as Kt, IoAtCircleOutline as Yt, IoCheckmarkCircleOutline as Fi, IoChatbubble as qt, IoShield as Jt, IoKey as Qt, IoHome as Xt, IoImage as zi, IoLockClosed as Zt, IoLogoApple as Li, IoLogoPaypal as en, IoAt as an, IoCloud as tn, IoDocumentText as nn, IoPersonOutline as Wi, IoFootsteps as rn, IoLocation as ln, IoWalk as on, IoCafe as dn, IoCash as sn, IoBus as cn, IoBag as Gi, IoSparkles as Ei, IoScanOutline as hn, IoLeaf as un, IoMusicalNotes as pn, IoMic as mn, IoSendOutline as Ta, IoCalendarOutline as gn, IoCloudOutline as _i, IoFunnelOutline as yn, IoFlash as Hi, IoPeopleOutline as vn, IoArchive as fn, IoVideocam as bn, IoEasel as wn, IoStatsChart as kn, IoCodeSlash as Sn, IoBrush as Cn, IoDocument as xn, IoFolder as An, IoPricetagOutline as Mn, IoGlobeOutline as In, IoServerOutline as Tn, IoPencilOutline as Vi, IoInformationCircleOutline as $i, IoAppsOutline as Pn, IoOpenOutline as Dn, IoSettingsOutline as Ue, IoMoonOutline as Ui, IoDocumentTextOutline as ji, IoOptionsOutline as Rn, IoShieldOutline as On, IoNotificationsOutline as Nn, IoContrastOutline as Bn, IoMegaphone as Fn, IoPersonAddOutline as zn, IoPersonRemoveOutline as Ln, IoEyeOffOutline as Wn, IoEyeOutline as Ki, IoLogoGoogle as Gn, IoPricetag as En, IoGlobe as _n, IoSpeedometer as Hn, IoAlert as Vn, IoCloudOfflineOutline as $n, IoShare as Un, IoImagesOutline as jn, IoCamera as Kn, IoNotifications as Yn, IoLink as qn, IoCodeOutline as Jn, IoPaperPlaneOutline as Qn, IoBrushOutline as Xn, IoBrowsersOutline as Zn } from "react-icons/io5";
import { Y as we, a0 as c, ab as t, G as he, ad as te, I as S, aj as M, e as Pa, X as Ie, Z as ce, J as I, K as g, h as B, ae as We, ag as Da, B as j, V as er, W as ar, H as xe, L as ir, k as m, l as tr, F as k, ac as Yi, U as Ze, S as $, a4 as Ae, $ as Ge, a2 as Ra, C as H, q as Q, v as X, n as ne, m as me, o as Oa, A as nr, c as Ua, x as Je, y as Na, D as U, E as K, a8 as ta, aa as ge, i as Ba, z as C, a1 as Ce, f as qi, P as Fa, R as je, w as Ji, _ as Fe, T as rr, O as Ke, a9 as Qi, a6 as Xi, a5 as le, a7 as oe, j as za, a3 as Zi, N as La, g as na, Q as Wa, af as ra, M as ye } from "./index-COd88-P5.js";
import { S as J, K as wa, I as N, C as _, P as lr } from "./index-DzxRow2V.js";
import { N as Te, T as or, P as et, S as Ga, C as Ea, b as at, c as it, a as tt, F as dr } from "./index-CuGgsgIk.js";
import { e as _a, S as Ha, c as pe, b as F, d as Va, D as $a, N as nt, a as rt, C as lt } from "./index-Df19cS72.js";
const sr = ".may-device{display:inline-flex;flex-direction:column;align-items:center;gap:var(--may-space-3);margin:0}.may-device__body{position:relative;border-radius:44px;padding:12px;background:var(--may-gray-3);box-shadow:var(--may-shadow-xl);flex-shrink:0}[data-may-theme=dark] .may-device__body{background:var(--may-gray-4)}.may-device__screen{position:relative;overflow:hidden;border-radius:32px;background:var(--may-color-bg);transform:translateZ(0);contain:layout paint;isolation:isolate;--may-inset-top: 44px;--may-inset-bottom: 34px;--may-inset-left: 0px;--may-inset-right: 0px}.may-device--phone .may-device__screen{width:390px;height:720px}.may-device--phone-large .may-device__screen{width:430px;height:800px}.may-device--tablet .may-device__screen{width:820px;height:700px;--may-inset-top: 24px;--may-inset-bottom: 20px}.may-device__notch{position:absolute;top:24px;left:50%;transform:translate(-50%);width:118px;height:32px;border-radius:var(--may-radius-full);background:#000;pointer-events:none}.may-device--tablet .may-device__notch{display:none}.may-device__indicator{position:absolute;bottom:20px;left:50%;transform:translate(-50%);width:134px;height:5px;border-radius:var(--may-radius-full);background:var(--may-label);opacity:.28;pointer-events:none}.may-device__label{font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);color:var(--may-color-text-secondary)}", cr = ".may-photo-tile{position:relative;display:block;inline-size:100%;aspect-ratio:1 / 1;padding:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent}.may-photo-tile__plate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;transition:transform var(--may-duration-settle) var(--may-spring-snappy),border-radius var(--may-duration-settle) var(--may-spring-snappy)}.may-photo-tile[aria-pressed=true] .may-photo-tile__plate{transform:scale(.86);border-radius:var(--may-radius-md)}@media(hover:hover)and (pointer:fine){.may-photo-tile:hover .may-photo-tile__plate{filter:brightness(1.1)}}.may-photo-tile__badge{position:absolute;inset-block-start:var(--may-space-1);inset-inline-end:var(--may-space-1)}.may-photo-tile__duration{position:absolute;inset-block-end:var(--may-space-1);inset-inline-end:var(--may-space-2);color:var(--may-on-color)}.may-photo-tile__check{position:absolute;inset-block-end:var(--may-space-1);inset-inline-start:var(--may-space-1);inline-size:var(--may-space-5);block-size:var(--may-space-5);display:flex;align-items:center;justify-content:center;border-radius:var(--may-radius-full);background:var(--may-color-primary);color:var(--may-color-on-primary)}.may-photo-tile__check>svg{inline-size:var(--may-space-4);block-size:var(--may-space-4)}", hr = '.may-inbox__row[aria-current=true]{background:var(--may-color-highlight-strong)}.may-inbox__row[aria-current=true]:after{content:"";position:absolute;inset-block:0;inset-inline-start:0;width:var(--may-space-1);background:var(--may-color-tint)}', ur = ".cat-scroll{flex:1;overflow-y:auto;padding:var(--may-space-8) var(--may-space-6) var(--may-space-16)}.cat-inner{max-width:68rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--may-space-12)}.cat-masthead{display:flex;flex-direction:column;gap:var(--may-space-2)}.cat-title{margin:0;color:var(--may-color-text);font-size:var(--may-text-large-title);line-height:var(--may-text-large-title-leading);letter-spacing:var(--may-text-large-title-tracking);font-weight:var(--may-text-large-title-weight)}.cat-lede{margin:0;max-width:46rem;color:var(--may-color-text-secondary);font-size:var(--may-text-subheadline);line-height:var(--may-text-subheadline-leading);letter-spacing:var(--may-text-subheadline-tracking)}.cat-section{display:flex;flex-direction:column;gap:var(--may-space-6)}.cat-section-head{display:flex;align-items:center;gap:var(--may-space-3)}.cat-section-title{margin:0;color:var(--may-color-text);font-size:var(--may-text-title-3);line-height:var(--may-text-title-3-leading);letter-spacing:var(--may-text-title-3-tracking);font-weight:var(--may-text-title-3-weight)}.cat-section-rule{flex:1;height:var(--may-hairline);background:var(--may-color-separator)}.cat-section-count{color:var(--may-color-text-tertiary);font-family:var(--may-font-mono);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);font-variant-numeric:tabular-nums}.cat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(19rem,1fr));gap:var(--may-space-8) var(--may-space-5);align-items:start}.cat-cell{display:flex;flex-direction:column;gap:var(--may-space-3);min-width:0}.cat-cell--wide{grid-column:1 / -1}.cat-stage{display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--may-space-4);min-height:var(--may-space-12);min-width:0}.cat-stage--row{flex-direction:row;align-items:center;flex-wrap:wrap;gap:var(--may-space-4)}.cat-caption{margin:0;color:var(--may-color-text-secondary);font-family:var(--may-font-mono);font-size:var(--may-text-caption-1);line-height:var(--may-text-caption-1-leading);letter-spacing:var(--may-text-caption-1-tracking)}.cat-caption-note{color:var(--may-color-text-tertiary);font-family:var(--may-font-sans)}.cat-swatch{display:block;block-size:var(--may-space-10);inline-size:var(--may-space-12);border-radius:var(--may-radius-sm);background:var(--may-color-fill-tertiary)}.cat-swatch--grid{inline-size:auto}.cat-prose{margin:0;color:var(--may-color-text-secondary);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);letter-spacing:var(--may-text-footnote-tracking)}.cat-ghost{margin:0;color:var(--may-color-text-tertiary);font-size:var(--may-text-footnote);line-height:var(--may-text-footnote-leading);font-style:italic}", pr = ".may-catalog-mobile__entry{display:flex;flex-direction:column;gap:var(--may-space-3)}.may-catalog-mobile__stage{display:flex;flex-direction:column;gap:var(--may-space-3);min-width:0}.may-catalog-mobile__caption{display:flex;flex-direction:column;gap:var(--may-space-1)}.may-catalog-mobile__frame{position:relative;transform:translateZ(0);contain:layout paint;isolation:isolate;display:flex;flex-direction:column;width:100%;height:21rem;overflow:hidden;border-radius:var(--may-radius-sheet);background:var(--may-color-bg);box-shadow:var(--may-shadow-sm);--may-inset-top: 2.75rem;--may-inset-bottom: 2.125rem;--may-inset-left: 0rem;--may-inset-right: 0rem}.may-catalog-mobile__frame-scroll{flex:1 1 auto;min-height:0;overflow-y:auto}.may-catalog-mobile__strip{display:flex;flex-direction:column;gap:var(--may-space-3);padding:var(--may-space-3);border-radius:var(--may-radius-sheet);background:var(--may-color-bg)}.may-catalog-mobile__scroller{height:14rem;overflow:hidden;border-radius:var(--may-radius-sheet);background:var(--may-color-bg)}.may-catalog-mobile__untransformed{height:15rem;padding:var(--may-space-3);border-radius:var(--may-radius-sheet);background:var(--may-color-bg)}";
function mr({
  children: i,
  device: n = "phone",
  theme: r,
  label: o,
  className: d
}) {
  return /* @__PURE__ */ a("figure", { className: vt("may-device", `may-device--${n}`, d), children: [
    /* @__PURE__ */ a("div", { className: "may-device__body", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: "may-device__screen",
          "data-may-theme": r,
          "data-slot": "device-screen",
          children: /* @__PURE__ */ e(ft, { platform: n === "tablet" ? "desktop" : "phone", children: i })
        }
      ),
      /* @__PURE__ */ e("span", { className: "may-device__notch", "aria-hidden": !0 }),
      /* @__PURE__ */ e("span", { className: "may-device__indicator", "aria-hidden": !0 })
    ] }),
    o && /* @__PURE__ */ e("figcaption", { className: "may-device__label", children: o })
  ] });
}
const gr = [
  { id: "IMG_4818", label: "Fog over the Marin Headlands", plate: "linear-gradient(155deg, var(--may-teal), var(--may-indigo))" },
  { id: "IMG_4819", label: "Ferry Building clock tower", plate: "linear-gradient(200deg, var(--may-orange), var(--may-pink))" },
  { id: "IMG_4820", label: "Sourdough on the counter", plate: "linear-gradient(165deg, var(--may-yellow), var(--may-brown))" },
  { id: "IMG_4821", label: "Sutro Baths at low tide", plate: "linear-gradient(180deg, var(--may-cyan), var(--may-blue))", burst: 24 },
  { id: "IMG_4823", label: "Ella on the swing", plate: "linear-gradient(140deg, var(--may-green), var(--may-teal))", duration: "0:18" },
  { id: "IMG_4824", label: "Succulents on the fire escape", plate: "linear-gradient(190deg, var(--may-mint), var(--may-green))" },
  { id: "IMG_4826", label: "Golden Gate from Baker Beach", plate: "linear-gradient(160deg, var(--may-red), var(--may-orange))" },
  { id: "IMG_4827", label: "Cable car on Hyde Street", plate: "linear-gradient(200deg, var(--may-brown), var(--may-yellow))" },
  { id: "IMG_4828", label: "Rooftop water tanks", plate: "linear-gradient(150deg, var(--may-gray), var(--may-blue))" },
  { id: "IMG_4830", label: "Sea lions at Pier 39", plate: "linear-gradient(175deg, var(--may-purple), var(--may-pink))", burst: 8 },
  { id: "IMG_4831", label: "Espresso at Caffè Trieste", plate: "linear-gradient(210deg, var(--may-brown), var(--may-red))" },
  { id: "IMG_4832", label: "Painted Ladies at dusk", plate: "linear-gradient(160deg, var(--may-indigo), var(--may-purple))" },
  { id: "IMG_4834", label: "Bay Bridge lights", plate: "linear-gradient(185deg, var(--may-blue), var(--may-indigo))", duration: "1:02" },
  { id: "IMG_4836", label: "Eucalyptus on Mount Sutro", plate: "linear-gradient(145deg, var(--may-green), var(--may-mint))" },
  { id: "IMG_4838", label: "Ocean Beach bonfire", plate: "linear-gradient(205deg, var(--may-orange), var(--may-red))" },
  { id: "IMG_4839", label: "Farmers market dahlias", plate: "linear-gradient(170deg, var(--may-pink), var(--may-purple))", burst: 132 },
  { id: "IMG_4841", label: "Muir Woods trailhead", plate: "linear-gradient(155deg, var(--may-teal), var(--may-green))" },
  { id: "IMG_4842", label: "Rain on the studio window", plate: "linear-gradient(195deg, var(--may-gray), var(--may-teal))" }
], yr = [
  { label: "Years", value: "years" },
  { label: "Months", value: "months" },
  { label: "Days", value: "days" },
  { label: "All Photos", value: "all" }
];
function vr() {
  const [i, n] = h("all"), [r, o] = h(["IMG_4821", "IMG_4826"]), [d, u] = h(!1), s = r.length, l = s === 1 ? "Photo" : "Photos", v = (p) => o(
    (w) => w.includes(p) ? w.filter((A) => A !== p) : [...w, p]
  );
  return /* @__PURE__ */ a("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "var(--may-color-bg)" }, children: [
    /* @__PURE__ */ a("div", { "data-slot": "scroll-area", style: { flex: 1, minHeight: 0, overflowY: "auto" }, children: [
      /* @__PURE__ */ e(
        Te,
        {
          title: "Library",
          trailing: /* @__PURE__ */ e(
            J,
            {
              size: "sm",
              "aria-label": "Filter library",
              defaultValue: "all",
              options: [
                { label: "All Items", value: "all" },
                { label: "Favourites", value: "favourites" },
                { label: "Screenshots", value: "screenshots" },
                { label: "Shared with You", value: "shared" }
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ e("div", { style: { padding: "var(--may-space-3) var(--may-space-4)" }, children: /* @__PURE__ */ e(
        we,
        {
          "aria-label": "Library scope",
          options: yr,
          value: i,
          onValueChange: n,
          fullWidth: !0
        }
      ) }),
      /* @__PURE__ */ a(
        c,
        {
          direction: "row",
          align: "baseline",
          justify: "between",
          style: { padding: "0 var(--may-space-4) var(--may-space-2)" },
          children: [
            /* @__PURE__ */ e(t, { variant: "headline", children: "Tuesday, 14 October" }),
            /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "San Francisco" })
          ]
        }
      ),
      /* @__PURE__ */ e(he, { minColumnWidth: 110, gap: 1, children: gr.map((p) => {
        const w = r.includes(p.id);
        return /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "may-photo-tile",
            "aria-pressed": w,
            "aria-label": p.label,
            onClick: () => v(p.id),
            children: [
              /* @__PURE__ */ e("span", { className: "may-photo-tile__plate", style: { background: p.plate } }),
              p.burst !== void 0 && /* @__PURE__ */ e(
                W,
                {
                  className: "may-photo-tile__badge",
                  variant: "solid",
                  tone: "neutral",
                  count: p.burst
                }
              ),
              p.duration && /* @__PURE__ */ e(
                t,
                {
                  as: "span",
                  className: "may-photo-tile__duration",
                  variant: "caption-2",
                  weight: "semibold",
                  mono: !0,
                  children: p.duration
                }
              ),
              w && /* @__PURE__ */ e("span", { className: "may-photo-tile__check", "aria-hidden": !0, children: /* @__PURE__ */ e(xi, { "aria-hidden": !0 }) })
            ]
          },
          p.id
        );
      }) }),
      /* @__PURE__ */ e(
        t,
        {
          variant: "footnote",
          tone: "secondary",
          align: "center",
          style: { padding: "var(--may-space-5) var(--may-space-4)" },
          children: "1,284 Photos · 62 Videos"
        }
      )
    ] }),
    /* @__PURE__ */ a(te, { placement: "bottom", variant: "surface", separator: !0, safeArea: !0, align: "between", children: [
      /* @__PURE__ */ e(
        S,
        {
          "aria-label": `Share ${s} ${l.toLowerCase()}`,
          disabled: s === 0,
          onClick: () => u(!0),
          children: /* @__PURE__ */ e(Ai, { "aria-hidden": !0 })
        }
      ),
      /* @__PURE__ */ e(t, { variant: "subheadline", weight: "semibold", tone: s === 0 ? "tertiary" : "default", children: s === 0 ? "Select Items" : `${s} ${l} Selected` }),
      /* @__PURE__ */ a(c, { direction: "row", gap: 1, children: [
        /* @__PURE__ */ e(
          S,
          {
            "aria-label": "Add to favourites",
            disabled: s === 0,
            onClick: () => M(`Added ${s} ${l.toLowerCase()} to Favourites`),
            children: /* @__PURE__ */ e(Ca, { "aria-hidden": !0 })
          }
        ),
        /* @__PURE__ */ e(
          S,
          {
            "aria-label": "Delete",
            tone: "danger",
            disabled: s === 0,
            onClick: () => {
              o([]), M(`${s} ${l} deleted`, { tone: "danger" });
            },
            children: /* @__PURE__ */ e(Y, { "aria-hidden": !0 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      Pa,
      {
        open: d,
        onClose: () => u(!1),
        title: `${s} ${l} Selected`,
        description: "Shared items keep their edits and location.",
        actions: [
          { label: "AirDrop", icon: /* @__PURE__ */ e(fr, {}), onSelect: () => M("Sent to Marco’s iPhone", { tone: "success" }) },
          { label: "Copy", icon: /* @__PURE__ */ e(Mi, { "aria-hidden": !0 }), onSelect: () => M(`${s} ${l} copied`) },
          { label: "Save to Files", icon: /* @__PURE__ */ e(se, { "aria-hidden": !0 }), onSelect: () => M("Saved to iCloud Drive") },
          {
            label: `Delete ${s} ${l}`,
            icon: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }),
            destructive: !0,
            onSelect: () => {
              o([]), M(`${s} ${l} deleted`, { tone: "danger" });
            }
          }
        ]
      }
    )
  ] });
}
function fr() {
  return /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, children: [
    /* @__PURE__ */ a("g", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", children: [
      /* @__PURE__ */ e("path", { d: "M6.4 14.6a7.9 7.9 0 0111.2 0" }),
      /* @__PURE__ */ e("path", { d: "M9.1 17.3a4.1 4.1 0 015.8 0" }),
      /* @__PURE__ */ e("path", { d: "M3.7 11.9a11.7 11.7 0 0116.6 0" })
    ] }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "19.9", r: "1.6", fill: "currentColor" })
  ] });
}
const De = [
  {
    id: "m1",
    from: "Ada Lovelace",
    subject: "Depth sensor calibration, second pass",
    preview: "The drift is down to 0.4 mm at two metres. Numbers attached.",
    time: "9:41 AM",
    unread: !0
  },
  {
    id: "m2",
    from: "Grace Hopper",
    subject: "Compiler timings for the 3.2 branch",
    preview: "Clean build is 4:12, incremental 38s. The linker is the long pole.",
    time: "8:15 AM",
    unread: !0
  },
  {
    id: "m3",
    from: "App Store Connect",
    subject: "TestFlight build 412 is ready to test",
    preview: "Version 3.2 (412) has completed processing and is available.",
    time: "Yesterday",
    unread: !0
  },
  {
    id: "m4",
    from: "Katherine Johnson",
    subject: "Trajectory review moved to Thursday",
    preview: "Room 4 was double-booked. Same agenda, one day later.",
    time: "Yesterday",
    unread: !1
  },
  {
    id: "m5",
    from: "Margaret Hamilton",
    subject: "Priority display: error 1202 write-up",
    preview: "Short version — the restart logic did exactly what it should.",
    time: "Tuesday",
    unread: !1
  },
  {
    id: "m6",
    from: "Radia Perlman",
    subject: "Re: spanning tree draft",
    preview: "Section 3 reads much better. One nit about the tie-break rule.",
    time: "Tuesday",
    unread: !1
  },
  {
    id: "m7",
    from: "Design Systems",
    subject: "Weekly digest — 14 components shipped",
    preview: "SegmentedControl now drags its thumb. Full notes inside.",
    time: "Monday",
    unread: !1
  },
  {
    id: "m8",
    from: "iCloud",
    subject: "Your storage is almost full",
    preview: "196.4 GB of 200 GB used. Upgrade or free up space.",
    time: "8 Sept",
    unread: !1
  }
], br = [
  "Ran the 3.2 branch through the build farm overnight — three machines, five runs each, so the numbers below are medians rather than best-of.",
  "Clean build is 4:12, down from 5:38 on 3.1. Incremental is 38 seconds and almost all of that is the linker: it alone accounts for 31 of the 38, and it has not moved since March. I have a patch that splits the symbol table work across cores and takes it to 12 seconds, but it wants a careful review before Friday.",
  "The remaining seven seconds are spread thin enough that I would leave them alone this cycle. Full per-target breakdown is in the attachment."
];
function wr() {
  const [i, n] = h("m2"), [r, o] = h(""), d = De.filter(
    (l) => `${l.from} ${l.subject} ${l.preview}`.toLowerCase().includes(r.trim().toLowerCase())
  ), u = De.find((l) => l.id === i) ?? De[0], s = De.filter((l) => l.unread).length;
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        _a,
        {
          defaultSize: 320,
          min: 260,
          max: 440,
          style: { flex: 1, minHeight: 0 },
          children: [
            /* @__PURE__ */ a("div", { style: ja, children: [
              /* @__PURE__ */ a(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--may-space-3)",
                    padding: "var(--may-space-4)"
                  },
                  children: [
                    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "var(--may-space-2)" }, children: [
                      /* @__PURE__ */ e(t, { as: "span", variant: "headline", children: "Inbox" }),
                      /* @__PURE__ */ e(W, { count: s }),
                      /* @__PURE__ */ a(
                        t,
                        {
                          as: "span",
                          variant: "footnote",
                          tone: "tertiary",
                          style: { marginInlineStart: "auto" },
                          children: [
                            De.length,
                            " messages"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e(
                      Ie,
                      {
                        fullWidth: !0,
                        size: "sm",
                        placeholder: "Search",
                        value: r,
                        onValueChange: o,
                        "aria-label": "Search inbox"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e(ce, {}),
              /* @__PURE__ */ e("div", { "data-slot": "scroll-area", style: Ka, children: /* @__PURE__ */ e(I, { variant: "plain", children: d.map((l) => /* @__PURE__ */ e(
                g,
                {
                  className: "may-inbox__row",
                  "aria-current": l.id === i ? "true" : void 0,
                  leading: /* @__PURE__ */ e(kr, { unread: l.unread }),
                  title: l.from,
                  subtitle: l.subject,
                  detail: l.time,
                  chevron: !1,
                  onClick: () => n(l.id)
                },
                l.id
              )) }) })
            ] }),
            /* @__PURE__ */ a("div", { style: ja, children: [
              /* @__PURE__ */ e("div", { "data-slot": "scroll-area", style: { ...Ka, padding: "var(--may-space-6)" }, children: /* @__PURE__ */ a("div", { style: { maxWidth: "44rem", margin: "0 auto" }, children: [
                /* @__PURE__ */ a(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--may-space-3)",
                      paddingBlockEnd: "var(--may-space-5)"
                    },
                    children: [
                      /* @__PURE__ */ e(B, { name: u.from, size: "lg" }),
                      /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
                        /* @__PURE__ */ e(t, { variant: "headline", children: u.from }),
                        /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", clamp: 1, children: "To: Ada Lovelace, Margaret Hamilton, 2 others" })
                      ] }),
                      /* @__PURE__ */ a(t, { as: "span", variant: "footnote", tone: "tertiary", children: [
                        "Today at ",
                        u.time
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ e(t, { variant: "title-3", children: u.subject }),
                /* @__PURE__ */ a(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--may-space-4)",
                      paddingBlockStart: "var(--may-space-4)"
                    },
                    children: [
                      br.map((l) => /* @__PURE__ */ e(t, { variant: "body", tone: "secondary", children: l }, l.slice(0, 24))),
                      /* @__PURE__ */ e(t, { variant: "body", tone: "secondary", children: "— Grace" })
                    ]
                  }
                ),
                /* @__PURE__ */ a(
                  "div",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--may-space-2)",
                      marginBlockStart: "var(--may-space-6)",
                      padding: "var(--may-space-2) var(--may-space-3)",
                      borderRadius: "var(--may-radius-md)",
                      background: "var(--may-color-fill-quaternary)"
                    },
                    children: [
                      /* @__PURE__ */ e(
                        ea,
                        {
                          "aria-hidden": !0,
                          style: {
                            width: "var(--may-space-4)",
                            height: "var(--may-space-4)",
                            flexShrink: 0,
                            color: "var(--may-color-text-tertiary)"
                          }
                        }
                      ),
                      /* @__PURE__ */ e(t, { as: "span", variant: "footnote", children: "build-timings-3.2.csv" }),
                      /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "tertiary", children: "48 KB" })
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ a(te, { placement: "bottom", align: "start", separator: !0, children: [
                /* @__PURE__ */ e(S, { "aria-label": "Reply", onClick: () => {
                }, children: /* @__PURE__ */ e(Le, { "aria-hidden": !0 }) }),
                /* @__PURE__ */ e(S, { "aria-label": "Forward", onClick: () => {
                }, children: /* @__PURE__ */ e(Qe, { "aria-hidden": !0 }) }),
                /* @__PURE__ */ e(S, { "aria-label": "Archive", onClick: () => {
                }, children: /* @__PURE__ */ e(He, { "aria-hidden": !0 }) }),
                /* @__PURE__ */ e(We, {}),
                /* @__PURE__ */ e(S, { "aria-label": "Move to Bin", tone: "danger", onClick: () => {
                }, children: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }) })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const ja = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  minWidth: 0,
  background: "var(--may-color-surface)"
}, Ka = {
  flex: 1,
  minHeight: 0,
  overflowY: "auto"
};
function kr({ unread: i }) {
  return /* @__PURE__ */ e(
    "span",
    {
      style: {
        display: "inline-flex",
        justifyContent: "center",
        width: "var(--may-space-8)"
      },
      children: i && /* @__PURE__ */ a(ze, { children: [
        /* @__PURE__ */ e(W, { dot: !0, "aria-hidden": !0 }),
        /* @__PURE__ */ e(Da, { children: "Unread" })
      ] })
    }
  );
}
const L = () => {
}, Sr = [
  { name: "Kyoto 2024", kind: "Photos Library", size: "48.2 GB", modified: "Today, 9:41 AM" },
  { name: "Halide 4.1.3", kind: "Application", size: "182.4 MB", modified: "Yesterday" },
  { name: "Q3 Review.key", kind: "Keynote Document", size: "96.7 MB", modified: "12 Oct 2024" }
], Cr = [
  { key: "name", header: "Name", primary: !0 },
  { key: "kind", header: "Kind" },
  { key: "size", header: "Size", numeric: !0 },
  { key: "modified", header: "Modified" }
], xr = [
  { label: "Get Info", shortcut: "⌘I", onSelect: L },
  { label: "Duplicate", shortcut: "⌘D", onSelect: L },
  { label: "Quick Look", shortcut: "Space", onSelect: L },
  { label: "Move to Trash", shortcut: "⌘⌫", destructive: !0, separator: !0, onSelect: L }
];
function Ar() {
  const [i, n] = h(null), r = () => n(null), [o, d] = h(3);
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ e("div", { "data-slot": "scroll-area", className: "cat-scroll", children: /* @__PURE__ */ a("div", { className: "cat-inner", children: [
        /* @__PURE__ */ a("header", { className: "cat-masthead", children: [
          /* @__PURE__ */ e("h1", { className: "cat-title", children: "The Adaptive Family" }),
          /* @__PURE__ */ e("p", { className: "cat-lede", children: "Fifty-seven components, once each, in the state they ship in. Everything here reshapes at 1024px — Sheet rises from the bottom edge on a phone and presents as a centred dialog on a Mac, ActionSheet becomes an anchored menu, Table collapses into grouped rows." })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Layout", count: 7, children: [
          /* @__PURE__ */ e(y, { name: "Box", children: /* @__PURE__ */ e(j, { surface: "base", radius: "card", padding: 4, shadow: "xs", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "An elevated surface at the card radius, inset by one 16pt step. Surfaces separate by value here — there is no bordered variant." }) }) }),
          /* @__PURE__ */ e(y, { name: "Stack", children: /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
            /* @__PURE__ */ e("span", { className: "cat-swatch" }),
            /* @__PURE__ */ e("span", { className: "cat-swatch" }),
            /* @__PURE__ */ e("span", { className: "cat-swatch" })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "Grid", children: /* @__PURE__ */ a(he, { minColumnWidth: "4rem", gap: 3, children: [
            /* @__PURE__ */ e("span", { className: "cat-swatch cat-swatch--grid" }),
            /* @__PURE__ */ e("span", { className: "cat-swatch cat-swatch--grid" }),
            /* @__PURE__ */ e("span", { className: "cat-swatch cat-swatch--grid" }),
            /* @__PURE__ */ e("span", { className: "cat-swatch cat-swatch--grid" })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "Separator", children: /* @__PURE__ */ e(ce, { label: "or" }) }),
          /* @__PURE__ */ e(y, { name: "SafeArea", note: "pads past the notch and the home indicator", children: /* @__PURE__ */ e(er, { edges: ["left", "right"], children: /* @__PURE__ */ e("p", { className: "cat-ghost", children: "A div with padding and nothing else — pure CSS, so it is the right size on the first frame and survives a rotation." }) }) }),
          /* @__PURE__ */ e(y, { name: "ScrollArea", children: /* @__PURE__ */ e(ar, { maxHeight: "6rem", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "iOS 18.2 — This update introduces Genmoji, adds ProRAW Max capture to the Camera app, and improves Wi-Fi reliability on shared networks. It also fixes an issue where Photos could fail to sync albums created on a Mac, an issue where the keyboard could become unresponsive in Messages, and an issue where Focus filters were not applied to Mail on first launch." }) }) }),
          /* @__PURE__ */ a(y, { name: "VisuallyHidden", note: "present in the DOM, invisible on screen", children: [
            /* @__PURE__ */ e(Da, { children: "Layout — 7 of 57 components" }),
            /* @__PURE__ */ e("p", { className: "cat-ghost", children: "Reachable by VoiceOver, drawn nowhere." })
          ] })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Typography", count: 4, children: [
          /* @__PURE__ */ e(y, { name: "Text", children: /* @__PURE__ */ e(t, { children: "Everything in a Mail message, a Settings footnote and an App Store description is one of eleven named styles." }) }),
          /* @__PURE__ */ e(y, { name: "Heading", children: /* @__PURE__ */ e(xe, { level: 3, children: "Continue Watching" }) }),
          /* @__PURE__ */ e(y, { name: "Label", children: /* @__PURE__ */ e(ir, { children: "Display Name" }) }),
          /* @__PURE__ */ e(y, { name: "Kbd", row: !0, children: /* @__PURE__ */ e(wa, { children: "⌘K" }) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Actions", count: 5, children: [
          /* @__PURE__ */ e(y, { name: "Button", row: !0, children: /* @__PURE__ */ e(m, { children: "Continue" }) }),
          /* @__PURE__ */ e(y, { name: "IconButton", row: !0, children: /* @__PURE__ */ e(S, { "aria-label": "Share", children: /* @__PURE__ */ e(Ya, {}) }) }),
          /* @__PURE__ */ e(y, { name: "ButtonGroup", row: !0, children: /* @__PURE__ */ a(tr, { children: [
            /* @__PURE__ */ e(m, { variant: "gray", children: "Day" }),
            /* @__PURE__ */ e(m, { variant: "gray", children: "Week" }),
            /* @__PURE__ */ e(m, { variant: "gray", children: "Month" })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "Fab", row: !0, children: /* @__PURE__ */ e(ki, { icon: /* @__PURE__ */ e(Mr, {}), "aria-label": "New Note" }) }),
          /* @__PURE__ */ e(y, { name: "Toolbar", note: "ToolbarSpacer splits the leading action off", wide: !0, children: /* @__PURE__ */ a(te, { placement: "bottom", align: "start", separator: !0, children: [
            /* @__PURE__ */ e(S, { "aria-label": "Compose", onClick: L, children: /* @__PURE__ */ e(Ir, {}) }),
            /* @__PURE__ */ e(We, {}),
            /* @__PURE__ */ e(S, { "aria-label": "Move to Folder", onClick: L, children: /* @__PURE__ */ e(qa, {}) }),
            /* @__PURE__ */ e(S, { "aria-label": "Delete Message", tone: "danger", onClick: L, children: /* @__PURE__ */ e(Ja, {}) })
          ] }) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Forms", count: 10, children: [
          /* @__PURE__ */ e(y, { name: "Field", note: "labels and describes the control inside it", children: /* @__PURE__ */ e(k, { label: "Recovery Email", description: "Used only to reset your password.", children: /* @__PURE__ */ e(N, { type: "email", placeholder: "marina@icloud.com", fullWidth: !0 }) }) }),
          /* @__PURE__ */ e(y, { name: "Input", children: /* @__PURE__ */ e(N, { placeholder: "Album name", fullWidth: !0 }) }),
          /* @__PURE__ */ e(y, { name: "Textarea", children: /* @__PURE__ */ e(Yi, { rows: 3, placeholder: "Add a note about this shoot…", fullWidth: !0 }) }),
          /* @__PURE__ */ e(y, { name: "SearchField", children: /* @__PURE__ */ e(Ie, { placeholder: "Search Mail", fullWidth: !0 }) }),
          /* @__PURE__ */ e(y, { name: "Select", children: /* @__PURE__ */ e(
            J,
            {
              fullWidth: !0,
              defaultValue: "large",
              options: [
                { label: "Actual Size — 8064 × 6048", value: "actual" },
                { label: "Large — 2048 px", value: "large" },
                { label: "Medium — 1024 px", value: "medium" },
                { label: "Small — 640 px", value: "small" }
              ]
            }
          ) }),
          /* @__PURE__ */ e(y, { name: "Checkbox", children: /* @__PURE__ */ e(_, { defaultChecked: !0, description: "Uses cellular data when Wi-Fi is unavailable.", children: "Sync over cellular" }) }),
          /* @__PURE__ */ e(y, { name: "RadioGroup", note: "with Radio", children: /* @__PURE__ */ a(Ze, { defaultValue: "standard", children: [
            /* @__PURE__ */ e($, { value: "standard", children: "Standard — 3 to 5 days" }),
            /* @__PURE__ */ e($, { value: "express", children: "Express — 2 days" }),
            /* @__PURE__ */ e($, { value: "overnight", children: "Overnight — by 10:30 AM" })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "Switch", children: /* @__PURE__ */ e(Ae, { defaultChecked: !0, description: "Reduces background activity until fully charged.", children: "Low Power Mode" }) }),
          /* @__PURE__ */ e(y, { name: "Slider", children: /* @__PURE__ */ e(Ge, { defaultValue: 62, showValue: !0, formatValue: (s) => `${s}%` }) }),
          /* @__PURE__ */ e(y, { name: "Stepper", row: !0, children: /* @__PURE__ */ e(Ra, { defaultValue: 2, min: 1, max: 9 }) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Containment", count: 6, children: [
          /* @__PURE__ */ e(y, { name: "Card", note: "with CardHeader, CardTitle, CardDescription, CardBody, CardFooter", children: /* @__PURE__ */ a(H, { children: [
            /* @__PURE__ */ a(Q, { children: [
              /* @__PURE__ */ e(X, { children: "iCloud Backup" }),
              /* @__PURE__ */ e(ne, { children: "Last backup: Today, 3:12 AM" })
            ] }),
            /* @__PURE__ */ e(me, { children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "4.7 GB of 50 GB available. The next backup runs when this iPhone is locked and on power." }) }),
            /* @__PURE__ */ e(Oa, { children: /* @__PURE__ */ e(m, { variant: "tinted", size: "sm", onClick: L, children: "Back Up Now" }) })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "List", note: "with ListRow", children: /* @__PURE__ */ a(I, { header: "Devices", footer: "Sign out of any device you no longer use.", children: [
            /* @__PURE__ */ e(g, { title: "Marina’s iPhone 16 Pro", subtitle: "This device", detail: "iOS 18.2", onClick: L }),
            /* @__PURE__ */ e(g, { title: "MacBook Pro 14″", subtitle: "Kyoto", detail: "macOS 15.1", onClick: L }),
            /* @__PURE__ */ e(g, { title: "iPad Air", subtitle: "Last used 3 days ago", detail: "iPadOS 18.1", onClick: L })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "Accordion", note: "with AccordionItem", children: /* @__PURE__ */ a(nr, { defaultValue: ["shipping"], children: [
            /* @__PURE__ */ e(Ua, { value: "shipping", title: "When will my order ship?", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "Orders placed before 2 PM ship the same business day from Cupertino." }) }),
            /* @__PURE__ */ e(Ua, { value: "returns", title: "How do returns work?", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "Anything unopened can go back within 14 days, refunded to the original card." }) })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "Collapsible", children: /* @__PURE__ */ e(Je, { trigger: "Advanced Options", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "Keep originals on this Mac, and upload ProRAW files at full resolution." }) }) }),
          /* @__PURE__ */ e(y, { name: "Descriptions", note: "with DescriptionItem", children: /* @__PURE__ */ a(Na, { header: "File Info", children: [
            /* @__PURE__ */ e(U, { label: "Kind", value: "ProRAW Image" }),
            /* @__PURE__ */ e(U, { label: "Dimensions", value: "8064 × 6048" }),
            /* @__PURE__ */ e(U, { label: "Size", value: "48.2 MB" }),
            /* @__PURE__ */ e(U, { label: "Captured", value: "14 Oct 2024, 4:12 PM" })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "EmptyState", children: /* @__PURE__ */ e(
            K,
            {
              glyph: /* @__PURE__ */ e(Rr, {}),
              title: "No Downloads",
              description: "Films and episodes you download appear here, ready to watch offline."
            }
          ) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Data", count: 6, children: [
          /* @__PURE__ */ e(y, { name: "Table", note: "collapses into grouped rows below 1024px", wide: !0, children: /* @__PURE__ */ e(
            ta,
            {
              caption: "Storage",
              columns: Cr,
              data: Sr,
              rowKey: "name"
            }
          ) }),
          /* @__PURE__ */ e(y, { name: "Badge", row: !0, children: /* @__PURE__ */ e(W, { children: "Beta" }) }),
          /* @__PURE__ */ e(y, { name: "Tag", row: !0, children: /* @__PURE__ */ e(ge, { children: "ProRAW" }) }),
          /* @__PURE__ */ a(y, { name: "Avatar", note: "with AvatarGroup", row: !0, children: [
            /* @__PURE__ */ e(B, { name: "Marina Küçük", size: "lg" }),
            /* @__PURE__ */ a(Ba, { max: 3, children: [
              /* @__PURE__ */ e(B, { name: "Devin Raye" }),
              /* @__PURE__ */ e(B, { name: "Priya Raman" }),
              /* @__PURE__ */ e(B, { name: "Tobias Lind" }),
              /* @__PURE__ */ e(B, { name: "Hana Osei" })
            ] })
          ] }),
          /* @__PURE__ */ e(y, { name: "IconTile", row: !0, children: /* @__PURE__ */ e(C, { gradient: "indigo", size: "md", children: /* @__PURE__ */ e(Pr, {}) }) }),
          /* @__PURE__ */ e(y, { name: "Statistic", children: /* @__PURE__ */ e(Ce, { label: "Move", value: "1,284", unit: "kcal", delta: "+12.4%", direction: "up" }) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Feedback", count: 6, children: [
          /* @__PURE__ */ e(y, { name: "Alert", wide: !0, children: /* @__PURE__ */ e(qi, { tone: "warning", title: "Storage Almost Full", children: "iCloud has 4.7 GB left. Backups will pause once it fills." }) }),
          /* @__PURE__ */ e(y, { name: "NoticeBar", wide: !0, children: /* @__PURE__ */ e(
            Fa,
            {
              action: /* @__PURE__ */ e(m, { variant: "plain", size: "sm", onClick: L, children: "Details" }),
              children: "Low Data Mode is on for “Kyoto Guesthouse”."
            }
          ) }),
          /* @__PURE__ */ a(y, { name: "Progress", note: "with CircularProgress", children: [
            /* @__PURE__ */ e(
              je,
              {
                value: 68,
                max: 100,
                label: "Downloading",
                showValue: !0,
                formatValue: (s, l) => `${(s / l * 24).toFixed(1)} MB of 24 MB`
              }
            ),
            /* @__PURE__ */ e(Ji, { value: 68, showValue: !0, "aria-label": "Downloading" })
          ] }),
          /* @__PURE__ */ e(y, { name: "Spinner", row: !0, children: /* @__PURE__ */ e(Si, {}) }),
          /* @__PURE__ */ e(y, { name: "Skeleton", children: /* @__PURE__ */ e(Fe, { lines: 3, label: "Loading messages" }) }),
          /* @__PURE__ */ e(y, { name: "Toast", note: "shown statically; toast() is the imperative API", children: /* @__PURE__ */ e(
            rr,
            {
              title: "Screenshot saved",
              description: "Desktop · Screenshot 2024-10-14 at 16.12.png",
              tone: "success",
              duration: 0,
              dismissible: !1,
              closeButton: !1
            }
          ) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Navigation", count: 6, children: [
          /* @__PURE__ */ e(y, { name: "NavigationBar", wide: !0, children: /* @__PURE__ */ e(
            Ke,
            {
              title: "Albums",
              subtitle: "1,284 Photos",
              sticky: !1,
              safeArea: !1,
              onBack: L,
              backLabel: "Library",
              trailing: /* @__PURE__ */ e(S, { "aria-label": "More", onClick: L, children: /* @__PURE__ */ e(Tr, {}) })
            }
          ) }),
          /* @__PURE__ */ e(y, { name: "Tabs", note: "with TabList, Tab, TabPanel", children: /* @__PURE__ */ a(Qi, { defaultValue: "unread", children: [
            /* @__PURE__ */ a(Xi, { children: [
              /* @__PURE__ */ e(le, { value: "all", children: "All" }),
              /* @__PURE__ */ e(le, { value: "unread", badge: "12", children: "Unread" }),
              /* @__PURE__ */ e(le, { value: "flagged", children: "Flagged" })
            ] }),
            /* @__PURE__ */ e(oe, { value: "all", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "1,284 messages across four mailboxes." }) }),
            /* @__PURE__ */ e(oe, { value: "unread", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "12 unread, oldest from Tuesday." }) }),
            /* @__PURE__ */ e(oe, { value: "flagged", children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "3 flagged for follow-up this week." }) })
          ] }) }),
          /* @__PURE__ */ e(y, { name: "SegmentedControl", children: /* @__PURE__ */ e(
            we,
            {
              "aria-label": "Activity range",
              defaultValue: "week",
              options: [
                { label: "Day", value: "day" },
                { label: "Week", value: "week" },
                { label: "Month", value: "month" },
                { label: "Year", value: "year" }
              ]
            }
          ) }),
          /* @__PURE__ */ e(y, { name: "Breadcrumb", children: /* @__PURE__ */ e(
            za,
            {
              items: [
                { label: "Macintosh HD", onClick: L },
                { label: "Projects", onClick: L },
                { label: "Kyoto 2024" }
              ]
            }
          ) }),
          /* @__PURE__ */ e(y, { name: "Pagination", children: /* @__PURE__ */ e(lr, { size: "sm", page: o, pageCount: 8, onPageChange: d }) }),
          /* @__PURE__ */ e(y, { name: "Steps", wide: !0, children: /* @__PURE__ */ e(
            Zi,
            {
              current: 1,
              items: [
                { title: "Cart", description: "3 items" },
                { title: "Shipping", description: "Express, 2 days" },
                { title: "Payment", description: "Apple Pay" },
                { title: "Review", description: "$1,299.00" }
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ a(Z, { title: "Overlays", count: 7, children: [
          /* @__PURE__ */ a(y, { name: "Sheet", note: "opens on click", row: !0, children: [
            /* @__PURE__ */ e(m, { variant: "tinted", onClick: () => n("sheet"), children: "Open Sheet" }),
            /* @__PURE__ */ e(
              Sa,
              {
                open: i === "sheet",
                onClose: r,
                title: "Share Photo",
                description: "IMG_4022.RAW · 48.2 MB",
                footer: /* @__PURE__ */ e(m, { fullWidth: !0, onClick: r, children: "Done" }),
                children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "Rises from the bottom edge on a phone, with a grabber and drag-to-dismiss; presents as a centred panel past 1024px." })
              }
            )
          ] }),
          /* @__PURE__ */ a(y, { name: "Modal", note: "opens on click", row: !0, children: [
            /* @__PURE__ */ e(m, { variant: "tinted", onClick: () => n("modal"), children: "Open Modal" }),
            /* @__PURE__ */ e(
              La,
              {
                open: i === "modal",
                onClose: r,
                title: "Rename Album",
                description: "This album is shared with 4 people. They will see the new name.",
                footer: /* @__PURE__ */ a(ze, { children: [
                  /* @__PURE__ */ e(m, { variant: "gray", onClick: r, children: "Cancel" }),
                  /* @__PURE__ */ e(m, { onClick: r, children: "Rename" })
                ] }),
                children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "Currently named “Kyoto 2024”." })
              }
            )
          ] }),
          /* @__PURE__ */ a(y, { name: "ActionSheet", note: "opens on click; an anchored menu on desktop", row: !0, children: [
            /* @__PURE__ */ e(m, { variant: "tinted", onClick: () => n("actions"), children: "Open ActionSheet" }),
            /* @__PURE__ */ e(
              Pa,
              {
                open: i === "actions",
                onClose: r,
                title: "IMG_4022.RAW",
                description: "Taken 14 Oct 2024 in Higashiyama",
                actions: [
                  { label: "Save to Files", icon: /* @__PURE__ */ e(qa, {}), onSelect: r },
                  { label: "Add to Shared Album", icon: /* @__PURE__ */ e(Ya, {}), onSelect: r },
                  { label: "Delete Photo", icon: /* @__PURE__ */ e(Ja, {}), destructive: !0, onSelect: r }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a(y, { name: "AlertDialog", note: "opens on click", row: !0, children: [
            /* @__PURE__ */ e(m, { variant: "tinted", tone: "danger", onClick: () => n("alert"), children: "Open AlertDialog" }),
            /* @__PURE__ */ e(
              na,
              {
                open: i === "alert",
                title: "Delete “Kyoto 2024”?",
                description: "The album is deleted from every device. The 412 photos in it stay in your library.",
                confirmLabel: "Delete Album",
                destructive: !0,
                onConfirm: r,
                onCancel: r
              }
            )
          ] }),
          /* @__PURE__ */ e(y, { name: "Popover", note: "opens on click, anchored to its trigger", row: !0, children: /* @__PURE__ */ e(
            Wa,
            {
              "aria-label": "Backup details",
              trigger: /* @__PURE__ */ e(m, { variant: "gray", children: "Backup Details" }),
              children: /* @__PURE__ */ e("p", { className: "cat-prose", children: "Last backup: Today, 3:12 AM over Wi-Fi. 4.7 GB of 50 GB available." })
            }
          ) }),
          /* @__PURE__ */ e(y, { name: "Tooltip", note: "appears on hover or focus, after a delay", row: !0, children: /* @__PURE__ */ e(ra, { label: "Add to Favourites", children: /* @__PURE__ */ e(S, { "aria-label": "Add to Favourites", onClick: L, children: /* @__PURE__ */ e(Dr, {}) }) }) }),
          /* @__PURE__ */ e(y, { name: "Menu", note: "opens on click", row: !0, children: /* @__PURE__ */ e(
            ye,
            {
              "aria-label": "File actions",
              trigger: /* @__PURE__ */ e(m, { variant: "gray", children: "File" }),
              items: xr
            }
          ) })
        ] })
      ] }) })
    }
  );
}
function Z({ title: i, count: n, children: r }) {
  return /* @__PURE__ */ a("section", { className: "cat-section", children: [
    /* @__PURE__ */ a("div", { className: "cat-section-head", children: [
      /* @__PURE__ */ e("h2", { className: "cat-section-title", children: i }),
      /* @__PURE__ */ e("span", { className: "cat-section-rule" }),
      /* @__PURE__ */ e("span", { className: "cat-section-count", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "cat-grid", children: r })
  ] });
}
function y({
  name: i,
  note: n,
  wide: r = !1,
  row: o = !1,
  children: d
}) {
  return /* @__PURE__ */ a("div", { className: r ? "cat-cell cat-cell--wide" : "cat-cell", children: [
    /* @__PURE__ */ e("div", { className: o ? "cat-stage cat-stage--row" : "cat-stage", children: d }),
    /* @__PURE__ */ a("p", { className: "cat-caption", children: [
      i,
      n ? /* @__PURE__ */ a("span", { className: "cat-caption-note", children: [
        " — ",
        n
      ] }) : null
    ] })
  ] });
}
function Ya() {
  return /* @__PURE__ */ e(Ai, { "aria-hidden": !0 });
}
function Mr() {
  return /* @__PURE__ */ e(xa, { "aria-hidden": !0 });
}
function Ir() {
  return /* @__PURE__ */ e(Ve, { "aria-hidden": !0 });
}
function qa() {
  return /* @__PURE__ */ e(se, { "aria-hidden": !0 });
}
function Ja() {
  return /* @__PURE__ */ e(Y, { "aria-hidden": !0 });
}
function Tr() {
  return /* @__PURE__ */ e(be, { "aria-hidden": !0 });
}
function Pr() {
  return /* @__PURE__ */ e(Aa, { "aria-hidden": !0 });
}
function Dr() {
  return /* @__PURE__ */ e(aa, { "aria-hidden": !0 });
}
function Rr() {
  return /* @__PURE__ */ e(fe, { "aria-hidden": !0 });
}
function Or() {
  const [i, n] = h("listen-now"), [r, o] = h("apps"), [d, u] = h("work"), [s, l] = h(!1), [v, p] = h(""), [w, A] = h("Updated 12 minutes ago"), [T, b] = h(Nr), [R, f] = h("Swipe a row: Read leads, Flag and Remind trail."), G = (D, ue) => b((x) => x.map((re) => re.id === D ? { ...re, unread: !ue } : re)), Pe = (D) => b((ue) => ue.map((x) => x.id === D ? { ...x, flagged: !x.flagged } : x));
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          "data-slot": "scroll-area",
          style: { flex: 1, overflowY: "auto", padding: "var(--may-space-6) var(--may-space-5)" },
          children: /* @__PURE__ */ a(
            "div",
            {
              style: {
                maxWidth: "78rem",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "var(--may-space-6)"
              },
              children: [
                /* @__PURE__ */ a("header", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-1)" }, children: [
                  /* @__PURE__ */ e(t, { as: "h1", variant: "large-title", children: "Mobile Family" }),
                  /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "The nine components that exist only on the phone, each once, in the state it ships in. Three sit in miniature phones because their position is fixed to a screen; one sits in an unframed box because its position is fixed to the display on purpose." })
                ] }),
                /* @__PURE__ */ a(he, { minColumnWidth: "21rem", gap: 5, children: [
                  /* @__PURE__ */ e(ee, { name: "NavBar", note: "Sticky by default — it sticks to the frame's own scroller.", children: /* @__PURE__ */ e("div", { className: "may-catalog-mobile__frame", children: /* @__PURE__ */ a("div", { className: "may-catalog-mobile__frame-scroll", "data-slot": "scroll-area", children: [
                    /* @__PURE__ */ e(
                      Te,
                      {
                        title: "Kyoto, October",
                        backLabel: "Albums",
                        onBack: () => {
                        },
                        trailing: /* @__PURE__ */ e(S, { "aria-label": "More actions", size: "sm", children: /* @__PURE__ */ e(Br, {}) })
                      }
                    ),
                    /* @__PURE__ */ e("div", { style: { padding: "var(--may-space-3)" }, children: /* @__PURE__ */ a(I, { header: "Recents", children: [
                      /* @__PURE__ */ e(g, { title: "IMG_4417.HEIC", detail: "3.8 MB", onClick: () => {
                      } }),
                      /* @__PURE__ */ e(g, { title: "IMG_4418.HEIC", detail: "4.1 MB", onClick: () => {
                      } }),
                      /* @__PURE__ */ e(g, { title: "Fushimi Inari.MOV", detail: "182.6 MB", onClick: () => {
                      } }),
                      /* @__PURE__ */ e(g, { title: "IMG_4431.HEIC", detail: "3.6 MB", onClick: () => {
                      } }),
                      /* @__PURE__ */ e(g, { title: "Nishiki Market.MOV", detail: "96.4 MB", onClick: () => {
                      } })
                    ] }) })
                  ] }) }) }),
                  /* @__PURE__ */ e(ee, { name: "TabBar", note: "Fixed by default — it pins to the frame's bottom edge.", children: /* @__PURE__ */ a("div", { className: "may-catalog-mobile__frame", children: [
                    /* @__PURE__ */ e(
                      "div",
                      {
                        className: "may-catalog-mobile__frame-scroll",
                        "data-slot": "scroll-area",
                        style: {
                          paddingBlockStart: "calc(var(--may-inset-top) + var(--may-space-2))",
                          /* Room for the bar the content scrolls under, plus the home
                           * indicator it pads itself for. */
                          paddingBlockEnd: "calc(var(--may-tabbar-h) + var(--may-inset-bottom) + var(--may-space-4))",
                          paddingInline: "var(--may-space-3)"
                        },
                        children: /* @__PURE__ */ a(I, { header: "Recently Added", children: [
                          /* @__PURE__ */ e(
                            g,
                            {
                              title: "Songs of a Lost World",
                              subtitle: "The Cure",
                              onClick: () => {
                              }
                            }
                          ),
                          /* @__PURE__ */ e(g, { title: "Wall of Eyes", subtitle: "The Smile", onClick: () => {
                          } }),
                          /* @__PURE__ */ e(g, { title: "Bright Future", subtitle: "Adrianne Lenker", onClick: () => {
                          } })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ e(
                      or,
                      {
                        value: i,
                        onValueChange: n,
                        items: [
                          {
                            value: "listen-now",
                            label: "Listen Now",
                            icon: /* @__PURE__ */ e(Qa, {}),
                            activeIcon: /* @__PURE__ */ e(Qa, { filled: !0 })
                          },
                          {
                            value: "browse",
                            label: "Browse",
                            icon: /* @__PURE__ */ e(Xa, {}),
                            activeIcon: /* @__PURE__ */ e(Xa, { filled: !0 }),
                            dot: !0
                          },
                          {
                            value: "library",
                            label: "Library",
                            icon: /* @__PURE__ */ e(Za, {}),
                            activeIcon: /* @__PURE__ */ e(Za, { filled: !0 })
                          },
                          { value: "search", label: "Search", icon: /* @__PURE__ */ e(Fr, {}) }
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ e(ee, { name: "Popup", note: "Modal, so it rests closed: an open sheet holds the focus trap.", children: /* @__PURE__ */ a("div", { className: "may-catalog-mobile__frame", children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        className: "may-catalog-mobile__frame-scroll",
                        "data-slot": "scroll-area",
                        style: {
                          paddingBlockStart: "calc(var(--may-inset-top) + var(--may-space-2))",
                          paddingInline: "var(--may-space-3)"
                        },
                        children: [
                          /* @__PURE__ */ a(I, { header: "Shared Album", footer: "Anyone with the link can add photos.", children: [
                            /* @__PURE__ */ e(g, { title: "Kyoto 2024", subtitle: "214 photos · 18 videos" }),
                            /* @__PURE__ */ e(g, { title: "halide.cam/g/kyoto-2024", subtitle: "Public link · expires 1 Nov" })
                          ] }),
                          /* @__PURE__ */ e("div", { style: { paddingBlock: "var(--may-space-4)" }, children: /* @__PURE__ */ e(
                            m,
                            {
                              variant: "tinted",
                              fullWidth: !0,
                              leadingIcon: /* @__PURE__ */ e(zr, {}),
                              onClick: () => l(!0),
                              children: "Share Link"
                            }
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e(et, { visible: s, onClose: () => l(!1), title: "Share Link", children: /* @__PURE__ */ a(I, { variant: "plain", children: [
                      /* @__PURE__ */ e(g, { title: "AirDrop", subtitle: "Marina’s MacBook Pro", onClick: () => l(!1) }),
                      /* @__PURE__ */ e(g, { title: "Copy Link", onClick: () => l(!1) }),
                      /* @__PURE__ */ e(g, { title: "Add to Shared Album", onClick: () => l(!1) }),
                      /* @__PURE__ */ e(g, { title: "Stop Sharing", destructive: !0, onClick: () => l(!1) })
                    ] }) })
                  ] }) }),
                  /* @__PURE__ */ e(ee, { name: "SearchBar", note: "Resting state: the magnifier centred, Cancel not yet earned.", children: /* @__PURE__ */ e("div", { className: "may-catalog-mobile__strip", children: /* @__PURE__ */ e(
                    Ga,
                    {
                      value: v,
                      onValueChange: p,
                      onCancel: () => p(""),
                      placeholder: "Games, Apps, Stories and More",
                      "aria-label": "Search the App Store"
                    }
                  ) }) }),
                  /* @__PURE__ */ e(ee, { name: "CapsuleTabs", note: "A scrolling filter strip — the selected capsule rides a sliding thumb.", children: /* @__PURE__ */ e("div", { className: "may-catalog-mobile__strip", children: /* @__PURE__ */ e(
                    Ea,
                    {
                      value: r,
                      onValueChange: o,
                      "aria-label": "Result kind",
                      items: [
                        { value: "all", label: "All" },
                        { value: "apps", label: "Apps", count: 24 },
                        { value: "games", label: "Games", count: 8 },
                        { value: "arcade", label: "Arcade" },
                        { value: "stories", label: "Stories" }
                      ]
                    }
                  ) }) }),
                  /* @__PURE__ */ e(ee, { name: "Selector", note: "Cards, two up: every choice visible and one tap away.", children: /* @__PURE__ */ e("div", { className: "may-catalog-mobile__strip", children: /* @__PURE__ */ e(
                    at,
                    {
                      value: d,
                      onChange: u,
                      "aria-label": "Focus",
                      columns: 2,
                      options: [
                        { value: "personal", label: "Personal", icon: /* @__PURE__ */ e(Er, {}) },
                        { value: "work", label: "Work", icon: /* @__PURE__ */ e(_r, {}) },
                        { value: "sleep", label: "Sleep", icon: /* @__PURE__ */ e(Hr, {}) },
                        { value: "driving", label: "Driving", icon: /* @__PURE__ */ e(Vr, {}) }
                      ]
                    }
                  ) }) }),
                  /* @__PURE__ */ e(ee, { name: "SwipeAction", note: "Drag a row: the first item on a side is the one a full swipe fires.", children: /* @__PURE__ */ e("div", { className: "may-catalog-mobile__strip", children: /* @__PURE__ */ e(I, { header: "Inbox", footer: R, children: T.map((D) => /* @__PURE__ */ e(
                    it,
                    {
                      leading: [
                        {
                          label: D.unread ? "Read" : "Unread",
                          tone: "tint",
                          icon: /* @__PURE__ */ e(Lr, {}),
                          onSelect: () => G(D.id, D.unread)
                        }
                      ],
                      trailing: [
                        {
                          label: D.flagged ? "Unflag" : "Flag",
                          tone: "warning",
                          icon: /* @__PURE__ */ e(Wr, {}),
                          onSelect: () => Pe(D.id)
                        },
                        {
                          label: "Remind",
                          tone: "neutral",
                          icon: /* @__PURE__ */ e(Gr, {}),
                          onSelect: () => f("Reminded tomorrow at 9:00 AM.")
                        }
                      ],
                      children: /* @__PURE__ */ e(
                        g,
                        {
                          title: D.from,
                          subtitle: D.subject,
                          detail: D.at,
                          leading: /* @__PURE__ */ a(
                            "span",
                            {
                              style: {
                                width: "var(--may-space-3)",
                                display: "inline-flex",
                                justifyContent: "center"
                              },
                              children: [
                                D.unread && /* @__PURE__ */ e(W, { dot: !0, "aria-label": "Unread" }),
                                !D.unread && D.flagged && /* @__PURE__ */ e(W, { dot: !0, tone: "warning", "aria-label": "Flagged" })
                              ]
                            }
                          ),
                          onClick: () => G(D.id, !0)
                        }
                      )
                    },
                    D.id
                  )) }) }) }),
                  /* @__PURE__ */ e(ee, { name: "PullToRefresh", note: "It owns its scroller, so it is given a bounded height and fills it.", children: /* @__PURE__ */ e("div", { className: "may-catalog-mobile__scroller", children: /* @__PURE__ */ e(
                    tt,
                    {
                      style: { height: "100%" },
                      onRefresh: async () => {
                        await new Promise((D) => setTimeout(D, 1200)), A("Updated Just Now");
                      },
                      children: /* @__PURE__ */ e("div", { style: { padding: "var(--may-space-3)" }, children: /* @__PURE__ */ a(I, { header: "Available Updates", footer: w, children: [
                        /* @__PURE__ */ e(g, { title: "Halide Mark II", subtitle: "Version 4.1.3 · 84.2 MB", detail: "Update", onClick: () => {
                        } }),
                        /* @__PURE__ */ e(g, { title: "Overcast", subtitle: "Version 2024.9 · 21.6 MB", detail: "Update", onClick: () => {
                        } }),
                        /* @__PURE__ */ e(g, { title: "Things 3", subtitle: "Version 3.20.4 · 39.1 MB", detail: "Update", onClick: () => {
                        } })
                      ] }) })
                    }
                  ) }) }),
                  /* @__PURE__ */ e(
                    ee,
                    {
                      name: "FloatingBubble",
                      note: "Unframed on purpose: it is fixed to the viewport, so it parks on the window's edge, not this box's.",
                      children: /* @__PURE__ */ a("div", { className: "may-catalog-mobile__untransformed", children: [
                        /* @__PURE__ */ a(I, { header: "Accessibility", footer: "Throw the bubble at either edge of the window.", children: [
                          /* @__PURE__ */ e(g, { title: "AssistiveTouch", detail: "On", onClick: () => {
                          } }),
                          /* @__PURE__ */ e(g, { title: "Back Tap", detail: "Screenshot", onClick: () => {
                          } }),
                          /* @__PURE__ */ e(g, { title: "Reachability", detail: "On", onClick: () => {
                          } })
                        ] }),
                        /* @__PURE__ */ e(dr, { icon: /* @__PURE__ */ e($r, {}), "aria-label": "AssistiveTouch" })
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "Nine components, and only three of them draw chrome. That is the shape of the family: mayui/mobile is the phone’s furniture and its two gestures — everything a screen actually holds comes from the adaptive set, which is why nothing here is a phone variant of a component that already exists." })
              ]
            }
          )
        }
      )
    }
  );
}
function ee({ name: i, note: n, children: r }) {
  return /* @__PURE__ */ a(
    j,
    {
      as: "section",
      surface: "base",
      radius: "card",
      padding: 4,
      className: "may-catalog-mobile__entry",
      children: [
        /* @__PURE__ */ e("div", { className: "may-catalog-mobile__stage", children: r }),
        /* @__PURE__ */ a("div", { className: "may-catalog-mobile__caption", children: [
          /* @__PURE__ */ e(t, { as: "span", variant: "caption-1", tone: "secondary", mono: !0, children: i }),
          n && /* @__PURE__ */ e(t, { as: "span", variant: "caption-2", tone: "tertiary", children: n })
        ] })
      ]
    }
  );
}
const Nr = [
  {
    id: "kucuk-kyoto",
    from: "Marina Küçük",
    subject: "Kyoto line slips a week",
    at: "9:38 AM",
    unread: !0,
    flagged: !1
  },
  {
    id: "app-store-review",
    from: "App Store Review",
    subject: "Halide 4.1.3 is now Ready for Sale",
    at: "8:12 AM",
    unread: !1,
    flagged: !0
  }
], Br = () => /* @__PURE__ */ e(be, { "aria-hidden": !0 }), Fr = () => /* @__PURE__ */ e(Ii, { "aria-hidden": !0 }), Qa = ({ filled: i = !1 }) => i ? /* @__PURE__ */ e(Ma, { "aria-hidden": !0 }) : /* @__PURE__ */ e(Ca, { "aria-hidden": !0 }), Xa = ({ filled: i = !1 }) => i ? /* @__PURE__ */ e(bt, { "aria-hidden": !0 }) : /* @__PURE__ */ e(wt, { "aria-hidden": !0 }), Za = ({ filled: i = !1 }) => i ? /* @__PURE__ */ e(kt, { "aria-hidden": !0 }) : /* @__PURE__ */ e(St, { "aria-hidden": !0 }), zr = () => /* @__PURE__ */ e(Ct, { "aria-hidden": !0 }), Lr = () => /* @__PURE__ */ e($e, { "aria-hidden": !0 }), Wr = () => /* @__PURE__ */ e(Mt, { "aria-hidden": !0 }), Gr = () => /* @__PURE__ */ e(Pi, { "aria-hidden": !0 }), Er = () => /* @__PURE__ */ e(Ti, { "aria-hidden": !0 }), _r = () => /* @__PURE__ */ e(xt, { "aria-hidden": !0 }), Hr = () => /* @__PURE__ */ e(ia, { "aria-hidden": !0 }), Vr = () => /* @__PURE__ */ e(At, { "aria-hidden": !0 }), $r = () => /* @__PURE__ */ e(It, { "aria-hidden": !0 });
function Ur() {
  const i = ve(null), [n, r] = h(!1), [o, d] = h(!0), [u, s] = h(!1), [l, v] = h(
    "This will not affect any of your data or media."
  );
  return /* @__PURE__ */ a("div", { style: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "scroll-area",
        style: {
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          background: "var(--may-color-bg)"
        },
        children: [
          /* @__PURE__ */ e(Ke, { title: "Settings", largeTitle: !0, scrollRef: i }),
          /* @__PURE__ */ e("div", { style: { padding: "0 var(--may-space-4) var(--may-space-2)" }, children: /* @__PURE__ */ e(Ie, { fullWidth: !0, placeholder: "Search", "aria-label": "Search settings" }) }),
          /* @__PURE__ */ a(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "var(--may-space-2)",
                padding: "var(--may-space-2) var(--may-space-4) calc(var(--may-inset-bottom) + var(--may-space-10))"
              },
              children: [
                /* @__PURE__ */ e(I, { footer: "iCloud+ with 2 TB renews on 12 October.", children: /* @__PURE__ */ e(
                  g,
                  {
                    leading: /* @__PURE__ */ e(B, { name: "Marcus Whitfield", size: "lg" }),
                    title: "Marcus Whitfield",
                    subtitle: "Apple ID, iCloud, Media & Purchases",
                    onClick: () => {
                    }
                  }
                ) }),
                /* @__PURE__ */ a(
                  I,
                  {
                    header: "Connections",
                    footer: "Personal Hotspot shares this iPhone's cellular data with your nearby devices.",
                    children: [
                      /* @__PURE__ */ e(
                        g,
                        {
                          leading: /* @__PURE__ */ e(C, { gradient: "orange", children: /* @__PURE__ */ e(Tt, { "aria-hidden": !0 }) }),
                          title: "Airplane Mode",
                          accessory: /* @__PURE__ */ e(
                            Ae,
                            {
                              checked: n,
                              onCheckedChange: r,
                              "aria-label": "Airplane Mode"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ e(
                        g,
                        {
                          leading: /* @__PURE__ */ e(C, { gradient: "blue", children: /* @__PURE__ */ e(Pt, { "aria-hidden": !0 }) }),
                          title: "Wi-Fi",
                          detail: n ? "Off" : "HomeNet",
                          onClick: () => {
                          }
                        }
                      ),
                      /* @__PURE__ */ e(
                        g,
                        {
                          leading: /* @__PURE__ */ e(C, { gradient: "blue", children: /* @__PURE__ */ e(Dt, { "aria-hidden": !0 }) }),
                          title: "Bluetooth",
                          detail: "On",
                          onClick: () => {
                          }
                        }
                      ),
                      /* @__PURE__ */ e(
                        g,
                        {
                          leading: /* @__PURE__ */ e(C, { gradient: "green", children: /* @__PURE__ */ e(Rt, { "aria-hidden": !0 }) }),
                          title: "Cellular",
                          detail: "12.4 GB used",
                          onClick: () => {
                          }
                        }
                      ),
                      /* @__PURE__ */ e(
                        g,
                        {
                          leading: /* @__PURE__ */ e(C, { gradient: "green", children: /* @__PURE__ */ e(Ot, { "aria-hidden": !0 }) }),
                          title: "Personal Hotspot",
                          accessory: /* @__PURE__ */ e(Ae, { checked: o, onCheckedChange: d, "aria-label": "Personal Hotspot" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ a(I, { header: "System", footer: "Screen Time reports cover the last seven days.", children: [
                  /* @__PURE__ */ e(
                    g,
                    {
                      leading: /* @__PURE__ */ e(C, { gradient: "gray", children: /* @__PURE__ */ e(Nt, { "aria-hidden": !0 }) }),
                      title: "General",
                      detail: "1 Update",
                      onClick: () => {
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    g,
                    {
                      leading: /* @__PURE__ */ e(C, { gradient: "blue", children: /* @__PURE__ */ e(Di, { "aria-hidden": !0 }) }),
                      title: "Display & Brightness",
                      detail: "Automatic",
                      onClick: () => {
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    g,
                    {
                      leading: /* @__PURE__ */ e(C, { gradient: "pink", children: /* @__PURE__ */ e(Ri, { "aria-hidden": !0 }) }),
                      title: "Sounds & Haptics",
                      onClick: () => {
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    g,
                    {
                      leading: /* @__PURE__ */ e(C, { gradient: "indigo", children: /* @__PURE__ */ e(Bt, { "aria-hidden": !0 }) }),
                      title: "Screen Time",
                      detail: "3h 12m",
                      onClick: () => {
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ e(I, { footer: l, children: /* @__PURE__ */ e(
                  g,
                  {
                    title: "Reset All Settings",
                    destructive: !0,
                    chevron: !1,
                    onClick: () => s(!0)
                  }
                ) })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(
      na,
      {
        open: u,
        title: "Reset All Settings?",
        description: "Every system setting returns to its default. Your apps, data and media are left alone.",
        confirmLabel: "Reset",
        destructive: !0,
        onConfirm: () => {
          r(!1), d(!0), v("All settings were reset to their defaults just now."), s(!1);
        },
        onCancel: () => s(!1)
      }
    )
  ] });
}
function jr() {
  const [i, n] = h(Kr), [r, o] = h("Updated Just Now"), [d, u] = h(["reyes-budget"]), s = (b, R) => n((f) => f.map((G) => G.id === b ? { ...G, unread: !R } : G)), l = (b) => n((R) => R.filter((f) => f.id !== b)), v = (b) => u(
    (R) => R.includes(b) ? R.filter((f) => f !== b) : [...R, b]
  ), p = i.filter((b) => b.group === "today"), w = i.filter((b) => b.group === "earlier"), A = i.filter((b) => b.unread).length, T = (b) => /* @__PURE__ */ e(
    it,
    {
      leading: [
        {
          label: b.unread ? "Read" : "Unread",
          tone: "tint",
          icon: /* @__PURE__ */ e(ba, { "aria-hidden": !0 }),
          onSelect: () => s(b.id, b.unread)
        },
        { label: "Remind", tone: "neutral", icon: /* @__PURE__ */ e(Oi, { "aria-hidden": !0 }), onSelect: () => {
        } }
      ],
      trailing: [
        /* First = primary = the one a full swipe fires. */
        { label: "Archive", tone: "tint", icon: /* @__PURE__ */ e(He, { "aria-hidden": !0 }), onSelect: () => l(b.id) },
        {
          label: d.includes(b.id) ? "Unflag" : "Flag",
          tone: "warning",
          icon: /* @__PURE__ */ e(Me, { "aria-hidden": !0 }),
          onSelect: () => v(b.id)
        },
        { label: "Trash", tone: "danger", icon: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }), onSelect: () => l(b.id) }
      ],
      children: /* @__PURE__ */ e(
        g,
        {
          title: b.from,
          subtitle: b.subject,
          detail: b.at,
          leading: /* @__PURE__ */ a(
            "span",
            {
              style: {
                width: "var(--may-space-3)",
                display: "inline-flex",
                justifyContent: "center"
              },
              children: [
                b.unread && /* @__PURE__ */ e(W, { dot: !0, "aria-label": "Unread" }),
                !b.unread && d.includes(b.id) && /* @__PURE__ */ e(W, { dot: !0, tone: "warning", "aria-label": "Flagged" })
              ]
            }
          ),
          onClick: () => s(b.id, !0)
        }
      )
    },
    b.id
  );
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        /* The FAB is positioned against this, so it can clear the toolbar
         * instead of being pinned to the bottom of the frame. */
        position: "relative",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a("div", { style: { flexShrink: 0, background: "var(--may-color-surface)" }, children: [
          /* @__PURE__ */ e(
            Te,
            {
              position: "static",
              separator: !1,
              title: "Inbox",
              backLabel: "Mailboxes",
              onBack: () => {
              },
              trailing: /* @__PURE__ */ e(m, { variant: "plain", size: "sm", children: "Edit" })
            }
          ),
          /* @__PURE__ */ e(Ga, { placeholder: "Search", "aria-label": "Search all mailboxes" })
        ] }),
        /* @__PURE__ */ e(
          tt,
          {
            style: { flex: 1, minHeight: 0 },
            onRefresh: async () => {
              await new Promise((b) => setTimeout(b, 1200)), o("Updated Just Now"), n((b) => [Yr, ...b]);
            },
            children: /* @__PURE__ */ a(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--may-space-2)",
                  /* Room under the last row for the FAB to float over. */
                  padding: "var(--may-space-2) var(--may-space-4) var(--may-space-16)"
                },
                children: [
                  p.length > 0 && /* @__PURE__ */ e(I, { header: "Today", footer: A === 0 ? "No unread messages." : void 0, children: p.map(T) }),
                  w.length > 0 && /* @__PURE__ */ e(I, { header: "Earlier", footer: "Swipe a message for Archive, Flag and Trash.", children: w.map(T) }),
                  i.length === 0 && /* @__PURE__ */ e(
                    K,
                    {
                      glyph: /* @__PURE__ */ e(ba, { "aria-hidden": !0 }),
                      title: "No Mail",
                      description: "Everything has been archived. Pull down to check for new messages."
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ a(te, { placement: "bottom", separator: !0, safeArea: !0, children: [
          /* @__PURE__ */ e(S, { "aria-label": "Filter by unread", onClick: () => o(`Filtered · ${A} unread`), children: /* @__PURE__ */ e(Ft, { "aria-hidden": !0 }) }),
          /* @__PURE__ */ e(We, {}),
          /* @__PURE__ */ e(t, { variant: "caption-1", tone: "secondary", as: "span", children: r }),
          /* @__PURE__ */ e(We, {})
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            style: {
              position: "absolute",
              insetInlineEnd: "var(--may-space-5)",
              insetBlockEnd: "calc(var(--may-control-h) + var(--may-inset-bottom) + var(--may-space-4) + var(--may-space-4))",
              zIndex: "var(--may-z-nav)"
            },
            children: /* @__PURE__ */ e(ki, { icon: /* @__PURE__ */ e(Ve, { "aria-hidden": !0 }), "aria-label": "New Message" })
          }
        )
      ]
    }
  );
}
const Kr = [
  {
    id: "reyes-budget",
    from: "Daniela Reyes",
    subject: "Q4 budget — one line item left to sign off",
    at: "9:41 AM",
    unread: !0,
    group: "today"
  },
  {
    id: "testflight",
    from: "TestFlight",
    subject: "May UI 1.2 (build 214) is ready to test",
    at: "8:26 AM",
    unread: !0,
    group: "today"
  },
  {
    id: "okonkwo",
    from: "Tobenna Okonkwo",
    subject: "Re: Milestone 3 review — notes from Thursday",
    at: "7:58 AM",
    unread: !1,
    group: "today"
  },
  {
    id: "appstore",
    from: "App Store",
    subject: "Your receipt — Things 3, £49.99",
    at: "Yesterday",
    unread: !1,
    group: "earlier"
  },
  {
    id: "hsu",
    from: "Mei-Lin Hsu",
    subject: "Ferry tickets for the 14th are booked",
    at: "Yesterday",
    unread: !0,
    group: "earlier"
  },
  {
    id: "radar",
    from: "Feedback Assistant",
    subject: "FB13391045 was resolved in the latest seed",
    at: "Monday",
    unread: !1,
    group: "earlier"
  },
  {
    id: "lindqvist",
    from: "Anders Lindqvist",
    subject: "Type scale: switching headline to 17/22",
    at: "Monday",
    unread: !1,
    group: "earlier"
  }
], Yr = {
  id: "iimura",
  from: "Saoirse Iimura",
  subject: "Design review moved to 2:30 — same room",
  at: "now",
  unread: !0,
  group: "today"
};
function qr() {
  const i = ve(null), [n, r] = h(!1);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-surface)"
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            ref: i,
            "data-slot": "scroll-area",
            style: { flex: 1, minHeight: 0, overflowY: "auto" },
            children: [
              /* @__PURE__ */ e(
                Te,
                {
                  backLabel: "Inbox",
                  onBack: () => {
                  },
                  scrollRef: i,
                  trailing: /* @__PURE__ */ e(
                    ye,
                    {
                      placement: "bottom-end",
                      "aria-label": "Message actions",
                      trigger: /* @__PURE__ */ e(S, { "aria-label": "More", children: /* @__PURE__ */ e(be, { "aria-hidden": !0 }) }),
                      items: [
                        { label: "Reply", icon: /* @__PURE__ */ e(Le, { "aria-hidden": !0 }), shortcut: "⌘R", onSelect: () => {
                        } },
                        { label: "Reply All", icon: /* @__PURE__ */ e(Qr, {}), shortcut: "⇧⌘R", onSelect: () => {
                        } },
                        { label: "Forward", icon: /* @__PURE__ */ e(Qe, { "aria-hidden": !0 }), shortcut: "⇧⌘F", onSelect: () => {
                        } },
                        {
                          label: n ? "Unflag" : "Flag",
                          icon: /* @__PURE__ */ e(Me, { "aria-hidden": !0 }),
                          shortcut: "⇧⌘L",
                          separator: !0,
                          onSelect: () => r((o) => !o)
                        },
                        { label: "Move to Folder…", icon: /* @__PURE__ */ e(se, { "aria-hidden": !0 }), shortcut: "⇧⌘M", onSelect: () => {
                        } },
                        /* `separator` opens a break ABOVE the item, which is how the
                           destructive action is fenced off from everything above it. */
                        {
                          label: "Trash",
                          icon: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }),
                          shortcut: "⌘⌫",
                          destructive: !0,
                          separator: !0,
                          onSelect: () => {
                          }
                        }
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(
                "div",
                {
                  style: {
                    padding: "var(--may-space-2) var(--may-space-4) calc(var(--may-inset-bottom) + var(--may-space-6))",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--may-space-4)"
                  },
                  children: [
                    /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "start", fullWidth: !0, children: [
                      /* @__PURE__ */ e(B, { name: "Priya Raghunathan", size: "md" }),
                      /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
                        /* @__PURE__ */ e(t, { variant: "headline", as: "span", style: { display: "block" }, children: "Priya Raghunathan" }),
                        /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", as: "span", style: { display: "block" }, children: "to me" })
                      ] }),
                      /* @__PURE__ */ a(c, { direction: "row", gap: 2, align: "center", children: [
                        n && /* @__PURE__ */ e(Jr, {}),
                        /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", as: "span", children: "9:41 AM" })
                      ] })
                    ] }),
                    /* @__PURE__ */ e(t, { variant: "title-3", children: "Milestone 3 — where the rebuild actually stands" }),
                    /* @__PURE__ */ e(ce, {}),
                    /* @__PURE__ */ a(c, { direction: "column", gap: 4, children: [
                      /* @__PURE__ */ e(t, { variant: "body", children: "Morning. Ahead of Thursday I wanted to get the real state of the rebuild in front of everyone in writing, rather than leaving it to twenty minutes of screen sharing." }),
                      /* @__PURE__ */ e(t, { variant: "body", children: "All seventy-four components are through review and on the new token layer. The three that were still carrying their own colours — the toolbar, the swipe row and the pull indicator — now read from the semantic tier like everything else, so a theme change is one file again. Dark mode came out of that for free, which was the part I was least sure about." }),
                      /* @__PURE__ */ e(t, { variant: "body", children: "The one genuinely open question is the phone toolbar. On a 390-point screen a five-item bar leaves each target under the 44-point minimum, so I have cut it to four and moved Move to Folder into the overflow menu. Nobody has complained in the internal build, but it is a behaviour change and I would rather we decided it than discovered it." }),
                      /* @__PURE__ */ e(t, { variant: "body", children: "Numbers, so nobody has to ask: the bundle is 118 KB gzipped, down from 186 KB; first paint in the gallery is 240 ms on the reference iPhone; and the visual diff run is green apart from two intentional shifts in the search pill. Both are in the attached review deck." }),
                      /* @__PURE__ */ e(t, { variant: "body", children: "If the toolbar call goes our way I can have the release candidate cut by Friday lunchtime." }),
                      /* @__PURE__ */ e(t, { variant: "body", tone: "secondary", children: "— Priya" })
                    ] }),
                    /* @__PURE__ */ a(c, { direction: "row", gap: 2, wrap: !0, children: [
                      /* @__PURE__ */ e(ge, { leadingIcon: /* @__PURE__ */ e(Xe, { "aria-hidden": !0 }), children: "Milestone-3-Review.pdf · 2.4 MB" }),
                      /* @__PURE__ */ e(ge, { leadingIcon: /* @__PURE__ */ e(Xe, { "aria-hidden": !0 }), children: "Burndown-September.png · 812 KB" })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(te, { placement: "bottom", separator: !0, safeArea: !0, children: [
          /* @__PURE__ */ e(S, { "aria-label": "Move to Trash", tone: "danger", children: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }) }),
          /* @__PURE__ */ e(We, {}),
          /* @__PURE__ */ e(S, { "aria-label": "Reply", children: /* @__PURE__ */ e(Le, { "aria-hidden": !0 }) }),
          /* @__PURE__ */ e(S, { "aria-label": "Forward", children: /* @__PURE__ */ e(Qe, { "aria-hidden": !0 }) })
        ] })
      ]
    }
  );
}
function Jr() {
  return /* @__PURE__ */ e(
    "span",
    {
      "aria-label": "Flagged",
      role: "img",
      style: { display: "inline-flex", color: "var(--may-color-warning)" },
      children: /* @__PURE__ */ e(Me, { "aria-hidden": !0 })
    }
  );
}
const ei = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function Qr() {
  return /* @__PURE__ */ a("svg", { viewBox: "0 0 20 20", "aria-hidden": !0, focusable: "false", children: [
    /* @__PURE__ */ e("path", { d: "M5.5 4.5.5 9l5 4.5", ...ei }),
    /* @__PURE__ */ e("path", { d: "M10 4.5 5 9l5 4.5V11c3.6 0 5.9 1.4 7.5 4.5.2-5.6-2.2-8.6-7.5-8.8z", ...ei })
  ] });
}
const la = 257;
function oa(i) {
  const n = Math.max(0, Math.round(i));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}
const Xr = { off: "all", all: "one", one: "off" };
function Zr() {
  const [i, n] = h(102), [r, o] = h(!0), [d, u] = h(62), [s, l] = h(!1), [v, p] = h("off"), [w, A] = h(!1);
  return /* @__PURE__ */ a(
    "div",
    {
      "data-may-theme": "dark",
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--may-space-4)",
        background: "var(--may-color-bg)",
        padding: `calc(var(--may-inset-top) + var(--may-space-3)) var(--may-space-5)
          calc(var(--may-inset-bottom) + var(--may-space-4))`
      },
      children: [
        /* @__PURE__ */ a(c, { direction: "row", align: "center", justify: "between", children: [
          /* @__PURE__ */ e(S, { "aria-label": "Minimise player", size: "sm", tone: "neutral", children: /* @__PURE__ */ e(Ia, { "aria-hidden": !0 }) }),
          /* @__PURE__ */ a(c, { gap: 0, align: "center", children: [
            /* @__PURE__ */ e(t, { variant: "caption-2", tone: "tertiary", weight: "semibold", style: { letterSpacing: "0.08em" }, children: "PLAYING FROM ALBUM" }),
            /* @__PURE__ */ e(t, { variant: "caption-1", weight: "semibold", children: "Aurora Drift" })
          ] }),
          /* @__PURE__ */ e(S, { "aria-label": "More options", size: "sm", tone: "neutral", children: /* @__PURE__ */ e(be, { "aria-hidden": !0 }) })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            style: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ a(
              j,
              {
                radius: "sheet",
                shadow: "2xl",
                "aria-label": "Album artwork: Aurora Drift by Solar Fields",
                role: "img",
                style: {
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                  // Stand-in for a cover image, mixed from the system palette so it
                  // still reads as artwork with no asset to load.
                  background: "linear-gradient(155deg, var(--may-pink) 0%, var(--may-purple) 46%, var(--may-indigo) 100%)",
                  // The press scale of the transport buttons is enough motion on this
                  // screen; the artwork only ever settles into its box.
                  transform: r ? "scale(1)" : "scale(0.94)",
                  transition: "transform var(--may-duration-settle) var(--may-spring-snappy)"
                },
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      "aria-hidden": !0,
                      style: {
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(70% 55% at 22% 14%, var(--may-orange), transparent 62%)",
                        opacity: 0.55
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      "aria-hidden": !0,
                      style: {
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(60% 50% at 84% 88%, var(--may-cyan), transparent 58%)",
                        opacity: 0.45
                      }
                    }
                  ),
                  /* @__PURE__ */ a(
                    c,
                    {
                      gap: 1,
                      style: {
                        position: "absolute",
                        insetInline: "var(--may-space-5)",
                        insetBlockEnd: "var(--may-space-5)"
                      },
                      children: [
                        /* @__PURE__ */ e(
                          t,
                          {
                            variant: "caption-2",
                            weight: "bold",
                            style: { color: "var(--may-on-color)", letterSpacing: "0.22em" },
                            children: "SOLAR FIELDS"
                          }
                        ),
                        /* @__PURE__ */ e(t, { variant: "title-3", weight: "bold", style: { color: "var(--may-on-color)" }, children: "Aurora Drift" })
                      ]
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ a(c, { direction: "row", align: "center", justify: "between", gap: 3, children: [
          /* @__PURE__ */ a(c, { gap: 0, style: { minWidth: 0 }, children: [
            /* @__PURE__ */ e(t, { variant: "title-2", clamp: 1, children: "Ultraviolet" }),
            /* @__PURE__ */ e(t, { variant: "body", tone: "secondary", clamp: 1, children: "Solar Fields" })
          ] }),
          /* @__PURE__ */ e(
            S,
            {
              "aria-label": w ? "Remove from favourites" : "Add to favourites",
              "aria-pressed": w,
              variant: "gray",
              round: !0,
              tone: w ? "danger" : "neutral",
              onClick: () => A((T) => !T),
              children: w ? /* @__PURE__ */ e(Ma, { "aria-hidden": !0 }) : /* @__PURE__ */ e(Ca, { "aria-hidden": !0 })
            }
          )
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            "aria-label": "Playback position",
            value: i,
            max: la,
            onValueChange: n,
            tone: "neutral",
            formatValue: oa,
            leading: /* @__PURE__ */ e(t, { as: "span", variant: "caption-1", tone: "tertiary", mono: !0, children: oa(i) }),
            trailing: /* @__PURE__ */ a(t, { as: "span", variant: "caption-1", tone: "tertiary", mono: !0, children: [
              "−",
              oa(la - i)
            ] })
          }
        ),
        /* @__PURE__ */ a(c, { direction: "row", align: "center", justify: "between", children: [
          /* @__PURE__ */ e(
            S,
            {
              "aria-label": "Shuffle",
              "aria-pressed": s,
              tone: s ? "tint" : "neutral",
              onClick: () => l((T) => !T),
              children: /* @__PURE__ */ e(zt, { "aria-hidden": !0 })
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              "aria-label": "Previous track",
              size: "lg",
              tone: "neutral",
              style: { fontSize: "var(--may-text-title-3)" },
              onClick: () => n(0),
              children: /* @__PURE__ */ e(Lt, { "aria-hidden": !0 })
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              "aria-label": r ? "Pause" : "Play",
              size: "lg",
              round: !0,
              variant: "gray",
              tone: "neutral",
              style: { fontSize: "var(--may-text-title-1)" },
              onClick: () => o((T) => !T),
              children: r ? /* @__PURE__ */ e(Wt, { "aria-hidden": !0 }) : /* @__PURE__ */ e(Gt, { "aria-hidden": !0 })
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              "aria-label": "Next track",
              size: "lg",
              tone: "neutral",
              style: { fontSize: "var(--may-text-title-3)" },
              onClick: () => n(la),
              children: /* @__PURE__ */ e(Et, { "aria-hidden": !0 })
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              "aria-label": `Repeat: ${v}`,
              "aria-pressed": v !== "off",
              tone: v === "off" ? "neutral" : "tint",
              onClick: () => p((T) => Xr[T]),
              children: v === "one" ? /* @__PURE__ */ e(el, {}) : /* @__PURE__ */ e(_t, { "aria-hidden": !0 })
            }
          )
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            "aria-label": "Volume",
            value: d,
            onValueChange: u,
            tone: "neutral",
            formatValue: (T) => `${T}%`,
            leading: /* @__PURE__ */ e(Ht, { "aria-hidden": !0 }),
            trailing: /* @__PURE__ */ e(Ri, { "aria-hidden": !0 })
          }
        ),
        /* @__PURE__ */ a(c, { direction: "row", align: "center", justify: "center", gap: 16, children: [
          /* @__PURE__ */ e(S, { "aria-label": "Lyrics", tone: "neutral", children: /* @__PURE__ */ e(Vt, { "aria-hidden": !0 }) }),
          /* @__PURE__ */ e(S, { "aria-label": "AirPlay: Living Room", tone: "tint", children: /* @__PURE__ */ e(al, {}) }),
          /* @__PURE__ */ e(S, { "aria-label": "Playing next", tone: "neutral", children: /* @__PURE__ */ e($t, { "aria-hidden": !0 }) })
        ] })
      ]
    }
  );
}
function el() {
  return /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, children: [
    /* @__PURE__ */ a(
      "g",
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ e("path", { d: "M6 10.5V9a3 3 0 013-3h9" }),
          /* @__PURE__ */ e("path", { d: "M15.4 3.4L18.6 6l-3.2 2.6" }),
          /* @__PURE__ */ e("path", { d: "M18 13.5V15a3 3 0 01-3 3H6" }),
          /* @__PURE__ */ e("path", { d: "M8.6 15.4L5.4 18l3.2 2.6" })
        ]
      }
    ),
    /* @__PURE__ */ e("path", { d: "M11.4 9.8h1.3v4.6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function al() {
  return /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, children: [
    /* @__PURE__ */ e(
      "path",
      {
        d: "M6.4 16H4.6A2.6 2.6 0 012 13.4V6.2a2.6 2.6 0 012.6-2.6h14.8A2.6 2.6 0 0122 6.2v7.2a2.6 2.6 0 01-2.6 2.6h-1.8",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ e("path", { d: "M12 13.6l5.2 6.8H6.8z", fill: "currentColor" })
  ] });
}
const il = 200, tl = 137.4;
function nl() {
  const [i, n] = h(!1);
  return /* @__PURE__ */ a("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "var(--may-color-bg)" }, children: [
    /* @__PURE__ */ a("div", { "data-slot": "scroll-area", style: { flex: 1, minHeight: 0, overflowY: "auto" }, children: [
      /* @__PURE__ */ e(Te, { title: "Apple Account", onBack: () => {
      }, backLabel: "Settings" }),
      /* @__PURE__ */ a(
        c,
        {
          gap: 5,
          style: {
            padding: `var(--may-space-4) var(--may-space-4)
              calc(var(--may-inset-bottom) + var(--may-space-8))`
          },
          children: [
            /* @__PURE__ */ e(j, { surface: "base", radius: "card", padding: 5, children: /* @__PURE__ */ a(c, { align: "center", gap: 3, children: [
              /* @__PURE__ */ e(B, { size: "xl", name: "Priya Raghunathan" }),
              /* @__PURE__ */ a(c, { align: "center", gap: 0, children: [
                /* @__PURE__ */ e(t, { variant: "title-2", children: "Priya Raghunathan" }),
                /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "priya.raghunathan@icloud.com" })
              ] }),
              /* @__PURE__ */ e(m, { variant: "tinted", size: "sm", pill: !0, leadingIcon: /* @__PURE__ */ e(Ut, { "aria-hidden": !0 }), children: "Edit Profile" })
            ] }) }),
            /* @__PURE__ */ a(Na, { header: "Device", footer: "This iPhone was activated on 22 September 2025.", children: [
              /* @__PURE__ */ e(U, { label: "Model", value: "iPhone 16 Pro" }),
              /* @__PURE__ */ e(U, { label: "Serial Number", value: "F2LW48ZXQ1M9" }),
              /* @__PURE__ */ e(U, { label: "Capacity", value: "256 GB" }),
              /* @__PURE__ */ e(U, { label: "iOS Version", value: "18.6.1" }),
              /* @__PURE__ */ e(U, { label: "Warranty", value: "AppleCare+ until 3 Mar 2027" })
            ] }),
            /* @__PURE__ */ a(I, { header: "Account", children: [
              /* @__PURE__ */ e(
                g,
                {
                  leading: /* @__PURE__ */ e(C, { gradient: "blue", children: /* @__PURE__ */ e(Ni, { "aria-hidden": !0 }) }),
                  title: "Payment & Shipping",
                  detail: "Apple Card",
                  onClick: () => {
                  }
                }
              ),
              /* @__PURE__ */ e(
                g,
                {
                  leading: /* @__PURE__ */ e(C, { gradient: "indigo", children: /* @__PURE__ */ e(jt, { "aria-hidden": !0 }) }),
                  title: "Subscriptions",
                  detail: "3",
                  onClick: () => {
                  }
                }
              ),
              /* @__PURE__ */ e(
                g,
                {
                  leading: /* @__PURE__ */ e(C, { gradient: "green", children: /* @__PURE__ */ e(Bi, { "aria-hidden": !0 }) }),
                  title: "Family Sharing",
                  subtitle: "4 members",
                  accessory: /* @__PURE__ */ a(Ba, { max: 3, size: "sm", children: [
                    /* @__PURE__ */ e(B, { name: "Devan Raghunathan" }),
                    /* @__PURE__ */ e(B, { name: "Anika Raghunathan" }),
                    /* @__PURE__ */ e(B, { name: "Leo Mbeki" }),
                    /* @__PURE__ */ e(B, { name: "Sofia Marchetti" })
                  ] }),
                  onClick: () => {
                  }
                }
              ),
              /* @__PURE__ */ e(
                g,
                {
                  leading: /* @__PURE__ */ e(C, { gradient: "teal", children: /* @__PURE__ */ e(Kt, { "aria-hidden": !0 }) }),
                  title: "Find My",
                  detail: "On",
                  onClick: () => {
                  }
                }
              )
            ] }),
            /* @__PURE__ */ a(H, { children: [
              /* @__PURE__ */ e(Q, { accessory: /* @__PURE__ */ e(W, { tone: "tint", children: "iCloud+" }), children: /* @__PURE__ */ e(X, { children: "Storage" }) }),
              /* @__PURE__ */ e(me, { children: /* @__PURE__ */ a(c, { gap: 3, children: [
                /* @__PURE__ */ e(
                  je,
                  {
                    label: "iCloud Storage",
                    value: tl,
                    max: il,
                    showValue: !0,
                    formatValue: (r, o) => `${r} GB of ${o} GB`
                  }
                ),
                /* @__PURE__ */ a(c, { direction: "row", gap: 4, wrap: !0, children: [
                  /* @__PURE__ */ e(W, { dot: !0, tone: "tint", size: "sm", children: "Photos · 84.2 GB" }),
                  /* @__PURE__ */ e(W, { dot: !0, tone: "success", size: "sm", children: "Backups · 38.6 GB" }),
                  /* @__PURE__ */ e(W, { dot: !0, tone: "warning", size: "sm", children: "Docs · 14.6 GB" })
                ] })
              ] }) }),
              /* @__PURE__ */ e(Oa, { children: /* @__PURE__ */ e(m, { variant: "tinted", fullWidth: !0, children: "Manage Storage" }) })
            ] }),
            /* @__PURE__ */ e(I, { footer: "Signing out removes iCloud Photos, Notes and Messages from this iPhone. Nothing is deleted from iCloud.", children: /* @__PURE__ */ e(g, { title: "Sign Out", destructive: !0, onClick: () => n(!0) }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(
      na,
      {
        open: i,
        title: "Sign out of your Apple Account?",
        description: "Photos, Notes and Messages stored in iCloud will be removed from this iPhone. They stay in iCloud.",
        confirmLabel: "Sign Out",
        destructive: !0,
        onConfirm: () => n(!1),
        onCancel: () => n(!1)
      }
    )
  ] });
}
const ot = [
  {
    app: "Messages",
    items: [
      {
        id: "msg-priya",
        title: "Priya Raghunathan",
        subtitle: "Landing at SFO around 6:40 — no need to leave early",
        time: "2m ago",
        gradient: "green",
        glyph: /* @__PURE__ */ e(ai, {}),
        unread: !0
      },
      {
        id: "msg-crit",
        title: "Design Crit",
        subtitle: "Marcus: the sheet detent finally feels right on device",
        time: "18m ago",
        gradient: "green",
        glyph: /* @__PURE__ */ e(ai, {}),
        unread: !0
      }
    ]
  },
  {
    app: "Security",
    footer: "Sign-in alerts cannot be turned off for your Apple Account.",
    items: [
      {
        id: "sec-signin",
        title: "Apple Account",
        subtitle: "New sign-in from MacBook Pro near Lisbon, Portugal",
        time: "9:41 AM",
        // Red is doing real work here: it is the one tile on the screen that
        // means "read me before the others", so nothing else may borrow it.
        gradient: "red",
        glyph: /* @__PURE__ */ e(ol, {}),
        unread: !0
      },
      {
        id: "sec-passwords",
        title: "Passwords",
        subtitle: "3 saved passwords appeared in a known data leak",
        time: "Yesterday",
        gradient: "red",
        glyph: /* @__PURE__ */ e(dl, {}),
        unread: !0
      }
    ]
  },
  {
    app: "Mail",
    items: [
      {
        id: "mail-dev",
        title: "Apple Developer",
        subtitle: "“Fieldnotes 2.4” is now Ready for Sale",
        time: "1h ago",
        gradient: "blue",
        glyph: /* @__PURE__ */ e(ii, {}),
        unread: !0
      },
      {
        id: "mail-nadia",
        title: "Nadia Whitcombe",
        subtitle: "Re: Q3 roadmap — a few notes before Thursday",
        time: "3h ago",
        gradient: "blue",
        glyph: /* @__PURE__ */ e(ii, {}),
        unread: !1
      }
    ]
  },
  {
    app: "Home & Photos",
    items: [
      {
        id: "home-door",
        title: "Front Door",
        subtitle: "Unlocked by Julian, then locked again at 4:12 PM",
        time: "5h ago",
        gradient: "orange",
        glyph: /* @__PURE__ */ e(sl, {}),
        unread: !0
      },
      {
        id: "photos-memory",
        title: "Memories",
        subtitle: "“Big Sur, Last October” is ready to watch",
        time: "Yesterday",
        gradient: "spectrum",
        glyph: /* @__PURE__ */ e(cl, {}),
        unread: !1
      }
    ]
  }
], rl = [
  { value: "all", label: "All" },
  { value: "unread", label: "Unread", count: ot.flatMap((i) => i.items).filter((i) => i.unread).length },
  { value: "mentions", label: "Mentions" }
];
function ll() {
  const i = ve(null), [n, r] = h("all"), [o, d] = h(!1), [u, s] = h(!0), l = o ? [] : ot.map((p) => ({
    ...p,
    items: n === "unread" ? p.items.filter((w) => w.unread) : p.items
  })).filter((p) => p.items.length > 0), v = n === "mentions";
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "scroll-area",
          style: {
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden"
          },
          children: [
            /* @__PURE__ */ e(
              Ke,
              {
                title: "Notifications",
                largeTitle: !0,
                scrollRef: i,
                trailing: /* @__PURE__ */ e(
                  m,
                  {
                    variant: "plain",
                    tone: "tint",
                    size: "md",
                    disabled: o,
                    onClick: () => d(!0),
                    children: "Clear All"
                  }
                )
              }
            ),
            /* @__PURE__ */ a(
              c,
              {
                direction: "column",
                gap: 4,
                style: {
                  paddingInline: "var(--may-space-4)",
                  paddingBottom: "calc(var(--may-inset-bottom) + var(--may-space-10))"
                },
                children: [
                  u && /* @__PURE__ */ e(
                    Fa,
                    {
                      tone: "warning",
                      icon: /* @__PURE__ */ e(hl, {}),
                      onClose: () => s(!1),
                      closeLabel: "Hide Focus notice",
                      action: /* @__PURE__ */ e(m, { variant: "plain", tone: "warning", size: "sm", onClick: () => s(!1), children: "Turn Off" }),
                      children: "Work Focus is on until 5:30 PM"
                    }
                  ),
                  /* @__PURE__ */ e(
                    Ea,
                    {
                      items: rl,
                      value: n,
                      onValueChange: r,
                      "aria-label": "Filter notifications"
                    }
                  ),
                  v ? /* @__PURE__ */ e(
                    K,
                    {
                      glyph: /* @__PURE__ */ e(ul, {}),
                      title: "No Mentions",
                      description: "When someone names you in a Messages thread or a shared note, it lands here — even while a Focus is on.",
                      action: /* @__PURE__ */ e(m, { variant: "tinted", size: "md", children: "Mention Settings" }),
                      style: { paddingBlock: "var(--may-space-12)" }
                    }
                  ) : l.length === 0 ? /* @__PURE__ */ e(
                    K,
                    {
                      glyph: /* @__PURE__ */ e(pl, {}),
                      title: o ? "All Caught Up" : "Nothing Unread",
                      description: o ? "Notifications you clear stay in Notification Centre for 30 days." : "Everything from the last day has been read.",
                      style: { paddingBlock: "var(--may-space-12)" }
                    }
                  ) : l.map((p) => /* @__PURE__ */ e(I, { header: p.app, footer: p.footer, children: p.items.map((w) => /* @__PURE__ */ e(
                    g,
                    {
                      leading: /* @__PURE__ */ e(C, { gradient: w.gradient, size: "sm", children: w.glyph }),
                      title: w.title,
                      subtitle: w.subtitle,
                      detail: (
                        /* An inline-flex span, not a Stack: `detail` renders
                           inside a span, and a div nested in one is invalid
                           markup even though a browser will draw it. */
                        /* @__PURE__ */ a(
                          "span",
                          {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "var(--may-space-2)"
                            },
                            children: [
                              w.unread && /* @__PURE__ */ e(W, { dot: !0, variant: "solid", tone: "tint", "aria-hidden": !0 }),
                              w.time
                            ]
                          }
                        )
                      ),
                      onClick: () => {
                      }
                    },
                    w.id
                  )) }, p.app)),
                  l.length > 0 && !v && /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", align: "center", children: "Notifications are grouped by app. Touch and hold a group to clear it." })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function ai() {
  return /* @__PURE__ */ e(qt, { "aria-hidden": !0 });
}
function ii() {
  return /* @__PURE__ */ e($e, { "aria-hidden": !0 });
}
function ol() {
  return /* @__PURE__ */ e(Jt, { "aria-hidden": !0 });
}
function dl() {
  return /* @__PURE__ */ e(Qt, { "aria-hidden": !0 });
}
function sl() {
  return /* @__PURE__ */ e(Xt, { "aria-hidden": !0 });
}
function cl() {
  return /* @__PURE__ */ e(zi, { "aria-hidden": !0 });
}
function hl() {
  return /* @__PURE__ */ e(ia, { "aria-hidden": !0 });
}
function ul() {
  return /* @__PURE__ */ e(Yt, { "aria-hidden": !0 });
}
function pl() {
  return /* @__PURE__ */ e(Fi, { "aria-hidden": !0 });
}
const ml = 0.08475, ti = 59, ke = (i) => i.toLocaleString("en-US", { style: "currency", currency: "USD" }), gl = [
  {
    value: "apple-pay",
    label: "Apple Pay",
    description: "Double-click the side button to confirm",
    icon: /* @__PURE__ */ e(vl, {})
  },
  {
    value: "visa-4242",
    label: "Visa •••• 4242",
    description: "Expires 09/28 · Julian Reyes",
    icon: /* @__PURE__ */ e(fl, {})
  },
  {
    value: "paypal",
    label: "PayPal",
    description: "j.reyes@icloud.com",
    icon: /* @__PURE__ */ e(bl, {})
  }
];
function yl() {
  const [i, n] = h(2), [r, o] = h("apple-pay"), d = ti * i, u = d >= 50 ? 0 : 6.95, s = Math.round(d * ml * 100) / 100, l = d + u + s;
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "scroll-area",
            style: { flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden" },
            children: [
              /* @__PURE__ */ e(Te, { title: "Checkout", onBack: () => {
              }, backLabel: "Bag" }),
              /* @__PURE__ */ a(
                c,
                {
                  direction: "column",
                  gap: 5,
                  style: {
                    paddingInline: "var(--may-space-4)",
                    paddingBlock: "var(--may-space-4)"
                  },
                  children: [
                    /* @__PURE__ */ e(
                      je,
                      {
                        value: 2,
                        max: 3,
                        size: "sm",
                        label: "Payment",
                        showValue: !0,
                        formatValue: (v, p) => `Step ${v} of ${p}`
                      }
                    ),
                    /* @__PURE__ */ a(H, { variant: "grouped", padding: "none", children: [
                      /* @__PURE__ */ a(Q, { children: [
                        /* @__PURE__ */ e(X, { children: "Your Order" }),
                        /* @__PURE__ */ e(ne, { children: "Arrives Thursday, Sep 18 · Free two-day shipping" })
                      ] }),
                      /* @__PURE__ */ a(me, { style: { paddingBottom: "var(--may-space-2)" }, children: [
                        /* @__PURE__ */ a(
                          c,
                          {
                            direction: "row",
                            gap: 4,
                            align: "start",
                            style: { paddingInline: "var(--may-space-4)" },
                            children: [
                              /* @__PURE__ */ e(
                                j,
                                {
                                  radius: "lg",
                                  style: {
                                    width: "var(--may-space-16)",
                                    height: "var(--may-space-16)",
                                    flexShrink: 0,
                                    background: "var(--may-grad-purple)"
                                  }
                                }
                              ),
                              /* @__PURE__ */ a(c, { direction: "column", gap: 1, style: { flex: 1, minWidth: 0 }, children: [
                                /* @__PURE__ */ e(t, { variant: "headline", clamp: 2, children: "FineWoven Wallet with MagSafe" }),
                                /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "Mulberry · iPhone 16 Pro" }),
                                /* @__PURE__ */ e(
                                  Ra,
                                  {
                                    value: i,
                                    onValueChange: n,
                                    min: 1,
                                    max: 9,
                                    size: "sm",
                                    formatValue: (v) => `${v} in bag`,
                                    decrementLabel: "Remove one",
                                    incrementLabel: "Add one",
                                    style: { alignSelf: "flex-start", marginBlockStart: "var(--may-space-2)" }
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ e(t, { variant: "callout", weight: "medium", children: ke(ti) })
                            ]
                          }
                        ),
                        /* @__PURE__ */ e(ce, {}),
                        /* @__PURE__ */ a(Na, { variant: "plain", layout: "inline", children: [
                          /* @__PURE__ */ e(
                            U,
                            {
                              label: `Subtotal (${i} ${i === 1 ? "item" : "items"})`,
                              value: ke(d)
                            }
                          ),
                          /* @__PURE__ */ e(
                            U,
                            {
                              label: "Shipping",
                              value: u === 0 ? /* @__PURE__ */ e(t, { as: "span", variant: "body", tone: "success", children: "Free" }) : ke(u)
                            }
                          ),
                          /* @__PURE__ */ e(U, { label: "Estimated Tax", value: ke(s) }),
                          /* @__PURE__ */ e(
                            U,
                            {
                              label: "Total",
                              value: /* @__PURE__ */ e(t, { as: "span", variant: "headline", weight: "semibold", children: ke(l) })
                            }
                          )
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ a(c, { direction: "column", gap: 3, children: [
                      /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "PAYMENT METHOD" }),
                      /* @__PURE__ */ e(
                        at,
                        {
                          variant: "card",
                          options: gl,
                          value: r,
                          onChange: o,
                          columns: 1,
                          "aria-label": "Payment method"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a(c, { direction: "column", gap: 4, children: [
                      /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "SHIPPING ADDRESS" }),
                      /* @__PURE__ */ e(k, { label: "Full Name", children: /* @__PURE__ */ e(N, { defaultValue: "Julian Reyes", autoComplete: "name", fullWidth: !0 }) }),
                      /* @__PURE__ */ e(k, { label: "Street Address", description: "Apartment or suite goes on the same line.", children: /* @__PURE__ */ e(N, { defaultValue: "1180 Guerrero St, Apt 4", autoComplete: "street-address", fullWidth: !0 }) }),
                      /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "start", children: [
                        /* @__PURE__ */ e("div", { style: { flex: 2, minWidth: 0 }, children: /* @__PURE__ */ e(k, { label: "City", children: /* @__PURE__ */ e(N, { defaultValue: "San Francisco", autoComplete: "address-level2", fullWidth: !0 }) }) }),
                        /* @__PURE__ */ e("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ e(k, { label: "ZIP", children: /* @__PURE__ */ e(
                          N,
                          {
                            defaultValue: "94110",
                            inputMode: "numeric",
                            autoComplete: "postal-code",
                            fullWidth: !0
                          }
                        ) }) })
                      ] })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a("div", { style: { flexShrink: 0, background: "var(--may-color-surface)" }, children: [
          /* @__PURE__ */ e(ce, {}),
          /* @__PURE__ */ a(
            c,
            {
              direction: "column",
              gap: 2,
              style: {
                padding: "var(--may-space-4)",
                paddingBottom: "calc(var(--may-inset-bottom) + var(--may-space-4))"
              },
              children: [
                /* @__PURE__ */ a(m, { size: "lg", pill: !0, fullWidth: !0, leadingIcon: /* @__PURE__ */ e(wl, {}), children: [
                  "Pay ",
                  ke(l)
                ] }),
                /* @__PURE__ */ e(t, { variant: "caption-1", tone: "tertiary", align: "center", children: "Free returns within 14 days. Your card is charged when the order ships." })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function vl() {
  return /* @__PURE__ */ e(Li, { "aria-hidden": !0 });
}
function fl() {
  return /* @__PURE__ */ e(Ni, { "aria-hidden": !0 });
}
function bl() {
  return /* @__PURE__ */ e(en, { "aria-hidden": !0 });
}
function wl() {
  return /* @__PURE__ */ e(Zt, { "aria-hidden": !0 });
}
const kl = 3;
function Sl() {
  const [i, n] = h(0), [r, o] = h(""), [d, u] = h(!1), [s, l] = h(!1), [v, p] = h(!1), w = [
    { title: "Apple ID", description: "Sign in" },
    { title: "Face ID", description: "Unlock" },
    { title: "Done", description: "All set", status: i === 2 ? "complete" : void 0 }
  ], A = /.+@.+\..+/.test(r.trim()), T = i === 0 ? A && d : !0, b = i === 0 ? "Continue" : i === 1 ? s ? "Continue" : "Set Up Later" : "Start Using May", R = () => n((f) => (f + 1) % kl);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "scroll-area",
            style: {
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              overflowX: "hidden",
              paddingInline: "var(--may-space-5)",
              paddingTop: "calc(var(--may-inset-top) + var(--may-space-4))",
              paddingBottom: "var(--may-space-6)"
            },
            children: [
              /* @__PURE__ */ e(Zi, { items: w, current: i, size: "sm", "aria-label": "Setup progress" }),
              /* @__PURE__ */ a("div", { style: { marginBlockStart: "var(--may-space-8)" }, children: [
                i === 0 && /* @__PURE__ */ a(c, { direction: "column", gap: 5, children: [
                  /* @__PURE__ */ a(c, { direction: "column", gap: 2, children: [
                    /* @__PURE__ */ e(t, { variant: "title-1", as: "h2", children: "Sign in with your Apple ID" }),
                    /* @__PURE__ */ e(t, { variant: "callout", tone: "secondary", children: "This is the account your purchases, iCloud data and subscriptions already belong to. Signing in here does not move any of it." })
                  ] }),
                  /* @__PURE__ */ e(
                    k,
                    {
                      label: "Apple ID",
                      description: "We’ll send a six-digit code to your other trusted devices.",
                      children: /* @__PURE__ */ e(
                        N,
                        {
                          type: "email",
                          value: r,
                          onChange: (f) => o(f.target.value),
                          placeholder: "you@icloud.com",
                          autoComplete: "username",
                          inputMode: "email",
                          prefix: /* @__PURE__ */ e(Cl, {}),
                          fullWidth: !0
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    _,
                    {
                      checked: d,
                      onCheckedChange: u,
                      description: "Includes the Apple Media Services agreement and the iCloud terms.",
                      children: "I agree to the Terms and Conditions"
                    }
                  ),
                  /* @__PURE__ */ e(ni, { onOpen: () => p(!0) })
                ] }),
                i === 1 && /* @__PURE__ */ a(c, { direction: "column", gap: 5, align: "center", children: [
                  /* @__PURE__ */ e(C, { gradient: "spectrum", size: "lg", children: /* @__PURE__ */ e(sa, {}) }),
                  /* @__PURE__ */ a(c, { direction: "column", gap: 2, align: "center", children: [
                    /* @__PURE__ */ e(t, { variant: "title-1", as: "h2", align: "center", children: "Unlock with Face ID" }),
                    /* @__PURE__ */ e(t, { variant: "callout", tone: "secondary", align: "center", children: "Face ID keeps you signed in without typing your password again. The map of your face is encrypted in the Secure Enclave and never leaves this iPhone." })
                  ] }),
                  s ? /* @__PURE__ */ a(c, { direction: "column", gap: 3, align: "center", fullWidth: !0, children: [
                    /* @__PURE__ */ e(t, { variant: "headline", tone: "success", align: "center", children: "Face ID is ready" }),
                    /* @__PURE__ */ e(m, { variant: "gray", size: "md", pill: !0, onClick: () => l(!1), children: "Set Up Again" })
                  ] }) : /* @__PURE__ */ e(
                    m,
                    {
                      variant: "tinted",
                      size: "lg",
                      pill: !0,
                      leadingIcon: /* @__PURE__ */ e(sa, {}),
                      onClick: () => l(!0),
                      children: "Enable Face ID"
                    }
                  ),
                  /* @__PURE__ */ e(ni, { onOpen: () => p(!0) })
                ] }),
                i === 2 && /* @__PURE__ */ a(c, { direction: "column", gap: 5, children: [
                  /* @__PURE__ */ e(
                    K,
                    {
                      glyph: /* @__PURE__ */ e(xl, {}),
                      title: "You’re All Set",
                      description: `${r.trim() || "Your Apple ID"} is signed in${s ? " and Face ID is ready" : ""}. Everything here can be changed later in Settings.`,
                      size: "lg",
                      as: "h2"
                    }
                  ),
                  /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", align: "center", children: "Setup took 3 steps. Nothing was uploaded." })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { style: { flexShrink: 0, background: "var(--may-color-surface)" }, children: /* @__PURE__ */ a(
          c,
          {
            direction: "row",
            gap: 3,
            align: "center",
            style: {
              padding: "var(--may-space-4)",
              paddingBottom: "calc(var(--may-inset-bottom) + var(--may-space-4))"
            },
            children: [
              i > 0 && /* @__PURE__ */ e(m, { variant: "gray", size: "lg", pill: !0, onClick: () => n((f) => f - 1), children: "Back" }),
              /* @__PURE__ */ e("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ e(m, { size: "lg", pill: !0, fullWidth: !0, disabled: !T, onClick: R, children: b }) })
            ]
          }
        ) }),
        /* @__PURE__ */ e(
          Sa,
          {
            open: v,
            onClose: () => p(!1),
            title: "Why we need this",
            description: "What each step is for, and what leaves the device.",
            footer: /* @__PURE__ */ e(m, { size: "lg", pill: !0, fullWidth: !0, onClick: () => p(!1), children: "Got It" }),
            children: /* @__PURE__ */ a(c, { direction: "column", gap: 5, children: [
              /* @__PURE__ */ e(
                da,
                {
                  gradient: "blue",
                  glyph: /* @__PURE__ */ e(Al, {}),
                  title: "Your Apple ID",
                  body: "It identifies the library, purchases and subscriptions this device restores from. We store the address, and nothing else from this screen."
                }
              ),
              /* @__PURE__ */ e(
                da,
                {
                  gradient: "green",
                  glyph: /* @__PURE__ */ e(sa, {}),
                  title: "Face ID",
                  body: "Only a yes-or-no answer ever reaches the app. The face data itself stays in the Secure Enclave, where even iOS cannot read it."
                }
              ),
              /* @__PURE__ */ e(
                da,
                {
                  gradient: "gray",
                  glyph: /* @__PURE__ */ e(Ml, {}),
                  title: "The terms",
                  body: "Required once per Apple ID. You can read the full agreement any time from Settings › Media & Purchases."
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function ni({ onOpen: i }) {
  return /* @__PURE__ */ e(m, { variant: "plain", tone: "tint", size: "sm", onClick: i, children: "Why we need this" });
}
function da({ gradient: i, glyph: n, title: r, body: o }) {
  return /* @__PURE__ */ a(c, { direction: "row", gap: 4, align: "start", children: [
    /* @__PURE__ */ e(C, { gradient: i, size: "md", children: n }),
    /* @__PURE__ */ a(c, { direction: "column", gap: 1, style: { flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ e(t, { variant: "headline", children: r }),
      /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: o })
    ] })
  ] });
}
function Cl() {
  return /* @__PURE__ */ e(an, { "aria-hidden": !0 });
}
function sa() {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, children: /* @__PURE__ */ e(
    "path",
    {
      d: "M3 8.4V5.6A2.6 2.6 0 015.6 3h2.8v2H5.6a.6.6 0 00-.6.6v2.8zm12.6-5.4h2.8A2.6 2.6 0 0121 5.6v2.8h-2V5.6a.6.6 0 00-.6-.6h-2.8zM3 15.6h2v2.8c0 .3.3.6.6.6h2.8v2H5.6A2.6 2.6 0 013 18.4zm16 0h2v2.8a2.6 2.6 0 01-2.6 2.6h-2.8v-2h2.8a.6.6 0 00.6-.6zM8.6 8.6h1.6v2.8H8.6zm5.2 0h1.6v2.8h-1.6zm-2.6 0h1.5v4.2c0 .5-.4.9-.9.9h-1v-1.4h.4zm-2.9 5.9l1.3-.7c.5.9 1.4 1.4 2.4 1.4s1.9-.5 2.4-1.4l1.3.7c-.8 1.4-2.2 2.2-3.7 2.2s-2.9-.8-3.7-2.2z",
      fill: "currentColor"
    }
  ) });
}
function xl() {
  return /* @__PURE__ */ e(Fi, { "aria-hidden": !0 });
}
function Al() {
  return /* @__PURE__ */ e(tn, { "aria-hidden": !0 });
}
function Ml() {
  return /* @__PURE__ */ e(nn, { "aria-hidden": !0 });
}
function Il() {
  const i = ve(null);
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "scroll-area",
          style: { flex: "1 1 auto", minHeight: 0, overflowY: "auto" },
          children: [
            /* @__PURE__ */ e(
              Ke,
              {
                title: "Summary",
                largeTitle: !0,
                scrollRef: i,
                trailing: /* @__PURE__ */ e(S, { "aria-label": "Your profile", round: !0, variant: "gray", children: /* @__PURE__ */ e(Pl, {}) })
              }
            ),
            /* @__PURE__ */ a(
              c,
              {
                gap: 4,
                style: {
                  padding: "var(--may-space-4)",
                  paddingBlockStart: "var(--may-space-2)",
                  // Clears the home indicator: the safe-area inset is added to the
                  // page's own gutter rather than replacing it.
                  paddingBlockEnd: "calc(var(--may-inset-bottom) + var(--may-space-4))"
                },
                children: [
                  /* @__PURE__ */ a(H, { variant: "grouped", padding: "md", children: [
                    /* @__PURE__ */ a(
                      Q,
                      {
                        accessory: /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "Today" }),
                        children: [
                          /* @__PURE__ */ e(X, { children: "Activity" }),
                          /* @__PURE__ */ e(ne, { children: "Two rings left to close." })
                        ]
                      }
                    ),
                    /* @__PURE__ */ a(c, { direction: "row", justify: "between", align: "start", children: [
                      /* @__PURE__ */ e(
                        ca,
                        {
                          tone: "danger",
                          value: 462,
                          max: 500,
                          centre: "92%",
                          label: "Move",
                          detail: "462/500 KCAL"
                        }
                      ),
                      /* @__PURE__ */ e(
                        ca,
                        {
                          tone: "success",
                          value: 38,
                          max: 30,
                          centre: "100%",
                          label: "Exercise",
                          detail: "38/30 MIN"
                        }
                      ),
                      /* @__PURE__ */ e(
                        ca,
                        {
                          tone: "tint",
                          value: 9,
                          max: 12,
                          centre: "75%",
                          label: "Stand",
                          detail: "9/12 HRS"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ a(he, { minColumnWidth: "12rem", gap: 3, children: [
                    /* @__PURE__ */ e(
                      Ce,
                      {
                        variant: "card",
                        label: "Steps",
                        value: "9,412",
                        delta: "6%",
                        direction: "up",
                        trailing: /* @__PURE__ */ e(C, { gradient: "orange", size: "md", children: /* @__PURE__ */ e(Dl, {}) })
                      }
                    ),
                    /* @__PURE__ */ e(
                      Ce,
                      {
                        variant: "card",
                        label: "Distance",
                        value: "4.1",
                        unit: "mi",
                        delta: "0.3 mi",
                        direction: "up",
                        trailing: /* @__PURE__ */ e(C, { gradient: "teal", size: "md", children: /* @__PURE__ */ e(Rl, {}) })
                      }
                    ),
                    /* @__PURE__ */ e(
                      Ce,
                      {
                        variant: "card",
                        label: "Flights Climbed",
                        value: "14",
                        delta: "2",
                        direction: "down",
                        trailing: /* @__PURE__ */ e(C, { gradient: "green", size: "md", children: /* @__PURE__ */ e(Ol, {}) })
                      }
                    ),
                    /* @__PURE__ */ e(
                      Ce,
                      {
                        variant: "card",
                        label: "Resting Heart Rate",
                        value: "54",
                        unit: "bpm",
                        delta: "3 bpm",
                        direction: "down",
                        invertDelta: !0,
                        trailing: /* @__PURE__ */ e(C, { gradient: "pink", size: "md", children: /* @__PURE__ */ e(li, {}) })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ a(H, { variant: "grouped", padding: "md", children: [
                    /* @__PURE__ */ a(
                      Q,
                      {
                        accessory: /* @__PURE__ */ e(t, { variant: "footnote", tone: "tint", children: "9,412 avg" }),
                        children: [
                          /* @__PURE__ */ e(X, { children: "Steps" }),
                          /* @__PURE__ */ e(ne, { children: "Last 7 days" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ a(c, { gap: 2, children: [
                      /* @__PURE__ */ e(
                        c,
                        {
                          direction: "row",
                          align: "end",
                          justify: "between",
                          gap: 2,
                          role: "img",
                          "aria-label": "Steps each day this week, Monday through Sunday: 7,204; 8,860; 5,932; 11,418; 9,077; 4,315; 9,412.",
                          children: ri.map((n) => /* @__PURE__ */ e(Tl, { ...n }, n.id))
                        }
                      ),
                      /* @__PURE__ */ e(c, { direction: "row", justify: "between", gap: 2, children: ri.map((n) => /* @__PURE__ */ e(
                        t,
                        {
                          as: "span",
                          variant: "caption-2",
                          align: "center",
                          tone: n.today ? "default" : "tertiary",
                          weight: n.today ? "semibold" : void 0,
                          style: { flex: "1 1 0" },
                          children: n.label
                        },
                        n.id
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ a(I, { header: "Highlights", footer: "Highlights update as new data arrives from your devices.", children: [
                    /* @__PURE__ */ e(
                      g,
                      {
                        leading: /* @__PURE__ */ e(C, { gradient: "pink", children: /* @__PURE__ */ e(li, {}) }),
                        title: "Cardio Fitness",
                        subtitle: "VO2 max 42.8 — above average for your age",
                        onClick: () => {
                        }
                      }
                    ),
                    /* @__PURE__ */ e(
                      g,
                      {
                        leading: /* @__PURE__ */ e(C, { gradient: "indigo", children: /* @__PURE__ */ e(Nl, {}) }),
                        title: "Sleep",
                        subtitle: "7 hr 12 min average, 18 min more than last week",
                        onClick: () => {
                        }
                      }
                    ),
                    /* @__PURE__ */ e(
                      g,
                      {
                        leading: /* @__PURE__ */ e(C, { gradient: "yellow", children: /* @__PURE__ */ e(Bl, {}) }),
                        title: "Time in Daylight",
                        subtitle: "42 min a day — your best week since April",
                        onClick: () => {
                        }
                      }
                    ),
                    /* @__PURE__ */ e(
                      g,
                      {
                        leading: /* @__PURE__ */ e(C, { gradient: "teal", children: /* @__PURE__ */ e(Fl, {}) }),
                        title: "Walking Steadiness",
                        subtitle: "OK, and steady across the last 12 months",
                        onClick: () => {
                        }
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
const ri = [
  { id: "Mon", label: "M", height: 10, steps: "7,204" },
  { id: "Tue", label: "T", height: 12, steps: "8,860" },
  { id: "Wed", label: "W", height: 8, steps: "5,932" },
  { id: "Thu", label: "T", height: 16, steps: "11,418" },
  { id: "Fri", label: "F", height: 12, steps: "9,077" },
  { id: "Sat", label: "S", height: 6, steps: "4,315" },
  { id: "Sun", label: "S", height: 20, steps: "9,412", today: !0 }
];
function Tl({ height: i, steps: n, id: r, today: o }) {
  return /* @__PURE__ */ e(
    j,
    {
      radius: "sm",
      title: `${r}: ${n} steps`,
      style: {
        flex: "1 1 0",
        height: `var(--may-space-${i})`,
        background: o ? "var(--may-color-primary)" : "var(--may-color-fill-tertiary)"
      }
    }
  );
}
function ca({ tone: i, value: n, max: r, centre: o, label: d, detail: u }) {
  return /* @__PURE__ */ a(c, { align: "center", gap: 2, style: { flex: "1 1 0" }, children: [
    /* @__PURE__ */ e(
      Ji,
      {
        size: "lg",
        tone: i,
        value: n,
        max: r,
        "aria-label": `${d}: ${u}`,
        children: o
      }
    ),
    /* @__PURE__ */ a(c, { align: "center", gap: 0, children: [
      /* @__PURE__ */ e(t, { as: "span", variant: "footnote", weight: "semibold", children: d }),
      /* @__PURE__ */ e(t, { as: "span", variant: "caption-2", tone: "secondary", align: "center", children: u })
    ] })
  ] });
}
function Pl() {
  return /* @__PURE__ */ e(Wi, { "aria-hidden": !0 });
}
function li() {
  return /* @__PURE__ */ e(Ma, { "aria-hidden": !0 });
}
function Dl() {
  return /* @__PURE__ */ e(rn, { "aria-hidden": !0 });
}
function Rl() {
  return /* @__PURE__ */ e(ln, { "aria-hidden": !0 });
}
function Ol() {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, focusable: "false", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M20 3.4h-4.6v4.3h-4v4.3h-4v4.3H2.8v4.3h6.2v-4.3h4v-4.3h4V7.7H20z",
      fill: "currentColor"
    }
  ) });
}
function Nl() {
  return /* @__PURE__ */ e(ia, { "aria-hidden": !0 });
}
function Bl() {
  return /* @__PURE__ */ e(Di, { "aria-hidden": !0 });
}
function Fl() {
  return /* @__PURE__ */ e(on, { "aria-hidden": !0 });
}
function zl() {
  const i = ve(null), [n, r] = h("month"), o = Wl.filter((d) => d.range.includes(n));
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "scroll-area",
          style: { flex: "1 1 auto", minHeight: 0, overflowY: "auto" },
          children: [
            /* @__PURE__ */ e(
              Ke,
              {
                title: "Wallet",
                largeTitle: !0,
                scrollRef: i,
                trailing: /* @__PURE__ */ e(S, { "aria-label": "Scan to add a card", variant: "plain", children: /* @__PURE__ */ e(Gl, {}) })
              }
            ),
            /* @__PURE__ */ a(
              c,
              {
                gap: 5,
                style: {
                  padding: "var(--may-space-4)",
                  paddingBlockStart: "var(--may-space-2)",
                  // Clears the home indicator without swallowing the page gutter.
                  paddingBlockEnd: "calc(var(--may-inset-bottom) + var(--may-space-4))"
                },
                children: [
                  /* @__PURE__ */ e(c, { gap: 0, children: oi.map((d, u) => /* @__PURE__ */ e(
                    Ll,
                    {
                      ...d,
                      overlapped: u > 0,
                      covered: u < oi.length - 1
                    },
                    d.name
                  )) }),
                  /* @__PURE__ */ e(c, { align: "center", children: /* @__PURE__ */ e(m, { variant: "tinted", pill: !0, leadingIcon: /* @__PURE__ */ e(El, {}), children: "Add Card" }) }),
                  /* @__PURE__ */ e(
                    we,
                    {
                      fullWidth: !0,
                      "aria-label": "Transaction range",
                      value: n,
                      onValueChange: r,
                      options: [
                        { label: "This Week", value: "week" },
                        { label: "This Month", value: "month" },
                        { label: "All", value: "all" }
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(
                    I,
                    {
                      header: "Latest Transactions",
                      footer: "Transactions from the last 30 days are stored on this iPhone.",
                      children: o.map((d) => /* @__PURE__ */ e(
                        g,
                        {
                          leading: /* @__PURE__ */ e(C, { gradient: d.gradient, children: /* @__PURE__ */ e(d.icon, {}) }),
                          title: d.merchant,
                          subtitle: d.category,
                          detail: (
                            // A credit is not the same event as a charge, and the two
                            // must not be told apart by a minus sign alone.
                            /* @__PURE__ */ e(
                              t,
                              {
                                as: "span",
                                variant: "body",
                                tone: d.credit ? "success" : "danger",
                                weight: "medium",
                                children: d.amount
                              }
                            )
                          ),
                          onClick: () => {
                          }
                        },
                        d.merchant + d.amount
                      ))
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
const oi = [
  {
    name: "Apple Cash",
    gradient: "green",
    lastFour: "•••• 2091",
    balance: "$86.40",
    note: "Available balance"
  },
  {
    name: "Sapphire Reserve",
    gradient: "indigo",
    lastFour: "•••• 4013",
    balance: "$2,318.44",
    note: "Statement balance · due Oct 2"
  },
  {
    name: "Apple Card",
    gradient: "spectrum",
    lastFour: "•••• 8842",
    balance: "$412.09",
    note: "No payment due — you are all caught up"
  }
];
function Ll({
  name: i,
  gradient: n,
  lastFour: r,
  balance: o,
  note: d,
  overlapped: u,
  covered: s
}) {
  return /* @__PURE__ */ e(
    j,
    {
      radius: "card",
      shadow: "lg",
      padding: 4,
      style: {
        background: `var(--may-grad-${n})`,
        color: "var(--may-on-color)",
        minHeight: "var(--may-space-24)",
        // A covered card's bottom padding is its normal 4 plus the 8 the next
        // card will sit over — 12 — so the strip that disappears under the
        // stack is padding and never a line of its own copy. The three numbers
        // are locked together: change the overlap and this one moves with it.
        paddingBlockEnd: s ? "var(--may-space-12)" : void 0,
        marginBlockStart: u ? "calc(var(--may-space-8) * -1)" : void 0
      },
      children: /* @__PURE__ */ a(c, { gap: 3, children: [
        /* @__PURE__ */ a(c, { direction: "row", align: "center", justify: "between", gap: 3, children: [
          /* @__PURE__ */ e(t, { as: "span", variant: "headline", style: { color: "var(--may-on-color)" }, children: i }),
          /* @__PURE__ */ e(t, { as: "span", variant: "footnote", mono: !0, style: { color: "var(--may-on-color)" }, children: r })
        ] }),
        /* @__PURE__ */ a(c, { gap: 0, children: [
          /* @__PURE__ */ e(t, { as: "span", variant: "title-2", style: { color: "var(--may-on-color)" }, children: o }),
          /* @__PURE__ */ e(t, { as: "span", variant: "caption-1", style: { color: "var(--may-on-color)" }, children: d })
        ] })
      ] })
    }
  );
}
const Wl = [
  {
    merchant: "Blue Bottle Coffee",
    category: "Food & Drink · Today",
    amount: "−$6.75",
    gradient: "orange",
    icon: _l,
    range: ["week", "month", "all"]
  },
  {
    merchant: "Daily Cash",
    category: "Apple Cash · Today",
    amount: "+$4.62",
    gradient: "green",
    icon: Hl,
    credit: !0,
    range: ["week", "month", "all"]
  },
  {
    merchant: "Muni Mobile",
    category: "Transit · Yesterday",
    amount: "−$2.50",
    gradient: "blue",
    icon: Vl,
    range: ["week", "month", "all"]
  },
  {
    merchant: "Trader Joe’s",
    category: "Groceries · Sep 6",
    amount: "−$83.19",
    gradient: "red",
    icon: $l,
    range: ["month", "all"]
  },
  {
    merchant: "Apple Store, Union Square",
    category: "Shopping · Sep 2",
    amount: "−$249.00",
    gradient: "gray",
    icon: Ul,
    range: ["month", "all"]
  },
  {
    merchant: "Chevron 0417",
    category: "Automotive · Aug 28",
    amount: "−$48.62",
    gradient: "purple",
    icon: jl,
    range: ["all"]
  }
];
function Gl() {
  return /* @__PURE__ */ e(hn, { "aria-hidden": !0 });
}
function El() {
  return /* @__PURE__ */ e(xa, { "aria-hidden": !0 });
}
function _l() {
  return /* @__PURE__ */ e(dn, { "aria-hidden": !0 });
}
function Hl() {
  return /* @__PURE__ */ e(sn, { "aria-hidden": !0 });
}
function Vl() {
  return /* @__PURE__ */ e(cn, { "aria-hidden": !0 });
}
function $l() {
  return /* @__PURE__ */ e(Gi, { "aria-hidden": !0 });
}
function Ul() {
  return /* @__PURE__ */ e(Ei, { "aria-hidden": !0 });
}
function jl() {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, focusable: "false", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M4.6 3.6h8.2a1.6 1.6 0 011.6 1.6v15.2H3V5.2a1.6 1.6 0 011.6-1.6zm1.2 2.6v3.6h5.8V6.2zm10.6.2l2.6 2.6a2 2 0 01.6 1.4v6.4a1.4 1.4 0 01-2.8 0v-5.2h-1.6V6.4z",
      fill: "currentColor"
    }
  ) });
}
function Kl() {
  const [i, n] = h("sleep"), [r, o] = h("top"), [d, u] = h(Yl), s = r === "top" ? di : di.filter((l) => l.kind === r);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            style: {
              flex: "0 0 auto",
              paddingBlockStart: "var(--may-inset-top)",
              background: "var(--may-color-surface)"
            },
            children: [
              /* @__PURE__ */ e(
                Ga,
                {
                  value: i,
                  onValueChange: n,
                  onCancel: () => n(""),
                  showCancel: "always",
                  align: "leading",
                  placeholder: "Games, Apps, Stories and More",
                  "aria-label": "Search the App Store"
                }
              ),
              /* @__PURE__ */ e(
                Ea,
                {
                  value: r,
                  onValueChange: o,
                  variant: "tinted",
                  size: "sm",
                  "aria-label": "Result kind",
                  items: [
                    { value: "top", label: "Top" },
                    { value: "app", label: "Apps", count: 24 },
                    { value: "music", label: "Music", count: 9 },
                    { value: "podcast", label: "Podcasts", count: 6 }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            "data-slot": "scroll-area",
            style: { flex: "1 1 auto", minHeight: 0, overflowY: "auto" },
            children: /* @__PURE__ */ a(
              c,
              {
                gap: 5,
                style: {
                  padding: "var(--may-space-4)",
                  // Clears the home indicator without swallowing the page gutter.
                  paddingBlockEnd: "calc(var(--may-inset-bottom) + var(--may-space-4))"
                },
                children: [
                  d.length > 0 && /* @__PURE__ */ a(c, { gap: 2, children: [
                    /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", weight: "semibold", children: "RECENT" }),
                    /* @__PURE__ */ e(c, { direction: "row", gap: 2, wrap: !0, children: d.map((l) => /* @__PURE__ */ e(
                      ge,
                      {
                        size: "sm",
                        leadingIcon: /* @__PURE__ */ e(ql, {}),
                        onRemove: () => u((v) => v.filter((p) => p !== l)),
                        children: l
                      },
                      l
                    )) })
                  ] }),
                  /* @__PURE__ */ e(I, { header: `Results for “${i}”`, children: s.map((l) => /* @__PURE__ */ e(
                    g,
                    {
                      leading: /* @__PURE__ */ e(C, { gradient: l.gradient, size: "md", children: /* @__PURE__ */ e(l.icon, {}) }),
                      title: l.title,
                      subtitle: l.subtitle,
                      detail: l.kind === "app" ? void 0 : l.detail,
                      accessory: l.kind === "app" ? /* @__PURE__ */ e(m, { variant: "tinted", size: "xs", pill: !0, children: "GET" }) : void 0,
                      onClick: l.kind === "app" ? void 0 : () => {
                      }
                    },
                    l.title
                  )) }),
                  /* @__PURE__ */ e(ce, { label: "No results state" }),
                  /* @__PURE__ */ e(
                    K,
                    {
                      glyph: /* @__PURE__ */ e(Zl, {}),
                      title: "No Results for “sleepmaxxing”",
                      description: "Check the spelling, or try searching for a category such as Health & Fitness.",
                      action: /* @__PURE__ */ e(m, { variant: "gray", size: "sm", pill: !0, children: "Clear Search" })
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const Yl = ["sleep cycle", "white noise", "procreate", "dark noise", "strava"], di = [
  {
    kind: "app",
    title: "Sleep Cycle",
    subtitle: "Health & Fitness · 4.7 ★ · In-App Purchases",
    gradient: "indigo",
    icon: Jl
  },
  {
    kind: "app",
    title: "Calm",
    subtitle: "Health & Fitness · 4.8 ★ · 512.4 MB",
    gradient: "teal",
    icon: Ql
  },
  {
    kind: "music",
    title: "Weightless",
    subtitle: "Song · Marconi Union",
    detail: "8:08",
    gradient: "pink",
    icon: Xl
  },
  {
    kind: "podcast",
    title: "Nothing Much Happens",
    subtitle: "Podcast · Kathryn Nicolai",
    detail: "Mondays",
    gradient: "purple",
    icon: si
  },
  {
    kind: "podcast",
    title: "Sleep With Me",
    subtitle: "Podcast · Night Vale Presents",
    detail: "Thursdays",
    gradient: "orange",
    icon: si
  }
];
function ql() {
  return /* @__PURE__ */ e(Oi, { "aria-hidden": !0 });
}
function Jl() {
  return /* @__PURE__ */ e(ia, { "aria-hidden": !0 });
}
function Ql() {
  return /* @__PURE__ */ e(un, { "aria-hidden": !0 });
}
function Xl() {
  return /* @__PURE__ */ e(pn, { "aria-hidden": !0 });
}
function si() {
  return /* @__PURE__ */ e(mn, { "aria-hidden": !0 });
}
function Zl() {
  return /* @__PURE__ */ e(Ii, { "aria-hidden": !0 });
}
const ci = [
  {
    id: "m1",
    sender: "Ines Marchetti",
    subject: "Re: Colour tokens for the dark build",
    preview: "Separator is still a shade heavy at 2×. Everything else matches the spec now.",
    date: "9:41 AM",
    unread: !0
  },
  {
    id: "m2",
    sender: "Xcode Cloud",
    subject: "Mercury 4.2 (118) passed all tests",
    preview: "412 tests in 6 min 04 s on macOS 15.2. Archive uploaded to TestFlight.",
    date: "8:12 AM",
    unread: !0
  },
  {
    id: "m3",
    sender: "Nadia Haddad",
    subject: "Launch deck — final pass",
    preview: "Slides 12 through 18 are rewritten. Everything else is where you left it.",
    date: "Yesterday",
    unread: !0,
    attachment: "Keynote · 24.6 MB"
  },
  {
    id: "m4",
    sender: "Apple Developer",
    subject: "Your annual membership renews on 4 October",
    preview: "No action is needed. Your Apple Account ending in 4471 will be charged £79.",
    date: "Yesterday",
    unread: !1
  },
  {
    id: "m5",
    sender: "Johan Persson",
    subject: "Sidebar rail diagram for the docs",
    preview: "Exported at 3×. Shout if you want the arrows a shade lighter in dark mode.",
    date: "Monday",
    unread: !1,
    attachment: "PNG · 1.8 MB"
  },
  {
    id: "m6",
    sender: "Studio Booking",
    subject: "Room 4 confirmed — Wed 14:00–16:00",
    preview: "Added to your calendar. The display in there is a Studio Display, not a Pro XDR.",
    date: "Monday",
    unread: !1
  },
  {
    id: "m7",
    sender: "Rebecca Moss",
    subject: "Accessibility audit — first ten findings",
    preview: "Draft attached. I kept the failure list short and moved the tables to the end.",
    date: "2 Sep",
    unread: !1,
    attachment: "PDF · 640 KB"
  },
  {
    id: "m8",
    sender: "Apple Support",
    subject: "Case 101-8842119 was updated",
    preview: "An engineer has replied about the notarisation timeout you reported on Friday.",
    date: "1 Sep",
    unread: !1
  }
], eo = [
  {
    key: "sender",
    header: "From",
    primary: !0,
    width: 200,
    render: (i) => /* @__PURE__ */ a(
      "span",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "var(--may-space-2)",
          minWidth: 0
        },
        children: [
          /* @__PURE__ */ e(W, { dot: !0, tone: "tint", style: { visibility: i.unread ? void 0 : "hidden" } }),
          /* @__PURE__ */ e(
            t,
            {
              as: "span",
              variant: "subheadline",
              weight: i.unread ? "semibold" : void 0,
              clamp: 1,
              children: i.sender
            }
          )
        ]
      }
    )
  },
  {
    key: "subject",
    header: "Subject",
    render: (i) => /* @__PURE__ */ a("span", { style: { display: "grid", gap: "var(--may-space-1)", minWidth: 0 }, children: [
      /* @__PURE__ */ e(t, { as: "span", variant: "subheadline", weight: i.unread ? "semibold" : void 0, clamp: 1, children: i.subject }),
      /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", clamp: 1, children: i.preview })
    ] })
  },
  {
    key: "attachment",
    header: "Attachment",
    width: 156,
    render: (i) => i.attachment ? /* @__PURE__ */ a(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--may-space-1)",
          color: "var(--may-color-text-secondary)"
        },
        children: [
          /* @__PURE__ */ e(
            Xe,
            {
              "aria-hidden": !0,
              style: {
                width: "var(--may-space-4)",
                height: "var(--may-space-4)",
                display: "block",
                flexShrink: 0
              }
            }
          ),
          /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", children: i.attachment })
        ]
      }
    ) : (
      /* An em dash, not a blank cell: blank reads as "still loading". */
      /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "tertiary", children: "—" })
    )
  },
  {
    key: "date",
    header: "Date",
    align: "end",
    width: 112,
    render: (i) => /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", children: i.date })
  }
];
function ao() {
  const [i, n] = h(!1), [r, o] = h("inbox"), [d, u] = h("m1"), s = ci.filter((l) => l.unread).length;
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: "flex",
        height: "100%",
        minHeight: "34rem",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a(
          Ha,
          {
            "aria-label": "Mailboxes",
            collapsed: i,
            onCollapsedChange: n,
            header: /* @__PURE__ */ a(
              "div",
              {
                style: {
                  /* The header is itself a flex row, so this has to claim the
                   * width before `space-between` means anything. */
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: i ? "center" : "space-between",
                  gap: "var(--may-space-2)"
                },
                children: [
                  !i && /* @__PURE__ */ e(t, { as: "span", variant: "headline", clamp: 1, children: "Mail" }),
                  /* @__PURE__ */ e(Va, {})
                ]
              }
            ),
            footer: /* @__PURE__ */ e(
              F,
              {
                icon: /* @__PURE__ */ e(B, { name: "Lena Fischer", size: "xs" }),
                onClick: () => o("account"),
                active: r === "account",
                children: "Lena Fischer"
              }
            ),
            children: [
              /* @__PURE__ */ a(pe, { title: "Favourites", children: [
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(fe, { "aria-hidden": !0 }),
                    badge: s,
                    active: r === "inbox",
                    onClick: () => o("inbox"),
                    children: "Inbox"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(Ta, { "aria-hidden": !0 }),
                    active: r === "sent",
                    onClick: () => o("sent"),
                    children: "Sent"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(ea, { "aria-hidden": !0 }),
                    badge: 2,
                    active: r === "drafts",
                    onClick: () => o("drafts"),
                    children: "Drafts"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(Me, { "aria-hidden": !0 }),
                    active: r === "flagged",
                    onClick: () => o("flagged"),
                    children: "Flagged"
                  }
                )
              ] }),
              /* @__PURE__ */ a(pe, { title: "Smart Mailboxes", collapsible: !0, children: [
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(ba, { "aria-hidden": !0 }),
                    badge: s,
                    active: r === "unread",
                    onClick: () => o("unread"),
                    children: "Unread"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(Xe, { "aria-hidden": !0 }),
                    active: r === "attachments",
                    onClick: () => o("attachments"),
                    children: "Attachments"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(gn, { "aria-hidden": !0 }),
                    badge: 4,
                    active: r === "today",
                    onClick: () => o("today"),
                    children: "Today"
                  }
                )
              ] }),
              /* @__PURE__ */ a(pe, { title: "iCloud", collapsible: !0, defaultOpen: !1, children: [
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(se, { "aria-hidden": !0 }),
                    active: r === "receipts",
                    onClick: () => o("receipts"),
                    children: "Receipts"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(se, { "aria-hidden": !0 }),
                    active: r === "travel",
                    onClick: () => o("travel"),
                    children: "Travel"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: /* @__PURE__ */ e(se, { "aria-hidden": !0 }),
                    active: r === "archive",
                    onClick: () => o("archive"),
                    children: "Archive"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "main",
          {
            style: {
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              margin: "var(--may-space-2)",
              marginInlineStart: 0,
              borderRadius: "var(--may-radius-card)",
              background: "var(--may-color-surface)",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ a(
                "header",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--may-space-4)",
                    padding: "var(--may-space-3) var(--may-space-4)",
                    minWidth: 0
                  },
                  children: [
                    /* @__PURE__ */ e(
                      za,
                      {
                        "aria-label": "Mailbox",
                        size: "sm",
                        items: [
                          {
                            label: "iCloud",
                            icon: /* @__PURE__ */ e(_i, { "aria-hidden": !0 }),
                            onClick: () => o("archive")
                          },
                          { label: "Favourites", onClick: () => o("inbox") },
                          { label: "Inbox" }
                        ]
                      }
                    ),
                    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "var(--may-space-1)" }, children: [
                      /* @__PURE__ */ a(t, { as: "span", variant: "footnote", tone: "secondary", children: [
                        s,
                        " unread"
                      ] }),
                      /* @__PURE__ */ e(ra, { label: "New Message ⌘N", children: /* @__PURE__ */ e(S, { "aria-label": "New Message", children: /* @__PURE__ */ e(Ve, { "aria-hidden": !0 }) }) }),
                      /* @__PURE__ */ e(
                        ye,
                        {
                          "aria-label": "View options",
                          placement: "bottom-end",
                          trigger: /* @__PURE__ */ e(S, { "aria-label": "View options", tone: "neutral", children: /* @__PURE__ */ e(be, { "aria-hidden": !0 }) }),
                          items: [
                            { label: "Sort by Date", shortcut: "⌥⌘D" },
                            { label: "Sort by Sender" },
                            { label: "Sort by Subject" },
                            { label: "Group by Conversation", shortcut: "⌥⌘T", separator: !0 },
                            { label: "Mark All as Read", shortcut: "⇧⌘K" },
                            { label: "Move to Junk", destructive: !0, separator: !0 }
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  "data-slot": "scroll-area",
                  style: {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    padding: "0 var(--may-space-4) var(--may-space-4)"
                  },
                  children: /* @__PURE__ */ e(
                    ta,
                    {
                      columns: eo,
                      data: ci,
                      rowKey: "id",
                      size: "lg",
                      stickyHeader: !0,
                      selectedKeys: [d],
                      onRowClick: (l) => u(l.id)
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const V = {
  people: /* @__PURE__ */ e(Bi, { "aria-hidden": !0 }),
  bag: /* @__PURE__ */ e(Gi, { "aria-hidden": !0 }),
  clock: /* @__PURE__ */ e(Pi, { "aria-hidden": !0 }),
  bolt: /* @__PURE__ */ e(Hi, { "aria-hidden": !0 }),
  filter: /* @__PURE__ */ e(yn, { "aria-hidden": !0 })
}, io = {
  "7d": [
    { label: "Active Devices", value: "48,206", delta: "6.2%", direction: "up", gradient: "blue", glyph: V.people },
    { label: "Paid Conversions", value: "1,914", delta: "3.1%", direction: "up", gradient: "green", glyph: V.bag },
    { label: "Avg. Session", value: "4:12", delta: "18s", direction: "up", gradient: "purple", glyph: V.clock },
    { label: "Crash-Free Rate", value: "99.87", unit: "%", delta: "0.04%", direction: "down", invert: !0, gradient: "orange", glyph: V.bolt }
  ],
  "30d": [
    { label: "Active Devices", value: "186,540", delta: "11.4%", direction: "up", gradient: "blue", glyph: V.people },
    { label: "Paid Conversions", value: "8,077", delta: "2.6%", direction: "down", invert: !0, gradient: "green", glyph: V.bag },
    { label: "Avg. Session", value: "3:58", delta: "No change", direction: "flat", gradient: "purple", glyph: V.clock },
    { label: "Crash-Free Rate", value: "99.91", unit: "%", delta: "0.02%", direction: "up", gradient: "orange", glyph: V.bolt }
  ],
  "12m": [
    { label: "Active Devices", value: "1.42M", delta: "34.8%", direction: "up", gradient: "blue", glyph: V.people },
    { label: "Paid Conversions", value: "96,318", delta: "21.5%", direction: "up", gradient: "green", glyph: V.bag },
    { label: "Avg. Session", value: "4:31", delta: "41s", direction: "up", gradient: "purple", glyph: V.clock },
    { label: "Crash-Free Rate", value: "99.78", unit: "%", delta: "0.13%", direction: "down", invert: !0, gradient: "orange", glyph: V.bolt }
  ]
}, dt = [
  { month: "Oct", free: 54, paid: 12 },
  { month: "Nov", free: 61, paid: 14 },
  { month: "Dec", free: 88, paid: 26 },
  { month: "Jan", free: 72, paid: 19 },
  { month: "Feb", free: 66, paid: 21 },
  { month: "Mar", free: 74, paid: 24 },
  { month: "Apr", free: 79, paid: 23 },
  { month: "May", free: 83, paid: 28 },
  { month: "Jun", free: 91, paid: 31 },
  { month: "Jul", free: 97, paid: 36 },
  { month: "Aug", free: 86, paid: 34 },
  { month: "Sep", free: 104, paid: 41 }
], to = Math.max(...dt.map((i) => i.free + i.paid)), st = "calc(var(--may-space-24) * 2)", no = `calc(${st} - var(--may-space-6))`, hi = (i) => `calc(${no} * ${(i / to).toFixed(4)})`, ro = [
  { name: "App Store search", share: 42, visits: "78,412 visits", tone: "tint" },
  { name: "Featured — Apps We Love", share: 27, visits: "50,308 visits", tone: "success" },
  { name: "Web referral", share: 18, visits: "33,520 visits", tone: "warning" },
  { name: "Direct link", share: 9, visits: "16,774 visits", tone: "neutral" },
  { name: "Shared from Messages", share: 4, visits: "7,486 visits", tone: "neutral" }
], lo = [
  { id: "p1", path: "/", title: "Mercury for iPhone", views: 128402, avgTime: "1:24", bounce: 38 },
  { id: "p2", path: "/pricing", title: "Plans and Pricing", views: 61209, avgTime: "2:47", bounce: 26 },
  { id: "p3", path: "/whats-new", title: "What’s New in 4.2", views: 44871, avgTime: "3:12", bounce: 21 },
  { id: "p4", path: "/support", title: "Support", views: 30665, avgTime: "4:05", bounce: 44 },
  { id: "p5", path: "/privacy", title: "Privacy Policy", views: 12940, avgTime: "0:52", bounce: 71 },
  { id: "p6", path: "/press", title: "Press Kit", views: 8318, avgTime: "1:38", bounce: 55 }
], oo = [
  {
    key: "path",
    header: "Page",
    primary: !0,
    render: (i) => /* @__PURE__ */ a("span", { style: { display: "grid", gap: "var(--may-space-1)", minWidth: 0 }, children: [
      /* @__PURE__ */ e(t, { as: "span", variant: "subheadline", weight: "medium", clamp: 1, children: i.title }),
      /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", mono: !0, clamp: 1, children: i.path })
    ] })
  },
  {
    key: "views",
    header: "Views",
    numeric: !0,
    width: 120,
    render: (i) => i.views.toLocaleString("en-US")
  },
  { key: "avgTime", header: "Avg. Time", numeric: !0, width: 120 },
  {
    key: "bounce",
    header: "Bounce",
    numeric: !0,
    width: 120,
    // Tinted above the 50% line: a bounce rate is the one column here where
    // a high number is bad news, and the colour says so without a legend.
    render: (i) => /* @__PURE__ */ a(t, { as: "span", variant: "subheadline", tone: i.bounce > 50 ? "danger" : "default", children: [
      i.bounce,
      "%"
    ] })
  }
], ui = {
  "7d": "the last 7 days",
  "30d": "the last 30 days",
  "12m": "the last 12 months"
};
function so() {
  const [i, n] = h("30d"), [r, o] = h(["ios", "ipados"]), d = (u) => o(
    (s) => s.includes(u) ? s.filter((l) => l !== u) : [...s, u]
  );
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "34rem",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          "data-slot": "scroll-area",
          style: { flex: 1, minHeight: 0, overflowY: "auto", padding: "var(--may-space-6)" },
          children: /* @__PURE__ */ a(c, { gap: 6, children: [
            /* @__PURE__ */ a(c, { direction: "row", align: "end", justify: "between", gap: 4, wrap: !0, children: [
              /* @__PURE__ */ a(c, { gap: 1, children: [
                /* @__PURE__ */ e(t, { as: "h1", variant: "title-1", children: "Overview" }),
                /* @__PURE__ */ a(t, { variant: "subheadline", tone: "secondary", children: [
                  "Mercury for iPhone · ",
                  ui[i],
                  " · ",
                  r.length,
                  " platforms"
                ] })
              ] }),
              /* @__PURE__ */ a(c, { direction: "row", gap: 2, align: "center", children: [
                /* @__PURE__ */ e(
                  we,
                  {
                    "aria-label": "Reporting range",
                    value: i,
                    onValueChange: (u) => n(u),
                    size: "sm",
                    options: [
                      { label: "7 Days", value: "7d" },
                      { label: "30 Days", value: "30d" },
                      { label: "12 Months", value: "12m" }
                    ]
                  }
                ),
                /* @__PURE__ */ e(
                  Wa,
                  {
                    "aria-label": "Filters",
                    placement: "bottom-end",
                    trigger: /* @__PURE__ */ e(
                      m,
                      {
                        variant: "gray",
                        size: "sm",
                        leadingIcon: V.filter,
                        children: "Filters"
                      }
                    ),
                    children: /* @__PURE__ */ a(c, { gap: 3, style: { minWidth: "calc(var(--may-space-24) * 2.5)" }, children: [
                      /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "Platforms" }),
                      /* @__PURE__ */ a(c, { gap: 2, children: [
                        /* @__PURE__ */ e(
                          _,
                          {
                            checked: r.includes("ios"),
                            onCheckedChange: () => d("ios"),
                            children: "iOS"
                          }
                        ),
                        /* @__PURE__ */ e(
                          _,
                          {
                            checked: r.includes("ipados"),
                            onCheckedChange: () => d("ipados"),
                            children: "iPadOS"
                          }
                        ),
                        /* @__PURE__ */ e(
                          _,
                          {
                            checked: r.includes("macos"),
                            onCheckedChange: () => d("macos"),
                            children: "macOS"
                          }
                        ),
                        /* @__PURE__ */ e(
                          _,
                          {
                            checked: r.includes("visionos"),
                            onCheckedChange: () => d("visionos"),
                            description: "No paid tier yet",
                            children: "visionOS"
                          }
                        )
                      ] })
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(he, { minColumnWidth: "220px", gap: 4, children: io[i].map((u) => /* @__PURE__ */ e(
              Ce,
              {
                variant: "card",
                label: u.label,
                value: u.value,
                unit: u.unit,
                delta: u.delta,
                direction: u.direction,
                invertDelta: u.invert,
                trailing: /* @__PURE__ */ e(C, { gradient: u.gradient, size: "md", children: u.glyph })
              },
              u.label
            )) }),
            /* @__PURE__ */ a(H, { children: [
              /* @__PURE__ */ a(
                Q,
                {
                  accessory: /* @__PURE__ */ a(c, { direction: "row", gap: 2, align: "center", children: [
                    /* @__PURE__ */ e(ge, { tone: "tint", size: "sm", children: "Free" }),
                    /* @__PURE__ */ e(ge, { tone: "success", size: "sm", children: "Paid" })
                  ] }),
                  children: [
                    /* @__PURE__ */ e(X, { children: "First-Time Installs" }),
                    /* @__PURE__ */ e(ne, { children: "Thousands per month, paid stacked on free." })
                  ]
                }
              ),
              /* @__PURE__ */ e(me, { children: /* @__PURE__ */ e("div", { "data-slot": "scroll-area", style: { overflowX: "auto" }, children: /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "var(--may-space-3)",
                    minWidth: "calc(var(--may-space-24) * 6)",
                    height: st
                  },
                  role: "img",
                  "aria-label": "Monthly first-time installs for the last twelve months, rising from 66 thousand in October to 145 thousand in September.",
                  children: dt.map((u) => /* @__PURE__ */ a(
                    "div",
                    {
                      style: {
                        flex: 1,
                        minWidth: "var(--may-space-5)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "var(--may-space-1)",
                        height: "100%"
                      },
                      children: [
                        /* @__PURE__ */ e(
                          j,
                          {
                            fullWidth: !0,
                            radius: "xs",
                            style: {
                              height: hi(u.paid),
                              background: "var(--may-color-success)",
                              borderEndStartRadius: 0,
                              borderEndEndRadius: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ e(
                          j,
                          {
                            fullWidth: !0,
                            style: {
                              height: hi(u.free),
                              background: "var(--may-color-primary)",
                              borderRadius: "var(--may-radius-xs)",
                              borderStartStartRadius: 0,
                              borderStartEndRadius: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ e(t, { as: "span", variant: "caption-2", tone: "tertiary", children: u.month })
                      ]
                    },
                    u.month
                  ))
                }
              ) }) })
            ] }),
            /* @__PURE__ */ a(H, { children: [
              /* @__PURE__ */ a(Q, { children: [
                /* @__PURE__ */ e(X, { children: "Where Installs Came From" }),
                /* @__PURE__ */ a(ne, { children: [
                  "Share of attributed sessions, ",
                  ui[i],
                  "."
                ] })
              ] }),
              /* @__PURE__ */ e(me, { children: /* @__PURE__ */ e(c, { gap: 4, children: ro.map((u) => /* @__PURE__ */ e(
                je,
                {
                  label: u.name,
                  value: u.share,
                  tone: u.tone,
                  showValue: !0,
                  formatValue: (s) => `${s}% · ${u.visits}`
                },
                u.name
              )) }) })
            ] }),
            /* @__PURE__ */ e(
              ta,
              {
                caption: "Top Pages",
                columns: oo,
                data: lo,
                rowKey: "id",
                zebra: !0
              }
            )
          ] })
        }
      )
    }
  );
}
const pi = [
  { id: "u1", name: "Priya Raghunathan", email: "priya@mercuryapp.com", role: "Account Holder", status: "Active", lastActiveMinutes: 2, lastActive: "2 minutes ago" },
  { id: "u2", name: "Daniel Okafor", email: "daniel@mercuryapp.com", role: "Admin", status: "Active", lastActiveMinutes: 26, lastActive: "26 minutes ago" },
  { id: "u3", name: "Mei-Ling Chen", email: "meiling@mercuryapp.com", role: "App Manager", status: "Active", lastActiveMinutes: 95, lastActive: "1 hour ago" },
  { id: "u4", name: "Tomás Ferreira", email: "tomas@mercuryapp.com", role: "Developer", status: "Active", lastActiveMinutes: 240, lastActive: "4 hours ago" },
  { id: "u5", name: "Hannah Lindqvist", email: "hannah@mercuryapp.com", role: "Marketing", status: "Active", lastActiveMinutes: 55, lastActive: "55 minutes ago" },
  { id: "u6", name: "Yusuf Demir", email: "yusuf@mercuryapp.com", role: "Developer", status: "Suspended", lastActiveMinutes: 2880, lastActive: "2 days ago" },
  { id: "u7", name: "Clara Bianchi", email: "clara@mercuryapp.com", role: "Customer Support", status: "Active", lastActiveMinutes: 420, lastActive: "7 hours ago" },
  { id: "u8", name: "Rohan Mehta", email: "rohan@mercuryapp.com", role: "Developer", status: "Active", lastActiveMinutes: 1440, lastActive: "Yesterday" },
  { id: "u9", name: "Sofia Alvarez", email: "sofia@mercuryapp.com", role: "Finance", status: "Active", lastActiveMinutes: 4320, lastActive: "3 days ago" },
  { id: "u10", name: "Noah Whitfield", email: "noah@mercuryapp.com", role: "Developer", status: "Invited", lastActiveMinutes: 20160, lastActive: "Never" },
  { id: "u11", name: "Aiko Tanaka", email: "aiko@mercuryapp.com", role: "App Manager", status: "Active", lastActiveMinutes: 10080, lastActive: "Last week" },
  { id: "u12", name: "Leo Kowalski", email: "leo@mercuryapp.com", role: "Marketing", status: "Invited", lastActiveMinutes: 20160, lastActive: "Never" },
  { id: "u13", name: "Fatima Zahra", email: "fatima@mercuryapp.com", role: "Customer Support", status: "Active", lastActiveMinutes: 12, lastActive: "12 minutes ago" },
  { id: "u14", name: "Erik Sandberg", email: "erik@mercuryapp.com", role: "Developer", status: "Suspended", lastActiveMinutes: 43200, lastActive: "A month ago" }
], co = {
  Active: "success",
  Invited: "tint",
  Suspended: "danger"
};
function ho() {
  const [i, n] = h(""), [r, o] = h(["u2", "u13"]), d = fa(() => {
    const l = i.trim().toLowerCase();
    return l ? pi.filter(
      (v) => `${v.name} ${v.email} ${v.role}`.toLowerCase().includes(l)
    ) : pi;
  }, [i]), u = fa(
    () => [
      {
        key: "name",
        header: "Name",
        filter: "text",
        minWidth: 240,
        width: 300,
        value: (l) => l.name,
        render: (l) => /* @__PURE__ */ a("span", { style: { display: "flex", alignItems: "center", gap: "var(--may-space-3)", minWidth: 0 }, children: [
          /* @__PURE__ */ e(B, { name: l.name, size: "sm" }),
          /* @__PURE__ */ a("span", { style: { display: "grid", gap: "var(--may-space-1)", minWidth: 0 }, children: [
            /* @__PURE__ */ e(t, { as: "span", variant: "subheadline", weight: "medium", clamp: 1, children: l.name }),
            /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", clamp: 1, children: l.email })
          ] })
        ] })
      },
      { key: "role", header: "Role", filter: "select", width: 150 },
      {
        key: "status",
        header: "Status",
        filter: "select",
        width: 140,
        value: (l) => l.status,
        render: (l) => /* @__PURE__ */ e(W, { tone: co[l.status], dot: !0, children: l.status })
      },
      {
        key: "lastActive",
        header: "Last Active",
        numeric: !0,
        width: 160,
        // Sorts on minutes, prints the phrase.
        value: (l) => l.lastActiveMinutes,
        render: (l) => /* @__PURE__ */ e(t, { as: "span", variant: "subheadline", tone: "secondary", children: l.lastActive })
      },
      {
        key: "actions",
        header: "",
        width: 64,
        minWidth: 64,
        sortable: !1,
        resizable: !1,
        align: "end",
        render: (l) => /* @__PURE__ */ e(
          ye,
          {
            "aria-label": `Actions for ${l.name}`,
            placement: "bottom-end",
            trigger: /* @__PURE__ */ e(S, { "aria-label": `Actions for ${l.name}`, tone: "neutral", size: "sm", children: /* @__PURE__ */ e(be, { "aria-hidden": !0 }) }),
            items: [
              { label: "View Profile", shortcut: "⌘I" },
              { label: "Change Role…" },
              {
                label: l.status === "Invited" ? "Resend Invitation" : "Reset Password",
                separator: !0
              },
              {
                label: l.status === "Suspended" ? "Restore Access" : "Suspend Access",
                // The account holder cannot be locked out of their own
                // account — the item stays visible so the rule is legible.
                disabled: l.role === "Account Holder"
              },
              { label: "Remove Access", destructive: !0, separator: !0 }
            ]
          }
        )
      }
    ],
    []
  ), s = r.length;
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "34rem",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          "data-slot": "scroll-area",
          style: {
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            padding: "var(--may-space-6)"
          },
          children: /* @__PURE__ */ a(c, { gap: 5, children: [
            /* @__PURE__ */ a(c, { gap: 1, children: [
              /* @__PURE__ */ e(t, { as: "h1", variant: "title-1", children: "Users and Access" }),
              /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "Mercury, Inc. · 14 people · 2 invitations pending" })
            ] }),
            /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", wrap: !0, children: [
              /* @__PURE__ */ e("div", { style: { flex: 1, minWidth: "calc(var(--may-space-24) * 3)" }, children: /* @__PURE__ */ e(
                Ie,
                {
                  placeholder: "Search people",
                  value: i,
                  onValueChange: n,
                  fullWidth: !0,
                  "aria-label": "Search people"
                }
              ) }),
              /* @__PURE__ */ e(
                ye,
                {
                  "aria-label": "Bulk actions",
                  placement: "bottom-end",
                  trigger: /* @__PURE__ */ e(m, { variant: "gray", trailingIcon: /* @__PURE__ */ e(Ia, { "aria-hidden": !0 }), children: s > 0 ? `${s} Selected` : "Bulk Actions" }),
                  items: [
                    { label: "Change Role…", disabled: s === 0 },
                    { label: "Resend Invitations", disabled: s === 0 },
                    { label: "Export as CSV…", shortcut: "⇧⌘E", separator: !0 },
                    {
                      label: s > 1 ? `Remove ${s} People` : "Remove Access",
                      destructive: !0,
                      disabled: s === 0,
                      separator: !0
                    }
                  ]
                }
              ),
              /* @__PURE__ */ e(m, { variant: "filled", leadingIcon: /* @__PURE__ */ e(xa, { "aria-hidden": !0 }), children: "Invite" })
            ] }),
            /* @__PURE__ */ e(
              $a,
              {
                caption: "People",
                columns: u,
                data: d,
                rowKey: "id",
                selectable: !0,
                selectedKeys: r,
                onSelectionChange: o,
                resizableColumns: !0,
                stickyHeader: !0,
                maxHeight: "calc(var(--may-control-h) * 10)",
                zebra: !0,
                pageSize: 8,
                defaultSort: [{ key: "lastActive", direction: "asc" }],
                emptyState: /* @__PURE__ */ e(
                  K,
                  {
                    glyph: /* @__PURE__ */ e(vn, { "aria-hidden": !0 }),
                    title: "No one matches that search",
                    description: `No one in Mercury, Inc. matches “${i.trim()}”. Try a name, an email address, or a role.`,
                    action: /* @__PURE__ */ e(m, { variant: "tinted", onClick: () => n(""), children: "Clear Search" })
                  }
                )
              }
            )
          ] })
        }
      )
    }
  );
}
const ae = {
  cloud: /* @__PURE__ */ e(_i, { "aria-hidden": !0 }),
  folder: /* @__PURE__ */ e(se, { "aria-hidden": !0 }),
  drive: /* @__PURE__ */ e(Tn, { "aria-hidden": !0 }),
  globe: /* @__PURE__ */ e(In, { "aria-hidden": !0 }),
  tag: /* @__PURE__ */ e(Mn, { "aria-hidden": !0 })
}, P = {
  folder: /* @__PURE__ */ e(An, { "aria-hidden": !0 }),
  doc: /* @__PURE__ */ e(xn, { "aria-hidden": !0 }),
  design: /* @__PURE__ */ e(Cn, { "aria-hidden": !0 }),
  image: /* @__PURE__ */ e(zi, { "aria-hidden": !0 }),
  code: /* @__PURE__ */ e(Sn, { "aria-hidden": !0 }),
  sheet: /* @__PURE__ */ e(kn, { "aria-hidden": !0 }),
  deck: /* @__PURE__ */ e(wn, { "aria-hidden": !0 }),
  movie: /* @__PURE__ */ e(bn, { "aria-hidden": !0 }),
  archive: /* @__PURE__ */ e(fn, { "aria-hidden": !0 })
}, Re = {
  open: /* @__PURE__ */ e(Dn, { "aria-hidden": !0 }),
  apps: /* @__PURE__ */ e(Pn, { "aria-hidden": !0 }),
  info: /* @__PURE__ */ e($i, { "aria-hidden": !0 }),
  pencil: /* @__PURE__ */ e(Vi, { "aria-hidden": !0 }),
  trash: /* @__PURE__ */ e(Y, { "aria-hidden": !0 })
}, uo = [
  { id: "f-documents", name: "Documents", kind: "Folder", size: "214.6 MB", modified: "Today at 9:12 AM", tint: "blue", glyph: P.folder },
  { id: "f-projects", name: "Projects", kind: "Folder", size: "2.14 GB", modified: "Today at 7:55 AM", tint: "blue", glyph: P.folder },
  { id: "f-design", name: "Design", kind: "Folder", size: "628.9 MB", modified: "Today at 9:41 AM", tint: "blue", glyph: P.folder },
  { id: "f-desktop", name: "Desktop", kind: "Folder", size: "44.2 MB", modified: "Yesterday at 6:03 PM", tint: "blue", glyph: P.folder }
], ct = [
  { id: "d-nav", name: "Nav Redesign.sketch", kind: "Sketch Document", size: "24.8 MB", modified: "Today at 9:41 AM", tint: "purple", glyph: P.design },
  { id: "d-grid", name: "Icon Grid.svg", kind: "SVG Image", size: "412 KB", modified: "Today at 8:27 AM", tint: "teal", glyph: P.image },
  { id: "d-audit", name: "Palette Audit.pdf", kind: "PDF Document", size: "3.2 MB", modified: "Yesterday at 5:12 PM", tint: "red", glyph: P.doc },
  { id: "d-tokens", name: "May UI Tokens.json", kind: "JSON Document", size: "48 KB", modified: "Yesterday at 11:04 AM", tint: "gray", glyph: P.code },
  { id: "d-onboarding", name: "Onboarding Flow.key", kind: "Keynote Presentation", size: "112.4 MB", modified: "4 Sep 2026", tint: "orange", glyph: P.deck },
  { id: "d-walkthrough", name: "Handoff Walkthrough.mov", kind: "QuickTime Movie", size: "486.1 MB", modified: "2 Sep 2026", tint: "indigo", glyph: P.movie },
  { id: "d-scale", name: "Type Scale.numbers", kind: "Numbers Spreadsheet", size: "268 KB", modified: "28 Aug 2026", tint: "green", glyph: P.sheet },
  { id: "d-archive", name: "Archive 2025.zip", kind: "ZIP Archive", size: "1.24 GB", modified: "12 Aug 2026", tint: "gray", glyph: P.archive }
], ht = [
  { id: "p-mercury", name: "Mercury", kind: "Folder", size: "1.42 GB", modified: "Today at 7:55 AM", tint: "blue", glyph: P.folder },
  { id: "p-mayui", name: "May UI", kind: "Folder", size: "684.2 MB", modified: "Yesterday at 9:18 PM", tint: "blue", glyph: P.folder },
  { id: "p-roadmap", name: "Roadmap Q4.numbers", kind: "Numbers Spreadsheet", size: "812 KB", modified: "5 Sep 2026", tint: "green", glyph: P.sheet },
  { id: "p-notes", name: "Release Notes.md", kind: "Markdown Document", size: "12 KB", modified: "5 Sep 2026", tint: "gray", glyph: P.code }
], ut = [
  { id: "o-receipts", name: "Scanned Receipts", kind: "Folder", size: "96.4 MB", modified: "1 Sep 2026", tint: "blue", glyph: P.folder },
  { id: "o-invoice", name: "Invoice 2026-08.pdf", kind: "PDF Document", size: "184 KB", modified: "31 Aug 2026", tint: "red", glyph: P.doc },
  { id: "o-lease", name: "Lease Agreement.pdf", kind: "PDF Document", size: "1.8 MB", modified: "27 Aug 2026", tint: "red", glyph: P.doc },
  { id: "o-recipes", name: "Family Recipes.rtf", kind: "Rich Text Document", size: "62 KB", modified: "19 Jul 2026", tint: "gray", glyph: P.doc }
], po = [
  { id: "m-applications", name: "Applications", kind: "Folder", size: "38.4 GB", modified: "6 Sep 2026", tint: "gray", glyph: P.folder },
  { id: "m-library", name: "Library", kind: "Folder", size: "14.9 GB", modified: "6 Sep 2026", tint: "gray", glyph: P.folder },
  { id: "m-system", name: "System", kind: "Folder", size: "11.2 GB", modified: "22 Aug 2026", tint: "gray", glyph: P.folder },
  { id: "m-users", name: "Users", kind: "Folder", size: "312.7 GB", modified: "Today at 9:41 AM", tint: "gray", glyph: P.folder }
], ha = (...i) => [...ct, ...ht, ...ut].filter((n) => i.includes(n.name)), mo = {
  icloud: uo,
  documents: ut,
  projects: ht,
  design: ct,
  "macintosh-hd": po,
  "time-machine": [],
  network: [],
  locations: [],
  tags: [],
  "tag-review": ha("Nav Redesign.sketch", "Palette Audit.pdf", "Onboarding Flow.key"),
  "tag-client": ha("Roadmap Q4.numbers", "Invoice 2026-08.pdf"),
  "tag-archive": ha("Archive 2025.zip", "Family Recipes.rtf")
};
function ua({ colour: i }) {
  return /* @__PURE__ */ e(
    "span",
    {
      style: {
        display: "block",
        width: "var(--may-space-3)",
        height: "var(--may-space-3)",
        borderRadius: "var(--may-radius-full)",
        background: i
      }
    }
  );
}
const mi = [
  {
    id: "icloud",
    label: "iCloud Drive",
    icon: ae.cloud,
    children: [
      { id: "documents", label: "Documents", icon: ae.folder },
      { id: "projects", label: "Projects", icon: ae.folder, badge: 2 },
      { id: "design", label: "Design", icon: ae.folder, badge: 8 }
    ]
  },
  {
    id: "locations",
    label: "Locations",
    icon: ae.drive,
    children: [
      { id: "macintosh-hd", label: "Macintosh HD", icon: ae.drive },
      // The backup disk is not plugged in. Finder greys it out rather than
      // hiding it, so the sidebar keeps the same shape between trips.
      { id: "time-machine", label: "Time Machine", icon: ae.drive, disabled: !0 },
      { id: "network", label: "Network", icon: ae.globe }
    ]
  },
  {
    id: "tags",
    label: "Tags",
    icon: ae.tag,
    children: [
      { id: "tag-review", label: "Design Review", icon: /* @__PURE__ */ e(ua, { colour: "var(--may-red)" }), badge: 3 },
      { id: "tag-client", label: "Client Work", icon: /* @__PURE__ */ e(ua, { colour: "var(--may-blue)" }) },
      { id: "tag-archive", label: "Archive", icon: /* @__PURE__ */ e(ua, { colour: "var(--may-gray)" }) }
    ]
  }
];
function pt(i, n, r = []) {
  for (const o of i) {
    const d = [...r, o];
    if (o.id === n) return d;
    const u = o.children ? pt(o.children, n, d) : null;
    if (u) return u;
  }
  return null;
}
const go = [
  { label: "Icons", value: "icons" },
  { label: "List", value: "list" },
  { label: "Columns", value: "columns" },
  { label: "Gallery", value: "gallery" }
];
function yo() {
  const [i, n] = h("design"), [r, o] = h("d-nav"), [d, u] = h(""), [s, l] = h("list"), [v, p] = h(null), w = mo[i] ?? [], A = d ? w.filter((x) => x.name.toLowerCase().includes(d.trim().toLowerCase())) : w, b = (pt(mi, i) ?? []).map((x) => ({
    label: x.label,
    icon: x.icon,
    onClick: () => {
      n(x.id), p(null);
    }
  })), R = w.find((x) => x.id === r) ?? A[0], f = (x) => {
    p(R ? `${x} — “${R.name}”` : x);
  }, G = [
    { id: "open", label: "Open", icon: Re.open, shortcut: ["cmd", "o"], onSelect: () => f("Open") },
    {
      id: "open-with",
      label: "Open With",
      icon: Re.apps,
      items: [
        { id: "ow-preview", label: "Preview", onSelect: () => f("Open with Preview") },
        { id: "ow-sketch", label: "Sketch", onSelect: () => f("Open with Sketch") },
        { id: "ow-figma", label: "Figma", onSelect: () => f("Open with Figma") },
        { id: "ow-xcode", label: "Xcode", disabled: !0 },
        { type: "separator" },
        { id: "ow-other", label: "Other…", shortcut: ["cmd", "shift", "o"], onSelect: () => f("Choose application") }
      ]
    },
    { type: "separator" },
    { id: "info", label: "Get Info", icon: Re.info, shortcut: ["cmd", "i"], onSelect: () => f("Get Info") },
    { id: "rename", label: "Rename", icon: Re.pencil, shortcut: ["enter"], onSelect: () => f("Rename") },
    { type: "separator" },
    {
      id: "trash",
      label: "Move to Trash",
      icon: Re.trash,
      shortcut: ["cmd", "backspace"],
      destructive: !0,
      onSelect: () => f("Moved to Trash")
    }
  ], Pe = (x) => {
    const re = x.target.closest("tbody tr");
    if (!(re instanceof HTMLTableRowElement)) return;
    const O = A[re.sectionRowIndex];
    O && o(O.id);
  }, D = [
    {
      key: "name",
      header: "Name",
      // The one column that survives the collapse to a phone: below 1024px the
      // table reshapes into grouped List rows and this becomes each row's title.
      primary: !0,
      render: (x) => /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
        /* @__PURE__ */ e(C, { gradient: x.tint, size: "sm", children: x.glyph }),
        /* @__PURE__ */ e("span", { children: x.name })
      ] })
    },
    { key: "kind", header: "Kind", width: "11rem" },
    { key: "size", header: "Size", numeric: !0, width: "7rem" },
    { key: "modified", header: "Date Modified", width: "13rem" }
  ], ue = v ?? (d ? `${A.length} of ${w.length} items` : `${w.length} items, 402.6 GB available`);
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        _a,
        {
          collapsible: !0,
          defaultSize: 244,
          min: 200,
          max: 360,
          dividerLabel: "Resize sidebar",
          style: { flex: 1, minHeight: 0 },
          children: [
            /* @__PURE__ */ e("div", { style: { padding: "var(--may-space-3)", height: "100%" }, children: /* @__PURE__ */ e(
              nt,
              {
                "aria-label": "Sidebar",
                nodes: mi,
                defaultExpandedIds: ["icloud", "locations", "tags"],
                selectedId: i,
                onSelect: (x) => {
                  n(x), u(""), p(null);
                }
              }
            ) }),
            /* @__PURE__ */ a(
              "div",
              {
                style: {
                  height: "100%",
                  minHeight: 0,
                  display: "grid",
                  gridTemplateRows: "auto minmax(0, 1fr) auto"
                },
                children: [
                  /* @__PURE__ */ a(te, { placement: "top", separator: !0, align: "between", variant: "surface", children: [
                    /* @__PURE__ */ e(za, { items: b, size: "sm", "aria-label": "Location" }),
                    /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
                      /* @__PURE__ */ e(
                        we,
                        {
                          "aria-label": "View",
                          size: "sm",
                          options: go,
                          value: s,
                          onValueChange: l
                        }
                      ),
                      /* @__PURE__ */ e(
                        Ie,
                        {
                          size: "sm",
                          placeholder: "Search",
                          value: d,
                          onValueChange: u,
                          "aria-label": "Search this folder",
                          style: { width: "13rem" }
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e("div", { style: { minHeight: 0, display: "flex", padding: "var(--may-space-4)" }, children: /* @__PURE__ */ e(rt, { items: G, label: "File actions", children: /* @__PURE__ */ e(
                    "div",
                    {
                      onContextMenu: Pe,
                      style: { flex: 1, minWidth: 0, display: "flex" },
                      children: /* @__PURE__ */ e(
                        ta,
                        {
                          columns: D,
                          data: A,
                          rowKey: "id",
                          size: s === "icons" || s === "gallery" ? "md" : "sm",
                          zebra: !0,
                          stickyHeader: !0,
                          maxHeight: "100%",
                          selectedKeys: r ? [r] : [],
                          onRowClick: (x) => {
                            o(x.id), p(null);
                          },
                          emptyState: /* @__PURE__ */ e(
                            K,
                            {
                              title: d ? "No Results" : "Folder Is Empty",
                              description: d ? `Nothing in this folder matches “${d.trim()}”.` : "Drag files here, or use File ▸ New Folder to start one."
                            }
                          ),
                          style: { height: "100%" }
                        }
                      )
                    }
                  ) }) }),
                  /* @__PURE__ */ e(te, { placement: "bottom", separator: !0, align: "center", variant: "surface", children: /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: ue }) })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
const gi = (i) => /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, focusable: "false", children: /* @__PURE__ */ e("path", { d: i, fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), q = {
  compose: /* @__PURE__ */ e(Ve, { "aria-hidden": !0 }),
  reply: /* @__PURE__ */ e(Le, { "aria-hidden": !0 }),
  /* Ionicons has no reply-all arrow, so this one stays hand-drawn. */
  replyAll: gi("M8 7 3 11l5 4m5-8-5 4 5 4m-5-4h6a7 7 0 0 1 7 7v1"),
  forward: /* @__PURE__ */ e(Qe, { "aria-hidden": !0 }),
  inbox: /* @__PURE__ */ e(fe, { "aria-hidden": !0 }),
  sent: /* @__PURE__ */ e(Ta, { "aria-hidden": !0 }),
  drafts: /* @__PURE__ */ e(ji, { "aria-hidden": !0 }),
  gear: /* @__PURE__ */ e(Ue, { "aria-hidden": !0 }),
  moon: /* @__PURE__ */ e(Ui, { "aria-hidden": !0 }),
  trash: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }),
  /* The ⌘ loop-square is not in Ionicons either. */
  command: gi("M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3Z")
}, de = {
  inbox: /* @__PURE__ */ e(fe, { "aria-hidden": !0 }),
  star: /* @__PURE__ */ e(aa, { "aria-hidden": !0 }),
  flag: /* @__PURE__ */ e(Me, { "aria-hidden": !0 }),
  drafts: /* @__PURE__ */ e(ea, { "aria-hidden": !0 }),
  send: /* @__PURE__ */ e(Ta, { "aria-hidden": !0 }),
  archive: /* @__PURE__ */ e(He, { "aria-hidden": !0 }),
  trash: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }),
  gear: /* @__PURE__ */ e(Ue, { "aria-hidden": !0 })
}, vo = [
  {
    id: "actions",
    heading: "Actions",
    items: [
      { id: "compose", label: "New Message", icon: q.compose, shortcut: ["cmd", "n"], keywords: ["write", "draft"] },
      { id: "reply", label: "Reply", icon: q.reply, shortcut: ["cmd", "r"] },
      { id: "reply-all", label: "Reply All", icon: q.replyAll, shortcut: ["cmd", "shift", "r"] },
      { id: "forward", label: "Forward", icon: q.forward, shortcut: ["cmd", "shift", "f"] },
      {
        id: "trash",
        label: "Move to Trash",
        icon: q.trash,
        shortcut: ["cmd", "backspace"],
        destructive: !0,
        keywords: ["delete", "bin", "remove"]
      }
    ]
  },
  {
    id: "navigation",
    heading: "Navigation",
    items: [
      { id: "go-inbox", label: "Go to Inbox", icon: q.inbox, shortcut: ["cmd", "1"], hint: "12 unread" },
      { id: "go-sent", label: "Go to Sent", icon: q.sent, shortcut: ["cmd", "2"] },
      { id: "go-drafts", label: "Go to Drafts", icon: q.drafts, shortcut: ["cmd", "3"], hint: "2 drafts" }
    ]
  },
  {
    id: "settings",
    heading: "Settings",
    items: [
      { id: "preferences", label: "Preferences…", icon: q.gear, shortcut: ["cmd", ","] },
      { id: "theme", label: "Toggle Theme", icon: q.moon, keywords: ["dark", "light", "appearance"] }
    ]
  }
], fo = [
  { id: "inbox", label: "Inbox", icon: de.inbox, badge: 12 },
  { id: "vip", label: "VIP", icon: de.star, badge: 3 },
  { id: "flagged", label: "Flagged", icon: de.flag, badge: void 0 },
  { id: "drafts", label: "Drafts", icon: de.drafts, badge: 2 },
  { id: "sent", label: "Sent", icon: de.send, badge: void 0 }
];
function bo() {
  const [i, n] = h(!0), [r, o] = h("inbox"), [d, u] = h(["reply", "go-inbox", "theme"]), [s, l] = h(null);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a(
          Ha,
          {
            "aria-label": "Mailboxes",
            header: /* @__PURE__ */ e(Va, {}),
            footer: /* @__PURE__ */ e(F, { icon: de.gear, onClick: () => n(!0), children: "Commands…" }),
            children: [
              /* @__PURE__ */ e(pe, { title: "Favourites", children: fo.map((v) => /* @__PURE__ */ e(
                F,
                {
                  icon: v.icon,
                  badge: v.badge,
                  active: r === v.id,
                  onClick: () => o(v.id),
                  children: v.label
                },
                v.id
              )) }),
              /* @__PURE__ */ a(pe, { title: "iCloud", children: [
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: de.archive,
                    active: r === "archive",
                    onClick: () => o("archive"),
                    children: "Archive"
                  }
                ),
                /* @__PURE__ */ e(
                  F,
                  {
                    icon: de.trash,
                    active: r === "bin",
                    onClick: () => o("bin"),
                    children: "Bin"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            style: {
              flex: 1,
              minWidth: 0,
              margin: "var(--may-space-2)",
              marginInlineStart: 0,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: "var(--may-radius-card)",
              background: "var(--may-color-surface)"
            },
            children: [
              /* @__PURE__ */ a(te, { placement: "top", separator: !0, align: "between", variant: "surface", children: [
                /* @__PURE__ */ e(t, { variant: "headline", children: "Inbox" }),
                /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
                  /* @__PURE__ */ a(c, { direction: "row", gap: 1, align: "center", children: [
                    /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "Reply" }),
                    /* @__PURE__ */ e(wa, { live: !0, children: "cmd" }),
                    /* @__PURE__ */ e(wa, { live: !0, children: "r" })
                  ] }),
                  /* @__PURE__ */ e(
                    m,
                    {
                      variant: "gray",
                      size: "sm",
                      leadingIcon: q.command,
                      onClick: () => n(!0),
                      children: "Commands"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e(
                "div",
                {
                  "data-slot": "scroll-area",
                  style: {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    padding: "var(--may-space-6)"
                  },
                  children: /* @__PURE__ */ a(c, { direction: "column", gap: 5, style: { maxWidth: "44rem" }, children: [
                    /* @__PURE__ */ e(t, { variant: "title-2", children: "Re: compiler timings" }),
                    /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
                      /* @__PURE__ */ e(B, { name: "Grace Hopper", size: "md" }),
                      /* @__PURE__ */ a(c, { direction: "column", gap: 0, children: [
                        /* @__PURE__ */ e(t, { variant: "subheadline", weight: "semibold", children: "Grace Hopper" }),
                        /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "To: Ada Lovelace, Katherine Johnson — Today at 9:41 AM" })
                      ] })
                    ] }),
                    /* @__PURE__ */ e(t, { variant: "body", children: "Timings attached. The linker is still the long pole at 41 seconds cold, and about nine of those are spent re-reading symbols we already have on disk." }),
                    /* @__PURE__ */ e(t, { variant: "body", children: "I have a patch that halves it by caching the symbol table between runs, but it wants a proper review before Friday — it touches the incremental path, and that is the one place we cannot be clever without paying for it later." }),
                    /* @__PURE__ */ e(t, { variant: "body", tone: "secondary", children: "Grace" }),
                    /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: s ? `Last command: ${s}` : "Press Commands, or ⌘K in a real window, to run anything from here." })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e(
          lt,
          {
            open: i,
            onOpenChange: n,
            groups: vo,
            hotkey: !1,
            recentIds: d,
            placeholder: "Search commands in Mail",
            label: "Mail commands",
            onSelect: (v) => {
              l(v.label), u((p) => [v.id, ...p.filter((w) => w !== v.id)].slice(0, 5)), v.id === "go-inbox" && o("inbox"), v.id === "go-sent" && o("sent"), v.id === "go-drafts" && o("drafts");
            },
            emptyState: /* @__PURE__ */ e(
              K,
              {
                size: "sm",
                title: "No Commands",
                description: "Nothing matches. Try “reply”, “inbox”, or “theme”."
              }
            )
          }
        )
      ]
    }
  );
}
const Oe = {
  general: /* @__PURE__ */ e(Ue, { "aria-hidden": !0 }),
  appearance: /* @__PURE__ */ e(Bn, { "aria-hidden": !0 }),
  notifications: /* @__PURE__ */ e(Nn, { "aria-hidden": !0 }),
  privacy: /* @__PURE__ */ e(On, { "aria-hidden": !0 }),
  advanced: /* @__PURE__ */ e(Rn, { "aria-hidden": !0 })
}, Ne = {
  mail: /* @__PURE__ */ e($e, { "aria-hidden": !0 }),
  person: /* @__PURE__ */ e(Ti, { "aria-hidden": !0 }),
  calendar: /* @__PURE__ */ e(Aa, { "aria-hidden": !0 }),
  bolt: /* @__PURE__ */ e(Hi, { "aria-hidden": !0 }),
  megaphone: /* @__PURE__ */ e(Fn, { "aria-hidden": !0 })
}, wo = [
  { label: "Inbox — iCloud", value: "icloud" },
  { label: "Inbox — Work", value: "work" },
  { label: "All Inboxes", value: "all" },
  { label: "VIP", value: "vip" }
], ko = [
  { label: "Automatically", value: "auto" },
  { label: "Every 5 minutes", value: "5" },
  { label: "Every 15 minutes", value: "15" },
  { label: "Every hour", value: "60" },
  { label: "Manually", value: "manual" }
], So = [
  { label: "Include all original text", value: "all" },
  { label: "Include selected text only", value: "selected" },
  { label: "Do not include original text", value: "none" }
], Co = [
  { id: "blue", label: "Blue", colour: "var(--may-blue)" },
  { id: "purple", label: "Purple", colour: "var(--may-purple)" },
  { id: "pink", label: "Pink", colour: "var(--may-pink)" },
  { id: "red", label: "Red", colour: "var(--may-red)" },
  { id: "orange", label: "Orange", colour: "var(--may-orange)" },
  { id: "yellow", label: "Yellow", colour: "var(--may-yellow)" },
  { id: "green", label: "Green", colour: "var(--may-green)" },
  { id: "graphite", label: "Graphite", colour: "var(--may-gray)" }
], yi = ["Extra Small", "Small", "Medium", "Large", "Extra Large", "Huge", "Largest"], xo = [
  { id: "new-mail", title: "New Mail", subtitle: "Banners, sounds and badges", tile: Ne.mail, tint: "blue" },
  { id: "vip", title: "VIP Mail", subtitle: "Always alert, even in Focus", tile: Ne.person, tint: "orange" },
  { id: "invites", title: "Calendar Invitations", subtitle: "Replies and updates", tile: Ne.calendar, tint: "red" },
  { id: "updates", title: "Software Updates", subtitle: "When an update is ready to install", tile: Ne.bolt, tint: "indigo" },
  { id: "news", title: "Product News", subtitle: "Occasional announcements", tile: Ne.megaphone, tint: "pink" }
];
function pa({ colour: i }) {
  return /* @__PURE__ */ e(
    "span",
    {
      style: {
        display: "block",
        width: "var(--may-space-3)",
        height: "var(--may-space-3)",
        borderRadius: "var(--may-radius-full)",
        background: i
      }
    }
  );
}
function Ao() {
  return /* @__PURE__ */ e(
    xi,
    {
      "aria-hidden": !0,
      style: { width: "var(--may-space-3)", height: "var(--may-space-3)" }
    }
  );
}
function Be({ children: i }) {
  return /* @__PURE__ */ e(
    c,
    {
      direction: "column",
      gap: 6,
      style: { maxWidth: "34rem", paddingBlock: "var(--may-space-5)" },
      children: i
    }
  );
}
function Mo() {
  const [i, n] = h("icloud"), [r, o] = h("auto"), [d, u] = h("all"), [s, l] = h(!0), [v, p] = h(!0), [w, A] = h(!1), [T, b] = h(!1), [R, f] = h("auto"), [G, Pe] = h("blue"), [D, ue] = h(3), [x, re] = h({
    "new-mail": !0,
    vip: !0,
    invites: !0,
    updates: !1,
    news: !1
  });
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--may-space-8)",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        j,
        {
          surface: "base",
          radius: "sheet",
          shadow: "xl",
          style: {
            width: "100%",
            maxWidth: "54rem",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ a(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  alignItems: "center",
                  padding: "var(--may-space-3) var(--may-space-4)"
                },
                children: [
                  /* @__PURE__ */ a(c, { direction: "row", gap: 2, align: "center", children: [
                    /* @__PURE__ */ e(pa, { colour: "var(--may-red)" }),
                    /* @__PURE__ */ e(pa, { colour: "var(--may-yellow)" }),
                    /* @__PURE__ */ e(pa, { colour: "var(--may-green)" })
                  ] }),
                  /* @__PURE__ */ e(t, { variant: "subheadline", weight: "semibold", children: "Mail Settings" }),
                  /* @__PURE__ */ e("span", {})
                ]
              }
            ),
            /* @__PURE__ */ a(
              Qi,
              {
                defaultValue: "general",
                variant: "pill",
                style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" },
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        paddingInline: "var(--may-space-4)",
                        paddingBlockEnd: "var(--may-space-3)"
                      },
                      children: /* @__PURE__ */ a(Xi, { "aria-label": "Settings sections", children: [
                        /* @__PURE__ */ e(le, { value: "general", icon: Oe.general, children: "General" }),
                        /* @__PURE__ */ e(le, { value: "appearance", icon: Oe.appearance, children: "Appearance" }),
                        /* @__PURE__ */ e(le, { value: "notifications", icon: Oe.notifications, children: "Notifications" }),
                        /* @__PURE__ */ e(le, { value: "privacy", icon: Oe.privacy, children: "Privacy" }),
                        /* @__PURE__ */ e(le, { value: "advanced", icon: Oe.advanced, children: "Advanced" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ a(
                    "div",
                    {
                      "data-slot": "scroll-area",
                      style: {
                        flex: 1,
                        minHeight: 0,
                        overflowY: "auto",
                        paddingInline: "var(--may-space-6)",
                        paddingBlockEnd: "var(--may-space-4)"
                      },
                      children: [
                        /* @__PURE__ */ e(oe, { value: "general", keepMounted: !0, children: /* @__PURE__ */ a(Be, { children: [
                          /* @__PURE__ */ e(
                            k,
                            {
                              label: "Default Mailbox",
                              description: "Where new messages land when you have more than one account.",
                              children: /* @__PURE__ */ e(J, { options: wo, value: i, onValueChange: n })
                            }
                          ),
                          /* @__PURE__ */ e(k, { label: "Check for New Messages", children: /* @__PURE__ */ e(J, { options: ko, value: r, onValueChange: o }) }),
                          /* @__PURE__ */ e(k, { label: "Message List", children: /* @__PURE__ */ a(c, { direction: "column", gap: 3, children: [
                            /* @__PURE__ */ e(_, { checked: s, onCheckedChange: l, children: "Organise by conversation" }),
                            /* @__PURE__ */ e(_, { checked: v, onCheckedChange: p, children: "Show contact photos" }),
                            /* @__PURE__ */ e(
                              _,
                              {
                                checked: w,
                                onCheckedChange: A,
                                description: "Adds two lines of the message body under each subject.",
                                children: "Show message preview"
                              }
                            )
                          ] }) }),
                          /* @__PURE__ */ e(
                            k,
                            {
                              label: "Read Receipts",
                              description: "Senders can tell when you have opened their message.",
                              children: /* @__PURE__ */ e(Ae, { checked: T, onCheckedChange: b, children: "Send read receipts" })
                            }
                          )
                        ] }) }),
                        /* @__PURE__ */ e(oe, { value: "appearance", keepMounted: !0, children: /* @__PURE__ */ a(Be, { children: [
                          /* @__PURE__ */ e(
                            k,
                            {
                              label: "Appearance",
                              description: "Auto follows the system between light at sunrise and dark at sunset.",
                              children: /* @__PURE__ */ e(
                                we,
                                {
                                  "aria-label": "Appearance",
                                  value: R,
                                  onValueChange: f,
                                  options: [
                                    { label: "Light", value: "light" },
                                    { label: "Dark", value: "dark" },
                                    { label: "Auto", value: "auto" }
                                  ]
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ e(k, { label: "Accent Colour", children: /* @__PURE__ */ e(c, { direction: "row", gap: 3, wrap: !0, children: Co.map((O) => /* @__PURE__ */ e(
                            j,
                            {
                              as: "button",
                              type: "button",
                              radius: "full",
                              "aria-label": O.label,
                              "aria-pressed": G === O.id,
                              onClick: () => Pe(O.id),
                              style: {
                                width: "var(--may-space-6)",
                                height: "var(--may-space-6)",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // A swatch IS its colour, so nothing is drawn around
                                // it — the chosen one carries a checkmark instead,
                                // which survives both themes and colour blindness.
                                appearance: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                                background: O.colour,
                                color: "var(--may-color-on-primary)"
                              },
                              children: G === O.id && /* @__PURE__ */ e(Ao, {})
                            },
                            O.id
                          )) }) }),
                          /* @__PURE__ */ e(
                            k,
                            {
                              label: "Text Size",
                              description: "Applies to the message list and the reading pane.",
                              children: /* @__PURE__ */ e(
                                Ge,
                                {
                                  "aria-label": "Text size",
                                  min: 0,
                                  max: yi.length - 1,
                                  step: 1,
                                  ticks: !0,
                                  showValue: !0,
                                  value: D,
                                  onValueChange: ue,
                                  formatValue: (O) => yi[O] ?? "",
                                  leading: /* @__PURE__ */ e(t, { as: "span", variant: "caption-2", tone: "secondary", children: "A" }),
                                  trailing: /* @__PURE__ */ e(t, { as: "span", variant: "title-3", tone: "secondary", children: "A" })
                                }
                              )
                            }
                          )
                        ] }) }),
                        /* @__PURE__ */ e(oe, { value: "notifications", keepMounted: !0, children: /* @__PURE__ */ a(Be, { children: [
                          /* @__PURE__ */ e(
                            I,
                            {
                              header: "Allow Notifications",
                              footer: "Focus can still hold these back while you are working.",
                              children: xo.map((O) => /* @__PURE__ */ e(
                                g,
                                {
                                  leading: /* @__PURE__ */ e(C, { gradient: O.tint, size: "md", children: O.tile }),
                                  title: O.title,
                                  subtitle: O.subtitle,
                                  accessory: /* @__PURE__ */ e(
                                    Ae,
                                    {
                                      checked: x[O.id] ?? !1,
                                      onCheckedChange: (gt) => re((yt) => ({ ...yt, [O.id]: gt })),
                                      "aria-label": O.title
                                    }
                                  )
                                },
                                O.id
                              ))
                            }
                          ),
                          /* @__PURE__ */ e(k, { label: "Notification Sound", children: /* @__PURE__ */ e(
                            J,
                            {
                              defaultValue: "ding",
                              options: [
                                { label: "Ding", value: "ding" },
                                { label: "Hero", value: "hero" },
                                { label: "Submarine", value: "submarine" },
                                { label: "None", value: "none" }
                              ]
                            }
                          ) })
                        ] }) }),
                        /* @__PURE__ */ e(oe, { value: "privacy", keepMounted: !0, children: /* @__PURE__ */ a(Be, { children: [
                          /* @__PURE__ */ e(
                            k,
                            {
                              label: "Mail Privacy Protection",
                              description: "Hides what senders can learn about you when you open a message.",
                              children: /* @__PURE__ */ a(c, { direction: "column", gap: 3, children: [
                                /* @__PURE__ */ e(_, { defaultChecked: !0, children: "Hide IP address from senders" }),
                                /* @__PURE__ */ e(_, { defaultChecked: !0, children: "Block all remote content" }),
                                /* @__PURE__ */ e(_, { description: "Trackers can still see that the mailbox exists.", children: "Load remote images in trusted mail" })
                              ] })
                            }
                          ),
                          /* @__PURE__ */ e(k, { label: "Block Cookies", children: /* @__PURE__ */ a(Ze, { defaultValue: "visited", "aria-label": "Block cookies", children: [
                            /* @__PURE__ */ e($, { value: "always", description: "Nothing is kept between sessions.", children: "Always" }),
                            /* @__PURE__ */ e($, { value: "visited", children: "Allow from websites I visit" }),
                            /* @__PURE__ */ e($, { value: "never", children: "Never block" })
                          ] }) }),
                          /* @__PURE__ */ a(c, { direction: "row", gap: 3, wrap: !0, children: [
                            /* @__PURE__ */ e(m, { variant: "gray", size: "sm", children: "Manage Website Data…" }),
                            /* @__PURE__ */ e(m, { variant: "tinted", tone: "danger", size: "sm", children: "Remove All Website Data" })
                          ] })
                        ] }) }),
                        /* @__PURE__ */ e(oe, { value: "advanced", keepMounted: !0, children: /* @__PURE__ */ a(Be, { children: [
                          /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "These settings apply to the iCloud account only. Changing them can stop mail arriving." }),
                          /* @__PURE__ */ e(Je, { trigger: "Incoming Mail Server", defaultOpen: !0, children: /* @__PURE__ */ a(
                            c,
                            {
                              direction: "column",
                              gap: 4,
                              style: { paddingBlock: "var(--may-space-3)" },
                              children: [
                                /* @__PURE__ */ e(k, { label: "Host Name", children: /* @__PURE__ */ e(N, { defaultValue: "imap.mail.me.com", spellCheck: !1 }) }),
                                /* @__PURE__ */ e(k, { label: "Port", description: "993 with TLS, 143 without.", children: /* @__PURE__ */ e(N, { defaultValue: "993", inputMode: "numeric" }) }),
                                /* @__PURE__ */ e(k, { label: "Authentication", children: /* @__PURE__ */ e(
                                  J,
                                  {
                                    defaultValue: "oauth",
                                    options: [
                                      { label: "OAuth 2", value: "oauth" },
                                      { label: "Password", value: "password" },
                                      { label: "Kerberos v5", value: "kerberos" },
                                      { label: "None", value: "none", disabled: !0 }
                                    ]
                                  }
                                ) })
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ e(Je, { trigger: "Outgoing Mail Server", children: /* @__PURE__ */ a(
                            c,
                            {
                              direction: "column",
                              gap: 4,
                              style: { paddingBlock: "var(--may-space-3)" },
                              children: [
                                /* @__PURE__ */ e(
                                  k,
                                  {
                                    label: "Host Name",
                                    error: "Mail couldn’t reach this server. Check the name and try again.",
                                    children: /* @__PURE__ */ e(N, { defaultValue: "smtp.mail.me.con", spellCheck: !1 })
                                  }
                                ),
                                /* @__PURE__ */ e(
                                  k,
                                  {
                                    label: "Quoting",
                                    description: "What gets carried into a reply below your own text.",
                                    children: /* @__PURE__ */ e(J, { options: So, value: d, onValueChange: u })
                                  }
                                ),
                                /* @__PURE__ */ e(_, { defaultChecked: !0, children: "Use TLS for outgoing mail" })
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ e(Je, { trigger: "Offline Storage", children: /* @__PURE__ */ a(
                            c,
                            {
                              direction: "column",
                              gap: 4,
                              style: { paddingBlock: "var(--may-space-3)" },
                              children: [
                                /* @__PURE__ */ e(
                                  k,
                                  {
                                    label: "Keep Copies of Messages",
                                    description: "Older messages stay on the server and download when opened.",
                                    children: /* @__PURE__ */ e(
                                      J,
                                      {
                                        defaultValue: "year",
                                        options: [
                                          { label: "All messages and attachments", value: "all" },
                                          { label: "All messages, attachments on demand", value: "ondemand" },
                                          { label: "Last 12 months", value: "year" },
                                          { label: "Last 30 days", value: "month" }
                                        ]
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ e(
                                  k,
                                  {
                                    label: "Mailbox Cache",
                                    description: "Last rebuilt 214 days ago. Rebuilding re-downloads every message.",
                                    children: /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
                                      /* @__PURE__ */ e(m, { variant: "gray", size: "sm", children: "Rebuild Mailbox" }),
                                      /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "4.2 GB on this Mac" })
                                    ] })
                                  }
                                )
                              ]
                            }
                          ) })
                        ] }) })
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
const ma = [
  {
    id: "u1",
    name: "Ada Lovelace",
    email: "ada@mayui.dev",
    role: "Owner",
    teams: ["Design Systems", "Platform"],
    lastActive: "2 minutes ago",
    activeMinutes: 2
  },
  {
    id: "u2",
    name: "Grace Hopper",
    email: "grace@mayui.dev",
    role: "Admin",
    teams: ["Platform", "Tooling"],
    lastActive: "18 minutes ago",
    activeMinutes: 18
  },
  {
    id: "u3",
    name: "Katherine Johnson",
    email: "katherine@mayui.dev",
    role: "Admin",
    teams: ["Research"],
    lastActive: "1 hour ago",
    activeMinutes: 62
  },
  {
    id: "u4",
    name: "Margaret Hamilton",
    email: "margaret@mayui.dev",
    role: "Member",
    teams: ["Platform"],
    lastActive: "3 hours ago",
    activeMinutes: 194
  },
  {
    id: "u5",
    name: "Radia Perlman",
    email: "radia@mayui.dev",
    role: "Member",
    teams: ["Design Systems", "Docs"],
    lastActive: "Yesterday",
    activeMinutes: 1460
  },
  {
    id: "u6",
    name: "Hedy Lamarr",
    email: "hedy@mayui.dev",
    role: "Member",
    teams: ["Research", "Docs"],
    lastActive: "2 days ago",
    activeMinutes: 2980
  },
  {
    id: "u7",
    name: "Barbara Liskov",
    email: "barbara@mayui.dev",
    role: "Member",
    teams: ["Tooling"],
    lastActive: "Last week",
    activeMinutes: 9120
  },
  {
    id: "u8",
    name: "Sophie Wilson",
    email: "sophie@mayui.dev",
    role: "Pending",
    teams: ["Platform"],
    lastActive: "Invited 2 days ago",
    activeMinutes: 999999
  },
  {
    id: "u9",
    name: "Karen Spärck Jones",
    email: "karen@mayui.dev",
    role: "Pending",
    teams: ["Research"],
    lastActive: "Invited 6 hours ago",
    activeMinutes: 999999
  }
], Io = {
  Owner: "tint",
  Admin: "success",
  Member: "neutral",
  Pending: "warning"
}, To = [
  { label: "All", value: "all" },
  { label: "Admins", value: "admins" },
  { label: "Pending", value: "pending" }
], Po = [
  { label: "Member — can view and comment", value: "member" },
  { label: "Admin — can manage members", value: "admin" },
  { label: "Billing — can manage the plan", value: "billing" }
];
function Do() {
  const [i, n] = h("all"), [r, o] = h(!1), [d, u] = h(!1), s = fa(
    () => ma.filter(
      (p) => i === "admins" ? p.role === "Admin" || p.role === "Owner" : i === "pending" ? p.role === "Pending" : !0
    ),
    [i]
  );
  function l() {
    u(!0), window.setTimeout(() => {
      u(!1), o(!1), M("Invitation sent", {
        tone: "success",
        description: "They will show as Pending until the link is accepted."
      });
    }, 900);
  }
  const v = [
    {
      key: "name",
      header: "Member",
      filter: "text",
      width: 280,
      minWidth: 220,
      render: (p) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "var(--may-space-3)" }, children: [
        /* @__PURE__ */ e(B, { name: p.name, size: "sm" }),
        /* @__PURE__ */ a("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ e(t, { variant: "subheadline", weight: "semibold", clamp: 1, children: p.name }),
          /* @__PURE__ */ e(t, { variant: "caption-1", tone: "secondary", clamp: 1, children: p.email })
        ] })
      ] })
    },
    {
      key: "role",
      header: "Role",
      filter: "select",
      width: 120,
      render: (p) => /* @__PURE__ */ e(W, { tone: Io[p.role], children: p.role })
    },
    {
      key: "teams",
      header: "Teams",
      sortable: !1,
      minWidth: 200,
      // The raw property is an array, so the column has to say what a filter and
      // a sort should compare — otherwise it reads "[object Object]".
      value: (p) => p.teams.join(", "),
      render: (p) => /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--may-space-1)" }, children: p.teams.map((w) => /* @__PURE__ */ e(ge, { size: "sm", children: w }, w)) })
    },
    {
      key: "lastActive",
      header: "Last active",
      width: 160,
      // Sorting must see the minutes, or "Yesterday" lands above "2 minutes ago".
      value: (p) => p.activeMinutes,
      render: (p) => /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", children: p.lastActive })
    },
    {
      key: "actions",
      // An actions column shows no header, but a `<th>` with no accessible name
      // leaves the whole column anonymous to a screen reader.
      header: /* @__PURE__ */ e(Da, { children: "Actions" }),
      width: 56,
      minWidth: 56,
      sortable: !1,
      resizable: !1,
      align: "end",
      render: (p) => /* @__PURE__ */ e(
        ye,
        {
          "aria-label": `Actions for ${p.name}`,
          placement: "bottom-end",
          trigger: /* @__PURE__ */ e(S, { "aria-label": `Actions for ${p.name}`, size: "sm", tone: "neutral", children: /* @__PURE__ */ e(be, { "aria-hidden": !0 }) }),
          items: Ro(p)
        }
      )
    }
  ];
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ e("div", { "data-slot": "scroll-area", style: { flex: 1, minHeight: 0, overflowY: "auto" }, children: /* @__PURE__ */ a(
          "div",
          {
            style: {
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "var(--may-space-8) var(--may-space-6) var(--may-space-12)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--may-space-6)"
            },
            children: [
              /* @__PURE__ */ a(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "var(--may-space-4)"
                  },
                  children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: "16rem" }, children: [
                      /* @__PURE__ */ e(xe, { level: 1, size: "title-1", children: "Members" }),
                      /* @__PURE__ */ a(t, { variant: "subheadline", tone: "secondary", children: [
                        ma.length,
                        " people in Design Systems · 3 seats left on the Team plan"
                      ] })
                    ] }),
                    /* @__PURE__ */ e(Ba, { max: 5, size: "sm", children: ma.map((p) => /* @__PURE__ */ e(B, { name: p.name }, p.id)) }),
                    /* @__PURE__ */ e(ra, { label: "Invite by email — ⇧⌘I", children: /* @__PURE__ */ e(m, { leadingIcon: /* @__PURE__ */ e(zn, { "aria-hidden": !0 }), onClick: () => o(!0), children: "Invite member" }) })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                we,
                {
                  "aria-label": "Filter members",
                  options: To,
                  value: i,
                  onValueChange: n
                }
              ),
              /* @__PURE__ */ e(
                $a,
                {
                  columns: v,
                  data: s,
                  rowKey: "id",
                  maxHeight: "30rem",
                  emptyState: /* @__PURE__ */ e(
                    K,
                    {
                      title: "No one here yet",
                      description: "Invite a teammate and they will show up as soon as they accept."
                    }
                  ),
                  noResultsState: /* @__PURE__ */ e(
                    K,
                    {
                      title: "No matching members",
                      description: "Clear the column filters to see everyone again."
                    }
                  )
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e(
          La,
          {
            open: r,
            onClose: () => o(!1),
            title: "Invite member",
            description: "They will get an email with a link that expires in 7 days.",
            footer: /* @__PURE__ */ a(ze, { children: [
              /* @__PURE__ */ e(m, { variant: "gray", onClick: () => o(!1), children: "Cancel" }),
              /* @__PURE__ */ e(m, { loading: d, onClick: l, children: "Send invite" })
            ] }),
            children: /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-4)" }, children: [
              /* @__PURE__ */ e(k, { label: "Email address", description: "Use their work address.", children: /* @__PURE__ */ e(N, { type: "email", placeholder: "name@mayui.dev", fullWidth: !0, autoComplete: "email" }) }),
              /* @__PURE__ */ e(k, { label: "Role", description: "Admins can add and remove members.", children: /* @__PURE__ */ e(J, { fullWidth: !0, options: Po, defaultValue: "member" }) })
            ] })
          }
        )
      ]
    }
  );
}
function Ro(i) {
  return [
    { label: "View profile", icon: /* @__PURE__ */ e(Wi, { "aria-hidden": !0 }), onSelect: () => {
    } },
    { label: "Change role…", shortcut: "⌘E", onSelect: () => {
    } },
    {
      label: "Resend invitation",
      separator: !0,
      disabled: i.role !== "Pending",
      onSelect: () => M(`Invitation resent to ${i.email}`)
    },
    {
      label: "Transfer ownership…",
      disabled: i.role === "Owner",
      onSelect: () => {
      }
    },
    {
      label: "Remove from team",
      icon: /* @__PURE__ */ e(Ln, { "aria-hidden": !0 }),
      shortcut: "⌘⌫",
      destructive: !0,
      separator: !0,
      // The owner cannot be removed, so the row that would break the team is
      // disabled rather than merely warned about.
      disabled: i.role === "Owner",
      onSelect: () => M(`${i.name} removed from Design Systems`, {
        tone: "danger",
        action: { label: "Undo", onClick: () => {
        } }
      })
    }
  ];
}
function Oo() {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "scroll-area",
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          style: {
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--may-space-10)",
            padding: "var(--may-space-10) var(--may-space-4)"
          },
          children: [
            /* @__PURE__ */ e(vi, {}),
            /* @__PURE__ */ a(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--may-space-3)",
                  width: "100%"
                },
                children: [
                  /* @__PURE__ */ e(t, { variant: "caption-1", tone: "tertiary", align: "center", children: "The same form after a failed attempt" }),
                  /* @__PURE__ */ e(
                    vi,
                    {
                      headingLevel: 2,
                      emailValue: "ada@mayui.dev",
                      passwordError: "Incorrect password. 3 attempts remaining before the account locks."
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function vi({ headingLevel: i = 1, emailValue: n, passwordError: r }) {
  const [o, d] = h(!1);
  return /* @__PURE__ */ e(H, { padding: "lg", style: { width: "100%", maxWidth: "23.75rem" }, children: /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-5)" }, children: [
    /* @__PURE__ */ a(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--may-space-3)",
          textAlign: "center"
        },
        children: [
          /* @__PURE__ */ e(C, { gradient: "spectrum", size: "lg", children: /* @__PURE__ */ e(No, {}) }),
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e(xe, { level: i, size: "title-2", children: "Sign in to May" }),
            /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "Use your May Account to continue to Design Systems." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-4)" }, children: [
      /* @__PURE__ */ e(k, { label: "Email", children: /* @__PURE__ */ e(
        N,
        {
          type: "email",
          fullWidth: !0,
          placeholder: "name@mayui.dev",
          autoComplete: "username",
          defaultValue: n
        }
      ) }),
      /* @__PURE__ */ e(k, { label: "Password", error: r, children: /* @__PURE__ */ e(
        N,
        {
          type: o ? "text" : "password",
          fullWidth: !0,
          placeholder: "Required",
          autoComplete: "current-password",
          defaultValue: r ? "brunelleschi" : void 0,
          suffix: /* @__PURE__ */ e(
            S,
            {
              "aria-label": o ? "Hide password" : "Show password",
              size: "sm",
              tone: "neutral",
              onClick: () => d((u) => !u),
              children: o ? /* @__PURE__ */ e(Fo, {}) : /* @__PURE__ */ e(Bo, {})
            }
          )
        }
      ) }),
      /* @__PURE__ */ a(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--may-space-2)"
          },
          children: [
            /* @__PURE__ */ e(_, { defaultChecked: !0, children: "Keep me signed in" }),
            /* @__PURE__ */ e(m, { variant: "plain", size: "sm", onClick: () => {
            }, children: "Forgot password?" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(m, { pill: !0, fullWidth: !0, size: "lg", onClick: () => {
    }, children: "Sign In" }),
    /* @__PURE__ */ e(ce, { label: "or" }),
    /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-2)" }, children: [
      /* @__PURE__ */ e(m, { variant: "gray", fullWidth: !0, leadingIcon: /* @__PURE__ */ e(zo, {}), onClick: () => {
      }, children: "Continue with Apple" }),
      /* @__PURE__ */ e(m, { variant: "gray", fullWidth: !0, leadingIcon: /* @__PURE__ */ e(Lo, {}), onClick: () => {
      }, children: "Continue with Google" })
    ] }),
    /* @__PURE__ */ a(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--may-space-1)",
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ e(t, { as: "span", variant: "footnote", tone: "secondary", children: "New to May?" }),
          /* @__PURE__ */ e(m, { variant: "plain", size: "sm", onClick: () => {
          }, children: "Create an account" })
        ]
      }
    )
  ] }) });
}
function No() {
  return /* @__PURE__ */ e(Ei, { "aria-hidden": !0 });
}
function Bo() {
  return /* @__PURE__ */ e(Ki, { "aria-hidden": !0 });
}
function Fo() {
  return /* @__PURE__ */ e(Wn, { "aria-hidden": !0 });
}
function zo() {
  return /* @__PURE__ */ e(Li, { "aria-hidden": !0 });
}
function Lo() {
  return /* @__PURE__ */ e(Gn, { "aria-hidden": !0 });
}
const Wo = `Processes RAW captures up to 4× faster on iPhone 15 Pro.
Adds a live histogram to the capture screen, in both the grid and the loupe.
Fixes a crash when importing a session that was still syncing from iCloud Drive.`, Go = [
  { label: "Photo & Video", value: "photo-video" },
  { label: "Productivity", value: "productivity" },
  { label: "Graphics & Design", value: "graphics" },
  { label: "Developer Tools", value: "developer" },
  { label: "Health & Fitness", value: "health" },
  /* Shipped as its own storefront section, and disabled until the account is
   * enrolled — the option still shows, because hiding it hides the reason. */
  { label: "Kids (requires enrolment)", value: "kids", disabled: !0 }
];
function Eo() {
  const [i, n] = h(25), [r, o] = h(12), [d, u] = h("automatic"), [s, l] = h("12"), [v, p] = h(!0), [w, A] = h(!1), [T, b] = h("4 minutes ago"), R = ve(void 0);
  return Ci(() => () => clearTimeout(R.current), []), /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-slot": "scroll-area",
            style: { flex: 1, overflowY: "auto", padding: "var(--may-space-6) var(--may-space-5)" },
            children: /* @__PURE__ */ a(
              "div",
              {
                style: {
                  maxWidth: "46rem",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--may-space-6)"
                },
                children: [
                  /* @__PURE__ */ a("header", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-1)" }, children: [
                    /* @__PURE__ */ e(t, { as: "h1", variant: "large-title", children: "Submit for Review" }),
                    /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "Halide Mark III · Version 4.2 (412) · Most submissions are reviewed within 24 hours." })
                  ] }),
                  /* @__PURE__ */ a(
                    ga,
                    {
                      title: "Version Details",
                      description: "What appears on the product page the day this version ships.",
                      gradient: "blue",
                      glyph: /* @__PURE__ */ e(_o, {}),
                      children: [
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "Version number",
                            description: "Must be higher than 4.1.3, the version currently on the App Store.",
                            children: /* @__PURE__ */ e(N, { fullWidth: !0, prefix: "v", defaultValue: "4.2", inputMode: "decimal" })
                          }
                        ),
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "Introductory price",
                            description: "Charged for the first three months of an annual subscription.",
                            children: /* @__PURE__ */ e(N, { fullWidth: !0, prefix: "$", suffix: "USD", defaultValue: "19.99", inputMode: "decimal" })
                          }
                        ),
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "What’s New in This Version",
                            description: "Up to 4,000 characters. Localise before submitting to the other 39 storefronts.",
                            children: /* @__PURE__ */ e(Yi, { fullWidth: !0, autoGrow: !0, rows: 3, defaultValue: Wo })
                          }
                        ),
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "Attach a build",
                            description: "Processing finishes about ten minutes after upload completes.",
                            children: /* @__PURE__ */ e(
                              Ie,
                              {
                                fullWidth: !0,
                                cancelable: !0,
                                placeholder: "Search builds by version or number",
                                defaultValue: "4.2 (412)"
                              }
                            )
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ a(
                    ga,
                    {
                      title: "Availability",
                      description: "How this version reaches the people who already have the app.",
                      gradient: "purple",
                      glyph: /* @__PURE__ */ e(Ho, {}),
                      children: [
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "Primary category",
                            description: "Decides where the app is browsed, and which charts it can appear on.",
                            children: /* @__PURE__ */ e(J, { fullWidth: !0, options: Go, defaultValue: "photo-video" })
                          }
                        ),
                        /* @__PURE__ */ e(k, { description: "Kept on file for a year and shared with U.S. export authorities on request.", children: /* @__PURE__ */ e(_, { description: "Leave this off if the app uses only HTTPS and Apple’s own crypto libraries.", children: "App uses non-exempt encryption" }) }),
                        /* @__PURE__ */ e(k, { label: "Release", description: "Applies the moment review passes.", children: /* @__PURE__ */ a(
                          Ze,
                          {
                            "aria-label": "Release",
                            value: d,
                            onValueChange: u,
                            children: [
                              /* @__PURE__ */ e($, { value: "automatic", description: "Goes live as soon as review passes.", children: "Automatically" }),
                              /* @__PURE__ */ e($, { value: "manual", description: "Stays in Pending Developer Release until you press Release.", children: "Manually" }),
                              /* @__PURE__ */ e($, { value: "scheduled", description: "Ships 14 Oct at 10:00, in your local time zone.", children: "On a scheduled date" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ e(k, { label: "Age rating", description: "Derived from your content questionnaire; override only with cause.", children: /* @__PURE__ */ a(
                          Ze,
                          {
                            "aria-label": "Age rating",
                            orientation: "horizontal",
                            value: s,
                            onValueChange: l,
                            children: [
                              /* @__PURE__ */ e($, { value: "4", children: "4+" }),
                              /* @__PURE__ */ e($, { value: "9", children: "9+" }),
                              /* @__PURE__ */ e($, { value: "12", children: "12+" }),
                              /* @__PURE__ */ e($, { value: "17", children: "17+" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ e(k, { description: "Pausing a phased release keeps the version live for whoever already has it.", children: /* @__PURE__ */ e(
                          Ae,
                          {
                            checked: v,
                            onCheckedChange: p,
                            description: "Rolls out to a growing share of automatic updates over seven days.",
                            children: "Phased Release"
                          }
                        ) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ a(
                    ga,
                    {
                      title: "Rollout",
                      description: "The two numbers you will be asked about if anything goes wrong.",
                      gradient: "orange",
                      glyph: /* @__PURE__ */ e(Vo, {}),
                      children: [
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "Day-one share",
                            description: v ? "Everyone else receives the update over the following six days." : "Phased release is off, so this version goes to everyone at once.",
                            children: /* @__PURE__ */ e(
                              Ge,
                              {
                                "aria-label": "Day-one share",
                                value: i,
                                onValueChange: n,
                                min: 0,
                                max: 100,
                                step: 5,
                                ticks: [0, 25, 50, 75, 100],
                                showValue: !0,
                                formatValue: (G) => `${G}%`,
                                disabled: !v
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ e(
                          k,
                          {
                            label: "Promo codes",
                            description: "Up to 100 per version. Each code expires 28 days after it is issued.",
                            children: /* @__PURE__ */ e(
                              Ra,
                              {
                                "aria-label": "Promo codes",
                                value: r,
                                onValueChange: o,
                                min: 0,
                                max: 100,
                                formatValue: (G) => `${G} codes`
                              }
                            )
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ a(H, { children: [
                    /* @__PURE__ */ a(
                      Q,
                      {
                        accessory: /* @__PURE__ */ e(C, { gradient: "teal", size: "md", children: /* @__PURE__ */ e($o, {}) }),
                        children: [
                          /* @__PURE__ */ e(X, { children: "One Field, Four States" }),
                          /* @__PURE__ */ e(ne, { children: "The same control and the same copy each time. Only the Field’s props change." })
                        ]
                      }
                    ),
                    /* @__PURE__ */ a(me, { children: [
                      /* @__PURE__ */ a(he, { minColumnWidth: "14rem", gap: 4, children: [
                        /* @__PURE__ */ e(Ye, { caption: "Default", children: /* @__PURE__ */ e(k, { label: "Support email", description: "Shown on the product page.", children: /* @__PURE__ */ e(N, { fullWidth: !0, type: "email", defaultValue: "support@halide.cam" }) }) }),
                        /* @__PURE__ */ e(Ye, { caption: "Required", children: /* @__PURE__ */ e(k, { label: "Support email", description: "Shown on the product page.", required: !0, children: /* @__PURE__ */ e(N, { fullWidth: !0, type: "email", placeholder: "you@example.com" }) }) }),
                        /* @__PURE__ */ e(Ye, { caption: "Invalid", children: /* @__PURE__ */ e(
                          k,
                          {
                            label: "Support email",
                            description: "Shown on the product page.",
                            required: !0,
                            error: "Use an address at a domain you control.",
                            children: /* @__PURE__ */ e(N, { fullWidth: !0, type: "email", defaultValue: "halide@icloud.com" })
                          }
                        ) }),
                        /* @__PURE__ */ e(Ye, { caption: "Disabled", children: /* @__PURE__ */ e(k, { label: "Support email", description: "Managed by your account holder.", disabled: !0, children: /* @__PURE__ */ e(N, { fullWidth: !0, type: "email", defaultValue: "support@halide.cam" }) }) })
                      ] }),
                      /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "Nothing in the invalid cell asks for red. The error prop sets aria-invalid, swaps the description out for the message, points aria-describedby at it and tints the fill — so what is announced and what is seen cannot drift apart." })
                    ] })
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ a(te, { variant: "surface", separator: !0, align: "between", "aria-label": "Submission actions", children: [
          /* @__PURE__ */ a(t, { variant: "footnote", tone: "tertiary", children: [
            "Draft saved ",
            T
          ] }),
          /* @__PURE__ */ a(c, { direction: "row", gap: 2, align: "center", children: [
            /* @__PURE__ */ e(m, { variant: "gray", children: "Cancel" }),
            /* @__PURE__ */ e(m, { loading: w, onClick: () => {
              A(!0), R.current = setTimeout(() => {
                A(!1), b("just now");
              }, 1100);
            }, children: "Save" })
          ] })
        ] })
      ]
    }
  );
}
function ga({
  title: i,
  description: n,
  gradient: r,
  glyph: o,
  children: d
}) {
  return /* @__PURE__ */ a(H, { children: [
    /* @__PURE__ */ a(
      Q,
      {
        accessory: /* @__PURE__ */ e(C, { gradient: r, size: "md", children: o }),
        children: [
          /* @__PURE__ */ e(X, { children: i }),
          /* @__PURE__ */ e(ne, { children: n })
        ]
      }
    ),
    /* @__PURE__ */ e(me, { children: /* @__PURE__ */ e(c, { direction: "column", gap: 5, children: d }) })
  ] });
}
function Ye({ caption: i, children: n }) {
  return /* @__PURE__ */ e(j, { surface: "nested", radius: "lg", padding: 4, children: /* @__PURE__ */ a(c, { direction: "column", gap: 3, children: [
    /* @__PURE__ */ e(t, { variant: "caption-1", tone: "tertiary", weight: "semibold", children: i.toUpperCase() }),
    n
  ] }) });
}
function _o() {
  return /* @__PURE__ */ e(En, { "aria-hidden": !0 });
}
function Ho() {
  return /* @__PURE__ */ e(_n, { "aria-hidden": !0 });
}
function Vo() {
  return /* @__PURE__ */ e(Hn, { "aria-hidden": !0 });
}
function $o() {
  return /* @__PURE__ */ e($e, { "aria-hidden": !0 });
}
const Uo = [
  {
    from: "Marina Küçük",
    subject: "Kyoto line slips a week",
    preview: "Everything else holds. I have the revised dates attached —",
    time: "9:38 AM"
  },
  {
    from: "App Store Review",
    subject: "Halide 4.1.3 is now Ready for Sale",
    preview: "Your app is available on the App Store in 175 countries.",
    time: "8:12 AM"
  },
  {
    from: "Devin Raye",
    subject: "Re: histogram in the loupe",
    preview: "Shipping it behind a flag first. Watch the frame budget on the —",
    time: "Yesterday"
  }
];
function jo() {
  const [i, n] = fi(1600), [r, o] = fi(1600);
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          "data-slot": "scroll-area",
          style: { flex: 1, overflowY: "auto", padding: "var(--may-space-6) var(--may-space-5)" },
          children: /* @__PURE__ */ a(
            "div",
            {
              style: {
                maxWidth: "72rem",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "var(--may-space-6)"
              },
              children: [
                /* @__PURE__ */ a("header", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-1)" }, children: [
                  /* @__PURE__ */ e(t, { as: "h1", variant: "large-title", children: "Mailbox States" }),
                  /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "One mailbox — Updates, 1,284 messages — in the four conditions it is actually in most of the time." })
                ] }),
                /* @__PURE__ */ a(he, { minColumnWidth: 300, gap: 4, children: [
                  /* @__PURE__ */ e(qe, { caption: "Loading", hint: "A silhouette, not a spinner in a box.", children: /* @__PURE__ */ e(H, { style: { flex: 1 }, children: /* @__PURE__ */ a(c, { direction: "column", gap: 5, children: [
                    /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
                      /* @__PURE__ */ e(
                        Fe,
                        {
                          variant: "circle",
                          width: "var(--may-control-h)",
                          height: "var(--may-control-h)",
                          label: "Loading messages"
                        }
                      ),
                      /* @__PURE__ */ a(c, { direction: "column", gap: 2, fullWidth: !0, children: [
                        /* @__PURE__ */ e(Fe, { width: "58%" }),
                        /* @__PURE__ */ e(Fe, { width: "86%" })
                      ] })
                    ] }),
                    /* @__PURE__ */ e(Fe, { lines: 3 }),
                    /* @__PURE__ */ a(c, { direction: "row", gap: 3, align: "center", children: [
                      /* @__PURE__ */ e(Si, { label: "Syncing mailbox" }),
                      /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "Syncing 1,284 messages…" })
                    ] }),
                    /* @__PURE__ */ e(je, { indeterminate: !0, label: "Downloading attachments (18 of 42)" })
                  ] }) }) }),
                  /* @__PURE__ */ e(qe, { caption: "Empty", hint: "Muted. An empty mailbox is not a failure.", children: /* @__PURE__ */ e(H, { style: { flex: 1, justifyContent: "center" }, children: /* @__PURE__ */ e(
                    K,
                    {
                      glyph: /* @__PURE__ */ e(Ko, {}),
                      title: "No Mail",
                      description: "You have read everything in Updates. New messages are filed here as they arrive.",
                      action: /* @__PURE__ */ e(m, { variant: "tinted", children: "Check for Mail" })
                    }
                  ) }) }),
                  /* @__PURE__ */ e(qe, { caption: "Error", hint: "Names the host, the timeout and the last good sync.", children: /* @__PURE__ */ e(H, { style: { flex: 1 }, children: /* @__PURE__ */ a(c, { direction: "column", gap: 4, children: [
                    /* @__PURE__ */ e(
                      K,
                      {
                        size: "sm",
                        glyph: /* @__PURE__ */ e(C, { gradient: "red", size: "lg", children: /* @__PURE__ */ e(Yo, {}) }),
                        title: "Can’t Connect to iCloud",
                        description: "The server stopped responding while fetching Updates.",
                        action: /* @__PURE__ */ e(m, { variant: "tinted", tone: "danger", loading: i, onClick: n, children: "Try Again" })
                      }
                    ),
                    /* @__PURE__ */ e(qi, { tone: "danger", title: "Connection timed out", children: "imap.mail.me.com did not respond within 30 seconds. Last successful sync was today at 9:41 AM." })
                  ] }) }) }),
                  /* @__PURE__ */ e(qe, { caption: "Partial", hint: "Still useful, and honest about its age.", children: /* @__PURE__ */ a(H, { padding: "none", style: { flex: 1 }, children: [
                    /* @__PURE__ */ e(
                      Fa,
                      {
                        tone: "warning",
                        icon: /* @__PURE__ */ e(qo, {}),
                        action: /* @__PURE__ */ e(m, { variant: "plain", size: "sm", loading: r, onClick: o, children: "Retry" }),
                        children: r ? "Reconnecting…" : "Offline — showing mail from 9:41 AM"
                      }
                    ),
                    /* @__PURE__ */ e(I, { variant: "plain", children: Uo.map((d) => /* @__PURE__ */ e(
                      g,
                      {
                        leading: /* @__PURE__ */ e(B, { name: d.from, size: "md" }),
                        title: d.subject,
                        subtitle: `${d.from} — ${d.preview}`,
                        detail: d.time,
                        onClick: () => {
                        }
                      },
                      d.subject
                    )) }),
                    /* @__PURE__ */ e(j, { paddingX: 4, paddingY: 3, children: /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "3 of 1,284 messages available offline · Last updated today at 9:41 AM" }) })
                  ] }) })
                ] })
              ]
            }
          )
        }
      )
    }
  );
}
function fi(i) {
  const [n, r] = h(!1), o = ve(void 0);
  return Ci(() => () => clearTimeout(o.current), []), [
    n,
    () => {
      r(!0), o.current = setTimeout(() => r(!1), i);
    }
  ];
}
function qe({
  caption: i,
  hint: n,
  children: r
}) {
  return /* @__PURE__ */ a(c, { direction: "column", gap: 2, style: { height: "100%" }, children: [
    /* @__PURE__ */ a(c, { direction: "column", gap: 0, children: [
      /* @__PURE__ */ e(t, { variant: "caption-1", tone: "tertiary", weight: "semibold", children: i.toUpperCase() }),
      /* @__PURE__ */ e(t, { variant: "caption-1", tone: "tertiary", children: n })
    ] }),
    r
  ] });
}
function Ko() {
  return /* @__PURE__ */ e(fe, { "aria-hidden": !0 });
}
function Yo() {
  return /* @__PURE__ */ e(Vn, { "aria-hidden": !0 });
}
function qo() {
  return /* @__PURE__ */ e($n, { "aria-hidden": !0 });
}
function Jo() {
  const [i, n] = h(null), [r, o] = h(!1), [d, u] = h(!1), s = () => n(null);
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          "data-slot": "scroll-area",
          style: { flex: 1, overflowY: "auto", padding: "var(--may-space-6) var(--may-space-5)" },
          children: /* @__PURE__ */ a(
            "div",
            {
              style: {
                maxWidth: "72rem",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "var(--may-space-6)"
              },
              children: [
                /* @__PURE__ */ a("header", { style: { display: "flex", flexDirection: "column", gap: "var(--may-space-1)" }, children: [
                  /* @__PURE__ */ e(t, { as: "h1", variant: "large-title", children: "Overlays" }),
                  /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "Nine ways to interrupt someone, from the gentlest to the most final. Each one opens from the card it is written in." })
                ] }),
                /* @__PURE__ */ a(he, { minColumnWidth: "18rem", gap: 4, children: [
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Sheet",
                      description: "Rises from the bottom edge on a phone and presents as a centred dialog past 1024px — one component, both shapes.",
                      gradient: "blue",
                      glyph: /* @__PURE__ */ e(Qo, {}),
                      action: /* @__PURE__ */ e(m, { onClick: () => n("sheet"), children: "Share via AirDrop" }),
                      children: /* @__PURE__ */ e(
                        Sa,
                        {
                          open: i === "sheet",
                          onClose: s,
                          title: "AirDrop",
                          description: "Share “IMG_4021.RAW” with people nearby.",
                          footer: /* @__PURE__ */ a(ze, { children: [
                            /* @__PURE__ */ e(m, { variant: "plain", onClick: s, children: "Cancel" }),
                            /* @__PURE__ */ e(
                              m,
                              {
                                onClick: () => {
                                  s(), M.success("Sent to Marina’s MacBook Pro", {
                                    description: "48.2 MB · about 3 seconds"
                                  });
                                },
                                children: "Send"
                              }
                            )
                          ] }),
                          children: /* @__PURE__ */ a(I, { children: [
                            /* @__PURE__ */ e(g, { title: "Marina’s MacBook Pro", detail: "Nearby", onClick: () => {
                            } }),
                            /* @__PURE__ */ e(g, { title: "Devin’s iPhone", detail: "Contacts Only", onClick: () => {
                            } }),
                            /* @__PURE__ */ e(g, { title: "Studio Display", detail: "Nearby", onClick: () => {
                            } })
                          ] })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Modal",
                      description: "A centred dialog for a task with its own form. Escape and the scrim both close it; the work is short enough that nothing is lost.",
                      gradient: "indigo",
                      glyph: /* @__PURE__ */ e(bi, {}),
                      action: /* @__PURE__ */ e(m, { onClick: () => n("album"), children: "New Shared Album" }),
                      children: /* @__PURE__ */ e(
                        La,
                        {
                          open: i === "album",
                          onClose: s,
                          size: "sm",
                          title: "New Shared Album",
                          description: "Everyone you invite can add their own photos and videos.",
                          footer: /* @__PURE__ */ a(ze, { children: [
                            /* @__PURE__ */ e(m, { variant: "plain", onClick: s, children: "Cancel" }),
                            /* @__PURE__ */ e(
                              m,
                              {
                                onClick: () => {
                                  s(), M.success("“Kyoto 2024” created", { description: "Invitations sent to 4 people." });
                                },
                                children: "Create"
                              }
                            )
                          ] }),
                          children: /* @__PURE__ */ e(k, { label: "Album name", description: "Visible to everyone you invite.", children: /* @__PURE__ */ e(N, { fullWidth: !0, defaultValue: "Kyoto 2024" }) })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Action Sheet",
                      description: "A list of things to do with one object. Destructive first and in red, Cancel detached at the bottom — iOS's own ordering.",
                      gradient: "teal",
                      glyph: /* @__PURE__ */ e(Xo, {}),
                      action: /* @__PURE__ */ e(m, { variant: "gray", onClick: () => n("actions"), children: "Photo actions" }),
                      children: /* @__PURE__ */ e(
                        Pa,
                        {
                          open: i === "actions",
                          onClose: s,
                          title: "IMG_4021.RAW",
                          description: "48.2 MB · Shot on iPhone 15 Pro · 14 Oct at 9:41 AM",
                          actions: [
                            { label: "Duplicate", icon: /* @__PURE__ */ e(td, {}), onSelect: () => M("Photo duplicated", { description: "IMG_4022.RAW · 48.2 MB" }) },
                            { label: "Add to Album…", icon: /* @__PURE__ */ e(bi, {}), onSelect: () => M("Added to “Kyoto 2024”") },
                            { label: "Hide", onSelect: () => M("Hidden"), disabled: !0 },
                            {
                              label: "Delete Photo",
                              icon: /* @__PURE__ */ e(ya, {}),
                              destructive: !0,
                              onSelect: () => M.danger("Moved to Recently Deleted", {
                                description: "Kept for 30 days.",
                                action: { label: "Undo", onClick: () => {
                                } }
                              })
                            }
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Alert Dialog",
                      description: "The only overlay that refuses to be dismissed by accident: no scrim click, no Escape shortcut past the choice, and the destructive verb on the button rather than “OK”.",
                      gradient: "red",
                      glyph: /* @__PURE__ */ e(ya, {}),
                      action: /* @__PURE__ */ e(m, { tone: "danger", variant: "tinted", onClick: () => n("confirm"), children: "Delete album" }),
                      children: /* @__PURE__ */ e(
                        na,
                        {
                          open: i === "confirm",
                          title: "Delete “Kyoto 2024”?",
                          description: "The album and its 248 photos are removed from iCloud on every device signed in to this account.",
                          confirmLabel: "Delete Album",
                          cancelLabel: "Keep",
                          destructive: !0,
                          onConfirm: () => {
                            s(), M.danger("Album deleted", { description: "248 photos moved to Recently Deleted." });
                          },
                          onCancel: s
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Popover",
                      description: "Anchored to its trigger and non-modal: no scrim, no scroll lock. It flips and shifts rather than leaving the viewport.",
                      gradient: "orange",
                      glyph: /* @__PURE__ */ e(Zo, {}),
                      action: /* @__PURE__ */ e(
                        Wa,
                        {
                          open: r,
                          onOpenChange: o,
                          placement: "bottom-start",
                          "aria-label": "Event details",
                          trigger: /* @__PURE__ */ e(m, { variant: "tinted", children: "Design Review" }),
                          children: /* @__PURE__ */ a(c, { direction: "column", gap: 2, style: { maxWidth: "15rem" }, children: [
                            /* @__PURE__ */ e(t, { variant: "headline", children: "Design Review" }),
                            /* @__PURE__ */ e(t, { variant: "subheadline", tone: "secondary", children: "Thursday, 14 October · 10:00 – 11:00" }),
                            /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "Apple Park · Caffè Macs, Room 4 · 6 invitees" }),
                            /* @__PURE__ */ e(m, { size: "sm", variant: "tinted", onClick: () => o(!1), children: "Get Directions" })
                          ] })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Menu",
                      description: "Shortcuts on the trailing edge, separators grouping by consequence, and the destructive item alone at the bottom.",
                      gradient: "purple",
                      glyph: /* @__PURE__ */ e(ed, {}),
                      action: /* @__PURE__ */ e(
                        ye,
                        {
                          open: d,
                          onOpenChange: u,
                          items: [
                            { label: "Reply", icon: /* @__PURE__ */ e(ad, {}), shortcut: "⌘R", onSelect: () => M("Draft started", { description: "Re: Kyoto line slips a week" }) },
                            { label: "Reply All", shortcut: "⇧⌘R", onSelect: () => M("Draft started", { description: "Re: Kyoto line slips a week · 4 recipients" }) },
                            { label: "Forward", shortcut: "⇧⌘F", onSelect: () => M("Draft started", { description: "Fwd: Kyoto line slips a week" }) },
                            { label: "Flag", icon: /* @__PURE__ */ e(id, {}), separator: !0, onSelect: () => M("Flagged") },
                            { label: "Mark as Unread", shortcut: "⇧⌘U", onSelect: () => M("Marked as Unread") },
                            /* Disabled rather than hidden: the thread is already muted, and a menu that
                             * changes shape between openings is a menu nobody learns. */
                            { label: "Mute Thread", disabled: !0 },
                            {
                              label: "Delete",
                              icon: /* @__PURE__ */ e(ya, {}),
                              shortcut: "⌘⌫",
                              destructive: !0,
                              separator: !0,
                              onSelect: () => M.danger("Message deleted", { action: { label: "Undo", onClick: () => {
                              } } })
                            }
                          ],
                          "aria-label": "Message actions",
                          trigger: /* @__PURE__ */ e(m, { variant: "gray", trailingIcon: /* @__PURE__ */ e(ld, {}), children: "Message" })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Tooltip",
                      description: "Names a control without explaining it. Opens on hover or keyboard focus after a beat, never on tap — a touch device gets the label some other way.",
                      gradient: "gray",
                      glyph: /* @__PURE__ */ e(wi, {}),
                      action: /* @__PURE__ */ e(ra, { label: "Add to Favourites (⌘D)", children: /* @__PURE__ */ e(m, { variant: "gray", leadingIcon: /* @__PURE__ */ e(wi, {}), children: "Favourite" }) })
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Toast",
                      description: "The one imperative surface: toast() is called from anywhere and rendered by the provider's host.",
                      gradient: "green",
                      glyph: /* @__PURE__ */ e(nd, {}),
                      action: /* @__PURE__ */ a(c, { direction: "row", gap: 2, wrap: !0, children: [
                        /* @__PURE__ */ e(
                          m,
                          {
                            size: "sm",
                            variant: "tinted",
                            tone: "success",
                            onClick: () => M.success("Backup Complete", {
                              description: "Last backed up to iCloud today at 4:12 AM."
                            }),
                            children: "Success"
                          }
                        ),
                        /* @__PURE__ */ e(
                          m,
                          {
                            size: "sm",
                            variant: "tinted",
                            tone: "warning",
                            onClick: () => M.warning("Low Power Mode", {
                              description: "Background refresh and automatic downloads are paused.",
                              action: { label: "Turn Off", onClick: () => {
                              } }
                            }),
                            children: "Warning"
                          }
                        ),
                        /* @__PURE__ */ e(
                          m,
                          {
                            size: "sm",
                            variant: "tinted",
                            tone: "danger",
                            onClick: () => M.danger("Payment Method Declined", {
                              description: "Update your billing details to keep iCloud+ active.",
                              action: { label: "Update", onClick: () => {
                              } },
                              duration: 8e3
                            }),
                            children: "Danger"
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ e(
                    ie,
                    {
                      title: "Popup",
                      description: "The phone-only sheet: raised from the bottom edge, masked, and padded past the home indicator. Used where a Sheet's title bar would be one row too many.",
                      gradient: "pink",
                      glyph: /* @__PURE__ */ e(rd, {}),
                      action: /* @__PURE__ */ e(m, { variant: "gray", onClick: () => n("share"), children: "Share link" }),
                      children: /* @__PURE__ */ e(et, { visible: i === "share", onClose: s, title: "Share Link", children: /* @__PURE__ */ a(I, { variant: "plain", children: [
                        /* @__PURE__ */ e(
                          g,
                          {
                            title: "Copy Link",
                            subtitle: "halide.cam/g/kyoto-2024",
                            onClick: () => {
                              s(), M("Link copied");
                            }
                          }
                        ),
                        /* @__PURE__ */ e(g, { title: "Add to Reading List", onClick: s }),
                        /* @__PURE__ */ e(g, { title: "Print", detail: "HP LaserJet M283", onClick: s }),
                        /* @__PURE__ */ e(g, { title: "Remove Shared Link", destructive: !0, onClick: s })
                      ] }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: "Sheet, Modal, Action Sheet, Alert Dialog and Popup are modal, so they share one piece of state — opening a second would stack two scrims and two focus traps. Popover, Menu and Tooltip are anchored and keep their own." })
              ]
            }
          )
        }
      )
    }
  );
}
function ie({
  title: i,
  description: n,
  gradient: r,
  glyph: o,
  action: d,
  children: u
}) {
  return /* @__PURE__ */ a(H, { style: { height: "100%" }, children: [
    /* @__PURE__ */ a(
      Q,
      {
        accessory: /* @__PURE__ */ e(C, { gradient: r, size: "md", children: o }),
        children: [
          /* @__PURE__ */ e(X, { children: i }),
          /* @__PURE__ */ e(ne, { children: n })
        ]
      }
    ),
    /* @__PURE__ */ e(Oa, { children: d }),
    u
  ] });
}
function Qo() {
  return /* @__PURE__ */ e(Un, { "aria-hidden": !0 });
}
function bi() {
  return /* @__PURE__ */ e(jn, { "aria-hidden": !0 });
}
function Xo() {
  return /* @__PURE__ */ e(Kn, { "aria-hidden": !0 });
}
function ya() {
  return /* @__PURE__ */ e(Y, { "aria-hidden": !0 });
}
function Zo() {
  return /* @__PURE__ */ e(Aa, { "aria-hidden": !0 });
}
function ed() {
  return /* @__PURE__ */ e($e, { "aria-hidden": !0 });
}
function ad() {
  return /* @__PURE__ */ e(Le, { "aria-hidden": !0 });
}
function id() {
  return /* @__PURE__ */ e(Me, { "aria-hidden": !0 });
}
function td() {
  return /* @__PURE__ */ e(Mi, { "aria-hidden": !0 });
}
function wi() {
  return /* @__PURE__ */ e(aa, { "aria-hidden": !0 });
}
function nd() {
  return /* @__PURE__ */ e(Yn, { "aria-hidden": !0 });
}
function rd() {
  return /* @__PURE__ */ e(qn, { "aria-hidden": !0 });
}
function ld() {
  return /* @__PURE__ */ e(Ia, { "aria-hidden": !0 });
}
const od = (i) => /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": !0, focusable: "false", children: /* @__PURE__ */ e("path", { d: i, fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), z = {
  inbox: /* @__PURE__ */ e(fe, { "aria-hidden": !0 }),
  star: /* @__PURE__ */ e(aa, { "aria-hidden": !0 }),
  sent: /* @__PURE__ */ e(Qn, { "aria-hidden": !0 }),
  draft: /* @__PURE__ */ e(ea, { "aria-hidden": !0 }),
  archive: /* @__PURE__ */ e(He, { "aria-hidden": !0 }),
  folder: /* @__PURE__ */ e(se, { "aria-hidden": !0 }),
  code: /* @__PURE__ */ e(Jn, { "aria-hidden": !0 }),
  gear: /* @__PURE__ */ e(Ue, { "aria-hidden": !0 })
}, E = {
  compose: /* @__PURE__ */ e(Ve, { "aria-hidden": !0 }),
  window: /* @__PURE__ */ e(Zn, { "aria-hidden": !0 }),
  inbox: /* @__PURE__ */ e(fe, { "aria-hidden": !0 }),
  drafts: /* @__PURE__ */ e(ji, { "aria-hidden": !0 }),
  gear: /* @__PURE__ */ e(Ue, { "aria-hidden": !0 }),
  moon: /* @__PURE__ */ e(Ui, { "aria-hidden": !0 }),
  archive: /* @__PURE__ */ e(He, { "aria-hidden": !0 }),
  trash: /* @__PURE__ */ e(Y, { "aria-hidden": !0 }),
  command: od("M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3Z"),
  design: /* @__PURE__ */ e(Xn, { "aria-hidden": !0 }),
  info: /* @__PURE__ */ e($i, { "aria-hidden": !0 }),
  eye: /* @__PURE__ */ e(Ki, { "aria-hidden": !0 }),
  rename: /* @__PURE__ */ e(Vi, { "aria-hidden": !0 })
}, ka = [
  { id: "inbox", label: "Inbox", icon: z.inbox, badge: 12, summary: "12 unread — Grace Hopper, TestFlight and 10 others." },
  { id: "vip", label: "VIPs", icon: z.star, badge: 2, summary: "Katherine Johnson and Radia Perlman are marked VIP." },
  { id: "sent", label: "Sent", icon: z.sent, summary: "Everything sent from this Mac since 12 August." },
  { id: "drafts", label: "Drafts", icon: z.draft, badge: 3, summary: "Three drafts, the oldest untouched since Monday." }
], mt = [
  { id: "receipts", label: "Receipts", icon: z.folder, summary: "184 receipts filed on this Mac." },
  { id: "design-review", label: "Design Review", icon: z.folder, badge: 4, summary: "Threads waiting on a design decision." },
  { id: "archive", label: "Archive 2025", icon: z.archive, summary: "Last year, boxed up. 8.4 GB on disk." }
], dd = [...ka, ...mt], sd = [
  {
    id: "mayui",
    label: "May UI",
    icon: z.folder,
    children: [
      { id: "components", label: "Components", icon: z.folder, badge: 54 },
      { id: "desktop", label: "Desktop", icon: z.folder, badge: 6 },
      { id: "mobile", label: "Mobile", icon: z.folder, badge: 9 },
      { id: "tokens", label: "tokens.css", icon: z.code }
    ]
  },
  {
    id: "mercury",
    label: "Mercury",
    icon: z.folder,
    children: [
      { id: "mercury-ios", label: "iOS App", icon: z.code },
      { id: "mercury-watch", label: "Watch App", icon: z.code },
      // Not checked out on this machine. Xcode greys the group out rather than
      // hiding it, so the navigator keeps the same shape between clones.
      { id: "mercury-vision", label: "Vision App", icon: z.code, disabled: !0 }
    ]
  },
  { id: "archive-2025", label: "Archive 2025", icon: z.archive }
], cd = {
  mayui: "May UI",
  components: "Components",
  desktop: "Desktop",
  mobile: "Mobile",
  tokens: "tokens.css",
  mercury: "Mercury",
  "mercury-ios": "iOS App",
  "mercury-watch": "Watch App",
  "archive-2025": "Archive 2025"
}, va = [
  {
    id: "d-timings",
    title: "Re: Compiler notes for Thursday",
    meta: "To Grace Hopper — 9:41 AM",
    body: "The linker is still the long pole at 41 seconds cold, and nine of those go on re-reading symbols we already have on disk."
  },
  {
    id: "d-handoff",
    title: "Handoff walkthrough — 2 files",
    meta: "To Katherine Johnson — 8:12 AM",
    body: "Attached the QuickTime and the palette audit. The arrows are a shade lighter in dark mode now, as asked."
  },
  {
    id: "d-room",
    title: "Room 4 for Wednesday afternoon",
    meta: "To Studio Booking — Yesterday",
    body: "Two hours from 14:00 would suit us. The display in there is a Studio Display, not a Pro XDR."
  }
], hd = [
  { id: "b-118", app: "Mercury", version: "4.2 (118)", platform: "iOS", size: 42.6, status: "Testing", pushed: "Today at 9:41 AM" },
  { id: "b-117", app: "Mercury", version: "4.2 (117)", platform: "iOS", size: 42.1, status: "Expired", pushed: "Yesterday at 4:08 PM" },
  { id: "b-84", app: "Mercury for Mac", version: "2.0 (84)", platform: "macOS", size: 118.4, status: "Testing", pushed: "Yesterday at 11:26 AM" },
  { id: "b-31", app: "Mercury for Watch", version: "1.4 (31)", platform: "watchOS", size: 12.8, status: "In Review", pushed: "8 Sep 2026" },
  { id: "b-52", app: "Mercury for Vision", version: "1.0 (52)", platform: "visionOS", size: 210.4, status: "Processing", pushed: "7 Sep 2026" },
  { id: "b-206", app: "May UI Gallery", version: "0.9 (206)", platform: "iPadOS", size: 88.7, status: "Internal", pushed: "6 Sep 2026" },
  { id: "b-205", app: "May UI Gallery", version: "0.9 (205)", platform: "iPadOS", size: 88.2, status: "Expired", pushed: "4 Sep 2026" },
  { id: "b-9", app: "Mercury for TV", version: "1.0 (9)", platform: "tvOS", size: 64.2, status: "Internal", pushed: "1 Sep 2026" }
], ud = [
  { key: "app", header: "App", width: 190, filter: "text" },
  { key: "version", header: "Version", width: 130 },
  { key: "platform", header: "Platform", width: 130, filter: "select" },
  {
    key: "size",
    header: "Size",
    numeric: !0,
    width: 110,
    value: (i) => i.size,
    render: (i) => `${i.size.toFixed(1)} MB`
  },
  { key: "status", header: "Status", width: 130, filter: "select" },
  { key: "pushed", header: "Pushed", width: 180 }
], pd = [
  {
    id: "actions",
    heading: "Actions",
    items: [
      { id: "new-message", label: "New Message", icon: E.compose, shortcut: ["cmd", "n"] },
      { id: "new-window", label: "New Window", icon: E.window, shortcut: ["cmd", "shift", "n"] },
      { id: "archive", label: "Archive Conversation", icon: E.archive, shortcut: ["cmd", "ctrl", "a"], keywords: ["file", "store"] }
    ]
  },
  {
    id: "go",
    heading: "Go To",
    items: [
      { id: "go-inbox", label: "Inbox", icon: E.inbox, hint: "12 unread", shortcut: ["cmd", "1"] },
      { id: "go-drafts", label: "Drafts", icon: E.drafts, hint: "3 drafts", shortcut: ["cmd", "2"] },
      { id: "go-settings", label: "Settings", icon: E.gear, shortcut: ["cmd", ","] }
    ]
  },
  {
    id: "view",
    heading: "View",
    items: [
      { id: "appearance", label: "Toggle Dark Appearance", icon: E.moon, keywords: ["theme", "light", "night"] },
      { id: "trash", label: "Move to Trash", icon: E.trash, shortcut: ["cmd", "backspace"], destructive: !0 }
    ]
  }
];
function Se({ name: i, height: n, span: r = !1, padded: o = !1, children: d }) {
  return /* @__PURE__ */ a("section", { style: { gridColumn: r ? "1 / -1" : "auto", minWidth: 0 }, children: [
    /* @__PURE__ */ e(
      "div",
      {
        style: {
          height: n,
          minHeight: 0,
          display: "flex",
          overflow: "hidden",
          padding: o ? "var(--may-space-4)" : "var(--may-space-0)",
          borderRadius: "var(--may-radius-card)",
          background: "var(--may-color-surface)",
          boxShadow: "var(--may-shadow-sm)"
        },
        children: d
      }
    ),
    /* @__PURE__ */ e(t, { variant: "caption-1", tone: "secondary", mono: !0, style: { paddingTop: "var(--may-space-2)" }, children: i })
  ] });
}
function md() {
  const [i, n] = h("inbox"), [r, o] = h("desktop"), [d, u] = h("d-timings"), [s, l] = h(!1), [v, p] = h(null), [w, A] = h(null), T = dd.find((f) => f.id === i) ?? ka[0], b = va.find((f) => f.id === d) ?? va[0], R = [
    { type: "label", label: "Nav Redesign.sketch" },
    { id: "open", label: "Open", icon: E.design, shortcut: ["cmd", "o"], onSelect: () => A("Open") },
    {
      id: "open-with",
      label: "Open With",
      icon: E.window,
      items: [
        { id: "ow-sketch", label: "Sketch", onSelect: () => A("Open with Sketch") },
        { id: "ow-preview", label: "Preview", onSelect: () => A("Open with Preview") },
        { id: "ow-xcode", label: "Xcode", disabled: !0 }
      ]
    },
    { id: "quick-look", label: "Quick Look", icon: E.eye, shortcut: ["space"], onSelect: () => A("Quick Look") },
    { type: "separator" },
    { id: "info", label: "Get Info", icon: E.info, shortcut: ["cmd", "i"], onSelect: () => A("Get Info") },
    { id: "rename", label: "Rename", icon: E.rename, onSelect: () => A("Rename") },
    { type: "separator" },
    {
      id: "trash",
      label: "Move to Trash",
      icon: E.trash,
      shortcut: ["cmd", "backspace"],
      destructive: !0,
      onSelect: () => A("Moved to Trash")
    }
  ];
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        height: "100%",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        background: "var(--may-color-bg)"
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            style: {
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--may-space-1)",
              padding: "var(--may-space-6) var(--may-space-6) var(--may-space-4)",
              background: "var(--may-color-surface)"
            },
            children: [
              /* @__PURE__ */ e(xe, { level: 1, size: "title-2", children: "Desktop Family" }),
              /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: "All six desktop components, once each, in a bounded frame. Nine exported names — Sidebar brings its section, item and toggle with it." })
            ]
          }
        ),
        /* @__PURE__ */ e(ce, {}),
        /* @__PURE__ */ e(
          "div",
          {
            "data-slot": "scroll-area",
            style: { flex: 1, minHeight: 0, overflowY: "auto", padding: "var(--may-space-6)" },
            children: /* @__PURE__ */ a(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))",
                  gap: "var(--may-space-6)",
                  alignItems: "start"
                },
                children: [
                  /* @__PURE__ */ a(Se, { name: "Sidebar · SidebarSection · SidebarItem · SidebarToggle", height: "24rem", children: [
                    /* @__PURE__ */ a(
                      Ha,
                      {
                        "aria-label": "Mailboxes",
                        header: /* @__PURE__ */ e(Va, {}),
                        footer: /* @__PURE__ */ e(F, { icon: z.gear, onClick: () => n("inbox"), children: "Settings" }),
                        children: [
                          /* @__PURE__ */ e(pe, { title: "Favourites", children: ka.map((f) => /* @__PURE__ */ e(
                            F,
                            {
                              icon: f.icon,
                              badge: f.badge,
                              active: f.id === i,
                              onClick: () => n(f.id),
                              children: f.label
                            },
                            f.id
                          )) }),
                          /* @__PURE__ */ e(pe, { title: "On My Mac", collapsible: !0, children: mt.map((f) => /* @__PURE__ */ e(
                            F,
                            {
                              icon: f.icon,
                              badge: f.badge,
                              active: f.id === i,
                              onClick: () => n(f.id),
                              children: f.label
                            },
                            f.id
                          )) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ a(
                      "div",
                      {
                        style: {
                          flex: 1,
                          minWidth: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--may-space-2)",
                          justifyContent: "center",
                          padding: "var(--may-space-5)",
                          background: "var(--may-color-surface)"
                        },
                        children: [
                          /* @__PURE__ */ e(xe, { level: 2, size: "headline", children: T.label }),
                          /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: T.summary }),
                          /* @__PURE__ */ e(t, { variant: "caption-2", tone: "tertiary", children: "Collapse the sidebar from its header to see the rail, and hover a row for the flyout label." })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e(Se, { name: "NavTree", height: "24rem", padded: !0, children: /* @__PURE__ */ a(
                    "div",
                    {
                      style: {
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--may-space-3)"
                      },
                      children: [
                        /* @__PURE__ */ e("div", { "data-slot": "scroll-area", style: { flex: 1, minHeight: 0, overflowY: "auto" }, children: /* @__PURE__ */ e(
                          nt,
                          {
                            "aria-label": "Project navigator",
                            nodes: sd,
                            selectedId: r,
                            defaultExpandedIds: ["mayui", "mercury"],
                            onSelect: (f) => o(f)
                          }
                        ) }),
                        /* @__PURE__ */ a(t, { variant: "footnote", tone: "secondary", children: [
                          "Selected: ",
                          cd[r] ?? "Nothing",
                          ". Arrow keys move inside the tree — the whole thing is one tab stop."
                        ] })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e(Se, { name: "SplitPane", height: "20rem", span: !0, children: /* @__PURE__ */ a(_a, { defaultSize: 280, min: 220, max: 420, dividerLabel: "Resize draft list", children: [
                    /* @__PURE__ */ e("div", { "data-slot": "scroll-area", style: { height: "100%", overflowY: "auto" }, children: /* @__PURE__ */ e(I, { variant: "plain", children: va.map((f) => /* @__PURE__ */ e(
                      g,
                      {
                        title: f.title,
                        subtitle: f.meta,
                        chevron: !1,
                        onClick: () => u(f.id)
                      },
                      f.id
                    )) }) }),
                    /* @__PURE__ */ a(
                      "div",
                      {
                        style: {
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--may-space-2)",
                          padding: "var(--may-space-5)",
                          background: "var(--may-color-surface)"
                        },
                        children: [
                          /* @__PURE__ */ e(xe, { level: 2, size: "headline", children: b.title }),
                          /* @__PURE__ */ e(t, { variant: "footnote", tone: "tertiary", children: b.meta }),
                          /* @__PURE__ */ e(t, { variant: "body", children: b.body })
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ e(Se, { name: "DataTable", height: "26rem", span: !0, padded: !0, children: /* @__PURE__ */ e(
                    $a,
                    {
                      columns: ud,
                      data: hd,
                      rowKey: "id",
                      size: "sm",
                      selectable: !0,
                      defaultSelectedKeys: ["b-118"],
                      defaultSort: [{ key: "pushed", direction: "desc" }],
                      resizableColumns: !0,
                      zebra: !0,
                      stickyHeader: !0,
                      maxHeight: "100%",
                      style: { flex: 1, minWidth: 0 }
                    }
                  ) }),
                  /* @__PURE__ */ e(Se, { name: "CommandPalette", height: "14rem", padded: !0, children: /* @__PURE__ */ a(
                    "div",
                    {
                      style: {
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--may-space-3)",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                      },
                      children: [
                        /* @__PURE__ */ e(
                          m,
                          {
                            variant: "tinted",
                            leadingIcon: E.command,
                            onClick: () => l(!0),
                            children: "Commands…"
                          }
                        ),
                        /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: v ? `Last command: ${v}` : "Press ⌘K, or the button, to open the palette." })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e(Se, { name: "ContextMenu", height: "14rem", padded: !0, children: /* @__PURE__ */ a(
                    "div",
                    {
                      style: {
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--may-space-3)"
                      },
                      children: [
                        /* @__PURE__ */ e(rt, { items: R, label: "File actions", children: /* @__PURE__ */ a(
                          "div",
                          {
                            style: {
                              flex: 1,
                              minHeight: 0,
                              display: "flex",
                              flexDirection: "column",
                              gap: "var(--may-space-1)",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "var(--may-space-4)",
                              borderRadius: "var(--may-radius-lg)",
                              background: "var(--may-color-surface-nested)"
                            },
                            children: [
                              /* @__PURE__ */ e(t, { variant: "subheadline", weight: "semibold", children: "Nav Redesign.sketch" }),
                              /* @__PURE__ */ e(t, { variant: "caption-1", tone: "tertiary", children: "Sketch Document — 24.8 MB" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ e(t, { variant: "footnote", tone: "secondary", children: w ? `Last command: ${w}` : "Right-click, or Control-click, the file to open its menu." })
                      ]
                    }
                  ) })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          lt,
          {
            open: s,
            onOpenChange: l,
            groups: pd,
            placeholder: "Search commands",
            label: "Desktop commands",
            onSelect: (f) => p(f.label)
          }
        )
      ]
    }
  );
}
const Td = Ee(
  "DeviceFrame",
  mr,
  [_e("DeviceFrame", sr)]
), gd = Ee(
  "PhotosScreen",
  vr,
  [_e("PhotosScreen", cr)]
), yd = Ee(
  "SplitInboxScreen",
  wr,
  [_e("SplitInboxScreen", hr)]
), vd = Ee(
  "CatalogAdaptive",
  Ar,
  [_e("CatalogAdaptive", ur)]
), fd = Ee(
  "CatalogMobile",
  Or,
  [_e("CatalogMobile", pr)]
), Pd = [
  { id: "settings", name: "Settings", group: "phone", component: Ur, frame: "phone" },
  { id: "mail-inbox", name: "Mail Inbox", group: "phone", component: jr, frame: "phone" },
  { id: "mail-detail", name: "Mail Detail", group: "phone", component: qr, frame: "phone" },
  { id: "now-playing", name: "Now Playing", group: "phone", component: Zr, frame: "phone", theme: "dark" },
  { id: "photos", name: "Photos", group: "phone", component: gd, frame: "phone" },
  { id: "profile", name: "Profile", group: "phone", component: nl, frame: "phone" },
  { id: "notifications", name: "Notifications", group: "phone", component: ll, frame: "phone" },
  { id: "checkout", name: "Checkout", group: "phone", component: yl, frame: "phone" },
  { id: "onboarding", name: "Onboarding", group: "phone", component: Sl, frame: "phone" },
  { id: "health", name: "Health", group: "phone", component: Il, frame: "phone" },
  { id: "wallet", name: "Wallet", group: "phone", component: zl, frame: "phone" },
  { id: "search", name: "Search", group: "phone", component: Kl, frame: "phone" },
  { id: "app-shell", name: "App Shell", group: "desktop", component: ao },
  { id: "analytics", name: "Analytics", group: "desktop", component: so },
  { id: "admin", name: "Members Admin", group: "desktop", component: ho },
  { id: "files", name: "File Browser", group: "desktop", component: yo },
  { id: "command-palette", name: "Command Palette", group: "desktop", component: bo },
  { id: "preferences", name: "Preferences", group: "desktop", component: Mo },
  { id: "split-inbox", name: "Split Inbox", group: "desktop", component: yd },
  { id: "team", name: "Team", group: "desktop", component: Do },
  { id: "auth", name: "Sign In", group: "cross", component: Oo },
  { id: "forms", name: "Form Showcase", group: "cross", component: Eo },
  { id: "states", name: "Empty & Loading", group: "cross", component: jo },
  { id: "overlays", name: "Overlays", group: "cross", component: Jo },
  { id: "catalog-adaptive", name: "Adaptive (59)", group: "catalog", component: vd },
  { id: "catalog-desktop", name: "Desktop (6)", group: "catalog", component: md },
  { id: "catalog-mobile", name: "Mobile (9)", group: "catalog", component: fd }
];
export {
  so as AnalyticsDashboardScreen,
  ao as AppShellScreen,
  Oo as AuthScreen,
  vd as CatalogAdaptive,
  md as CatalogDesktop,
  fd as CatalogMobile,
  yl as CheckoutScreen,
  bo as CommandPaletteScreen,
  ho as DataTableAdminScreen,
  Td as DeviceFrame,
  yo as FileBrowserScreen,
  Eo as FormShowcaseScreen,
  Il as HealthScreen,
  qr as MailDetailScreen,
  jr as MailInboxScreen,
  ll as NotificationsScreen,
  Zr as NowPlayingScreen,
  Sl as OnboardingScreen,
  Jo as OverlaysScreen,
  gd as PhotosScreen,
  Mo as PreferencesScreen,
  nl as ProfileScreen,
  Pd as SCREENS,
  Kl as SearchScreen,
  Ur as SettingsScreen,
  yd as SplitInboxScreen,
  jo as StatesScreen,
  Do as TeamScreen,
  zl as WalletScreen
};
//# sourceMappingURL=examples.js.map
