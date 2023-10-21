/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/components/ui/select'
import Header from '@/components/header'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu'

export type ListExtinguisher = {
  id: string
  manufacturing: number
  status: 'V' | 'T' | 'R'
  eh: string
  nextRecharge: string
  test: number
  place: string
  area: string
}

const data: ListExtinguisher[] = [
  {
    id: 'eh2000',
    manufacturing: 316,
    status: 'V',
    eh: 'EH2000',
    nextRecharge: 'dez/23',
    test: 26,
    place: 'Verificar local',
    area: 'Acabamento',
  },
  {
    id: 'eh2001',
    manufacturing: 318,
    status: 'V',
    eh: 'EH2001',
    nextRecharge: 'nov/23',
    test: 26,
    place: 'Fusão',
    area: 'Acabamento',
  },
  {
    id: 'eh2002',
    manufacturing: 320,
    status: 'T',
    eh: 'EH2003',
    nextRecharge: 'ago/23',
    test: 25,
    place: 'Fusão',
    area: 'Acabamento',
  },
]

export const columns: ColumnDef<ListExtinguisher>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="text-left font-semibold text-green-600">
        {row.getValue('status')}
      </div>
    ),
  },
  {
    accessorKey: 'eh',
    header: () => <div className="text-left">EH</div>,
    cell: ({ row }) => (
      <div className="text-left uppercase">{row.getValue('eh')}</div>
    ),
  },
  {
    accessorKey: 'manufacturing',
    header: () => <div className="text-left">Nº Fab.</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue('manufacturing')}</div>
    ),
  },
  {
    accessorKey: 'nextRecharge',
    header: () => <div className="text-left">Venc.</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue('nextRecharge')}</div>
    ),
  },
  {
    accessorKey: 'test',
    header: () => <div className="text-left">Teste</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue('test')}</div>,
  },
  {
    accessorKey: 'place',
    header: () => <div className="text-left">Local</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue('place')}</div>,
  },
  {
    accessorKey: 'area',
    header: () => <div className="text-left">Local</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue('area')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const editList = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Ações</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Alterar</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(editList.id)}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Dashboard() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filtrar local..."
            value={(table.getColumn('eh')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('eh')?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <div className="ml-auto">
            <Button variant={'outline'}>Exportar</Button>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} de {''}
            {table.getFilteredRowModel().rows.length} itens selecionados.
          </div>
          <div className="flex items-center space-x-6 py-1 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">extinores</p>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger className="h-8">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                    className="flex items-center"
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={'outline'}
                className="hidden h-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Ir pag. 1</span>
                <DoubleArrowLeftIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">{'<'}</span>
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <div className="flex w-[100px] items-center justify-center text-sm font-medium text-muted-foreground">
                Página {table.getState().pagination.pageIndex + 1} de {''}
                {table.getPageCount()}
              </div>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">{'>'}</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
              <Button
                variant={'outline'}
                className="hidden h-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">última pág.</span>
                <DoubleArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
