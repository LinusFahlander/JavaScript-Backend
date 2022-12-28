import NotFoundImg from '../assets/images/not-found.jpeg'

const NotFoundView: React.FC = () => {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
      <img src={NotFoundImg} alt='' />
      </div>
    </>
  )
}

export default NotFoundView