const template = document.createElement('template');
template.innerHTML = `
<style>
.optionContainer {
    width: 300px;
    max-width: 300px;
    min-width: 150px;
}

#stateList {
    display: none;
}

.stateListOptions {
    border: 1px solid black;
    margin-top: 0;
    padding: 0;
    background-color: lightgrey;
    max-height: 300px;
    width: calc(100% + 1rem);
    overflow-y: scroll;
    overflow-x: hidden;
}

input[type="text"] {
    padding: 0.5rem;
    width: 100%;
}

.optionList {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.optionList li {
    line-height: 1.8rem;
    width: 100%;
    padding: 0 1.3rem;
}

.optionList li:hover {
    cursor: pointer;
    background-color: black;
    color: white;
}
        </style>
        <div class="optionContainer">
            <label for="stateSearch">Select a State</label>
            <input type="text" id="stateSearch" value="" />
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

        // this.innerHTML = ``;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        let searchBox = this.shadowRoot.querySelector("#stateSearch");
        console.log(searchBox);
        /*let selectOptions = this.shadowRoot.getElementById('stateSelectList');
        for (var i = 0; i < selectOptions; i++) {
            console.log(option.value);
        }
        let defaultSelectedOption = selectOptions.options[selectOptions.selectedIndex] =
            this.getAttribute('default');
        console.log(defaultSelectedOption);*/

        // this.shadowRoot.querySelector('stateSelectList').options[]
        //     this.getAttribute('default');

        // Element functionality written in here
        this.innerHTML = `${this.getAttribute('default')}`;
    }

    updateSelction() {
        console.log("Selection was changed.");
    }

    connectedCallback() {
        //this.shadowRoot.querySelector('#stateSelectList').addEventListener('click', () => this.updateSelection());
    }

    disconnectedCallback() {
        //this.shadowRoot.querySelector('#stateSelectList').removeEventListener();
    }
}

window.customElements.define('state-select', StateList);