import React from 'react';

interface IColXl3 {
    children: React.ReactNode;
    className?: string;
}

export function Col_Xl_3({ children, className }:IColXl3) {
    return (
        <div className={`${className} col-xl-3`}>
            {children}
        </div>
    );
}

export function Col_Xl_8({ children }:any) {
    return (
        <div className='col-xl-8'>
            {children}
        </div>
    );
}

export function Col_Xl_9({ children, className }:IColXl3) {
    return (
        <div className={`${className} col-xl-9`}>
            {children}
        </div>
    );
}

export function Col_Xl_12({ children }:any) {
    return (
        <div className='col-xl-12'>
            {children}
        </div>
    );
}
