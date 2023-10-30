import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export default function LoginPanel(){
    const [currentUser, setCurrentUser] = useState(null);
    return(
        <>
            <CurrentUserContext.Provider value={{
                currentUser,
                setCurrentUser
            }}>
                <Form />
            </CurrentUserContext.Provider>
        </>
    );
}

function Form({children}){
    return(
        <Panel
            title="Welcome"
        >
        <LoginButton />
        </Panel>
    )
}

function LoginButton(){
    const{
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    if(currentUser!==null){
        return <p>You logged in as {currentUser.name}</p>
    }

    return(
        <Button onClick={()=> setCurrentUser({name:'Advika'})}>
            Login as Advika
        </Button>
    )
}

function Panel({title, children}){
    return(
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({onClick, children}){
    return(
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
}
/** Updating an object via context
 * In this example, there is a currentUser state variable which holds an object.
 * You combine { currentUser, setCurrentUser } into a single object
 * and pass it down through the context inside the value={}. 
 * This lets any component below, such as LoginButton, read both currentUser and setCurrentUser,
 * and then call setCurrentUser when needed.
 */