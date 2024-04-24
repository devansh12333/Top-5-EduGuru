import "./styles.css";

const Aboutus = () => {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">

      <header id="head">


      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome,Top-5-Eduguru</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p>
            " Top 5 Eduguru aims to revolutionize the process of choosing educational institutions
            by providing a centralized platform that offers comprehensive information and user
            reviews for schools, colleges, and institutes, ultimately empowering students and parents to make informed decisions about
            their educational journey."
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We Offer Innovative  Solutions</h1>
            <p>

              We offer a comprehensive platform,
              Top 5 Eduguru, that aggregates information
              and user reviews for educational institutions, including schools,
              colleges, and institutes. Our platform simplifies the selection process
              by providing detailed insights into courses, faculty, facilities, and more, empowering students
              and parents to make informed decisions about their educational journey.






            </p>

          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>TECHNOLOGY INDEX</h2>
          <h1 style={{ color: "white" }}>
            Real Time Monitoring Your Infrstracture Branded Degital Solutions
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>DATA ANALYTICS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>UI/UX DESIGN</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>WEB DEVELOPEMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>Q&A TESTING</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container mb-5">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
            <div>
              <h1>WE PROVIDE</h1>
              <h2>Remote Employee</h2>
              <p>
                A huge pool of talent from every domain available for your
                office. Solve your freelancing problems by letting us help you
                find the most suitable employee or a whole team that won't let
                you down. Everything is managed by Indirect Employee staff!
              </p>
            </div>

          </div>
          <div className="container">
            <div>
              <h1>WE HAVE</h1>
              <h2>Global Partnership</h2>
              <p>
                Our Global parters are spread 12 countries and our client base
                is growing day by day . Many of my clients are repeat customers
                and several have come to us through high recommendation and
                referrals . Our client hail from different domains
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR GOAL</h1>
              <h2>Same Quality at Low Cost</h2>
              <p>
                We have unique and revolutionary business principle, ‘Same
                quality but significantly lower cost’. we aims to fulfill the
                long-standing outsourcing vacuum felt by Small Medium
                Enterprises across the country who, till now, were dependent
                mostly on offshore freelancers.The hired professionals match
                their western counterparts in skills, qualifications and
                experience alongwith the added advantage of attractive low
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Intelligent Use of Technology and Human Resource</h2>
              <p>
                We provide every client with a dedicated, full-time work from
                home from their comfortable place. To successfully achieve this
                objective, we relay on management, infrastructure, hardware and
                the latest technology to bridge physical distance and time zone
                differences.We provide experience of making employees to work
                from home for the company as real as they work in the company.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
            Driving Client Results Utilizing New Innovation Points of view
          </h1>
          <div id="third_cards">
            <div>
              <h2>End to End Solutions and Services Guaranteed</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Ahead of The Curve We Future-proof Your IT</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Experience Certainty Every Project Executed Successful</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>


      </main>

    </div>
  );
}

export default Aboutus
