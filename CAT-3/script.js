
const scriptURL = 'https://script.google.com/macros/s/AKfycbziZvmX9Tfkzm8QI1_zFvAaXvWSAU1rCx17AQp76syy0aOYi_3dn-D6j-7tpvEOrVOK/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message send succesfully..."
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })  