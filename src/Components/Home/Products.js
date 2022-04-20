import React from 'react'
const products=require('../../Database.json')

function Products() {
    return (
    <div className='products'>
        <div className='wrapper'>
          <header className='header mx-auto'>
            <h3>Bosh toifalar</h3>
          </header>
          <div className='mainProducts row'>
            {products.map(item=><div className='item col-md-2' key={item.id}>
              <div className='product'data-bs-toggle="collapse" data-bs-target={"#"+item.title} aria-expanded="false">
                <a href="#">
                  <img src={item.img} alt="Product" />
                  <br/>
                  <span>{item.title}</span>
                </a>
              </div>
              <div className='collapse' id={item.title}>
                <div className='card card-body'>
                  <div className='subcategories-title'>
                    <a href="#">Barcha e'lonlarni ko'rib chiqishs<span>...{item.title}</span></a>
                  </div>
                  <hr/>
                  <ul>
                    {item.sections.map(more=><li key={more.id}>
                      <a href="#">{more.title}</a>
                    </li>)}
                  </ul>
                </div>
              </div>
            </div>)}
          </div>
        </div>
    </div>
  )
}

export default Products