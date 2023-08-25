import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { Play } from 'phosphor-react'
import { Countdown } from './components/Countdown'
import { NewFormCycle } from './components/NewFormCycle'
import { CyclesContext } from '../../contexts/CyclesContext'

const newFormCycleValidationSchema = z.object({
  task: z.string().min(4, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type newFormCycleData = z.infer<typeof newFormCycleValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext)

  const newFormCycle = useForm<newFormCycleData>({
    resolver: zodResolver(newFormCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch, reset, handleSubmit } = newFormCycle

  const taskInput = watch('task')
  const minutesInput = watch('minutesAmount')

  const isSubmitDisabled = !taskInput || !minutesInput

  function HandleCreateNewCycle(data: newFormCycleData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(HandleCreateNewCycle)}>
        <FormProvider {...newFormCycle}>
          <NewFormCycle />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCycle} type="button">
            <Play size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
