import { useState } from 'react'
import { useMyContext } from '../../context/Context'
import PagesTop from '../pagesTop/PagesTop'
import c from './Offers.module.scss'
import Steps from './steps/Steps'
import Reviews from '../reviews/Reviews'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const links = [
    {
        namePL: 'zarządzanie',
        nameEN: 'managing',
        id: 1,
    },
    {
        namePL: 'sprzedaż',
        nameEN: 'selling',
        id: 2,
    },
    {
        namePL: 'zakup',
        nameEN: 'purchase',
        id: 3,
    },
    {
        namePL: 'najem',
        nameEN: 'leasy',
        id: 4,
    },
    {
        namePL: 'wynajem',
        nameEN: 'rental',
        id: 5,
    },
]

const offersData = [
    {
        titlePL: 'zarzązanie najmem hybrydowym',
        titleEN: 'Hybrid rental management',
        textPL: 'Zarzadzanie wynajmem hybrydowym- jes to nasze know-how o ile opcja najbardziej korzystna w przypadku stopy zwrotu z inwestycji. Polega ona na jednoczesnym wynajmie mieszkania w trybie krótkoterminowym oraz dlugoterminowym w zaleznośći od okresu, oblozenia oraz zainteresowania. Dzieki spawnie dostosowanym narzędziom analitycznym zapewniamy największy zysk z wynajmu, minimalizujemy mozliwość pustostanów oraz dbamy o mieszkanie. Kazde mieszkanie nadaje się do takiego trybu najmu więc kazdy może zacząc wspólprace z nami. Zaczynamy oczywiści od przygotowania mieszkania, nasi specjalisci od wyposdazenia przygotują liste zakupów niezbędnych do wyposazenia mieszkania tak aby generowala największy zysk. Po czym zrobimy sesje zdjeciowa i niezwlocznie zaczniemy dzialać z ofertą.',
        textEN: 'Hybrid rental management - this is our know-how and is the most advantageous option in terms of the rate of return on investment. It involves renting an apartment simultaneously on a short-term and long-term basis, depending on the period, occupancy and interest. Thanks to our customized analytical tools, we ensure the highest rental profit, minimize the possibility of vacancies and take care of the apartment. Every apartment is suitable for this type of rental, so anyone can start cooperation with us. We start, of course, with preparing the apartment; our furnishing specialists will prepare a shopping list necessary to equip the apartment so that it generates the greatest profit. Then we will do a photo session and immediately start working with the offer.',
        id: 1,
        stepsPL: [
            {
                id: 1,
                title: 'Podpisanie umowy:',
                text: 'Podpisanie umowy najmu to pierwszy krok w formalizacji procesu wynajmu nieruchomości. Umowa określa prawa i obowiązki zarówno najemcy, jak i wynajmującego. Nasz doświadczony zespół prawników zadba o to, aby umowa była klarowna, zgodna z obowiązującymi przepisami i chroniła interesy obu stron.',
            },
            {
                id: 2,
                title: 'Przekazanie mieszkania:',
                text: 'Nasz proces przekazania mieszkania jest dokładny i staranny. Zapewniamy, że nieruchomość jest w doskonałym stanie przed przekazaniem jej najemcy. Wszystkie niezbędne formalności i dokumenty są omówione, a klucze przekazane z należytą starannością.',
            },
            {
                id: 3,
                title: 'Doposażenie mieszkania:',
                text: 'Dbamy o to, aby mieszkanie spełniało standardy najwyższej jakości. W miarę potrzeb i uzgodnień, dokonujemy doposażenia mieszkania, zapewniając komfort i wygodę dla najemcy.',
            },
            {
                id: 4,
                title: 'Sesja zdjęciowa:',
                text: 'W celu promocji nieruchomości przeprowadzamy profesjonalną sesję zdjęciową. Nasz zespół fotografów i stylistów zadba o to, aby nieruchomość była przedstawiona w najlepszym świetle, co zwiększa atrakcyjność oferty.',
            },
            {
                id: 5,
                title: 'Przygotowanie oferty:',
                text: 'Każda oferta wynajmu jest starannie przygotowywana. Wszystkie szczegóły dotyczące nieruchomości, w tym informacje o lokalizacji, metrażu, udogodnieniach i cenach, są dokładnie udokumentowane, aby ułatwić potencjalnym najemcom podjęcie decyzji.',
            },
            {
                id: 6,
                title: 'Wystawienie oferty:',
                text: 'Nasze oferty są wystawiane na różnych platformach, aby dotrzeć do jak największej liczby zainteresowanych najemców. Współpracujemy z renomowanymi serwisami nieruchomości oraz wykorzystujemy naszą stronę internetową, aby maksymalizować widoczność oferty.',
            },
            {
                id: 7,
                title: 'Działania marketingowe:',
                text: 'Nasz zespół marketingowy podejmuje szeroki zakres działań, aby promować nieruchomość. Kampanie reklamowe, media społecznościowe i inne strategie marketingowe są stosowane w celu przyciągnięcia uwagi potencjalnych najemców.',
            },
            {
                id: 8,
                title: 'Take profit:',
                text: 'Naszym celem jest zapewnienie opłacalności inwestycji dla naszych klientów. Działamy w sposób, który pozwala maksymalizować zyski z wynajmu nieruchomości. Nasze narzędzia i doświadczenie pozwalają osiągnąć "take profit" zgodnie z oczekiwaniami klienta.',
            },
        ],
        stepsEN: [
            {
                id: 1,
                title: 'Signing the Agreement:',
                text: 'Signing a lease agreement is the first step in formalizing the property rental process. The agreement specifies the rights and obligations of both the tenant and the landlord. Our experienced team of lawyers ensures that the contract is clear, compliant with current regulations, and protects the interests of both parties.',
            },
            {
                id: 2,
                title: 'Property Handover:',
                text: 'Our property handover process is thorough and careful. We ensure that the property is in excellent condition before handing it over to the tenant. All necessary formalities and documents are discussed, and the keys are handed over with due diligence.',
            },
            {
                id: 3,
                title: 'Property Enhancement:',
                text: 'We ensure that the property meets the highest quality standards. As needed and agreed, we enhance the property to provide comfort and convenience for the tenant.',
            },
            {
                id: 4,
                title: 'Photo Session:',
                text: 'To promote the property, we conduct a professional photo session. Our team of photographers and stylists ensures that the property is presented in the best light, increasing its attractiveness.',
            },
            {
                id: 5,
                title: 'Preparing the Offer:',
                text: 'Every rental offer is carefully prepared. All details regarding the property, including information about location, square footage, amenities, and prices, are thoroughly documented to facilitate decision-making for potential tenants.',
            },
            {
                id: 6,
                title: 'Listing the Offer:',
                text: 'Our offers are listed on various platforms to reach as many interested tenants as possible. We collaborate with reputable real estate services and utilize our website to maximize offer visibility.',
            },
            {
                id: 7,
                title: 'Marketing Actions:',
                text: 'Our marketing team undertakes a wide range of actions to promote the property. Advertising campaigns, social media, and other marketing strategies are used to attract the attention of potential tenants.',
            },
            {
                id: 8,
                title: 'Take Profit:',
                text: 'Our goal is to ensure the profitability of investments for our clients. We operate in a way that allows for maximizing rental property profits, meeting client expectations.',
            },
        ],
        img: './img/offer_1.png',
    },
    {
        titlePL: 'Posrednictwo spszedazy',
        titleEN: 'Real Estate Sales Mediation',
        textPL: 'Posrednictwo spszedazy-  usluga polega na zmaksymalizowaniu zysku ze sprzedazy nieruchomośći. Proces zaczyna się od home stagingu w mieszkaniu w celu zrobienia jakościowej sesji zdjęciowej tak aby mieszkanie odworzylo swoj maksymalny potencjal, po sesji zdjeciowej nasz dzial marketingu zaczyna wystawienie oraz promowanie na wszystkich niezbędnych portalach. Od konkurencji róznimy się tym ze idziemy w noge z czasem i nasza praca z ofertą nie kończy się na wystawieniu oferty na portalach OLX i Otodom, mimo tego nasze oferty tez znajdą się na Instagramie Faceboku oraz Telegramie. Są to bardziej popularne platformy wsród mlodych ludzi. Po wystawieniu oferty zaczynamy poszukiwanie potencjalnego klienta kupującego. Dzięki naszemu dosiadczenie mamy baze klientów poszukujących które zglaszają się bezpośrednio do nas mimo to mamy rówziez baze inwestorow z którymi wspópracujemy. Wieć podjecie wspopracy z nami zapewni dotercie do maksymalnego grona klientów potencjalnie nastawionych na zakup Pańskiej nieruchomości.',
        textEN: "Real Estate Sales Mediation - Our service aims to maximize profit from the sale of real estate. The process begins with home staging in the apartment to create a high-quality photo session so that the apartment can reveal its maximum potential. After the photo session, our marketing department starts listing and promoting it on all the necessary platforms. What sets us apart from the competition is that we keep up with the times, and our work with the offer doesn't end with listing it on OLX and Otodom. Additionally, our offers can be found on Instagram, Facebook, and Telegram. These are more popular platforms among young people. After listing the offer, we start searching for potential buyers. Thanks to our experience, we have a database of clients who are actively looking and reach out directly to us. Additionally, we also have a database of investors with whom we cooperate. So, partnering with us will ensure reaching a maximum number of potential clients who are inclined to purchase your property.",
        id: 2,
        stepsPL: [
            {
                id: 1,
                title: 'Wstępna konsultacja',
                text: 'Skontaktuj się z nami, a twoje zapytanie zostanie przydzielone agentowi prowadzącemu. Będzie on twoim kontaktem w Realsy Management. W pierwszym kroku, agent porozmawia z tobą, by poznać twoje wymagania i przedstawić pełny zakres naszych usług.',
            },
            {
                id: 2,
                title: 'Wycena',
                text: 'Przeprowadzamy setki wycen nieruchomości co miesiąc. Twój agent prowadzący będzie ekspertem w zakresie lokalnego rynku i przedstawi ci propozycję ceny, która pozwoli sprzedać nieruchomość. Porównujemy ceny transakcji sprzedaży w okolicy i bierzemy pod uwagę unikalne cechy twojej nieruchomości.',
            },
            {
                id: 3,
                title: 'Dokumentacja prawna',
                text: 'Zawsze rekomendujemy przygotowanie formalności na wczesnym etapie. Twój agent zweryfikuje stan prawny nieruchomości, aby upewnić się, że nie ma przeszkód do podpisania umowy sprzedaży. Zostaniesz też poproszony o podpisanie umowy pośrednictwa, która reguluje warunki współpracy między tobą a Realsy Management.',
            },
            {
                id: 4,
                title: 'Materiały marketingowe',
                text: 'Celem naszego zespołu jest zaprezentowanie twojej nieruchomości w najlepszym świetle. Agent zapyta cię o szereg informacji potrzebnych do przygotowania oferty, które pomogą odpowiedzieć na pytania potencjalnych nabywców. Nasza usługa obejmuje też bezkosztową profesjonalną sesję zdjęciową nieruchomości.',
            },
            {
                id: 5,
                title: 'Ekspozycja oferty',
                text: 'W odpowiednim momencie opublikujemy ofertę sprzedaży twojej nieruchomości. Pojawi się ona w wielu kanałach, w tym stronie Realsy Management, którą odwiedza duża grupa potencjalnych nabywców. Jednocześnie, prezentujemy ofertę kupującym, którzy już zarejestrowali się w naszej bazie.',
            },
            {
                id: 6,
                title: 'Prezentacje nieruchomości',
                text: 'Prezentacje zainteresowanym nabywcom są organizowane z wyprzedzeniem, co pozwala przygotować nieruchomość. Szanujemy twój czas, dlatego możesz skorzystać z bezpiecznej usługi przechowywania kluczy, a prezentacje zorganizujemy bez angażowania twojej obecności.',
            },
            {
                id: 7,
                title: 'Oferta i negocjacje',
                text: 'Oferty kupna twojej nieruchomości potwierdzane są mailowo i telefonicznie. Prezentujemy wówczas warunki oferty, takie jak cena, sposób finansowania zakupu czy czas transakcji. Twój agent będzie wspierał cię w trakcie negocjacji.',
            },
            {
                id: 8,
                title: 'Umowa sprzedaży',
                text: 'Gdy zaakceptujesz warunki oferty kupna, przechodzimy do sporządzenia umowy sprzedaży u notariusza. Realsy Management korzysta z zaufanych biur notarialnych i może polecić radców prawnych, jeżeli potrzebne są dodatkowe konsultacje. Zwykle najpierw podpisywana jest umowa przedwstępna, poprzedzająca końcową. Dla nabywców gotówkowych, wystarczy jedynie ta druga. Twój agent przeprowadzi cię przez proces notarialny, zabezpieczając twój interes.',
            },
            {
                id: 9,
                title: 'Przekazanie nieruchomości',
                text: 'Proces sprzedaży kończy podpisanie umowy notarialnej, przekazanie środków od nabywcy i zarejestrowanie nowego nabywcy. Wspieramy sprzedającego do momentu, w którym nabywca wywiąże się ze swoich zobowiązań i i nieruchomość zostanie przekazana w jego ręce.',
            },
        ],
        stepsEN: [
            {
                id: 1,
                title: 'Initial Consultation',
                text: 'Contact us, and your inquiry will be assigned to a dedicated agent. They will be your point of contact at Realsy Management. In the first step, the agent will talk to you to understand your requirements and present the full range of our services.',
            },
            {
                id: 2,
                title: 'Valuation',
                text: 'We conduct hundreds of property valuations every month. Your dedicated agent will be an expert in the local market and will present you with a pricing proposal that will enable the sale of the property. We compare sales transaction prices in the area and take into account the unique features of your property.',
            },
            {
                id: 3,
                title: 'Legal Documentation',
                text: 'We always recommend preparing formalities at an early stage. Your agent will verify the legal status of the property to ensure that there are no obstacles to signing a sales agreement. You will also be asked to sign a brokerage agreement, which regulates the terms of cooperation between you and Realsy Management.',
            },
            {
                id: 4,
                title: 'Marketing Materials',
                text: "Our team's goal is to present your property in the best light. The agent will ask you for a series of information needed to prepare an offer that will help answer potential buyers' questions. Our service also includes a free professional photo session of the property.",
            },
            {
                id: 5,
                title: 'Listing the Offer',
                text: 'At the right time, we will publish the offer to sell your property. It will appear on various channels, including the Realsy Management website, which is visited by a large group of potential buyers. At the same time, we present the offer to buyers who have already registered in our database.',
            },
            {
                id: 6,
                title: 'Property Presentations',
                text: 'Presentations to interested buyers are organized in advance, allowing for property preparation. We respect your time, so you can take advantage of a secure key storage service, and presentations will be organized without involving your presence.',
            },
            {
                id: 7,
                title: 'Offer and Negotiations',
                text: 'Purchase offers for your property are confirmed by email and phone. At that time, we present the terms of the offer, such as the price, method of financing the purchase, or the transaction time. Your agent will support you during negotiations.',
            },
            {
                id: 8,
                title: 'Sales Agreement',
                text: "Once you accept the terms of the purchase offer, we proceed to draw up a sales agreement at the notary's office. Realsy Management uses trusted notary offices and can recommend legal advisors if additional consultations are needed. Usually, a preliminary agreement is signed first, preceding the final one. For cash buyers, only the latter is sufficient. Your agent will guide you through the notarial process, securing your interests.",
            },
            {
                id: 9,
                title: 'Property Handover',
                text: 'The sales process concludes with the signing of a notarial agreement, the transfer of funds from the buyer, and the registration of the new owner. We support the seller until the buyer fulfills their obligations, and the property is transferred into their hands.',
            },
        ],
        img: './img/offer_1.png',
    },
    {
        titlePL: 'Posrednictwo zakupu',
        titleEN: 'Real Estate Purchase Brokerage',
        textPL: 'Posrednictwo zakupu- usluga polega na poszukiwanie najkorzystniejszej opcji zakupu nieruchomośći. Dzieki naszemu doświadczeniu pomagamy naszym klientom trafić w najbardzij atrakcyjne oferty. Dzialamy zarówno na rynku wtórnym tak i na pierwotnym. Oprzocz tego możemy zaoferować naszym klientom oferty offmarket tak zwane z pod lady. Dziki wspolpracy z nami otrzymają Państwo możliwość uzyskania najliepszej możliwej ceny za nieruchomość, doradctwo przy calym procesie zakupu oraz obsluge pozakupową. Wspieramy w poszukiwaniu ekipy remontowej, architektów wnentrz, przeprowadzkach.',
        textEN: '"Real Estate Purchase Brokerage" is a service that involves searching for the most advantageous property purchase options. Thanks to our experience, we assist our clients in finding the most attractive offers. We operate in both the secondary and primary real estate markets. In addition, we can offer our clients off-market deals, also known as "under the counter" offers. Through cooperation with us, you will have the opportunity to obtain the best possible price for the property, receive advice throughout the entire purchase process, and post-purchase support. We assist in finding a renovation team, interior designers, and relocation services.',
        id: 3,
        stepsPL: [
            {
                id: 1,
                title: 'Kontakt z biurem nieruchomości:',
                text: 'Skontaktuj się z biurem nieruchomości, aby zgłosić swoje zainteresowanie zakupem nieruchomości. Twoje zapytanie zostanie przekazane agentowi prowadzącemu.',
            },
            {
                id: 2,
                title: 'Wstępna konsultacja:',
                text: 'Agent prowadzący nieruchomość będzie Twoim kontaktem w biurze. Pierwszym krokiem będzie rozmowa, podczas której agent pozna Twoje wymagania i przedstawi zakres usług biura nieruchomości.',
            },
            {
                id: 3,
                title: 'Wycena:',
                text: 'Twój agent przedstawi Ci propozycję ceny nieruchomości, uwzględniając lokalny rynek i unikalne cechy nieruchomości. Będzie to cena, która pozwoli Ci dokonać zakupu.',
            },
            {
                id: 4,
                title: 'Dokumentacja prawna:',
                text: 'Agent pomoże Ci w procesie przygotowania formalności, takich jak weryfikacja stanu prawnego nieruchomości i podpisanie umowy pośrednictwa, regulującej warunki współpracy między Tobą a biurem nieruchomości.',
            },
            {
                id: 5,
                title: 'Materiały marketingowe:',
                text: 'Dostarcz agentowi niezbędne informacje potrzebne do przygotowania oferty, która pomoże odpowiedzieć na pytania potencjalnych sprzedawców.',
            },
            {
                id: 6,
                title: 'Ekspozycja oferty:',
                text: 'Agent zadba o opublikowanie oferty zakupu nieruchomości w odpowiednich kanałach, aby przyciągnąć sprzedawców.',
            },
            {
                id: 7,
                title: 'Prezentacje nieruchomości:',
                text: 'Agent zorganizuje prezentacje nieruchomości, umożliwiając Ci zapoznanie się z potencjalnymi zakupami.',
            },
            {
                id: 8,
                title: 'Oferta i negocjacje:',
                text: 'Gdy znajdziesz nieruchomość, która Cię interesuje, agent pomoże w przedstawieniu oferty i negocjacjach z właścicielem nieruchomości.',
            },
            {
                id: 9,
                title: 'Umowa zakupu:',
                text: 'Po zaakceptowaniu oferty, agent przeprowadzi Cię przez proces sporządzenia umowy zakupu nieruchomości u notariusza lub odpowiedniego organu.',
            },
            {
                id: 10,
                title: 'Przekazanie nieruchomości:',
                text: 'Proces zakupu zakończy się podpisaniem umowy notarialnej, przekazaniem środków i zarejestrowaniem Ciebie jako nowego właściciela nieruchomości.',
            },
        ],
        stepsEN: [
            {
                id: 1,
                title: 'Contacting the Real Estate Agency:',
                text: 'Get in touch with a real estate agency to express your interest in purchasing a property. Your inquiry will be assigned to a designated agent.',
            },
            {
                id: 2,
                title: 'Initial Consultation:',
                text: 'The agent in charge of the property will be your point of contact at the agency. The first step will involve a conversation during which the agent will learn about your requirements and present the range of services offered by the real estate agency.',
            },
            {
                id: 3,
                title: 'Valuation:',
                text: 'Your agent will present you with a property price proposal, taking into account the local market and unique features of the property. This will be the price that allows you to make the purchase.',
            },
            {
                id: 4,
                title: 'Legal Documentation:',
                text: 'The agent will assist you in the process of preparing formalities, such as verifying the legal status of the property and signing a brokerage agreement that regulates the terms of cooperation between you and the real estate agency.',
            },
            {
                id: 5,
                title: 'Marketing Materials:',
                text: "Provide the agent with the necessary information required to prepare an offer that will help answer potential sellers' questions.",
            },
            {
                id: 6,
                title: 'Listing the Offer:',
                text: 'The agent will ensure the listing of the property purchase offer on suitable channels to attract sellers.',
            },
            {
                id: 7,
                title: 'Property Presentations:',
                text: 'The agent will organize property presentations, allowing you to explore potential purchases.',
            },
            {
                id: 8,
                title: 'Offer and Negotiations:',
                text: 'When you find a property that interests you, the agent will assist in presenting the offer and negotiations with the property owner.',
            },
            {
                id: 9,
                title: 'Purchase Agreement:',
                text: 'After accepting the offer, the agent will guide you through the process of preparing a property purchase agreement with a notary or the appropriate authority.',
            },
            {
                id: 10,
                title: 'Property Handover:',
                text: 'The purchase process will conclude with the signing of a notarial agreement, the transfer of funds, and the registration of you as the new property owner.',
            },
        ],
        img: './img/offer_1.png',
    },
    {
        titlePL: 'Posrednictwo najmu',
        titleEN: 'Rental Mediation',
        textPL: 'Posrednictwo najmu - usluga polega na zleceniu poszukiwania nieruchomości pod wynajem naszym brokerom. Miesci w sobie analizowanie rynku pod kątem kryteriow klienta, poszukiwaniu kliku najbardziej korzystnych opcji, prezentacji wybranych nieruchomości, sprawdzenie/przygotowanie umowy najmu tak aby byla wygodna dla obu stron, negocjacje waronkow oraz ceny, przekazanie mieszkania na podstawie protokolu zdawczo- odbiorczego wraz z wykonaniem sesji zdjęciowej. W razie potrzeby wsparcie w tlumaczemiu dokumentow, przeprowadzce, zrobienia najmu okazjonalnego/isnstytucjonalnego. jestesmy dyspozycyjni o kazdej porze dnia i nocy w razie konieczności wsparcia naszych klientów. Koszty prowizji za wykonane czynności ustalają się indywidualnie. Po więcej szczególow prosimy o kontakt z naszym doradcą.',
        textEN: "Rental Mediation - the service involves commissioning our brokers to search for rental properties. It encompasses market analysis based on the client's criteria, seeking multiple advantageous options, presenting selected properties, checking/preparing the lease agreement for the convenience of both parties, negotiating terms and prices, handing over the property based on the handover protocol along with conducting a photo session. If necessary, we offer support in document translation, moving, arranging occasional/institutional leases. We are available at any time of day and night to assist our clients as needed. Commission fees for performed tasks are determined individually. For more details, please contact our advisor.",
        id: 4,
        stepsPL: [
            {
                id: 1,
                title: 'Kontakt z biurem nieruchomości:',
                text: 'Skontaktuj się z biurem nieruchomości, aby zgłosić swoje zainteresowanie wynajmem nieruchomości. Zostanie Ci przydzielony agent prowadzący, który będzie Twoim głównym kontaktem.',
            },
            {
                id: 2,
                title: 'Konsultacja i poznanie wymagań:',
                text: 'Agent prowadzący przeprowadzi konsultację, aby zrozumieć Twoje wymagania i preferencje dotyczące wynajmu nieruchomości.',
            },
            {
                id: 3,
                title: 'Wyszukiwanie odpowiednich ofert:',
                text: 'Twój agent będzie regularnie dostarczać Ci propozycje wynajmu nieruchomości, które spełniają Twoje kryteria.',
            },
            {
                id: 4,
                title: 'Ocenianie propozycji i wizyty na miejscu:',
                text: 'Razem z agentem oceniasz propozycje wynajmu i decydujesz, które nieruchomości warto odwiedzić osobiście.',
            },
            {
                id: 5,
                title: 'Prezentacje nieruchomości:',
                text: 'Agent organizuje wizyty na miejscu, abyś mógł obejrzeć nieruchomości, które Cię zainteresowały.',
            },
            {
                id: 6,
                title: 'Negocjacje warunków najmu:',
                text: 'Gdy znajdziesz nieruchomość, którą chcesz wynająć, agent pomoże w negocjacjach warunków najmu, takich jak cena czynszu, okres najmu, itp.',
            },
            {
                id: 7,
                title: 'Przygotowanie dokumentów najmu:',
                text: 'Po uzgodnieniu warunków, agent pomoże w przygotowaniu umowy najmu i innych dokumentów niezbędnych do podpisania umowy.',
            },
            {
                id: 8,
                title: 'Podpisanie umowy najmu:',
                text: 'Po akceptacji warunków, podpisujesz umowę najmu nieruchomości.',
            },
            {
                id: 9,
                title: 'Zapłata depozytu i pierwszego czynszu:',
                text: 'Wymagane jest wpłacenie depozytu oraz pierwszego czynszu zgodnie z umową najmu.',
            },
            {
                id: 10,
                title: 'Przekazanie nieruchomości:',
                text: 'Agent koordynuje przekazanie nieruchomości, w tym odebranie kluczy i sprawdzenie stanu technicznego nieruchomości.',
            },
            {
                id: 11,
                title: 'Wsparcie podczas trwania najmu:',
                text: 'W trakcie trwania najmu, możesz polegać na wsparciu agenta w przypadku pytań lub problemów związanych z nieruchomością.',
            },
            {
                id: 12,
                title: 'Zakończenie najmu:',
                text: 'Po zakończeniu okresu najmu, agent może pomóc w procedurze zakończenia najmu i zwolnieniu nieruchomości.',
            },
            {
                id: 13,
                title: 'Powtarzający się proces:',
                text: 'W razie potrzeby, agent będzie nadal dostarczać Ci propozycje wynajmu i pomagać w procesie znalezienia kolejnej nieruchomości na wynajem.',
            },
        ],
        stepsENWynajem: [
            {
                id: 1,
                title: 'Contacting the Real Estate Agency:',
                text: 'Get in touch with a real estate agency to express your interest in renting a property. You will be assigned a designated agent as your main point of contact.',
            },
            {
                id: 2,
                title: 'Consultation and Understanding Requirements:',
                text: 'The leading agent will conduct a consultation to understand your requirements and preferences for property rental.',
            },
            {
                id: 3,
                title: 'Searching for Suitable Offers:',
                text: 'Your agent will regularly provide you with rental property proposals that meet your criteria.',
            },
            {
                id: 4,
                title: 'Evaluating Proposals and On-Site Visits:',
                text: "Together with the agent, you'll evaluate rental proposals and decide which properties are worth visiting in person.",
            },
            {
                id: 5,
                title: 'Property Presentations:',
                text: 'The agent arranges on-site visits for you to explore the properties that interest you.',
            },
            {
                id: 6,
                title: 'Negotiating Rental Terms:',
                text: 'Once you find a property you wish to rent, the agent will assist in negotiating rental terms such as rent amount, lease duration, etc.',
            },
            {
                id: 7,
                title: 'Preparing Rental Documents:',
                text: 'After agreeing on the terms, the agent will help in preparing the rental agreement and other necessary documents for signing.',
            },
            {
                id: 8,
                title: 'Signing the Rental Agreement:',
                text: 'Upon accepting the terms, you sign the rental agreement for the property.',
            },
            {
                id: 9,
                title: 'Payment of Deposit and First Rent:',
                text: 'You are required to pay the deposit and the first rent according to the rental agreement.',
            },
            {
                id: 10,
                title: 'Property Handover:',
                text: "The agent coordinates the property handover, including key handover and checking the property's condition.",
            },
            {
                id: 11,
                title: 'Support During the Rental Period:',
                text: "Throughout the rental period, you can rely on the agent's support for any property-related questions or issues.",
            },
            {
                id: 12,
                title: 'Ending the Rental Agreement:',
                text: 'After the rental period concludes, the agent can assist with the rental termination procedure and property vacating.',
            },
            {
                id: 13,
                title: 'Recurring Process:',
                text: 'If needed, the agent will continue to provide rental proposals and assist in finding your next rental property.',
            },
        ],
        img: './img/offer_1.png',
    },
    {
        titlePL: 'Pośrednictwo wynajmu',
        titleEN: 'Rental (Leasy) Mediation',
        textPL: 'Pośrednictwo wynajmu - usluga polega na zmaksymalizowaniu zysku z wynajmu mieszkania. Proces zaczyna się od home stagingu w mieszkaniu w celu zrobienia jakościowej sesji zdjęciowej tak aby mieszkanie odworzylo swoj maksymalny potencjal, po sesji zdjeciowej nasz dzial marketingu zaczyna wystawienie oraz promowanie na wszystkich niezbędnych portalach. Od konkurencji róznimy się tym ze idziemy w noge z czasem i nasza praca z ofertą nie kończy się na wystawieniu oferty na portalach OLX i Otodom, mimo tego nasze oferty tez znajdą się na Instagramie Faceboku oraz Telegramie. Są to bardziej popularne platformy wsród mlodych ludzi. Po wystawieniu oferty zaczynamy poszukiwanie potencjalnego najemcy. Dzięki naszemu bogatemu dośziadczeniu oraz narzędziom do trafnej weryfikacji potencjalnych robimy to w taki sposób zeby zminimalizowac ryzyko niezaplaconego czynszu. Weryfikujemy najemce pod względem finansowym oraz dostosowujemy warunki wynajmu do kazdej konkretnej sytuacji. Po znaleznieniu najemcy pszekazujemy mieszkanie na podstawie protokolu zdawczo-odbiorczego wraz z sesja zdjeciową. Protokol ten zostawiamy w naszym archiwum na wypadek jak by która kolwiek ze stron nie miala by go przy oddaniu mieszkania.',
        textEN: "Rental Mediation - the service aims to maximize the profit from apartment rentals. The process begins with home staging in the apartment to create a high-quality photo session to showcase the property's full potential. After the photo session, our marketing department starts listing and promoting the property on all necessary platforms. What sets us apart from the competition is our responsiveness. Our work doesn't end with posting listings on platforms like OLX and Otodom; we also feature our listings on more popular platforms among younger people, such as Instagram, Facebook, and Telegram. After listing the property, we start searching for potential tenants. Thanks to our extensive experience and tools for accurate tenant screening, we minimize the risk of unpaid rent. We assess tenants' financial stability and tailor the rental terms to each specific situation. Once a tenant is found, we hand over the apartment based on a handover protocol along with a photo session. We keep this protocol in our archives in case either party needs it upon handing over the apartment.",
        id: 5,
        stepsPL: [
            {
                id: 1,
                title: 'Kontakt z biurem nieruchomości:',
                text: 'Skontaktuj się z biurem nieruchomości, aby zgłosić swoje zainteresowanie wynajmem nieruchomości. Twoje zapytanie zostanie przydzielone agentowi prowadzącemu.',
            },
            {
                id: 2,
                title: 'Wstępna konsultacja:',
                text: 'Agent prowadzący przeprowadzi wstępną konsultację, aby poznać Twoje wymagania dotyczące wynajmu nieruchomości. Omówicie kwestie takie jak rodzaj nieruchomości, lokalizacja, oczekiwana cena wynajmu itp.',
            },
            {
                id: 3,
                title: 'Wycena najmu:',
                text: 'Twój agent dokona wyceny nieruchomości, biorąc pod uwagę lokalny rynek i unikalne cechy Twojej nieruchomości. Zaproponuje Ci odpowiednią cenę wynajmu.',
            },
            {
                id: 4,
                title: 'Dokumentacja prawna:',
                text: 'Upewnij się, że stan prawny nieruchomości jest zgodny z wymogami. Podpisz umowę pośrednictwa, która określa warunki współpracy z biurem nieruchomości.',
            },
            {
                id: 5,
                title: 'Przygotowanie materiałów marketingowych:',
                text: 'Dostarcz agentowi informacje i dokumentację potrzebną do przygotowania oferty wynajmu, w tym zdjęcia i opis nieruchomości.',
            },
            {
                id: 6,
                title: 'Ekspozycja oferty:',
                text: 'Biuro nieruchomości opublikuje ofertę wynajmu w różnych kanałach, aby dotrzeć do potencjalnych najemców.',
            },
            {
                id: 7,
                title: 'Prezentacje nieruchomości:',
                text: 'Agent będzie organizować prezentacje nieruchomości zainteresowanym najemcom, pozwalając im poznać nieruchomość.',
            },
            {
                id: 8,
                title: 'Oferty i negocjacje:',
                text: 'Po otrzymaniu ofert od potencjalnych najemców, agent przekaże Ci warunki oferty wynajmu, w tym cenę i inne szczegóły. Możesz negocjować warunki z potencjalnymi najemcami.',
            },
            {
                id: 9,
                title: 'Umowa najmu:',
                text: 'Gdy zaakceptujesz ofertę najmu, biuro nieruchomości pomoże w sporządzeniu umowy najmu, która określa warunki wynajmu, takie jak cena, okres najmu, zasady płatności itp.',
            },
            {
                id: 10,
                title: 'Przekazanie nieruchomości najemcy:',
                text: 'Po podpisaniu umowy najmu, biuro nieruchomości pomoże w przekazaniu nieruchomości nowemu najemcy, zbierze pierwszy czynsz i zajmie się formalnościami rejestracyjnymi.',
            },
            {
                id: 11,
                title: 'Wsparcie w trakcie najmu:',
                text: 'Biuro nieruchomości może nadal służyć wsparciem w trakcie trwania najmu, rozwiązując ewentualne problemy lub pytania związane z nieruchomością.',
            },
        ],
        stepsEN: [
            {
                id: 1,
                title: 'Signing the Agreement:',
                text: 'Signing a lease agreement is the first step in formalizing the property rental process. The agreement specifies the rights and obligations of both the tenant and the landlord. Our experienced team of lawyers ensures that the contract is clear, compliant with current regulations, and protects the interests of both parties.',
            },
            {
                id: 2,
                title: 'Property Handover:',
                text: 'Our property handover process is thorough and careful. We ensure that the property is in excellent condition before handing it over to the tenant. All necessary formalities and documents are discussed, and the keys are handed over with due diligence.',
            },
            {
                id: 3,
                title: 'Property Enhancement:',
                text: 'We ensure that the property meets the highest quality standards. As needed and agreed, we enhance the property to provide comfort and convenience for the tenant.',
            },
            {
                id: 4,
                title: 'Photo Session:',
                text: 'To promote the property, we conduct a professional photo session. Our team of photographers and stylists ensures that the property is presented in the best light, increasing its attractiveness.',
            },
            {
                id: 5,
                title: 'Preparing the Offer:',
                text: 'Every rental offer is carefully prepared. All details regarding the property, including information about location, square footage, amenities, and prices, are thoroughly documented to facilitate decision-making for potential tenants.',
            },
            {
                id: 6,
                title: 'Listing the Offer:',
                text: 'Our offers are listed on various platforms to reach as many interested tenants as possible. We collaborate with reputable real estate services and utilize our website to maximize offer visibility.',
            },
            {
                id: 7,
                title: 'Marketing Actions:',
                text: 'Our marketing team undertakes a wide range of actions to promote the property. Advertising campaigns, social media, and other marketing strategies are used to attract the attention of potential tenants.',
            },
            {
                id: 8,
                title: 'Take Profit:',
                text: 'Our goal is to ensure the profitability of investments for our clients. We operate in a way that allows for maximizing rental property profits, meeting client expectations.',
            },
        ],
        img: './img/offer_1.png',
    },
]

const Offers = () => {
    const { data } = useMyContext()
    const title = data === 'pl' ? 'OFERTA' : 'OFFERS'

    const [offerNumber, setOfferNumber] = useState<number>(1)
    const [activeOffer] = offersData.filter((offer) => offer.id === offerNumber)
    return (
        <div className={c.offers}>
            <PagesTop title={title} />
            <section className={c.offers__header}>
                {links.map((link) => (
                    <button
                        key={link.id}
                        style={{
                            color:
                                offerNumber === link.id ? '#CB9C1E' : 'white',
                        }}
                        onClick={() => setOfferNumber(link.id)}
                        className={c.offers__header_item}
                    >
                        {data === 'pl' ? link.namePL : link.nameEN}
                    </button>
                ))}
            </section>
            <section className={c.body}>
                <div className={c.body__top}>
                    <div className={c.body__title}>
                        {data === 'pl'
                            ? activeOffer.titlePL
                            : activeOffer.titleEN}
                    </div>
                    <img
                        src={activeOffer.img}
                        alt="offer photo"
                        className={c.body__img}
                    />
                </div>
                <section className={c.body__description}>
                    <h2 className={c.body__description_title}>
                        {data === 'pl' ? 'opis' : 'description'}
                    </h2>
                    <p className={c.body__description_text}>
                        {data === 'pl'
                            ? activeOffer.textPL
                            : activeOffer.textEN}
                    </p>
                </section>
                <section className={c.body__steps}>
                    <div className={c.body__steps_title}>
                        {data === 'pl'
                            ? 'Jak to wygląda?'
                            : 'What is looks like?'}
                    </div>
                    <Steps
                        items={
                            data === 'pl'
                                ? activeOffer.stepsPL
                                : activeOffer.stepsEN
                        }
                    />
                </section>
            </section>
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Offers
