import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['clickMe', 'reset'];

  connect() {
    console.log("Hello from your first Stimulus controller");
  }

  disable() {
    const button = this.clickMeTarget;
    button.innerText = 'Bingo!';
    button.setAttribute('disabled', '');

    // Show the reset button!
    const resetButton = this.resetTarget;
    resetButton.classList.remove('d-none');
  }

  reset() {
    const button = this.clickMeTarget;
    button.innerText = 'Click me!';
    button.removeAttribute('disabled');

    // Hide the reset button!
    const resetButton = this.resetTarget;
    resetButton.classList.add('d-none');
  }
}
