import { createContext } from 'react'

const appContext = createContext()
appContext.displayName = "AppState"

export default appContext;