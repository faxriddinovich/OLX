import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Nav } from 'reactstrap'

function Divider() {
  return (
    <div className='divider'>
        <div className='container'>
            <Nav className='sub-nav'>
                <ol className='breadcrumbs'>
                    <li>
                        <Link to={'/'}>olxuz</Link>
                    </li>
                    <li>
                        <Link to={'/security/categories'}>
                            Безопасность! / Xavfsizlik! 
                        </Link>
                    </li>
                    <li>
                        <Link to={'/security/sections'}>
                            Xavfsizlik bo'yicha umumiy ma'lumotlar 
                        </Link>
                    </li>
                </ol>          
                <div className='searchcontainer'>
                    <FaSearch id='searchICon'/>
                    <form className='search'>
                        <input type="search" placeholder='Искать в центре поддержки' aria-label='Искать в центре поддержки'/>
                    </form>
                </div>      
            </Nav>
        </div>
    </div>
  )
}

export default Divider