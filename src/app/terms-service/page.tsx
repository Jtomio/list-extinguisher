import Link from 'next/link'
import React from 'react'

export default function TermsOfService() {
  return (
    <main className="flex flex-col py-4">
      <h1 className="py-4 text-center font-bold">
        Antes de prosseguir, leia os 14 principais itens abordados em nossos
        Termos de Uso dos Produtos:
      </h1>
      <div className="flex">
        <ol className="text-justify">
          <li className="py-2">
            1 - Todos os produtos e conteúdos desta plataforma tratam-se de
            apoio técnico as atividades diárias dos bombeiros da Equipe Delta da
            Brigada de Incêndio Joinville/SC - TUPY S.A
          </li>
          <li className="py-2">
            2 - Ao cadastrar-se na plataforma, você concorda em conceder seu
            e-mail. O cadastro gratuito é limitado a uma conta por
            pessoa/entidade - não é permitido mais de um cadastro por
            pessoa/entidade.
          </li>
          <li className="py-2">
            3 - Ao cadastrar-se, autoriza a{' '}
            <span className="font-semibold">
              COLETA DE DADOS DA SUA PESQUISA
            </span>{' '}
            e acessos aos conteúdos, e autoriza o envio de conteúdos ao seu
            e-mail.
          </li>
          <li className="py-2">
            4 - No plano pago, você autoriza{' '}
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
          <li className="py-2">
            5 - Você pode{' '}
            <span className="font-semibold">CANCELAR A ASSINATURA</span> a
            qualquer momento, sem qualquer custo adicional ou fidelidade.{' '}
            <span className="font-semibold">
              O cancelamento deverá ser feito pelo próprio usuário
            </span>{' '}
            através do menu "Minha Assinatura".
          </li>
          <li className="py-2">
            6 - É responsabilidade do usuário certificar-se da{' '}
            <span className="font-semibold">VIGÊNCIA DAS LEIS</span> e
            jurisprudências referidas, bem como da adequação dos produtos e
            conteúdos à fase processual e riscos de improcedência. Não
            oferecemos garantia de que os conteúdos estão atualizados, adequados
            à legislação vigente ou qualquer responsabilidade pelo insucesso no
            uso dos modelos por qualquer razão, seja por se mostrarem
            inadequados, desatualizados ou impróprios ao caso específico.
          </li>
          <li className="py-2">
            7 - Antes de assinar esta plataforma, verifique se todas os produtos
            e conteúdos de seu interesse estão disponíveis no campo de busca.
            Possíveis sugestões de inclusão de novos conteúdos em edições
            futuras dos produtos e e-books serão analisadas, porém sem garantia
            de aceitação ou qualquer compromisso que serão disponibilizados.
          </li>
          <li className="py-2">
            8 - Você <span className="font-semibold">PODE</span> utilizar os
            produtos desta plataforma exclusivamente para uso imediato em casos
            reais e concretos do seu cliente final, para fins profissionais no
            exercício da Advocacia no âmbito processual administrativo ou
            judicial.
          </li>
          <li className="py-2">
            9 - Você <span className="font-semibold">NÃO PODE</span> baixar,
            armazenar, revender, divulgar, distribuir ou publicar mesmo que
            gratuitamente o conteúdo desta plataforma para fins não diretamente
            ligados a um caso concreto e imediato ligado ao processo do seu
            cliente final.{' '}
            <span className="font-semibold">
              Não é permitido baixar ou armazenar os produtos da plataforma
              simplesmente para uso futuro
            </span>
            , exceto as importações das listas , sem a existência de um caso
            real e concreto.
          </li>
          <li className="py-2">
            10 -{' '}
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
          <li className="py-2">
            11 -{' '}
            <span className="font-semibold">Cancelamento compulsório.</span> É a
            nós reservado o direito de efetuar o cancelamento ou bloqueio
            imediato e sem aviso prévio da sua conta (ou de acessos ligados
            direta ou indiretamente a você), seja ela paga ou gratuita, caso
            você não cumpra qualquer das clausulas presentes nestes termos. Nós
            podemos bloquear o acesso e solicitar informações adicionais aos
            usuários caso identifiquemos atividades suspeitas ou padrões de
            utilização fora do esperado para a proposta desta ferramenta.
          </li>
          <li className="py-2">
            12 - Qualquer dificuldade, impedimento, solicitação, sugestão ou
            reclamação pode ser feito pelo canal de{' '}
            <span className="font-semibold">COMUNICAÇÃO</span> da plataforma,
            pelo e-mail{' '}
            <span className="font-semibold">medriase@gmail.com</span>.
          </li>
          <li className="py-2">
            13 - Ao prosseguir você assume estar ciente e concordar os termos
            citados.
          </li>
          <li className="py-2">
            14 - Por favor leia também nossa Política de Privacidade e nossos
            Termos de Uso completos para ficar ciente de todos os detalhes que
            envolvem o uso do site e/ou download dos conteúdos. Se você não
            concorda ou tem dúvidas sobre qualquer dos itens, por favor não
            prossiga, e entre em contato conosco para esclarecimentos.
          </li>
        </ol>
      </div>
    </main>
  )
}
