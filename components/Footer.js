import Link from 'next/link'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    //TODO: Change address on footer


        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    
            {/* <div>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='facebook-f' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='twitter' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='google' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='instagram' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='linkedin' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='github' />
              </a>
            </div> */}
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                    Vitatech Biometrics, LLC
                  </h6>
                </MDBCol>
{/*     
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      React
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Laravel
                    </a>
                  </p>
                </MDBCol> */}
    
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <Link href='/' className='text-reset'>
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link href='/about' className='text-reset'>
                      Meet the Team
                    </Link>
                  </p>
                  <p>
                    <Link href='/interest' className='text-reset'>
                      Interest Form
                    </Link>
                  </p>
                </MDBCol>
    
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 Copyright:
            <Link className='text-reset fw-bold' href='/'>
              Vitatech Biometrics, LLC
            </Link>
          </div>
        </MDBFooter>

  );

}
