class AyudaEtiqueta extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = this.getAttribute("texto") || "Ayuda";
        this.style.color = "#ffffff";
        this.style.backgroundColor = "#007bff";
        this.style.padding = "4px 8px";
        this.style.borderRadius = "4px";
        this.style.fontSize = "0.9rem";
        this.style.fontWeight = "bold";
        this.style.display = "inline-block";
    }
}

window.customElements.define("ayuda-etiqueta", AyudaEtiqueta);

class BotonNotificaciones extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<span style="margin-right: 8px;">🔔</span> Notificaciones`;
        this.style.display = "flex";
        this.style.alignItems = "center";
        this.style.backgroundColor = "#28a745";
        this.style.color = "#ffffff";
        this.style.padding = "8px 12px";
        this.style.border = "none";
        this.style.borderRadius = "5px";
        this.style.cursor = "pointer";
        this.style.fontSize = "1rem";
    }
}

window.customElements.define("boton-notificaciones", BotonNotificaciones);

class CajaTextoClave extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <input type="password" placeholder="Ingrese su clave" id="clave" style="padding: 8px; border-radius: 5px; border: 1px solid #ccc; font-size: 1rem;">
            <button id="enviarClave" style="margin-left: 8px; padding: 8px; border-radius: 5px; background-color: #007bff; color: #fff;">Enviar</button>
        `;

        this.querySelector("#enviarClave").addEventListener("click", () => {
            const clave = this.querySelector("#clave").value;
            const encryptedPassword = btoa(clave); // Encriptación básica 
            console.log("Clave encriptada enviada:", encryptedPassword);
        });
    }
}

window.customElements.define("caja-texto-clave", CajaTextoClave);

class CajaTextoCupon extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<input type="text" placeholder="Cupón de descuento" style="padding: 8px; border-radius: 5px; border: 1px solid #007bff; font-size: 1rem;">`;
    }
}

window.customElements.define("caja-texto-cupon", CajaTextoCupon);