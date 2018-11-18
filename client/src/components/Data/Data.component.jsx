import React, { Component } from "react";
import "./Data.css";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="data fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <div className=" container ">
          <section>
            <h1 className="color-2">Figures at a Glance</h1>
            <iframe
              src="http://www.unhcr.org/figures-at-a-glance.html"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <h1 className="color-2">
              How investment can unlock the potential of refugees
            </h1>
            <iframe
              src="https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5bd1e2b39140b788ed67c371/1540481747374/RIN+Investor+Report-Paradigm+Shift-FINAL.pdf"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <h1 className="color-2">Syrian situation statistics</h1>

            <iframe
              src="https://data2.unhcr.org/en/situations/syria"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <iframe
              src="https://data2.unhcr.org/en/countries/"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <iframe
              src="https://www.newsdeeply.com/refugees/community/2018/01/15/spending-money-on-refugees-is-an-investment-not-a-cost"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
        </div>
      </div>
    );
  }
}
