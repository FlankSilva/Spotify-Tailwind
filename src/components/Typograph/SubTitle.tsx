interface SubTitleProps {
  title: string
}

export function SubTitle({ title }: SubTitleProps) {
  return <h2 className="font-semibold text-base mt-6">{title}</h2>
}
