import './styles/App.css';
import './styles/responsive.css';
import {contents, menus, news} from './data'
import './index.js'

function App() {
  return (
    <div className='font-inter box-border p-0 m-0'>
      <div className="wrapper grid grid-cols-3 p-[16px]">
        <div className="box1 col-start-1 col-end-4 flex items-center justify-between">
          <div className="logo text-[60px] font-extrabold">
                <a href>W.</a>
          </div>

          <div className="hamburger hidden" onClick="show()">
                <div id="line1" className="line"></div>
                <div id="line2" className="line"></div>
                <div id="line3" className="line"></div>
          </div>

          <nav className="navbar" >
                <ul className="navigation">
                {menus.map((menu) => (
                  <li key={menu.text} className="inline">
                  <a href={menu.href} className="ml-[30px] hover:text-soft-red">{menu.text}</a>
                  </li>
                ))}
                </ul>
          </nav>
        </div>

        <div className="box2 col-start-3 row-start-2 row-end-4 bg-very-dark-blue p-[15px] text-white ml-10">
          <h1 className='text-soft-orange text-[30px]'>New</h1>
          {news.map((box) => (
            <div key={box.title}>
              <h3 className='hover:cursor-pointer hover:text-soft-orange'>{box.title}</h3>
              <p className='text-dark-grayish-blue pb-2.5 text-sm'>{box.desc}</p>
              <div className="barr border-b b-10"> </div>
            </div>
          ))}
        </div>

        <div className="box3 col-start-1 col-end-3">
            <img className="img1" src={require("./images/image-web-3-desktop.jpg")} alt=""/>
            <img className="img2" src={require("./images/image-web-3-mobile.jpg")} alt=""/>
        </div>

        <div className="box4">
          <h1 className='text-[40px] font-extrabold'>The Bright Future of Web 3.0?</h1>
        </div>

        <div className="box5 text-dark-grayish-blue pt-[10px]">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?</p>
            <div className="readMore bg-soft-red mt-[60px] p-[10px] w-3/5 hover:bg-black hover:cursor-pointer">
              <h2 className='text-white items-center tracking-[0.5em]'>READ MORE</h2>
            </div>  
        </div>

        <div className="box6 flex col-start-1 col-end-4 mt-10">
          {contents.map((content) => (
              <div key={content.title}>
                <img src={content.image} alt={content.desc} className='h-[150px] float-left mr-[10px]'/>
                <h1 className='text-dark-grayish-blue mt-0 text-3xl'>{content.title}</h1>
                <a href="/" className='hover:text-soft-orange text-black font-bold mb-0'>{content.sub}</a>
                <p className='m-0 pt-[10px]'>{content.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
