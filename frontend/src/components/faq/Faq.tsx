import { useState } from 'react'
import { useMyContext } from '../../context/Context'
import PagesTop from '../pagesTop/PagesTop'
import c from './Faq.module.scss'
import Reviews from '../reviews/Reviews'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'

const faqData = [
    {
        questionPL:
            'Czym dokładnie zajmuje się usługa pośrednictwa w najmie nieruchomości?',
        questionEN:
            'What does the real estate rental brokerage service entail?',
        answerPL:
            'Usługa pośrednictwa w najmie polega na zleceniu naszym brokerom poszukiwania nieruchomości do wynajmu, z uwzględnieniem kryteriów klienta. Obejmuje to analizę rynku, prezentację wybranych nieruchomości, negocjacje warunków i cen, a także przygotowanie umowy najmu i sesję zdjęciową nieruchomości.',
        answerEN:
            "The real estate rental brokerage service involves assigning our brokers to search for rental properties based on the client's criteria. This includes market analysis, presentation of selected properties, negotiations of terms and prices, as well as the preparation of the rental agreement and a photo session of the property.",
        id: 1,
    },
    {
        questionPL:
            'Jakie są korzyści z korzystania z usług pośrednictwa w najmie nieruchomości?',
        questionEN:
            'What are the benefits of using real estate rental brokerage services?',
        answerPL:
            'Korzyścią jest oszczędność czasu, minimalizacja ryzyka i profesjonalne wsparcie przez cały proces najmu. Jesteśmy dostępni 24/7, aby pomóc w razie potrzeby.',
        answerEN:
            'The benefits include time savings, risk minimization, and professional support throughout the rental process. We are available 24/7 to assist as needed.',
        id: 2,
    },
    {
        questionPL:
            'Jakie koszty związane są z usługą pośrednictwa w najmie, i jak są one ustalane?',
        questionEN:
            'What are the costs associated with real estate rental brokerage services, and how are they determined?',
        answerPL:
            'Koszty prowizji za usługę pośrednictwa w najmie ustalane są indywidualnie. Prosimy o kontakt z naszym doradcą w celu uzyskania szczegółowych informacji na ten temat.',
        answerEN:
            'The commission costs for real estate rental brokerage services are determined individually. Please contact our advisor for detailed information on this.',
        id: 3,
    },
    {
        questionPL:
            'Dlaczego warto skorzystać z usług pośrednika nieruchomości przy wynajmie?',
        questionEN:
            'Why should one consider using a real estate agent for rentals?',
        answerPL:
            'Nasze biuro oferuje profesjonalne wsparcie na każdym etapie procesu najmu, co pozwala zaoszczędzić czas i minimalizować ryzyko. Jesteśmy dostępni dla klientów 24/7 i służymy wsparciem w różnych aspektach najmu.',
        answerEN:
            'Our office provides professional support at every stage of the rental process, allowing for time savings and risk minimization. We are available to clients 24/7 and provide support in various rental aspects.',
        id: 4,
    },
    {
        questionPL:
            'Jaki jest proces poszukiwania i wynajmu nieruchomości przy współpracy z waszym biurem?',
        questionEN:
            'What is the process of searching for and renting a property when working with your office?',
        answerPL:
            'Proces zaczyna się od analizy rynku i poszukiwania najlepszych opcji, a następnie obejmuje prezentację nieruchomości, negocjacje warunków, przygotowanie umowy najmu i przekazanie mieszkania.',
        answerEN:
            'The process begins with market analysis and searching for the best options, followed by property presentation, negotiation of terms, preparation of the rental agreement, and the handover of the property.',
        id: 5,
    },
    {
        questionPL:
            'Jakie są standardowe warunki umowy najmu, które przygotowujecie dla klientów?',
        questionEN:
            'What are the standard rental agreement terms that you prepare for clients?',
        answerPL:
            'Warunki umowy najmu są dostosowywane do indywidualnych potrzeb klienta, dbając o wygodę obu stron. Wszystkie szczegóły są dokładnie omawiane z klientem.',
        answerEN:
            'Rental agreement terms are tailored to the individual needs of the client, ensuring the convenience of both parties. All details are discussed thoroughly with the client.',
        id: 6,
    },
    {
        questionPL:
            'Czy oferujecie wsparcie w tłumaczeniu dokumentów, organizacji przeprowadzki lub wynajmu okazjonalnego/institutionalnego?',
        questionEN:
            'Do you offer support in document translation, moving organization, or occasional/institutional rentals?',
        answerPL:
            'Tak, jesteśmy w stanie zapewnić wsparcie w tłumaczeniu dokumentów, organizacji przeprowadzki oraz przy wynajmie zarówno okazjonalnym, jak i instytucjonalnym, w razie potrzeby.',
        answerEN:
            'Yes, we are able to provide support in document translation, moving organization, and for both occasional and institutional rentals, if necessary.',
        id: 7,
    },
    {
        questionPL: 'Jestcie dostępni 24/7 w razie pilnych sytuacji?',
        questionEN: 'Are you available 24/7 in case of emergencies?',
        answerPL:
            'Tak, jesteśmy dostępni dla naszych klientów 24 godziny na dobę, 7 dni w tygodniu, aby służyć wsparciem w przypadku pilnych sytuacji.',
        answerEN:
            'Yes, we are available to our clients 24 hours a day, 7 days a week, to provide support in case of emergencies.',
        id: 8,
    },
    {
        questionPL:
            'Czy prowizja za usługę pośrednictwa jest negocjowalna, czy ma stałą stawkę?',
        questionEN:
            'Is the commission for brokerage services negotiable, or does it have a fixed rate?',
        answerPL:
            'Prowizja za usługę pośrednictwa jest ustalana indywidualnie i może być negocjowalna w zależności od konkretnej transakcji.',
        answerEN:
            'The commission for brokerage services is determined individually and can be negotiable depending on the specific transaction.',
        id: 9,
    },
    {
        questionPL:
            'Na czym dokładnie polega usługa pośrednictwa w zakupie nieruchomości?',
        questionEN:
            'What exactly does the real estate purchase brokerage service entail?',
        answerPL:
            'Usługa pośrednictwa w zakupie polega na pomocy klientom w znalezieniu najkorzystniejszych ofert nieruchomości, zarówno na rynku wtórnym, jak i pierwotnym. Pomagamy negocjować ceny, doradzamy przy całym procesie zakupu oraz oferujemy obsługę pozakupową.',
        answerEN:
            'The real estate purchase brokerage service involves assisting clients in finding the most advantageous real estate offers, both in the secondary and primary markets. We help negotiate prices, provide advice throughout the purchase process, and offer post-purchase support.',
        id: 10,
    },
    {
        questionPL:
            'Jakie są korzyści niesie ze sobą korzystanie z usług pośrednictwa w zakupie nieruchomości?',
        questionEN:
            'What are the benefits of using real estate purchase brokerage services?',
        answerPL:
            'Korzyścią jest oszczędność czasu, dostęp do atrakcyjnych ofert, profesjonalne doradztwo oraz obsługa pozakupowa, takie jak pomoc w znalezieniu ekipy remontowej czy architekta wnętrz.',
        answerEN:
            'The benefits include time savings, access to attractive offers, professional advice, and post-purchase services, such as assistance in finding a renovation team or interior architect.',
        id: 11,
    },
    {
        questionPL:
            'Jakie koszty usługi pośrednictwa w zakupie nieruchomości, i jak są one ustalane?',
        questionEN:
            'What are the costs of real estate purchase brokerage services, and how are they determined?',
        answerPL:
            'Koszty prowizji za usługę pośrednictwa w zakupie ustalane są indywidualnie. Prosimy o kontakt z naszym doradcą w celu uzyskania szczegółowych informacji na ten temat.',
        answerEN:
            'The commission costs for real estate purchase brokerage services are determined individually. Please contact our advisor for detailed information on this.',
        id: 12,
    },
    {
        questionPL:
            'W jaki sposób różnicie się od innych biur nieruchomości w promocji ofert?',
        questionEN:
            'How do you differ from other real estate agencies in promoting offers?',
        answerPL:
            'Nasze biuro działa efektywnie, promując oferty na różnych platformach, w tym na Instagramie, Facebooku i Telegramie. Dzięki naszemu doświadczeniu i bazie klientów możemy pomóc znaleźć najlepsze rozwiązanie dla Ciebie.',
        answerEN:
            'Our office operates efficiently by promoting offers on various platforms, including Instagram, Facebook, and Telegram. Thanks to our experience and client base, we can help you find the best solution.',
        id: 13,
    },
    {
        questionPL:
            'Czy specjalizujecie się w rynku wtórnym, pierwotnym czy też oferujecie oferty offmarket?',
        questionEN:
            'Do you specialize in the secondary market, primary market, or do you also offer off-market listings?',
        answerPL:
            'Nasze biuro działa zarówno na rynku wtórnym, jak i pierwotnym. Dodatkowo, mamy dostęp do ofert offmarket, które mogą być interesujące dla naszych klientów.',
        answerEN:
            'Our office operates in both the secondary and primary markets. Additionally, we have access to off-market listings that may be of interest to our clients.',
        id: 14,
    },
    {
        questionPL:
            'Jakie są kroki podejmowane przy współpracy z wami przy zakupie nieruchomości?',
        questionEN:
            'What steps are taken when working with you for property purchases?',
        answerPL:
            'Proces zakupu zaczyna się od analizy potrzeb klienta, poszukiwania ofert, negocjacji, a kończy się obsługą pozakupową, taką jak pomoc w organizacji przeprowadzki czy remontu.',
        answerEN:
            "The purchase process begins with an analysis of the client's needs, searching for offers, negotiation, and ends with post-purchase support, such as assistance in organizing a move or renovation.",
        id: 15,
    },
    {
        questionPL:
            'Czy pomagacie klientom w znalezieniu ekipy remontowej lub architekta wnętrz po zakupie nieruchomości?',
        questionEN:
            'Do you assist clients in finding a renovation team or interior architect after property purchase?',
        answerPL:
            'Tak, jesteśmy w stanie pomóc naszym klientom w znalezieniu odpowiednich specjalistów, takich jak ekipa remontowa czy architekt wnętrz, aby ułatwić proces po zakupie nieruchomości.',
        answerEN:
            'Yes, we can help our clients find suitable professionals, such as a renovation team or interior architect, to facilitate the post-purchase process.',
        id: 16,
    },
    {
        questionPL:
            'Czym jest zarządzanie wynajmem hybrydowym i jakie korzyści niesie?',
        questionEN:
            'What is hybrid rental management, and what are its benefits?',
        answerPL:
            'Zarządzanie wynajmem hybrydowym polega na jednoczesnym wynajmie mieszkania w trybie krótko- i długoterminowym, maksymalizując zyski. Korzyścią jest minimalizacja ryzyka pustostanów i profesjonalne zarządzanie nieruchomością.',
        answerEN:
            'Hybrid rental management involves renting a property in both short-term and long-term modes simultaneously, maximizing profits. The benefit is minimizing vacancy risks and professional property management.',
        id: 17,
    },
    {
        questionPL:
            'Dlaczego warto rozważyć zarządzanie wynajmem hybrydowym w przypadku inwestycji?',
        questionEN: 'Why consider hybrid rental management for investments?',
        answerPL:
            'Zarządzanie wynajmem hybrydowym pozwala osiągnąć największy zysk z inwestycji, minimalizując ryzyko pustostanów i dbając o nieruchomość.',
        answerEN:
            'Hybrid rental management allows for the highest profit from investments, minimizing vacancy risks and taking care of the property.',
        id: 18,
    },
    {
        questionPL:
            'Jakie narzędzia analityczne wykorzystujecie do maksymalizacji zysków z wynajmu?',
        questionEN:
            'What analytical tools do you use to maximize rental profits?',
        answerPL:
            'Dzięki specjalistycznym narzędziom analitycznym jesteśmy w stanie dostosować strategię wynajmu do danego okresu, obłożenia i zainteresowania, co pozwala na maksymalizację zysków.',
        answerEN:
            'With specialized analytical tools, we can tailor the rental strategy to the specific period, demand, and interest, allowing for profit maximization.',
        id: 19,
    },
    {
        questionPL:
            'Jak minimalizujecie ryzyko pustostanów przy zarządzaniu wynajmem hybrydowym?',
        questionEN:
            'How do you minimize vacancy risks in hybrid rental management?',
        answerPL:
            'Nasze narzędzia analityczne pomagają dostosować wynajem do zmieniających się warunków rynkowych, minimalizując ryzyko pustostanów.',
        answerEN:
            'Our analytical tools help adapt the rental to changing market conditions, minimizing vacancy risks.',
        id: 20,
    },
    {
        questionPL:
            'Czy każde mieszkanie nadaje się do tego trybu najmu, czy jest jakiś wybór kryteriów?',
        questionEN:
            'Is every apartment suitable for this rental mode, or are there specific criteria?',
        answerPL:
            'Każde mieszkanie nadaje się do trybu wynajmu hybrydowego, i jest to opcja dostępna dla każdego.',
        answerEN:
            'Every apartment is suitable for hybrid rental, and this option is available to everyone.',
        id: 21,
    },
]

const Faq = () => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const { data } = useMyContext()

    const onItemClick = (id: number) => {
        if (activeItem === id) {
            setActiveItem(0)
        } else {
            setActiveItem(id)
        }
    }
    return (
        <div className={c.faq}>
            <PagesTop title="FAQ" />
            <div className={c.faq__body}>
                {faqData.map((item) => (
                    <div className={c.faq__item} key={item.id}>
                        <button
                            className={
                                activeItem === item.id
                                    ? `${c.faq__title} ${c.active}`
                                    : c.faq__title
                            }
                            onClick={() => onItemClick(item.id)}
                        >
                            {data === 'pl' ? item.questionPL : item.questionEN}
                        </button>
                        <p
                            className={
                                activeItem === item.id
                                    ? `${c.faq__answer} ${c.active}`
                                    : c.faq__answer
                            }
                        >
                            {data === 'pl' ? item.answerPL : item.answerEN}
                        </p>
                    </div>
                ))}
            </div>
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Faq
