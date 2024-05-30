class TituloDinamico extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }   

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                h1 {
                    color: var(--color-primary);
                    font-size: 2rem;
                    font-weight: 400;
                    margin: 0;
                }
            </style>
            <h1>${this.getAttribute('titulo')}</h1>
        `;
    }
}

customElements.define('titulo-dinamico', TituloDinamico);