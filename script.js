const ratingBtn = document.querySelectorAll('.rating-button')
const submitBtn = document.querySelector('.submit-btn')
submitBtn.disabled = true;
let selectedRating;

if(submitBtn.disabled){
    submitBtn.classList.add('disabled-submit')
}

ratingBtn.forEach(btn => {
    btn.addEventListener('click',() => {
        ratingBtn.forEach(btn => btn.classList.remove('chosen-rating'))
        btn.classList.toggle('chosen-rating')
        selectedRating = btn.innerText
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled-submit')
    })
});

submitBtn.addEventListener('click',() => {
    const main = document.querySelector('main')
    main.style.animationName = "endMessage"

    setTimeout(() => {
        main.innerHTML = 
        `
        <div class="thankyou-message">
          <img src="images/illustration-thank-you.svg" alt="" aria-hidden="true"/>
          <p>You selected ${selectedRating} out of 5</p>
          <h1>Thank You</h1>
          <p>
             We appreciate you taking the time to give a rating. If you ever need more support, 
             don’t hesitate to get in touch!
          </p>
        </div>
        `
    }, 700);
})