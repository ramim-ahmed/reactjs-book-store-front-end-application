import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const SortContext = createContext();

export default function SortProvider({ children }) {
  const [filterText, setFilterText] = useState('all');
  const handleFilterText = (value) => {
    setFilterText(value);
  };
  return <SortContext.Provider value={{ filterText, handleFilterText }}>{children}</SortContext.Provider>;
}

SortProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
