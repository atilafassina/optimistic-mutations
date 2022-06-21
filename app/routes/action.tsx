import type { ActionFunction, LoaderFunction } from '@remix-run/server-runtime'
import { Link, useActionData, useLoaderData } from '@remix-run/react'
import { xata } from '~/lib/db.server'
import {
  BOX_STYLES,
  BOX_TITLE_STYLES,
  H1_STLYES,
  WRAPPER_STYLES,
  CONTAINER_STYLES,
} from '~/lib/demos'
import { FormMarkup } from '~/lib/form-markup'

export const loader: LoaderFunction = async () => {
  return {}
}
export const action: ActionFunction = async ({ request }) => {
  /**
   * @TODO
   * implement mutation
   */
  return {}
}

export default function DataFetching() {
  const loaderdata = useLoaderData()
  const actiondata = useActionData()

  return (
    <div className={CONTAINER_STYLES}>
      <h1 className={H1_STLYES}>
        We are eating {loaderdata?.food || 'nothing'} for lunch
      </h1>
      <div className={WRAPPER_STYLES}>
        {/**
         * @TODO implement form
         */}
      </div>
      <section className={BOX_STYLES}>
        <h2 className={BOX_TITLE_STYLES}>Loader</h2>
        <pre>{JSON.stringify(loaderdata, null, 2)}</pre>
      </section>

      <section className={BOX_STYLES}>
        <h2 className={BOX_TITLE_STYLES}>Action</h2>
        <pre>{JSON.stringify(actiondata, null, 2)}</pre>
      </section>
      <Link to="/transition">next</Link>
    </div>
  )
}
