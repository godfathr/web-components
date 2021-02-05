const template = document.createElement('template');
template.innerHTML = `
<link href="styles/stateSelectDropdown.css" rel="stylesheet" />
        <div class="optionContainer">
            <label for="stateSearch">Select a State</label>
            <!--<input type="text" id="stateSearch" value="" />-->
            <div id="stateSearch"></div>
            <div id="stateList" class="stateListOptions">
                <ul class="optionList">
                    <li id="AL" class="optionItem">Alabama</li>
                    <li id="AK" class="optionItem">Alaska</li>
                    <li id="AZ" class="optionItem">Arizona</li>
                    <li id="AR" class="optionItem">Arkansas</li>
                    <li id="CA" class="optionItem">California</li>
                    <li id="CO" class="optionItem">Colorado</li>
                    <li id="CT" class="optionItem">Connecticut</li>
                    <li id="DE" class="optionItem">Delaware</li>
                    <li id="FL" class="optionItem">Florida</li>
                    <li id="GA" class="optionItem">Georgia</li>
                    <li id="HI" class="optionItem">Hawaii</li>
                    <li id="ID" class="optionItem">Idaho</li>
                    <li id="IL" class="optionItem">Illinois</li>
                    <li id="IN" class="optionItem">Indiana</li>
                    <li id="IA" class="optionItem">Iowa</li>
                    <li id="KS" class="optionItem">Kansas</li>
                    <li id="KY" class="optionItem">Kentucky</li>
                    <li id="LA" class="optionItem">Louisiana</li>
                    <li id="ME" class="optionItem">Maine</li>
                    <li id="MD" class="optionItem">Maryland</li>
                    <li id="MA" class="optionItem">Massachusetts</li>
                    <li id="MI" class="optionItem">Michigan</li>
                    <li id="MN" class="optionItem">Minnesota</li>
                    <li id="MS" class="optionItem">Mississippi</li>
                    <li id="MO" class="optionItem">Missouri</li>
                    <li id="MT" class="optionItem">Montana</li>
                    <li id="NE" class="optionItem">Nebraska</li>
                    <li id="NV" class="optionItem">Nevada</li>
                    <li id="NH" class="optionItem">New Hampshire</li>
                    <li id="NJ" class="optionItem">New Jersey</li>
                    <li id="NM" class="optionItem">New Mexico</li>
                    <li id="NY" class="optionItem">New York</li>
                    <li id="NC" class="optionItem">North Carolina</li>
                    <li id="ND" class="optionItem">North Dakota</li>
                    <li id="OH" class="optionItem">Ohio</li>
                    <li id="OK" class="optionItem">Oklahoma</li>
                    <li id="OR" class="optionItem">Oregon</li>
                    <li id="PA" class="optionItem">Pennsylvania</li>
                    <li id="RI" class="optionItem">Rhode Island</li>
                    <li id="SC" class="optionItem">South Carolina</li>
                    <li id="SD" class="optionItem">South Dakota</li>
                    <li id="TN" class="optionItem">Tennessee</li>
                    <li id="TX" class="optionItem">Texas</li>
                    <li id="UT" class="optionItem">Utah</li>
                    <li id="VT" class="optionItem">Vermont</li>
                    <li id="VA" class="optionItem">Virginia</li>
                    <li id="WA" class="optionItem">Washington</li>
                    <li id="WV" class="optionItem">West Virginia</li>
                    <li id="WI" class="optionItem">Wisconsin</li>
                    <li id="WY" class="optionItem">Wyoming</li>
                </ul>
            </div>
        </div>
`;

class StateList extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        this.innerHTML = `<style>h1 {font-family:Verdana}</style>`;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // define variables
        const showValues = true;
        let searchBox = this.shadowRoot.querySelector("#stateSearch");
        let values = this.shadowRoot.querySelector("#stateList");
        let optionValues = this.shadowRoot.querySelectorAll(".optionItem");
        let defaultSelecte = this.getAttribute('default');

        // Set the default selected value
        //this.shadowRoot.querySelector("#stateSearch").value = this.getAttribute('default');
        this.shadowRoot.querySelector("#stateSearch").innerHTML = `<p>` + this.getAttribute('default'); + `</p>`;
    }

    updateSelection(selectedState) {
        this.searchBox = this.shadowRoot.querySelector("#stateSearch");
        this.searchBox.value = selectedState;

        // collapse the option list
        this.toggleList();
    }

    toggleList() {
        // flip the switch on the showValues boolean
        this.showValues = !this.showValues;

        // get the element that contains the list of options
        const list = this.shadowRoot.querySelector("#stateList");

        // apply css styles to display or hide the list
        if (this.showValues) {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#stateSearch").addEventListener('click', () => this.toggleList());
        let optionValues = this.shadowRoot.querySelectorAll(".optionItem");

        for (var i = 0; i < optionValues.length; i++) {
            let selectedState = optionValues[i].innerText;
            optionValues[i].addEventListener('click', () => this.updateSelection(selectedState));
        }
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector("#stateSearch").removeEventListener();

        let optionValues = this.shadowRoot.querySelectorAll(".optionItem");
        for (var i = 0; i < optionValues.length; i++) {
            let selectedState = optionValues[i].innerText;
            optionValues[i].removeEventListener();
        }
    }
}

window.customElements.define('state-select', StateList);