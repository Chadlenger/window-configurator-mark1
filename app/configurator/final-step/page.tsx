'use client'

import {useRouter} from 'next/navigation'
import AppForm from '@/components/AppForm'

export default function Step7Page() {
    const router = useRouter()

    return(
        <div className="flex flex-col items-center gap-8">
            <AppForm />
        </div>
    );
}  