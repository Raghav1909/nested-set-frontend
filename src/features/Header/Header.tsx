import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="p-4 border-b-2">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        <div>
          <h1 className="text-xl font-bold">Nested Set Implementation</h1>
        </div>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-primary" : ""
            }
          >
            Explanation
          </NavLink>
          <NavLink
            to="/play"
            className={({ isActive }) =>
              isActive ? "font-bold text-primary" : ""
            }
          >
            Playground
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
