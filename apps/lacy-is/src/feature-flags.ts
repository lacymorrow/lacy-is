import { unstable_flag as flag } from '@vercel/flags/next';

export const isLive = flag({
    key: 'is-live',
    decide: () => false,
});

export const precomputeFlags = [isLive] as const;
