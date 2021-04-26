(function() {
 let datepicker = document.createElement("datepicker");
 datepicker.innerHTML = `
 <input type="text" id="datepicker" autocomplete="off"></input>
 `;
 class DatePicker extends HTMLElement {
  constructor() {
  alert('dupa!!!')
      super();
      this.appendChild(datepicker.content.cloneNode(true));
      this.addEventListener("click", event => {
      var event = new Event("onClick");
      this.dispatchEvent(event);
      });
      this._props = {};
      }
      onCustomWidgetBeforeUpdate(changedProperties) {
        this._props = { ...this._props, ...changedProperties };
      }
      onCustomWidgetAfterUpdate(changedProperties) {

      }
  }
  customElements.define("com-sap-sample-reginek-datepicker", DatePicker);
})();