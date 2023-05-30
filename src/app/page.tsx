import WidgetA from "./widgets/a"
import Component from "./components/component"

export default function Page() {
  return (
    <main>
      {/* @ts-expect-error */}
      <WidgetA />
      {/* @ts-expect-error */}
      <Component />
    </main>
  )
}
