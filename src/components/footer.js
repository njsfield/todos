import React from 'react';
import FilterLink from '../containers/filterlink';
import ClearButton from '../containers/clearbutton';
import { footerClass } from '../css/classnames';

const Footer = () => (
  <p className={footerClass}>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <ClearButton />
  </p>
);

export default Footer;
