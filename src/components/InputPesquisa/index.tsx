import React from "react";

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import './style.css';

export default function InputPesquisa(){
    return(
        <div className="pesquisar">
            <InputBase
                placeholder="Pesquisar"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    )
}