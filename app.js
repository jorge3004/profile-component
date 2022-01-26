class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

  }
  get name() {
    return this.getAttribute('name')
  }
  set namdese(val) {
    this.setAttribute("name", val)
  }
  get description() {
    return this.getAttribute('description')
  }
  set description(val) {
    this.setAttribute("description", val)
  }
  // static get observedAttributes() {
  //     return ["count"]
  // }
  // attributeChangedCallback(prop, oldVal, newVal) {
  //     if (prop == "count") {
  //         this.render();
  //     }
  // }

  connectedCallback() {
    this.render();

  }
  render() {
    this.shadow.innerHTML = `
        <style>

        * {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu" sans-serif;
  text-decoration: no;
}

body {
  height: 100vh;
  background: url(bg.jpg) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-card {
  width: 400px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}
.card-header {
  background-color: rgb(158, 126, 126);
  padding: 60px 40px;
}
.pic {
  display: inline-block;
  padding: 8px;
  background: linear-gradient(130deg, #74b9ff, #e66767);
  margin: auto;
  border-radius: 50%;
  background-size: 200% 200%;
  animation: animated-gradient 2s linear infinite;
}
@keyframes animated-gradient {
  25% {
    background-position: left bottom;
  }
  50% {
    background-position: right bottom;
  }
  75% {
    background-position: right top;
  }
  100% {
    background-position: left top;
  }
}

.pic img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  color: antiquewhite;
  font-size: 28 px;
  font-weight: 600;
  margin: 10px 0;
}
.desc {
  font-size: 18px;
  color: #0a5268;
}
.sm {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.sm a {
  color: rgb(244, 248, 248);
  width: 56px;
  font-size: 22px;
  transition: 3s linear;
}
.sm a:hover {
  color: #123455;
}
.contact-btn {
  display: inline-block;
  padding: 12px 50px;
  color: #aca7a7;
  border: 2px solid #915c5c;
  border-radius: 6px;
  margin-top: 16px;
  transition: 0.3s linear;
}
.contact-btn:hover {
  background: #613a3a;
  color: #251414;
}
.card-footer {
  background: #c3c8ca;
  padding: 60px 10px;
}

.numbers {
  display: flex;
  align-items: center;
}
.item {
  flex: 1;
  text-transform: uppercase;
  font-size: 13px;
  color: azure;
}
.item span {
  display: block;
  color: green;
  font-size: 30px;
}
.border {
  width: 1px;
  height: 30px;
  background: #c3c8ca;
}
        </style>
        <div class="profile-card">
            <div class="card-header">
                <div class="pic"><img src="./pic.jpg" alt="profile picture"></div>
                <div class="name">${this.name}</div>
                <div class="desc">${this.description}</div>
                <div class="sm">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-youtube"></a>
                </div>
                <a href="#" class="contact-btn">Contact Me</a>
            </div>
            <div class="card-footer"></div>
        </div>    
        `;

  }

}
customElements.define("profile-card", ProfileCard);