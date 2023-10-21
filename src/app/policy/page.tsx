import Link from 'next/link'
import React from 'react'

export default function TermsOfService() {
  return (
    <main className="container flex flex-col py-4">
      <h2 className="py-4 text-justify font-bold ">
        Quando você acessa ou baixa nossos produtos, está confiando a nós
        algumas informações. Entendemos que isso é uma grande responsabilidade e
        trabalhamos duro para proteger esses dados e manter a sua privacidade.
      </h2>
      <p className="py-4 text-justify">
        Antes de prosseguir, leia os principais itens abordados em nossa
        Política de Privacidade:
      </p>
      <div className="flex">
        <ol className="px-4 text-justify">
          <li className="list-decimal py-2">
            Em qualquer plano você autoriza o uso do conteúdo das áreas de seu
            interesse, através da{' '}
            <span className="font-semibold">
              COLETA DE DADOS DA SUA PESQUISA
            </span>{' '}
            e acessos aos modelos e autoriza o envio deste conteúdo ao seu
            e-mail.
          </li>
          <li className="list-decimal py-2">
            No plano pago, você autoriza{' '}
            <span className="font-semibold">
              RENOVAÇÃO AUTOMÁTICA CONSENTIDA:
            </span>{' '}
            Todos os planos pagos no cartão de crédito constituem contrato de
            assinatura renovável mensalmente por tempo indeterminado, com
            <span className="font-semibold">
              COBRANÇAS MENSAIS realizadas automaticamente
            </span>{' '}
            no cartão de crédito indicado,{' '}
            <span className="font-semibold">
              até que ocorra o cancelamento pelo próprio usuário
            </span>{' '}
            - situação na qual todas as cobranças futuras cessarão e o usuário
            perderá acesso à plataforma e consequentemente de download dos
            conteúdos. O cadastro pago (PRO) é limitado a uma conta por
            pessoa/entidade - não é permitido mais de um cadastro por
            pessoa/entidade.
          </li>
          <li className="list-decimal py-2">
            {' '}
            <Link
              href="https://modeloinicial.com.br/conteudo/termos-de-uso-e-privacidade"
              target="_blank"
              className="font-semibold text-indigo-500"
            >
              LGPD.
            </Link>{' '}
            Nós utilizamos cookies e outras tecnologias para melhorar a
            experiência do usuário, e podemos capturar, armazenar e processar
            suas informações pessoais. Você possui o direito de acessar,
            solicitar exclusão ou confirmar que nós processamos os seus dados
            pessoais, exceto quando obrigações legais ou tributárias venham a
            nos impedir. A gestão do seus dados é feita por{' '}
            <span className="font-semibold">Brigada online.</span>
          </li>
          <li className="list-decimal py-2">
            Qualquer dificuldade, impedimento, solicitação, sugestão ou
            reclamação pode ser feito pelo canal de{' '}
            <span className="font-semibold">COMUNICAÇÃO</span> da plataforma,
            pelo e-mail{' '}
            <span className="font-semibold">medriase@gmail.com</span>.
          </li>
          <li className="list-decimal py-2">
            Por favor leia também nossos{' '}
            <Link href="/terms-service" className="text-indigo-500 underline">
              Termos de Uso
            </Link>{' '}
            completos para ficar ciente de todos os detalhes que envolvem o seu
            uso dos nossos conteúdos e e-books. Se você não concorda ou tem
            dúvidas sobre qualquer dos itens, por favor não prossiga, e entre em
            contato conosco para esclarecimentos.
          </li>
        </ol>
      </div>
      <div className="flex flex-col text-justify">
        <h2 className="pt-4">
          TERMO DE CONSENTIMENTO DE ACORDO COM A{' '}
          <Link
            href="https://modeloinicial.com.br/conteudo/politica-de-privacidade"
            target="_blank"
            className="text-indigo-500"
          >
            LEI GERAL DE PROTEÇÃO DE DADOS - LGPD
          </Link>
        </h2>
        <p className="py-2">
          Estamos empenhados em salvaguardar a sua privacidade ao utilizar a
          plataforma. Este termo tem a finalidade de deixar o mais claro
          possível a nossa política de coleta e compartilhamento de dados,
          informando sobre os dados coletados e como os utilizamos.
        </p>
        <p className="py-2">
          Ao utilizar esta plataforma online de acesso e download de e-books,
          seja no modo gratuito ou pago, você declara o seu{' '}
          <span className="font-semibold">EXPRESSO CONSENTIMENTO</span> para
          coletarmos informações sobre você, tais como:
        </p>
        <ul className="list-disc px-4 py-2">
          <li>
            Informações que você oferece. Podemos coletar dados fornecidos por
            você no cadastro, tais como nome e sobrenome, endereço para
            correspondência, endereço de e-mail, informações de pagamento,
            endereço IP, outras informações de contato on-line ou número de
            telefone, foto e demais informações requeridas no cadastro ou
            vinculados às mídias fornecidos por você no login (Facebook, Gmail,
            Outlook, e-mail, etc.).
          </li>
          <li>
            Conteúdos de seu interesse. Podemos coletar o conteúdo das áreas de
            seu interesse, como quando realiza uma pesquisa, acessa ou cria
            conteúdos, cadastra uma conta, cria ou compartilha comentários ou
            conteúdos, para enviarmos por e-mail conteúdos de seu interesse.
          </li>
          <li>
            Comunicação. Podemos registrar e gravar todos os dados fornecidos em
            toda comunicação realizada com nossa equipe, seja por correio
            eletrônico, mensagens, telefone ou qualquer outro meio.
          </li>
          <li>
            Certificação de segurança. Para certificar o uso restrito pelo
            detentor da conta, eventuais informações podem ser solicitadas por
            mensagem ou telefone, tais como CPF, data de nascimento, OAB ou
            endereço.
          </li>
          <li>
            Endereço eletrônico (e-mail). Ao fazer login na plataforma,
            coletaremos o seu e-mail para fins cadastrais, pelo qual ocorrerão
            as comunicações de atualizações da plataforma, promoções e
            gerenciamento de sua conta.
          </li>
          <li>
            Cookies. Registramos dados de sua visita à plataforma através de
            cookies e outras tecnologias de rastreamento incluindo seu endereço
            IP e nome de domínio, a versão do seu navegador e do seu sistema
            operacional, dados de tráfego online, dados de localização, logs da
            web e outros dados de navegação.
          </li>
        </ul>
      </div>
    </main>
  )
}
