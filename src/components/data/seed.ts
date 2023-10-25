import fs from 'fs'
import path from 'path'
import { faker } from '@faker-js/faker'

import { priorities, labels } from './data'

const lists = Array.from({ length: 100 }, () => ({
  id: `EH-${faker.datatype.number({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  labels: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}))

fs.writeFileSync(
  path.join(__dirname, 'list.json'),
  JSON.stringify(lists, null, 2),
)
