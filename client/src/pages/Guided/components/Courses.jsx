import React from 'react'
import { BookOpen, Rocket, Brain, Lightbulb, ArrowRight } from 'lucide-react'

const courses = [
  { 
    title: 'Web Development', 
    icon: BookOpen, 
    color: 'bg-[#05be9e]',
    description: 'Master the art of creating responsive and dynamic websites.',
    duration: '8 weeks'
  },
  { 
    title: 'Data Science', 
    icon: Rocket, 
    color: 'bg-[#F8A12E]',
    description: 'Dive into the world of data analysis and machine learning.',
    duration: '10 weeks'
  },
  { 
    title: 'Machine Learning', 
    icon: Brain, 
    color: 'bg-[#2f2f27]',
    description: 'Explore the cutting-edge field of artificial intelligence.',
    duration: '12 weeks'
  },
  { 
    title: 'Creative Thinking', 
    icon: Lightbulb, 
    color: 'bg-[#05be9e]',
    description: 'Unlock your creative potential and innovate like never before.',
    duration: '6 weeks'
  },
]

const CourseCard = ({ title, icon: Icon, color, description, duration }) => (
  <div className={`${color} text-white p-6 rounded-lg shadow-lg transform hover:scale-102 transition-transform duration-300 flex items-center justify-between w-full`}>
    <div className="flex items-center space-x-6">
      <div className="bg-white p-3 rounded-full">
        <Icon className="w-12 h-12 text-[#2f2f27]" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg opacity-90">{description}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-lg font-semibold">{duration}</span>
      <ArrowRight className="w-6 h-6" />
    </div>
  </div>
)

const Courses = () => {
  return (
    <section className="py-16 px-4 bg-[#F0E6DD]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2f2f27] mb-12">Discover More Exciting Courses!</h2>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-[#F8A12E] text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-all duration-300 hover:bg-[#e5941b] hover:shadow-xl hover:translate-y-[-2px]">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses;