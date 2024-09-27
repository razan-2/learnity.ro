import React, { useContext } from 'react';
import { RulesContext } from '../../../../context/Rules/RulesContext';
// import logo from '../../../assets/logo/logo.svg'

export const Rules = () => {
    const { rules } = useContext(RulesContext);
    return ( 
        <div>
            rules
        </div>
    );
}