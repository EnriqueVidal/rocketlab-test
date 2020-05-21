import * as React from 'react';
import TypeAhead from '../components/TypeAhead';
import { states } from '../data/au-states';

const Home = () => (
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
);

export default Home;
