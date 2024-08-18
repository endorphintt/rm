import { useEffect, useState } from 'react'
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
        nameEN: 'sell',
        id: 2,
    },
    {
        namePL: 'zakup',
        nameEN: 'buy',
        id: 3,
    },
    {
        namePL: 'najem',
        nameEN: 'let',
        id: 4,
    },
    {
        namePL: 'wynajem',
        nameEN: 'rent',
        id: 5,
    },
]

const offersData = [
    {
        titlePL: 'zarządzanie najmem hybrydowym',
        titleEN: 'Hybrid rental management',
        textPL: 'Oferujemy profesjonalne zarządzanie hybrydowym wynajmem nieruchomości, co stanowi naszą specjalność i klucz do optymalizacji zwrotu z inwestycji. Nasza metoda opiera się na równoczesnym oferowaniu mieszkań zarówno w krótkim, jak i długim okresie, elastycznie dostosowując się do zmieniającego się zapotrzebowania, obłożenia oraz preferencji najemców. Dzięki wykorzystaniu zaawansowanych narzędzi analitycznych, gwarantujemy maksymalizację zysków z wynajmu, minimalizując ryzyko braku najemców oraz systematycznie dbając o stan techniczny każdej nieruchomości. Nasza metoda jest uniwersalna i sprawdza się w przypadku każdego typu mieszkania, co otwiera drzwi do współpracy dla wszystkich zainteresowanych.',
        textEN: 'We offer professional hybrid rental property management, which is our area of expertise and the key to optimizing return on investment. Our method is based on simultaneously offering apartments in both the short and long term, flexibly adapting to changing demand, occupancy and tenant preferences. By using advanced analytical tools, we guarantee to maximize rental returns, minimizing the risk of tenant shortages and systematically taking care of the technical condition of each property. Our method is universal and works for any type of apartment, which opens the door to cooperation for all interested parties.',
        id: 1,
        stepsPL: [
            {
                id: 1,
                title: 'Podpisanie umowy:',
                text: 'Inicjacja naszej współpracy rozpoczyna się od formalnego podpisania umowy, w której określamy warunki naszej pracy i współdziałania.',
            },
            {
                id: 2,
                title: 'Przekazanie mieszkania:',
                text: 'Po podpisaniu umowy przejmujemy lokal w zarządzanie na podstawie protokołu zdawczo- odbiorczego.',
            },
            {
                id: 3,
                title: 'Doposażenie mieszkania:',
                text: 'Dbamy o to, aby mieszkanie spełniało standardy najwyższej jakości. W miarę potrzeb i uzgodnień, dokonujemy doposażenia mieszkania, zapewniając komfort i wygodę dla najemcy. Tworzymy szczegółową listę rzeczy niezbędnych do perfekcyjnego wyposażenia mieszkania. Następnie zajmujemy się zakupem tych przedmiotów na koszt właściciela, dbając o kompleksowe i atrakcyjne wyposażenie.',
            },
            {
                id: 4,
                title: 'Sesja zdjęciowa:',
                text: 'Tworzymy szczegółową listę rzeczy niezbędnych do perfekcyjnego wyposażenia mieszkania. Następnie zajmujemy się zakupem tych przedmiotów na koszt właściciela, dbając o kompleksowe i atrakcyjne wyposażenie.',
            },
            {
                id: 5,
                title: 'Przygotowanie oferty:',
                text: 'Opracowujemy starannie przygotowaną ofertę wynajmu, prezentującą mieszkanie w sposób zachęcający dla potencjalnych najemców.',
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
                text: 'The initiation of our cooperation begins with the formal signing of a contract, in which we define the terms of our work and cooperation.',
            },
            {
                id: 2,
                title: 'Handover of the apartment:',
                text: 'After signing the contract, we take over management of the premises on the basis of a handover protocol.',
            },
            {
                id: 3,
                title: 'Upgrading the apartment:',
                text: 'We make sure that the apartment meets the highest quality standards. As needed and agreed, we upgrade the apartment, ensuring comfort and convenience for the tenant. We create a detailed list of items necessary to furnish the apartment perfectly. We then handle the purchase of these items at the expense of the owner, taking care of comprehensive and attractive furnishings.',
            },
            {
                id: 4,
                title: 'Photo session:',
                text: 'Using our own home-staging services, we arrange professional photo shoots that perfectly present the property. Our goal is to capture the full potential of the apartment, attracting the interest of potential clients looking for the perfect place to live.',
            },
            {
                id: 5,
                title: 'Preparation of the offer:',
                text: 'We develop a carefully prepared rental offer, presenting the apartment in an eye-catching way for potential tenants.',
            },
            {
                id: 6,
                title: 'Listing of the offer:',
                text: 'Our listings are displayed on various platforms to reach as many interested tenants as possible. We work with well-known real estate websites and use our website to maximize listing visibility.',
            },
            {
                id: 7,
                title: 'Marketing:',
                text: 'Our marketing team undertakes a wide range of activities to promote the property. Advertising campaigns, social media and other marketing strategies are used to attract the attention of potential tenants.',
            },
            {
                id: 8,
                title: 'Take profit:',
                text: `Our goal is to ensure a profitable investment for our clients. We operate in a way that maximizes profits from rental properties. Our Tools and experience allow us to achieve "take profit" according to our client's expectations.`,
            },
        ],
        img: './img/aaa_offers_1.png',
    },
    {
        titlePL: 'Pośrednictwo sprzedaży',
        titleEN: 'Sales brokerage',
        textPL: 'Zapraszamy do skorzystania z naszego profesjonalnego pośrednictwa sprzedaży nieruchomości, które opiera się na latach doświadczenia i zaufaniu naszych klientów. Nasza firma oferuje kompleksową obsługę w procesie sprzedaży, dbając o każdy detal i indywidualne potrzeby naszych klientów. Doświadczenie i ekspertyza: Nasz zespół składa się z doświadczonych agentów, którzy posiadają dogłębną wiedzę na temat rynku nieruchomości. Ich ekspertyza pozwala na skuteczne doradztwo i profesjonalne podejście w każdym etapie transakcji. Wsparcie na każdym kroku: Jesteśmy z Tobą od początku do końca procesu sprzedaży. Doradzamy w przygotowaniu nieruchomości do prezentacji, zapewniamy wsparcie prawników oraz dostarczamy pomoc w negocjacjach. Promocja nieruchomości: Dbamy o jak najlepszą promocję nieruchomości, wykorzystując najnowsze narzędzia marketingowe i platformy online, aby dotrzeć do szerokiego grona potencjalnych nabywców. Indywidualne podejście: Rozumiemy, że każda nieruchomość jest wyjątkowa. Dlatego dostosowujemy nasze strategie do specyfiki każdej oferty, by zapewnić optymalne rezultaty. Transparentność i uczciwość: Nasza firma działa na zasadzie pełnej transparentności. Zapewniamy uczciwe i jasne warunki współpracy oraz regularne raporty dotyczące postępów w procesie sprzedaży. Jeśli szukasz rzetelnej i profesjonalnej obsługi w procesie sprzedaży nieruchomości, jesteśmy gotowi, by być Twoim zaufanym partnerem. Skontaktuj się z nami już dziś, aby rozpocząć drogę do udanej transakcji!',
        textEN: "We want to invite you to use our professional real estate sales brokerage, which is based on years of experience and trust of our clients. Our company offers comprehensive services in the sales process, taking care of every detail and individual needs of our clients. Experience and expertise: Our team consists of experienced agents who have in-depth knowledge of the real estate market. Their expertise allows for effective advice and a professional approach at every stage of the transaction. Support every step of the way: We are with you from the beginning to the end of the sales process. We assist you in preparing the property for presentation, provide legal support and negotiation assistance. Property promotion: We take care of the best possible promotion of the property, using the most advanced marketing tools and online platforms to reach a wide range of potential buyers. Customized approach: We understand that every property is unique. That's why we tailor our strategies to the specifics of each listing to ensure optimal results.     5. Transparency and honesty: Our company operates on the principle of full transparency. We provide fair and clear terms of cooperation and regular reports on the progress of the sales process. If you are looking for reliable and professional service in the process of selling your property, we are ready to be your trusted partner. Contact us today let your journey to a successful transaction get started!",
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
                text: 'W odpowiednim momencie opublikujemy ofertę sprzedaży twojej nieruchomości. Pojawi się ona na wielu portalach, w tym również stronie na Realsy Management, którą odwiedza duża grupa potencjalnych nabywców. Jednocześnie, prezentujemy ofertę klientom poszukującym z naszej bazy, którzy są już zainteresowani zakupem nieruchomości.',
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
                text: 'Gdy zaakceptujesz ofertę, przechodzimy do sporządzenia umowy sprzedaży u notariusza. Realsy Management korzysta z zaufanych biur notarialnych i może polecić radców prawnych, jeżeli potrzebne są dodatkowe konsultacje. Zwykle najpierw podpisywana jest umowa przedwstępna, poprzedzająca końcową. Dla nabywców gotówkowych, wystarczy jedynie ta druga. Twój agent przeprowadzi cię przez proces notarialny, zabezpieczając twój interes.',
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
                title: 'Visibility of the listing:',
                text: 'At the right time, we will publish a listing of the sale of your property. It will appear on many portals, including the website of Realsy Management, which is visited by a large group of potential buyers. At the same time, we present the offer to search clients from our database who are already interested in buying the property.',
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
                title: 'Sales contract:',
                text: 'Once you accept the offer, we proceed to draw up the sales contract at the notary. Realsy Management uses trusted notary offices and can recommend legal advisors if additional consultation is needed. Usually a preliminary agreement is signed first, preceding the final one. For cash buyers, only the latter will suffice. Your agent will guide you through the notarization process, safeguarding your interest.',
            },
            {
                id: 9,
                title: 'Property Handover',
                text: 'The sales process concludes with the signing of a notarial agreement, the transfer of funds from the buyer, and the registration of the new owner. We support the seller until the buyer fulfills their obligations, and the property is transferred into their hands.',
            },
        ],
        img: './img/aaa_offers_2.png',
    },
    {
        titlePL: 'Pośrednictwo zakupu',
        titleEN: 'Purchase Brokerage',
        textPL: 'Zapraszamy do skorzystania z naszego profesjonalnego pośrednictwa w procesie zakupu nieruchomości, które opiera się na dogłębnej wiedzy rynkowej i pełnym zaangażowaniu naszego zespołu. Nasza firma oferuje kompleksowe wsparcie i doradztwo, aby zapewnić Ci udaną transakcję zakupu idealnej nieruchomości. Ekspercka wiedza i wsparcie: Nasi doświadczeni agenci posiadają głęboką wiedzę na temat rynku nieruchomości. Ich zaangażowanie i ekspertyza pozwala na skuteczne doradztwo w wyborze idealnej nieruchomości, dopasowanej do Twoich preferencji i potrzeb. Poszukiwanie nieruchomości: Aktywnie poszukujemy nieruchomości spełniających Twoje oczekiwania. Dzięki naszym zasobom i sieci kontaktów, znajdujemy propozycje dostosowane do Twoich wymagań. Analiza i negocjacje: Pomagamy w dokładnej analizie rynku, wycenie nieruchomości oraz prowadzimy negocjacje w Twoim imieniu, dbając o uzyskanie najlepszych warunków zakupu. Asysta prawna i formalności: Zapewniamy wsparcie prawników oraz pomagamy w formalnościach związanych z procesem zakupu, zapewniając płynne i bezproblemowe przejście przez wszystkie etapy transakcji.     5. Dostosowane podejście: Zrozumienie indywidualnych potrzeb każdego klienta jest kluczowe dla naszej pracy. Dlatego dostosowujemy nasze działania do Twoich oczekiwań, gwarantując kompleksowe wsparcie na każdym etapie procesu zakupu. Jeśli poszukujesz zaufanego partnera, który pomoże Ci w znalezieniu wymarzonej nieruchomości i przejściu przez proces zakupu z pełnym profesjonalizmem, skontaktuj się z nami już dziś. Jesteśmy gotowi, by być Twoim wsparciem na drodze do posiadania idealnego domu lub mieszkania!',
        textEN: "We invite you to take advantage of our professional brokerage in the real estate purchase process, which is based on in-depth market knowledge and the full commitment of our team. Our company offers comprehensive support and advice to ensure that you have a successful transaction of buying the perfect property. Expert knowledge and support: our experienced agents have deep knowledge of the local real estate market. Our commitment and expertise allows us to effectively advise you on the ideal property to suit your preferences and needs. Property Search: We actively search for properties that meet your expectations. With our resources and network of contacts, we find proposals that match your requirements. Analysis and negotiation: We help you with a thorough market analysis, property valuation and negotiate on your behalf, making sure you get the best terms for your purchase. Legal assistance and paperwork: We provide legal support and assist with the formalities of the purchase process, ensuring a smooth and seamless transition through all stages of the transaction.     5. Personalized approach: Understanding the individual needs of each client is central to our work. That's why we tailor our activities to your expectations, guaranteeing comprehensive support at every stage of the buying process. If you are looking for a trusted partner to help you find your dream property and go through the buying process with complete professionalism, contact us today. We are ready to be your support on the road to owning the perfect house or apartment!",
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
                title: 'Prezentacje nieruchomości:',
                text: 'Agent zorganizuje prezentacje nieruchomości, umożliwiając Ci zapoznanie się z potencjalnymi zakupami.',
            },
            {
                id: 6,
                title: 'Oferta i negocjacje:',
                text: 'Gdy znajdziesz nieruchomość, która Cię interesuje, agent pomoże w przedstawieniu oferty i negocjacjach z właścicielem nieruchomości.',
            },
            {
                id: 7,
                title: 'Umowa zakupu:',
                text: 'Po zaakceptowaniu oferty, agent przeprowadzi Cię przez proces sporządzenia umowy zakupu nieruchomości u notariusza lub odpowiedniego organu.',
            },
            {
                id: 8,
                title: 'Przekazanie nieruchomości:',
                text: 'Proces zakupu zakończy się podpisaniem umowy notarialnej, przekazaniem środków i zarejestrowaniem Ciebie jako nowego właściciela nieruchomości.',
            },
            {
                id: 9,
                title: 'Obsługa po zakupowa:',
                text: 'Po udanym zakupie agent pomoże ci we wszystkich formalnościach po zakupowych. Takich jak zgłoszenie się do podatku, ubezpieczenie nieruchomości, przepisanie liczników oraz wszystkich pozostałych formalności związanych z twoja nieruchomością.',
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
                title: 'Property Presentations:',
                text: 'The agent will organize property presentations, allowing you to explore potential purchases.',
            },
            {
                id: 6,
                title: 'Offer and Negotiations:',
                text: 'When you find a property that interests you, the agent will assist in presenting the offer and negotiations with the property owner.',
            },
            {
                id: 7,
                title: 'Purchase Agreement:',
                text: 'After accepting the offer, the agent will guide you through the process of preparing a property purchase agreement with a notary or the appropriate authority.',
            },
            {
                id: 8,
                title: 'Property Handover:',
                text: 'The purchase process will conclude with the signing of a notarial agreement, the transfer of funds, and the registration of you as the new property owner.',
            },
            {
                id: 9,
                title: 'Post-purchase service:',
                text: 'After a successful purchase, the agent will help you with all post-purchase formalities. Such as filing taxes, insuring the property, prescribing the meters and all other formalities related to your property.',
            },
        ],
        img: './img/aaa_slider_1.png',
    },
    {
        titlePL: 'Pośrednictwo najmu',
        titleEN: 'rent Brokerage',
        textPL: 'Zapraszamy do skorzystania z naszego profesjonalnego pośrednictwa w wynajmie nieruchomości, które opiera się na szerokim doświadczeniu i zaangażowaniu naszego zespołu. Nasza firma oferuje kompleksową pomoc w znalezieniu odpowiednich najemców dla Twojej nieruchomości. Zasięg i marketing: Wykorzystujemy różnorodne narzędzia marketingowe oraz sieci kontaktów, aby dotrzeć do potencjalnych najemców i promować Twoją nieruchomość w sposób skuteczny i atrakcyjny. Selekcja najemców: Przeprowadzamy staranną selekcję potencjalnych najemców, dbając o to, by znaleźć osoby dopasowane do Twoich oczekiwań i standardów. Prezentacje: Organizujemy profesjonalne prezentacje, aby potencjalni najemcy mogli poznać nieruchomość i jej atuty. Proces wynajmu: Pomagamy w negocjacjach warunków najmu oraz zapewniamy wsparcie w procesie zawierania umowy najmu, dbając o zabezpieczenie Twoich interesów. Monitorowanie i wsparcie: Po wynajęciu nieruchomości, świadczymy wsparcie w monitorowaniu umowy najmu oraz reagujemy na ewentualne potrzeby zarówno wynajmującego, jak i najemcy. Jeśli poszukujesz rzetelnego partnera, który pomoże Ci znaleźć odpowiednich najemców dla Twojej nieruchomości i zadba o płynny proces wynajmu, skontaktuj się z nami już dziś. Jesteśmy gotowi, by być Twoim wsparciem na drodze do udanej transakcji wynajmu nieruchomości!',
        textEN: 'We invite you to use our professional real estate rental brokerage, which is based on the extensive experience and commitment of our team. Our company offers comprehensive assistance in finding suitable tenants for your property. Outreach and marketing: We use a variety of marketing tools and networks to reach potential tenants and promote your property in an effective and attractive way. Tenant selection: We conduct a careful selection of potential tenants, making sure to find people who match your expectations and standards. Presentations: We organize professional presentations so that potential tenants can familiarize themselves with the property and its assets. Rental process: We help negotiate the terms of the lease and provide support in the process of concluding the lease agreement, taking care to safeguard your interests.     5. Monitoring and support: Once the property is rented, we provide support in monitoring the lease agreement and respond to any needs of both the landlord and the tenant. If you are looking for a reliable partner to help you find the right tenants for your property and take care of a smooth rental process, contact us today. We are ready to be your support on the road to a successful property rental transaction!',
        id: 4,
        stepsPL: [
            {
                id: 1,
                title: 'Kontakt z biurem nieruchomości:',
                text: 'Skontaktuj się z biurem nieruchomości, aby zgłosić swoje zainteresowanie wynajmem nieruchomości. Twoje zapytanie zostanie przydzielone agentowi prowadzącemu.',
            },
            {
                id: 2,
                title: 'Wstępna konsultacja:',
                text: 'Agent prowadzący przeprowadzi wstępną konsultację, aby poznać Twoje wymagania dotyczące wynajmu nieruchomości. Omówicie kwestie takie jak metody wynajmu, warunki umowy, oczekiwana cena wynajmu, preferencje wobec najemcy itp.',
            },
            {
                id: 3,
                title: 'Wycena najmu:',
                text: 'Twój agent dokona wyceny nieruchomości, biorąc pod uwagę lokalny rynek i unikalne cechy Twojej nieruchomości. Zaproponuje Ci odpowiednią cenę wynajmu.',
            },
            {
                id: 4,
                title: 'Dokumentacja prawna:',
                text: 'Sprawdzimy stan prawny nieruchomości i potwierdzimy, że jest zgodny z wymogami. Potem podpiszemy umowę pośrednictwa, która określa warunki współpracy z biurem nieruchomości.',
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
        stepsEN: [
            {
                id: 1,
                title: 'Contact our real estate office:',
                text: 'Contact a real estate office to submit your interest in renting a property. Your inquiry will be assigned to a lead agent.',
            },
            {
                id: 2,
                title: 'Initial consultation:',
                text: 'The lead agent will hold an initial consultation to learn about your rental property requirements. You will discuss issues such as rental methods, contract terms, expected rental price, tenant preferences, etc.',
            },
            {
                id: 3,
                title: 'Rental Valuation:',
                text: 'Your agent will make a valuation of the property, taking into account the local market and the unique features of your property. He will offer you a suitable rental price.',
            },
            {
                id: 4,
                title: 'Legal documentation:',
                text: "We will make sure that the legal status of the property is compliant. Then we'll sign a brokerage agreement, which sets out the terms of cooperation with the real estate agency.",
            },
            {
                id: 5,
                title: 'Preparation of marketing materials:',
                text: 'Provide the agent with the information and documentation needed to prepare the rental offer, including photos and a description of the property.',
            },
            {
                id: 6,
                title: 'Offer visibility:',
                text: 'The real estate agency will publish the rental offer in various channels to reach potential tenants',
            },
            {
                id: 7,
                title: 'Property presentations:',
                text: 'The agent will arrange property presentations to interested tenants, allowing them to get to know the property.',
            },
            {
                id: 8,
                title: 'Offers and negotiations:',
                text: 'After receiving offers from potential tenants, the agent will communicate to you the conditions of the rental offer, including the price and other details. You can negotiate terms with potential tenants.',
            },
            {
                id: 9,
                title: 'Rental agreement:',
                text: 'Once you accept a rental offer, the real estate agency will help draw up a rental agreement that specifies the terms of the rental, such as price, rental period, payment terms, etc.',
            },
            {
                id: 10,
                title: 'Transfer of the property to the tenant:',
                text: 'Once the lease agreement is signed, the real estate agency will help hand over the property to the new tenant, collect the first rent and handle the registration formalities.',
            },
            {
                id: 11,
                title: 'Support during the lease:',
                text: '     The real estate agency can continue to provide support during the lease, resolving any problems or questions about the property.',
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
        img: './img/aaa_slider_2.png',
    },
    {
        titlePL: 'Pośrednictwo wynajmu',
        titleEN: 'lease brokerage',
        textPL: 'Zapraszamy do skorzystania z naszego profesjonalnego pośrednictwa w poszukiwaniu idealnego lokalu pod wynajem. Nasza firma oferuje kompleksową pomoc w znalezieniu nieruchomości dostosowanej do Twoich potrzeb i oczekiwań. Analiza potrzeb: Rozpoczynamy od dogłębnego zrozumienia Twoich potrzeb, oczekiwań oraz warunków, które są dla Ciebie istotne w poszukiwanej nieruchomości pod wynajem. Poszukiwanie lokali: Aktywnie przeszukujemy rynek, aby znaleźć lokale odpowiadające Twoim kryteriom. Dzięki naszym zasobom i sieci kontaktów, prezentujemy propozycje dostosowane do Twoich preferencji. Wizytacje i prezentacje: Organizujemy wizytacje wybranych lokali, abyś mógł/mogła poznać potencjalne miejsce wynajmu i ocenić jego atuty. Negocjacje i pomoc w zawarciu umowy: Pomagamy w negocjacjach warunków najmu oraz zapewniamy wsparcie w procesie zawierania umowy, dbając o to, aby spełniała ona Twoje oczekiwania.     5. Wsparcie na każdym etapie: Nasi agenci służą Ci wsparciem przez cały proces poszukiwania, udzielając odpowiedzi na pytania i pomagając w podjęciu decyzji. Jeśli szukasz zaufanego partnera, który pomoże Ci znaleźć idealny lokal pod wynajem zgodny z Twoimi oczekiwaniami, skontaktuj się z nami już dziś. Jesteśmy gotowi, by być Twoim wsparciem w znalezieniu nieruchomości, która spełni Twoje potrzeby!',
        textEN: 'You are welcome to use our professional brokerage in your search for the perfect rental property. Our company offers comprehensive assistance in finding a property tailored to your needs and expectations. Analysis of needs: We start with an in-depth understanding of your needs, expectations and the conditions that are important to you in the rental property you are looking for. Property Search: We actively search the market to find properties that match your criteria. With our resources and network of contacts, we present proposals tailored to your preferences. Viewings and presentations: We organize visits to selected units so that you can get to know a potential rental location and evaluate its strengths. Negotiations and contract assistance: We help you negotiate the terms of the lease and provide support in the contracting process, ensuring that it meets your expectations. Support at every stage: Our agents support you through the entire search process, answering your questions and helping you make a decision. If you are looking for a trusted partner to help you find the perfect rental property that meets your needs, contact us today. We are ready to be your support in finding a property that meets your needs!',
        id: 5,
        stepsPL: [
            {
                id: 1,
                title: 'Kontakt z biurem nieruchomości:',
                text: 'Skontaktuj się z biurem nieruchomości, aby zgłosić swoje zainteresowanie najmem nieruchomości. Zostanie Ci przydzielony agent prowadzący, który będzie Twoim głównym kontaktem.',
            },
            {
                id: 2,
                title: 'Konsultacja i poznanie wymagań:',
                text: 'Agent prowadzący przeprowadzi konsultację, aby zrozumieć Twoje wymagania i preferencje dotyczące wynajmu nieruchomości. Omówicie kwestie takie jak rodzaj nieruchomości, lokalizacja, oczekiwana cena wynajmu itp.',
            },
            {
                id: 3,
                title: 'Wyszukiwanie odpowiednich ofert:',
                text: 'Twój agent będzie regularnie dostarczać Ci oferty nieruchomości, które spełniają Twoje kryteria.',
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
        stepsEN: [
            {
                id: 1,
                title: 'Contact the real estate office:',
                text: 'Contact the real estate office to register your interest in leasing the property. You will be assigned a lead agent who will be your main contact.',
            },
            {
                id: 2,
                title: 'Consultation and learning about your requirements:',
                text: 'The lead agent will conduct a consultation to understand your requirements and preferences for renting the property. You will discuss issues such as property type, location, expected rental price, etc.',
            },
            {
                id: 3,
                title: 'Searching for suitable properties:',
                text: 'Your agent will regularly provide you with property listings that meet your criteria.',
            },
            {
                id: 4,
                title: 'Evaluating proposals and property visits:',
                text: 'Together with your agent, you evaluate rental proposals and decide which properties are worth visiting in person.',
            },
            {
                id: 5,
                title: 'Property Presentations:',
                text: 'The agent arranges property viewings so you can see the properties you are interested in.',
            },
            {
                id: 6,
                title: 'Contract negotiations:',
                text: 'When you find a property you want to rent, the agent will help negotiate the terms of the lease, such as rent price, lease term, etc.',
            },
            {
                id: 7,
                title: 'Preparation of lease documents:',
                text: 'Once the terms are agreed upon, the agent will help prepare the lease agreement and other documents necessary for signing the contract.',
            },
            {
                id: 8,
                title: 'Signing the lease agreement:',
                text: 'After accepting the terms and conditions, you sign the lease agreement for the property.',
            },
            {
                id: 9,
                title: 'Payment of deposit and first rent:',
                text: 'You are required to pay a deposit and the first rent in accordance with the lease agreement.',
            },
            {
                id: 10,
                title: 'Handover of the property:',
                text: 'The agent will coordinate the handover of the property, including receiving the keys and checking the condition of the property.',
            },
            {
                id: 11,
                title: 'Support during the rental period:',
                text: "During the rental period, you can rely on the agent's support for any questions or problems with the property.",
            },
            {
                id: 12,
                title: 'Lease termination:',
                text: 'At the end of the lease term, the agent can help you with the procedure for ending the lease and releasing the property.',
            },
            {
                id: 13,
                title: 'Repeated process:',
                text: 'If necessary, the agent will continue to provide you with rental proposals and assist you in the process of finding your next rental property.',
            },
        ],
        img: './img/aaa_slider_3.png',
    },
]

const Offers = () => {
    const { data } = useMyContext()
    const title = data === 'pl' ? 'USŁUGI' : 'OFFERS'
    const [readMore, setReadMore] = useState<boolean>(false)

    const [offerNumber, setOfferNumber] = useState<number>(1)
    const [activeOffer] = offersData.filter((offer) => offer.id === offerNumber)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [false])
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
                            : 'What it looks like?'}
                    </div>
                    <Steps
                        readMore={readMore}
                        data={data}
                        items={
                            data === 'pl'
                                ? activeOffer.stepsPL
                                : activeOffer.stepsEN
                        }
                    />
                    <button
                        onClick={() => setReadMore(!readMore)}
                        className={c.more}
                    >
                        {readMore
                            ? data === 'pl'
                                ? 'mniej'
                                : 'less'
                            : data === 'pl'
                            ? 'czytaj więcej'
                            : 'read more'}
                    </button>
                </section>
            </section>
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Offers
