import './index.css'

const element = (
  //   Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Super Over League</h1>
    <div className='image-contianer'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='image-size'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='image-size'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
