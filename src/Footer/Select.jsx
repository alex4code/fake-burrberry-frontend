import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectWraper = styled.div`
  display: block;
  position: relative;
  margin-bottom: 1rem;
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 48rem) {
    display: inline-block;
    margin-right: 1.5rem;
    margin-bottom: 2rem;
    line-height: 1rem;
    border: 0;
  }
  @media (min-width: 62rem) {
    margin-right: 3rem;
  }
`;

const Select = styled.select`
  position: absolute;
  top: 0;
  padding: 0;
  width: 100%;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #171717;
  text-decoration: none;
  text-align: left;
  border: 0;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  opacity: 0;
`;

const Button = styled.button`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #999999;
  text-decoration: none;
  text-align: left;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const Value = styled.span`color: #171717;`;

class FooterSelect extends Component {
  constructor() {
    super();
    this.state = { countryId: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ countryId: event.target.selectedIndex });
  }

  render() {
    const { options } = this.props;
    return (
      <SelectWraper>
        <Button type="button">
          {this.props.label}: <Value>{options[this.state.countryId]}</Value>
        </Button>
        <Select onClick={this.handleChange}>
          {options.map((option, index) => (
            <option key={index.toString()}>
              {this.props.label}: {option}
            </option>
          ))}
        </Select>
      </SelectWraper>
    );
  }
}

FooterSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FooterSelect.defaultProps = {
  label: 'Language',
};

export default FooterSelect;
