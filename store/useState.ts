import { create } from 'zustand'
import { Test } from '@/components/Test'

type State = {
  count: number
  inc: () => void
}

export const useStore = create<State>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}))
