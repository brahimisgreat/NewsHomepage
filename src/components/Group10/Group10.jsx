import "./Group10.css";
import computer from '../../assets/images/image-retro-pcs.jpg'
import keyboard from '../../assets/images/image-top-laptops.jpg'
import controller from '../../assets/images/image-gaming-growth.jpg'

export default function Group10() {
  return (
    <div id="group10-container">
      <div id="g10-rectangles">
        <img  id='com' src={computer}/>
        <div className="g10-main">
          <span>01</span>
          <h6>Reviving Retro PCs</h6>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div id="g10-rectangles">
        <img  id='key' src={keyboard}/>
        <div className="g10-main">
          <span>02</span>
          <h6>Top 10 Laptops of 2022</h6>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div id="g10-rectangles">
        <img id="con" src={controller}/>
        <div className="g10-main">
          <span>03</span>
          <h6>The Growth of Gaming</h6>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}
