import { ButtonHTMLAttributes } from 'react';
import { HTMLAttributes } from 'react';
import { JSX } from 'react';
import { ReactNode } from 'react';

export declare interface CommandGroup {
    id: string;
    heading?: string;
    items: CommandItem[];
}

export declare interface CommandItem {
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

export declare const CommandPalette: typeof CommandPalette_2;

/**
 * The ⌘K launcher.
 *
 * A palette is a list you drive entirely from the keyboard, so everything here
 * is arranged around never having to leave it: focus stays in the query field
 * for the palette's whole life and the selection moves as
 * `aria-activedescendant`, the pointer only ever *previews* a row by making it
 * active, and every row that has a shortcut shows it as a real keycap so the
 * palette teaches you how to stop needing it.
 *
 * The filter is a scored fuzzy subsequence match, not a substring test, and it
 * highlights the characters that earned each hit.
 */
declare function CommandPalette_2({ open, onOpenChange, groups, onSelect, query: queryProp, defaultQuery, onQueryChange, recentIds, maxRecent, recentHeading, placeholder, hotkey, emptyState, hideFooter, label, className, }: CommandPaletteProps): JSX.Element | null;

export declare interface CommandPaletteProps {
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

export declare const ContextMenu: typeof ContextMenu_2;

/**
 * A right-click menu.
 *
 * Three things separate this from a dropdown wearing a different name. It opens
 * at the POINTER, not at a trigger, so its position is whatever the viewport
 * will allow and it flips rather than slides when it will not fit. Its submenus
 * open on hover with a delay in each direction, which is what makes a diagonal
 * reach across a sibling row survivable. And it stays one DOM subtree however
 * deep it nests, which turns dismissal into a single containment check instead
 * of a set of them.
 *
 * The wrapper is `display: contents`, so wiring a context menu onto a table row
 * or a grid cell never inserts a box into that layout.
 */
declare function ContextMenu_2({ items, children, onSelect, onOpenChange, disabled, size, label, className, onContextMenu, ...rest }: ContextMenuProps): JSX.Element;

export declare interface ContextMenuAction {
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

export declare type ContextMenuEntry = ContextMenuAction | ContextMenuSeparator | ContextMenuLabel;

export declare interface ContextMenuLabel {
    type: 'label';
    id?: string;
    label: ReactNode;
}

export declare interface ContextMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
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

export declare interface ContextMenuSeparator {
    type: 'separator';
    id?: string;
}

export declare const DataTable: typeof DataTable_2;

/**
 * The feature-rich table the adaptive `Table` deliberately is not.
 *
 * `Table` reshapes into grouped List rows on a phone, and that reshape is the
 * reason it stays simple: nothing it offers may depend on a pointer. Everything
 * here does. Multi-key sorting, per-column filters, a header select-all, drag
 * resizing, two pinned axes and a virtualiser are all mouse-and-keyboard work,
 * so they live in `mayui/desktop` instead of being bolted onto a component that
 * has to survive at 390px.
 *
 * What it does NOT own is the look. Every visual — the grouped card, the
 * per-cell hairlines, the row washes stacking over the shared hover fill, the
 * staggered entrance — comes from Table's stylesheet, rendered through Table's
 * own class names. This file adds logic and four affordances (sort glyph,
 * filter row, resize grip, pinned edge) and nothing else.
 */
declare function DataTable_2<T>({ columns, data, rowKey, size, caption, sort: sortProp, defaultSort, onSortChange, filters: filtersProp, defaultFilters, onFiltersChange, selectable, selectedKeys: selectedProp, defaultSelectedKeys, onSelectionChange, onRowClick, resizableColumns, stickyHeader, stickyColumn, pageSize, virtualized, rowHeight, maxHeight, zebra, emptyState, noResultsState, selectAllLabel, className, style, ...rest }: DataTableProps<T>): JSX.Element;

export declare interface DataTableColumn<T> {
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
export declare type DataTableFilters = Record<string, string>;

export declare interface DataTableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
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
export declare type DataTableRowKey<T> = (keyof T & string) | ((row: T, index: number) => string | number);

/** One key of a multi-key sort. Earlier entries win; later ones break ties. */
export declare interface DataTableSort {
    key: string;
    direction: DataTableSortDirection;
}

export declare type DataTableSortDirection = 'asc' | 'desc';

/** What a column contributes to sorting and filtering. */
export declare type DataTableValue = string | number | boolean | null | undefined;

/** Control size. Every rung is a proportion of `--may-control-h`. */
declare type MaySize = 'xs' | 'sm' | 'md' | 'lg';

export declare const NavTree: typeof NavTree_2;

/**
 * A multi-level navigation tree.
 *
 * Branches animate their height on a grid track, indent guides are hairlines
 * drawn as pseudo-elements rather than borders, and the selected node carries a
 * tinted fill.
 *
 * Focus is roving: exactly one row is tabbable, so the whole tree is a single
 * tab stop and the arrow keys move inside it. That is the part a tree built out
 * of plain buttons gets wrong — twenty folders become twenty tab stops, and
 * reaching the content past them costs twenty presses.
 */
declare function NavTree_2({ nodes, selectedId, defaultSelectedId, onSelect, expandedIds, defaultExpandedIds, onExpandedChange, className, id, ...rest }: NavTreeProps): JSX.Element;

export declare interface NavTreeNode {
    /** Stable across renders — selection, expansion and focus are all keyed on it. */
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    /** A count or status pill, shown at the trailing edge. */
    badge?: ReactNode;
    children?: NavTreeNode[];
    disabled?: boolean;
}

export declare interface NavTreeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    nodes: NavTreeNode[];
    /** Controlled selection. */
    selectedId?: string;
    defaultSelectedId?: string;
    onSelect?: (id: string, node: NavTreeNode) => void;
    /** Controlled expansion. */
    expandedIds?: string[];
    defaultExpandedIds?: string[];
    onExpandedChange?: (ids: string[]) => void;
    'aria-label'?: string;
}

export declare const Sidebar: typeof Sidebar_2;

/**
 * An app sidebar that collapses to an icon rail.
 *
 * Width is the only thing that actually animates: labels fading, badges
 * shrinking to dots and section titles folding away are all driven off
 * `data-collapsed` on this root, so the whole collapse reads as one gesture
 * on one curve rather than a dozen coincidental animations.
 *
 * Collapsed labels are still in the DOM at `opacity: 0`, so a screen reader
 * announces the rail exactly as it announces the expanded sidebar. Sighted
 * mouse users get the label back as a flyout.
 */
declare function Sidebar_2({ children, collapsed, defaultCollapsed, onCollapsedChange, header, footer, className, ...rest }: SidebarProps): JSX.Element;

export declare const SidebarItem: typeof SidebarItem_2;

/**
 * One navigation row.
 *
 * Deliberately not `may-pressable`: a full-width row that scales exposes the
 * surface behind its edges and reads as a bug. It still takes the press props,
 * because `data-pressed` is what drives the highlight — the same split
 * `ListRow` and `Collapsible` make.
 */
declare function SidebarItem_2({ children, icon, badge, active, disabled, onClick, href, className, ...rest }: SidebarItemProps): JSX.Element;

export declare interface SidebarItemProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    /** The label. Also what the rail's flyout shows. */
    children: ReactNode;
    icon?: ReactNode;
    /** A count or status pill. On the rail it shrinks to a dot on the icon. */
    badge?: ReactNode;
    /** Tinted fill, never an outline. */
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    /** Renders a real `<a>` instead of a `<button>`. */
    href?: string;
}

export declare interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    children?: ReactNode;
    /** Controlled rail state. Leave undefined to let the sidebar own it. */
    collapsed?: boolean;
    /** @default false */
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Pinned above the scrolling body — an app title, a search field, a toggle. */
    header?: ReactNode;
    /** Pinned below it — the account row, storage, a sign-out action. */
    footer?: ReactNode;
}

export declare const SidebarSection: typeof SidebarSection_2;

/**
 * A titled group of items.
 *
 * The panel animates its height with `grid-template-rows: 0fr → 1fr`, the same
 * technique `Collapsible` uses — a measured max-height would either clip a long
 * group or spend the tail of the transition animating empty space.
 *
 * A railed sidebar has nowhere to put a title, so a collapsed group would leave
 * its items unreachable with no way to get them back. Sections therefore force
 * themselves open on the rail and restore their own state when it reopens.
 */
declare function SidebarSection_2({ children, title, collapsible, open, defaultOpen, onOpenChange, className, id, ...rest }: SidebarSectionProps): JSX.Element;

export declare interface SidebarSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
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

export declare const SidebarToggle: typeof SidebarToggle_2;

/**
 * The rail switch. A small square control, so unlike a row it *does* scale on
 * press — `may-pressable` is the whole point of a control this size.
 */
declare function SidebarToggle_2({ label, className, onClick, ...rest }: SidebarToggleProps): JSX.Element;

export declare interface SidebarToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Overrides the generated "Collapse sidebar" / "Expand sidebar" label. */
    label?: string;
}

export declare const SplitPane: typeof SplitPane_2;

/**
 * Two panes and a draggable divider.
 *
 * The divider renders as a hairline and hit-tests as a 17px band: a
 * pseudo-element extends the target past the line on both sides, so the thing
 * you aim at is a comfortable target while the thing you see stays a hairline.
 *
 * The drag itself runs through `draggable()` — pointer capture, so a fast drag
 * that outruns the divider still reports its own release — and drives a CSS
 * custom property while it is in flight, committing to React state only when
 * the pointer lifts. Sixty renders a second to move one flex-basis is work the
 * compositor never asked for.
 *
 * When `collapsible`, dragging below `min` meets rubber-band resistance rather
 * than a wall, and letting go past half that band collapses the pane. It is the
 * same asymptotic curve the sheet uses to resist an upward drag.
 */
declare function SplitPane_2({ children, orientation, size, defaultSize, onSizeChange, min, max, collapsible, collapsed, defaultCollapsed, onCollapsedChange, dividerLabel, className, id, ...rest }: SplitPaneProps): JSX.Element;

/**
 * `horizontal` splits the box left/right, so the divider itself is vertical.
 * The prop describes the *split*, which is the way people describe it out loud.
 */
export declare type SplitPaneOrientation = 'horizontal' | 'vertical';

export declare interface SplitPaneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onResize'> {
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

export { }
