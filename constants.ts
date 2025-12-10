
import { BusinessInfo, Review, Service } from './types';

export const BUSINESS_DATA: BusinessInfo = {
  name: "Studio Fisio&Pilates",
  address: "R. Santa Fé, 793 - Santa Fe, Gravataí - RS, 94060-100",
  phone: "(51) 99966-0344",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Studio+Fisio%26Pilates+Gravatai",
  instagram: "https://www.instagram.com/studiofisioepilatesgravatai/",
  facebook: "https://www.facebook.com/studiodepilatesketritexeira/?locale=pt_BR",
  hours: {
    monday: "14:00 - 19:00",
    tuesday: "14:00 - 20:30",
    wednesday: "14:00 - 20:30",
    thursday: "14:00 - 20:30",
    friday: "08:00 - 20:30",
    saturday: "09:00 - 12:00",
    sunday: "Fechado"
  }
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Luiz Fernando Ruffoni',
    rating: 5,
    text: "Profissionais excelentes! Fui em busca de aliviar minha dor ciática e descobri no pilates um tratamento completo para todas as limitações do meu corpo!!! Recomendo muito!!!",
    timeAgo: "6 meses atrás"
  },
  {
    id: '2',
    author: 'Cleber Camejo Vega',
    rating: 5,
    text: "Ótimo atendimento, profissionais capacitados de grande sabedoria!! Sou portador de esclerose multipla , e estou sendo ajudado neste estúdio. Recomendo.",
    timeAgo: "2 anos atrás"
  },
  {
    id: '3',
    author: 'Mayara Lenarth',
    rating: 5,
    text: "Local Guide · 4 avaliações",
    timeAgo: "Antigo"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "ketri",
    title: "Dra. Ketri - Fisioterapeuta & CEO",
    desc: "Com 15 anos de experiência, especializada em reabilitação com Pilates e patologias da coluna. Atendimento humanizado e focado em traumato-ortopedia.",
    longDescription: "A Dra. Ketri é a alma do Studio Fisio&Pilates. Com uma carreira sólida de 15 anos, ela desenvolveu uma metodologia própria que une a precisão técnica da fisioterapia traumato-ortopédica com a fluidez e controle do Pilates. Seu foco principal é o tratamento de patologias complexas da coluna vertebral (como hérnias e escolioses) e a gestão da dor crônica, sempre priorizando um olhar humano e acolhedor para cada paciente.",
    img: "https://i.ibb.co/35TVbsN7/Conhe-a-a-equipe-que-cuida-de-voc-com-dedica-o-profissionalismo-e-carinho-No-Studio-Fisio-webp.png",
    imageFit: "object-contain p-6",
    iconKey: "stethoscope"
  },
  {
    id: "eduarda",
    title: "Eduarda - Instrutora de Pilates",
    desc: "Acadêmica de Fisioterapia, atualmente no 9º semestre. Instrutora de Pilates, tem como objetivo se especializar em Traumato-Ortopedia. Apaixonada pelo cuidado com o próximo.",
    longDescription: "Eduarda representa a nova geração da fisioterapia, trazendo o frescor do conhecimento acadêmico atualizado (9º semestre) combinado com a prática intensa do Pilates. Sua abordagem é caracterizada pela empatia e pela busca constante por especialização em Traumato-Ortopedia. Ela dedica-se a entender as necessidades individuais de cada aluno, adaptando os exercícios para garantir segurança e evolução constante.",
    img: "https://i.ibb.co/67ZTwc3w/Conhe-a-a-equipe-que-cuida-de-voc-com-dedica-o-profissionalismo-e-carinho-No-Studio-Fisio-2.png",
    imageFit: "object-contain p-6",
    iconKey: "graduation"
  },
  {
    id: "jesse",
    title: "Jesse - Instrutor de Pilates",
    desc: "Estudante de fisioterapia e apaixonado por esportes. Foco voltado para a especialização em traumato-ortopedia, reabilitação e desempenho funcional.",
    longDescription: "A paixão de Jesse pelos esportes foi o combustível para sua jornada na fisioterapia. Como instrutor, ele aplica princípios de desempenho funcional e biomecânica para ajudar não apenas na reabilitação, mas na melhoria da performance física dos alunos. Seu objetivo é garantir que cada movimento seja executado com precisão, prevenindo lesões e fortalecendo o corpo para os desafios do dia a dia.",
    img: "https://i.ibb.co/mCWfchDB/Conhe-a-a-equipe-que-cuida-de-voc-com-dedica-o-profissionalismo-e-carinho-No-Studio-Fisio-3.png",
    imageFit: "object-contain p-6",
    iconKey: "dumbbell"
  },
  {
    id: "mariana",
    title: "Mariana - Instrutora & Fisioterapeuta",
    desc: "Fisioterapeuta formada desde 2021, com formação em Pilates Solo, Bola e Aparelhos. Atua com foco em reabilitação e condicionamento físico.",
    longDescription: "Mariana traz a experiência clínica de quem atua profissionalmente desde 2021. Com domínio completo das modalidades de Pilates (Solo, Bola e Aparelhos), ela constrói aulas dinâmicas que desafiam o corpo na medida certa. Seu trabalho foca no restabelecimento da função física e na promoção de um estilo de vida saudável através do movimento consciente.",
    img: "https://i.ibb.co/DPfv4bjB/523007026-18522668248035680-2308895577425850493-n-webp-1.png",
    imageFit: "object-contain p-16",
    iconKey: "activity"
  },
  {
    id: "pilates-clinico",
    title: "Pilates Clínico",
    desc: "Reabilitação e condicionamento físico focados no controle postural, estabilização da coluna e alívio de dores crônicas.",
    longDescription: "O Pilates Clínico é uma modalidade terapêutica focada na reabilitação de patologias e na correção postural. Diferente da prática convencional, os exercícios são adaptados para respeitar as limitações de cada paciente, visando o fortalecimento do 'Core' (centro de força), a estabilização da coluna vertebral e o alívio de dores crônicas. É a escolha ideal para quem busca recuperar a funcionalidade do corpo de forma segura e eficaz.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop&fm=webp",
    iconKey: "heart-pulse"
  },
  {
    id: "gestantes",
    title: "Pilates para Gestantes",
    desc: "Exercícios seguros e adaptados para fortalecer o corpo, aliviar dores e preparar para o parto.",
    longDescription: "O Pilates para Gestantes é um acompanhamento especializado que visa promover saúde e bem-estar durante toda a gravidez. Através de exercícios de baixo impacto e específicos para cada trimestre, trabalhamos o fortalecimento do assoalho pélvico, o alívio de dores na coluna, a melhora da circulação e o controle respiratório. É a preparação ideal para um parto mais tranquilo e uma recuperação pós-parto acelerada.",
    img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&fm=webp",
    iconKey: "baby"
  },
  {
    id: "rpg",
    title: "Reeducação Postural (RPG)",
    desc: "Alinhe sua coluna e elimine tensões musculares globais. Ideal para quem trabalha muito tempo sentado.",
    longDescription: "A Reeducação Postural Global (RPG) é um método fisioterapêutico revolucionário que não trata apenas a dor localizada, mas busca a causa do problema através do reequilíbrio das cadeias musculares. Nossas sessões são individuais e focadas em alongamentos posturais ativos, corrigindo desvios, melhorando a respiração e eliminando tensões profundas causadas por má postura ou estresse.",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2094&auto=format&fit=crop&fm=webp",
    iconKey: "scan-person"
  },
  {
    id: "manual",
    title: "Terapias Manuais",
    desc: "Alívio imediato de tensões e melhora da circulação através de massoterapia e liberação miofascial.",
    longDescription: "Nossas Terapias Manuais envolvem um conjunto de técnicas especializadas como Liberação Miofascial, Massagem Terapêutica e Mobilização Articular. Estas técnicas são essenciais para soltar a musculatura travada, melhorar a circulação sanguínea, reduzir o estresse e preparar o corpo para o movimento. É o complemento perfeito para quem sofre de dores agudas ou rigidez muscular excessiva.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&fm=webp",
    iconKey: "hand-heart"
  }
];

export const SYSTEM_INSTRUCTION = `Você é a assistente virtual do Studio Fisio&Pilates.
Use as seguintes informações comerciais para responder dúvidas dos clientes:

Nome: ${BUSINESS_DATA.name}
Endereço: ${BUSINESS_DATA.address}
Telefone: ${BUSINESS_DATA.phone}
Instagram: ${BUSINESS_DATA.instagram}
Horários:
Segunda: ${BUSINESS_DATA.hours.monday}
Terça: ${BUSINESS_DATA.hours.tuesday}
Quarta: ${BUSINESS_DATA.hours.wednesday}
Quinta: ${BUSINESS_DATA.hours.thursday}
Sexta: ${BUSINESS_DATA.hours.friday}
Sábado: ${BUSINESS_DATA.hours.saturday}
Domingo: ${BUSINESS_DATA.hours.sunday}

Serviços: Pilates Clínico, Fisioterapia Especializada, Reeducação Postural (RPG).
Foco em reabilitação, dor crônica, ciática e bem-estar.

Diretrizes:
- Seja educada, acolhedora e profissional.
- Responda perguntas sobre localização, horários e serviços.
- Para agendamentos, peça para entrar em contato pelo WhatsApp/Telefone: ${BUSINESS_DATA.phone}.
- Se não souber a resposta, peça para ligarem para o estúdio.
`;