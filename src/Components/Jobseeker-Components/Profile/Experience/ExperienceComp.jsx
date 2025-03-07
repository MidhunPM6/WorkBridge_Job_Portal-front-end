import { set } from 'date-fns'
import React, { useState } from 'react'
import ExperiencePopup from './ExperiencePopup'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ExperienceComp = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 300ms ease-in-out'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
      opacity: modalIsOpen ? 1 : 0
    }
  }

  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  function closeModal () {
    setIsOpen(false)
    setTimeout(() => {}, 300)
  }
  return (
    <>
      <div className='flex flex-col w-full h-auto'>
        <div className='relative flex-col lg:justify-normal justify-center  lg:p-20  p-10 lg:h-auto  rounded-t-sm  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full  '>
          <div className='flex justify-between p-2 items-center  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-950 via-black to-violet-950  text-white h-16 rounded-sm'>
            <h1 className='text-2xl font-semibold'>Experience</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-8 cursor-pointer'
              onClick={openModal}
            >
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='mt-10 flex flex-col gap-4'>
            <div className='flex flex-col text-sm gap-3 border  shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)] p-4 rounded-sm '>
              <h1>
                <span className='font-semibold'> Position : </span> Web
                Developer
              </h1>
              <h1>
                <span className='font-semibold'>Company : </span> Google
              </h1>
              <h1>
                <span className='font-semibold'>Start Date : </span> 12/02/2023
              </h1>
              <h1>
                <span className='font-semibold'> End Date : </span> 30/12/2024
              </h1>
              <div className='  lg:flex-row flex flex-col'>
                <h1 className='lg:w-[45vw] w-full '>
                  <span className='font-semibold text-lg '>
                    Description <br />
                  </span>{' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  suscipit impedit illum dolorum ratione dolore quidem. Ipsam
                  sint consequatur dicta repudiandae soluta quisquam, odit
                  dignissimos perspiciatis, excepturi sed, doloremque ipsum!
                </h1>
                <div className='flex lg:justify-end lg:items-end lg:ml-auto justify-center mt-3 lg:mt-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-6 cursor-pointer'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <ExperiencePopup></ExperiencePopup>
      </Modal>
    </>
  )
}

export default ExperienceComp
