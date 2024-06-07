
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

const RecipeReview = () => {
  

  return (
    <div className='customer-review  d-flex justify-content-center align-items-center' style={{marginTop: '5%',marginBottom:'5%'}}>
      <div  className='box-container d-flex'>
        <div className='box m-2 '>
          <Card className='text-center' style={{ width: '300px' }}>
            <Card.Img className='p-3' src="/chef1.jpeg" style={{borderRadius:'60%' }} />
            <Card.Body>
              <Card.Title className='fw-bold '>Jabed Rahman</Card.Title>
              <p className='fw-bold'>CLIENT</p>
              <div className='stars'>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              </div>
              <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
              
               </Card.Body>
          </Card>
        </div>
        <div className='box m-2'>
          <Card className='text-center rounded rounded-3' style={{ width: '300px' }}>
            <Card.Img className='p-3' src="/chef4.jpeg" style={{borderRadius:'60%' }}/>
            <Card.Body>
              <Card.Title className='fw-bold '>Monica Wagase</Card.Title>
              <p className='fw-bold'>CLIENT</p>
              <div className='stars'>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              </div>
              <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
               </Card.Body>
          </Card>
        </div>
        <div className='box m-2'>
          <Card className='text-center' style={{ width: '300px' }}>
            <Card.Img className='p-3' src="/chef7.jpg" style={{borderRadius:'60%' }} />
            <Card.Body>
              <Card.Title className='fw-bold '>Natallia Moe</Card.Title>
              <p className='fw-bold'>CLIENT</p>
              <div className='stars'>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              </div>  
              <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
               </Card.Body>
          </Card>
        </div>
        <div className='box m-2'>
          <Card className='text-center' style={{ width: '300px' }}>
            <Card.Img className='p-3' src="/chef3.jpg" style={{ width: '300px', height:'42vh' ,borderRadius:'60%' }} />
            <Card.Body>
              <Card.Title className='fw-bold '>John Smith</Card.Title>
              <p className='fw-bold'>CLIENT</p>
              <div className='stars'>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              </div>  
              <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
              </Card.Body>
          </Card>
        </div>
      </div>
     
    </div>
  )
}

export default RecipeReview;
