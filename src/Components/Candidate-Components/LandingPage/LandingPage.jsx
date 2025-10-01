
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'

const HomeMain = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  return (
    <>
      <div
        className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-violet-900 via-black to-indigo-900'
        id='home'
      >
        <div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-900/20 to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-indigo-900/20 to-transparent'></div>

        <div className='absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-violet-600/10 blur-[100px]'></div>
        <div className='absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-[100px]'></div>

        <div className='relative z-10 container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center py-32'>
          <div className='max-w-2xl space-y-8'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white'>
              WorkBridge
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-white'>
                Connecting opportunities
                <br />
                with talent
              </span>
            </h1>

            <div className='relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur-sm opacity-20'></div>
              <p className='relative text-lg md:text-xl text-violet-100/90 leading-relaxed bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10'>
                Our platform bridges dreams and possibilities, helping job
                seekers find their path and companies build their future.
              </p>
            </div>

            <div className='flex flex-wrap gap-4 pt-4'>
              {user?.name ? (
                <Button
                  handleClick={() => navigate('/jobview')}
                  className='px-8 py-3.5 bg-white text-violet-900 rounded-lg font-medium hover:bg-violet-100 transition-colors duration-300 shadow-lg shadow-violet-500/10'
                >
                  Find Jobs
                </Button>
              ) : (
                <>
                  <Button
                    handleClick={() => navigate('/employer')}
                    className='px-8 py-3.5 bg-violet-700 text-white rounded-lg font-medium hover:bg-violet-600 transition-colors duration-300 shadow-lg shadow-violet-500/20'
                  >
                    For Employers
                  </Button>
                  <Button
                    handleClick={() => navigate('/login')}
                    className='px-8 py-3.5 bg-transparent text-white rounded-lg font-medium border-2 border-violet-400 hover:bg-violet-800/30 transition-colors duration-300 shadow-lg shadow-violet-500/10'
                  >
                    Job Seeker Login
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeMain
