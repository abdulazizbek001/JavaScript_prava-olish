const elBody = document.querySelector('body');
const elWrap = document.querySelector('#wrap');
const elTitle = document.querySelector('#title');
const elText = document.querySelector('#text');
const elInput = document.querySelector('#input');
const elBtn = document.querySelector('#btn');
const elSpan = document.querySelector('#span');

// ============================= BODY START ============================= //

elBody.style.display = 'flex';
elBody.style.alignItems = 'center';
elBody.style.justifyContent = 'center';
elBody.style.height = '100vh';
elBody.style.backgroundColor = 'rgb(0 39 255 / 48%)';

// ============================= BODY END ============================= //

// ============================= WRAP START ============================= //

elWrap.style.width = '420px';
elWrap.style.padding = '30px 70px';
elWrap.style.margin = '0 auto';
elWrap.style.backgroundColor = 'white';
elWrap.style.borderRadius = '20px';
elWrap.style.boxShadow = '0px 0px 25px 2px grey';

// ============================= WRAP END ============================= //

// ============================= TITLE START ============================= //

elTitle.style.textAlign = 'center';
elTitle.style.color = 'grey';
elTitle.style.marginBottom = '10px';

// ============================= TITLE END ============================= //

// ============================= TEXT START ============================= //

elText.style.textAlign = 'center';

// ============================= TEXT END ============================= //

// ============================= INPUT START ============================= //

elInput.style.width = '76px';
elInput.style.marginLeft = '161px';
elInput.style.padding = '10px 5px';
elInput.style.outline = 'none'
elInput.style.borderRadius = '5px';
elInput.style.border = '1px solid grey';
elInput.style.marginBottom = '10px';

// ============================= INPUT END ============================= //

// ============================= BTN START ============================= //

elBtn.addEventListener('click', function() {
    if (elInput.value >= 18 ) {
        elSpan.style.display = 'flex';
        elSpan.style.padding = '10px 13px 10px 15px';
        elSpan.textContent = 'Siz prava olishingiz mumkin 😎';
    }else if (elInput.value <= 18) {
        elSpan.style.display = 'flex';
        elSpan.style.padding = '10px 13px 10px 39px';
        elSpan.textContent = `Sizga hali ${18 - elInput.value} yil bor ekan prava olish uchun 😟`;
    }
}) 

elBtn.style.padding = '8px 14px';
elBtn.style.marginLeft = '170px';
elBtn.style.border = 'none';
elBtn.style.textAlign = 'center';
elBtn.style.borderRadius = '10px';
elBtn.style.backgroundColor = 'green';
elBtn.style.color = 'white';
elBtn.style.cursor = 'pointer';
elBtn.style.boxShadow = '0px 0px 0px 5px #0080004d';
elBtn.style.marginBottom = '20px';

// ============================= BTN END ============================= //

// ============================= SPAN START ============================= //

elSpan.style.width = '212px';
elSpan.style.color = 'green';
elSpan.style.marginLeft = '85px';
elSpan.style.backgroundColor = '#80808042';
elSpan.style.borderRadius = '10px';
elSpan.style.textAlign = 'center';
elSpan.style.display = 'none';

// ============================= SPAN END ============================= //