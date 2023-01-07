import pandas as pd

df = pd.read_csv("notas_alunos.csv")
media = (df['nota_1'] + df['nota_2']) / 2
df['media'] = media

df.loc[(df['media'] < 7) | (df['faltas'] > 5), 'situação'] = 'REPROVADO'
df.loc[(df['media'] >= 7) & (df['faltas'] <= 5), 'situação'] = 'APROVADO'

df.to_csv('alunos_situacao.csv')

print(df)
print('Maior número de faltas da turma: ', df['faltas'].max())
print('Média geral das notas dos alunos: ', (df['media'].sum()) / 4)
print('Maior média da turma: ', df['media'].max())
