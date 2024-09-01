
const ul = document.querySelector('ul')
const types = ['名前','身長(m)','体重(kg)']
for (const type of types){
    const li = document.createElement('li');
    li.textContent = type;
    ul.appendChild(li);
    const input = document.createElement('input');
    input.id = type
    ul.appendChild(input);
}
function calculate(){
      const name = document.getElementById('名前')
      const height = document.getElementById('身長(m)')
      const weight = document.getElementById('体重(kg)')
      const warukazu = height.value**2;
      const wararerukazu = weight.value;
      const MBI = wararerukazu/warukazu;
      console.log(MBI)
      window.alert(`${name.value}さんのMBIは${MBI}です`)
}
const BUTTON_CLICK_EVENT= document.getElementById('botton');
        BUTTON_CLICK_EVENT.addEventListener('click', () => {
            calculate();
        });
