import React, { Component } from 'react';

class Time extends Component {
  secondTime(time) {
    switch(true) {
      case time === 0:
        return '00';
      case time >= 10:
        return time;
      default:
        return `0${ time }`;
    }
  }

  makeTime(hour, minute, second) {
    const sec = this.secondTime(second);
    const min = this.secondTime(minute);

    if (hour === 0) {
      return `${ minute }:${ sec }`;
    }

    return `${ hour }:${ min }:${ sec }`;
  }

  getFullTime() {
    const { start, end } = this.props;
    let remaining = !end ? start : Math.abs(start - end);

    const hour = hour => {
      remaining -= hour * 60 * 60;
      return hour;
    };
    const minute = minute => {
      remaining -= minute * 60;
      return minute;
    };
    const second = () => Math.floor(remaining);

    return this.makeTime(
      hour(Math.floor(remaining / 3600)),
      minute(Math.floor(remaining / 60)),
      second()
    );
  }

  render() {
    return(
      <span>{ this.getFullTime() }</span>
    )
  }
}

export default Time;