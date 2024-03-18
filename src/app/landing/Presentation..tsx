import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import Link from "next/link";

interface PresentationProps {
    className?: string
}


export default function Presentation(props: PresentationProps) {
    return (
        <Area className="bg-transparent">
            <div id="start" className={`flex flex-col items-center justify-center leading-loose
            text-2xl text-white font-title  gap-8`}>
                <h2 className="text-zinc-400">SMARTCITY CURITIBA 2024</h2>
                <h2>20 a 22 de Março</h2>
                <div className="flex flex-col text-center  gap-4 font-body">
                    <p>Preparado para mergulhar em um universo de tecnologia e inovação?</p>
                    <p>Garanta aqui seu ingresso para o Smart City Curitiba 2024, um evento essencial para aqueles interessados no futuro das cidades inteligentes!🚀</p>
                </div>


                <Link href="#ticket">
                <ButtonDefault className="mb-10" text={"Garanta seu ingresso"} />
                </Link>




                </div>


        </Area>
    )

}