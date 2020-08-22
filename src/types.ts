export type Token = () => Promise<string | null>

export type ICallbackError = (error: string) => any