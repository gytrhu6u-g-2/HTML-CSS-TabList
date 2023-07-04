document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs li a");
    const contents = document.querySelectorAll(".contents");
  
    console.log(tabs);
    console.log(contents);

    for (let i=0;i<tabs.length;i++) {
        tabs[i].addEventListener("click", (e) => {
            // aタグの画面を更新させない？
            e.preventDefault();

            for (j=0;j<tabs.length;j++) {
                tabs[j].classList.remove("active");
                contents[j].classList.remove("active");
            }
            // for (j=0;j<tabs.length;j++) {
            //     contents[j].classList.remove("active");
            // }
            tabs[i].classList.add("active");
            contents[i].classList.add("active");
        })
    }

  });