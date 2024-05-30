class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const autor = document.createElement('span');
        autor.textContent = `By ${this.getAttribute("autor") || "Anonymous"}`;

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("urlTitle") || "#";

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute("newsContent");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute("newsImage") || "https://via.placeholder.com/150";
        newsImage.alt = this.getAttribute("newsImageAlt") || "News Image";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', sans-serif;
            }
            
            .card{
                width: 100%;
                box-shadow: 9px 9px 16px -8px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 16px -8px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 16px -8px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > span{
                font-weight: 300;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: 500;
            }     
            
            .card_left > p{
                color: grey;
            }
        `;
        return style;
    }
}

customElements.define('card-news', CardNews);