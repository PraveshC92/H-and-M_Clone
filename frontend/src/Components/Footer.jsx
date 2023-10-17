import "../StyleSheet/Headers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faS, fas } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const PageFooter = () => {
  return (
    <>
      <div className="PageFooter">
        <div>
          <div>
            <h4>SHOP</h4>
            <div>Ladies</div>
            <div>Men</div>
            <div>Baby</div>
            <div>Kids</div>
            <div>H&M HOME</div>
            <div>Sport</div>
          </div>
          <div>
            <h4>CORPORATE INFO</h4>
            <div>Career at H&M</div>
            <div>About H&M group</div>
            <div>Sustainability H&M Group</div>
            <div>Press</div>
            <div>Investor relations</div>
            <div>Corporate governance</div>
          </div>
          <div>
            <h4>HELP</h4>
            <div>Customer Service</div>
            <div>My H&M</div>
            <div>Find a store</div>
            <div>Legal & Privacy</div>
            <div>Contact</div>
            <div>Report a scam</div>
            <div>Cookie Notice</div>
            <div>Cookie Settings</div>
          </div>
          <div>
            <p>
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!
            </p>
            <span>Read more</span> <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </div>
        </div>
        <div>
          <p>
            The content of this site is copyright-protected and is the property
            of H & M Hennes & Mauritz AB.
          </p>
        </div>
        <div>
          <img src="https://uploads-ssl.webflow.com/5e6c072f0f8bc37000a94663/5e7e5614d627fa14a1f72d3b_H%26M-p-500.png" />
        </div>
        <div>
          <p>INDIA | Rs.</p>
        </div>
      </div>
    </>
  );
};

export default PageFooter;
