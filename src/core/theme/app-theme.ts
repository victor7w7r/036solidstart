type CommonElements = {
  control: string
  dark: string
  white: string
}

export const stdElements: CommonElements = {
  control: 'bg-slate-700/30',
  dark: 'dark:bg-zinc-900',
  white: 'bg-white'
}

// eslint-disable-next-line @typescript-eslint/sort-type-constituents
export type AppTheme = {
  isDark: boolean
  togglePeer: string
} & CommonElements

export const whiteTheme: AppTheme = {
  ...stdElements,
  isDark: false,
  togglePeer: 'peer-checked:bg-white'
}

export const darkTheme: AppTheme = {
  ...stdElements,
  isDark: true,
  togglePeer: 'peer-checked:bg-dark'
}
