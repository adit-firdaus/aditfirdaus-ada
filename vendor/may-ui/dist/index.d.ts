import { ButtonHTMLAttributes } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { CSSProperties } from 'react';
import { ElementType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { FunctionComponentElement } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react';
import { LabelHTMLAttributes } from 'react';
import { PointerEvent as PointerEvent_2 } from 'react';
import { ProviderProps } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';

export declare const Accordion: typeof Accordion_2;

/**
 * A grouped list of disclosures.
 *
 * Items share one rounded card with hairlines between them, exactly as `List`
 * builds a Settings group — which is what makes six questions read as one
 * panel instead of six floating cards. Each row is a `Collapsible`; this
 * component only owns which of them are open.
 */
declare function Accordion_2({ children, type, value, defaultValue, onValueChange, collapsible, variant, header, footer, className, ...rest }: AccordionProps): JSX.Element;

export declare const AccordionItem: typeof AccordionItem_2;

/** One row plus its panel. Must be rendered inside an `Accordion`. */
declare function AccordionItem_2({ value, title, subtitle, leading, detail, children, disabled, className, }: AccordionItemProps): JSX.Element;

export declare interface AccordionItemProps {
    /** Identity of this item within the accordion. Must be unique. */
    value: string;
    /** Primary line of the row. */
    title: ReactNode;
    /** Secondary line under the title. */
    subtitle?: ReactNode;
    /** Leading element — an `IconTile`, an `Avatar`, a glyph. */
    leading?: ReactNode;
    /** Trailing value shown muted before the chevron, as `ListRow` does. */
    detail?: ReactNode;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
}

export declare interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children?: ReactNode;
    /**
     * `single` closes the open item when another opens — the FAQ behaviour.
     * @default 'single'
     */
    type?: AccordionType;
    /**
     * Controlled open items. Always an array, in both modes: switching `type`
     * would otherwise change the type of `value` and break every call site.
     */
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    /** In `single` mode, whether the open item can be closed by tapping it. @default true */
    collapsible?: boolean;
    /** `inset` is the grouped card; `plain` is full-bleed. @default 'inset' */
    variant?: 'inset' | 'plain';
    /** Section header above the card, in the iOS grouped style. */
    header?: ReactNode;
    /** Muted explanatory text below the card. */
    footer?: ReactNode;
}

export declare type AccordionType = 'single' | 'multiple';

export declare const ActionSheet: typeof ActionSheet_2;

/**
 * A list of actions, in whichever shape the pointer deserves.
 *
 * On a phone it is the authentic iOS action sheet: full-width rows in a rounded
 * group at the bottom edge, with Cancel as a *separate* group below. That gap
 * is not decoration — it is what stops a thumb reaching for Cancel from landing
 * on the destructive row above it.
 *
 * On desktop the same actions become an anchored menu. A 56pt full-width row is
 * absurd under a mouse, and a Cancel row is redundant when Escape and a click
 * anywhere else already cancel — so the desktop shape drops it.
 */
declare function ActionSheet_2({ open, onClose, items, actions, title, description, cancelLabel, anchorRef, className, }: ActionSheetProps): JSX.Element | null;

export declare interface ActionSheetAction {
    label: string;
    onSelect: () => void;
    /** Paints the row in the destructive colour. "Delete Photo", "Log Out". */
    destructive?: boolean;
    disabled?: boolean;
    /** Trailing glyph on a phone, leading glyph in the desktop menu. */
    icon?: ReactNode;
}

export declare interface ActionSheetProps {
    open: boolean;
    onClose: () => void;
    /**
     * The rows. Named `items` to match every other list-taking component —
     * Menu, Breadcrumb, Steps, TabBar, CapsuleTabs, CommandPalette, ContextMenu.
     */
    items?: ActionSheetAction[];
    /**
     * @deprecated Use `items`. `actions` meant two different things in one entry
     * point — `ActionSheetAction[]` here and `ReactNode` on `Alert` — so the word
     * could not be read without knowing which component you were looking at.
     * Still honoured; `items` wins when both are passed.
     */
    actions?: ActionSheetAction[];
    title?: ReactNode;
    description?: ReactNode;
    /** Label of the phone shape's separate cancel group. @default 'Cancel' */
    cancelLabel?: string;
    /**
     * Desktop only: the control the menu hangs from. Without it the menu
     * presents centred, the way a modal does.
     */
    anchorRef?: RefObject<HTMLElement | null>;
    className?: string;
}

export declare const Alert: typeof Alert_2;

/**
 * An inline message.
 *
 * A tinted fill and a tone-coloured glyph, never a stroke — a bordered alert is
 * the single most recognisable "this is a web page" tell in an otherwise native
 * screen. The TEXT stays full-contrast rather than taking the tone: orange type
 * on an orange wash is unreadable at footnote size, and the glyph already
 * carries the tone.
 *
 * Dismissal is animated properly: the close button starts the exit and
 * `onDismiss` fires on `animationend`, so the consumer unmounts the alert after
 * it has visibly left rather than yanking it out from under the animation.
 * Under reduced motion base.css collapses that animation to 1ms, so the same
 * code path dismisses immediately with no special case here.
 *
 * In a STACK, set `--may-alert-gap` on the container to whatever its `gap` is:
 *
 *   <div style={{ display: 'flex', flexDirection: 'column',
 *                 gap: 'var(--may-space-3)',
 *                 ['--may-alert-gap' as string]: 'var(--may-space-3)' }}>
 *
 * Without it the gap the alert leaves behind collapses in a single frame when
 * the node unmounts, which reads as a jump. See Alert.css.
 */
declare function Alert_2({ tone, title, children, icon, onDismiss, dismissLabel, actions, role, className, ...rest }: AlertProps): JSX.Element;

export declare const AlertDialog: typeof AlertDialog_2;

/**
 * Confirm, or confirm something destructive.
 *
 * Small, centred, and — unlike `Modal` — not dismissible by clicking away.
 * An alert exists because there is a decision that has to be made, and a click
 * on the scrim is not one of the two answers. It nudges instead, the way an
 * NSAlert does, which reads as "I heard you, but pick one".
 *
 * The only shape that adapts is the action row: full-width and stacked on a
 * phone with the confirming action on top, two equal halves on desktop.
 */
declare function AlertDialog_2({ open, title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, children, className, ...rest }: AlertDialogProps): JSX.Element | null;

/**
 * Extends `HTMLAttributes` so a consumer can attach the things every other
 * component already allows: `data-testid` for e2e, an `id`, extra `aria-*`,
 * a `ref`. `title` is omitted because this component means a heading by it,
 * not the HTML tooltip attribute.
 */
export declare interface AlertDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    open: boolean;
    /** The question, phrased as one. "Delete this album?" */
    title: ReactNode;
    /** The consequence. One or two sentences at most. */
    description?: ReactNode;
    /** @default 'OK' */
    confirmLabel?: string;
    /** @default 'Cancel' */
    cancelLabel?: string;
    /** Paints the confirm button destructive and opens with Cancel focused. */
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    /** Extra content between the description and the actions. Use sparingly. */
    children?: ReactNode;
    className?: string;
}

export declare interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** @default 'tint' */
    tone?: MayTone;
    /** Bold first line. Optional — a one-line notice reads better without one. */
    title?: ReactNode;
    /** The message. */
    children?: ReactNode;
    /**
     * Overrides the tone's own glyph. Pass `null` to drop the glyph entirely,
     * for a dense stack of alerts where five icons in a column is noise.
     */
    icon?: ReactNode;
    /** Renders the close button. Fires once the exit animation has finished. */
    onDismiss?: () => void;
    /** @default 'Dismiss' */
    dismissLabel?: string;
    /** Buttons under the message — typically one `plain` and one `tinted`. */
    actions?: ReactNode;
}

declare interface ApplyOptions {
    /** Which axis the thumb translates and stretches on. @default 'inline' */
    axis?: ThumbAxis;
    /**
     * How far past the end of the track the thumb is being pulled, in px, already
     * rubber-banded by the caller. Positive is trailing, negative is leading.
     */
    overdrag?: number;
    /** How long the settle takes. A control can be quicker than the default. */
    settleMs?: number;
    /**
     * The curve the thumb settles on when it is not following a pointer. Defaults
     * to the iOS presentation curve that Tabs and CapsuleTabs use; a control can
     * name its own, and a `var()` resolves against the thumb like any other
     * inline value.
     */
    easing?: string;
    /**
     * No transition at all: the thumb IS where the pointer is, this frame. Used
     * once it has caught up, when any easing at all reads as lag rather than as
     * weight.
     */
    instant?: boolean;
    /**
     * How much the thumb puffs while held. The default suits a thumb with room
     * around it; a control whose track hugs its thumb wants far less, or the puff
     * spills past the track it is supposed to be sitting in.
     */
    pressScale?: number;
    /** True while a finger or pointer is down — the thumb follows instead of settling. */
    following?: boolean;
    /** True while the thumb is being held, which puffs it up. */
    pressed?: boolean;
    reducedMotion?: boolean;
}

/**
 * Position the thumb. Transform-only, so it stays on the compositor: the
 * element is laid out once at width 1px and scaled, rather than animating
 * `left`/`width` and forcing layout on every frame.
 */
declare function applyThumb(thumb: HTMLElement, { x, width }: ThumbGeometry, { axis, following, pressed, reducedMotion, overdrag, instant, easing, settleMs, pressScale, }?: ApplyOptions): void;

export declare const Avatar: typeof Avatar_2;

/**
 * A person.
 *
 * The initials fallback is a real gradient tile rather than a grey circle,
 * because a Messages thread or an AirDrop sheet full of grey circles reads as
 * missing data. A broken `src` falls back to the same treatment: an avatar
 * that 404s must not leave a hole in the row.
 */
declare function Avatar_2({ name, src, alt, size, shape, fallback, hue, className, 'aria-label': ariaLabel, ...rest }: AvatarProps): JSX.Element;

export declare const AvatarGroup: typeof AvatarGroup_2;

/**
 * A stack of overlapping avatars.
 *
 * The gap between them is *punched out*, not drawn: each avatar wears a mask
 * with a hole where its neighbour sits. A ring would be a stroke, and this
 * system does not separate anything with a stroke — the mask gets the same
 * result out of the layer underneath, and it stays correct on any background.
 */
declare function AvatarGroup_2({ children, max, size, className, ...rest }: AvatarGroupProps): JSX.Element;

export declare interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    /** Avatars past this collapse into a +N chip. @default 4 */
    max?: number;
    /** Applied to every child that has not set its own. @default 'md' */
    size?: AvatarSize;
}

export declare type AvatarHue = (typeof HUES)[number];

export declare interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    /** Drives both the initials and — deterministically — the fallback colour. */
    name?: string;
    src?: string;
    /** Defaults to `name`. */
    alt?: string;
    /** @default 'md' */
    size?: AvatarSize;
    /** @default 'circle' */
    shape?: AvatarShape;
    /** Shown when there is neither an image nor a name. */
    fallback?: ReactNode;
    /** Pin the fallback colour instead of deriving it from the name. */
    hue?: AvatarHue;
}

/** `square` uses the app-icon squircle radius, not a rounded rectangle. */
export declare type AvatarShape = 'circle' | 'square';

/** xs–xl. `md` is exactly one touch target; the rest are proportions of it. */
export declare type AvatarSize = MaySize | 'xl';

export declare const Badge: typeof Badge_2;

/**
 * A status pill.
 *
 * The count shape is the interesting one. iOS badges *pop* when the number
 * changes — the badge jumps oversized and springs back — and that motion is
 * how you notice a count moved without watching for it. It is driven from a
 * ref rather than a CSS class because a class-toggle cannot restart an
 * animation that is already at rest without a second frame of bookkeeping.
 */
declare function Badge_2({ children, variant, tone, size, dot, count, max, className, ...rest }: BadgeProps): JSX.Element;

export declare interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
    children?: ReactNode;
    /** @default 'tinted' */
    variant?: BadgeVariant;
    /** @default 'tint' */
    tone?: MayTone;
    /** @default 'sm' */
    size?: BadgeSize;
    /** Leading status dot. With no label the badge collapses to the dot alone. */
    dot?: boolean;
    /**
     * Notification-count shape: circular at one digit, growing into a pill as
     * digits are added. Takes precedence over `children`.
     */
    count?: number;
    /** Counts above this render as `${max}+`. @default 99 */
    max?: number;
}

/** A badge annotates something else, so it never reaches the `lg` control rung's neighbour `xs`. */
export declare type BadgeSize = Exclude<MaySize, 'xs'>;

/**
 * `tinted` is a wash of the tone carrying tone-coloured text — the weight iOS
 * uses inline next to a label. `solid` is the tone as a fill, for the one
 * badge on screen that has to be seen from across the room.
 */
export declare type BadgeVariant = 'tinted' | 'solid';

export declare const Box: typeof Box_2;

/**
 * The layout surface everything else is built on.
 *
 * Padding is handed to CSS as custom properties rather than as one rule per
 * step, because thirteen steps across three props is thirty-nine rules of
 * stylesheet for something a single variable expresses. The defaults live in
 * Box.css, so an omitted prop still resolves through the token layer.
 */
declare function Box_2<E extends ElementType = 'div'>({ as, children, padding, paddingX, paddingY, surface, radius, shadow, fullWidth, className, style, ...rest }: BoxProps<E>): JSX.Element;

export declare interface BoxOwnProps {
    children?: ReactNode;
    /** Padding on all four sides. */
    padding?: MaySpaceStep;
    /** Inline padding. Wins over `padding`. */
    paddingX?: MaySpaceStep;
    /** Block padding. Wins over `padding`. */
    paddingY?: MaySpaceStep;
    /** @default 'none' */
    surface?: BoxSurface;
    /** @default 'none' */
    radius?: BoxRadius;
    /** @default 'none' */
    shadow?: BoxShadow;
    fullWidth?: boolean;
    className?: string;
    style?: CSSProperties;
}

export declare type BoxProps<E extends ElementType = 'div'> = BoxOwnProps & {
    /** Element or component to render as. @default 'div' */
    as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof BoxOwnProps | 'as'>;

export declare type BoxRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'card' | 'sheet' | 'full';

export declare type BoxShadow = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Which layer the box sits on.
 *
 * Surfaces separate by VALUE, never by a stroke: `base` over `grouped` is the
 * exact contrast iOS uses between a card and the page behind it, and `nested`
 * is the inset field inside that card. There is no `bordered` — a stroke is
 * the thing this system never draws.
 */
export declare type BoxSurface = 'none' | 'base' | 'nested' | 'grouped';

export declare const Breadcrumb: typeof Breadcrumb_2;

/**
 * A path through a hierarchy — the Files trail, a Settings drill-down.
 *
 * Past `maxItems` the middle folds into an ellipsis that expands in place, and
 * the expansion is a FLIP: the crumbs that survive keep their DOM nodes, are
 * measured before and after, and slide from where they were rather than the
 * whole trail snapping to a new width.
 */
declare function Breadcrumb_2({ items, maxItems, itemsBeforeCollapse, itemsAfterCollapse, separator, size, className, 'aria-label': ariaLabel, ...rest }: BreadcrumbProps): JSX.Element;

export declare interface BreadcrumbItem {
    label: ReactNode;
    /** Renders the crumb as a real `<a>`. */
    href?: string;
    /** Renders the crumb as a real `<button>`. Ignored when `href` is set. */
    onClick?: () => void;
    /** Leading glyph — a folder, a disk, an app icon. */
    icon?: ReactNode;
}

export declare interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    items: BreadcrumbItem[];
    /**
     * Fold the middle of the trail into an ellipsis once it is longer than this.
     * Unset means never collapse.
     */
    maxItems?: number;
    /** How many leading crumbs survive a collapse. @default 1 */
    itemsBeforeCollapse?: number;
    /** How many trailing crumbs survive a collapse. @default 2 */
    itemsAfterCollapse?: number;
    /** Replaces the chevron between crumbs. */
    separator?: ReactNode;
    /** @default 'md' */
    size?: BreadcrumbSize;
    /** Accessible name for the trail. @default 'Breadcrumb' */
    'aria-label'?: string;
}

/** xs is absent: a crumb that small stops being a touch target. */
export declare type BreadcrumbSize = Exclude<MaySize, 'xs'>;

/** Which edge the bubble parks on. Logical, so it mirrors under RTL. */
declare type BubbleEdge = 'start' | 'end';

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare const ButtonGroup: typeof ButtonGroup_2;

/**
 * A cluster of related actions.
 *
 * Attached children are separated by a hairline-wide **gap**, not a stroke —
 * the surface behind the group shows through it, exactly the way an iOS alert
 * divides its actions. That keeps the divider correct on any background, and
 * keeps the system's "nothing is separated by a line" rule intact.
 *
 * The press is handled at the cluster, not the child: see the note in the CSS.
 */
declare function ButtonGroup_2({ children, attached, orientation, fullWidth, className, ...rest }: ButtonGroupProps): JSX.Element;

export declare interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    /**
     * Join the children into one cluster with a shared outer radius. Turn it off
     * for a plain row of separate buttons with a normal gap.
     * @default true
     */
    attached?: boolean;
    /** @default 'horizontal' */
    orientation?: 'horizontal' | 'vertical';
    /** Children divide the group's width (or its width, when vertical) equally. */
    fullWidth?: boolean;
}

export declare interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    children?: ReactNode;
    /**
     * Render this button's presentation onto its child instead of a `<button>` —
     * the way to make a router `<Link>` look like a button without losing the
     * anchor. The child's own props win; `className` is merged. `type` and
     * `disabled` are not forwarded, because neither is valid on an `<a>`:
     * a disabled child gets `aria-disabled` instead.
     * @default false
     */
    asChild?: boolean;
    /** @default 'filled' */
    variant?: ButtonVariant;
    /** @default 'tint' */
    tone?: MayTone;
    /** @default 'md' */
    size?: MaySize;
    /** Pill instead of rounded-rect. iOS uses pills for prominent standalone actions. */
    pill?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}

/**
 * `filled` for the one primary action, `tinted` for secondary (a wash of the
 * tint carrying tinted text), `gray` for neutral secondary, `plain` for
 * low-emphasis and toolbars.
 *
 * There is no `outline` variant. Nothing in this system is separated by a
 * stroke — a tinted fill does that job at every weight.
 */
export declare type ButtonVariant = 'filled' | 'tinted' | 'gray' | 'plain';

declare interface CapsuleTab<T extends string = string> {
    /** Identity of the tab — what `onValueChange` reports. */
    value: T;
    label: ReactNode;
    /** Leading glyph, sized to the label by CSS. */
    icon?: ReactNode;
    /** A count riding inside the capsule, the way App Store hangs one off a filter. */
    count?: number;
    disabled?: boolean;
}

declare interface CapsuleTabsProps<T extends string = string> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
declare type CapsuleTabsSize = Exclude<MaySize, 'xs'>;

/**
 * `filled` is the capsule of solid tint — App Store's search filters. `tinted`
 * is the same capsule as a wash, for a strip that must not out-shout the
 * content under it. `surface` recesses the whole track and floats the selected
 * pill on it, which is SegmentedControl's shape stretched into a scroller.
 */
declare type CapsuleTabsVariant = 'filled' | 'tinted' | 'surface';

export declare const Card: typeof Card_2;

/**
 * A surface.
 *
 * The padding prop sets `--may-card-pad` rather than padding the root
 * directly, so `CardHeader` / `CardBody` / `CardFooter` inherit one rhythm and
 * a full-bleed child (a `List`, an image) can cancel it with `padding="none"`
 * without every section needing its own override.
 */
declare function Card_2({ children, variant, padding, interactive, onClick, disabled, className, ...rest }: CardProps): JSX.Element;

export declare const CardBody: typeof CardBody_2;

declare function CardBody_2({ className, ...rest }: CardBodyProps): JSX.Element;

export declare type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export declare const CardDescription: typeof CardDescription_2;

declare function CardDescription_2({ className, ...rest }: CardDescriptionProps): JSX.Element;

export declare type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export declare const CardFooter: typeof CardFooter_2;

/** Actions. Pushed to the bottom of a stretched card, trailing-aligned. */
declare function CardFooter_2({ className, ...rest }: CardFooterProps): JSX.Element;

export declare type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export declare const CardHeader: typeof CardHeader_2;

/** Title block. Sits inside the card's own padding, so it adds none of its own. */
declare function CardHeader_2({ children, accessory, className, ...rest }: CardHeaderProps): JSX.Element;

export declare interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Trailing element — a `Badge`, an overflow button, a chevron. */
    accessory?: ReactNode;
}

/** Padding rung. `none` lets a `List` or an image sit flush to the corners. */
export declare type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export declare interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    children?: ReactNode;
    /** @default 'elevated' */
    variant?: CardVariant;
    /** @default 'md' */
    padding?: CardPadding;
    /**
     * Makes the whole card activatable: press feedback, a hover lift, and a real
     * `<button>` element. Implied by `onClick`.
     */
    interactive?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export declare const CardTitle: typeof CardTitle_2;

declare function CardTitle_2({ as: Tag, className, ...rest }: CardTitleProps): JSX.Element;

export declare interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * Heading level. A card is rarely the top of the document outline, so the
     * default is h3 — but the level must follow the page, not the component.
     * @default 'h3'
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

/**
 * `elevated` floats above the page and is the only variant that casts a
 * shadow. `grouped` is the iOS Settings card — the same surface, separated
 * from the page by VALUE alone. `nested` is the darker fill a card takes when
 * it sits inside another card. `plain` is structure without a surface.
 *
 * There is no `outlined` variant: nothing in this system is separated by a
 * stroke, and a card is exactly where that temptation is strongest.
 */
export declare type CardVariant = 'elevated' | 'grouped' | 'nested' | 'plain';

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'children'> {
    /**
     * Label text beside the box. Give the Checkbox children *or* the surrounding
     * `<Field>` a label — both name the same input, so using both reads out as
     * one run-on sentence.
     */
    children?: ReactNode;
    /** Secondary line under the label. */
    description?: ReactNode;
    /** @default 'md' */
    size?: CheckboxSize;
    /**
     * Mixed state — some but not all of the things this checkbox covers are on.
     * Draws a dash instead of a tick and takes precedence over `checked`.
     */
    indeterminate?: boolean;
    /** Mark invalid explicitly. A surrounding `<Field error>` sets this for you. */
    invalid?: boolean;
    /** Convenience over `onChange` — receives the next state alone. */
    onCheckedChange?: (checked: boolean) => void;
}

/** No `xs`: the box would fall under the 44px touch target it has to fill. */
export declare type CheckboxSize = Exclude<MaySize, 'xs'>;

export declare const CircularProgress: typeof CircularProgress_2;

/**
 * The same progress as a ring.
 *
 * iOS reaches for a ring at least as often as a bar — a download inside a row,
 * a workout, an upload on a photo tile — because a ring reads at a glance in a
 * square that a bar cannot fill.
 *
 * Indeterminate mode deliberately runs TWO animations at different periods: the
 * ring rotates while the arc breathes between a quarter and a half turn. Their
 * cycles do not divide into each other, so the loop never visibly repeats — a
 * single-period spinner starts to look stuck after a few seconds.
 */
declare function CircularProgress_2({ value, max, indeterminate, tone, size, showValue, formatValue, children, className, ...rest }: CircularProgressProps): JSX.Element;

export declare interface CircularProgressProps extends ProgressCommonProps, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /**
     * Centre content — a glyph, a count, "3 of 8". Wins over `showValue`, since
     * the two would land on the same pixels.
     */
    children?: ReactNode;
    /** Accessible name. The ring carries no visible label of its own. */
    'aria-label'?: string;
}

/** Clamp to a range, applying rubber-band resistance outside it. */
declare function clampWithRubber(value: number, min: number, max: number): number;

export declare const Collapsible: typeof Collapsible_2;

/**
 * The disclosure primitive.
 *
 * The panel animates its HEIGHT via `grid-template-rows: 0fr → 1fr` rather
 * than an animated `max-height`, because a guessed max-height either clips
 * long content or spends the tail of the transition animating empty space —
 * and measuring `scrollHeight` costs a forced layout on every toggle. The
 * grid track resolves to the content's real height, for free, at any length.
 *
 * Closed content stays mounted (so the height has something to animate to) but
 * is made `visibility: hidden` once the collapse finishes, which is what takes
 * it out of the tab order and the accessibility tree — `overflow: hidden`
 * alone would leave focusable children reachable behind a zero-height box.
 */
declare function Collapsible_2({ open, defaultOpen, onOpenChange, trigger, children, chevron, disabled, className, triggerClassName, panelClassName, id, ...rest }: CollapsibleProps): JSX.Element;

export declare interface CollapsibleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onToggle'> {
    /** Controlled open state. Leave undefined to let the component own it. */
    open?: boolean;
    /** Uncontrolled initial state. @default false */
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** The always-visible row that toggles the panel. */
    trigger: ReactNode;
    /** The panel contents. */
    children?: ReactNode;
    /** Trailing disclosure chevron, rotating on the same curve as the panel. @default true */
    chevron?: boolean;
    disabled?: boolean;
    /** Escape hatches for components built on this primitive (see `Accordion`). */
    triggerClassName?: string;
    panelClassName?: string;
}

declare interface CommandGroup {
    id: string;
    heading?: string;
    items: CommandItem[];
}

declare interface CommandItem {
    id: string;
    /** The matched, highlighted line. A plain string, because the filter reads it. */
    label: string;
    /** Muted second line — what the command actually does, or where it lives. */
    hint?: ReactNode;
    icon?: ReactNode;
    /** Kbd tokens, e.g. `['cmd', 'shift', 'n']`. Rendered as real keycaps. */
    shortcut?: string[];
    /** Extra words the filter matches but never shows. "trash" finding "Delete". */
    keywords?: string[];
    disabled?: boolean;
    /** Tints the row destructive, the way a red menu item reads. */
    destructive?: boolean;
    onSelect?: () => void;
}

declare interface CommandPaletteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    groups: CommandGroup[];
    /** Fired before the item's own `onSelect`. */
    onSelect?: (item: CommandItem) => void;
    /** Controlled query. */
    query?: string;
    defaultQuery?: string;
    onQueryChange?: (query: string) => void;
    /** Ids listed under Recent while the query is empty, most recent first. */
    recentIds?: readonly string[];
    /** @default 5 */
    maxRecent?: number;
    /** @default 'Recent' */
    recentHeading?: string;
    /** @default 'Search commands' */
    placeholder?: string;
    /**
     * Register a global ⌘K / Ctrl-K that toggles the palette. Pass another letter
     * to move it, or `false` when the host app owns the shortcut.
     * @default 'k'
     */
    hotkey?: string | false;
    /** Shown when nothing matches. */
    emptyState?: ReactNode;
    /** Drop the keyboard-hint footer. */
    hideFooter?: boolean;
    /** Accessible name for the dialog. @default 'Commands' */
    label?: string;
    className?: string;
}

declare interface ContextMenuAction {
    type?: 'item';
    id: string;
    label: ReactNode;
    /** Leading glyph. A checked item shows its checkmark in this slot instead. */
    icon?: ReactNode;
    /** Kbd tokens, e.g. `['cmd', 'c']`. */
    shortcut?: string[];
    disabled?: boolean;
    /** Tints the row red — Delete, Remove, Move to Trash. */
    destructive?: boolean;
    /** Draws a leading checkmark and reports the item as a checkbox. */
    checked?: boolean;
    /** A nested menu. Present or absent, never empty — an empty submenu is a dead end. */
    items?: ContextMenuEntry[];
    onSelect?: () => void;
}

declare type ContextMenuEntry = ContextMenuAction | ContextMenuSeparator | ContextMenuLabel;

declare interface ContextMenuLabel {
    type: 'label';
    id?: string;
    label: ReactNode;
}

declare interface ContextMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    items: ContextMenuEntry[];
    children: ReactNode;
    /** Fired before the item's own `onSelect`. */
    onSelect?: (item: ContextMenuAction) => void;
    onOpenChange?: (open: boolean) => void;
    /** Let the browser's own menu through instead. */
    disabled?: boolean;
    /** Row height rung. @default 'md' */
    size?: 'sm' | 'md';
    /** Accessible name for the menu. @default 'Context menu' */
    label?: string;
}

declare interface ContextMenuSeparator {
    type: 'separator';
    id?: string;
}

/** Join truthy class names. The system's only styling helper. */
export declare function cx(...parts: Array<string | false | null | undefined>): string;

/**
 * Damp a raw pull distance. Linear until roughly a third of the threshold,
 * then increasingly resistant, so the start feels direct and the end feels
 * like it is being held back.
 */
declare function dampPull(distance: number, { threshold, max }?: PullConfig): number;

declare interface DataTableColumn<T> {
    /** Column identity, and the property read off the record when there is no `render`. */
    key: string;
    header: ReactNode;
    /** Overrides the alignment that `numeric` implies. */
    align?: 'start' | 'center' | 'end';
    /** End-aligns the column and switches on tabular figures, so digits stack. */
    numeric?: boolean;
    /** Starting width in px. Dragging the grip writes over it. */
    width?: number;
    /** Floor for the resize drag, in px. @default 72 */
    minWidth?: number;
    render?: (row: T, index: number) => ReactNode;
    /**
     * The value sorting and filtering see. Defaults to the raw property, which is
     * read only when it is a primitive — a Date, an array or a nested object is
     * exactly the case this exists for.
     */
    value?: (row: T) => DataTableValue;
    /** @default true */
    sortable?: boolean;
    /** `text` matches a substring; `select` offers the column's own distinct values. */
    filter?: 'text' | 'select';
    /** @default true when the table is resizable */
    resizable?: boolean;
}

/** Filter text per column key. An empty string means "not filtered". */
declare type DataTableFilters = Record<string, string>;

declare interface DataTableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    columns: DataTableColumn<T>[];
    data: T[];
    /** Identity of a record. Stable keys are what let rows move rather than remount. */
    rowKey: DataTableRowKey<T>;
    /** Row height rung. @default 'md' */
    size?: Exclude<MaySize, 'xs'>;
    /** Section title above the card, in the iOS grouped style. Labels the table. */
    caption?: ReactNode;
    /** Controlled multi-key sort. */
    sort?: DataTableSort[];
    defaultSort?: DataTableSort[];
    onSortChange?: (sort: DataTableSort[]) => void;
    /** Controlled per-column filters. */
    filters?: DataTableFilters;
    defaultFilters?: DataTableFilters;
    onFiltersChange?: (filters: DataTableFilters) => void;
    /** Adds the checkbox column and the header select-all. */
    selectable?: boolean;
    selectedKeys?: readonly string[];
    defaultSelectedKeys?: readonly string[];
    onSelectionChange?: (keys: string[]) => void;
    onRowClick?: (row: T, index: number) => void;
    /** Lets every column be widened or narrowed by dragging the hairline beside it. */
    resizableColumns?: boolean;
    /** Pins the header row. Needs `maxHeight` to have a scrollport to pin to. @default true */
    stickyHeader?: boolean;
    /** Pins the checkbox column and the first data column against horizontal scroll. */
    stickyColumn?: boolean;
    /** Rows per page. Omit for one continuous list. */
    pageSize?: number;
    /** Window the rows instead of paging them. Ignored when `pageSize` is set. */
    virtualized?: boolean;
    /** Row height in px for the virtualiser. Measured from the first row when omitted. */
    rowHeight?: number;
    /** Bounds the scrollport. A number is read as px. */
    maxHeight?: number | string;
    /** Alternating row wash. */
    zebra?: boolean;
    /** Shown when there are no records at all. */
    emptyState?: ReactNode;
    /** Shown when filters have excluded every record. Falls back to `emptyState`. */
    noResultsState?: ReactNode;
    /** @default 'Select all rows' */
    selectAllLabel?: string;
}

/** Either a property name on the record, or a function deriving the key. */
declare type DataTableRowKey<T> = (keyof T & string) | ((row: T, index: number) => string | number);

/** One key of a multi-key sort. Earlier entries win; later ones break ties. */
declare interface DataTableSort {
    key: string;
    direction: DataTableSortDirection;
}

declare type DataTableSortDirection = 'asc' | 'desc';

/** What a column contributes to sorting and filtering. */
declare type DataTableValue = string | number | boolean | null | undefined;

declare type Defaults<Props, Keys extends keyof Props> = Partial<Pick<Props, Keys>>;

export declare const DescriptionItem: typeof DescriptionItem_2;

/** One key/value pair. */
declare function DescriptionItem_2({ label, value, children, className, ...rest }: DescriptionItemProps): JSX.Element;

export declare interface DescriptionItemProps extends HTMLAttributes<HTMLDivElement> {
    label: ReactNode;
    /** The value. `children` works too, for values built from several elements. */
    value?: ReactNode;
    children?: ReactNode;
}

export declare const Descriptions: typeof Descriptions_2;

/**
 * Key/value pairs in the iOS grouped style.
 *
 * Renders a real `<dl>` of `<dt>`/`<dd>` pairs rather than a table or a stack
 * of divs, so a screen reader announces "Model, iPhone 15 Pro" as one term and
 * its definition instead of two unrelated strings.
 */
declare function Descriptions_2({ children, header, footer, variant, layout, columns, className, style, ...rest }: DescriptionsProps): JSX.Element;

export declare interface DescriptionsProps extends HTMLAttributes<HTMLDListElement> {
    children?: ReactNode;
    /** Section header above the card, in the iOS grouped style. */
    header?: ReactNode;
    /** Muted explanatory text below the card. */
    footer?: ReactNode;
    /** `inset` is the grouped card; `plain` is full-bleed. @default 'inset' */
    variant?: 'inset' | 'plain';
    /**
     * `inline` is the Settings row — label left, value right. `stacked` puts the
     * label above the value, the way Contacts shows a phone number.
     * @default 'inline'
     */
    layout?: 'inline' | 'stacked';
    /**
     * Columns to split the pairs across ON DESKTOP ONLY. A phone is always one
     * column: two columns of key/value at 390px is unreadable, and the pairs
     * would be narrower than their own values.
     * @default 1
     */
    columns?: number;
}

/**
 * Start dismissing a toast. Two-phase on purpose: the record is marked first so
 * the mounted toast can play its exit, and removed once that has run.
 */
export declare function dismiss(id: string): void;

/** Dismiss everything on screen — a route change, a sign-out. */
export declare function dismissAll(): void;

/**
 * Attach a pointer drag to an element. Returns a disposer.
 *
 * Uses pointer capture so a fast drag that leaves the element still reports
 * its own release, and locks to one axis once the intent is clear so a
 * vertical sheet drag cannot fight a horizontal carousel.
 */
declare function draggable(el: HTMLElement, options: DragOptions): () => void;

declare interface DragOptions {
    axis?: 'x' | 'y' | 'both';
    /** Movement below this is treated as a tap, so a scroll never steals a click. */
    threshold?: number;
    onStart?: () => void;
    onMove: (state: {
        dx: number;
        dy: number;
        event: PointerEvent;
    }) => void;
    onEnd: (state: {
        dx: number;
        dy: number;
        vx: number;
        vy: number;
    }) => void;
}

declare interface DragSample {
    x: number;
    y: number;
    t: number;
}

/**
 * Durations, in ms. Named for intent rather than length.
 *
 * `settle` is 340 because the reference implementation measured it: 200ms is
 * too abrupt to read as physical, and past roughly 500ms the motion starts to
 * feel heavy rather than lively.
 */
declare const duration: {
    readonly instant: 80;
    readonly fast: 150;
    readonly settle: 340;
    readonly sheetIn: 500;
    readonly sheetOut: 300;
    readonly follow: 90;
};

/** `var()` reference to a named easing curve. */
declare const ease: (name: EaseName) => string;

declare type EaseName = 'back' | 'elastic' | 'bounce' | 'expo' | 'sheet' | 'standard' | 'out';

export declare const EmptyState: typeof EmptyState_2;

/**
 * The state a screen is in before it has anything to show.
 *
 * Everything here is muted on purpose: an empty state is not an error, and
 * colouring it like one makes an ordinary first run feel like a failure. The
 * only saturated element is the action, if there is one.
 *
 * The three parts arrive staggered — glyph, then text, then action — which
 * reads as the screen composing itself rather than as one block appearing.
 */
declare function EmptyState_2({ glyph, title, description, action, size, as: Title, className, ...rest }: EmptyStateProps): JSX.Element;

export declare interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Large muted glyph — an SF-Symbol-style SVG, or any icon node. */
    glyph?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    /** A single `Button`, or a pair of them. */
    action?: ReactNode;
    /** @default 'md' */
    size?: Exclude<MaySize, 'xs'>;
    /**
     * Heading level for the title. A card is rarely the top of the document
     * outline, so the default is h3 — but the level must follow the page.
     * @default 'h3'
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export declare const Fab: ForwardRefExoticComponent<FabProps & RefAttributes<HTMLButtonElement>>;

export declare interface FabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    /**
     * Render this control's presentation onto its child instead of a `<button>`,
     * so a router `<Link>` can wear it without losing the anchor. The child's own
     * props win; `className` is merged. `type`/`disabled` are not forwarded —
     * neither is valid on an `<a>` — and a disabled child gets `aria-disabled`.
     * @default false
     */
    asChild?: boolean;
    /**
     * The glyph, and it stays a ReactNode — a consumer's slot, never a fixed
     * icon. Either shape is sized to the control by CSS: a bare `<svg>` with no
     * width attribute, or an Ionicon from `react-icons/io5` at its default size
     * (`width="1em"`). Both land on 1.35em. Pass `size` to opt out.
     */
    icon: ReactNode;
    /** An optional label, which extends the circle into a pill. */
    children?: ReactNode;
    /**
     * Required, not optional. A FAB is icon-first, and even the extended form
     * carries a label short enough ("New", "Compose") to be worth spelling out
     * for a screen reader.
     */
    'aria-label': string;
    /** @default 'tint' */
    tone?: MayTone;
    /** @default 'md' */
    size?: Exclude<MaySize, 'xs'>;
    /** Pin to a corner of the viewport, clear of the home indicator. */
    fixed?: boolean;
    /** Which corner, when `fixed`. @default 'end' */
    position?: 'start' | 'center' | 'end';
    loading?: boolean;
}

export declare const Field: typeof Field_2;

/**
 * Label, description, error and the ARIA wiring that ties them to a control.
 *
 * This is the form primitive everything else leans on. Passing `error` is the
 * only way to mark a control invalid: the Field flips `aria-invalid`, swaps the
 * description for the message and points `aria-describedby` at it, so the
 * visual state and the announced state can never drift apart.
 *
 * The error *replaces* the description rather than stacking under it. Two
 * paragraphs of small print under a red field is where forms start to look
 * like a bug report; iOS shows one line at a time.
 *
 * `Input`, `Textarea` and `SearchField` adopt the generated id through context.
 * A bare `<input>` dropped in here does not, so give it `id` from `useFieldContext()`
 * or the label will point at nothing.
 */
declare function Field_2({ children, label, description, error, required, disabled, id, className, ...rest }: FieldProps): JSX.Element;

/**
 * What a control inherits from the `<Field>` wrapped around it.
 *
 * The whole point of this object is that a consumer never types an `id`, an
 * `aria-describedby` or an `aria-invalid` by hand — three attributes that are
 * individually easy and collectively never all correct in real codebases.
 */
export declare interface FieldContextValue {
    /** The id the label points at. Controls must adopt it verbatim. */
    id: string;
    /** id of the one visible message, for `aria-describedby`. */
    describedBy?: string;
    /** True while `error` is set. Controls never decide this for themselves. */
    invalid: boolean;
    required: boolean;
    disabled: boolean;
}

/** The subset of a control's props that a Field can supply for it. */
export declare interface FieldControlOwnProps {
    id?: string;
    invalid?: boolean;
    required?: boolean;
    disabled?: boolean;
    'aria-describedby'?: string;
}

export declare interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
    /** Exactly one form control. */
    children: ReactNode;
    /** Visible label text. */
    label?: ReactNode;
    /** Helper text under the control. Replaced by `error` while one is showing. */
    description?: ReactNode;
    /** Error message. Its presence is what marks the control invalid. */
    error?: ReactNode;
    /** Mark the field required, show the indicator, and set `required` on the control. */
    required?: boolean;
    /** Mute the label and disable the control inside. */
    disabled?: boolean;
    /** Override the generated control id — useful when a form library owns ids. */
    id?: string;
}

/**
 * FLIP — First, Last, Invert, Play.
 *
 * Animate a layout change that the browser has already committed, by measuring
 * before and after, applying the inverse as a transform, then releasing it.
 * This is what a layout-animation library sells; it is about thirty lines.
 */
declare interface FlipOptions {
    duration?: number;
    /** A curve token such as `var(--may-spring-bouncy)`. */
    easing?: string;
    onFinish?: () => void;
}

declare type FlipSnapshot = Map<Element, DOMRect>;

declare interface FloatingBubbleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'children'> {
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

declare const FOLLOW_MS = 90;

/**
 * Measure where the thumb should sit for a given segment.
 *
 * `x`/`width` are named for the inline case but mean "along the axis": on the
 * block axis they carry the top offset and the height. Naming them once, rather
 * than a second `{ y, height }` shape, is what lets one `applyThumb` drive both
 * — the vertical mirror used to live forked inside Tabs.
 */
declare function geometryFor(track: HTMLElement, segment: HTMLElement, axis?: ThumbAxis, 
/** The track's rect when the caller has already measured it. Reading it a
 *  second time for the same placement is a wasted layout query. */
trackRect?: DOMRect): ThumbGeometry;

export declare const Grid: ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>>;

export declare interface GridProps extends HTMLAttributes<HTMLDivElement> {
    /** Fixed number of equal columns. @default 1 */
    columns?: number;
    /**
     * Narrowest a column may get before the grid drops one. Set this instead of
     * `columns` for content that should reflow — an app-icon wall, a photo grid
     * — and the column count follows the container with no media queries and no
     * resize listener. A number is read as px.
     */
    minColumnWidth?: number | string;
    /** Gap as a step on the 4px scale. @default 0 */
    gap?: MaySpaceStep;
}

export declare const Heading: ForwardRefExoticComponent<HeadingProps & RefAttributes<HTMLHeadingElement>>;

export declare type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export declare interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
    children?: ReactNode;
    /** Heading rank. Pick it for document structure, never for size. @default 2 */
    level?: HeadingLevel;
    /** Visual size, independent of `level`. Defaults to the rank's own style. */
    size?: MayTextStyle;
    /** @default 'default' */
    tone?: TextTone;
    /** Overrides the weight the style carries; size and tracking stay. */
    weight?: TextWeight;
    align?: TextAlign;
    /** Truncate to this many lines with an ellipsis. */
    clamp?: number;
}

/**
 * Fallback gradients. Yellow and red are deliberately absent: white initials
 * on yellow fail contrast, and a red avatar reads as an error state rather
 * than as a person.
 */
declare const HUES: readonly ["blue", "indigo", "purple", "pink", "teal", "green", "orange", "gray"];

export declare const IconButton: ForwardRefExoticComponent<IconButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    /**
     * Render this control's presentation onto its child instead of a `<button>`,
     * so a router `<Link>` can wear it without losing the anchor. The child's own
     * props win; `className` is merged. `type`/`disabled` are not forwarded —
     * neither is valid on an `<a>` — and a disabled child gets `aria-disabled`.
     * @default false
     */
    asChild?: boolean;
    /**
     * The glyph, and it stays a ReactNode — a consumer's slot, never a fixed
     * icon. Either shape is sized to the control by CSS: a bare `<svg>` with no
     * width attribute, or an Ionicon from `react-icons/io5` at its default size
     * (`width="1em"`). Both land on 1.25em. Pass `size` to opt out.
     */
    children?: ReactNode;
    /**
     * Required, not optional. An icon-only control carries no text node, so
     * without this it is anonymous to VoiceOver — the most common accessibility
     * hole in a ported icon button. A type error costs less than an audit.
     */
    'aria-label': string;
    /**
     * Defaults to `plain` rather than Button's `filled`: an icon button is nearly
     * always chrome — a nav bar, a toolbar, a card corner — where a filled square
     * would out-shout the content it sits beside.
     * @default 'plain'
     */
    variant?: ButtonVariant;
    /** @default 'tint' */
    tone?: MayTone;
    /** @default 'md' */
    size?: MaySize;
    /** Circular instead of rounded-square, the way iOS draws close and more. */
    round?: boolean;
    loading?: boolean;
}

export declare const IconTile: typeof IconTile_2;

/**
 * The iOS app-icon tile: a gradient squircle with a white glyph, used as the
 * leading element of a List row and as the icon in a settings-style grid.
 *
 * It casts no shadow, on purpose. An app icon sits *in* the surface rather
 * than floating above it; a drop shadow under one is the single clearest tell
 * that a UI was drawn on the web. The gradient alone gives it its dimension.
 */
declare function IconTile_2({ children, gradient, size, label, className, 'aria-label': ariaLabel, ...rest }: IconTileProps): JSX.Element;

/** The eleven app-icon gradients defined in the token layer. */
export declare type IconTileGradient = 'blue' | 'green' | 'red' | 'orange' | 'yellow' | 'purple' | 'pink' | 'teal' | 'indigo' | 'gray' | 'spectrum';

export declare interface IconTileProps extends HTMLAttributes<HTMLSpanElement> {
    /** The glyph. An `<svg>` scales with the tile automatically. */
    children?: ReactNode;
    /** @default 'blue' */
    gradient?: IconTileGradient;
    /** @default 'sm' */
    size?: IconTileSize;
    /**
     * Set only when the tile carries meaning on its own. Beside a "Wi-Fi" label
     * it does not — it is decoration, and a screen reader announcing it twice is
     * worse than silence — so the default is `aria-hidden`.
     */
    label?: string;
}

/**
 * `sm` is 29pt — the size iOS Settings draws a row icon at, and the size the
 * List hairline indent is measured against. `lg` is the 60pt home-screen icon.
 */
export declare type IconTileSize = 'sm' | 'md' | 'lg';

/**
 * Two letters, the way Contacts derives them: first and last word. A mononym
 * ("Prince", "Safari") has no last word to borrow from, so it gives up its
 * first two characters instead of leaving a lonely single letter.
 */
export declare function initialsFrom(name: string): string;

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    /** @default 'md' */
    size?: InputSize;
    /** Mark invalid explicitly. A surrounding `<Field error>` sets this for you. */
    invalid?: boolean;
    /** Content pinned inside the leading edge — an icon, a currency symbol, a unit. */
    prefix?: ReactNode;
    /** Content pinned inside the trailing edge. */
    suffix?: ReactNode;
    fullWidth?: boolean;
    /** Class name for the fill; `className` lands on the `<input>` itself. */
    wrapperClassName?: string;
}

/** No `xs`: a 32px text field is under the touch target and unreadable on a phone. */
export declare type InputSize = Exclude<MaySize, 'xs'>;

export declare const Kbd: ForwardRefExoticComponent<KbdProps & RefAttributes<HTMLElement>>;

export declare interface KbdProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    /** @default 'sm' */
    size?: MaySize;
    /** Draw the cap as held down. */
    pressed?: boolean;
    /**
     * Light the cap while the real key is held on a physical keyboard. Turns a
     * shortcut list into something you can check yourself against.
     */
    live?: boolean;
}

export declare const Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>;

export declare interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'color'> {
    children?: ReactNode;
    /** Id of the control this labels. */
    htmlFor?: string;
    /** Adds the required marker, plus the word itself for assistive tech. */
    required?: boolean;
    /** Dims to match a disabled control, and stops clicks reaching it. */
    disabled?: boolean;
    /** @default 'subheadline' */
    variant?: MayTextStyle;
    /** @default 'default' */
    tone?: TextTone;
    /** @default 'medium' */
    weight?: TextWeight;
    /**
     * The iOS grouped-form eyebrow: uppercase, tracked out, secondary — what
     * Settings uses above a section rather than beside a field.
     */
    uppercase?: boolean;
}

export declare const List: typeof List_2;

/**
 * A grouped inset list.
 *
 * Rows share one rounded card with hairlines between them, rather than each
 * being its own floating card — which is what makes eight rows read as one
 * thing instead of eight. The hairline is inset from the leading edge so it
 * starts under the label, exactly as iOS draws it.
 */
declare function List_2({ children, header, footer, variant, className, ...rest }: ListProps): JSX.Element;

export declare interface ListProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    /** Section header, rendered above the card in the iOS grouped style. */
    header?: ReactNode;
    /** Muted explanatory text below the card. */
    footer?: ReactNode;
    /**
     * `inset` is the iOS Settings look — a rounded elevated card. `plain` is
     * full-bleed with no card, for edge-to-edge lists.
     * @default 'inset'
     */
    variant?: 'inset' | 'plain';
}

export declare const ListRow: typeof ListRow_2;

/**
 * One row.
 *
 * When `onClick` is set this renders a real `<button>`, not a div with a click
 * handler — a div is invisible to keyboard and switch-access users, who have
 * no way to focus or activate it.
 */
declare function ListRow_2({ title, subtitle, leading, detail, accessory, onClick, chevron, align, destructive, disabled, className, ...rest }: ListRowProps): JSX.Element;

export declare interface ListRowProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onClick'> {
    /** Primary line. */
    title: ReactNode;
    /** Secondary line under the title. */
    subtitle?: ReactNode;
    /** Leading element — typically an `IconTile` or an `Avatar`. */
    leading?: ReactNode;
    /**
     * Where the leading mark and the trailing value sit against a row whose text
     * runs to several lines. `center` is the iOS default and right for a row of
     * one or two lines; `top` is for a row carrying a paragraph, where a centred
     * mark floats halfway down and stops reading as the subject's mark.
     * @default 'center'
     */
    align?: 'center' | 'top';
    /** Trailing value, shown muted before the chevron. */
    detail?: ReactNode;
    /** Trailing control such as a `Switch`. Suppresses the chevron. */
    accessory?: ReactNode;
    /** Makes the row activatable. Renders a real `<button>`. */
    onClick?: () => void;
    /** Show the disclosure chevron. Defaults to true when `onClick` is set. */
    chevron?: boolean;
    /** Tint the title, for destructive rows like "Delete Account". */
    destructive?: boolean;
    disabled?: boolean;
}

export declare interface MayComponentDefaults {
    Accordion?: Defaults<AccordionProps, 'type' | 'collapsible' | 'variant'>;
    Alert?: Defaults<AlertProps, 'tone'>;
    Avatar?: Defaults<AvatarProps, 'size' | 'shape' | 'hue'>;
    AvatarGroup?: Defaults<AvatarGroupProps, 'max' | 'size'>;
    Badge?: Defaults<BadgeProps, 'variant' | 'tone' | 'size' | 'dot'>;
    Box?: Defaults<BoxProps, 'padding' | 'paddingX' | 'paddingY' | 'surface' | 'radius' | 'shadow' | 'fullWidth'>;
    Breadcrumb?: Defaults<BreadcrumbProps, 'maxItems' | 'itemsBeforeCollapse' | 'itemsAfterCollapse' | 'size'>;
    Button?: Defaults<ButtonProps, 'variant' | 'tone' | 'size' | 'pill' | 'fullWidth'>;
    ButtonGroup?: Defaults<ButtonGroupProps, 'attached' | 'orientation' | 'fullWidth'>;
    Card?: Defaults<CardProps, 'variant' | 'padding' | 'interactive'>;
    Checkbox?: Defaults<CheckboxProps, 'size'>;
    Collapsible?: Defaults<CollapsibleProps, 'chevron'>;
    Descriptions?: Defaults<DescriptionsProps, 'variant' | 'layout' | 'columns'>;
    EmptyState?: Defaults<EmptyStateProps, 'size'>;
    Fab?: Defaults<FabProps, 'tone' | 'size' | 'fixed' | 'position'>;
    Grid?: Defaults<GridProps, 'columns' | 'minColumnWidth' | 'gap'>;
    Heading?: Defaults<HeadingProps, 'size' | 'tone' | 'weight' | 'align' | 'clamp'>;
    IconButton?: Defaults<IconButtonProps, 'variant' | 'tone' | 'size' | 'round'>;
    IconTile?: Defaults<IconTileProps, 'gradient' | 'size'>;
    Input?: Defaults<InputProps, 'size' | 'fullWidth'>;
    Kbd?: Defaults<KbdProps, 'size'>;
    Label?: Defaults<LabelProps, 'variant' | 'tone' | 'weight' | 'uppercase'>;
    List?: Defaults<ListProps, 'variant'>;
    Menu?: Defaults<MenuProps, 'placement' | 'offset'>;
    Modal?: Defaults<ModalProps, 'footerLayout' | 'size' | 'closeButton' | 'closeOnScrimClick' | 'closeOnEscape'>;
    NavigationBar?: Defaults<NavigationBarProps, 'sticky' | 'safeArea'>;
    NoticeBar?: Defaults<NoticeBarProps, 'tone' | 'marquee' | 'speed'>;
    Pagination?: Defaults<PaginationProps, 'siblingCount' | 'size' | 'compact'>;
    Popover?: Defaults<PopoverProps, 'placement' | 'offset' | 'arrow' | 'autoFocus' | 'padded'>;
    Progress?: Defaults<ProgressProps, 'tone' | 'size'>;
    CircularProgress?: Defaults<CircularProgressProps, 'tone' | 'size'>;
    RadioGroup?: Defaults<RadioGroupProps, 'orientation' | 'size'>;
    Radio?: Defaults<RadioProps, 'size'>;
    SafeArea?: Defaults<SafeAreaProps, 'edges'>;
    ScrollArea?: Defaults<ScrollAreaProps, 'maxHeight' | 'axis'>;
    SearchField?: Defaults<SearchFieldProps, 'size' | 'cancelable' | 'fullWidth'>;
    SegmentedControl?: Defaults<SegmentedControlProps, 'size' | 'fullWidth'>;
    Select?: Defaults<SelectProps, 'size' | 'fullWidth'>;
    Separator?: Defaults<SeparatorProps, 'orientation'>;
    Sheet?: Defaults<SheetProps, 'footerLayout' | 'size' | 'grabber' | 'side' | 'dismissible' | 'closeOnScrimClick'>;
    Skeleton?: Defaults<SkeletonProps, 'variant' | 'lines' | 'width' | 'height' | 'radius'>;
    Slider?: Defaults<SliderProps, 'showValue' | 'tone'>;
    Spinner?: Defaults<SpinnerProps, 'tone' | 'size' | 'spokes'>;
    Stack?: Defaults<StackProps, 'direction' | 'gap' | 'align' | 'justify' | 'wrap' | 'fullWidth'>;
    Statistic?: Defaults<StatisticProps, 'direction' | 'invertDelta' | 'size' | 'variant'>;
    Stepper?: Defaults<StepperProps, 'size'>;
    Steps?: Defaults<StepsProps, 'orientation' | 'clickable' | 'size'>;
    Switch?: Defaults<SwitchProps, 'size' | 'labelPosition'>;
    Table?: Defaults<TableProps<unknown>, 'size' | 'stickyHeader' | 'zebra' | 'maxHeight'>;
    TabList?: Defaults<TabListProps, 'fullWidth'>;
    Tabs?: Defaults<TabsProps, 'variant' | 'orientation' | 'size'>;
    Tag?: Defaults<TagProps, 'tone' | 'size'>;
    Text?: Defaults<TextProps, 'variant' | 'tone' | 'weight' | 'align' | 'clamp' | 'mono'>;
    Textarea?: Defaults<TextareaProps, 'size' | 'fullWidth' | 'rows' | 'resize' | 'autoGrow'>;
    Toast?: Defaults<ToastProps, 'tone' | 'position' | 'dismissible' | 'closeButton'>;
    Toolbar?: Defaults<ToolbarProps, 'placement' | 'sticky' | 'align' | 'separator' | 'variant' | 'safeArea'>;
    Tooltip?: Defaults<TooltipProps, 'placement' | 'offset' | 'delay'>;
    CommandPalette?: Defaults<CommandPaletteProps, 'maxRecent' | 'hotkey' | 'hideFooter'>;
    ContextMenu?: Defaults<ContextMenuProps, 'size'>;
    DataTable?: Defaults<DataTableProps<unknown>, 'size' | 'selectable' | 'resizableColumns' | 'stickyHeader' | 'stickyColumn' | 'pageSize' | 'virtualized' | 'rowHeight' | 'maxHeight' | 'zebra'>;
    SidebarSection?: Defaults<SidebarSectionProps, 'collapsible'>;
    SplitPane?: Defaults<SplitPaneProps, 'orientation' | 'size' | 'min' | 'max' | 'collapsible'>;
    CapsuleTabs?: Defaults<CapsuleTabsProps, 'variant' | 'size'>;
    FloatingBubble?: Defaults<FloatingBubbleProps, 'tone' | 'size'>;
    NavBar?: Defaults<NavBarProps, 'separator' | 'position' | 'variant' | 'hideOnScroll'>;
    Popup?: Defaults<PopupProps, 'position' | 'height' | 'closeOnMaskClick' | 'grabber' | 'safeArea' | 'padded'>;
    SearchBar?: Defaults<SearchBarProps, 'size' | 'showCancel' | 'align'>;
    Selector?: Defaults<SelectorProps, 'variant' | 'size' | 'columns'>;
    SwipeAction?: Defaults<SwipeActionProps, 'fullSwipe'>;
    TabBar?: Defaults<TabBarProps, 'fixed' | 'labels' | 'tone'>;
}

export declare interface MayConfigValue {
    readonly theme: Readonly<{
        mode: MayThemeMode;
        resolvedMode: Exclude<MayThemeMode, 'system'>;
    }>;
    readonly tokens: Readonly<MayTokens>;
    readonly components: Readonly<MayComponentDefaults>;
    readonly platform: MayPlatform;
    readonly linkComponent: ElementType;
    readonly host: false | Readonly<MayHostConfig>;
    readonly styleNonce?: string;
}

/**
 * How an overlay's footer lays its actions out. See `Sheet`/`Modal`.
 */
export declare type MayFooterLayout = 'end' | 'stack' | 'fill';

export declare interface MayHostConfig {
    position?: ToastPosition;
    max?: number;
    duration?: number;
    closeLabel?: string;
    label?: string;
}

export declare type MayPlatform = 'auto' | 'phone' | 'desktop';

/** Optional configuration boundary for May UI. */
export declare function MayProvider({ children, theme, components, platform, linkComponent, host, styleNonce, className, inline, }: MayProviderProps): JSX.Element;

export declare interface MayProviderProps {
    children?: ReactNode;
    theme?: MayThemeConfig;
    components?: MayComponentDefaults;
    platform?: MayPlatform;
    linkComponent?: ElementType;
    host?: false | MayHostConfig;
    styleNonce?: string;
    className?: string;
    /** Fill the parent rather than stretching to the viewport. */
    inline?: boolean;
}

/** Control size. Every rung is a proportion of `--may-control-h`. */
export declare type MaySize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * A step on the 4px spacing scale in tokens.css. The gaps in the sequence are
 * deliberate — the scale stops being linear once the values get large enough
 * that a 4px difference is invisible.
 */
export declare type MaySpaceStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

/** Apple's named text styles. */
export declare type MayTextStyle = 'large-title' | 'title-1' | 'title-2' | 'title-3' | 'headline' | 'body' | 'callout' | 'subheadline' | 'footnote' | 'caption-1' | 'caption-2';

export declare interface MayThemeConfig {
    mode?: MayThemeMode;
    tokens?: Partial<MayTokens>;
    light?: Partial<MayTokens>;
    dark?: Partial<MayTokens>;
}

export declare type MayThemeMode = 'light' | 'dark' | 'system';

export declare interface MayTokens {
    readonly alertGap: MayTokenValue;
    readonly bgBase: MayTokenValue;
    readonly bgElevated: MayTokenValue;
    readonly bgGrouped: MayTokenValue;
    readonly bgNested: MayTokenValue;
    readonly blue: MayTokenValue;
    readonly breakpointDesktop: MayTokenValue;
    readonly brown: MayTokenValue;
    readonly colorBg: MayTokenValue;
    readonly colorDanger: MayTokenValue;
    readonly colorDestructive: MayTokenValue;
    readonly colorFill: MayTokenValue;
    readonly colorFillQuaternary: MayTokenValue;
    readonly colorFillSecondary: MayTokenValue;
    readonly colorFillTertiary: MayTokenValue;
    readonly colorHighlight: MayTokenValue;
    readonly colorHighlightStrong: MayTokenValue;
    readonly colorInfo: MayTokenValue;
    readonly colorOnDestructive: MayTokenValue;
    readonly colorOnPrimary: MayTokenValue;
    readonly colorPrimary: MayTokenValue;
    readonly colorRing: MayTokenValue;
    readonly colorScrim: MayTokenValue;
    readonly colorSeparator: MayTokenValue;
    readonly colorSeparatorOpaque: MayTokenValue;
    readonly colorSuccess: MayTokenValue;
    readonly colorSurface: MayTokenValue;
    readonly colorSurfaceNested: MayTokenValue;
    readonly colorText: MayTokenValue;
    readonly colorTextQuaternary: MayTokenValue;
    readonly colorTextSecondary: MayTokenValue;
    readonly colorTextTertiary: MayTokenValue;
    readonly colorTint: MayTokenValue;
    readonly colorWarning: MayTokenValue;
    readonly controlH: MayTokenValue;
    readonly controlHLg: MayTokenValue;
    readonly controlHMd: MayTokenValue;
    readonly controlHSm: MayTokenValue;
    readonly controlHXs: MayTokenValue;
    readonly cyan: MayTokenValue;
    readonly durationColor: MayTokenValue;
    readonly durationFast: MayTokenValue;
    readonly durationFollow: MayTokenValue;
    readonly durationInstant: MayTokenValue;
    readonly durationSettle: MayTokenValue;
    readonly durationSheetIn: MayTokenValue;
    readonly durationSheetOut: MayTokenValue;
    readonly easeBack: MayTokenValue;
    readonly easeBounce: MayTokenValue;
    readonly easeElastic: MayTokenValue;
    readonly easeExpo: MayTokenValue;
    readonly easeOut: MayTokenValue;
    readonly easeSheet: MayTokenValue;
    readonly easeStandard: MayTokenValue;
    readonly fillPrimary: MayTokenValue;
    readonly fillQuaternary: MayTokenValue;
    readonly fillSecondary: MayTokenValue;
    readonly fillTertiary: MayTokenValue;
    readonly fontMono: MayTokenValue;
    readonly fontRounded: MayTokenValue;
    readonly fontSans: MayTokenValue;
    readonly gradBlue: MayTokenValue;
    readonly gradGray: MayTokenValue;
    readonly gradGreen: MayTokenValue;
    readonly gradIndigo: MayTokenValue;
    readonly gradOrange: MayTokenValue;
    readonly gradPink: MayTokenValue;
    readonly gradPurple: MayTokenValue;
    readonly gradRed: MayTokenValue;
    readonly gradSpectrum: MayTokenValue;
    readonly gradTeal: MayTokenValue;
    readonly gradYellow: MayTokenValue;
    readonly gray: MayTokenValue;
    readonly gray2: MayTokenValue;
    readonly gray3: MayTokenValue;
    readonly gray4: MayTokenValue;
    readonly gray5: MayTokenValue;
    readonly gray6: MayTokenValue;
    readonly green: MayTokenValue;
    readonly hairline: MayTokenValue;
    readonly indigo: MayTokenValue;
    readonly insetBottom: MayTokenValue;
    readonly insetLeft: MayTokenValue;
    readonly insetRight: MayTokenValue;
    readonly insetTop: MayTokenValue;
    readonly keyboardInset: MayTokenValue;
    readonly label: MayTokenValue;
    readonly labelQuaternary: MayTokenValue;
    readonly labelSecondary: MayTokenValue;
    readonly labelTertiary: MayTokenValue;
    readonly listLeadingW: MayTokenValue;
    readonly mint: MayTokenValue;
    readonly navBarSpace: MayTokenValue;
    readonly navbarH: MayTokenValue;
    readonly onColor: MayTokenValue;
    readonly orange: MayTokenValue;
    readonly pink: MayTokenValue;
    readonly purple: MayTokenValue;
    readonly radiusCard: MayTokenValue;
    readonly radiusFull: MayTokenValue;
    readonly radiusLg: MayTokenValue;
    readonly radiusMd: MayTokenValue;
    readonly radiusSheet: MayTokenValue;
    readonly radiusSm: MayTokenValue;
    readonly radiusSquircle: MayTokenValue;
    readonly radiusXs: MayTokenValue;
    readonly red: MayTokenValue;
    readonly scrim: MayTokenValue;
    readonly scrollbarSize: MayTokenValue;
    readonly scrollbarThumb: MayTokenValue;
    readonly scrollbarThumbHover: MayTokenValue;
    readonly separator: MayTokenValue;
    readonly separatorOpaque: MayTokenValue;
    readonly shadow: MayTokenValue;
    readonly shadow2xl: MayTokenValue;
    readonly shadow2xs: MayTokenValue;
    readonly shadowA1: MayTokenValue;
    readonly shadowA2: MayTokenValue;
    readonly shadowA3: MayTokenValue;
    readonly shadowA4: MayTokenValue;
    readonly shadowA5: MayTokenValue;
    readonly shadowA6: MayTokenValue;
    readonly shadowA7: MayTokenValue;
    readonly shadowColor: MayTokenValue;
    readonly shadowLg: MayTokenValue;
    readonly shadowMd: MayTokenValue;
    readonly shadowSm: MayTokenValue;
    readonly shadowXl: MayTokenValue;
    readonly shadowXs: MayTokenValue;
    readonly space0: MayTokenValue;
    readonly space1: MayTokenValue;
    readonly space10: MayTokenValue;
    readonly space12: MayTokenValue;
    readonly space16: MayTokenValue;
    readonly space2: MayTokenValue;
    readonly space20: MayTokenValue;
    readonly space24: MayTokenValue;
    readonly space3: MayTokenValue;
    readonly space4: MayTokenValue;
    readonly space5: MayTokenValue;
    readonly space6: MayTokenValue;
    readonly space8: MayTokenValue;
    readonly springBouncy: MayTokenValue;
    readonly springBouncyDuration: MayTokenValue;
    readonly springPlayful: MayTokenValue;
    readonly springPlayfulDuration: MayTokenValue;
    readonly springSmooth: MayTokenValue;
    readonly springSmoothDuration: MayTokenValue;
    readonly springSnappy: MayTokenValue;
    readonly springSnappyDuration: MayTokenValue;
    readonly tabBarSpace: MayTokenValue;
    readonly tabbarH: MayTokenValue;
    readonly teal: MayTokenValue;
    readonly textBody: MayTokenValue;
    readonly textBodyLeading: MayTokenValue;
    readonly textBodyTracking: MayTokenValue;
    readonly textBodyWeight: MayTokenValue;
    readonly textCallout: MayTokenValue;
    readonly textCalloutLeading: MayTokenValue;
    readonly textCalloutTracking: MayTokenValue;
    readonly textCalloutWeight: MayTokenValue;
    readonly textCaption1: MayTokenValue;
    readonly textCaption1Leading: MayTokenValue;
    readonly textCaption1Tracking: MayTokenValue;
    readonly textCaption1Weight: MayTokenValue;
    readonly textCaption2: MayTokenValue;
    readonly textCaption2Leading: MayTokenValue;
    readonly textCaption2Tracking: MayTokenValue;
    readonly textCaption2Weight: MayTokenValue;
    readonly textFootnote: MayTokenValue;
    readonly textFootnoteLeading: MayTokenValue;
    readonly textFootnoteTracking: MayTokenValue;
    readonly textFootnoteWeight: MayTokenValue;
    readonly textHeadline: MayTokenValue;
    readonly textHeadlineLeading: MayTokenValue;
    readonly textHeadlineTracking: MayTokenValue;
    readonly textHeadlineWeight: MayTokenValue;
    readonly textLargeTitle: MayTokenValue;
    readonly textLargeTitleLeading: MayTokenValue;
    readonly textLargeTitleTracking: MayTokenValue;
    readonly textLargeTitleWeight: MayTokenValue;
    readonly textSubheadline: MayTokenValue;
    readonly textSubheadlineLeading: MayTokenValue;
    readonly textSubheadlineTracking: MayTokenValue;
    readonly textSubheadlineWeight: MayTokenValue;
    readonly textTitle1: MayTokenValue;
    readonly textTitle1Leading: MayTokenValue;
    readonly textTitle1Tracking: MayTokenValue;
    readonly textTitle1Weight: MayTokenValue;
    readonly textTitle2: MayTokenValue;
    readonly textTitle2Leading: MayTokenValue;
    readonly textTitle2Tracking: MayTokenValue;
    readonly textTitle2Weight: MayTokenValue;
    readonly textTitle3: MayTokenValue;
    readonly textTitle3Leading: MayTokenValue;
    readonly textTitle3Tracking: MayTokenValue;
    readonly textTitle3Weight: MayTokenValue;
    readonly yellow: MayTokenValue;
    readonly zBase: MayTokenValue;
    readonly zNav: MayTokenValue;
    readonly zOverlay: MayTokenValue;
    readonly zPopover: MayTokenValue;
    readonly zSheet: MayTokenValue;
    readonly zSticky: MayTokenValue;
    readonly zToast: MayTokenValue;
    readonly zTooltip: MayTokenValue;
}

/**
 * GENERATED by scripts/gen-tokens.mjs — do not edit.
 * Typed public token names and the two resolved default appearances.
 */
export declare type MayTokenValue = string | number;

/** Semantic colour role, shared across the system. */
export declare type MayTone = 'tint' | 'neutral' | 'success' | 'warning' | 'danger';

export declare const Menu: typeof Menu_2;

/**
 * A list of actions in a Popover — the desktop counterpart to ActionSheet.
 *
 * Everything the keyboard expects of a native menu is here: arrows rove the
 * items and wrap, Home and End jump the ends, Escape closes and hands focus
 * back, and typing jumps to a label — with a repeated letter cycling through
 * the items that start with it rather than searching for "ss". The pointer
 * moves the same highlight the arrows do, which is what makes reaching for a
 * far item with the mouse and finishing the trip with the keyboard work.
 */
declare function Menu_2({ trigger, items, placement, offset, open: openProp, defaultOpen, onOpenChange, className, 'aria-label': ariaLabel, }: MenuProps): JSX.Element;

export declare interface MenuItem {
    label: string;
    onSelect?: () => void;
    /** Leading glyph. A bare `<svg>` is scaled to the row by CSS. */
    icon?: ReactNode;
    /**
     * Marks a mutually-exclusive or toggled choice — a theme, a language, a sort
     * order. Present at all (`true` OR `false`) makes the row checkable: it takes
     * `menuitemcheckbox` semantics with `aria-checked`, and reserves the leading
     * slot either way so the labels in a mixed menu still line up. Checked draws
     * a checkmark in that slot, which is the macOS idiom and what a consumer
     * would otherwise fake by swapping `icon`.
     */
    checked?: boolean;
    /** Draws the row in the destructive tone. Delete, Report, Block. */
    destructive?: boolean;
    disabled?: boolean;
    /**
     * Starts a new group: draws a hairline *above* this item.
     *
     * A flag on the item that follows the break, rather than a standalone divider
     * entry, because a divider entry has no label and no action — it would sit in
     * the same array as real items and every loop over that array (roving focus,
     * type-ahead, the index the arrow keys count in) would have to remember to
     * skip it.
     */
    separator?: boolean;
    /** Keyboard equivalent, drawn muted on the trailing edge — `⌘⌫`. */
    shortcut?: string;
}

export declare interface MenuProps {
    /** The control that opens the menu. Cloned to carry the open state. */
    trigger: ReactNode;
    items: MenuItem[];
    /** @default 'bottom-start' */
    placement?: PopoverPlacement;
    /** Gap between trigger and menu, in px. @default 6 */
    offset?: number;
    /** Controlled open state. */
    open?: boolean;
    /** Uncontrolled initial state. @default false */
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    'aria-label'?: string;
}

export declare const Modal: typeof Modal_2;

/**
 * A centred dialog.
 *
 * The one thing that separates it from `Sheet`: a modal keeps its shape at
 * every width. A sheet reshapes into a bottom sheet on phones because it is a
 * *presentation* — somewhere you go. A modal is an *interruption*, and an
 * interruption that slides in from the bottom edge reads as dismissible when
 * it very often is not.
 *
 * Entry rides `--may-spring-bouncy`, whose samples pass 1.16, so the panel
 * scales past its resting size and settles rather than simply appearing.
 */
declare function Modal_2({ open, onClose, children, title, description, footer, footerLayout, size, closeButton, closeLabel, closeOnScrimClick, closeOnEscape, className, ...rest }: ModalProps): JSX.Element | null;

/**
 * Extends `HTMLAttributes` so a consumer can attach the things every other
 * component already allows: `data-testid` for e2e, an `id`, extra `aria-*`,
 * a `ref`. `title` is omitted because this component means a heading by it,
 * not the HTML tooltip attribute.
 */
export declare interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    /** Action row. On a phone its children stack full-width; on desktop they sit inline. */
    footer?: ReactNode;
    /**
     * How the footer lays its actions out. `'end'` (the default) is today's
     * behaviour: content-sized, pinned to the trailing edge. `'stack'` is the
     * native phone shape — a column of full-width actions, primary first, which
     * is what a single "Save" almost always wants instead of a small pill in the
     * corner. `'fill'` keeps one row and shares the width equally.
     * @default 'end'
     */
    footerLayout?: MayFooterLayout;
    /** @default 'md' */
    size?: 'sm' | 'md' | 'lg' | 'full';
    /** Render the close chip in the top-trailing corner. @default true */
    closeButton?: boolean;
    /** Accessible name for the close chip. @default 'Close' */
    closeLabel?: string;
    /** @default true */
    closeOnScrimClick?: boolean;
    /** @default true */
    closeOnEscape?: boolean;
    className?: string;
}

export declare namespace motion {
    export {
        resolveCurve,
        SpringName,
        EaseName,
        spring,
        ease,
        duration,
        rubber,
        clampWithRubber,
        velocityFrom,
        projectFlick,
        draggable,
        RUBBER_MAX,
        DragSample,
        DragOptions,
        scrub,
        dampPull,
        resolvePullStatus,
        shouldTriggerRefresh,
        pullProgress,
        PullStatus,
        PullConfig,
        geometryFor,
        applyThumb,
        segmentAt,
        SETTLE_MS,
        SETTLE_EASE,
        FOLLOW_MS,
        TINT_MS,
        PRESS_SCALE_X,
        PRESS_SCALE_Y,
        ThumbAxis,
        ThumbGeometry,
        ApplyOptions,
        useSlidingThumb,
        SlidingThumbOptions,
        SlidingThumbApi,
        snapshot,
        play,
        FlipOptions,
        FlipSnapshot
    }
}

declare interface NavBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
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

export declare const NavigationBar: typeof NavigationBar_2;

/**
 * The iOS navigation bar.
 *
 * The large title collapses into the inline one as the content scrolls under
 * it, and the whole effect is driven by a **single custom property** that a
 * passive scroll listener writes at most once per frame. Nothing about the
 * collapse goes through React state: a `setState` per scroll event would
 * re-render the bar and everything inside it sixty times a second, which is
 * how a ported nav bar ends up janky on the exact devices it is imitating.
 *
 * There is no vibrancy here and no blur — the bar is an opaque surface, and
 * the hairline that appears once you have scrolled is what separates it from
 * the content passing underneath.
 */
declare function NavigationBar_2({ title, subtitle, largeTitle, leading, trailing, onBack, backLabel, scrollRef, sticky, safeArea, className, ...rest }: NavigationBarProps): JSX.Element;

export declare interface NavigationBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /** The view's title. Shown inline, and again as the large title when asked. */
    title: ReactNode;
    /** Quiet second line under the inline title — "Updated Just Now". */
    subtitle?: ReactNode;
    /**
     * Render the large title below the bar, collapsing into the inline title as
     * its scroll container moves.
     */
    largeTitle?: boolean;
    /** Leading slot. Replaced by the back button when `onBack` is given alone. */
    leading?: ReactNode;
    /** Trailing slot — usually one or two `IconButton`s. */
    trailing?: ReactNode;
    /** Renders the iOS back button into the leading slot. */
    onBack?: () => void;
    /**
     * Where back goes — "Settings", "Mailboxes". The iOS 26 chip paints no
     * words, so this is the button's ACCESSIBLE NAME rather than its text; a
     * non-string is ignored, since aria-label cannot hold a node.
     * @default 'Back'
     */
    backLabel?: ReactNode;
    /**
     * The scroll container driving the collapse. Omit to listen on the window,
     * which is right for a whole-page scroll.
     */
    scrollRef?: RefObject<HTMLElement | null>;
    /** @default true */
    sticky?: boolean;
    /** Pad past the notch and the landscape rounded corners. @default true */
    safeArea?: boolean;
}

export declare const NoticeBar: typeof NoticeBar_2;

/**
 * A full-width banner for something transient — recording in progress, a
 * degraded connection, an alert the whole screen needs to know about.
 *
 * The marquee is measured rather than guessed. One copy of the message carries
 * its own trailing gap as padding, so that copy's width IS the distance the
 * track has to travel for a seamless loop, and a second copy behind it fills
 * the space the first one vacates. Nothing is hard-coded and any string length
 * loops perfectly.
 *
 * Under reduced motion the marquee is not slowed, it is removed: the second
 * copy is never rendered and the message wraps instead. That decision cannot be
 * made in CSS, because a wrapped bar and a scrolling one need different markup.
 */
declare function NoticeBar_2({ children, tone, icon, action, onClose, closeLabel, marquee, speed, role, className, ...rest }: NoticeBarProps): JSX.Element;

export declare interface NoticeBarProps extends HTMLAttributes<HTMLDivElement> {
    /** The notice. Plain text — a marquee duplicates this node, so keep it inert. */
    children?: ReactNode;
    /** @default 'tint' */
    tone?: MayTone;
    /** Leading glyph, sized to the text by CSS. */
    icon?: ReactNode;
    /** Trailing control — usually a small `plain` Button ("View", "Turn Off"). */
    action?: ReactNode;
    /** Renders the close button. Fires once the bar has finished leaving. */
    onClose?: () => void;
    /** @default 'Dismiss' */
    closeLabel?: string;
    /**
     * Scroll the notice when it is too long for the bar. It only actually
     * scrolls when the text really does overflow — a marquee on a message that
     * already fits is motion for its own sake.
     */
    marquee?: boolean;
    /**
     * Marquee speed in px per second. 44 is about a comfortable reading pace for
     * a single line; much past 60 and the tail is gone before you reach it.
     * @default 44
     */
    speed?: number;
}

export declare const Pagination: typeof Pagination_2;

/**
 * A numeric pager.
 *
 * The current page is a **fill**, never an outline — and the fill scales in on
 * a bouncy spring as it lands, so paging reads as the selection jumping to a
 * new key rather than two colours swapping.
 */
declare function Pagination_2({ page, pageCount, onPageChange, siblingCount, size, compact, className, 'aria-label': ariaLabel, ...rest }: PaginationProps): JSX.Element;

export declare interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    /** The current page, 1-based. */
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    /** How many pages to show either side of the current one. @default 1 */
    siblingCount?: number;
    /** @default 'md' */
    size?: PaginationSize;
    /**
     * Collapse to "Page 3 of 12" between the two arrows. Twelve keys do not fit
     * across a phone, and a pager that scrolls sideways is worse than one that
     * counts.
     */
    compact?: boolean;
    /** Accessible name for the pager. @default 'Pagination' */
    'aria-label'?: string;
}

/** xs is absent: a pager key that small stops being a touch target. */
export declare type PaginationSize = Exclude<MaySize, 'xs'>;

/**
 * Pin the platform for a subtree without introducing another themed root.
 * Written with `createElement` so this stays a `.ts` file alongside the other
 * hooks rather than becoming the only `.tsx` among them.
 */
export declare function PlatformProvider({ platform, children }: PlatformProviderProps): FunctionComponentElement<ProviderProps<MayPlatform>>;

export declare interface PlatformProviderProps {
    platform: MayPlatform;
    children?: ReactNode;
}

/**
 * LAST + INVERT + PLAY — call after the DOM has changed. Elements absent from
 * the snapshot are new, and are faded in rather than moved from nowhere.
 */
declare function play(elements: Iterable<Element>, first: FlipSnapshot, { duration, easing, onFinish }?: FlipOptions): Animation[];

export declare const Popover: typeof Popover_2;

/**
 * An anchored floating panel.
 *
 * Positioned from a live `getBoundingClientRect`, with a flip to the opposite
 * side and a shift along the edge when the viewport would clip it — recomputed
 * on scroll and resize, so a panel never detaches from its trigger.
 *
 * It is deliberately non-modal: no scrim, no focus trap, no scroll lock. A
 * popover that locks the page is a Sheet, and this system already has one.
 * Dismissal is the full native set — outside press, Escape, and focus leaving
 * the panel — with focus handed back to the trigger on the paths where the
 * user did not choose somewhere else to put it.
 */
declare function Popover_2({ trigger, children, placement, offset, open: openProp, defaultOpen, onOpenChange, arrow, role, haspopup, autoFocus, padded, className, surfaceClassName, 'aria-label': ariaLabel, }: PopoverProps): JSX.Element;

/** Where the panel sits along that edge. */
export declare type PopoverAlign = 'start' | 'center' | 'end';

/** `'bottom'`, `'bottom-start'`, `'left-end'`, … — a side, optionally aligned. */
export declare type PopoverPlacement = PopoverSide | `${PopoverSide}-${Exclude<PopoverAlign, 'center'>}`;

export declare interface PopoverProps {
    /**
     * The anchor. A React element is cloned so the open state lands on the real
     * control; anything else is wrapped in a plain button, because a popover you
     * cannot reach from the keyboard is not a popover.
     */
    trigger: ReactNode;
    children?: ReactNode;
    /** @default 'bottom' */
    placement?: PopoverPlacement;
    /** Visual gap between anchor and panel, in px. @default 8 */
    offset?: number;
    /** Controlled open state. */
    open?: boolean;
    /** Uncontrolled initial state. @default false */
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Draw the pointer arrow. @default true */
    arrow?: boolean;
    /**
     * `'none'` renders the panel as a plain box, for content that carries its own
     * role — a Menu owning its items, for instance. @default 'dialog'
     */
    role?: 'dialog' | 'none';
    /** What the trigger advertises it opens. @default 'dialog' */
    haspopup?: 'dialog' | 'menu' | 'listbox';
    /** Move focus into the panel when it opens. @default true */
    autoFocus?: boolean;
    /** Inset the panel's content. Turn off for edge-to-edge rows. @default true */
    padded?: boolean;
    /** Class for the inline wrapper around the trigger. */
    className?: string;
    /** Class for the floating panel itself. */
    surfaceClassName?: string;
    'aria-label'?: string;
}

/** Which edge of the anchor the panel sits against. */
export declare type PopoverSide = 'top' | 'bottom' | 'left' | 'right';

declare interface PopupProps {
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

declare const PRESS_SCALE_X = 1.16;

declare const PRESS_SCALE_Y: number;

export declare const Progress: typeof Progress_2;

/**
 * A determinate bar.
 *
 * The fill animates its `width` rather than a `scaleX`, which is the one place
 * this system prefers layout to the compositor: a scaled fill stretches its own
 * rounded caps into ellipses, and at a 4px bar that distortion is the entire
 * silhouette. The bar is short-lived and there is exactly one on screen, so the
 * layout cost buys a shape that stays right.
 *
 * The width rides `--may-spring-snappy`, so a jump from 20% to 80% overshoots a
 * hair and settles — the reason progress here reads as something arriving
 * rather than a number being assigned.
 */
declare function Progress_2({ value, max, indeterminate, tone, size, showValue, formatValue, label, className, style, 'aria-label': ariaLabel, ...rest }: ProgressProps): JSX.Element;

declare interface ProgressCommonProps {
    /** @default 0 */
    value?: number;
    /** @default 100 */
    max?: number;
    /** Work is happening but its extent is unknown. `value` is ignored. */
    indeterminate?: boolean;
    /** @default 'tint' */
    tone?: MayTone;
    /** @default 'md' */
    size?: MaySize;
    /** Render the percentage — beside the bar, inside the ring. */
    showValue?: boolean;
    /**
     * Overrides the printed percentage AND `aria-valuetext`, so "8.2 MB of 24 MB"
     * is spoken as well as shown. A screen reader otherwise announces the raw
     * number, which for a byte count is meaningless.
     */
    formatValue?: (value: number, max: number) => string;
}

export declare interface ProgressProps extends ProgressCommonProps, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Visible label above the bar. Also becomes the bar's accessible name. */
    label?: ReactNode;
}

/**
 * How far a flick would carry, given a velocity and how quickly it decays.
 * Used to decide whether a drag should complete or spring back.
 */
declare function projectFlick(velocity: number, decay?: number): number;

declare interface PullConfig {
    /** Distance at which releasing triggers a refresh. */
    threshold?: number;
    /** Hard ceiling; the damping curve approaches this asymptotically. */
    max?: number;
}

/** 0→1 progress for the spinner arc, so it fills as the pull approaches the threshold. */
declare function pullProgress(damped: number, { threshold }?: PullConfig): number;

/**
 * Pull-to-refresh physics, deliberately split from touch handling so it can be
 * unit-tested without simulating a single pointer event.
 */
declare type PullStatus = 'idle' | 'pulling' | 'ready' | 'refreshing' | 'complete';

export declare const Radio: ForwardRefExoticComponent<RadioProps & RefAttributes<HTMLInputElement>>;

export declare const RadioGroup: typeof RadioGroup_2;

/**
 * A set of mutually exclusive choices.
 *
 * The group owns the name, the selection, the size and the disabled/invalid
 * state, so a `Radio` inside it carries nothing but its own value. Arrow-key
 * roving comes free: the radios share a `name`, which is all the browser needs
 * to treat them as one tab stop and move the selection with the arrow keys.
 *
 * A surrounding `<Field>` supplies `disabled`, `invalid` and the id of its
 * message. It deliberately does **not** supply the group's id: `<label for>`
 * only names labelable elements, and a `role="radiogroup"` div is not one — so
 * give the group an `aria-label` (or a heading it points `aria-labelledby` at)
 * when it needs a name of its own.
 */
declare function RadioGroup_2({ children, name, value, defaultValue, onValueChange, orientation, size, disabled, invalid, className, 'aria-describedby': describedBy, ...rest }: RadioGroupProps): JSX.Element;

export declare interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
    children?: ReactNode;
    /** Shared `name` for the radios. Generated when omitted. */
    name?: string;
    /** Controlled selection. */
    value?: string;
    /** Uncontrolled initial selection. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** @default 'vertical' */
    orientation?: 'vertical' | 'horizontal';
    /** @default 'md' */
    size?: RadioSize;
    /** Disables every radio in the group. */
    disabled?: boolean;
    /** Mark the whole group invalid. A surrounding `<Field error>` sets this for you. */
    invalid?: boolean;
}

export declare interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'children' | 'value'> {
    /** The value this radio contributes to its group. */
    value: string;
    /** Label text beside the dot. */
    children?: ReactNode;
    /** Secondary line under the label. */
    description?: ReactNode;
    /** Overrides the group's size. */
    size?: RadioSize;
    /** Overrides the group's invalid state. */
    invalid?: boolean;
}

/** No `xs`: the dot would fall under the 44px touch target it has to fill. */
export declare type RadioSize = Exclude<MaySize, 'xs'>;

/** Resolve a curve token to its computed value, for WAAPI (which needs a real string). */
declare function resolveCurve(el: Element, token: string): string;

declare function resolvePullStatus(damped: number, isRefreshing: boolean, { threshold }?: PullConfig): PullStatus;

/**
 * Asymptotic rubber band. The further past the end you pull, the less the
 * surface gives — it never stops moving, and it never runs away.
 *
 *   rubber(0)   === 0
 *   rubber(56)  === 28
 *   rubber(1e6) →   56
 */
declare function rubber(overshoot: number, max?: number): number;

/** Distance past the end at which resistance approaches its asymptote. */
declare const RUBBER_MAX = 56;

export declare const SafeArea: ForwardRefExoticComponent<SafeAreaProps & RefAttributes<HTMLDivElement>>;

export declare type SafeAreaEdge = 'top' | 'bottom' | 'left' | 'right';

export declare interface SafeAreaProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Which edges to hold clear of the notch, the home indicator and the rounded
     * corners. @default all four
     */
    edges?: SafeAreaEdge | SafeAreaEdge[];
}

export declare const ScrollArea: ForwardRefExoticComponent<ScrollAreaProps & RefAttributes<HTMLDivElement>>;

export declare interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
    /** Height at which the region starts scrolling. A number is read as px. */
    maxHeight?: number | string;
    /** @default 'vertical' */
    axis?: ScrollAxis;
}

export declare type ScrollAxis = 'vertical' | 'horizontal' | 'both';

/** Progress 0→1 eased, for driving a scrubbed animation from a drag. */
declare const scrub: (progress: number) => number;

/**
 * `auto` is iOS: Cancel arrives on focus and leaves on blur — but stays while
 * there is still text, because that is the thing there is left to cancel.
 * `always` is for a screen whose whole purpose is the search. `never` drops the
 * affordance for a bar that filters in place and never takes over the view.
 */
declare type SearchBarCancel = 'auto' | 'always' | 'never';

declare interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'prefix'> {
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

declare type SearchBarSize = Exclude<MaySize, 'xs'>;

export declare const SearchField: ForwardRefExoticComponent<SearchFieldProps & RefAttributes<HTMLInputElement>>;

export declare interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'prefix'> {
    /** Controlled value. */
    value?: string;
    /** Uncontrolled initial value. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Enter, or the search key on a software keyboard. */
    onSearch?: (value: string) => void;
    /** @default 'md' */
    size?: SearchFieldSize;
    /** Show a Cancel button that slides in while the field is active. */
    cancelable?: boolean;
    /** @default 'Cancel' */
    cancelLabel?: string;
    /** Called after Cancel has cleared and dismissed the field. */
    onCancel?: () => void;
    /** Accessible name for the clear button. @default 'Clear search' */
    clearLabel?: string;
    /** Mark invalid explicitly. A surrounding `<Field error>` sets this for you. */
    invalid?: boolean;
    fullWidth?: boolean;
    /** Class name for the outer row; `className` lands on the `<input>` itself. */
    wrapperClassName?: string;
}

export declare type SearchFieldSize = Exclude<MaySize, 'xs'>;

/**
 * Which segment a pointer at `client` (clientX on the inline axis, clientY on
 * the block axis) is over. Returns -1 outside the track. Used so dragging across
 * a control selects as you go, the way iOS does, instead of only on release.
 */
declare function segmentAt(segments: HTMLElement[], client: number, axis?: ThumbAxis): number;

export declare const SegmentedControl: typeof SegmentedControl_2;

/**
 * iOS's segmented control.
 *
 * The thumb **slides** between segments and can be dragged, which is the part
 * that reads as iOS. Motion projects the real-sized thumb between buttons and
 * owns the constrained drag, while this component keeps selection and keyboard
 * policy in React.
 */
declare function SegmentedControl_2<T extends string = string>({ options, value, defaultValue, onValueChange, size, fullWidth, className, ...rest }: SegmentedControlProps<T>): JSX.Element;

/**
 * Generic over the option value, so a union survives the round trip: with
 * `options` typed `'id' | 'en'`, `onValueChange` hands back `'id' | 'en'`
 * rather than `string`, and the cast every typed call site needed disappears.
 */
export declare interface SegmentedControlProps<T extends string = string> {
    options: SegmentedOption<T>[];
    /** Controlled value. */
    value?: T;
    /** Uncontrolled initial value. */
    defaultValue?: T;
    onValueChange?: (value: T) => void;
    /** @default 'md' */
    size?: Exclude<MaySize, 'xs'>;
    fullWidth?: boolean;
    className?: string;
    'aria-label'?: string;
}

export declare interface SegmentedOption<T extends string = string> {
    label: string;
    value: T;
    disabled?: boolean;
}

export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>;

export declare interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

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
declare type SelectorColumns = number | 'auto';

declare interface SelectorMultipleProps<T extends string = string> {
    multiple: true;
    value?: T[];
    defaultValue?: T[];
    onChange?: (value: T[], option: SelectorOption<T>) => void;
}

declare interface SelectorOption<T extends string = string> {
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
declare type SelectorProps<T extends string = string> = (SelectorBaseProps<T> & SelectorSingleProps<T>) | (SelectorBaseProps<T> & SelectorMultipleProps<T>);

declare interface SelectorSingleProps<T extends string = string> {
    /** @default false */
    multiple?: false;
    value?: T;
    defaultValue?: T;
    onChange?: (value: T, option: SelectorOption<T>) => void;
}

declare type SelectorSize = Exclude<MaySize, 'xs'>;

/** `card` is the tappable tile; `chip` is the pill that wraps in a row. */
declare type SelectorVariant = 'card' | 'chip';

export declare interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'children'> {
    /** @default 'md' */
    size?: MaySize;
    /** Mark invalid explicitly. A surrounding `<Field error>` sets this for you. */
    invalid?: boolean;
    /** @default false */
    fullWidth?: boolean;
    /** Options to render. Pass `<option>` / `<optgroup>` children instead when you need groups. */
    options?: SelectOption[];
    /** A disabled first option, shown until something is picked. */
    placeholder?: string;
    /** Convenience over `onChange` — receives the value alone. */
    onValueChange?: (value: string) => void;
    children?: ReactNode;
}

export declare const Separator: ForwardRefExoticComponent<SeparatorProps & RefAttributes<HTMLDivElement>>;

export declare type SeparatorOrientation = 'horizontal' | 'vertical';

export declare interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
    /** @default 'horizontal' */
    orientation?: SeparatorOrientation;
    /**
     * Centred caption with a rule running out to either side — the "or" divider.
     * Horizontal only; a vertical rule has nowhere to put it.
     */
    label?: ReactNode;
}

declare const SETTLE_EASE = "cubic-bezier(.32,.72,0,1)";

/**
 * The sliding selection thumb — the single most recognisable piece of iOS
 * motion, and the one both reference projects get wrong by cross-fading their
 * indicator between segments instead of moving it.
 *
 * Drives SegmentedControl, CapsuleTabs and the TabBar indicator.
 *
 * Constants here are measured, not guessed:
 *   SETTLE_MS 220   — quick enough to answer selection immediately while the
 *                     curve still carries a physical arrival.
 *   FOLLOW_MS 90    — while a finger is down the thumb tracks it almost
 *                     exactly; any easing here reads as lag.
 *   PRESS_SCALE     — non-uniform on purpose. Puffing 1.1x more vertically
 *                     than horizontally reads as the thumb lifting off the
 *                     track rather than simply getting bigger.
 */
declare const SETTLE_MS = 220;

/**
 * How many toasts stay on screen. MayProvider's host configuration drives this.
 *
 * The cap lives in the store rather than in the host's render because the queue
 * is what knows the order things arrived in, and promotion has to happen on the
 * same publish that frees a place. The host simply renders what is not pending.
 */
export declare function setToastLimit(next: number): void;

export declare const Sheet: typeof Sheet_2;

/**
 * A sheet.
 *
 * One component, two shapes: it rises from the bottom edge on phones, with a
 * grabber and drag-to-dismiss, and presents as a centred dialog on desktop.
 * The consumer writes it once.
 *
 * The drag is real: the sheet tracks the finger with rubber-band resistance
 * upward, and on release it decides using both distance and projected flick
 * velocity, so a short fast swipe dismisses the way it does natively.
 */
declare function Sheet_2({ open, onClose, children, title, description, footer, footerLayout, side, size, grabber, dismissible, closeOnScrimClick, className, ...rest }: SheetProps): JSX.Element | null;

/**
 * Extends `HTMLAttributes` so a consumer can attach the things every other
 * component already allows: `data-testid` for e2e, an `id`, extra `aria-*`,
 * a `ref`. `title` is omitted because this component means a heading by it,
 * not the HTML tooltip attribute.
 */
export declare interface SheetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    footer?: ReactNode;
    /**
     * How the footer lays its actions out. `'end'` (the default) is today's
     * behaviour: content-sized, pinned to the trailing edge. `'stack'` is the
     * native phone shape — a column of full-width actions, primary first, which
     * is what a single "Save" almost always wants instead of a small pill in the
     * corner. `'fill'` keeps one row and shares the width equally.
     * @default 'end'
     */
    footerLayout?: MayFooterLayout;
    /** @default 'md' */
    size?: 'sm' | 'md' | 'lg' | 'full';
    /** Show the drag grabber on the phone presentation. @default true */
    grabber?: boolean;
    /**
     * Which edge the sheet comes from. `'bottom'` (the default) is the phone
     * sheet, and becomes a centred dialog at the desktop breakpoint. `'start'`
     * and `'end'` are edge drawers — the standard desktop editor shape — and
     * stay drawers at every width, so they do not reshape under you.
     * @default 'bottom'
     */
    side?: 'bottom' | 'start' | 'end';
    /** Allow dragging the sheet down to dismiss it. @default true */
    dismissible?: boolean;
    closeOnScrimClick?: boolean;
    className?: string;
}

declare function shouldTriggerRefresh(damped: number, velocity: number, { threshold }?: PullConfig): boolean;

declare interface SidebarSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    children?: ReactNode;
    /** Uppercase eyebrow above the items. */
    title?: ReactNode;
    /** Turns the title into a disclosure that folds its items away. */
    collapsible?: boolean;
    /** Controlled disclosure state. */
    open?: boolean;
    /** @default true */
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export declare const Skeleton: typeof Skeleton_2;

/**
 * The shape of content that has not arrived yet.
 *
 * A placeholder only works if it is the same silhouette as the thing it
 * replaces, so the API is deliberately geometric — variant, line count, width,
 * height — rather than a set of named presets that would drift from the real
 * layouts.
 *
 * The shimmer is a gradient sweeping across a fill from the same ramp as the
 * base, which is why there is no per-theme override: layering fill on fill
 * darkens on white and lightens on black, so the band always moves toward
 * contrast in whichever direction the theme has.
 */
declare function Skeleton_2({ variant, lines, width, height, radius, label, className, style, ...rest }: SkeletonProps): JSX.Element;

export declare interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /** @default 'text' */
    variant?: SkeletonVariant;
    /** Number of bars, `text` only. The last one is short, the way a paragraph ends. @default 1 */
    lines?: number;
    /** Numbers are pixels; strings pass through, so `'60%'` and `'12ch'` work. */
    width?: number | string;
    /** For `text` this is the height of each BAR, not of the stack. */
    height?: number | string;
    /** Overrides the per-variant default. */
    radius?: SkeletonRadius;
    /**
     * Announced while the placeholder is up, e.g. "Loading messages". Without it
     * the skeleton is hidden from assistive tech entirely — which is correct,
     * because a screen reader has nothing to gain from a description of a grey
     * rectangle, but it does mean a silent screen unless something else speaks.
     */
    label?: string;
}

/** Named radius tokens only — a placeholder must match the shape it stands in for. */
export declare type SkeletonRadius = 'xs' | 'sm' | 'md' | 'lg' | 'card' | 'full';

export declare type SkeletonVariant = 'text' | 'block' | 'circle';

export declare const Slider: typeof Slider_2;

/**
 * A slider.
 *
 * The rail is a fill and the filled portion is the tint — no strokes anywhere.
 * The thumb is dragged with the pointer and driven with the keyboard from the
 * same state, and it grows under the finger the whole time it is held, which
 * is the feedback iOS gives in place of a press-in.
 *
 * Position is a CSS custom property (`--may-slider-pct`) rather than inline
 * geometry, so one number set on the root moves the thumb, the fill and the
 * value label together.
 */
declare function Slider_2({ value, defaultValue, onValueChange, min, max, step, disabled, showValue, formatValue, ticks, tone, leading, trailing, className, style, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, ...rest }: SliderProps): JSX.Element;

export declare interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
    /** Controlled value. */
    value?: number;
    /** Uncontrolled initial value. Defaults to `min`. */
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    /** @default 0 */
    min?: number;
    /** @default 100 */
    max?: number;
    /** Granularity of both the drag and the arrow keys. @default 1 */
    step?: number;
    disabled?: boolean;
    /** Show the current value at the trailing edge. */
    showValue?: boolean;
    /** Formats `showValue` and the value announced to assistive tech. */
    formatValue?: (value: number) => string;
    /** `true` draws a mark at every step; an array draws marks at those values. */
    ticks?: boolean | number[];
    /** Colour of the filled portion. @default 'tint' */
    tone?: MayTone;
    /** Icon at the leading edge — the small sun on a brightness slider. */
    leading?: ReactNode;
    /** Icon at the trailing edge — the large sun. */
    trailing?: ReactNode;
}

declare interface SlidingThumbApi<T extends HTMLElement, I extends HTMLElement> {
    /** The positioned track the thumb is measured against and laid out in. */
    trackRef: RefObject<T | null>;
    /** The 1px thumb element. */
    thumbRef: RefObject<HTMLSpanElement | null>;
    /** Ref callback for item `index`. Stable across renders. */
    registerItem: (index: number) => (node: I | null) => void;
    /** Spread onto the track. Starts the gesture. */
    onPointerDown: (event: PointerEvent_2<T>) => void;
}

declare interface SlidingThumbOptions {
    /** Which way the thumb slides. @default 'inline' */
    axis?: ThumbAxis;
    itemCount: number;
    /** The item the thumb rests on. -1 hides the thumb (an empty selection). */
    selectedIndex: number;
    /**
     * Present enables the DRAG: the gesture previews the item under the pointer
     * and calls this with the landed index on release. Absent is press-only —
     * the thumb puffs when its own item is pressed and settles when selection
     * changes, but the pointer is never tracked, so a scroller keeps its axis.
     */
    onSelect?: (index: number) => void;
    /** Items a drag may not land on. Defaults to none disabled. */
    isDisabled?: (index: number) => boolean;
    /**
     * Pill ends need the radius divided by the scale or a scaled 1px box shears;
     * a square underline does not. @default false
     */
    roundEnds?: boolean;
    pressScale?: number;
    settleMs?: number;
    easing?: string;
    overdragMax?: number;
    /**
     * When false the hook is inert — no positioning, no gesture. For a control
     * that shows the thumb only sometimes (Selector's one-line chips, Pagination
     * outside compact). @default true
     */
    enabled?: boolean;
}

/** FIRST — record where everything is now. */
declare function snapshot(elements: Iterable<Element>): FlipSnapshot;

export declare const Spinner: typeof Spinner_2;

/**
 * The iOS activity indicator.
 *
 * Deliberately the tapered-spoke design rather than a rotating arc: nothing
 * here rotates at all. Every spoke runs the same fade on the same cycle, offset
 * in time, so the bright one appears to travel around the ring. That is what
 * makes it recognisably Apple's, and it stays perfectly crisp at every size
 * because no edge is ever drawn at an intermediate angle.
 *
 * Under reduced motion the ring holds a static, evenly-lit state. A spinner is
 * the classic thing that gets *faster* rather than stopping when durations are
 * naively collapsed to near-zero, which strobes.
 */
declare function Spinner_2({ tone, size, spokes, label, decorative, className, style, ...rest }: SpinnerProps): JSX.Element;

export declare interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Defaults to `neutral` rather than `tint`: an activity indicator is almost
     * always sitting on top of content the user is waiting for, and a blue one
     * reads as a control they could press.
     * @default 'neutral'
     */
    tone?: MayTone;
    /** @default 'md' */
    size?: MaySize;
    /**
     * Spoke count. UIKit draws 8; 12 reads smoother at `lg` because each step
     * around the ring is smaller. Clamped to 6–16 — below six the travelling
     * highlight stops reading as rotation, above sixteen the spokes merge.
     * @default 8
     */
    spokes?: number;
    /**
     * Announced while the spinner is on screen. A spinner has no text node, so
     * without this it is silent to VoiceOver — which is the whole message.
     * @default 'Loading'
     */
    label?: string;
    /**
     * Suppresses the live region, for a spinner inside an already-labelled
     * control (a button that sets `aria-busy`, say) where announcing twice is
     * worse than not announcing at all.
     */
    decorative?: boolean;
}

/**
 * `horizontal` splits the box left/right, so the divider itself is vertical.
 * The prop describes the *split*, which is the way people describe it out loud.
 */
declare type SplitPaneOrientation = 'horizontal' | 'vertical';

declare interface SplitPaneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onResize'> {
    /** Exactly two children: the sized pane, then the pane that takes the rest. */
    children: ReactNode;
    /** @default 'horizontal' */
    orientation?: SplitPaneOrientation;
    /** Size of the FIRST pane in px. Controlled. */
    size?: number;
    /** @default 260 */
    defaultSize?: number;
    onSizeChange?: (size: number) => void;
    /** @default 180 */
    min?: number;
    /** @default 480 */
    max?: number;
    /** Lets the first pane be dragged shut, and re-opened from the divider. */
    collapsible?: boolean;
    /** Controlled collapse. */
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Accessible name for the divider. @default 'Resize panes' */
    dividerLabel?: string;
}

/** `var()` reference to a generated spring curve. */
declare const spring: (name: SpringName) => string;

/**
 * The runtime half of the motion system.
 *
 * The curves themselves live in CSS (src/styles/motion.css, generated from
 * real spring physics by scripts/gen-springs.mjs) so they run on the
 * compositor with no JavaScript on the animation frame. What is here is the
 * vocabulary: names, durations, and the helpers that hand a curve to WAAPI.
 */
declare type SpringName = 'snappy' | 'smooth' | 'bouncy' | 'playful';

export declare const Stack: ForwardRefExoticComponent<StackProps & RefAttributes<HTMLDivElement>>;

export declare type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export declare type StackDirection = 'row' | 'column';

export declare type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export declare interface StackProps extends HTMLAttributes<HTMLDivElement> {
    /** @default 'column' */
    direction?: StackDirection;
    /** Gap as a step on the 4px scale. @default 0 */
    gap?: MaySpaceStep;
    /** @default 'stretch' */
    align?: StackAlign;
    /** @default 'start' */
    justify?: StackJustify;
    wrap?: boolean;
    fullWidth?: boolean;
}

export declare const Statistic: typeof Statistic_2;

/**
 * A single metric: label, value, and how it moved.
 *
 * The value is set in SF Rounded with tabular figures, which is what Fitness,
 * Health and the Batteries widget all do — rounded numerals read as a readout
 * rather than as body copy, and tabular figures stop a live value from
 * shivering as its digits change width.
 *
 * The arrow rotates between directions on a spring rather than swapping glyph,
 * so a metric that flips from rising to falling shows you the turn.
 */
declare function Statistic_2({ label, value, unit, delta, direction, invertDelta, trailing, size, variant, className, ...rest }: StatisticProps): JSX.Element;

/** Which way the metric moved. `flat` is not "no delta" — it is "unchanged". */
export declare type StatisticDirection = 'up' | 'down' | 'flat';

export declare interface StatisticProps extends HTMLAttributes<HTMLDivElement> {
    label: ReactNode;
    /** The number itself. Set in tabular figures so a ticking value cannot jitter. */
    value: ReactNode;
    /** Trailing unit, set smaller and lighter than the value — "1,284 **kcal**". */
    unit?: ReactNode;
    /** The change, already formatted: "+12.4%", "3 bpm". */
    delta?: ReactNode;
    /** @default 'flat' */
    direction?: StatisticDirection;
    /**
     * Some metrics improve as they fall — resting heart rate, page weight, time
     * to first byte. This flips which direction is coloured green.
     */
    invertDelta?: boolean;
    /** Trailing element, typically an `IconTile`. */
    trailing?: ReactNode;
    /** @default 'md' */
    size?: StatisticSize;
    /** `card` gives it the elevated surface a Health tile sits on. @default 'plain' */
    variant?: 'plain' | 'card';
}

export declare type StatisticSize = 'sm' | 'md' | 'lg';

export declare interface StepItem {
    title: ReactNode;
    description?: ReactNode;
    /** Overrides the status derived from `current` — an upload that failed. */
    status?: StepStatus;
    /** Replaces the number inside the marker. */
    icon?: ReactNode;
}

export declare const Stepper: typeof Stepper_2;

/**
 * iOS's stepper: two halves sharing one fill pill, split by a hairline.
 *
 * The behaviour that makes it feel native is the hold — a press that is kept
 * down starts repeating after a beat and then accelerates, so a run of 30
 * takes a second rather than thirty taps. The repeat stops dead at a limit
 * rather than ticking uselessly against it.
 */
declare function Stepper_2({ value, defaultValue, onValueChange, min, max, step, size, disabled, formatValue, decrementLabel, incrementLabel, className, ...rest }: StepperProps): JSX.Element;

export declare interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
    /** Controlled value. */
    value?: number;
    /** Uncontrolled initial value. Defaults to `min`, or 0 when there is none. */
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    /** @default Number.NEGATIVE_INFINITY */
    min?: number;
    /** @default Number.POSITIVE_INFINITY */
    max?: number;
    /** @default 1 */
    step?: number;
    /** @default 'md' */
    size?: Exclude<MaySize, 'xs'>;
    disabled?: boolean;
    /** Announced when the value changes, and used for nothing visible. */
    formatValue?: (value: number) => string;
    /** @default 'Decrease' */
    decrementLabel?: string;
    /** @default 'Increase' */
    incrementLabel?: string;
}

export declare const Steps: typeof Steps_2;

/**
 * Numbered progress through a sequence — a checkout, a device setup, an
 * onboarding flow.
 *
 * The connector between two markers is a track with a tinted fill that grows
 * along it as each step completes, so advancing reads as the line *filling in*
 * rather than a colour changing between frames. Nothing here is drawn with a
 * border: the track is a fill, the markers are fills, and the current one
 * carries a halo rather than a ring.
 */
declare function Steps_2({ items, current, orientation, clickable, onStepChange, size, className, 'aria-label': ariaLabel, ...rest }: StepsProps): JSX.Element;

export declare type StepsOrientation = 'horizontal' | 'vertical';

export declare interface StepsProps extends Omit<HTMLAttributes<HTMLOListElement>, 'onChange'> {
    items: StepItem[];
    /** Zero-based index of the step in progress. */
    current: number;
    /** @default 'horizontal' */
    orientation?: StepsOrientation;
    /**
     * Let a finished step be pressed to go back to it. Steps ahead of the
     * current one stay disabled — a stepper is not a tab strip.
     */
    clickable?: boolean;
    onStepChange?: (index: number) => void;
    /** @default 'md' */
    size?: StepsSize;
    /** Accessible name for the sequence. @default 'Progress' */
    'aria-label'?: string;
}

/** xs is absent: a marker that small stops being a touch target. */
export declare type StepsSize = Exclude<MaySize, 'xs'>;

/**
 * `error` is not derived from `current` — it is the only status a caller has
 * to declare, because nothing about an index says a step failed.
 */
export declare type StepStatus = 'complete' | 'current' | 'upcoming' | 'error';

declare interface SwipeActionItem {
    label: string;
    onSelect: () => void;
    /** Glyph above the label. A bare `<svg>` is scaled to the tile by CSS. */
    icon?: ReactNode;
    /** @default 'neutral' */
    tone?: MayTone;
}

declare interface SwipeActionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
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
declare type SwipeSide = 'leading' | 'trailing';

export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLInputElement>>;

export declare interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'children'> {
    /**
     * Label text. Sits at the leading edge, as iOS Settings puts it. Give the
     * Switch children *or* the surrounding `<Field>` a label — both name the same
     * input, so using both reads out as one run-on sentence.
     */
    children?: ReactNode;
    /** Secondary line under the label. */
    description?: ReactNode;
    /** @default 'md' */
    size?: SwitchSize;
    /** Which side the label sits on. @default 'start' */
    labelPosition?: 'start' | 'end';
    /** Convenience over `onChange` — receives the next state alone. */
    onCheckedChange?: (checked: boolean) => void;
}

/** No `xs`: below `sm` the thumb is too small to read as a physical object. */
export declare type SwitchSize = Exclude<MaySize, 'xs'>;

export declare const Tab: typeof Tab_2;

declare function Tab_2({ value, children, icon, badge, className, disabled, ...rest }: TabProps): JSX.Element;

declare interface TabBarItem<T extends string = string> {
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

declare interface TabBarProps<T extends string = string> extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
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

export declare const Table: typeof Table_2;

/**
 * An adaptive data table.
 *
 * Above `--may-breakpoint-desktop` this is a real `<table>` — sticky header,
 * tabular figures in numeric columns, selectable hoverable rows. Below it the
 * same records collapse into grouped List rows: the primary column becomes the
 * title, the last column becomes the trailing detail, and everything between
 * them reads as the subtitle. That reshape is the whole point — the consumer
 * describes the data once and never writes a phone layout.
 *
 * Row backgrounds are painted on the CELLS rather than on the `<tr>`, which is
 * what lets zebra, selection and press stack as translucent washes over the
 * hover fill base.css puts on the row, with no state having to out-specify
 * another.
 */
declare function Table_2<T>({ columns, data, rowKey, selectedKeys, onRowClick, size, stickyHeader, zebra, emptyState, caption, maxHeight, className, style, ...rest }: TableProps<T>): JSX.Element;

export declare interface TableColumn<T> {
    /** Column identity, and the property read off the record when there is no `render`. */
    key: string;
    header: ReactNode;
    /** Overrides the alignment that `numeric` implies. */
    align?: 'start' | 'center' | 'end';
    /** End-aligns the column and switches on tabular figures, so digits stack. */
    numeric?: boolean;
    /** Applied through a `<col>`, so it survives table layout. A number is read as px. */
    width?: number | string;
    render?: (row: T, index: number) => ReactNode;
    /**
     * Marks the column that becomes the row's TITLE once the table collapses on a
     * phone. Defaults to the first column, which is nearly always the identifier.
     */
    primary?: boolean;
}

export declare interface TableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    columns: TableColumn<T>[];
    data: T[];
    /** Identity of a record. Stable keys are what let rows move rather than remount. */
    rowKey: TableRowKey<T>;
    /** Keys of the selected records. An array or a Set — both are read the same way. */
    selectedKeys?: readonly string[] | ReadonlySet<string>;
    onRowClick?: (row: T, index: number) => void;
    /**
     * Desktop row height. The collapsed shape ignores it — a row you tap with a
     * thumb is always the full 44px target, whatever density the table asked for.
     * @default 'md'
     */
    size?: Exclude<MaySize, 'xs'>;
    /** Pins the header row. Needs `maxHeight` to be meaningful — see the CSS. */
    stickyHeader?: boolean;
    /** Alternating row wash. Off by default; hairlines already group the rows. */
    zebra?: boolean;
    /** Shown in place of the rows when `data` is empty. */
    emptyState?: ReactNode;
    /** Section title above the card, in the iOS grouped style. Labels the table. */
    caption?: ReactNode;
    /** Bounds the region and scrolls it. A number is read as px. */
    maxHeight?: number | string;
}

/** Either a property name on the record, or a function deriving the key. */
export declare type TableRowKey<T> = (keyof T & string) | ((row: T, index: number) => string | number);

export declare const TabList: typeof TabList_2;

/**
 * The strip.
 *
 * Two nested elements on purpose: the outer one scrolls, the inner one is the
 * ARIA tablist and the positioning context. Measuring against a track that
 * does not itself scroll means the indicator's geometry needs no scroll-offset
 * correction, and the underline's hairline can span the whole strip rather
 * than only the part of it currently on screen.
 */
declare function TabList_2({ children, fullWidth, className, onKeyDown, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, ...rest }: TabListProps): JSX.Element;

export declare interface TabListProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    /** Stretch the tabs to fill the track, dividing it evenly. */
    fullWidth?: boolean;
}

export declare const TabPanel: typeof TabPanel_2;

declare function TabPanel_2({ value, children, keepMounted, className, ...rest }: TabPanelProps): JSX.Element | null;

export declare interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    /** Identity of the tab this panel belongs to. */
    value: string;
    children?: ReactNode;
    /**
     * Keep the panel in the DOM while another tab is selected. Costs the render
     * but preserves scroll position and uncommitted form state.
     */
    keepMounted?: boolean;
}

export declare interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
    /** Identity of this tab. Must match its `TabPanel`. */
    value: string;
    children?: ReactNode;
    /** Leading glyph, sized to the label by CSS. */
    icon?: ReactNode;
    /** Trailing count or `Badge`, the way Mail hangs an unread count off a tab. */
    badge?: ReactNode;
}

export declare const Tabs: typeof Tabs_2;

/**
 * A tab set: `Tabs` owns the selection, `TabList` owns the indicator and the
 * arrow keys, `Tab` and `TabPanel` are the leaves.
 *
 * The indicator **slides** between tabs rather than cross-fading between two
 * copies of itself — the same technique, and the same helpers, as
 * SegmentedControl's thumb. That single detail is most of what separates a
 * native-feeling tab strip from a web one.
 */
declare function Tabs_2({ children, value, defaultValue, onValueChange, variant, orientation, size, className, ...rest }: TabsProps): JSX.Element;

export declare type TabsOrientation = 'horizontal' | 'vertical';

export declare interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children?: ReactNode;
    /** Controlled selection. */
    value?: string;
    /** Uncontrolled initial selection. Falls back to the first enabled tab. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** @default 'underline' */
    variant?: TabsVariant;
    /** @default 'horizontal' */
    orientation?: TabsOrientation;
    /** @default 'md' */
    size?: TabsSize;
}

/** xs is deliberately absent: a tab that small stops being a touch target. */
export declare type TabsSize = Exclude<MaySize, 'xs'>;

/**
 * `underline` is the bar that rides under the selected tab — the macOS/iPadOS
 * shape, right above a body of content. `pill` is the capsule that slides
 * behind it, the App Store filter-chip shape.
 *
 * There is no `outline` variant, here or anywhere: a tab is never a box with a
 * stroke around it.
 */
export declare type TabsVariant = 'underline' | 'pill';

export declare const Tag: typeof Tag_2;

/**
 * A removable chip — a Mail recipient token, a filter, a selected genre.
 *
 * Two details do most of the work. The chip springs in on mount, because a tag
 * almost always appears as the direct result of the user adding something and
 * that arrival should be visible. And the X carries an invisible 44px hit
 * target: the glyph is small by design, but the thing you tap is not.
 */
declare function Tag_2({ children, tone, size, onRemove, removeLabel, leadingIcon, className, ...rest }: TagProps): JSX.Element;

export declare interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onClick'> {
    children?: ReactNode;
    /** @default 'neutral' */
    tone?: MayTone;
    /** @default 'md' */
    size?: TagSize;
    /** Renders the trailing X. Without it the tag is a static chip. */
    onRemove?: () => void;
    /**
     * Accessible name for the X. Defaults to `Remove <label>` when the label is
     * a plain string — "Remove" alone is useless in a list of eight chips.
     */
    removeLabel?: string;
    leadingIcon?: ReactNode;
}

/** A chip is a hair larger than a badge and a hair smaller than a button. */
export declare type TagSize = Exclude<MaySize, 'xs'>;

declare const Text_2: ForwardRefExoticComponent<TextProps & RefAttributes<HTMLElement>>;
export { Text_2 as Text }

export declare type TextAlign = 'start' | 'center' | 'end';

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    /** @default 'md' */
    size?: TextareaSize;
    /** Mark invalid explicitly. A surrounding `<Field error>` sets this for you. */
    invalid?: boolean;
    fullWidth?: boolean;
    /** Visible rows, and the floor the field never shrinks below. @default 3 */
    rows?: number;
    /** Allow the user to drag-resize. Forced to `none` while `autoGrow` is on. @default 'vertical' */
    resize?: 'none' | 'vertical' | 'both';
    /** Grow to fit the content instead of scrolling it — the Messages compose field. */
    autoGrow?: boolean;
    /** Class name for the fill; `className` lands on the `<textarea>` itself. */
    wrapperClassName?: string;
}

export declare type TextareaSize = Exclude<MaySize, 'xs'>;

export declare interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    children?: ReactNode;
    /** One of Apple's 11 named text styles. @default 'body' */
    variant?: MayTextStyle;
    /** @default 'default' */
    tone?: TextTone;
    /** Overrides the weight the variant carries. Size, leading and tracking stay. */
    weight?: TextWeight;
    align?: TextAlign;
    /** Truncate to this many lines with an ellipsis. */
    clamp?: number;
    /** Render in the monospace face, with tabular figures. */
    mono?: boolean;
    /**
     * Element to render. `p` by default because base.css keeps `p` selectable
     * while control chrome is not — body copy you cannot select is the tell in
     * the other direction. Use `span` for inline runs inside a row or a button.
     * @default 'p'
     */
    as?: ElementType;
}

/**
 * Tone is a role, not a colour. `secondary` and `tertiary` are Apple's label
 * ramp — the greys supporting copy is drawn in, which already carry the right
 * contrast in both themes. `tint` is brand-as-TEXT (a link), never
 * brand-as-fill; see the note at the top of tokens.css.
 */
export declare type TextTone = 'default' | 'secondary' | 'tertiary' | 'tint' | 'danger' | 'success';

/** The four weights SF actually uses in the UI range. */
export declare type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

/**
 * Which way the thumb slides. `inline` is left-to-right (every consumer so far);
 * `block` is top-to-bottom, for a vertical tab strip or a vertical stepper.
 */
declare type ThumbAxis = 'inline' | 'block';

declare interface ThumbGeometry {
    /** Offset from the track's leading edge along the axis, in px. */
    x: number;
    /** Extent along the axis, in px. */
    width: number;
}

/** Decoration clock for consumers that animate independently of the thumb. */
declare const TINT_MS = 220;

export declare const Toast: typeof Toast_2;

/**
 * Queue a toast; returns its id. Pass that id to `dismiss`, or back into
 * `toast(title, { id })` to update the same toast in place.
 *
 *   const id = toast('Sending…', { duration: 0 })
 *   toast('Sent', { id, tone: 'success' })
 */
export declare const toast: ToastFn;

/**
 * One toast.
 *
 * Rendered for you by MayProvider's host; exported because a toast is also a perfectly
 * good inline banner, and because a story can then show every tone at rest.
 *
 * Three behaviours make it feel native rather than like a web notification:
 * the countdown *pauses* under a mouse or a focused action instead of running
 * out while you read it; the swipe tracks the finger exactly, with rubber-band
 * resistance in the direction that would peel it off its edge; and a release
 * decides on projected flick distance, not just how far you got.
 */
declare function Toast_2({ title, description, tone, icon, action, duration, position, dismissible, closeButton, closeLabel, closed, onDismiss, className, ...rest }: ToastProps): JSX.Element;

export declare interface ToastAction {
    label: string;
    onClick: () => void;
    /** Dismiss the toast once the action runs. @default true */
    dismiss?: boolean;
}

/** Copy for a stage of `toast.promise`, or a function of the settled value. */
declare type ToastCopy<T> = ReactNode | ((value: T) => ReactNode);

export declare interface ToastFn {
    (title: ReactNode, options?: ToastOptions): string;
    success: (title: ReactNode, options?: ToastOptions) => string;
    warning: (title: ReactNode, options?: ToastOptions) => string;
    danger: (title: ReactNode, options?: ToastOptions) => string;
    /**
     * Show `loading`, then replace it in place with the outcome.
     *
     * Built from the two primitives above — `duration: 0` holds the toast open,
     * and re-toasting the same `id` swaps its content without the row leaving
     * and returning. Returns `{ unwrap }` rather than the promise itself so a
     * fire-and-forget caller cannot produce an unhandled rejection; call
     * `unwrap()` when you do want to await or catch it.
     */
    promise: <T>(input: Promise<T>, copy: ToastPromiseCopy<T>) => {
        unwrap: () => Promise<T>;
    };
}

export declare interface ToastOptions {
    /** Second line, in secondary text. */
    description?: ReactNode;
    /** @default 'neutral' */
    tone?: MayTone;
    /** Leading glyph, drawn inside a tone-tinted circle. Replaces the tone dot. */
    icon?: ReactNode;
    /** Trailing text button — "Undo", "View", "Retry". */
    action?: ToastAction;
    /** Auto-dismiss delay in ms. `0` keeps it up until something dismisses it. */
    duration?: number;
    /** Overrides the host's placement for this one toast. */
    position?: ToastPosition;
    /** Swipe-to-dismiss and the close chip. @default true */
    dismissible?: boolean;
    /** Render the close chip. @default true */
    closeButton?: boolean;
    /** Accessible name for the close chip. @default 'Dismiss' */
    closeLabel?: string;
    /** Fired once, when the toast starts leaving — by timer, swipe, chip or code. */
    onDismiss?: () => void;
    /** Re-using an id updates that toast in place instead of queueing another. */
    id?: string;
}

/** Edge the toast is anchored to, and how it aligns along that edge. */
export declare type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';

declare interface ToastPromiseCopy<T> {
    loading: ReactNode;
    success: ToastCopy<T>;
    error: ToastCopy<unknown>;
}

export declare interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'id'>, Omit<ToastOptions, 'id' | 'position'> {
    /** Primary line. */
    title: ReactNode;
    /** Edge this toast is anchored to. Decides its entrance, exit and swipe axis. */
    position?: ToastPosition;
    /** True once dismissal has started: plays the exit and stops the countdown. */
    closed?: boolean;
}

/** One entry in the queue. */
export declare interface ToastRecord extends Omit<ToastOptions, 'id'> {
    id: string;
    title: ReactNode;
    createdAt: number;
    /** True once dismissal has started; the record lives on for its exit animation. */
    dismissed?: boolean;
    /**
     * True while the toast is queued behind the limit and not yet on screen. It
     * is not rendered, so it is not counting down either — its duration starts
     * when it is promoted.
     */
    pending?: boolean;
}

export declare const Toolbar: typeof Toolbar_2;

/**
 * A bar of actions: the bottom of a sheet, the top of a pane, the foot of a
 * detail view.
 *
 * It is a real ARIA toolbar, which means the arrow keys have to work — a
 * screen-reader user told "toolbar" will reach for them, and a row of buttons
 * that only responds to Tab is the tell that the role was decoration. Home and
 * End jump to the ends, and the whole handler stands down inside any control
 * that owns the arrow keys for itself.
 *
 * Tab order is left alone deliberately: a strict roving tabindex would hide
 * every action but one from sequential navigation, which is the wrong trade for
 * a bar that usually holds three or four buttons.
 */
declare function Toolbar_2({ children, placement, sticky, align, separator, variant, safeArea, className, onKeyDown, ...rest }: ToolbarProps): JSX.Element;

export declare interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    /**
     * Which edge the bar belongs to. Decides which side its hairline sits on,
     * which safe-area inset it pads for, and which edge it sticks to.
     * @default 'bottom'
     */
    placement?: 'top' | 'bottom';
    /** Pin the bar to that edge while the surrounding scroll container moves. */
    sticky?: boolean;
    /** How the actions distribute along the bar. @default 'between' */
    align?: 'start' | 'center' | 'end' | 'between';
    /** Draw the hairline dividing the bar from the content it borders. */
    separator?: boolean;
    /**
     * `plain` is transparent — right for a sheet footer, which already sits on a
     * surface. `surface` paints an opaque background, which a sticky bar needs
     * because content scrolls underneath it and there is no vibrancy in this
     * system to blur it away. Defaults to `surface` when `sticky`, else `plain`.
     */
    variant?: 'plain' | 'surface';
    /** Pad past the home indicator, the notch and the landscape rounded corners. */
    safeArea?: boolean;
}

export declare const ToolbarSpacer: typeof ToolbarSpacer_2;

/**
 * A flexible gap. Two of these around a group centre it; one pushes everything
 * after it to the far edge — the way a UIKit toolbar is laid out.
 *
 * Reach for it instead of `align="between"` whenever the split is uneven.
 */
declare function ToolbarSpacer_2(): JSX.Element;

export declare const Tooltip: typeof Tooltip_2;

/**
 * A hint on hover and on keyboard focus.
 *
 * It never appears on touch. That is not a nicety: a tooltip bound to tap has
 * no dismissal gesture, so it either swallows the tap that was meant for the
 * control or strands itself on screen — and the label it carries is invisible
 * to the user until they have already pressed the thing it describes. The
 * hover path is gated on the pointer that fired the event *and* on
 * `(hover: hover) and (pointer: fine)`, while the focus path stays open so a
 * keyboard user still gets the hint.
 *
 * Consequently the hint is never the only place a meaning lives. Give an
 * icon-only control a real `aria-label` as well; this describes, it does not name.
 */
declare function Tooltip_2({ children, label, placement, offset, delay, disabled, className, }: TooltipProps): JSX.Element;

export declare interface TooltipProps {
    /** The control being described. */
    children: ReactNode;
    /** The hint. A few words — anything longer belongs in the interface. */
    label: ReactNode;
    /** @default 'top' */
    placement?: PopoverPlacement;
    /** Gap between control and hint, in px. @default 8 */
    offset?: number;
    /** How long the pointer must rest before the hint appears, in ms. @default 500 */
    delay?: number;
    /** Suppress the hint entirely, without unmounting the control. */
    disabled?: boolean;
    className?: string;
}

/**
 * The surrounding `<Field>`, or `null` when a control is used bare.
 *
 * Returns null rather than throwing so every control can call it
 * unconditionally — a text input outside a Field is a legitimate thing.
 */
export declare function useFieldContext(): FieldContextValue | null;

/**
 * Resolve one control's own props against the Field around it.
 *
 * A prop set explicitly on the control always wins — including `false`, so a
 * single control can opt out of a disabled Field. `aria-describedby` is the
 * exception and merges, because a control may point at its own hint *and* the
 * Field's message at once, and dropping either one loses information for a
 * screen reader.
 */
export declare function useFieldControl(own?: FieldControlOwnProps): {
    id: string | undefined;
    invalid: boolean;
    required: boolean | undefined;
    disabled: boolean | undefined;
    'aria-describedby': string | undefined;
};

export declare function useIsDesktop(): boolean;

/**
 * Publish how much of the layout viewport the on-screen keyboard covers.
 *
 * Android resizes the layout viewport when the keyboard opens, so CSS sees the
 * space shrink and a sheet's footer rides up on its own. **iOS does not** — it
 * draws the keys over a viewport that stays full height, so the footer, i.e.
 * the Save button, sits underneath them with no way to reach it. Every
 * consumer with a form in a sheet hits this and has to solve it themselves.
 *
 * `visualViewport` is the only thing that reports the difference. The overlap
 * is the layout viewport's height minus the visual viewport's height and its
 * offset; on Android that lands at 0 because the layout viewport already
 * shrank, which is why one measurement covers both platforms.
 *
 * Written to a CSS variable on the root rather than into React state: the
 * value changes for every frame of the keyboard's slide, and a render per
 * frame to move one padding is what a custom property exists to avoid.
 */
export declare function useKeyboardInset(enabled?: boolean): void;

/** The element to render an `href` with — the provider's, or `'a'`. */
export declare function useLinkComponent(): ElementType;

export declare function useMayConfig(): Readonly<MayConfigValue>;

export declare function useMayTheme(): Readonly<MayConfigValue['theme']>;

export declare function useMayTokens(): Readonly<MayTokens>;

export declare function usePlatform(): MayPlatform;

/**
 * Press state that a fast tap can actually see.
 *
 * A deliberate tap can be shorter than the press transition, so a naive
 * `:active` style flashes for a frame or never paints at all. This holds the
 * pressed state for a minimum window, which — combined with the asymmetric
 * transition in base.css, where release rides a spring that overshoots — is
 * what makes a 20ms tap still read as a full press-and-bounce.
 *
 * Returns props to spread onto the element. Pointer events cover mouse, touch
 * and pen in one path; `pointercancel` matters because a press that turns into
 * a scroll must not stay stuck down.
 */
export declare function usePressFeedback(disabled?: boolean): {
    pressed: boolean;
    pressProps: {
        onPointerDown: () => void;
        onPointerUp: () => void;
        onPointerCancel: () => void;
        onPointerLeave: () => void;
        'data-pressed': "true" | undefined;
    };
};

/**
 * Whether the user has asked for reduced motion.
 *
 * The CSS in base.css already shortens transitions. This hook exists for the
 * cases CSS cannot reach: a gesture-driven spring, or a bar that slides away
 * entirely. A bar that vanishes is motion, not decoration, so it needs the JS
 * check rather than a shorter duration.
 */
export declare function useReducedMotion(): boolean;

declare function useSlidingThumb<T extends HTMLElement = HTMLDivElement, I extends HTMLElement = HTMLElement>({ axis, itemCount, selectedIndex, onSelect, isDisabled, roundEnds, pressScale, settleMs, easing, overdragMax, enabled, }: SlidingThumbOptions): SlidingThumbApi<T, I>;

/**
 * The hook form. `toast`, `dismiss` and `dismissAll` are the same module-level
 * functions — the hook exists so a component can also *read* the queue, and so
 * callers who prefer hooks never have to import the loose functions.
 */
export declare function useToast(): UseToastResult;

export declare interface UseToastResult {
    /** The live queue, oldest first. */
    toasts: ToastRecord[];
    toast: ToastFn;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}

/**
 * Velocity in px/ms, measured over a short trailing window rather than the
 * last two events — a single jittery final sample otherwise dominates, and
 * flicks read as either dead or impossibly fast.
 */
declare function velocityFrom(samples: DragSample[], axis: 'x' | 'y', windowMs?: number): number;

export declare const VisuallyHidden: ForwardRefExoticComponent<VisuallyHiddenProps & RefAttributes<HTMLElement>>;

export declare interface VisuallyHiddenProps extends HTMLAttributes<HTMLElement> {
    /**
     * `span` by default so it can sit inside a button's label without breaking
     * the flow. Use `div` when the hidden text is a block of its own.
     * @default 'span'
     */
    as?: 'span' | 'div';
    /**
     * Reveal the element while anything inside it has focus. Required whenever
     * the content is focusable — a "Skip to content" link that stays invisible
     * when tabbed to has moved the keyboard user somewhere they cannot see.
     */
    focusable?: boolean;
}

export { }
