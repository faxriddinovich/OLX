import React from 'react'
import { BsSearch,BsFillGeoAltFill } from "react-icons/bs";

function Search() {
  return (
    <form className='searchMain'>
        <div className='wrapper'>
            <fieldset className='searchbar'>
                <div className='fblock fquery'>
                    <div className='rl lheight16 clr'>
                        <div className='clearbox rleft rel inut-container'>
                            <input type="text" className='fleft large queryfield' defaultValue={'90 522 e`lonlar yoningizda'}/>
                            <BsSearch/>
                        </div>
                    </div>
                </div>
                <div className='fblock fcity clr rel active'>
                    <div className='clr'>
                        <div className='clearbox'>
                            <input type="text"  placeholder='Butun Uzbekistan'/>
                            <BsFillGeoAltFill/>
                        </div>
                    </div>
                </div>
                <span className='button'>
                    <BsSearch/>
                    <input type="submit" value={'Qidiruv'} />
                </span>
            </fieldset>
        </div>
    </form>
  )
}

export default Search