import { useCallback } from 'react';
import { toast } from 'sonner';

interface SnackbarConfig {
    variant?: string;
    isClosable?: boolean;
    description?: string;
    color?: string;
    // ...other Sonner-specific props
    onCloseComplete?: () => void;
}
export type ToastTypes = 'normal' | 'action' | 'success' | 'info' | 'warning' | 'error' | 'loading';

export default function useControl() {
    const showSnackbar = useCallback(
        (title: string, status: ToastTypes = 'success', config: SnackbarConfig = {}) => {
            const defaultConfig = {
                variant: 'info',
                isClosable: true,
            };
            const mergedConfig = { ...defaultConfig, ...config };
            // Call appropriate toast method based on status
            switch (status) {
                case 'success':
                    toast.success(title, mergedConfig);
                    break;
                case 'info':
                    toast.info(title, mergedConfig);
                    break;
                case 'warning':
                    toast.warning(title, mergedConfig);
                    break;
                case 'error':
                    toast.error(title, mergedConfig);
                    break;
                default:
                    toast.message(title, mergedConfig); // Use generic message for other cases
                    break;
            }
        },
        []
    );

    return { showSnackbar };
}
