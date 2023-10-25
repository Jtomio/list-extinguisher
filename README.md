Olá Ricardo, espero que esteja bem! 

O que estou precisando fazer, e não estou conseguindo. 

## Na Data table as colunas com o title possa ser editáveis na própria tabela:

 - inspectionDate: Fique a data que a linha recebeu o ckeckbox, se   possível de forma automática.

 - label: será alterado para 'OK' | 'RECARGA' | 'TROCAR'

 - dateDue: será a nova data de recarga.

 - dateTest: será nova data de teste hidrostático da cilindro.


Após editar todas as alterações da tabela, preciso que ela salve no seed do DB. 

## No arquivo 
<a href='/src/components/data-table/data-table-export-to-xls.tsx'>Export To Excel</a>

Preciso que ele colete as linhas com a opção de checkbox='true', e salve um arquivo Excel com todas as linhas com flag e adicione 

## No header da data table tem os filtros,

  - tem um +Status, nele é para filtrar a coluna status com as labels, OK, TROCAR, RECARGA.