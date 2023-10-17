import type {
    AriaLabels,
    IFormat,
    Transition,
    TextInputOptions,
    DateFilter,
    ActionRowData,
    MultiCalendarsProp,
    MultiCalendarsOptions,
    OptionEnabled,
    TextInputProp,
    InlineProp,
    InlineOptions,
    Config,
    HighlightProp,
    Highlight,
    HighlightFn,
} from '@/interfaces';
import { getDate } from '@/utils/date-utils';

export const mergeDefaultTransitions = (conf: Partial<Transition>): Transition =>
    Object.assign(
        {
            menuAppearTop: 'dp-menu-appear-top',
            menuAppearBottom: 'dp-menu-appear-bottom',
            open: 'dp-slide-down',
            close: 'dp-slide-up',
            next: 'calendar-next',
            previous: 'calendar-prev',
            vNext: 'dp-slide-up',
            vPrevious: 'dp-slide-down',
        },
        conf == null ? {} : conf,
    );

export const defaultAriaLabels = (labels: Partial<AriaLabels>): AriaLabels => {
    return Object.assign(
        {
            toggleOverlay: 'Toggle overlay',
            menu: 'Datepicker menu',
            input: 'Datepicker input',
            calendarWrap: 'Calendar wrapper',
            calendarDays: 'Calendar days',
            openTimePicker: 'Open time picker',
            closeTimePicker: 'Close time Picker',
            incrementValue: (type: string) => `Increment ${type}`,
            decrementValue: (type: string) => `Decrement ${type}`,
            openTpOverlay: (type: string) => `Open ${type} overlay`,
            amPmButton: 'Switch AM/PM mode',
            openYearsOverlay: 'Open years overlay',
            openMonthsOverlay: 'Open months overlay',
            nextMonth: 'Next month',
            prevMonth: 'Previous month',
            nextYear: 'Next year',
            prevYear: 'Previous year',
            day: () => '',
        },
        labels == null ? {} : labels,
    );
};

const getMultiCalendarsCount = (option?: OptionEnabled) => {
    if (!option) return 0;
    if (typeof option === 'boolean') return option ? 2 : 0;
    return +option >= 2 ? +option : 2;
};

export const defaultMultiCalendars = (multiCalendars?: MultiCalendarsProp): MultiCalendarsOptions => {
    const isConfig = typeof multiCalendars === 'object' && multiCalendars;
    const defaultOptions = {
        static: true,
        solo: false,
    };
    if (!multiCalendars) return Object.assign(defaultOptions, { count: getMultiCalendarsCount(false) });
    const addOptions = isConfig ? multiCalendars : ({} as MultiCalendarsOptions);
    const option = isConfig ? (addOptions.count == null ? true : addOptions.count) : multiCalendars;
    const count = getMultiCalendarsCount(option);

    return Object.assign(defaultOptions, addOptions, { count });
};

export const defaultPreviewFormat = (
    previewFormat: IFormat,
    format: IFormat,
    defaultPattern: string | ((val: Date) => string),
): IFormat => {
    if (!previewFormat) {
        return typeof defaultPattern === 'string' ? defaultPattern : format;
    }
    return previewFormat;
};

export const defaultTransitions = (transitions: boolean | Partial<Transition>): Transition => {
    if (typeof transitions === 'boolean') {
        return transitions ? mergeDefaultTransitions({}) : (false as unknown as Transition);
    }
    return mergeDefaultTransitions(transitions);
};

/**
 * Default options to merge with user provided ones
 */
export const getDefaultTextInputOptions = (textInput: TextInputProp): TextInputOptions & { enabled: boolean } => {
    const defaultOptions = {
        enterSubmit: true,
        tabSubmit: true,
        openMenu: true,
        selectOnFocus: false,
        rangeSeparator: ' - ',
    };

    if (typeof textInput === 'object') {
        return Object.assign(defaultOptions, textInput == null ? {} : textInput, { enabled: true });
    }
    return Object.assign(defaultOptions, { enabled: textInput });
};

/**
 * Default filters to merge with user provided values
 */
export const getDefaultFilters = (filters: Partial<DateFilter>): DateFilter =>
    Object.assign(
        {
            months: [],
            years: [],
            times: { hours: [], minutes: [], seconds: [] },
        },
        filters == null ? {} : filters,
    );

export const getDefaultActionRowData = (actionRow: Partial<ActionRowData>): ActionRowData =>
    Object.assign(
        {
            showSelect: true,
            showCancel: true,
            showNow: false,
            showPreview: true,
        },
        actionRow == null ? {} : actionRow,
    );

export const getDefaultInlineOptions = (inline: InlineProp): InlineOptions => {
    const defaultOptions = { input: false };
    if (typeof inline === 'object') {
        return Object.assign(defaultOptions, inline == null ? {} : inline, { enabled: true });
    }
    return Object.assign(
        {
            enabled: inline,
        },
        defaultOptions,
    );
};

export const getDefaultConfig = (config?: Partial<Config>): Config => {
    const defaultConfig = {
        allowStopPropagation: true,
        closeOnScroll: false,
        modeHeight: 255,
        allowPreventDefault: false,
        closeOnClearValue: true,
        closeOnAutoApply: true,
        noSwipe: false,
        keepActionRow: false,
        onClickOutside: undefined,
    };
    return Object.assign(defaultConfig, config == null ? {} : config);
};

export const getDefaultHighlight = (
    highlight: HighlightProp,
    highlightWeekDays: number[],
    highlightDisabledDays: boolean,
): Highlight | HighlightFn => {
    const defaultOptions = {
        dates: Array.isArray(highlight) ? highlight.map((date) => getDate(date)) : [],
        years: [],
        months: [],
        quarters: [],
        weeks: [],
        weekdays: highlightWeekDays,
        options: { highlightDisabled: highlightDisabledDays },
    };

    if (typeof highlight === 'function') return highlight;
    return Object.assign(defaultOptions, highlight == null ? {} : highlight);
};
