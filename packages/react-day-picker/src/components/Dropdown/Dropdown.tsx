import React from 'react';

import { IconDropdown } from 'components/IconDropdown';
import { useDayPicker } from 'contexts/DayPicker';

/** The raw dropdown option that you can use to create your own {@link Dropdown} options */
export type DropdownOption = {
  label: string;
  value?: string | number;
};

/** The props for the {@link Dropdown} component. */
export interface DropdownProps {
  /** The name attribute of the element. */
  name?: string;
  /** The caption displayed to replace the hidden select. */
  caption?: React.ReactNode;
  children?: React.SelectHTMLAttributes<HTMLSelectElement>['children'];
  options: DropdownOption[];
  className?: string;
  ['aria-label']?: string;
  style?: React.CSSProperties;
  /** The selected value. */
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

/**
 * Render a styled select component – displaying a caption and a custom
 * drop-down icon.
 */
export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className, style } = props;
  const dayPicker = useDayPicker();

  const IconDropdownComponent =
    dayPicker.components?.IconDropdown ?? IconDropdown;
  return (
    <div className={className} style={style}>
      <span className={dayPicker.classNames.vhidden}>
        {props['aria-label']}
      </span>
      <select
        name={props.name}
        aria-label={props['aria-label']}
        className={dayPicker.classNames.dropdown}
        style={dayPicker.styles.dropdown}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div
        className={dayPicker.classNames.caption_label}
        style={dayPicker.styles.caption_label}
        aria-hidden="true"
      >
        {caption}
        {
          <IconDropdownComponent
            className={dayPicker.classNames.dropdown_icon}
            style={dayPicker.styles.dropdown_icon}
          />
        }
      </div>
    </div>
  );
}
