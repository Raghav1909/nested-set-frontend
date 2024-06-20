import Header from "@/features/Header/Header"

interface BaseLayoutProps {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
