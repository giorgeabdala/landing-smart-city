import Area from "@/app/components/Area";
import Image from 'next/image'



export default function Logo() {
    return (
        <Area className="bg-transparent">
            <div className="flex flex-col items-center justify-center ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <div className="flex items-center mt-6 justify-center ">
                    <Image className="rounded-2xl" src="/photos/dotSmart.jpeg"
                           alt="logotipo da comunidade Polkadot Brasil na Smart City" width={600} height={600}/>
                </div>
                <h1 className="text-2xl sm:text-3xl mt-12 font-bold text-white font-title">POLKADOT BRASIL</h1>
            </div>

        </Area>
    )
}