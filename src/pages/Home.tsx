import * as React from 'react';
import Bar from '../components/Bar';
import ThinButton from '../components/ThinButton';
import TypeAhead from '../components/TypeAhead';
import { states } from '../data/au-states';

const Home = () => (
  <div className="page">
    <Bar title="Create Contact">
      <div className="buttons is-right">
        <ThinButton primary inverted>Cancel</ThinButton>
        <ThinButton primary>Save</ThinButton>
      </div>
    </Bar>
    <div className="content is-fluid">
      <form className="form">
        <div className="field">
          <label className="label" htmlFor="states">State</label>
          <div className="control">
            <TypeAhead id="states" options={states} placeholder="Search State or Territory" />
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Home;
