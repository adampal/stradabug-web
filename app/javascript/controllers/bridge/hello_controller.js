import { BridgeComponent, BridgeElement } from "@hotwired/strada"

export default class extends BridgeComponent {
  static component = "hello"
  static targets = [ "output" ]

  connect() {
    this.appendMessage(`Strada connected at ${new Date().toLocaleTimeString()}`)
    this.send("connect", { }, () => {
      this.appendMessage(`Strada got a response at ${new Date().toLocaleTimeString()}`)
    })
  }

  appendMessage(message) {
    let li = document.createElement('li')
    li.innerHTML = message
    this.outputTarget.appendChild(li)
  }
}
