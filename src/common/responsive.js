import React from 'react';
import Responsive from 'react-responsive';

// Desktop, tablet and mobile setup
export const Lg = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
export const MdOnly = ({ children }) =>
  <Responsive minWidth={768} maxWidth={992} children={children} />;
export const XsOnly = ({ children }) =>
  <Responsive maxWidth={768} children={children} />;

// Default (desktop, tablet) and mobile setup
export const Xl = ({ children }) =>
  <Responsive minWidth={768} children={children} />;
export const Sm = ({ children }) =>
  <Responsive maxWidth={992} children={children} />;
