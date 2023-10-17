import "../StyleSheet/Headers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  faEllipsis,
  faShoppingBag,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

let itemCount = 0;

const PageHeader = () => {
  return (
    <>
      <html>
        <header>
          <title>H&M</title>
          <script
            src="https://kit.fontawesome.com/d3efeb4a23.js"
            crossorigin="anonymous"
          ></script>
        </header>
        <body>
          <div className="header">
            <div id="upperHeader">
              <div>
                <div>Customer Service</div>
                <div>Newsletter</div>
                <div>Find a store</div>
                <div>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
              <div>
                <img
                  className="logo"
                  src="https://seeklogo.com/images/H/H_and_M-logo-9C22DB457C-seeklogo.com.png"
                />
              </div>
              <div>
                <div>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  Sign in
                </div>
                <div>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                  Favourites
                </div>
                <div>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </span>
                  Shopping Bag({itemCount})
                </div>
              </div>
            </div>
            <div id="menu-items">
              <div>Ladies</div>
              <div>Men</div>
              <div>Divided</div>
              <div>Baby</div>
              <div>Kids</div>
              <div>H&M HOME</div>
              <div>Sport</div>
              <div>Sustainability</div>
              <div>Sale</div>
            </div>
            <div className="prd-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input placeholder="search product" />
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default PageHeader;
