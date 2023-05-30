import '../style/LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="overlay flex flex-col gap-7">
          <div class="w-12 h-12 border-8 border-indigo-600 rounded-full loader"></div>
          <div className='text-white'>Please Wait ....</div>
        </div>
    )
}

export default LoadingSpinner;