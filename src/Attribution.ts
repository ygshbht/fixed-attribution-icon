import attributionIcon from "./icon";

export default class FixedAttributionIcon {
  domElement!: HTMLDivElement;
  private attributionLinkElement!: HTMLAnchorElement;

  constructor(private attributionLink?: string) {
    this.createDomElement();
    this.addToDom();
    this.handleResize();
    this.addResizeListener();
  }

  private createDomElement() {
    const container = document.createElement("div");

    const styles = {
      width: "50px",
      height: "50px",
      backgroundColor: "white",
      zIndex: "100",
      boxSizing: "content-box",
      padding: "2px",
      position: "fixed",
      borderRadius: "100%",
      bottom: "30px",
      right: "30px",
    } as CSSStyleDeclaration;

    this.createAttributionElement();
    container.appendChild(this.attributionLinkElement);
    this.setIcon(attributionIcon, true);
    this.domElement = container;
    this.domElement.title = "Attribution";
    this.setElementStyles(styles);
  }

  //TODO: set styles type to object
  private setElementStyles = (styles: any) => {
    for (let key in styles) {
      //   container.style.setProperty(key, styles[key]);
      this.domElement.style[key as any] = styles[key];
    }
  };
  setStyles = this.setElementStyles;

  //   TODO: make public
  private setIcon(icon: HTMLElement, addWrapper = false) {
    this.attributionLinkElement.innerHTML = "";
    if (addWrapper) {
      const container = document.createElement("div");
      container.style.width = "100%";
      container.style.height = "100%";
      container.appendChild(icon);
      this.attributionLinkElement.appendChild(container);
    } else {
      this.attributionLinkElement.appendChild(icon);
    }
  }

  setSize = (width: number, height: number) => {
    this.domElement.style.width = `${width}px`;
    this.domElement.style.height = `${height}px`;
  };

  private createAttributionElement() {
    const link = document.createElement("a");
    if (this.attributionLink) {
      link.href = this.attributionLink;
    }
    this.attributionLinkElement = link;
  }

  setAttributionLink = (attributionLink: string) => {
    this.attributionLinkElement.href = attributionLink;
    // container.appendChild(link);
  };

  addToDom() {
    document.body.appendChild(this.domElement);
  }

  removeFromDom() {
    document.body.removeChild(this.domElement);
  }

  removeResizeListener() {
    window.removeEventListener("resize", this.handleResize);
  }

  addResizeListener() {
    window.addEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    let bottomRight = [30, 30];
    if (innerWidth > 1200) {
      this.setSize(50, 50);
    } else if (innerWidth > 900) {
      this.setSize(40, 40);
      bottomRight = [25, 25];
    } else if (innerWidth > 600) {
      this.setSize(30, 30);
      bottomRight = [20, 20];
    } else {
      this.setSize(25, 25);
      bottomRight = [15, 15];
    }
    this.setElementStyles({
      bottom: `${bottomRight[0]}px`,
      right: `${bottomRight[1]}px`,
    });
  };
}
