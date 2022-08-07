import React from 'react'
import {team} from './Data'
import { chef } from './Data'
import './style/card.css'
const Team = () => {
  return (
    <div className='Team-containers'>
    <div className='container-p'>

    <h2 className='head-ing'>OUR TEAM</h2>
    </div>
    <div className='Team-container'>

        {     
        team.map(element=>{

         return   <div className="ucard" key={element.image} >
            <img src={element.image} alt="" />
            <h1 className='font' >{element.name}</h1>
            <p className="u-title font">{element.profession}</p>
            <p className='font' >Biryani By Ihm</p>
            <div className='line'>
                <p className='font-p'>
             {element.line}

                </p>
            </div>
          </div>


        })


        }

    </div>
    <div id='overflow-X'>

        {     
        chef.map(element=>{

          return  <div className="ucard"key={element.image} >
            <img src={element.image} alt="" />
            <h1 className='font' >{element.name}</h1>
            <p className="title font"   >{element.profession}</p>
            <p className='font' >Biryani By Ihm</p>
            <div className='line'>
                <p className='font-p'  >
             {element.line}

                </p>
            </div>
            
          </div>


        })


        }

    </div>
    </div>
  )
}

export default Team
