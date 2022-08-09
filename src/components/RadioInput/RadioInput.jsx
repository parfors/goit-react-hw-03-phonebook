import { Component } from 'react';
import { InputRadioStyled, LabeleRadio } from 'components';
import PropTypes from 'prop-types';

export class RadioInput extends Component {
  state = {
    color: '',
  };
  onChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.props.onChangeBtn(event.currentTarget.value);
  };

  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageData) {
      const localData = JSON.parse(localStorage.getItem('contacts'));
      this.setState({
        color: localData.color,
      });
    }
  }

  static propTypes = {
    onChange: PropTypes.func,
  };

  render() {
    return (
      <>
        <LabeleRadio>
          <InputRadioStyled
            name="color"
            type="radio"
            checked={this.state.color === 'green'}
            onChange={this.onChange}
            value="green"
          />
          Green
        </LabeleRadio>
        <LabeleRadio>
          <InputRadioStyled
            name="color"
            type="radio"
            checked={this.state.color === 'red'}
            onChange={this.onChange}
            value="red"
          />
          Red
        </LabeleRadio>
        <LabeleRadio>
          <InputRadioStyled
            name="color"
            type="radio"
            checked={this.state.color === 'grey'}
            onChange={this.onChange}
            value="grey"
          />
          Grey
        </LabeleRadio>
      </>
    );
  }
}
