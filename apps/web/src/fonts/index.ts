import localFont from 'next/font/local';
import { Cairo } from 'next/font/google';

export const inter = Cairo({
    subsets: ['latin'],
    display: 'swap',
});

export const english = localFont({
    src: [
        {
            path: './Proxima-Nova-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Proxima-Nova-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Proxima-Nova-Bold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
});
