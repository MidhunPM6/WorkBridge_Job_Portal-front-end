import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex place-content-center mt-4 '>
      <div class='relative flex'>
        <input
          type='search'
          class='relative m-0 block flex-auto rounded-l-md  pl-3 bg-transparent bg-clip-padding w-60 py-[0.90rem] outline-none focus:ring-1 focus:ring-gray-300 shadow-lg border  '
          placeholder='Job tittle'
          aria-label='Search'
          id='exampleFormControlInput2'
          aria-describedby='button-addon2'
        />
        <input
          type='search'
          class='relative m-0 block flex-auto rounded-r-md  pl-3 bg-transparent bg-clip-padding w-60 py-[0.90rem] outline-none focus:ring-1 focus:ring-gray-300 shadow-lg border'
          placeholder='Location'
          aria-label='Search'
          id='exampleFormControlInput2'
          aria-describedby='button-addon2'
        />
        <span
          class='flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5 cursor-pointer'
          id='button-addon2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
        
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default SearchBar
