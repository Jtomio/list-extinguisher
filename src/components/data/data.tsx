import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@radix-ui/react-icons'

export const labels = [
  {
    value: 'ok',
    label: 'OK',
  },
  {
    value: 'recharge',
    label: 'Recarga',
  },
  {
    value: 'change',
    label: 'Trocar',
  },
]

export const priorities = [
  {
    label: 'Baixo',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Médio',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'Alto',
    value: 'high',
    icon: ArrowUpIcon,
  },
]
