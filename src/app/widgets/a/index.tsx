import { getLocale } from '../../utils/locales'

export default async function WidgetA() {
  const locale = await getLocale('en')
  const title = locale['widgets.a.title']
  const description = locale['widgets.a.description']

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}