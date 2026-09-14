import { ComponentType } from 'react';
import { JSX } from 'react';
import { ReactNode } from 'react';

/**
 * An analytics overview: tiles, a chart, a breakdown, then the detail
 * table. The order is deliberate — the shape a dashboard should have is
 * one glanceable row, one trend, then the rows you actually query.
 *
 * No transform on the root: the filter Popover measures the trigger
 * against the real viewport to decide which side to open on, and a
 * transformed ancestor would send it through the top of the card.
 */
export declare function AnalyticsDashboardScreen(): JSX.Element;

/**
 * The desktop app shell: a collapsing source list beside a content pane.
 *
 * The root deliberately carries NO transform. Sidebar's rail flyout is
 * `position: fixed` and measured off the real viewport, so any ancestor
 * with a transform would establish a containing block and strand the
 * label a few hundred pixels from the icon it belongs to.
 *
 * Collapse is controlled here rather than left to the Sidebar, because
 * the header's app title has to know about it too — a 4rem rail has
 * nowhere to put the word "Mailboxes", and letting it clip is the tell
 * that a rail was bolted on afterwards.
 */
export declare function AppShellScreen(): JSX.Element;

/**
 * Sign in — the one screen a design system is judged on before anything else,
 * and the one that has to hold up at 320px and at 1600px without a breakpoint.
 *
 * The card caps at 380px and centres; nothing inside it is measured in pixels,
 * so it is the same screen on a phone, in a sheet, and on a Studio Display.
 *
 * Two things to copy from the form itself: the reveal control is an
 * `IconButton` in the Input's `suffix`, which keeps it inside the fill instead
 * of beside it; and the error state is set by handing `Field` an `error`, which
 * is the *only* way to mark a control invalid — the Field then flips
 * `aria-invalid`, swaps the description for the message and points
 * `aria-describedby` at it, so what is painted and what is announced cannot
 * drift apart.
 */
export declare function AuthScreen(): JSX.Element;

export declare const CatalogAdaptive: typeof CatalogAdaptive_2;

/**
 * The adaptive family, once each.
 *
 * This is the page you look at when the question is "does this all belong to
 * the same system?" — which is a question no single screen can answer, because
 * a screen picks the six components it needs and quietly proves nothing about
 * the other fifty-one. Here every adaptive component appears exactly once, in
 * the state it ships in, at a comparable width, grouped by what it is for.
 *
 * Three things follow from that brief:
 *
 * 1. **The chrome is plain HTML.** The masthead, the section headings and the
 *    captions are `h1`/`h2`/`p` styled from tokens, not `Text` and `Heading`.
 *    A catalogue that used the library to label the library would show `Text`
 *    thirty times and make the one-of-each promise unreadable.
 *
 * 2. **Composition still counts as once.** `ButtonGroup` needs buttons and
 *    `Tabs` needs tabs; a required child is part of its parent's specimen, not
 *    a second entry for itself. Every component still owns exactly one caption.
 *
 * 3. **Overlays are closed at rest.** `open` is `false` by default and a
 *    catalogue cannot show four scrims at once, so the modal four (`Sheet`,
 *    `Modal`, `ActionSheet`, `AlertDialog`) share one piece of state behind a
 *    trigger each, and their captions say so. They render inline — no portal —
 *    which is why each one sits in its own cell beside the button that opens it.
 *
 * MayProvider has no specimen here: it is mounted once at the app root and
 * supplies the theme plus the single imperative host.
 */
declare function CatalogAdaptive_2(): JSX.Element;

/**
 * Every component in the desktop family, once each, in a representative
 * default state — the view that makes a family judgeable at a glance.
 */
export declare function CatalogDesktop(): JSX.Element;

export declare const CatalogMobile: typeof CatalogMobile_2;

/**
 * Every component in `mayui/mobile`, once, on one page.
 *
 * Nine components, in the state each one ships in — not nine demos of what
 * each one can be talked into. The page exists to answer a question no
 * per-component story can: do these belong to each other? Read down it and the
 * family should look like one designer drew it on one afternoon; the moment a
 * component reads as a guest here, that is the finding.
 *
 * Three things about the layout are decisions rather than styling.
 *
 * The bars go in frames. TabBar is `position: fixed` by default, NavBar is
 * sticky, and Popup's scrim is fixed — none of them means anything without
 * something to be fixed *to*, so each sits in a tile carrying
 * `transform: translateZ(0)` and real `--may-inset-*` values. Shown loose on a
 * page they would pin to the browser window and the catalog would be a lie.
 *
 * FloatingBubble gets the opposite treatment, and its tile is the only one
 * with no transform anywhere in it. The bubble is fixed against the *display*
 * on purpose — that is what an AssistiveTouch bubble is — so framing it would
 * hide the one behaviour worth judging. It parks on the window's edge instead,
 * over this page, which is exactly where it would park over an app.
 *
 * And Popup is behind a tap rather than open on arrival. An always-open sheet
 * would hold the focus trap and the body scroll lock for the whole catalog:
 * every other component below it would be unreachable by keyboard. A modal's
 * honest resting state is closed.
 */
declare function CatalogMobile_2(): JSX.Element;

export declare function CheckoutScreen(): JSX.Element;

/**
 * A command palette over a working app.
 *
 * The palette paints its own scrim, so the Mail window behind it dims without
 * the screen having to stage anything — the backdrop is a real sidebar and a
 * real reading pane, not a grey rectangle, because a launcher's whole job is to
 * sit on top of work in progress.
 *
 * `hotkey={false}` gives the shortcut back to the host: this screen lives
 * inside a gallery that owns ⌘K itself, and a palette that silently steals a
 * chord from the page embedding it is the bug every launcher ships once. The
 * button in the toolbar reopens it, so dismissing the palette leaves something
 * to press rather than a dead screen.
 */
export declare function CommandPaletteScreen(): JSX.Element;

/**
 * The Users and Access page of a developer account: the shape almost
 * every admin console lands on — a toolbar that narrows the set, then a
 * table that acts on it.
 *
 * Two things are load-bearing rather than cosmetic. `maxHeight` is what
 * gives `stickyHeader` a scrollport to pin against; without it the head
 * would look sticky and never stick. And `pageSize` is what puts the
 * Pagination footer under the card, so fourteen people arrive as two
 * readable pages instead of one long scroll.
 *
 * No transform on the root: the per-row Menu is measured against the
 * real viewport and would otherwise open somewhere else entirely.
 */
export declare function DataTableAdminScreen(): JSX.Element;

export declare const DeviceFrame: typeof DeviceFrame_2;

/**
 * A simulated device viewport for the phone-shaped examples.
 *
 * Two things here are load-bearing rather than decorative:
 *
 * 1. `transform: translateZ(0)` on the screen establishes a containing block,
 *    so `position: fixed` descendants — NavBar, TabBar, Sheet scrims, Fab —
 *    resolve against the frame instead of escaping to the browser viewport.
 *    Without it a bottom tab bar sticks to the bottom of the page and the
 *    example is meaningless. This is the same mechanism behind the
 *    [GRID_OVERFLOW] escape warnings the sync validator raises on those
 *    components: a fixed element needs someone to be fixed *to*.
 *
 * 2. The `--may-inset-*` overrides feed SafeArea and every component that
 *    pads for the notch. `env(safe-area-inset-*)` reports 0 in a desktop
 *    browser, so without these the examples would show none of the safe-area
 *    behaviour they are meant to demonstrate.
 *
 * 3. The platform is pinned. Adaptive components ask `useIsDesktop`, which
 *    measures the real viewport — so on a normal monitor a phone mock-up would
 *    get `Sheet` as a centred dialog and `ActionSheet` as an anchored menu:
 *    the desktop half of every adaptive component, inside a phone. Pinning
 *    makes the frame's contents behave like the device it is drawing.
 *
 * One thing the frame cannot fix: `ContextMenu`, `FloatingBubble` and the
 * Sidebar rail flyout compute coordinates against the real viewport, so they
 * are wrong inside any transformed ancestor. Those belong outside a frame.
 */
declare function DeviceFrame_2({ children, device, theme, label, className, }: DeviceFrameProps): JSX.Element;

export declare interface DeviceFrameProps {
    children?: ReactNode;
    /** @default 'phone' */
    device?: 'phone' | 'phone-large' | 'tablet';
    /** Pin the frame's theme independently of the page. */
    theme?: 'light' | 'dark';
    /** Caption under the frame. */
    label?: string;
    className?: string;
}

export declare interface ExampleScreen {
    id: string;
    name: string;
    group: 'phone' | 'desktop' | 'cross' | 'catalog';
    component: ComponentType;
    /**
     * Render inside a DeviceFrame of this size. Phone screens need it: it supplies
     * the viewport, the safe-area insets, and the containing block a fixed TabBar
     * pins to. Desktop screens must NOT be framed — Sidebar's rail flyout,
     * CommandPalette and ContextMenu all position against the real viewport.
     */
    frame?: 'phone' | 'phone-large' | 'tablet';
    /** Pin the frame's appearance, for screens designed dark. */
    theme?: 'light' | 'dark';
    icon?: ReactNode;
    badge?: number;
}

/**
 * Finder.
 *
 * A `SplitPane` carrying the source list on the left and the browser on the
 * right, which is the layout every document app on the platform inherits. The
 * divider is draggable and the left pane is collapsible, so the same screen
 * covers both the sidebar-open and sidebar-shut states of a real window.
 *
 * The file table is wrapped in a single `ContextMenu` rather than one menu per
 * row: `ContextMenu` is `display: contents`, and wrapping every row separately
 * would break the sibling selectors a table's own rows rely on. The row under
 * the pointer is read off the event instead, which is what Finder itself does —
 * right-clicking a row selects it before the menu opens.
 */
export declare function FileBrowserScreen(): JSX.Element;

/**
 * Every form control in the system, doing one real job: the App Store Connect
 * submission pane.
 *
 * The screen exists to prove a single claim — that `Field` is the only thing a
 * form has to know about. Every control below sits inside one, so the label,
 * the helper line, the error, the required mark, the disabled state and all
 * three ARIA attributes come from one place instead of being retyped per
 * control. The four-up row near the bottom is the actual proof: one field,
 * four states, no per-state markup.
 *
 * The controls that are NOT wired by that context — `Slider` and `Stepper`,
 * which are composite widgets rather than labelable elements, and `RadioGroup`,
 * which says so in its own docs — carry an `aria-label` of their own. A
 * `<label for>` can only name a real form element, so a visible Field label
 * over any of the three is for sighted users alone unless it is repeated.
 */
export declare function FormShowcaseScreen(): JSX.Element;

/**
 * A day in Health's Summary tab.
 *
 * Two structural things are worth copying out of this screen.
 *
 * The scroller is ours, not the page's: a large-title `NavigationBar` is
 * `position: sticky` (the compact bar floats instead, overlaying its content)
 * and collapses against whatever container it is handed, so the large title
 * only animates if it is *inside* the overflow element and `scrollRef` points
 * at that same element. Sticky against the window would be wrong here — a
 * phone screen has its own scroll box.
 *
 * And nothing on the page carries a width. The rings sit in a `justify=
 * "between"` row, the tiles come from a `minColumnWidth` grid that is one
 * column on a phone and three on a tablet, and the bar chart's bars are flex
 * children — so the same component fills a 390pt screen and a split view
 * without a single media query.
 */
export declare function HealthScreen(): JSX.Element;

/**
 * One message, opened.
 *
 * The reading pane is the counterpart to the inbox: the inbox is a list on the
 * grouped background, so this screen sits on `--may-color-surface` instead and
 * the chrome above and below it inherits the same value. That is the whole
 * reason it reads as a *document* rather than as another card.
 *
 * Two compositions are worth copying out of here:
 *
 * - **The overflow menu is a `Menu` whose trigger is an `IconButton`.** The
 *   trigger is cloned to carry the open state, so it has to be a single
 *   ref-forwarding element — not a fragment, not a wrapper div. `shortcut` is
 *   drawn muted on the trailing edge and `destructive` tints Trash red, which
 *   together are how a native menu ranks its own items.
 *
 * - **The toolbar reads left-to-right as risk, then intent.** Trash sits alone
 *   at the leading edge, a `ToolbarSpacer` opens the gap, and the two actions
 *   you actually came for finish the bar under the thumb.
 */
export declare function MailDetailScreen(): JSX.Element;

/**
 * The Mail inbox — the screen that shows how three scroll-owning components
 * divide a phone up between them.
 *
 * The layout is three bands in a column, and which band scrolls is the whole
 * design: chrome at the top (nav bar plus search), `PullToRefresh` taking every
 * remaining pixel in the middle, and a toolbar at the bottom. `PullToRefresh`
 * **owns its scroller** — it renders the `overflow-y: auto` element itself and
 * translates it during the pull — so nothing above or below it may scroll, and
 * the `NavBar` above is deliberately `position="static"` rather than sticky:
 * there is no scroll container around it to stick to.
 *
 * Rows are `ListRow`s inside a `SwipeAction`, which is the composition Mail is
 * built on. The FIRST item on each side is the primary — the one that ends up
 * against the display edge and the one a full swipe fires — so Archive leads
 * the trailing group and Trash, being destructive, sits furthest from the
 * thumb's natural travel.
 */
export declare function MailInboxScreen(): JSX.Element;

export declare function NotificationsScreen(): JSX.Element;

/**
 * Now Playing.
 *
 * Pinned dark rather than adaptive: Music's full-screen player is dark in both
 * appearances, because the artwork is the light source and a white page around
 * it would out-shine the thing you came to look at. `data-may-theme="dark"` on
 * the wrapper flips the whole token layer for this subtree alone, which is the
 * one-attribute version of that decision.
 *
 * Everything is laid out in one column with the artwork as the only flexible
 * row, so the controls keep their spacing on a short phone and the artwork
 * gives up the height instead of the transport bar.
 */
export declare function NowPlayingScreen(): JSX.Element;

export declare function OnboardingScreen(): JSX.Element;

/**
 * Every overlay in the system, triggerable from one page.
 *
 * The point of collecting them is the taxonomy, which is easy to get wrong:
 *
 *  - `Sheet`, `Modal`, `ActionSheet`, `AlertDialog` and mobile `Popup` are
 *    modal. They scrim the page, trap focus and take Escape, so exactly one can
 *    be up at a time — which is why they share a single piece of state here
 *    rather than owning a boolean each.
 *  - `Popover`, `Menu` and `Tooltip` are anchored and non-modal. They keep
 *    their own open state beside their trigger, and dismiss on outside press,
 *    Escape, or focus leaving.
 *  - `toast()` is imperative and has no trigger relationship at all; the
 *    provider's host renders it.
 *
 * None of these portal. Each renders inline, right beside the button that
 * opened it, and reaches the whole viewport with a fixed scrim — so a Sheet can
 * be written inside the Card whose action opens it, which is where the reader
 * is looking.
 */
export declare function OverlaysScreen(): JSX.Element;

export declare const PhotosScreen: typeof PhotosScreen_2;

/**
 * The Photos library.
 *
 * Two things here are worth copying. First, the grid is `minColumnWidth`, not a
 * fixed column count: the wall reflows from three columns on a phone to six on
 * a tablet with no media query and no resize listener, and the tiles stay
 * square because each one owns its own aspect ratio.
 *
 * Second, the bottom bar acts on a SELECTION, so its actions are disabled until
 * there is something to act on — a share sheet raised over an empty selection
 * is the classic ported-toolbar bug. Share opens an `ActionSheet`, which is the
 * whole point of that component: the same four actions present as an iOS sheet
 * under a thumb and as an anchored menu under a mouse.
 */
declare function PhotosScreen_2(): JSX.Element;

/**
 * A macOS Settings window.
 *
 * The window itself is one `Box` — base surface, sheet radius, the heaviest
 * shadow in the ramp — because that is all a window is in this system: a
 * surface at a different value, floating. No ring, no hairline; those are the
 * two treatments that read as a dialog in light and as a floating rectangle in
 * dark.
 *
 * Panels use `keepMounted`, which is the right trade for a settings window
 * specifically: half-typed server details and a scrolled position both survive
 * a trip to another tab, exactly as they do in the real one.
 */
export declare function PreferencesScreen(): JSX.Element;

/**
 * The Apple Account screen.
 *
 * It is four grouped sections stacked in one scroller, which is the shape every
 * Settings detail view in iOS takes: identity on top, read-only facts, actions,
 * then the one destructive thing — alone at the bottom, far from anything a
 * thumb reaches for by accident.
 *
 * The interesting composition is which container carries which job.
 * `Descriptions` holds the facts, because a label/value pair is a `<dl>` and a
 * screen reader should announce "Serial Number, F2LW48ZXQ1M9" as one term and
 * its definition. `List` holds the destinations, because those are buttons.
 * `Card` holds the storage meter, because a bar with its own actions is a
 * self-contained panel rather than a row.
 */
export declare function ProfileScreen(): JSX.Element;

/** Every example, in the order the gallery lists them. */
export declare const SCREENS: ExampleScreen[];

/**
 * The App Store's search tab, mid-query.
 *
 * The header does not scroll: `SearchBar` and `CapsuleTabs` sit outside the
 * overflow element, so the query and the filters stay put while the results
 * move under them. That split is the whole layout — a flex column whose header
 * is `flex: 0 0 auto` and whose scroller is `flex: 1 1 auto; min-height: 0`.
 * Without that `min-height: 0` the scroller refuses to shrink below its
 * content and the page scrolls instead of the list, which is the single most
 * common way a phone layout goes wrong.
 *
 * `showCancel="always"` is right here and nowhere else: this screen exists to
 * be a search, so the way out of it must be visible before the field is
 * touched. Everywhere else Cancel arrives on focus.
 */
export declare function SearchScreen(): JSX.Element;

/**
 * iOS Settings, composed out of the catalogue.
 *
 * Four pieces of the screen are load-bearing rather than decorative, and each
 * of them is a rule the rest of the examples follow:
 *
 * 1. **The scroller is a real element, and the bar knows about it.** The large
 *    title collapses against `scrollRef`, not the window — inside a device
 *    frame (or a split view, or a sheet) the window never scrolls at all, so a
 *    bar left listening on it would sit there uncollapsed forever.
 *
 * 2. **`accessory` suppresses the chevron.** That single rule is the whole
 *    difference between a row that navigates (Wi-Fi → its own screen, chevron,
 *    `detail` showing the current value) and a row that toggles in place
 *    (Airplane Mode → a `Switch`, no chevron, nothing to drill into).
 *
 * 3. **Groups carry their own spacing.** `List` header and footer already pad
 *    above and below the card, so the column between them only needs a small
 *    gap; adding a generous one on top is how grouped lists end up drifting
 *    apart from each other.
 *
 * 4. **The destructive row asks first.** `AlertDialog` renders inline with a
 *    fixed scrim, so it can live at the bottom of the tree next to the state
 *    it guards rather than being hoisted to a portal at the root.
 */
export declare function SettingsScreen(): JSX.Element;

export declare const SplitInboxScreen: typeof SplitInboxScreen_2;

declare function SplitInboxScreen_2(): JSX.Element;

/**
 * The four conditions a screen spends most of its life in, side by side:
 * waiting, empty, broken, and connected-but-stale.
 *
 * They belong on one page because the differences between them are decisions,
 * not accidents. A skeleton is the silhouette of the thing that has not arrived
 * and never a spinner in a box. An empty state is muted, because a first run is
 * not a failure. An error is the only one of the four allowed to carry red, and
 * it says what actually failed — a host, a timeout, a last-known-good time —
 * rather than "Something went wrong". And the offline cell is the one most
 * apps skip: still useful, honest about its age, one tap from recovering.
 */
export declare function StatesScreen(): JSX.Element;

export declare function TeamScreen(): JSX.Element;

/**
 * Wallet: the card stack, then the transactions belonging to the card on top.
 *
 * The stack is the interesting part. Each card is a plain `Box` carrying one
 * of the eleven `--may-grad-*` tokens, and the overlap is a negative block
 * margin expressed in the spacing scale — `calc(var(--may-space-8) * -1)` —
 * never a magic pixel. Paint order does the rest: a later sibling sits on top
 * of an earlier one, so the cards stack front-to-back in source order with no
 * `z-index` anywhere, and each one's `shadow="lg"` falls on the card behind
 * it exactly as it does in Wallet.
 *
 * Copy on a gradient is the one place a colour has to be stated inline, and
 * `--may-on-color` is the token for it: white-on-colour, defined once, correct
 * in both themes because a gradient does not invert when the theme does.
 */
export declare function WalletScreen(): JSX.Element;

export { }
