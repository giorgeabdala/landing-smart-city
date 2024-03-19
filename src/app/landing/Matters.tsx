import Area from "@/app/components/Area";
import CarouselFlowBite from "@/app/components/Carousel";


export default function Matters() {
    return (
       <Area className="flex flex-col items-center bg-background-primary">
           <div className=" flex flex-col font-body font-bold items-center my-20 leading-loose
           ">

                   <p className="md:text-xl text-green-500">SMART CITY EXPO CURITIBA</p>
                   <p className="text-base  text-zinc-100">TÓPICOS E ASSUNTOS </p>
           </div>
           <div className="mt-10 mb-36">
                  <CarouselFlowBite  />
              </div>
        </Area>
    )
}