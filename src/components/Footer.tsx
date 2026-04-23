import { Code2, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="h-5 w-5 text-blue-500" />
            <span className="font-semibold text-white">Javier Loncón</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>usando React, TypeScript y TailwindCSS</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
