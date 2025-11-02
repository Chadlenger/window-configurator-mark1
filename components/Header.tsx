import Image from 'next/image'

export default function Header(){
    return(
        <header className="bg-white dark:bg-black shadow-lg">
            <div className="max-w-3xl mx-auto px-4 py-6">
                <Image 
                src="/images/logo.png" 
                alt="Logo Thomas Concept" 
                width={220} height={120} 
                priority={true}
                className="-translate-x-1/2 translate-y-1/32 w-1/2 max-w-[330px]" />
            </div>
        </header>
    );
}