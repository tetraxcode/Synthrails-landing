import { useState, useEffect } from 'react';

function Home() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] =useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Taking robots from 99% to 99.99999% reliability",
    "Solving the long-tail problem in robotics", 
    "Training autonomous systems for the impossible",
    "Building the data layer for safer robots"
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 60 : 120) 

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <main className="flex flex-grow flex-col items-center justify-center px-6 text-center">
      {/* Main heading */}
      <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        SynthRails
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        Advanced physics-based AI simulations for Robotics
      </p>

      {/* Animated text section */}
      <div className="mb-20 h-16 flex items-center justify-center w-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="text-lg md:text-xl text-gray-300 font-mono">
          <span className="inline-block w-full max-w-lg text-center">
            {currentText}
            <span className="animate-blink text-gray-600">|</span>
          </span>
        </div>
      </div>

      {/* Get in touch button */}
      <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <a 
          href="mailto:abhinav@quicksight.ai"
          className="inline-block px-10 py-4 text-base font-bold text-gray-300 rounded-lg border border-gray-600 hover:bg-white hover:text-gray-950 transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </main>
  )
}

export default Home;
