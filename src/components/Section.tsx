import { ReactNode } from "react"

type sectionProps = {
  title?: string
  children: ReactNode
}

const Section = ({ title, children }: { title: string; children: string }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

export default Section
