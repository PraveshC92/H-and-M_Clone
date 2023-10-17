import "../StyleSheet/Headers.css";

const Home = () => {
  return (
    <>
      <div id="Home-Page">
        <div>
          {/* <img src="https://image.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s08/september_2023/TCD5205-3x2.jpg?imwidth=768" /> */}
          <div className="Caption-Text">
            <h2 className="caption-text-h2">Bottom flair</h2>
            <h3 className="caption-text-h3">
              Casual to classy - starting from Rs. 1499
            </h3>
            <div className="caption-button">Shop Now</div>
          </div>
        </div>
        <div>
          {/* <img src="https://image.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s08/september_2023/TCD5205-3x2.jpg?imwidth=768" /> */}
          <div className="Caption-Text">
            <h2 className="caption-text-h2">The festive collection</h2>
            <h3 className="caption-text-h3">Celebrate in standout styles</h3>
            <div
              style={{ backgroundColor: "white", color: "black" }}
              className="caption-button"
            >
              Shop Now
            </div>
          </div>
        </div>
        <div>
          something
          <div>something else</div>
        </div>
      </div>
    </>
  );
};

export default Home;
