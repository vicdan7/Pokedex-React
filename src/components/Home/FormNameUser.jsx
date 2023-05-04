import React, { useRef } from 'react';
import { setTrainerName } from '../../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const FormNameUser = () => {

  const inputName = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
      e.preventDefault()
      dispatch(setTrainerName(inputName.current.value.trim()))
      navigate('/pokedex')
    }

  return (
   <form onSubmit={handleSubmit}>
    <input className='input-style' ref={inputName} type="text" />
    <button>Start</button>
   </form>
  );
}

export default FormNameUser;
