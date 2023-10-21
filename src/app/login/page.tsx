import Link from 'next/link'
import IconFire from '../../../public/Icon-fire.svg'
import Image from 'next/image'
import UserAuthForm from '@/components/user-auth-form'

export default function AuthenticationPage() {
  return (
    <>
      <div className="relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-screen flex-col bg-[#000] p-10 py-32 text-white dark:border-r md:flex lg:flex">
          <div className="absolute inset-0 h-screen  sm:hidden md:hidden lg:hidden" />
          <div className="relative z-20 flex items-center justify-center border-b border-t border-b-primary border-t-primary py-4 text-xl font-medium">
            <Image src={IconFire} width={50} alt="icon fire" />
            <h1 className="text-bold">
              Brigada <span className="text-primary">online</span>
            </h1>
          </div>
          <div className="relative z-20 mt-auto hidden md:flex">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Essa aplicação web tornará seuas atividades de inspeção
                muito ágil e produtiva.&rdquo;
              </p>
              <footer className="text-sm">Jeison Tomio</footer>
            </blockquote>
          </div>
        </div>
        <div className="py-32 ">
          <div className="relative z-20 mb-32 flex items-center justify-center border-b border-t border-b-primary border-t-primary py-4 text-xl font-medium md:hidden lg:hidden">
            <Image src={IconFire} width={50} alt="icon fire" />
            <h1 className="text-bold">
              Brigada <span className="text-primary">online</span>
            </h1>
          </div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Entre com seu e-mail de login
              </p>
            </div>
            <UserAuthForm />
            <div className="flex items-center justify-center gap-3">
              <p className="text-center text-muted-foreground">
                Não possui conta:
              </p>
              <Link href="/createaccount">
                <span className="underline hover:text-primary">
                  Cadastrar e-mail
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
