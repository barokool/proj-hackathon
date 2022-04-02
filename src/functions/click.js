onKeyDown = (event) => {
  if (event.keyCode === 27) {
    this.closeModal();
  }
};

onClickOutside = (event) => {
  if (this.modal && this.modal.contains(event.target)) return;
  this.closeModal();
};

const clickFunction = {
  onKeyDown,
  onClickOutside,
};

export default clickFunction;
