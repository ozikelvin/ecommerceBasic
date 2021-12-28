import {useContext} from 'react';
import {ItemContext} from './context';

export const useItem = ()=>{
    return useContext(ItemContext)
}