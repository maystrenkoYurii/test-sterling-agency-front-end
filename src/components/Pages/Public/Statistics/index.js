import React, { Component } from 'react';

import Wrapper from '../../../../containers/Pages/Wrapper/index';

import OnlineTimeline from '../../../../containers/Pages/Public/Statistics/OnlineTimeline';

import './styles.css';

class Statistics extends Component {
  render() {
    return (
      <Wrapper>
        <div className="statistics">
          <div className="statistics_online">
            <OnlineTimeline />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Statistics;
