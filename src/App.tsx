import React, {createContext, useEffect} from "react";
import Content from "./components/Content";
import './main.global.css'
import {Form} from "./components/Form";
import {Table} from "./components/Table";

const initialList = localStorage.getItem('userManagement_list')

export const UsersContext = createContext<any>([]);

const App = () => {
    const [usersList, setUsersList] = React.useState<Array<any>>(initialList ? JSON.parse(initialList) : [])
    useEffect(() => {
        localStorage.setItem('userManagement_list', JSON.stringify(usersList))
    },[usersList])
    return (
        <div>
            <UsersContext.Provider value={{usersList, setUsersList}}>
                <Content>
                    <Form/>
                    <Table/>
                </Content>
            </UsersContext.Provider>
        </div>
    )
}

export default App
