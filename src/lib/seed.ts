import { prisma } from './prisma'

async function main() {
  await prisma.listExtinguisher.createMany({
    data: [
      {
        status: 'V',
        name: 'EH2000',
        numberManufecturyng: '316',
        dateFabri: new Date('2023-12-31'),
        dateTest: new Date('2026-12-12'),
        place: 'Verificar local',
        area: 'Acabamento',
      },
      {
        status: 'V',
        name: 'EH2000',
        numberManufecturyng: '318',
        dateFabri: new Date('2023-12-31'),
        dateTest: new Date('2024-10-12'),
        place: 'Fusão',
        area: 'Acabamento',
      },
      {
        status: 'T',
        name: 'EH2003',
        numberManufecturyng: '320',
        dateFabri: new Date('2023-12-31'),
        dateTest: new Date('2025-12-12'),
        place: 'Fusão',
        area: 'Acabamento',
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
