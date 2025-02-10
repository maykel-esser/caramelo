import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { ScrollArea } from "@mantine/core";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Política de privacidade"
                    backToPreviousPage={true}
                />
                <section>
                    <ScrollArea.Autosize mah={650} mx="auto" type="always">
                        <p className="mb-4">
                            É importante esclarecer que dados pessoais são
                            considerados como: todas as informações que possam
                            ser utilizadas para identificar alguma pessoa. Estes
                            dados, podem ser considerados sensíveis, tais como:
                            convicção religiosa, saúde ou à vida sexual, origem
                            racial ou étnica, opinião política, dado genético ou
                            biométrico, filiação a sindicato ou a organização de
                            caráter religioso, filosófico ou político.
                        </p>
                        <h2 className="font-bold mb-2">
                            SEÇÃO I - INFORMAÇÕES GERAIS
                        </h2>
                        <p className="mb-4">
                            Nesta <strong>política de privacidade</strong> será
                            informado a maneira que ocorre o tratamento dos
                            dados pessoais das pessoas que acessam o site
                            www.appcaramelo.com.br informando assim, de forma
                            transparente quais são os dados, qual o intuito da
                            coleta e a maneira que os visitantes podem controlar
                            ou deletar suas informações.
                        </p>
                        <p className="mb-4">
                            Este texto foi criado de acordo com a lei de
                            Proteção de Dados Pessoais (Lei /18), o Marco Civil
                            da Internet (Lei 12.965 /14) e também o Regulamento
                            da UE n. 2016/6790. Vale ressaltar que, este texto
                            poderá sofrer alterações por conta de eventuais
                            atualizações normativas.
                        </p>
                        <p className="mb-4">
                            Informamos que toda e qualquer informação pessoal
                            coletada por por nosso website
                            www.appcaramelo.com.br será utilizada para melhorar
                            a sua experiência ao navegar em nosso website,
                            visando desta maneira que sua visita se torne mais
                            vantajosa e assertiva.
                        </p>
                        <p className="mb-4">
                            A confidencialidade das informações pessoais dos
                            usuários do site www.appcaramelo.com.br é de suma
                            importância para nossa equipe, por este motivo,
                            buscamos otimizar continuamente todos os processos
                            internos, utilizando o{" "}
                            <a
                                href="https://politicaprivacidade.com.br/"
                                target="_blank"
                            >
                                gerador de politica de privacidade
                            </a>{" "}
                            de forma clara, para mante-los em segurança e de
                            acordo com todas as normas impostas.
                        </p>
                        <h2 className="font-bold mb-2">
                            SEÇÃO II - COLETA DOS DADOS
                        </h2>
                        <p className="mb-4">
                            Os dados pessoais dos visitantes podem ser coletados
                            quando:
                        </p>
                        <p className="mb-4">
                            <strong>II.I</strong> - O indivíduo realiza a
                            criação de um cadastro no site
                            www.appcaramelo.com.br e com base nisso podem ser
                            solicitados dados como: email, nome, cidade,
                            telefone, etc.
                        </p>
                        <p className="mb-4">
                            <strong>II.II</strong> - O indivíduo navega nas
                            páginas de nosso site www.appcaramelo.com.br e neste
                            caso, podem ser coletados dados como:
                            palavras-chaves de origem do buscador, comentários,
                            navegador utilizado, IP da rede, etc.
                        </p>
                        <p className="mb-4">
                            <strong>II.III</strong> - Por meio de terceiros,
                            tais como: Google e/ou Facebook, sendo que, no
                            momento de logar em um destes sites é autorizado
                            diretamente pelo terceiro.
                        </p>
                        <p className="mb-4">
                            No caso de envio de newsletters ou até mesmo envio
                            de avisos por e-mail os cookies podem ser utilizados
                            para direcionar um conteúdo mais adequado ao usuário
                            final, com o intuito de melhorar a experiência de
                            quem está lendo o e-mail, vale ressaltar que cada
                            provedor de email possui suas diretrizes, como por
                            exemplo ao acessar o site do{" "}
                            <a href="https://www.correiosweb.com.br/rastreamento-correios">
                                rastreamento correios
                            </a>{" "}
                            você deverá respeitar suas devidas políticas.
                        </p>
                        <h2 className="font-bold mb-2">SEÇÃO III - ACEITE</h2>
                        <p className="mb-4">
                            A partir do momento da utilização do website
                            www.appcaramelo.com.br pressupõe que o usuário
                            aceitou a <strong>política de privacidade.</strong>{" "}
                            Desta forma reservamos ao direito de modificar esta
                            política sem que seja realizado um aviso prévio. Por
                            este motivo, nós recomendamos que os usuários
                            realizem uma consulta regularmente a nossa política,
                            para que desta forma, se mantenham sempre
                            atualizados de possíveis alterações, caso seja
                            necessário é possível entrar em contato através de
                            nosso e-mail: maykelesser@gmail.com informando suas
                            dúvidas.
                        </p>
                        <p className="mb-4">
                            O desenvolvedor poderá coletar informações pessoais
                            do usuário que acessa o site, tais como nome,
                            e-mail, número de telefone fixo e/ou celular,
                            endereço, data de nascimento, ip e/ou outros dados.
                            Na grande maioria das vezes, esses dados são
                            utilizados para ativar a função de geotarget (exibir
                            determinados conteúdos de acordo com a localização)
                            e também filtrando por tipo de usuário (analisando a
                            necessidade de cada um).
                        </p>
                        <h2 className="font-bold mb-2">
                            SEÇÃO IV - VINCULO A SITES EXTERNOS
                        </h2>
                        <p className="mb-4">
                            O site www.appcaramelo.com.br pode conter vinculo
                            com sites externos, estes que podem possuir
                            ferramentas e/ou informações proveitosas para os
                            usuários. Esta{" "}
                            <strong>política de privacidade</strong> não é
                            empregada aos sites externos, se for do interesse do
                            usuário, o mesmo deverá acessar a{" "}
                            <strong>política de privacidade</strong> do site em
                            questão para ter conhecimento dos detalhes.
                        </p>
                        <h2 className="font-bold mb-2">COOKIES</h2>
                        <p className="mb-4">
                            O site usa cookies com o objetivo de armazenar
                            informações, como por exemplo, as preferências do
                            publico que acessa um determinado site, esses
                            cookies podem ser coletados por meio de um mero
                            popup ou até mesmo uma integração com demais
                            serviços.
                        </p>
                        <p className="mb-4">
                            Você como usuário do website www.appcaramelo.com.br
                            possui a total autonomia de desativar os cookies,
                            basta acessar a configuração do seu navegador de
                            preferência e realizar a modificação, ou caso tenha,
                            poderá utilizar um antivirus que faça essa
                            configuração diretamente. Vale ressaltar que, essa
                            modificação poderá influenciar em como você navega
                            em nosso site e em outros sites. Este fato ocorre,
                            porque determinas programações necessitam da
                            utilização de cookies para funcionarem corretamente,
                            tais como os sites que necessitem de login em
                            determinada área restrita.
                        </p>
                        <h2 className="font-bold mb-2">ANÁLISE DE DADOS</h2>
                        <p className="mb-4">
                            A nossa empresa utiliza o serviço do Google
                            Analytics para mensurar, calcular e analisar todo o
                            tráfego que recebe no site www.appcaramelo.com.br
                            esta ferramenta coleta e processa os dados de acordo
                            com a sua própria política, partindo do pressuposto
                            da aceitação do usuário final, a política está
                            disponível nos links abaixo:
                        </p>
                        <ul>
                            <li>
                                https://www.google.com/intl/pt-BR/policies/privacy/partners/
                            </li>
                            <li>https://policies.google.com/privacy</li>
                            <li>https://policies.google.com/terms</li>
                        </ul>
                        <p className="mb-4">
                            Vale ressaltar que no caso do Google ou Parceiros
                            deste, utilizarem os dados coletados, a
                            responsabilidade é única e exclusiva destes, desta
                            forma o site www.appcaramelo.com.br se isenta de
                            qualquer responsabilidade por consequência do uso
                            dos dados.
                        </p>
                        <h2 className="font-bold mb-2">ATUALIZAÇÃO</h2>
                        <p className="mb-4">
                            Essa <strong>politica de privacidade</strong> obteve
                            sua última atualização na data de 07/01/2025,
                            podendo ser modificada a qualquer momento, sem aviso
                            prévio.
                        </p>
                    </ScrollArea.Autosize>
                </section>
            </main>
        </>
    );
}
