import { useState } from "react"

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    const startLoading = async (fn: () => Promise<void>) => {
        try {
            setIsLoading(true);
            await fn();
        } catch (error) {
            console.error('something went wrong...', error)
        }
        finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        startLoading,
    }
}