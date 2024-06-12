import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#45637d' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='6'>
              <div className='ratio ratio-16x9'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mhDJNfV7hjk?si=MC93Z8PFJJ_iUiBA" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://student.learn.gomycode.co/'>
        GOMYCODE.com
        </a>
      </div>
    </MDBFooter>
  );
}

