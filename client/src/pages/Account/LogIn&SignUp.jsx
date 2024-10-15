import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-[#F0E6DD] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative overflow-hidden"
      >
        <motion.div 
          className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#05be9e] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div 
          className="absolute bottom-[-30px] left-[-30px] w-24 h-24 bg-[#F8A12E] rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
        
        <h2 className="text-3xl font-bold text-center text-[#2f2f27] mb-6">
          {isLogin ? 'Welcome Back!' : 'Join the Fun!'}
        </h2>
        
        <form className="space-y-4 relative z-10">
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#05be9e] text-white font-semibold py-3 rounded-lg hover:bg-[#04a78c] transition-colors"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </motion.button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-[#2f2f27]">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <motion.button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#F8A12E] font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </motion.button>
        </div>
        
        <motion.div 
          className="mt-8 text-center text-[#2f2f27] opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Start your learning journey with Learnity!
        </motion.div>
      </motion.div>
    </div>
  )
}