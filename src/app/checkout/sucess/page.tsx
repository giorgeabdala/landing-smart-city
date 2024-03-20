import Area from "@/app/components/Area";
import Image from 'next/image'



export default function checkout() {
    return (
        <Area className="bg-background-secondary h-screen">
            <div className="flex flex-col items-center justify-center  ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/logo_transparent.png" alt="logotipo da comunidade Polkadot Brasil" width={500} height={500} />
                <h1 className="text-2xl font-bold  font-title text-polkadot-rose md:text-4xl">POLKADOT BRASIL</h1>
            </div>
            <div className="flex flex-col font-body items-center font-black text-justify mt-20 gap-8 text-xl text-white leading-loose">
                <p>PARABÉNS!!!</p>

                <div className="font-normal">

                    </div>
                    <div>
                       Você efetuou seu cadastro com sucesso.
                        <p>Enviamos uma mensagem no WhatsApp com um código de retirada. </p>
                        <p>Para retirar seus brindes, apresente o código de retirad no stand da Polkadot Brasil.</p>
                    </div>

            </div>

        </Area>
    )
}
