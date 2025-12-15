import './index.css'

function App() {

  return (
      <body className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center h-screen text-white">

          <div className="text-center px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4">
                  Glasparade.co.za
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                  🚀 Coming Soon
              </p>
              <p className="text-md md:text-lg text-gray-300 mb-12">
                  We’re working hard behind the scenes to bring you something special.
              </p>
              <a href="mailto:glasparade@gmail.co.za"
                  className="inline-block px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                  Contact Us
              </a>
          </div>

      </body>
  )
}

export default App
