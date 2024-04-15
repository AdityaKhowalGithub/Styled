import { Store, registerInDevtools } from "pullstate";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    User,
    AuthError,
} from "firebase/auth";
import { app, auth } from "@/services/firebaseconfig";

interface AuthStoreType {
    isLoggedIn: boolean;
    initialized: boolean;
    user: User | null;
}

export const AuthStore = new Store<AuthStoreType>({
    isLoggedIn: false,
    initialized: false,
    user: null,
});

const unsub = onAuthStateChanged(auth, (user: User | null) => {
    console.log("onAuthStateChange", user);
    AuthStore.update((store) => {
        store.user = user;
        store.isLoggedIn = !!user;
        store.initialized = true;
    });
});


export const appSignIn = async (email: string, password: string): Promise<{ user: User | null; error?: AuthError }> => {
    try {
        const resp = await signInWithEmailAndPassword(auth, email, password);
        AuthStore.update((store) => {
            store.user = resp.user;
            store.isLoggedIn = !!resp.user;
        });
        return { user: auth.currentUser };
    } catch (e) {
        return { user: null, error: e as AuthError };  // Include user: null here
    }
};

export const appSignOut = async (): Promise<{ user: null; error?: AuthError }> => {
    try {
        await signOut(auth);
        AuthStore.update((store) => {
            store.user = null;
            store.isLoggedIn = false;
        });
        return { user: null };
    } catch (e) {
        return { user: null, error: e as AuthError };  // Include user: null here
    }
};

export const appSignUp = async (email: string, password: string, displayName: string): Promise<{ user: User | null; error?: AuthError }> => {
    try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(resp.user, { displayName });
        AuthStore.update((store) => {
            store.user = auth.currentUser;
            store.isLoggedIn = true;
        });
        return { user: auth.currentUser };
    } catch (e) {
        return { user: null, error: e as AuthError };  // Include user: null here
    }
};


// export const appSignIn = async (email: string, password: string): Promise<{ user: User | null; error?: AuthError }> => {
// try {
// const resp = await signInWithEmailAndPassword(auth, email, password);
// AuthStore.update((store) => {
// store.user = resp.user;
// store.isLoggedIn = !!resp.user;
// });
// return { user: auth.currentUser };
// } catch (e) {
// return { error: e as AuthError };
// }
// };

// export const appSignOut = async (): Promise<{ user: null; error?: AuthError }> => {
// try {
// await signOut(auth);
// AuthStore.update((store) => {
// store.user = null;
// store.isLoggedIn = false;
// });
// return { user: null };
// } catch (e) {
// return { error: e as AuthError };
// }
// };

// export const appSignUp = async (email: string, password: string, displayName: string): Promise<{ user: User | null; error?: AuthError }> => {
// try {
// const resp = await createUserWithEmailAndPassword(auth, email, password);
// await updateProfile(resp.user, { displayName });
// AuthStore.update((store) => {
// store.user = auth.currentUser;
// store.isLoggedIn = true;
// });
// return { user: auth.currentUser };
// } catch (e) {
// return { error: e as AuthError };
// }
// };

registerInDevtools({ AuthStore });

