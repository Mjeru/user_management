import React, {FC, PropsWithChildren, useEffect, useState} from "react";
const Content: FC<PropsWithChildren> = ({children}) => {
    const [list,setList] =  useState([]);
    useEffect(()=>{
        const storageItem =  localStorage.getItem('userManagement_list')
        if (storageItem){
            setList(JSON.parse(storageItem))
        }
    },[])
    return (<main>
        {children}
    </main>)
}

export default Content
