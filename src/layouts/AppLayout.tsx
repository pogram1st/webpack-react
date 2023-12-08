import React, {FC} from 'react'
import {Outlet} from "react-router-dom";
import {Header} from "@/components/Header/Header";

export const AppLayout: FC = () => {
    return (
        <div className={'app-layout'}>
            <Header />
            <Outlet />
        </div>
    );
};