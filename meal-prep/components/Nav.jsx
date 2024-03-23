

const Nav = () => {
  return (
    <>
        <nav className="bg-slate-800">
            <div className="max-2-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/">Logo</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-slate-200 hover:bg-slate-200 hover:text-slate-800 rounded-lg p-2">
                                Home
                            </a>
                            <a href="/" className="text-slate-200 hover:bg-slate-200 hover:text-slate-800 rounded-lg p-2">
                                check here!
                            </a>
                            <a href="/" className="text-slate-200 hover:bg-slate-200 hover:text-slate-800 rounded-lg p-2">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav