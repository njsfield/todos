import React from 'react';
import FilterLink from '../containers/filterlink';

const Footer = () => (
  <p className="pl5-l pl2 fixed bottom-0 left-0">
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
  </p>
);

export default Footer;
