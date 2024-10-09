// components/BootstrapLoader.js
'use client'
import { useEffect } from 'react';

const BootstrapLoader = () => {
    useEffect(() => {
        // Import Bootstrap JavaScript only in the client-side
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Bootstrap) => {
            // You can use Bootstrap here if needed 
            return (Bootstrap)
        });
    }, []);

    return null;
};

export default BootstrapLoader;
