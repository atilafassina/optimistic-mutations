import type { ActionFunction, LoaderFunction } from '@remix-run/server-runtime'
import { useActionData, useLoaderData } from '@remix-run/react'
import { FormMarkup } from '~/lib/form-markup'
import { xata } from '~/lib/db.server'
import {
  BOX_STYLES,
  BOX_TITLE_STYLES,
  CONTAINER_STYLES,
  H1_STLYES,
  WRAPPER_STYLES,
} from '~/lib/demos'

export const loader: LoaderFunction = async () => {
  const dinnerOption = await xata.db.dinner.sort('id', 'desc').getFirst()

  return dinnerOption === null
    ? {}
    : {
        food: `${dinnerOption.cuisine} ${dinnerOption.dish}`,
      }
}
export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData())
  const update = await xata.db.dinner.create(data)

  return {
    update,
  }
}

export default function DataFetching() {
  const loaderdata = useLoaderData()
  const actiondata = useActionData()

  return (
    <div className={CONTAINER_STYLES}>
      <h1 className={H1_STLYES}>
        We are eating {loaderdata?.food || 'nothing'} for dinner
      </h1>
      <div className={WRAPPER_STYLES}>
        <form method="post" className="grid place-items-center">
          <FormMarkup />
        </form>
      </div>
      <section className={BOX_STYLES}>
        <h2 className={BOX_TITLE_STYLES}>Loader</h2>
        <pre>{JSON.stringify(loaderdata, null, 2)}</pre>
      </section>

      <section className={BOX_STYLES}>
        <h2 className={BOX_TITLE_STYLES}>Action</h2>
        <pre>{JSON.stringify(actiondata, null, 2)}</pre>
      </section>
    </div>
  )
}
