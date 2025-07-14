import React from 'react'

export default function Card2() {
  return (
    <>
     
        <div className="card fst-italic" style={{ "width": "18rem" }}>
          <img src="https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                  )
                }

                )

                }
              </select>
              <select className='m-2 h-100  bg-success'>
                <option value="half">half</option>
                <option value="full">Full</option>
              </select>
              <div className='m4'>Total price</div>
            </div>
          </div>
        </div>
        <div className="card fst-italic" style={{ "width": "18rem" }}>
          <img src="https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build</p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                  )
                }

                )

                }
              </select>
              <select className='m-2 h-100  bg-success'>
                <option value="half">half</option>
                <option value="full">Full</option>
              </select>
              <div className='m4'>Total price</div>
            </div>
          </div>
        </div>
      
    </>
  )
}
