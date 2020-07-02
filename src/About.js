import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="biggest">
      <div className="about">
        <h1 className="welcome">Welcome to WorldBillionaires!</h1>

        <div className="paragraphs">
          <p>
            WorldBillionaires is an annual ranking by documented net worth of
            the wealthiest billionaires in the world, compiled and published in
            March annually by the American business magazine Forbes. The total
            net worth of each individual on the list is estimated and is cited
            in United States dollars, based on their documented assets and
            accounting for debt and other factors. Royalty and dictators whose
            wealth comes from their positions are excluded from these
            lists. This ranking is an index of the wealthiest documented
            individuals, excluding and ranking against those with wealth that is
            not able to be completely ascertained. According to a
            2017 Oxfam report, the top eight billionaires own as much combined
            wealth as "the poorest half of the human race".
          </p>

          <p>
            Jeff Bezos is the world’s wealthiest person for the third year in a
            row, despite giving $36 billion worth of his Amazon stock to his
            ex-wife MacKenzie Bezos as part of their divorce settlement last
            summer.
          </p>

          <p>
            Bill Gates keeps his spot as number two richest, followed by luxury
            goods tycoon Bermard Arnault, who nudged out Warren Buffett to move
            into the number three spot for the first time. Alice Walton, an heir
            to the Walmart fortune, is the richest woman, ranked No.9 at $54.4
            billion. Altogether 241 women made the list, including 7 who share a
            fortune with a spouse, sibling or child. Forbes found 178 newcomers
            hailing from 20 countries, including some, like Zoom Video
            Communications’ founder and CEO Eric Yuan, whose service is booming
            amid our current shelter-in-place reality. The U.S. remains the
            country with the most billionaires, with 614, followed by greater
            China (including Hong Kong and Macao), with 456. To see a list of
            100 billionaires in the world, please click the button below. Please
            click the button below to see the full list of 100 billionaires in
            the world!
          </p>
        </div>

        <div className="button">
          <Link to="/billionaires-list">
            <button>Click</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
