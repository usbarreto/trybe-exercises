import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newAction } from '../actions';

class PersonalFieldset extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Informações pessoais</legend>
        <label>
          Nome:
        <input
            name="name"
            type="text"
            onChange={ handleChange }
          />
        </label>
        <label>
          Email:
        <input
            name="email"
            type="email"
            onChange={ handleChange }
          />
        </label>
        <label>
          Idade:
          <select
            name="age"
            defaultValue=""
            onChange={ handleChange }
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ 
    handleChange: state => dispatch(newAction(state))});

export default connect(null, mapDispatchToProps)(PersonalFieldset);
