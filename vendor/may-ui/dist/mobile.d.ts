import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react';
import { MutableRefObject } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';

/** Which edge the bubble parks on. Logical, so it mirrors under RTL. */
export declare type BubbleEdge = 'start' | 'end';

export declare interface CapsuleTab<T extends string = string> {
    /** Identity of the tab — what `onValueChange` reports. */
    value: T;
    label: ReactNode;
    /** Leading glyph, sized to the label by CSS. */
    icon?: ReactNode;
    /** A count riding inside the capsule, the way App Store hangs one off a filter. */
    count?: number;
    disabled?: boolean;
}

export declare const CapsuleTabs: typeof CapsuleTabs_2;

/**
 * A scrolling strip of capsules with a thumb that slides between them.
 *
 * Two things make it read as iOS rather than as a row of chips.
 *
 * The thumb *moves*. It is laid out once at 1px wide and positioned entirely
 * with translate + scale by the same `applyThumb` that drives SegmentedControl,
 * so a selection change never touches layout — and, unlike a cross-fade between
 * two indicators, it tells you where the selection went.
 *
 * And the strip follows the selection: choosing a tab that is half off the edge
 * scrolls it back into view, with a chip's worth of peek left at either end so
 * the strip never looks like it has run out.
 *
 * Unlike SegmentedControl the thumb is not draggable. On a strip that scrolls,
 * a horizontal drag already belongs to the scroller, and a control that fights
 * its own scroll container for the same gesture loses both.
 */
declare function CapsuleTabs_2<T extends string = string>({ items, value, defaultValue, onValueChange, variant, size, className, 'aria-label': ariaLabel, ...rest }: CapsuleTabsProps<T>): JSX.Element;

export declare interface CapsuleTabsProps<T extends string = string> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items: CapsuleTab<T>[];
    /** Controlled selection. */
    value?: T;
    /** Uncontrolled initial selection. Falls back to the first tab. */
    defaultValue?: T;
    onValueChange?: (value: T) => void;
    /** @default 'filled' */
    variant?: CapsuleTabsVariant;
    /** @default 'md' */
    size?: CapsuleTabsSize;
}

/** xs is deliberately absent: a chip that small stops being a touch target. */
export declare type CapsuleTabsSize = Exclude<MaySize, 'xs'>;

/**
 * `filled` is the capsule of solid tint — App Store's search filters. `tinted`
 * is the same capsule as a wash, for a strip that must not out-shout the
 * content under it. `surface` recesses the whole track and floats the selected
 * pill on it, which is SegmentedControl's shape stretched into a scroller.
 */
export declare type CapsuleTabsVariant = 'filled' | 'tinted' | 'surface';

export declare const FloatingBubble: typeof FloatingBubble_2;

/**
 * A floating bubble that can be thrown at the edges of the display.
 *
 * It tracks the finger anywhere on screen, resists past the safe area rather
 * than stopping dead at it, and on release flies to whichever side edge the
 * flick was actually headed for — `projectFlick` answers "where would this have
 * ended up", so a bubble thrown from the middle commits to the far edge instead
 * of snapping back to the near one.
 *
 * Only the side edges catch it. A bubble parked along the top would sit under
 * the status bar and the navigation chrome, and one along the bottom lands on
 * the home indicator; the sides are also the only edges a thumb can reach
 * without moving the hand.
 *
 * The gesture is on the button itself rather than on the wrapper that positions
 * it. A captured pointer retargets its own release, so capturing on a wrapper
 * would mean the tap that ends a non-drag never reaching the button — the
 * bubble would be draggable and unpressable.
 */
declare function FloatingBubble_2({ icon, children, 'aria-label': ariaLabel, tone, size, defaultEdge, defaultOffset, onClick, onEdgeChange, disabled, className, ...rest }: FloatingBubbleProps): JSX.Element;

export declare interface FloatingBubbleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'children'> {
    /** The glyph. A bare `<svg>` is scaled to the control by CSS. */
    icon: ReactNode;
    /** Required: a bubble is icon-first and has no visible name of its own. */
    'aria-label': string;
    /** An optional label, which extends the circle into a pill. */
    children?: ReactNode;
    /** @default 'tint' */
    tone?: MayTone;
    /** @default 'md' */
    size?: Exclude<MaySize, 'xs'>;
    /** Edge it parks on before it has been dragged. @default 'end' */
    defaultEdge?: BubbleEdge;
    /** How far down that edge it starts, 0 (top) to 1 (bottom). @default 0.62 */
    defaultOffset?: number;
    /** Fired by a tap. A drag is not a tap, and never produces this. */
    onClick?: () => void;
    /** Fired when a release lands the bubble on a different edge. */
    onEdgeChange?: (edge: BubbleEdge) => void;
    disabled?: boolean;
    className?: string;
}

/** Control size. Every rung is a proportion of `--may-control-h`. */
declare type MaySize = 'xs' | 'sm' | 'md' | 'lg';

/** Semantic colour role, shared across the system. */
declare type MayTone = 'tint' | 'neutral' | 'success' | 'warning' | 'danger';

export declare const NavBar: typeof NavBar_2;

/**
 * The phone navigation bar.
 *
 * The title is centred against the *bar*, not against the space left over
 * between the two sides: the layout is a three-track grid whose outer tracks
 * share the free space equally, so a trailing action does not drag the title
 * off-centre. It truncates before it can reach either side.
 */
declare function NavBar_2({ title, onBack, backHref, backLabel, backAriaLabel, leading, trailing, separator, position, variant, hideOnScroll, scrollRef, className, ...rest }: NavBarProps): JSX.Element;

export declare interface NavBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /** Centre title. Truncates rather than wrapping — a nav bar is one line tall. */
    title?: ReactNode;
    /** Back handler. Its presence is what draws the chevron. */
    onBack?: () => void;
    /** Renders the back affordance as a real `<a>` instead of a button. */
    backHref?: string;
    /** Text beside the chevron — the previous screen's title, the way iOS labels it. */
    backLabel?: ReactNode;
    /** Accessible name when the chevron stands alone. @default 'Back' */
    backAriaLabel?: string;
    /** Leading content. Replaces the back affordance when both are supplied. */
    leading?: ReactNode;
    /** Trailing actions — an `IconButton`, a plain `Button`, or a few of them. */
    trailing?: ReactNode;
    /** Draw the hairline between the bar and the content below it. @default true */
    separator?: boolean;
    /**
     * `sticky` keeps the bar at the top of its own scroll container, which is
     * what a phone screen wants. `fixed` pins it to the viewport; `static` lets
     * it scroll away with the content. @default 'sticky'
     */
    position?: 'static' | 'sticky' | 'fixed';
    /**
     * `surface` paints an opaque background, which any bar with content moving
     * under it needs — this system has no blur to hide behind. `plain` is
     * transparent, for a screen that scrolls its own colour up to the bar.
     * @default 'surface'
     */
    variant?: 'surface' | 'plain';
    /** Slide the bar away on the way down and bring it back on the way up. */
    hideOnScroll?: boolean;
    /** Scroll container to watch. Defaults to the window. */
    scrollRef?: RefObject<HTMLElement | null>;
}

export declare const Popup: typeof Popup_2;

/**
 * The phone bottom sheet — the primitive other mobile components present over.
 *
 * Per the reuse ladder this is a thin prop-shape adapter over the adaptive
 * `Sheet`, not a second implementation. The drag-to-dismiss gesture, the focus
 * trap, the scroll lock, the Escape handling and the scrim all stay in exactly
 * one place; duplicating the gesture here is how two sheets end up dismissing
 * at subtly different velocities.
 *
 * Popup adds three things Sheet does not:
 *
 *   1. the phone-centric prop shape (`visible`, `closeOnMaskClick`) that the
 *      rest of `mayui/mobile` is written against;
 *   2. a top edge, which an adaptive sheet has no use for;
 *   3. presentation pinned to the phone shape at every viewport width.
 *
 * (3) is done in CSS rather than by threading a `presentation` prop through
 * Sheet, because Sheet's presentation is a media query rather than state:
 * `useIsDesktop` is the question a *consumer* asks, and a phone-only primitive
 * has already answered it. One consequence is worth naming rather than hiding:
 * Sheet attaches its drag on the phone branch only, so at a desktop-width
 * viewport a Popup keeps the phone shape but does not drag. That is the right
 * trade for a component that only ever ships inside `mayui/mobile`.
 */
declare function Popup_2({ visible, onClose, children, position, height, closeOnMaskClick, grabber, safeArea, title, padded, className, }: PopupProps): JSX.Element;

export declare interface PopupProps {
    /** Phone-shaped naming for what `Sheet` calls `open`. */
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
    /**
     * Which edge the panel is attached to.
     * @default 'bottom'
     */
    position?: 'bottom' | 'top';
    /**
     * Fixed panel height. A number is treated as px; a string is any CSS length
     * (`'60%'`, `'22rem'`, `'50dvh'`). Omit it to size to the content.
     */
    height?: number | string;
    /** @default true */
    closeOnMaskClick?: boolean;
    /** The drag handle. Bottom popups only — see the note on `position`. @default true */
    grabber?: boolean;
    /**
     * Pad the attached edge by the device's safe-area inset, so content clears
     * the home indicator (bottom) or the status bar / notch (top).
     * @default true
     */
    safeArea?: boolean;
    /**
     * Accessible name. A Popup usually has no visible title — it is a container
     * other components fill — but a dialog with no name is unusable in a screen
     * reader, so pass one whenever the content does not speak for itself.
     */
    title?: ReactNode;
    /**
     * Inset the content by the standard sheet gutter. Off by default: a Popup is
     * a *primitive* other mobile components compose over — a picker, a filter
     * panel, a grouped list — and those want to reach the edges themselves.
     * @default false
     */
    padded?: boolean;
    className?: string;
}

export declare const PullToRefresh: typeof PullToRefresh_2;

/**
 * Pull a scroll container past its top edge to refresh it.
 *
 * The component owns the scroller (give it a bounded height and it fills it),
 * because the gesture has to know the exact moment `scrollTop` reaches zero —
 * a wrapper around someone else's scroller cannot.
 *
 * None of the physics lives here: `dampPull` decides how much the surface
 * gives, `resolvePullStatus` names the state, `shouldTriggerRefresh` weighs the
 * release, and `pullProgress` fills the ring. They sit in motion/pull-physics
 * so they can be reasoned about — and unit-tested — without simulating a single
 * pointer event.
 */
declare function PullToRefresh_2({ onRefresh, children, threshold, max, disabled, label, scrollRef: externalScrollRef, className, ...rest }: PullToRefreshProps): JSX.Element;

export declare interface PullToRefreshProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrag'> {
    /**
     * Runs when the pull is released past the threshold. The indicator stays up
     * until the returned promise settles, so a refresh that takes a second reads
     * as a second of work rather than a flash.
     */
    onRefresh: () => void | Promise<unknown>;
    children?: ReactNode;
    /** Distance at which releasing triggers a refresh, in px. @default 64 */
    threshold?: number;
    /** Hard ceiling for the damped pull, in px. @default 140 */
    max?: number;
    disabled?: boolean;
    /** Announced while the refresh runs. @default 'Refreshing' */
    label?: string;
    /**
     * Receives the scroller this component owns.
     *
     * NavBar and NavigationBar drive their large-title collapse from a scroll
     * container's ref, and this component's scroller is internal — so without
     * this a bar could never collapse above a pull-to-refresh list, which is
     * exactly the shape a Mail inbox wants.
     */
    scrollRef?: MutableRefObject<HTMLDivElement | null>;
}

export declare const SearchBar: ForwardRefExoticComponent<SearchBarProps & RefAttributes<HTMLInputElement>>;

/**
 * `auto` is iOS: Cancel arrives on focus and leaves on blur — but stays while
 * there is still text, because that is the thing there is left to cancel.
 * `always` is for a screen whose whole purpose is the search. `never` drops the
 * affordance for a bar that filters in place and never takes over the view.
 */
export declare type SearchBarCancel = 'auto' | 'always' | 'never';

export declare interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'prefix'> {
    /** Controlled value. */
    value?: string;
    /** Uncontrolled initial value. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Enter, or the search key on a software keyboard. */
    onSearch?: (value: string) => void;
    /** Fired after Cancel has cleared the field and dismissed the keyboard. */
    onCancel?: () => void;
    /** @default 'md' */
    size?: SearchBarSize;
    /** @default 'auto' */
    showCancel?: SearchBarCancel;
    /** @default 'Cancel' */
    cancelLabel?: string;
    /** Accessible name for the clear button. @default 'Clear search' */
    clearLabel?: string;
    /**
     * Where the magnifier and placeholder rest while the bar is idle.
     * `center` is the list-header look — they sit in the middle of the pill and
     * travel to the leading edge as the bar wakes up. `leading` pins them there.
     * @default 'center'
     */
    align?: 'center' | 'leading';
    /**
     * Class for the outer band. `className` lands on the `<input>`, matching
     * `SearchField` — both extend the input's own attributes, so that is where
     * an unqualified `className` has to go.
     */
    wrapperClassName?: string;
}

export declare type SearchBarSize = Exclude<MaySize, 'xs'>;

export declare const Selector: typeof Selector_2;

/**
 * A set of choices laid out as cards or chips.
 *
 * The whole point of this shape over a `Select` is that every option is
 * visible and one tap away, so it is worth spending the screen only when the
 * options are few and the choice is the task — Focus modes, an AirDrop
 * visibility setting, the topics on a first-run screen.
 *
 * Selection is a tinted fill and a checkmark, never a stroke. The two variants
 * animate that arrival differently on purpose: a card's check fades up in
 * place so a grid never reflows, while a chip's check slides out from the
 * leading edge and *widens the chip*, which is the motion iOS uses and the
 * reason a chip row feels physical rather than repainted.
 */
declare function Selector_2<T extends string = string>(props: SelectorProps<T>): JSX.Element;

declare interface SelectorBaseProps<T extends string = string> {
    options: SelectorOption<T>[];
    /** @default 'card' */
    variant?: SelectorVariant;
    /** @default 'md' */
    size?: SelectorSize;
    /**
     * Grid columns. `1` stacks them into a list. `'auto'` drops the grid and
     * lets items wrap at their own width, which is what a row of chips wants.
     * @default 2 for cards, 'auto' for chips
     */
    columns?: SelectorColumns;
    /** Disables every option at once. */
    disabled?: boolean;
    className?: string;
    'aria-label'?: string;
}

/** A fixed column count, or `'auto'` to let items wrap at their natural width. */
export declare type SelectorColumns = number | 'auto';

declare interface SelectorMultipleProps<T extends string = string> {
    multiple: true;
    value?: T[];
    defaultValue?: T[];
    onChange?: (value: T[], option: SelectorOption<T>) => void;
}

export declare interface SelectorOption<T extends string = string> {
    /** Primary line. */
    label: ReactNode;
    value: T;
    /** Second line under the label. `card` only — a chip has no room for one. */
    description?: ReactNode;
    /** Leading glyph: an inline SVG, an emoji, an `IconTile`. */
    icon?: ReactNode;
    disabled?: boolean;
}

/**
 * Written as a union rather than as `string | string[]` on one shape, so the
 * value a consumer receives is decided by the `multiple` flag they already
 * passed — no runtime `Array.isArray` at the call site, no `as string`.
 */
export declare type SelectorProps<T extends string = string> = (SelectorBaseProps<T> & SelectorSingleProps<T>) | (SelectorBaseProps<T> & SelectorMultipleProps<T>);

declare interface SelectorSingleProps<T extends string = string> {
    /** @default false */
    multiple?: false;
    value?: T;
    defaultValue?: T;
    onChange?: (value: T, option: SelectorOption<T>) => void;
}

export declare type SelectorSize = Exclude<MaySize, 'xs'>;

/** `card` is the tappable tile; `chip` is the pill that wraps in a row. */
export declare type SelectorVariant = 'card' | 'chip';

export declare const SwipeAction: typeof SwipeAction_2;

/**
 * iOS swipe-to-reveal row actions.
 *
 * The row tracks the finger, meets rubber-band resistance past the end of the
 * actions, and — dragged most of the way across — fires the primary action
 * directly, with the other actions collapsing under it as it takes the row.
 *
 * The actions are not slid in from off-screen: each group is pinned to its own
 * display edge and widens as the row uncovers it, so the labels stay centred in
 * tiles that grow rather than sliding past a window. That is the detail that
 * separates this from a carousel wearing a row's clothes.
 */
declare function SwipeAction_2({ children, leading, trailing, fullSwipe, disabled, onOpenChange, className, ...rest }: SwipeActionProps): JSX.Element;

export declare interface SwipeActionItem {
    label: string;
    onSelect: () => void;
    /** Glyph above the label. A bare `<svg>` is scaled to the tile by CSS. */
    icon?: ReactNode;
    /** @default 'neutral' */
    tone?: MayTone;
}

export declare interface SwipeActionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    /** The row itself — typically a `ListRow`. */
    children: ReactNode;
    /**
     * Revealed by dragging the row toward its trailing edge. **The first item is
     * the one that ends up against the display edge**, so it is the one the eye
     * lands on first and the one a full swipe fires.
     */
    leading?: SwipeActionItem[];
    /** Revealed by dragging toward the leading edge. First item is the primary. */
    trailing?: SwipeActionItem[];
    /** Dragging most of the way across fires that group's primary action. @default true */
    fullSwipe?: boolean;
    disabled?: boolean;
    onOpenChange?: (side: SwipeSide | null) => void;
}

/** Which edge of the row the actions live on. */
export declare type SwipeSide = 'leading' | 'trailing';

export declare const TabBar: typeof TabBar_2;

/**
 * The bottom tab bar.
 *
 * Two decisions are worth stating outright.
 *
 * It is a `<nav>` of links and buttons marked with `aria-current`, not a
 * `role="tablist"`. `role="tab"` promises an associated `tabpanel` and
 * arrow-key movement inside a single widget; a tab bar swaps whole screens,
 * often with the URL, and the tabs stay reachable one Tab press each. Claiming
 * the tab pattern here would describe a widget that does not exist.
 *
 * And it is opaque. iOS blurs the content sliding under its bar; this system
 * has no blur, so the bar paints a real surface and separates itself with a
 * hairline. A translucent bar with nothing behind it to blur reads as a bug,
 * not as vibrancy.
 */
declare function TabBar_2<T extends string = string>({ items, value, defaultValue, onValueChange, fixed, labels, tone, children, className, 'aria-label': ariaLabel, ...rest }: TabBarProps<T>): JSX.Element;

export declare interface TabBarItem<T extends string = string> {
    /** Identity of the tab — what `onValueChange` reports. */
    value: T;
    label: ReactNode;
    /** Outline glyph, drawn while the tab is not selected. */
    icon: ReactNode;
    /**
     * Filled counterpart, drawn while it is. iOS swaps the glyph's *weight* on
     * selection and only then tints it; a tint alone is the tell that a bar was
     * ported rather than designed.
     */
    activeIcon?: ReactNode;
    /** Unread count, hung off the icon's trailing-top corner. */
    badge?: number;
    /** A bare dot instead of a count — "something new here", without a number. */
    dot?: boolean;
    /** Render the item as a real link. Router-free navigation still gets an `<a>`. */
    href?: string;
    disabled?: boolean;
}

export declare interface TabBarProps<T extends string = string> extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    items: TabBarItem<T>[];
    /** Controlled selection. */
    value?: T;
    /** Uncontrolled initial selection. Falls back to the first item. */
    defaultValue?: T;
    onValueChange?: (value: T) => void;
    /** Float the bar above the bottom edge of the viewport. @default true */
    fixed?: boolean;
    /** Keep the labels under the glyphs. Off is iOS's compact landscape bar. @default true */
    labels?: boolean;
    /** Tint of the selected item. @default 'tint' */
    tone?: MayTone;
    /**
     * The detached control beside the capsule — search in Phone, compose in
     * Notes. Anything at all: an `IconButton`, a `Fab`, a `SearchField`. The bar
     * owns where it sits and how far it sits from the capsule; you own what it
     * is. Omit it and the capsule centres alone.
     */
    children?: ReactNode;
}

export { }
