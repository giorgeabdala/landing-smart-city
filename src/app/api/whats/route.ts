import {NextResponse} from "next/server";
import WhatsAppNotificationServiceCodeChat from "@/app/api/infra/WhatsService";
const message = "Parabéns!!! \n" +
    "Sua inscrição para o sorteio de ingressos do tipo Congress para o Smart City Curitiba 2024 foi confirmada.\n \n" +

    'Se você for um dos sorteados, entraremos em contato por aqui. \n \n' +

    "O Smart City Expo Curitiba é o principal evento de cidades inteligentes do Brasil. \n \n" +
    "Com o tema \"Reinventando cidades para todos\", a quinta edição acontecerá nos dias 20, 21 e 22 de março de 2024 no Centro de Eventos Positivo, no Parque Barigui."


export async function POST(req: Request, res: Response) {
        try {
                console.log("/whats/route");
                const body = await req.json();
                console.log("body: ", body);
                const whatsService = new WhatsAppNotificationServiceCodeChat();
                const result = await whatsService.send(body, message);
                if (result.status === 200) return NextResponse.json({message:"OK"});
                return NextResponse.error();
        } catch (e) {
                console.log("Erro: ", e);
                return NextResponse.error();
        }
}