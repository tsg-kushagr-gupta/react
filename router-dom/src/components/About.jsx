import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/dashboard');
    }
  return (
    <div>
        About Page
        <button onClick={handleClick}>
            Move to Dashboard
        </button>
        <Outlet />
    </div>
  )
}

export default About