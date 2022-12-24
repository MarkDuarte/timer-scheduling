import { HistoryContainer, HistoryList, Status } from '../History/styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="yellow">Em Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
