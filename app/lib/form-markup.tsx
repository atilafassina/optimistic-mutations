import { CTA_STYLES, FIELDSET_STYLES, INPUT_STYLES } from '~/lib/demos'

export const FormMarkup = () => (
  <>
    <fieldset className={FIELDSET_STYLES}>
      <label htmlFor="cuisine">Cuisine: </label>
      <input
        type="text"
        id="cuisine"
        name="cuisine"
        required
        className={INPUT_STYLES}
      />
      <label htmlFor="dish">Dish: </label>
      <input
        type="text"
        id="dish"
        name="dish"
        required
        className={INPUT_STYLES}
      />
    </fieldset>
    <input type="submit" value="Mutate!" className={CTA_STYLES} />
  </>
)
