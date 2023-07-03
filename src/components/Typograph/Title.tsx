interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return <h1 className="font-semibold text-xl mt-4">{title}</h1>
}
