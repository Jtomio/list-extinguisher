'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

import { labels } from '../data/data'

import { DataTableRowActions } from './data-table-row-actions'
import { DataTableColumnHeader } from './data-table-column-header'
import { List } from '../data/schema'

export const columns: ColumnDef<List>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'label',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="truncate font-medium">{row.getValue('label')}</span>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EH" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('type')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'weight',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Peso" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('weight')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'dateDue',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recarga" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('dateDue')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'dateTest',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ReTeste" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('dateTest')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'place',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Local" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('place')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'area',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Area" />
    ),
    cell: ({ row }) => <div className="">{row.getValue('area')}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
