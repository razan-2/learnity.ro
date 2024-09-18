import React, { createContext, useState } from 'react';

export const RulesContext = createContext();

export const RulesContextProvider = (props) => {
    const [rules, useRules] = useState([
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit gravida metus magnis habitasse habitant."
    ]);

    return ( 
        <RulesContext.Provider value={{rules}}>
            {props.children}
        </RulesContext.Provider>
    );
}