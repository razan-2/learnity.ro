import React, { createContext, useState } from 'react';

export const RulesContext = createContext();

export const RulesContextProvider = (props) => {
    const [rules, useRules] = useState([
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
        "Lorem ipsum odor amet, consectetuer efadc adipiscing elit. Hendrerit gravida metus magnis habitasse habitant.",
        "Lorem ipsum odor amet, consectetuer ewoafudb adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
        "Lorem ipsum odor amet, consectetuer ewildbvl adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
        "Lorem ipsum odor amet, consectetuer cica adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
        "Lorem ipsum odor amet, consectetuer ewdgsv adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
        "Lorem ipsum odor amet, consectetuer rdvcae adipiscing elit. Fusce est himenaeos porta eleifend orci enim cursus.",
    ]);

    return ( 
        <RulesContext.Provider value={{rules}}>
            {props.children}
        </RulesContext.Provider>
    );
}