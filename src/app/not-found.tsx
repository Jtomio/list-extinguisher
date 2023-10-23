import Image from 'next/image'
import React from 'react'
import ImgError from '../assets/404-Error-pana.svg'
import IconFire from '../../public/Icon-fire.svg'
import Link from 'next/link'

export default function Notfound() {
  return (
    <div className="container">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mb-20  flex items-center justify-center border-b border-t border-b-primary border-t-primary py-4 text-xl font-medium">
          <Image src={IconFire} width={50} alt="icon fire" />
          <h1 className="text-bold">
            Brigada <span className="text-primary">online</span>
          </h1>
        </div>
        <h1 className="text-center text-3xl font-bold">Ooppss!</h1>
        <div className="w-ful">
          <Image src={ImgError} width={350} alt="error 404" />
        </div>
        <h2 className="text-center">Não encontramos nada por aqui.</h2>
        <Link href={'/dashboard'} className="text-indigo-500 underline">
          Retorne ao início
        </Link>
      </div>
    </div>
  )
}
