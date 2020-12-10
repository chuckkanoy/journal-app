import React from 'react';

// initialize context
const EntryContext = React.createContext({
    entries: []
});

export const EntryProvider = EntryContext.Provider;
export const EntryConsumer = EntryContext.Consumer;

export default EntryContext;