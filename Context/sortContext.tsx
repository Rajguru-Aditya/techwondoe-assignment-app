import { createContext, useState } from "react";

const SortingContext = createContext({
  sortOrder: 'asc',
  setSortOrder: (sortOrder: string) => {},
});

export const SortingContextProvider = (props: any) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const setSortOrderHandler = (sortOrder: string) => {
    setSortOrder(sortOrder);
  };

  const contextValue = {
    sortOrder: sortOrder,
    setSortOrder: setSortOrderHandler,
  };

  return (
    <SortingContext.Provider value={contextValue}>
      {props.children}
    </SortingContext.Provider>
  );
}

export default SortingContext;