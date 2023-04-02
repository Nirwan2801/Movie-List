class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            background-color: rgb(44, 51, 51);
            ;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
        h2 {
            padding: 16px;
        }
        </style>

        <h2>TRENDING MOVIES</h2>`;
    }
}

customElements.define('app-bar', AppBar);