import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'

import { z } from 'zod'

import { columns } from '@/components/data-table/columns'
import { DataTable } from '@/components/data-table/data-table'
import { listSchema } from '@/components/data/schema'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Lista extintores',
  description: 'Inspeção mensal dos extintores Equipe Delta.',
}

async function getLists() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/components/data/lists.json'),
  )

  const lists = JSON.parse(data.toString())

  return z.array(listSchema).parse(lists)
}

export default async function TaskPage() {
  const lists = await getLists()

  return (
    <>
      <Header />
      <div className="container">
        <div className="py-10">
          <DataTable data={lists} columns={columns} />
        </div>
      </div>
    </>
  )
}
