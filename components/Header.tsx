import Image from 'next/image'
import PriceDisplay from './PriceDisplay'

export default function Header(){
    return(
        <header className="bg-white dark:bg-black shadow-lg">
            <div className="max-w-3xl mx-auto flex items-center px-4 py-5">
                <div className="flex-1 flex justify-start ">
                    <Image 
                        src="/images/logo.svg" 
                        alt="Logo Thomas Concept" 
                        width={360} 
                        height={120} 
                        priority={true}
                        className="-translate-x-1/2 translate-y-1/32" 
                    />
                </div>
                <div className="flex-1 flex justify-end">
                    <PriceDisplay />
                </div>
            </div>
        </header>
    );
}