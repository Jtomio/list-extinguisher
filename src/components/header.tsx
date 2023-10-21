import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOutIcon, MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import { ToggleDark } from './toggleDark'
// import { signIn, signOut} from 'next-auth/react'

export default function Header() {
  // const handleLoginClick = async () => {
  //   await signIn()
  // }
  // const handleLogoutClick = async () => {
  //   await signOut()
  // }
  return (
    <Card className="-mt-3 flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'} size={'icon'}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader className="text-left text-lg font-semibold">
            Equipe Delta
          </SheetHeader>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 py-4">
              <Avatar>
                <AvatarFallback>DL</AvatarFallback>
                <AvatarImage src="https://avatars.githubusercontent.com/u/102593994?s=400&u=970ed4d411a631c4f5ee6745202d882a4bc85024&v=4" />
              </Avatar>
              <p className="font-semibold text-muted-foreground">
                Jeison Tomio
              </p>
              <LogOutIcon className="ml-auto" />
            </div>
            <Separator />
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg">
        Equipe <span className="font-semibold text-primary">DELTA</span>
      </h1>
      <ToggleDark />
    </Card>
  )
}
