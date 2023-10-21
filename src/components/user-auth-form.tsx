'use client'

import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-dropdown-menu'
import * as React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Icons } from './icons'
import { useRouter } from 'next/navigation'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

export default function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setisLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setisLoading(true)

    setTimeout(() => {
      setisLoading(false)
    }, 3000)
  }

  const handleLogin = async () => {
    if (email === 'medriase@gmail.com' && password === 'jeison') {
      return router.push('/dashboard')
    } else {
      setError('Usuário ou senha incorretos!')
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only">Senha</Label>
            <Input
              id="password"
              placeholder="*****"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading} onClick={handleLogin}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Entrar com e-mail
          </Button>
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  )
}
