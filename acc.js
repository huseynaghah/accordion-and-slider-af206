let mainDiv = document.querySelectorAll('.main');



mainDiv.forEach(main =>{

    main.addEventListener('click',(e)=>{
        // e.stopPropagation()
        // console.log(e.target.nextElementSibling.scrollHeight);

        mainDiv.forEach((main)=>{
            main.nextElementSibling.style.height = 0;
            main.children[1].style.transform = "rotate(0deg)"
        })

       const chevron =  e.currentTarget.children[1];
        
        if (e.currentTarget.nextElementSibling.style.height == 0 || e.currentTarget.nextElementSibling.style.height == "0px") {
             e.currentTarget.nextElementSibling.style.height = e.currentTarget.nextElementSibling.scrollHeight + "px";
             chevron.style.transform = "rotate(180deg)"
              
        }else{
             e.currentTarget.nextElementSibling.style.height = 0;
            chevron.style.transform = "rotate(0deg)"
        }
    
    
       
        
        // e.target.nextElementSibling.classList.toggle('open');
    })

})
