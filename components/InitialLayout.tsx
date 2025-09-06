import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout(){

    const segments = useSegments()
    const router = useRouter()

    useEffect(()=> {
        const isAuthScreen = segments[0] === "(auth)"

        if (isAuthScreen) {
            router.replace("/(auth)/login")
        }
    }, [segments])

    return (
        <Stack screenOptions={{headerShown: false}} />
    )

}