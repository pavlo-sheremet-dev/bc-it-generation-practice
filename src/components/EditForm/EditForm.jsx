import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
<<<<<<< HEAD
=======
import { Component } from 'react';
>>>>>>> 29c3a2f2984ff0252c69ba0fed637f67962ca7ae

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';

<<<<<<< HEAD
export const EditForm = () => {
  return <h2>Edit Form</h2>;
};
=======
export class EditForm extends Component {
  onSubmitEdit = ev => {
    const { editToDo } = this.props;
    ev.preventDefault();
    this.props.editingToDo({
      id: editToDo.id,
      text: ev.target.elements.edit.value,
    });
  };
  render() {
    return (
      <>
        <SearchFormStyled onSubmit={this.onSubmitEdit}>
          <BtnEdit type="submit">
            <RiSaveLine size="16px" />
          </BtnEdit>
          <FormBtn type="button" onClick={() => this.props.toggleEditForm()}>
            <MdOutlineCancel size="16px" />
          </FormBtn>
          <InputSearch
            placeholder="What do you want to change"
            name="edit"
            required
            autoFocus
            /*           value={this.state.text} */
            defaultValue={this.props.editToDo.text}
            onChange={this.handleInput}
          />
        </SearchFormStyled>
      </>
    );
  }
}
>>>>>>> 29c3a2f2984ff0252c69ba0fed637f67962ca7ae
