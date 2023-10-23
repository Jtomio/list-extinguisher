'use client'

import { BsFiletypeXls } from 'react-icons/bs'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function DataTableExportToXls() {
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const handleCheckboxChange = (table: number) => {
    if (selectedRows.includes(table)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== table))
    } else {
      setSelectedRows([...selectedRows, table])
    }
  }

  return (
    <Button
      // onClick={handleCheckboxChange}
      variant="outline"
      size="sm"
      className="ml-auto h-8 lg:flex"
    >
      <BsFiletypeXls className="mr-2 h-4 w-4" />
      Exportar
    </Button>
  )
}
