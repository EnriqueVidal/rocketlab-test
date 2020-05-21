import * as React from 'react';
import TypeAhead from '../components/TypeAhead';

const states = [
  'New South Wales',
  'Victoria',
  'Queensland',
  'Western Australia',
  'South Australia',
  'Tasmania',
];

const Home = () => (
  <div className="content is-fluid">
    <form className="form">
      <div className="field">
        <label className="label">State</label>
        <div className="control">
          <TypeAhead options={states} placeholder="Search State or Territory" />
        </div>
      </div>
    </form>
  </div>
);

export default Home;