export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const getTransitionState = (
  transition: 'submitting' | 'loading' | 'idle'
) => {
  switch (transition) {
    case 'submitting':
      return 'text-orange-200'
    case 'loading':
      return 'text-green-200'
    case 'idle':
      return 'text-indigo-200'
    default:
      return 'text-grey-200'
  }
}

export const H1_STLYES = 'w-full p-5 text-3xl text-center'
export const WRAPPER_STYLES = 'flex justify-around p-5'
export const CTA_STYLES =
  'w-full p-2 text-2xl border-2 border-gray-300 rounded-md hover:text-black hover:bg-white'

export const BOX_STYLES = 'p-4 m-4 border-2 border-white rounded-lg'
export const BOX_TITLE_STYLES = 'pb-10 font-mono text-2xl'
export const FIELDSET_STYLES = `${BOX_STYLES} my-4 mx-auto grid grid-rows-2 gap-2`
export const INPUT_STYLES = 'text-black px-2'
export const CONTAINER_STYLES = 'mx-auto w-2/3'
