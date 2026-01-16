'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SnapSectionProps {
    children: React.ReactNode;
    className?: string;
    viewportAmount?: number;
    noAnimation?: boolean;
}

export default function SnapSection({
    children,
    className,
    viewportAmount = 0.5,
    noAnimation = false,
}: SnapSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: viewportAmount, once: false });

    return (
        <section
            ref={ref}
            className={cn(
                'snap-start snap-always w-full min-h-screen relative flex items-center justify-center overflow-hidden',
                className
            )}
        >
            <motion.div
                initial={noAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={noAnimation ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </section>
    );
}
