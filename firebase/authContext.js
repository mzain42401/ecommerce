import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebase";

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true,
});
const products = [
    {
        name: "Product 21",
        price: 49.99,
        description: "Description for Product 21",
        category:"a"
    },
    {
        name: "Product 22",
        price: 59.99,
        description: "Description for Product 22",
        category:"b"
    },
    {
        name: "Product 23",
        price: 24.99,
        description: "Description for Product 23",
        category:"a"
    },
    {
        name: "Product 24",
        price: 34.99,
        description: "Description for Product 24",
        category:"c"
    },
    {
        name: "Product 25",
        price: 69.99,
        description: "Description for Product 25",
        category:"d"
    },
    {
        name: "Product 26",
        price: 79.99,
        description: "Description for Product 26",
        category:"a"
    },
    {
        name: "Product 27",
        price: 89.99,
        description: "Description for Product 27",
        category:"a"
    },
    {
        name: "Product 28",
        price: 99.99,
        description: "Description for Product 28",
        category:"d"
    },
    {
        name: "Product 29",
        price: 44.99,
        description: "Description for Product 29",
        category:"a"
    },
    {
        name: "Product 30",
        price: 54.99,
        description: "Description for Product 30",
        category:"c"
    },
    {
        name: "Product 31",
        price: 64.99,
        description: "Description for Product 31",
        category:"c"
    },
    {
        name: "Product 32",
        price: 74.99,
        description: "Description for Product 32",
        category:"c"
    },
    {
        name: "Product 33",
        price: 84.99,
        description: "Description for Product 33",
        category:"a"
    },
    {
        name: "Product 34",
        price: 94.99,
        description: "Description for Product 34",
        category:"a"
    },
    {
        name: "Product 35",
        price: 104.99,
        description: "Description for Product 35",
        category:"b"
    },
    {
        name: "Product 36",
        price: 114.99,
        description: "Description for Product 36",
        category:"b"
    },
    {
        name: "Product 37",
        price: 124.99,
        description: "Description for Product 37",
        category:"b"
    },
    {
        name: "Product 38",
        price: 134.99,
        description: "Description for Product 38",
        category:"c"
    },
    {
        name: "Product 39",
        price: 144.99,
        description: "Description for Product 39",
        category:"b"
    },
    {
        name: "Product 40",
        price: 154.99,
        description: "Description for Product 40",
        category:"a"
    }
];



export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const clear = () => {
        setAuthUser(null);
        setIsLoading(false);
    };

    const authStateChanged = async (user) => {
        setIsLoading(true);
        if (!user) {
            clear();
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
        });
        setIsLoading(false);
    };

    const signOut = () => {
        authSignOut(auth).then(() => clear());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        isLoading,
        signOut,
        setAuthUser,
        products
    };
}

export const AuthUserProvider = ({ children }) => {
    const auth = useFirebaseAuth();
    return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);