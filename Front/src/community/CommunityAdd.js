import {Header} from "../layout/Header";
import main from '../static/game-warrior/css/main.module.css';
import React from "react";
export function CommunityAdd (){
    return (
        <>
            <div className={main['header-fixed']}>
                <Header />
            </div>
        </>
    );
}