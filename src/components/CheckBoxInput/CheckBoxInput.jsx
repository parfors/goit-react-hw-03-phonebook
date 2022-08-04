import { Component } from 'react';
import { InputCheckStyled, LabeleRadio } from 'components';
import PropTypes from 'prop-types';

export class CheckBoxInput extends Component {
  state = {
    agreenment: false,
  };
  changeHandler = () => {
    this.setState(prevState => {
      return {
        agreenment: !prevState.agreenment,
      };
    });
    this.props.onChange();
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  render() {
    return (
      <>
        <LabeleRadio>
          <InputCheckStyled
            onChange={this.changeHandler}
            type="checkBox"
            checked={this.state.agreenment}
          />
          I agree
        </LabeleRadio>
      </>
    );
  }
}
