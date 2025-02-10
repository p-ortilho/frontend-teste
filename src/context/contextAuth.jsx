import { createContext, useState } from "react";

export const ContextAuth = createContext();
ContextAuth.displayName = "ContextAuth";

const ContextAuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <ContextAuth.Provider value={{ user, setUser }}>
            {children}
        </ContextAuth.Provider>
    );
};

export default ContextAuthProvider;