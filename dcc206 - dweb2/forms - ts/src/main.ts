import './style.css'

const app: HTMLDivElement = document.querySelector("#app")!;
console.log(app);
// app.textContent = "hello";

const h1: HTMLHeadingElement = document.createElement("h1");
h1.textContent = "DCC202 - Aula 14: Ian Felix";
app.appendChild(h1);

const form: HTMLFormElement = montaForm();
app.appendChild(form);

form.addEventListener("submit", trataFormulario);

const ul = document.createElement("ul") as HTMLUListElement;
app.append(ul);

function montaForm(): HTMLFormElement {
  const newForm: HTMLFormElement = document.createElement("form");

  montaInput("numeroA", 2, newForm);
  montaInput("numeroB", 3, newForm);

  const envio = document.createElement("button");
  envio.innerText = "Somar"
  newForm.appendChild(envio);

  return newForm;
}

function montaInput(name: string, value: number, targetForm: HTMLFormElement) {
  const numeroInput: HTMLInputElement = document.createElement("input");
  numeroInput.name = name;
  numeroInput.type = "number";
  numeroInput.valueAsNumber = value;
  targetForm.appendChild(numeroInput);
}

function trataFormulario(this: HTMLFormElement, ev:SubmitEvent) {
  ev.preventDefault();
  console.log("Submit capturado!");
  const A = Number(this.numeroA.value);
  const B = this.numeroB.valueAsNumber;
  const li = document.createElement("li");
  li.textContent = String(A+B);
  ul.append(li);
}