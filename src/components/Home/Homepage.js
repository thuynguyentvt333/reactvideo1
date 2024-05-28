import videoHomePage from '../../assets/Home.mp4';
const HomePage= (props)=>{
    return(
        <div className="HomePage_container">
            <video  autoPlay muted loop >
<source
src={videoHomePage}
type="video/mp4"
/>
            </video>
<div className='Homepage-content'>
            <div className='t1'> ĐẾ BÁ</div>
            <div className='t2'> thiên phú không trọng yếu, thể chất hay công pháp cũng không trọng yếu.
            Quan trọng là có một viên đạo tâm không đổi, học hỏi như khát,đây mới là căn bản của tu đạo</div>
            <div className ='t3'>
                <button>get started</button>
            </div>
            </div>
        </div>

    )
}
export default HomePage;