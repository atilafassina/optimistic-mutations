import type { ActionFunction, LoaderFunction } from '@remix-run/server-runtime'
import { Link, useTransition, Form, useLoaderData } from '@remix-run/react'
import { sleep, getTransitionState } from '~/lib/demos'
import { xata } from '~/lib/db.server'
import { FormMarkup } from '~/lib/form-markup'
import {
  BOX_STYLES,
  BOX_TITLE_STYLES,
  H1_STLYES,
  WRAPPER_STYLES,
  CONTAINER_STYLES,
} from '~/lib/demos'

export const loader: LoaderFunction = async () => {
  const lunchOption = await xata.db.lunch.sort('id', 'desc').getFirst()

  return lunchOption === null
    ? {}
    : {
        food: `${lunchOption.cuisine} ${lunchOption.dish}`,
      }
}
export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData())
  const update = await xata.db.lunch.create(data)

  await sleep(5000)

  return {
    update,
  }
}

export default function DataFetching() {
  const loaderdata = useLoaderData()
  const transition = useTransition()

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
        <h2
          className={`${BOX_TITLE_STYLES} ${getTransitionState(
            transition.state
          )}`}
        >
          Transition: {transition.state}
        </h2>
        <pre>{JSON.stringify(transition, null, 2)}</pre>
      </section>

      <section className={BOX_STYLES}>
        <h2 className={BOX_TITLE_STYLES}>Loader</h2>
        <pre>{JSON.stringify(loaderdata, null, 2)}</pre>
      </section>
      <Link to="/fetcher">next</Link>
    </div>
  )
}
